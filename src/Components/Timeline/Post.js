import React from 'react'
import * as Images from '../../assets/images'
import './index.css'

const Post = ({image}) => {
	console.log(image)
	return (
		<div>
			<div className="timeline-post_flex">
				<div className="timeline-post">
					<div className="timeline-image">
						<img className="post-image" src={image} alt="" />
					</div>
				</div>
			</div>
		</div>
		)
}

export default Post