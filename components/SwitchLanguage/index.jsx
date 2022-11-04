import React, { useState, useEffect } from 'react';

import styles from './style.module.css';

const languages = ['Рус', 'Қаз', 'Нем'];

export default function SwitchLanguage({ className }) {
	const [currentLanguageIdx, setCurrentLanguageIdx] = useState(0);

	useEffect(() => {
		let beforeLanguage = localStorage.getItem('language');

		if (beforeLanguage) {
			setCurrentLanguageIdx(Number(beforeLanguage));
		}
	}, []);

	useEffect(() => {
		const handler = () => {
			localStorage.setItem('language', currentLanguageIdx);
		};

		window.addEventListener('beforeunload', handler);

		return () => {
			window.removeEventListener('beforeunload', handler);
		};
	}, [currentLanguageIdx]);

	return (
		<div className={`${styles.wrap} ${className}`}>
			<div
				className={styles.switchLanguage}
				onClick={() => {
					if (currentLanguageIdx === languages.length - 1) {
						setCurrentLanguageIdx(0);
					} else {
						setCurrentLanguageIdx(prevIdx => prevIdx + 1);
					}
				}}>
				<span>{languages[currentLanguageIdx]}</span>
			</div>
		</div>
	);
}
