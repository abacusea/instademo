import React from 'react'
import * as Images from '../../assets/images'
import './index.css'
import '../../App.css'

const TimeLine = () => {
	return (
		<div className="timeline">
			<article className="timeline-cards">
				<header className="timeline-header">	
					<div className="timeline-header_image">
						<canvas className="timeline-header_canvas" height="53" width="53" />
						<img className="timeline-header_profilepic" src={Images.home} alt="" />
					</div>
					<div className="timeline-header_name">
						<div className="header-name__max">
							<div className="relative">
								<div className="header-name__flex">
									<a class="header-name_profile" href="">MSD </a>
								</div>
							</div>
						</div>
					</div>
				</header>
				<div>
					<div class="timeline-post_flex">
						<div className="timeline-post">
							<div className="timeline-image">
								<img className="post-image" src={Images.news} alt="" />
							</div>
						</div>
					</div>
				</div>
				<div className="timeline-activity">
					<div className="activity-section">
						<span className="activity-like">
							<button className="button" type="button">
								<img className="a activity-buttons" src={Images.bookmarks} alt="" />
							</button>
						</span>

						<span className="inline">
							<button className="button" type="button">
								<img className="activity-buttons" src={Images.comment} alt="" />
							</button>
						</span>

						<button className="button" type="button">
								<img className="activity-buttons" src={Images.inbox} alt="" />
						</button>

						<span className="save-post  inline">
							<button className="button" type="button">
								<img className="activity-buttons" src={Images.save} alt="" />
							</button>
						</span>

					</div>
					<div className="like-details">
						<div className="like-details__flex">
							<div className="liked-profile">
								<button className="liked-img">
									<div class="liked-img__a">
										<div class="liked-img__b">
											<span class="liked-img__c">
												<img className="liked-image" src={Images.profile} alt="" />
											</span>
										</div>
									</div>
								</button>
							</div>
							<div className="liked-total"> Liked by { "" }
								<span className="relative">
									<a className="liked-total__a">SRT </a>
								</span>
								 { "" } and { "" }
								<button className="liked-img">
									<span>106</span>
									 { "" } others 
								</button>
							</div>
						</div>
					</div>
					<div className="comments">
						<div className="comments-post">
							<div className="commentpost__a">
								<span className="relative">
									<a className="commentpost-name">
										MSW
									</a>
								</span>
								<span className="break-word">
									{ " " }
									<span>
										Be the light who shines in the dark even if nobody is interested in ur brightness..bcos..it's you..who will be in need of it and not others..
									</span>
								</span>	
							</div>

							<div>
								<div className="flex_all-comment">
									<a className="comment-b" href="">
										View all <span>29</span>
									 	comments
									 </a>
								</div>
								<div className="row-ccomments">
									<div className="align-comments">
										<span className="relative"><a className="commentpost-name" href="">hithesh___k</a>
										</span>
										<span className="break-word ">
											<span>🖤🖤</span>
										</span>
									</div>
									<span>
										<div className="like-comment">
											<button className="comment-like__button" type="button">
											</button>
										</div>
									</span>
								</div>
							</div>
						</div>
					</div>
					<div className="comment-time">
						<a class="comment-time__a" href="">
							<time class="comment-time__ago .Nzb55" datetime="2020-06-30T15:32:32.000Z" title="Jun 30, 2020">
								7 hours ago
							</time>
						</a>
					</div>
					<div className="add_comment">
						<div>
							<form className="add__comment_form" method="POST">
								<textarea  placeholder="Add a comment…" className="add__comment_textarea" />
								<button className="add__comment_button" disabled="" type="submit">
									Post
								</button>
							</form>
						</div>
					</div>
				</div>
				<div className="timeline-details">
				</div>
			</article>
		</div>
		)
}

export default TimeLine