import axios from 'axios'
import React from 'react'
import {Stage, Layer, Rect, Circle, Ring, Line} from 'react-konva'
import Button from '../components/button'



const TrainingSession = () =>
	<div>
		<textarea className='col-md-6' rows={10} placeholder='Training Description'></textarea> 

		<div className='col-md-6'>
			<Button label='Add Player (Blue)' />
			<Button label='Add Player (Red)' />
			<Button label='Add Cone' />

			<Stage className='field' width={700} height={700}>
				<Layer>
					<Rect fill='blue' width={25} height={25} draggable x={10} y={10} />
				</Layer>

				<Layer>
					<Circle fill='red' width={25} height={25} draggable x={20} y={20} />
				</Layer>

				<Layer>
					<Ring fill='yellow' innerRadius={10} outerRadius={15} draggable x={15} y={15} />
					<Ring fill='yellow' innerRadius={10} outerRadius={15} draggable x={15} y={15} />
					<Ring fill='yellow' innerRadius={10} outerRadius={15} draggable x={15} y={15} />
					<Ring fill='yellow' innerRadius={10} outerRadius={15} draggable x={15} y={15} />
				</Layer>
			</Stage>
		</div>
	</div>

export default TrainingSession