"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Masthead = function Masthead(props) {
	return React.createElement(
		"div",
		{ className: "container fluid" },
		React.createElement(
			"div",
			{ className: "jumbotron" },
			React.createElement(
				"h2",
				{ className: "text-center" },
				props.label
			)
		)
	);
};

var Button = function Button(props) {
	return React.createElement(
		"button",
		{ onClick: props.onClick, type: "button", className: "btn btn-primary", "data-toggle": "button", "aria-pressed": "false", autoComplete: "off" },
		props.label
	);
};

var PlayerProfile = function PlayerProfile(props) {
	return React.createElement(
		"div",
		{ className: "well well-sm" },
		React.createElement(
			"p",
			{ className: "text-center" },
			"#",
			props.number,
			" ",
			props.name
		),
		React.createElement("img", { className: "col-md-3", src: "http://www.alvechurchlions.com/wp-content/uploads/2012/09/player_blank.jpeg", height: "80", width: "80" }),
		React.createElement(
			"p",
			null,
			"Year: ",
			props.year
		),
		React.createElement(
			"p",
			null,
			"Position: ",
			props.position
		),
		React.createElement(Button, { onClick: props.onClick, label: props.selected ? "Remove Player" : "Add Player to Starting 11" })
	);
};

var CreatePlayerForm = function (_React$Component) {
	_inherits(CreatePlayerForm, _React$Component);

	function CreatePlayerForm(props) {
		_classCallCheck(this, CreatePlayerForm);

		var _this = _possibleConstructorReturn(this, (CreatePlayerForm.__proto__ || Object.getPrototypeOf(CreatePlayerForm)).call(this, props));

		_this.state = { number: '', name: '', year: '', position: '' };
		return _this;
	}

	_createClass(CreatePlayerForm, [{
		key: "render",
		value: function render() {
			var _this2 = this;

			var player = { number: this.state.number, name: this.state.name, year: this.state.year, position: this.state.position };

			return React.createElement(
				"div",
				{ className: "well well-sm" },
				React.createElement(
					"form",
					{ className: "PlayerForm" },
					React.createElement("input", { type: "text", placeholder: "Number", value: this.state.number, onChange: function onChange(e) {
							return _this2.setState({ number: e.target.value });
						} }),
					React.createElement("input", { type: "text", placeholder: "Name", value: this.state.name, onChange: function onChange(e) {
							return _this2.setState({ name: e.target.value });
						} }),
					React.createElement("input", { type: "text", placeholder: "Year", value: this.state.year, onChange: function onChange(e) {
							return _this2.setState({ year: e.target.value });
						} }),
					React.createElement("input", { type: "text", placeholder: "Position", value: this.state.position, onChange: function onChange(e) {
							return _this2.setState({ position: e.target.value });
						} }),
					React.createElement(Button, { onClick: function onClick() {
							return _this2.props.addNewPlayer(player);
						}, label: "Add New Player" })
				)
			);
		}
	}]);

	return CreatePlayerForm;
}(React.Component);

var PlayerRoster = function (_React$Component2) {
	_inherits(PlayerRoster, _React$Component2);

	function PlayerRoster() {
		_classCallCheck(this, PlayerRoster);

		var _this3 = _possibleConstructorReturn(this, (PlayerRoster.__proto__ || Object.getPrototypeOf(PlayerRoster)).call(this));

		_this3.state = { players: [] };
		_this3.count = 0;
		_this3.addNewPlayer = _this3.addNewPlayer.bind(_this3);
		return _this3;
	}

	_createClass(PlayerRoster, [{
		key: "addNewPlayer",
		value: function addNewPlayer(player) {
			this.count++;
			player.id = this.count;
			var newPlayers = this.state.players.concat(player);
			this.setState({ players: newPlayers });
		}
	}, {
		key: "render",
		value: function render() {
			return React.createElement(
				"div",
				null,
				React.createElement(CreatePlayerForm, { addNewPlayer: this.addNewPlayer }),
				React.createElement(PlayerLists, { players: this.state.players })
			);
		}
	}]);

	return PlayerRoster;
}(React.Component);

var PlayerLists = function (_React$Component3) {
	_inherits(PlayerLists, _React$Component3);

	function PlayerLists() {
		_classCallCheck(this, PlayerLists);

		var _this4 = _possibleConstructorReturn(this, (PlayerLists.__proto__ || Object.getPrototypeOf(PlayerLists)).call(this));

		_this4.state = {
			selectedIds: []
		};
		_this4.addPlayer = _this4.addPlayer.bind(_this4);
		_this4.removePlayer = _this4.removePlayer.bind(_this4);
		return _this4;
	}

	_createClass(PlayerLists, [{
		key: "addPlayer",
		value: function addPlayer(player) {
			var selectedIds = this.state.selectedIds.concat(player.id);
			this.setState({ selectedIds: selectedIds });
		}
	}, {
		key: "removePlayer",
		value: function removePlayer(player) {
			var selectedIds = this.state.selectedIds.slice();
			selectedIds.splice(selectedIds.indexOf(player.id), 1);
			this.setState({ selectedIds: selectedIds });
		}
	}, {
		key: "render",
		value: function render() {
			var _this5 = this;

			var players = this.props.players;
			var selectedIds = this.state.selectedIds;


			var unselected = players.filter(function (player) {
				return selectedIds.indexOf(player.id) < 0;
			});
			var selected = players.filter(function (player) {
				return selectedIds.indexOf(player.id) >= 0;
			});

			return React.createElement(
				"div",
				null,
				React.createElement(
					"div",
					{ className: "col-md-4" },
					React.createElement(
						"h4",
						{ className: "text-center" },
						"Roster"
					),
					unselected.map(function (player) {
						return React.createElement(PlayerProfile, { onClick: function onClick() {
								return _this5.addPlayer(player);
							}, name: player.name, year: player.year, position: player.position, number: player.number });
					})
				),
				React.createElement(
					"div",
					{ className: "col-md-4" },
					React.createElement(
						"h4",
						{ className: "text-center" },
						"Selected Players"
					),
					selected.map(function (player) {
						return React.createElement(PlayerProfile, { onClick: function onClick() {
								return _this5.removePlayer(player);
							}, selected: true, name: player.name, year: player.year, position: player.position, number: player.number });
					})
				)
			);
		}
	}]);

	return PlayerLists;
}(React.Component);

ReactDOM.render(React.createElement(
	"div",
	null,
	React.createElement(Masthead, { label: "Voyager Academy Men's Soccer" }),
	React.createElement(PlayerRoster, null)
), document.getElementById("app"));