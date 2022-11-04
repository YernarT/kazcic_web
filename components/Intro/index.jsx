/* eslint-disable @next/next/no-img-element */
import React from 'react';

import styles from './style.module.css';

const sponsors = [1, 2, 3, 4, 5];

export default function Intro() {
	return (
		<section className={styles.intro}>
			<ul className={styles.sponsors}>
				{sponsors.map(sponsor => (
					<li className="sponsor" key={sponsor}>
						<img src={`/img/sponsor${sponsor}.png`} alt="sponsor" />
					</li>
				))}
			</ul>

			<h4 className={styles.date}>8 ноября | Онлайн Расширенная</h4>

			<h3 className={styles.desc}>
				Конференция по итогам реализации программы{' '}
				<span className="light">«Fit for Partnership with Germany»</span> и
				инструмента <span className="light"></span> в рамках национального
				проекта по развитию предпринимательства на 2021-2025 годы
			</h3>

			<div className={styles.infoBlock}>
				<div className={styles.info}>
					<div className="date">3</div>
					<div className="desc">дня</div>
				</div>
				<div className={styles.info}>
					<div className="date">13</div>
					<div className="desc">зарубежных спикеров</div>
				</div>
				<div className={styles.info}>
					<div className="date">13</div>
					<div className="desc">практических кейсов</div>
				</div>
				<div className={styles.info}>
					<img className="date img" src="/img/check-mark.png" alt="mark" />
					<div className="desc">доступ к зарубежному опыту</div>
				</div>
			</div>

			<a
				href="https://docs.google.com/forms/d/e/1FAIpQLSeg7m0aLdMX9OnpFwzZ8FNMqzsPgXV9b2fxabJse_gVT9YWoQ/viewform"
				className={styles.registerBtnWrap}>
				<div className={styles.registerBtn}>Зарегистрироваться</div>
			</a>
		</section>
	);
}
