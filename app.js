
const WeatherUndergroundWidget = React.createClass({

	render: function() {
		return <span style={{
			display: 'block !important', 
			width: "320px",
			textAlign: "center",
			fontFamily: "sans-serif",
			fontSize: "12px"
		}}>
			<a href="http://www.wunderground.com/cgi-bin/findweather/getForecast?query=zmw:27705.1.99999&bannertypeclick=wu_clean2day" title="Durham, North Carolina Weather Forecast" target="_blank">
				<img src="http://weathersticker.wunderground.com/weathersticker/cgi-bin/banner/ban/wxBanner?bannertype=wu_clean2day_cond&airportcode=KIGX&ForcedCity=Durham&ForcedState=NC&zip=27705&language=EN" alt="Find more about Weather in Durham, NC" width="600" />
			</a><br />
			<a href="http://www.wunderground.com/cgi-bin/findweather/getForecast?query=zmw:27705.1.99999&bannertypeclick=wu_clean2day" title="Get latest Weather Forecast updates" style={{fontFamily: "sans-serif", fontSize: "12px"}} target="_blank">Click for weather forecast</a>
		</span>
	}
})

const Forum = React.createClass({

	render: function() {
		return <div className="container fluid">
				<form>
					<div className="form-group">
						<textarea className="form-control status-box" rows="2" placeholder="What's on your mind?"></textarea>
					</div>
				</form>
				<div className="button-group pull-right">
					<p className="counter">140</p>
					<a href="#" className="btn btn-primary">Post</a>
				</div>

				<ul className="posts">
				</ul>
			   </div>
	}
})

const Tabs = React.createClass({
	render: function() {
		return <div>
					<ul className="nav nav-tabs" role="tablist">{this.props.children}</ul>

	 				<div className="tab-content">

						{React.Children.map(this.props.children, tab => {
							var klass = "tab-pane active"
							if(!tab.props.active){
								klass = "tab-pane"
							}
							
							return <div className={klass} id={tab.props.label.replace(/\s/g, '')}>{tab.props.children}</div>
						})}
					</div>
				</div>

	}
})

Tabs.Tab = React.createClass({
	render: function() {
	
		return <li className={this.props.active ? "active" : ""} ><a href={`#${this.props.label.replace(/\s/g, '')}`} role="tab" data-toggle="tab">{this.props.label}</a></li>
 
	}
})


const Stats = React.createClass({
	render: function() {
		return <iframe src="https://docs.google.com/spreadsheets/d/1lucBasv0plhda3L5S4SFnxgQ8q__Jj_JVguCX228LyE/pubhtml?widget=true&amp;headers=false" width="700" height="400"></iframe>
	}
})


ReactDOM.render(
		
		<div>

			<div className="container fluid">
				<div className="jumbotron">
					<h2 className="text-center">Voyager Academy Mens Soccer</h2>
				</div>
			</div>


			<div className="container">
				
				<div className="col-md-3">
					<img className="text-right" src="http://files.milesplit.us/team_logos/28840" height="240" width="240" />
				</div>
			</div>	

			<div className="col-md-9">
				<div className="container">
										
					<Tabs>
						<Tabs.Tab active label="Schedule">
							<iframe src="https://www.google.com/calendar/embed?showCalendars=0&amp;mode=WEEK&amp;height=600&amp;wkst=1&amp;bgcolor=%23FFFFFF&amp;src=rc2dstbajg2j4674poicoo9g74%40group.calendar.google.com&amp;color=%2329527A&amp;ctz=America%2FNew_York" style={{border: "solid 1px #777"}}  width="600" height="400" frameBorder="0" scrolling="no"></iframe>
						</Tabs.Tab>
						
						<Tabs.Tab label="Statsheets">
							<Stats/>
						</Tabs.Tab>
						
						<Tabs.Tab label="Weather Forecast">
							<WeatherUndergroundWidget/>
						</Tabs.Tab>
						
						<Tabs.Tab label="Forum">
							<Forum/>
						</Tabs.Tab>
					</Tabs>
					
				</div>
			</div>

		</div>,

		document.getElementById("app")
	)


