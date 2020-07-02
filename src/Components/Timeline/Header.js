import React, { Fragment} from 'react'
import * as Images from '../../assets/images'
import './index.css'

const Header = ({id, image}) => {
	return (
		<Fragment>
			<header className="timeline-header">	
					<div className="timeline-header_image">
						<canvas className="timeline-header_canvas" height="53" width="53" />
						<img className="timeline-header_profilepic" src={image} alt="" />
					</div>
					<div className="timeline-header_name">
						<div className="header-name__max">
							<div className="relative">
								<div className="header-name__flex">
									<a className="header-name_profile" href="">{id}</a>
								</div>
							</div>
						</div>
					</div>
				</header>
		</Fragment>

		)
}

export default Header