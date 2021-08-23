import React from 'react';
import './style.css';

function Header({ title }) {
	return (
		<header>
			<h1>{title}</h1>
		</header>
	);
}

export default Header;