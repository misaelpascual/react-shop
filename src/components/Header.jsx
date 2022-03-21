import React, { useState, useContext } from 'react'
import '@styles/Header.scss'
import Menu from '@components/Menu'
import MyOrder from '@containers/MyOrder'
import AppContext from '../context/AppContext'

import menuIcon from '@icons/icon_menu.svg'
import logoMenu from '@logos/logo_yard_sale.svg'
import cartIcon from '@icons/icon_shopping_cart.svg'

import { useHistory } from 'react-router-dom'

const Header = () => {
	const history = useHistory()

	const [toggle, setToggle] = useState(false)
	const [toggleMobile, setToggleMobile] = useState(false)
	const [toggleOrders, setToggleOrders] = useState(false)
	const { state: { cart } } = useContext(AppContext)

	const handleToggle = () => {
		setToggle(!toggle)
	}
	const handleToggleOrders = () => {
		setToggleOrders(!toggleOrders)
	}
	const handleToggleMobile = () => {
		setToggleMobile(!toggleMobile)
	}

	function handleClick() {
    history.push('/')
  }

	return (
		<nav>
			<img src={menuIcon} alt="menu" className="menu" onClick={ handleToggleMobile } />
			<div className="navbar-left">
				<img src={logoMenu} alt="logo" className="nav-logo" onClick={handleClick} />
				<ul>
					<li>
						<a href="/">All</a>
					</li>
					<li>
						<a href="/">Clothes</a>
					</li>
					<li>
						<a href="/">Electronics</a>
					</li>
					<li>
						<a href="/">Furnitures</a>
					</li>
					<li>
						<a href="/">Toys</a>
					</li>
					<li>
						<a href="/">Others</a>
					</li>
				</ul>
			</div>
			<div className="navbar-right">
				<ul>
					<li className="navbar-email" onClick={ handleToggle }>
						email@example.com
					</li>
					<li
						className="navbar-shopping-cart"
						onClick={ () => setToggleOrders(!toggleOrders) }
					>
						<img src={cartIcon} alt="shopping cart" />
						{ cart.length > 0 && <div>{cart.length}</div> }
					</li>
				</ul>
			</div>
			{ toggle && <Menu /> }
			{ toggleOrders && <MyOrder toggleFunction={handleToggleOrders} /> }
			{ toggleMobile && <ul className="menuMobile">
				<li>
					<a href="/">All</a>
				</li>
				<li>
					<a href="/">Clothes</a>
				</li>
				<li>
					<a href="/">Electronics</a>
				</li>
				<li>
					<a href="/">Furnitures</a>
				</li>
				<li>
					<a href="/">Toys</a>
				</li>
				<li>
					<a href="/">Others</a>
				</li>
			</ul> }
		</nav>
	)
}

export default Header
