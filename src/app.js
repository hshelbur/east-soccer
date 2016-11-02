
const WeatherUndergroundWidget = () =>
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


const Forum = () =>
	<div className="col-md-9">
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
	

const Tabs = props => 
	<div>
		<ul className="nav nav-tabs" role="tablist">{props.children}</ul>

			<div className="tab-content">

			{React.Children.map(props.children, tab => {
				var klass = "tab-pane active"
				if(!tab.props.active){
					klass = "tab-pane"
				}
				
				return <div className={klass} id={tab.props.label.replace(/\s/g, '')}>{tab.props.children}</div>
			})}
		</div>
	</div>

const Button = props =>
	<button onClick={props.onClick}  type="button" className="btn btn-primary" data-toggle="button" aria-pressed="false" autoComplete="off">
 		{props.label}
	</button>

Tabs.Tab = props =>
	<li className={props.active ? "active" : ""} ><a href={`#${props.label.replace(/\s/g, '')}`} role="tab" data-toggle="tab">{props.label}</a></li>

Tabs.Tab.propTypes = {
	active: React.PropTypes.bool,
	label: React.PropTypes.string.isRequired,
}

class CreateContactForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {name: '', phone: '', email: ''};
	}

	render(){
		const contact={name: this.state.name, phone: this.state.phone, email: this.state.email}
	
		return <div>
			<form className="ContactForm">
				<input type='text' placeholder='Name' value={this.state.name} onChange={e => this.setState({name : e.target.value})} />
				<input type='text' placeholder='Phone' value={this.state.phone} onChange={e => this.setState({phone : e.target.value})} />
				<input type='text' placeholder='E-Mail' value={this.state.email} onChange={e => this.setState({email : e.target.value})} />
				<Button onClick={() => this.props.addNewContact(contact)} label='Add Contact' />
			</form>
		</div>
	}
}

class ContactList extends React.Component {
	constructor () {
		super();
		this.state = {contacts: []};
		this.count = 0;
		this.addNewContact = this.addNewContact.bind(this);
	}

	addNewContact(contact){
		this.count++
		contact.id = this.count
		const newContacts = this.state.contacts.concat(contact)
		this.setState({contacts: newContacts})
	}

	render(){

		const {contacts} = this.state

		return <div>
			<CreateContactForm addNewContact={this.addNewContact}/>
			{contacts.map(contact =>
				<ContactProfile name={contact.name} phone={contact.phone} email={contact.email}/>
			)}
		</div>
	}
}

const ContactProfile = props =>
	<div className="col-md-3">
		<div className="well well-sm">
			<p>{props.name}</p>
			<p>Phone: {props.phone}</p>
			<p>E-Mail: {props.email}</p>
		</div>
	</div>


const Stats = () =>	
	<iframe src="https://docs.google.com/spreadsheets/d/1lucBasv0plhda3L5S4SFnxgQ8q__Jj_JVguCX228LyE/pubhtml?widget=true&amp;headers=false" width="700" height="400"></iframe>
	
const Masthead = props =>
	<div className="container fluid">
		<div className="jumbotron">
			<h2 className="text-center">{props.label}</h2>
		</div>
	</div>

const MainPage = () =>
	<div>

		<Masthead label="Voyager Academy Men's Soccer"/>

		<div className="container">
			
			<div className="col-md-3">
				<img className="text-right" src="http://files.milesplit.us/team_logos/28840" height="240" width="240" />
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

						<Tabs.Tab label="Contacts">
							<ContactList/>
						</Tabs.Tab>
						
						<Tabs.Tab label="Forum">
							<Forum/>
						</Tabs.Tab>
					</Tabs>
					
				</div>
			</div>
		</div>

	</div>

ReactDOM.render(
		
		<MainPage/>,

		document.getElementById("app")
	)