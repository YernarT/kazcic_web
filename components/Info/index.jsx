/* eslint-disable @next/next/no-img-element */
import React from 'react';

import styles from './style.module.css';

export default function Info() {
	return (
		<section className={styles.infoSection}>
			<div className={styles.above}>
				<h3 className={styles.title}>О конфереции</h3>

				<p className={styles.desc}>
					В рамках конференции Вас ждут интереснейшие тренинги и встречи с
					немецкими и казахстанскими компаниями которые достигли экономического
					успеха ,благодаря правильному управлению, новому мышлению и внедрению
					новых технологий.
				</p>

				<p className={styles.desc}>
					По итогам мероприятия Вы получите: -много полезной информации;
					-наладите горизонтальные связи; -повысите компотенцию.
				</p>
			</div>

			<div className={styles.under}>
				<img src="/img/flag.png" alt="flag" />
			</div>
		</section>
	);
}
