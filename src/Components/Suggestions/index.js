import React from 'react'
import * as Images from '../../assets/images'
import './index.css'

const SuggestionList = () => {
	return (
		<div className="section-right">
						<div className="container__user">
							<div className="user_container">
								<div className="container__userpic">
									<canvas className="container-user__canvas" />
									<a className="userpic__alt b" href="">
										<img alt="" className="userpic" src={Images.profile} />
									</a>
								</div>
								<div className="container__username">
									<div className="username">
										<a className="username__a" href="">iam__faizy03</a>
									</div>
									<div className="name">Faizal AS</div>
								</div>
							</div>
						</div>


						<div className="container-suggestions">
							<div className="suggestion-title">
								<div className="title-suggestion">
									<div className="title__name">Suggestions For You</div>
								</div>
								<a className="suggestion-see" href="">
									<div className="see-all">See All</div>
								</a></div>
							</div>

							<div className="right-profiles">
								<div className="right-profile-position">
									<div className="section-suggestion">
										<div className="section-suggest__panel">
											<div className="section-suggest__rpanel">
												<div className="suggest__profpic">
													<canvas className="suggest__canvas" />
													<span className="userpic__alt c" >
														<img alt="" className="userpic" src={Images.profile} />
													</span>
												</div>
											</div>
										<div className="title-suggestion">
											<div className="suggested__title">
												<div className="suggested-name">
													<a href="" >
														<div className="section-suggest__name">
															<div className="logos__company-flex">Razy</div>
														</div>
													</a>
												</div>
											</div>
											<div className="status">
												<div className="status__name">New to Instagram</div>
											</div>
										</div>
										<div className="section__follow">
											<button className="button__follow">
												Follow
											</button>
										</div>
									</div>									
									</div>
								</div>
							</div>
						<div className="container__about p-tz ">
							<span className="ABOUT">© 2020 InstaDemo from abacus</span>
						</div>
					</div>
	)
}

export default SuggestionList