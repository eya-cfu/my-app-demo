import React, { useState } from 'react'
import NavItem from '@/components/Navitem'
import Avatar from '@mui/material/Avatar'
import Logo from '@/components/Logo'

const MENU_LIST = [
	{ text: 'Home', href: '/' },
]
const Navbar = () => {
	const [navActive, setNavActive] = useState({})
	const [activeIdx, setActiveIdx] = useState(-1)

	return (
		<header>
			<nav className={`nav`}>
				<Logo />
				<div
					onClick={() => setNavActive(!navActive)}
					className={`nav__menu-bar`}
				>
					<div></div>
					<div></div>
					<div></div>
				</div>
				<div className={`${navActive ? 'active' : ''} nav__menu-list`}>
					{MENU_LIST.map((menu, idx) => (
						<div
							onClick={() => {
								setActiveIdx(idx)
								setNavActive(false)
							}}
							key={menu.text}
						>
							<NavItem active={activeIdx === idx} {...menu} />
						</div>
					))}
				</div>
				<Avatar alt="Remy Sharp" />
			</nav>
		</header>
	)
}

export default Navbar
