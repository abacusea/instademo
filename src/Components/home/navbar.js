import React, { Fragment} from 'react'
import * as Images from '../../assets/images'

const NavBar = () => {
	return (
		<Fragment>
			<nav className="app-header">
				<div className="flex-basis" />
				<div className="app-header-position">
					<div className="app-header__logos">
						<div className="logos__company">
							<div className="logos__company-flex">
								<div className="logos__company-name">
									<img className="logo__img" src={Images.logo} alt="Company Logo" />
								</div>
							</div>
						</div>
						<div className="app-header__searchbar">
							<input className="searchbar__placeholder" type="text" placeholder="Search" value=""/>
						</div>
						<div className="app-header__navlinks">
							<div className="navlinks__position">
								<div className="navlink-icons">
									<img className="nav__img" src={Images.home} alt="" />
								</div>
								<div className="navlink-icons">
									<img className="nav__img relative" src={Images.inbox} alt="" />
								</div>
								<div className="navlink-icons">
									<img className="nav__img" src={Images.explore} alt="" />
								</div>
								<div className="navlink-icons">
									<img className="nav__img" src={Images.bookmarks} alt="" />
								</div>
								<div className="navlink-icons">
								<div />
									<img className="nav__profile" src="" alt="" />
								</div>

							</div>
						</div>
					</div>
				</div>

			</nav>
		</Fragment>

		)
}

export default NavBar