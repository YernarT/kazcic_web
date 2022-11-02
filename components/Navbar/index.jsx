import React, { useState } from 'react';

import styles from './style.module.css';

const navItems = ['О мероприятии', 'Программа', 'Спикеры', 'Контакты'];

export default function Navbar() {
	const [isShowMobileNav, setIsShowMobileNav] = useState(false);

	return (
		<nav className={styles.navbar}>
			<div
				className={`${styles.burgetBtn} ${isShowMobileNav ? 'cross' : ''}`}
				onClick={() => setIsShowMobileNav(prevState => !prevState)}>
				<span></span>
			</div>

			<ul className={styles.items}>
				{navItems.map((item, idx) => (
					<li className={styles.item} key={idx}>
						<span>{item}</span>
						{/* <span className="triangle"></span> */}
					</li>
				))}
			</ul>

			<p className={styles.phone}>
				<span>+7 701 564 6494</span>
			</p>

			<ul className={`${styles.mobileItems} ${isShowMobileNav ? 'show' : ''}`}>
				{navItems.map((item, idx) => (
					<li className={styles.item} key={idx}>
						<span>{item}</span>
						{/* <span className="triangle"></span> */}
					</li>
				))}
			</ul>
		</nav>
	);
}
