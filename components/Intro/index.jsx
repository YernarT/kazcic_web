/* eslint-disable @next/next/no-img-element */
import React from 'react';

import Logos from '../Logos';

import styles from './style.module.css';

export default function Intro({ texts }) {
	return (
		<section className={styles.intro} id="intro">
			<Logos className={styles.sponsors} />

			<h4 className={styles.date}>{texts.title}</h4>

			<h3
				className={styles.desc}
				dangerouslySetInnerHTML={{ __html: texts.desc }}
			/>

			<div className={styles.infoBlock}>
				<div className={styles.info}>
					<div className="date">{texts.info1.date}</div>
					<div className="desc">{texts.info1.desc}</div>
				</div>
				<div className={styles.info}>
					<div className="date">{texts.info2.date}</div>
					<div className="desc">{texts.info2.desc}</div>
				</div>
				<div className={styles.info}>
					<div className="date">{texts.info3.date}</div>
					<div className="desc">{texts.info3.desc}</div>
				</div>
				<div className={styles.info}>
					<img className="date img" src="/img/check-mark.png" alt="mark" />
					<div className="desc">{texts.info4.desc}</div>
				</div>
			</div>

			<a
				href="https://docs.google.com/forms/d/e/1FAIpQLSeg7m0aLdMX9OnpFwzZ8FNMqzsPgXV9b2fxabJse_gVT9YWoQ/viewform"
				className={styles.registerBtnWrap}>
				<div className={styles.registerBtn}>{texts.register}</div>
			</a>
		</section>
	);
}
