import React, { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { languageAtom } from '../../atoms';

import styles from './style.module.css';

const languages = ['Рус', 'Қаз', 'Deu'];

export default function SwitchLanguage({ className }) {
	const [languageIdx, setLanguageIdx] = useRecoilState(languageAtom);

	useEffect(() => {
		let beforeLanguage = Number(localStorage.getItem('language'));

		if (beforeLanguage) {
			setLanguageIdx(beforeLanguage);
		}
	}, [setLanguageIdx]);

	useEffect(() => {
		const handler = () => {
			localStorage.setItem('language', languageIdx);
		};

		window.addEventListener('beforeunload', handler);

		return () => {
			window.removeEventListener('beforeunload', handler);
		};
	}, [languageIdx]);

	return (
		<div className={`${styles.wrap} ${className}`}>
			<div
				className={styles.switchLanguage}
				onClick={() => {
					if (languageIdx === languages.length - 1) {
						setLanguageIdx(0);
					} else {
						setLanguageIdx(prevIdx => prevIdx + 1);
					}
				}}>
				<span>{languages[languageIdx]}</span>
			</div>
		</div>
	);
}
