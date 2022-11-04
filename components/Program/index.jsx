import React from 'react';

import Tabs from '../Tabs';

import styles from './style.module.css';

export default function Porgram() {
	return (
		<section className={styles.program}>
			<h3 className="title">Программа</h3>
			<p className="subtitle">Расширенная конфиренция</p>

			<Tabs />

			<a
				href="https://docs.google.com/forms/d/e/1FAIpQLSeg7m0aLdMX9OnpFwzZ8FNMqzsPgXV9b2fxabJse_gVT9YWoQ/viewform"
				className={styles.registerBtnWrap}>
				<div className={styles.registerBtn}>Зарегистрироваться</div>
			</a>
		</section>
	);
}
