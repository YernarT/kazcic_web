/* eslint-disable @next/next/no-img-element */
import React from 'react';

import styles from './style.module.css';

export default function Footer() {
	return (
		<footer className={styles.footer}>
			<h4 className={styles.title}>Свяжитесь с нами</h4>

			<div className={styles.group}>
				<p className={styles.key}>Контактный номер:</p>
				<p className={styles.value}>+7 771 541 2850</p>
			</div>

			<div className={styles.group}>
				<p className={styles.key}>e-mail адрес:</p>
				<p className={styles.value}>info.icc.kz@gmail.com</p>
			</div>

			<ul className={styles.socials}>
				<li className={styles.icon}>
					<img src="/img/facebook.png" alt="facebook" />
				</li>
				<li className={styles.icon}>
					<img src="/img/instagram.png" alt="instagram" />
				</li>
				<li className={styles.icon}>
					<img src="/img/telegram.png" alt="telegram" />
				</li>
			</ul>
		</footer>
	);
}
