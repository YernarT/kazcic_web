/* eslint-disable @next/next/no-img-element */
import React from 'react';

import styles from './style.module.css';

export default function SpeakerCard({ speaker }) {
	return (
		<div className={styles.speakerCard}>
			<img src={speaker.image} alt={speaker.name} />

			<h4 className="name">{speaker.name}</h4>
			<p className="info">{speaker.info}</p>
		</div>
	);
}
