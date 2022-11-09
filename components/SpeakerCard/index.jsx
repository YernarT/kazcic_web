/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { useRecoilValue } from 'recoil';
import { languageAtom } from '../../atoms';

import styles from './style.module.css';

export default function SpeakerCard({ speaker, noImage }) {
	const language = useRecoilValue(languageAtom);

	return (
		<div className={styles.speakerCard}>
			<div className="imgWrap">
				{noImage && <img src={speaker.image} alt={speaker.name(language)} />}
			</div>

			<h4 className="name">{speaker.name(language)}</h4>
			<p className="info">{speaker.info(language)}</p>
		</div>
	);
}
