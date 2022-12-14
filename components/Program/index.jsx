import React from 'react';

import Tabs from '../Tabs';

import styles from './style.module.css';

export default function Porgram({ texts }) {
	return (
		<section className={styles.program} id="program">
			<h3 className="title">{texts.title}</h3>
			<p className="subtitle">{texts.subtitle}</p>

			<Tabs />

			<a
				href="https://docs.google.com/forms/d/e/1FAIpQLSeg7m0aLdMX9OnpFwzZ8FNMqzsPgXV9b2fxabJse_gVT9YWoQ/viewform"
				className={styles.registerBtnWrap}>
				<div className={styles.registerBtn}>{texts.register}</div>
			</a>
		</section>
	);
}
