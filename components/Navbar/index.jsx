import React, { useState } from 'react';

import SwitchLanguage from '../SwitchLanguage';

import styles from './style.module.css';

export default function Navbar({ texts }) {
	const [isShowMobileNav, setIsShowMobileNav] = useState(false);

	return (
		<nav className={styles.navbar}>
			<div
				className={`${styles.burgetBtn} ${isShowMobileNav ? 'cross' : ''}`}
				onClick={() => setIsShowMobileNav(prevState => !prevState)}>
				<span></span>
			</div>

			<ul className={styles.items}>
				{[1, 2, 3, 4].map(i => (
					<li className={styles.item} key={i}>
						<span>{texts[`n${i}`]}</span>
						{/* <span className="triangle"></span> */}
					</li>
				))}
			</ul>

			<p className={styles.phone}>
				<span>+7 701 564 6494</span>
			</p>

			<SwitchLanguage className={styles.switchLanguage} />

			<ul className={`${styles.mobileItems} ${isShowMobileNav ? 'show' : ''}`}>
				{[1, 2, 3, 4].map(i => (
					<li className={styles.item} key={i}>
						<span>{texts[`n${i}`]}</span>
						{/* <span className="triangle"></span> */}
					</li>
				))}

				<SwitchLanguage />
			</ul>
		</nav>
	);
}
