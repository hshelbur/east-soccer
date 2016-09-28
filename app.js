

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
					
					
					<ul className="nav nav-tabs" role="tablist">
 						<li className="active"><a href="#tabs-schedule" role="tab" data-toggle="tab">Schedule</a></li>
						
						<li><a href="#tabs-stats" role="tab" data-toggle="tab">Statsheets</a></li>

						<li><a href="#tabs-forecast" role="tab" data-toggle="tab">Two Day Forecast</a></li>

						<li><a href="#tabs-forum" role="tab" data-toggle="tab">Forum</a></li>
					</ul>
 
					
 					<div className="tab-content">
						
						

						<div className="active tab-pane" id="tabs-schedule">
							<iframe src="https://www.google.com/calendar/embed?showCalendars=0&amp;mode=WEEK&amp;height=600&amp;wkst=1&amp;bgcolor=%23FFFFFF&amp;src=rc2dstbajg2j4674poicoo9g74%40group.calendar.google.com&amp;color=%2329527A&amp;ctz=America%2FNew_York" style={{border: "solid 1px #777"}}  width="600" height="400" frameBorder="0" scrolling="no"></iframe>
						</div>
						

						

						<div className="tab-pane" id="tabs-forecast">
 							<span style={{
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
						</div>
						
						

						<div className="tab-pane" id="tabs-stats">
							<iframe src="https://docs.google.com/spreadsheets/d/1lucBasv0plhda3L5S4SFnxgQ8q__Jj_JVguCX228LyE/pubhtml?widget=true&amp;headers=false" width="700" height="400"></iframe>
						</div>

					

						<div className="tab-pane" id="tabs-forum">
							<div className="container fluid">
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

						</div>

					</div>
				</div>
			</div>

		</div>,

		document.getElementById("app")
	)

