import React from 'react';

import SpeakerCard from '../SpeakerCard';

import styles from './style.module.css';

const speakers = [
	{
		name: 'Эдуард Кинсбрунер',
		info: 'Германия экономикасының Шығыс комитетінің Орталық Азия бойынша аймақтық директоры',
	},
	{
		name: 'Гульмира Уахитова',
		info: 'э.ғ.к., «Заңды тұлғалар одағының» ҒӨБ Басқарма төрағасы және «Нат. «Qaz Textile» жеңіл өнеркәсіп кәсіпкерлері қауымдастығы',
	},
	{
		name: 'Владимир Богданов',
		info: 'GIZ өкілі',
	},
	{
		name: 'Д-р Пер Бродерзен',
		info: 'Германия экономикасының Шығыс комитеті жанындағы Неміс агробизнес альянсының директоры',
	},
	{
		name: 'Айсулу Акпекова',
		info: '«Үржар-Сүт» СПК, бағдарламаға қатысушы',
	},
	{
		name: 'Жанайдар Кумекбаев',
		info: '«Game Dev» ЖШС директоры',
	},
	{
		name: 'Гульмира Раисова',
		info: 'Қазақстан Республикасы HR-менеджерлер қауымдастығының Үйлестіру кеңесінің президенті, Қазақстан Республикасының менеджерлері, Empower people серіктесі, SCP SHRM',
	},
	{
		name: 'Дидар Ахмедин',
		info: 'Малайзиялық Tass Tech International Sdn компаниясының өкілі. bhd. Орталық Азия мен Шығыс Еуропа нарықтарында және «ҚАК» ҮЕҰ мүшесі',
	},
	{
		name: 'Жанара Нурсеитова',
		info: 'Әлеуметтік психолог, NLP шебері, бизнес-тренер',
	},
	{
		name: 'Иван Лайс',
		info: 'Менеджер по продажам Европа и Азия „GRIMME Landmaschinenfabrik GmbH & Co. KG“',
	},
	{
		name: 'Еркен Наурзбеков',
		info: '«Атамекен» ҚР ҰКП Агроөнеркәсіптік кешен және тамақ өнеркәсібі департаменті директорының орынбасары',
	},
	{
		name: 'Айдос Ибрагим',
		info: 'Сертификатталған психолог, магистр, қазіргі уақытта докторант',
	},
	{
		name: 'Д-р Вадим Ермаков',
		info: 'Бағдарлама менеджері, халықаралық жобалар, bbw Bildungswerk der Wirtschaft in Berlin und Brandenburg e.V.',
	},
	{
		name: 'Мерей Исаева',
		info: 'Қазақстан Республикасы Ұлттық экономика министрлігі Кәсіпкерлікті дамыту департаменті директорының орынбасары',
	},
	{
		name: 'Юлия Пересыпкина',
		info: 'Аксиома компаниясы, бағдарламаға қатысушы',
	},
	{
		name: 'Айдархан Калиев',
		info: '«Асыл-Дизайн» сән үйінің бас дизайнері, т.ғ.к., өнертану кафедрасының доценті',
	},
	{
		name: 'Елена Мещенко',
		info: '«Алёнушка» тігін салоны, бағдарламаға қатысушы',
	},
	{
		name: 'Руслан Пушилин',
		info: 'Genesis Engineering Project Management корпорациясының бас директоры',
	},
	{
		name: 'Махмут Томанов',
		info: 'Вице-Президент Центрально-Азиатская Ассоциация Экспертов Цифровизации',
	},
	{
		name: 'Ксения Кравченко',
		info: 'Bitrix24 Қазақстан және Орталық Азия',
	},
	{
		name: 'Курмангазы Турумбет',
		info: 'Кайзен, бизнес-процестерді құру, ірі компаниялардың қызметкерлерін оқыту және оқыту, ШОБ кәсіпкерлеріне кеңес беру бойынша сертификатталған жаттықтырушы',
	},
	{
		name: 'Наталья Онума',
		info: 'Сән әлеміндегі тәжірибеші',
	},
	{
		name: 'Сауле Шауенова',
		info: '«Ютария ЛТД» компаниялар тобының негізін қалаушы және бас директоры',
	},
	{
		name: 'Олег Фирсенко',
		info: '«Satu.kz» сауда алаңы',
	},
];

const notImageSpeakerIdx = [3, 13, 14];

export default function Speakers({ texts }) {
	return (
		<section className={styles.speakers}>
			<h3 className="title">Спикеры</h3>

			<ul className={styles.speakerList}>
				{speakers.map((speaker, idx) => {
					speaker.image = `/img/speaker${idx + 1}.png`;
					return (
						<SpeakerCard
							speaker={speaker}
							key={idx}
							noImage={!notImageSpeakerIdx.includes(idx + 1)}
						/>
					);
				})}
			</ul>

			<a
				href="https://docs.google.com/forms/d/e/1FAIpQLSeg7m0aLdMX9OnpFwzZ8FNMqzsPgXV9b2fxabJse_gVT9YWoQ/viewform"
				className={styles.registerBtnWrap}>
				<div className={styles.registerBtn}>{texts.register}</div>
			</a>
		</section>
	);
}
