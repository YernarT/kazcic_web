/* eslint-disable @next/next/no-img-element */
import React from 'react';

import styles from './style.module.css';

export default function Info({ texts }) {
	return (
		<section className={styles.infoSection} id="info">
			<div className={styles.above}>
				<h3 className={styles.title}>{texts.title}</h3>

				<p className={styles.desc}>{texts.desc}</p>

				<p className={styles.subtitle}>{texts.subtitle}</p>
				<p className={styles.item}>- {texts.item1}</p>
				<p className={styles.item}>- {texts.item2}</p>
				<p className={styles.item}>- {texts.item3}</p>
			</div>

			<div className={styles.under}>
				<img src="/img/flag.png" alt="flag" />
			</div>
		</section>
	);
}
