/* eslint-disable @next/next/no-img-element */
import React from 'react';

import styles from './style.module.css';

const sponsors = [1, 2, 3, 4, 5];

export default function Logos({ className }) {
	return (
		<ul className={`${styles.sponsors} ${className}`}>
			{sponsors.map(sponsor => (
				<li className="sponsor" key={sponsor}>
					<img src={`/img/sponsor${sponsor}.png`} alt="sponsor" />
				</li>
			))}
		</ul>
	);
}
