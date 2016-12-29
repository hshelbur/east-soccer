"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var WeatherUndergroundWidget = function WeatherUndergroundWidget() {
	return React.createElement(
		"span",
		{ style: {
				display: 'block !important',
				width: "320px",
				textAlign: "center",
				fontFamily: "sans-serif",
				fontSize: "12px"
			} },
		React.createElement(
			"a",
			{ href: "http://www.wunderground.com/cgi-bin/findweather/getForecast?query=zmw:27705.1.99999&bannertypeclick=wu_clean2day", title: "Durham, North Carolina Weather Forecast", target: "_blank" },
			React.createElement("img", { src: "http://weathersticker.wunderground.com/weathersticker/cgi-bin/banner/ban/wxBanner?bannertype=wu_clean2day_cond&airportcode=KIGX&ForcedCity=Durham&ForcedState=NC&zip=27705&language=EN", alt: "Find more about Weather in Durham, NC", width: "600" })
		),
		React.createElement("br", null),
		React.createElement(
			"a",
			{ href: "http://www.wunderground.com/cgi-bin/findweather/getForecast?query=zmw:27705.1.99999&bannertypeclick=wu_clean2day", title: "Get latest Weather Forecast updates", style: { fontFamily: "sans-serif", fontSize: "12px" }, target: "_blank" },
			"Click for weather forecast"
		)
	);
};

var Forum = function Forum() {
	return React.createElement(
		"div",
		{ className: "col-md-9" },
		React.createElement(
			"form",
			null,
			React.createElement(
				"div",
				{ className: "form-group" },
				React.createElement("textarea", { className: "form-control status-box", rows: "2", placeholder: "What's on your mind?" })
			)
		),
		React.createElement(
			"div",
			{ className: "button-group pull-right" },
			React.createElement(
				"p",
				{ className: "counter" },
				"140"
			),
			React.createElement(
				"a",
				{ href: "#", className: "btn btn-primary" },
				"Post"
			)
		),
		React.createElement("ul", { className: "posts" })
	);
};

var Tabs = function Tabs(props) {
	return React.createElement(
		"div",
		null,
		React.createElement(
			"ul",
			{ className: "nav nav-tabs", role: "tablist" },
			props.children
		),
		React.createElement(
			"div",
			{ className: "tab-content" },
			React.Children.map(props.children, function (tab) {
				var klass = "tab-pane active";
				if (!tab.props.active) {
					klass = "tab-pane";
				}

				return React.createElement(
					"div",
					{ className: klass, id: tab.props.label.replace(/\s/g, '') },
					tab.props.children
				);
			})
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

Tabs.Tab = function (props) {
	return React.createElement(
		"li",
		{ className: props.active ? "active" : "" },
		React.createElement(
			"a",
			{ href: "#" + props.label.replace(/\s/g, ''), role: "tab", "data-toggle": "tab" },
			props.label
		)
	);
};

Tabs.Tab.propTypes = {
	active: React.PropTypes.bool,
	label: React.PropTypes.string.isRequired
};

var CreateContactForm = function (_React$Component) {
	_inherits(CreateContactForm, _React$Component);

	function CreateContactForm(props) {
		_classCallCheck(this, CreateContactForm);

		var _this = _possibleConstructorReturn(this, (CreateContactForm.__proto__ || Object.getPrototypeOf(CreateContactForm)).call(this, props));

		_this.state = { name: '', phone: '', email: '' };
		return _this;
	}

	_createClass(CreateContactForm, [{
		key: "render",
		value: function render() {
			var _this2 = this;

			var contact = { name: this.state.name, phone: this.state.phone, email: this.state.email };

			return React.createElement(
				"div",
				null,
				React.createElement(
					"form",
					{ className: "ContactForm" },
					React.createElement("input", { type: "text", placeholder: "Name", value: this.state.name, onChange: function onChange(e) {
							return _this2.setState({ name: e.target.value });
						} }),
					React.createElement("input", { type: "text", placeholder: "Phone", value: this.state.phone, onChange: function onChange(e) {
							return _this2.setState({ phone: e.target.value });
						} }),
					React.createElement("input", { type: "text", placeholder: "E-Mail", value: this.state.email, onChange: function onChange(e) {
							return _this2.setState({ email: e.target.value });
						} }),
					React.createElement(Button, { onClick: function onClick() {
							return _this2.props.addNewContact(contact);
						}, label: "Add Contact" })
				)
			);
		}
	}]);

	return CreateContactForm;
}(React.Component);

var ContactList = function (_React$Component2) {
	_inherits(ContactList, _React$Component2);

	function ContactList() {
		_classCallCheck(this, ContactList);

		var _this3 = _possibleConstructorReturn(this, (ContactList.__proto__ || Object.getPrototypeOf(ContactList)).call(this));

		_this3.state = { contacts: [] };
		_this3.count = 0;
		_this3.addNewContact = _this3.addNewContact.bind(_this3);
		return _this3;
	}

	_createClass(ContactList, [{
		key: "addNewContact",
		value: function addNewContact(contact) {
			this.count++;
			contact.id = this.count;
			var newContacts = this.state.contacts.concat(contact);
			this.setState({ contacts: newContacts });
		}
	}, {
		key: "render",
		value: function render() {
			var contacts = this.state.contacts;


			return React.createElement(
				"div",
				null,
				React.createElement(CreateContactForm, { addNewContact: this.addNewContact }),
				contacts.map(function (contact) {
					return React.createElement(ContactProfile, { name: contact.name, phone: contact.phone, email: contact.email });
				})
			);
		}
	}]);

	return ContactList;
}(React.Component);

var ContactProfile = function ContactProfile(props) {
	return React.createElement(
		"div",
		{ className: "col-md-6" },
		React.createElement(
			"div",
			{ className: "well well-sm" },
			React.createElement(
				"p",
				null,
				props.name
			),
			React.createElement(
				"p",
				null,
				"Phone: ",
				props.phone
			),
			React.createElement(
				"p",
				null,
				"E-Mail: ",
				props.email
			)
		)
	);
};

var Stats = function Stats() {
	return React.createElement("iframe", { src: "https://docs.google.com/spreadsheets/d/1lucBasv0plhda3L5S4SFnxgQ8q__Jj_JVguCX228LyE/pubhtml?widget=true&headers=false", width: "700", height: "400" });
};

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

var MainPage = function MainPage() {
	return React.createElement(
		"div",
		null,
		React.createElement(Masthead, { label: "Voyager Academy Men's Soccer" }),
		React.createElement(
			"div",
			{ className: "container" },
			React.createElement(
				"div",
				{ className: "col-md-3" },
				React.createElement("img", { className: "text-right", src: "http://files.milesplit.us/team_logos/28840", height: "240", width: "240" })
			),
			React.createElement(
				"div",
				{ className: "col-md-9" },
				React.createElement(
					"div",
					null,
					React.createElement(
						Tabs,
						null,
						React.createElement(
							Tabs.Tab,
							{ active: true, label: "Schedule" },
							React.createElement("iframe", { src: "https://www.google.com/calendar/embed?showCalendars=0&mode=WEEK&height=600&wkst=1&bgcolor=%23FFFFFF&src=rc2dstbajg2j4674poicoo9g74%40group.calendar.google.com&color=%2329527A&ctz=America%2FNew_York", style: { border: "solid 1px #777" }, width: "600", height: "400", frameBorder: "0", scrolling: "no" })
						),
						React.createElement(
							Tabs.Tab,
							{ label: "Statsheets" },
							React.createElement(Stats, null)
						),
						React.createElement(
							Tabs.Tab,
							{ label: "Weather Forecast" },
							React.createElement(WeatherUndergroundWidget, null)
						),
						React.createElement(
							Tabs.Tab,
							{ label: "Contacts" },
							React.createElement(ContactList, null)
						),
						React.createElement(
							Tabs.Tab,
							{ label: "Forum" },
							React.createElement(Forum, null)
						)
					)
				)
			)
		)
	);
};

ReactDOM.render(React.createElement(MainPage, null), document.getElementById("app"));