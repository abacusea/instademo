import React from 'react'
import * as Images from '../../assets/images'
import Header from './Header'
import Post from './Post'
import Activity from './Activity'
import Options from './Options'
import './index.css'

const TimeLine = ({item}) => {
	return (
		<div className="section-left">
			<div>
				<div className="timeline">
					<article className="timeline-cards">
						<Header id={item.id} image={item["low thumbnail"]}/>
						<Post image={item["high thumbnail"]}/>
						<Activity item={item}/>
						<Options />
					</article>
				</div>
			</div>
		</div>				
	)
}

export default TimeLine