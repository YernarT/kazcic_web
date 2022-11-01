import React, { useState } from 'react';

import styles from './style.module.css';

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
				<li className={styles.item}>
					<span>О мероприятии</span>
				</li>
				<li className={styles.item}>
					<span>Программа</span>
					<span className="triangle"></span>
				</li>
				<li className={styles.item}>
					<span>Контакты</span>
				</li>
			</ul>

			<p className={styles.phone}>
				<span>+7 701 564 6494</span>
			</p>

			<ul className={`${styles.mobileItems} ${isShowMobileNav ? 'show' : ''}`}>
				<li className={styles.item}>
					<span>О мероприятии</span>
				</li>
				<li className={styles.item}>
					<span>Программа</span>
					<span className="triangle"></span>
				</li>
				<li className={styles.item}>
					<span>Контакты</span>
				</li>
			</ul>
		</nav>
	);
}
