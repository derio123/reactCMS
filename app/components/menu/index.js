import React from 'react';
import { Link } from 'react-router-dom';
import '../layouts/index.css';

export default function Menu() {
	return (
		<div >
			<nav>
				<Link className='menu-item' to="/">Dashboard</Link>
				<Link className='menu-item' to="/user">Users</Link>
			</nav>
		</div>
	);
}