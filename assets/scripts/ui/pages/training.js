import axios from 'axios'
import React from 'react'
import {Stage, Layer, Rect, Circle, Ring, Line} from 'react-konva'
import Button from '../components/button'

const TeamOnePlayer = () =>
	<Circle fill='blue' stroke='black' strokeWidth={2} width={20} height={20} draggable x={10} y={10} />

const TeamTwoPlayer = () =>
	<Circle fill='red' stroke='black' strokeWidth={2} width={20} height={20} draggable x={20} y={20} />

const Cone = () =>
	<Ring fill='orange' stroke='black' strokeWidth={2} innerRadius={5} outerRadius={10} draggable x={15} y={15} />

const Ball = () =>
	<Circle fill='black' width={15} height={15} draggable x={10} y={10} />

const Goal = () =>
	<Rect draggable stroke='black' strokeWidth={2} width={15} height={40} x={10} y={10} />

const Field = ({children}) =>
	<Stage className='field' width={700} height={700}>
		<Layer>
			{children}
		</Layer>
	</Stage>

class TrainingSession extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			fieldItems: []
		}
	}

	addFieldItem(item){
		const newFieldItems = this.state.fieldItems.concat(item)
		this.setState({fieldItems: newFieldItems})
	}


	render(){
		return <div>
			<textarea className='col-md-6' rows={10} placeholder='Training Description'></textarea> 

			<div className='col-md-6'>
				<Button onClick={() => this.addFieldItem('t1')} label='Add Player (Blue)' />
				<Button onClick={() => this.addFieldItem('t2')} label='Add Player (Red)' />
				<Button onClick={() => this.addFieldItem('cone')} label='Add Cone' />
				<Button onClick={() => this.addFieldItem('ball')} label='Add Ball' />
				<Button onClick={() => this.addFieldItem('goal')} label='Add Goal' />

				<Field>
					{this.state.fieldItems.map(item => {
						switch(item){
							case 'cone': return <Cone />
							case 'ball': return <Ball />
							case 'goal': return <Goal />
							case 't1': return <TeamOnePlayer />
							case 't2': return <TeamTwoPlayer />
						}
						
					})}
				</Field>
			</div>
		</div>
	}
}
export default TrainingSession