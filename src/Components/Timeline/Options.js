import React from 'react'
import * as Images from '../../assets/images'
import './index.css'

const Options = () => {
	return (
		<div className="post-details">
			<button className="button" type="button">
				<div className="post-details__">
					<img className="activity-buttons" src={Images.details} alt="" />
				</div>
			</button>
		</div>
	)
}

export default Options