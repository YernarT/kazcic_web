/* eslint-disable @next/next/no-img-element */
import React from 'react';

import styles from './style.module.css';

export default function SpeakerCard({ speaker, noImage }) {
	return (
		<div className={styles.speakerCard}>
			<div className="imgWrap">
				{noImage && <img src={speaker.image} alt={speaker.name} />}
			</div>

			<h4 className="name">{speaker.name}</h4>
			<p className="info">{speaker.info}</p>
		</div>
	);
}
