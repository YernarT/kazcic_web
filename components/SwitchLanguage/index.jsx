import React, { useState } from 'react';

import styles from './style.module.css';

export default function SwitchLanguage() {
	const [currentLanguage, setCurrentLanguage] = useState('Рус');

	return (
		<div className={styles.switchLanguage}>
			<span>{currentLanguage}</span>
		</div>
	);
}
