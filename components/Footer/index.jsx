/* eslint-disable @next/next/no-img-element */
import React from 'react';

import styles from './style.module.css';

export default function Footer({ texts }) {
	return (
		<footer className={styles.footer} id="footer">
			<h4 className={styles.title}>{texts.title}</h4>

			<div className={styles.group}>
				<p className={styles.key}>{texts.key1}</p>
				<p className={styles.value}>+7 771 541 2850</p>
			</div>

			<div className={styles.group}>
				<p className={styles.key}>{texts.key2}</p>
				<p className={styles.value}>info.icc.kz@gmail.com</p>
			</div>

			<ul className={styles.socials}>
				<li className={styles.icon}>
					<a href="https://m.facebook.com/kazcic.kz/">
						<img src="/img/facebook.png" alt="facebook" />
					</a>
				</li>
				<li className={styles.icon}>
					<a href="https://www.instagram.com/vtp_kz/">
						<img src="/img/instagram.png" alt="instagram" />
					</a>
				</li>
				<li className={styles.icon}>
					<a href="https://t.me/vtp_news">
						<img src="/img/telegram.png" alt="telegram" />
					</a>
				</li>
			</ul>
		</footer>
	);
}
