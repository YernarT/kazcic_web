import React, { useState } from 'react';

import styles from './style.module.css';

export default function SwitchLanguage({ className }) {
	const [currentLanguage, setCurrentLanguage] = useState('Рус');

	return (
		<div className={`${styles.wrap} ${className}`}>
			<div className={styles.switchLanguage}>
				<span>{currentLanguage}</span>
			</div>
		</div>
	);
}
