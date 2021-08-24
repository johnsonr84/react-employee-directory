import React from 'react';
import './style.css';

function Header({ title }) {
	return (
		<header>
			<div class="row bg-dark text-center p-3">
				<h1>React Employee Directory</h1>
			</div>
		</header>
	);
}

export default Header;