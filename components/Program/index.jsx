import React from 'react';

import Tabs from '../Tabs';

import styles from './style.module.css';

export default function Porgram() {
	return (
		<section className={styles.program}>
			<h3 className="title">Программа</h3>
			<p className="subtitle">Расширенная конфиренция</p>

			<Tabs />
		</section>
	);
}
