import React, { useState, useCallback, useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { languageAtom } from '../../atoms';

import SwitchLanguage from '../SwitchLanguage';

import styles from './style.module.css';

const navItems = ['intro', 'program', 'speakers', 'footer'];

export default function Navbar({ texts }) {
	const [languageIdx, setLanguageIdx] = useRecoilState(languageAtom);
	const [isShowMobileNav, setIsShowMobileNav] = useState(false);

	const [scolled, setScolled] = useState(false);
	const [currentItemId, setCurrentItemId] = useState(null);
	const handleItemClick = useCallback(id => {
		setIsShowMobileNav(false);
		setCurrentItemId(id);
		setScolled(true);
	}, []);

	useEffect(() => {
		const scrollElement = document.querySelector('#__next > div');
		const targetElement = document.getElementById(currentItemId);
		let tid = null;
		let yOffset = 0;

		if (scolled) {
			targetElement.scrollIntoView({ 'behavior': 'smooth' });

			switch (currentItemId) {
				case 'intro':
					// scrollElement.scrollBy({ top: -90, behavior: 'smooth' });
					break;
				case 'program':
					// scrollElement.scrollTo({ top: -90, behavior: 'smooth' });
					break;
				case 'speakers':
					yOffset = 0;
					break;
				case 'footer':
					yOffset = 0;
					break;
			}

			setScolled(false);
		}

		// if (currentItemId !== null) {
		// 	const element = document.getElementById(currentItemId);

		// 	const y =
		// 		element.getBoundingClientRect().top + window.pageYOffset + yOffset;

		// 	scrollElement.removeEventListener('scroll', scrollHandler);
		// 	console.log('y: ', y);
		// 	scrollElement.scrollTo({ top: y, left: 0, behavior: 'smooth' });

		// 	// tid = setTimeout(
		// 	// 	() => scrollElement.addEventListener('scroll', scrollHandler),
		// 	// 	1500,
		// 	// );
		// }

		return () => {
			// scrollElement.removeEventListener('scroll', scrollHandler);
			// if (tid) {
			// clearTimeout(tid);
			// }
		};
	}, [scolled]);

	return (
		<nav className={styles.navbar}>
			<div
				className={`${styles.burgetBtn} ${isShowMobileNav ? 'cross' : ''}`}
				onClick={() => setIsShowMobileNav(prevState => !prevState)}>
				<span></span>
			</div>

			<ul className={styles.items}>
				{navItems.map((id, idx) => (
					<li
						className={styles.item}
						key={id}
						onClick={() => handleItemClick(id)}>
						<span>{texts[`n${idx + 1}`]}</span>
						{/* <span className="triangle"></span> */}
					</li>
				))}
			</ul>

			<p className={styles.phone}>
				<span>+7 771 541 2580</span>
			</p>

			<SwitchLanguage className={styles.switchLanguage} />

			<ul className={`${styles.mobileItems} ${isShowMobileNav ? 'show' : ''}`}>
				{navItems.map((id, idx) => (
					<li
						className={styles.item}
						key={id}
						onClick={() => handleItemClick(id)}>
						<span>{texts[`n${idx + 1}`]}</span>
						{/* <span className="triangle"></span> */}
					</li>
				))}

				<a
					href="https://docs.google.com/forms/d/e/1FAIpQLSeg7m0aLdMX9OnpFwzZ8FNMqzsPgXV9b2fxabJse_gVT9YWoQ/viewform"
					className={styles.registerBtnWrap}>
					<div className={styles.registerBtn}>{texts.register}</div>
				</a>

				{/* <SwitchLanguage /> */}
				<div className={styles.buttons}>
					{languageIdx !== 0 && (
						<button onClick={() => setLanguageIdx(0)}>Рус</button>
					)}
					{languageIdx !== 1 && (
						<button onClick={() => setLanguageIdx(1)}>Қаз</button>
					)}
					{languageIdx !== 2 && (
						<button onClick={() => setLanguageIdx(2)}>Deu</button>
					)}
				</div>
			</ul>
		</nav>
	);
}
