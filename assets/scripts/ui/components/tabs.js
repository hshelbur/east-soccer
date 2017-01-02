import React from 'react'

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

Tabs.Tab = props =>
	<li className={props.active ? "active" : ""} ><a href={`#${props.label.replace(/\s/g, '')}`} role="tab" data-toggle="tab">{props.label}</a></li>

Tabs.Tab.propTypes = {
	active: React.PropTypes.bool,
	label: React.PropTypes.string.isRequired,
}

export default Tabs