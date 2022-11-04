import React from 'react';

import SpeakerCard from '../SpeakerCard';

import styles from './style.module.css';

const speakers = [
	{
		name: 'Айдос Ибрагим',
		info: 'Дипломированный психолог, магистр, в данный момент докторант',
	},
	{
		name: 'Айдос Ибрагим',
		info: 'Дипломированный психолог, магистр, в данный момент докторант',
	},
	{
		name: 'Айдос Ибрагим',
		info: 'Дипломированный психолог, магистр, в данный момент докторант',
	},
	{
		name: 'Айдос Ибрагим',
		info: 'Дипломированный психолог, магистр, в данный момент докторант',
	},
	{
		name: 'Айдос Ибрагим',
		info: 'Дипломированный психолог, магистр, в данный момент докторант',
	},
	{
		name: 'Айдос Ибрагим',
		info: 'Дипломированный психолог, магистр, в данный момент докторант',
	},
	{
		name: 'Айдос Ибрагим',
		info: 'Дипломированный психолог, магистр, в данный момент докторант',
	},
	{
		name: 'Айдос Ибрагим',
		info: 'Дипломированный психолог, магистр, в данный момент докторант',
	},
	{
		name: 'Айдос Ибрагим',
		info: 'Дипломированный психолог, магистр, в данный момент докторант',
	},
	{
		name: 'Айдос Ибрагим',
		info: 'Дипломированный психолог, магистр, в данный момент докторант',
	},
	{
		name: 'Айдос Ибрагим',
		info: 'Дипломированный психолог, магистр, в данный момент докторант',
	},
	{
		name: 'Айдос Ибрагим',
		info: 'Дипломированный психолог, магистр, в данный момент докторант',
	},
];

export default function Speakers() {
	return (
		<section className={styles.speakers}>
			<h3 className="title">Спикеры</h3>

			<ul className={styles.speakerList}>
				{speakers.map((speaker, idx) => {
					speaker.image = `/img/speaker${idx + 1}.png`;
					return <SpeakerCard speaker={speaker} key={idx} />;
				})}
			</ul>

			<a
				href="https://docs.google.com/forms/d/e/1FAIpQLSeg7m0aLdMX9OnpFwzZ8FNMqzsPgXV9b2fxabJse_gVT9YWoQ/viewform"
				className={styles.registerBtnWrap}>
				<div className={styles.registerBtn}>Зарегистрироваться</div>
			</a>
		</section>
	);
}
