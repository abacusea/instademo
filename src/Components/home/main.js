import React, { Fragment} from 'react'
import TimeLine from '../Timeline/index'
import SuggestionList from '../Suggestions/index'
import * as Images from '../../assets/images'

const Main = () => {
	return (
		<Fragment>
			<div />
			<main className="container-main">
				<section className="section-timeline padding">
					<TimeLine />	
					<SuggestionList />
				</section>
			</main>
		</Fragment>

		)
}

export default Main