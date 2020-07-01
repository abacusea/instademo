import React, { Fragment} from 'react'
import TimeLine from '../Timeline'

const Main = () => {
	return (
		<Fragment>
			<div />
			<main className="container-main">
				<section className="section-timeline padding">
					<div className="section-left">
						<div className="margin-t">
							<TimeLine />
						</div>
					</div>
					<div className="section-right">
					</div>
				</section>
			</main>
		</Fragment>

		)
}

export default Main