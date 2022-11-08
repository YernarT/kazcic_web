import React from 'react';

import SpeakerCard from '../SpeakerCard';

import styles from './style.module.css';

const speakers = [
	{
		order: 1,
		name: language => {
			if (language === 0) {
				return 'Эдуард Кинсбрунер';
			}
			if (language === 1) {
				return 'Эдуард Кинсбрунер';
			}
			if (language === 2) {
				return 'Edward Kinsbrunner';
			}
		},
		info: language => {
			if (language === 0) {
				return 'Германия экономикасының Шығыс комитетінің Орталық Азия бойынша аймақтық директоры';
			}
			if (language === 1) {
				return 'Германия экономикасының Шығыс комитетінің Орталық Азия бойынша аймақтық директоры';
			}
			if (language === 2) {
				return 'Regionaldirektor für Zentralasien, Ostausschuss der Deutschen Wirtschaft';
			}
		},
	},
	{
		order: 2,
		name: language => {
			if (language === 0) {
				return 'Гульмира Уахитова';
			}
			if (language === 1) {
				return 'Гульмира Уахитова';
			}
			if (language === 2) {
				return 'Gulmira Uachitowa';
			}
		},
		info: language => {
			if (language === 0) {
				return 'к.э.н., Председатель Правления СРО Союз ЮЛ и ИП «Нац. объединение предпринимателей легкой промышленности «Qaz Textile»';
			}
			if (language === 1) {
				return 'э.ғ.к., «Заңды тұлғалар одағының» ҒӨБ Басқарма төрағасы және «Нат. «Qaz Textile» жеңіл өнеркәсіп кәсіпкерлері қауымдастығы';
			}
			if (language === 2) {
				return 'Wirtschaftskandidat, Vorstandsvorsitzender der SRO Vereinigung juristischer Personen und IP „Nat. Verband der Unternehmer der Leichtindustrie "Qaz Textile"';
			}
		},
	},
	{
		order: 9,
		name: language => {
			if (language === 0) {
				return 'Владимир Богданов';
			}
			if (language === 1) {
				return 'Владимир Богданов';
			}
			if (language === 2) {
				return 'Wladimir Bogdanow';
			}
		},
		info: language => {
			if (language === 0) {
				return 'Германия экономикасының Шығыс комитетінің Орталық Азия бойынша аймақтық директоры';
			}
			if (language === 1) {
				return 'GIZ өкілі';
			}
			if (language === 2) {
				return 'GIZ-Vertreter';
			}
		},
	},
	{
		order: 5,
		name: language => {
			if (language === 0) {
				return 'Д-р Пер Бродерзен';
			}
			if (language === 1) {
				return 'Д-р Пер Бродерзен';
			}
			if (language === 2) {
				return 'Dr. Per Brodersen ';
			}
		},
		info: language => {
			if (language === 0) {
				return 'Германия экономикасының Шығыс комитеті жанындағы Неміс агробизнес альянсының директоры';
			}
			if (language === 1) {
				return 'Директор Альянса германского агробизнеса при Восточном комитете немецкой экономики';
			}
			if (language === 2) {
				return 'Geschäftsführer der Allianz Agrarwirtschaft beim Ostausschuss der Deutschen Wirtschaft';
			}
		},
	},
	{
		order: 14,
		name: language => {
			if (language === 0) {
				return 'Айсулу Акпекова';
			}
			if (language === 1) {
				return 'Айсулу Акпекова';
			}
			if (language === 2) {
				return 'Aisulu Akpekova';
			}
		},
		info: language => {
			if (language === 0) {
				return 'Председатель правления СПК «Урджар-Сут», участник программы';
			}
			if (language === 1) {
				return '«Үржар-Сүт» ӘКК басқарма төрағасы, бағдарламаға қатысушы';
			}
			if (language === 2) {
				return 'Vorstandsvorsitzender der SEC "Urjar-Sut", Teilnehmer des Programms';
			}
		},
	},
	{
		order: 16,
		name: language => {
			if (language === 0) {
				return 'Жанайдар Кумекбаев';
			}
			if (language === 1) {
				return 'Жанайдар Кумекбаев';
			}
			if (language === 2) {
				return 'Zhanaidar Kumekbaev';
			}
		},
		info: language => {
			if (language === 0) {
				return 'Директор ТОО «Game Dev»';
			}
			if (language === 1) {
				return '«Game Dev» ЖШС директоры';
			}
			if (language === 2) {
				return 'Direktor von Game Dev LLP';
			}
		},
	},
	{
		order: 19,
		name: language => {
			if (language === 0) {
				return 'Гульмира Раисова';
			}
			if (language === 1) {
				return 'Гульмира Раисова';
			}
			if (language === 2) {
				return 'Gulmira Raisova';
			}
		},
		info: language => {
			if (language === 0) {
				return 'Президент координационного совета Ассоциации HR менеджеров РК, партнер Empower people, SCP SHRM';
			}
			if (language === 1) {
				return 'HR менеджерлер қауымдастығының Үйлестіру кеңесінің президенті ҚР, Empower people серіктесі, SCP SHRM';
			}
			if (language === 2) {
				return 'Präsident des Koordinierungsrates des Verbands der Personalmanager RK, Partner von Empower People, SCP SHRM';
			}
		},
	},
	{
		order: 3,
		name: language => {
			if (language === 0) {
				return 'Дидар Ахмедин';
			}
			if (language === 1) {
				return 'Дидар Ахмедин';
			}
			if (language === 2) {
				return 'Didar Ahmedin';
			}
		},
		info: language => {
			if (language === 0) {
				return 'Директор ТОО «Bestinet Kazakhstan» и член ОО «Kaz Alpine Club»';
			}
			if (language === 1) {
				return '«Бестинет Казахстан» ЖШС директоры және «Kaz Alpine Club» ҮЕҰ мүшесі';
			}
			if (language === 2) {
				return 'Direktor der LLP „Bestinet Kazakhstan“ und Mitglied der NGO „Kaz Alpine Club“';
			}
		},
	},
	{
		order: 20,
		name: language => {
			if (language === 0) {
				return 'Жанара Нурсеитова';
			}
			if (language === 1) {
				return 'Жанара Нурсеитова';
			}
			if (language === 2) {
				return 'Zhanara Nurseitova';
			}
		},
		info: language => {
			if (language === 0) {
				return 'Социальный психолог, НЛП мастер, бизнес тренер';
			}
			if (language === 1) {
				return 'Әлеуметтік психолог, NLP шебері, бизнес-тренер';
			}
			if (language === 2) {
				return 'Sozialpsychologe, NLP-Master, Business Coach';
			}
		},
	},
	{
		order: 15,
		name: language => {
			if (language === 0) {
				return 'Иван Лайс';
			}
			if (language === 1) {
				return 'Иван Лайс';
			}
			if (language === 2) {
				return 'Ivan Lyays';
			}
		},
		info: language => {
			if (language === 0) {
				return 'Менеджер по продажам Европа и Азия „GRIMME Landmaschinenfabrik GmbH & Co. KG“';
			}
			if (language === 1) {
				return 'Менеджер по продажам Европа и Азия „GRIMME Landmaschinenfabrik GmbH & Co. KG“';
			}
			if (language === 2) {
				return 'Vertriebsleiter Europa und Asien „GRIMME Landmaschinenfabrik GmbH & Co. KG"';
			}
		},
	},
	{
		order: 10,
		name: language => {
			if (language === 0) {
				return 'Еркен Наурзбеков';
			}
			if (language === 1) {
				return 'Еркен Наурзбеков';
			}
			if (language === 2) {
				return 'Erken Naurzbekov';
			}
		},
		info: language => {
			if (language === 0) {
				return 'Заместитель Директора Департамента агропромышленного комплекса и пищевой промышленности НПП РК "Атамекен"';
			}
			if (language === 1) {
				return '«Атамекен» ҚР ҰКП Агроөнеркәсіптік кешен және тамақ өнеркәсібі департаменті директорының орынбасары';
			}
			if (language === 2) {
				return 'Stellvertretender Direktor der Abteilung für agroindustriellen Komplex und Lebensmittelindustrie von NCE RK "Atameken"';
			}
		},
	},
	{
		order: 23,
		name: language => {
			if (language === 0) {
				return 'Айдос Ибрагим';
			}
			if (language === 1) {
				return 'Айдос Ибрагим';
			}
			if (language === 2) {
				return 'Aidos Ibrahim';
			}
		},
		info: language => {
			if (language === 0) {
				return 'Дипломированный психолог, магистр, в данный момент докторант';
			}
			if (language === 1) {
				return 'Сертификатталған психолог, магистр, қазіргі уақытта докторант';
			}
			if (language === 2) {
				return 'Dipl. Psychologe, Master, derzeit Doktorand';
			}
		},
	},
	{
		order: 13,
		name: language => {
			if (language === 0) {
				return 'Д-р Вадим Ермаков';
			}
			if (language === 1) {
				return 'Д-р Вадим Ермаков';
			}
			if (language === 2) {
				return 'Dr. Wadim Jermakow';
			}
		},
		info: language => {
			if (language === 0) {
				return 'Руководитель программ, международные проекты, bbw Bildungswerk der Wirtschaft in Berlin und Brandenburg e.V.';
			}
			if (language === 1) {
				return 'Бағдарлама менеджері, халықаралық жобалар, bbw Bildungswerk der Wirtschaft in Berlin und Brandenburg e.V.';
			}
			if (language === 2) {
				return 'Programmmanager, Internationale Projekte, bbw Bildungswerk der Wirtschaft in Berlin und Brandenburg e.V.';
			}
		},
	},
	{
		order: 4,
		name: language => {
			if (language === 0) {
				return 'Мерей Исаева';
			}
			if (language === 1) {
				return 'Мерей Исаева';
			}
			if (language === 2) {
				return 'Merey Isaeva';
			}
		},
		info: language => {
			if (language === 0) {
				return 'Заместитель директора Департамента государстенной поддержки и защиты предпринимательства Министерства национальной экономики Республики Казахстан';
			}
			if (language === 1) {
				return 'Қазақстан Республикасы Ұлттық экономика министрлігі Мемлекеттік қолдау және кәсіпкерлікті қорғау департаменті директорының орынбасары';
			}
			if (language === 2) {
				return 'Stellvertretender Direktor der Abteilung für staatliche Unterstützung und Schutz des Unternehmertums des Ministeriums für Volkswirtschaft der Republik Kasachstan';
			}
		},
	},
	{
		order: 21,
		name: language => {
			if (language === 0) {
				return 'Юлия Пересыпкина';
			}
			if (language === 1) {
				return 'Юлия Пересыпкина';
			}
			if (language === 2) {
				return 'Julia Peresypkina';
			}
		},
		info: language => {
			if (language === 0) {
				return 'Компания «Аксиома А», участник программы';
			}
			if (language === 1) {
				return 'Аксиома компаниясы, бағдарламаға қатысушы';
			}
			if (language === 2) {
				return 'Aksioma Ein Unternehmen, Teilnehmer des Programms';
			}
		},
	},
	{
		order: 12,
		name: language => {
			if (language === 0) {
				return 'Айдархан Калиев';
			}
			if (language === 1) {
				return 'Айдархан Калиев';
			}
			if (language === 2) {
				return 'Aidarkhan Kaliev';
			}
		},
		info: language => {
			if (language === 0) {
				return 'Главный дизайнер Дома Моды «Асыл-Дизайн», к.т.н., доцент искусствоведения';
			}
			if (language === 1) {
				return '«Асыл-Дизайн» сән үйінің бас дизайнері, т.ғ.к., өнертану кафедрасының доценті';
			}
			if (language === 2) {
				return 'Chefdesigner des Modehauses Asyl-Design, Ph.D., außerordentlicher Professor für Kunstgeschichte';
			}
		},
	},
	{
		order: 11,
		name: language => {
			if (language === 0) {
				return 'Руслан Пушилин';
			}
			if (language === 1) {
				return 'Руслан Пушилин';
			}
			if (language === 2) {
				return 'Ruslan Pushilin';
			}
		},
		info: language => {
			if (language === 0) {
				return 'Генеральный директор Genesis Engineering Project Management Corporation';
			}
			if (language === 1) {
				return 'Genesis Engineering Project Management корпорациясының бас директоры';
			}
			if (language === 2) {
				return 'CEO der Genesis Engineering Project Management Corporation';
			}
		},
	},
	{
		order: 6,
		name: language => {
			if (language === 0) {
				return 'Махмут Томанов';
			}
			if (language === 1) {
				return 'Махмут Томанов';
			}
			if (language === 2) {
				return 'Mahmut Tomanow';
			}
		},
		info: language => {
			if (language === 0) {
				return 'к.э.н., ассоц. профессор, вице-президент Центрально-Азиатской Ассоциации Экспертов Цифровизации';
			}
			if (language === 1) {
				return 'Ph.D., доц. Профессор, Орталық Азия қауымдастығының вице-президенті Цифрландыру жөніндегі сарапшылар';
			}
			if (language === 2) {
				return 'Ph.D., Assoc. Professor, Vizepräsident der Zentralasiatischen Vereinigung Experten für Digitalisierung';
			}
		},
	},
	{
		order: 17,
		name: language => {
			if (language === 0) {
				return 'Ксения Кравченко';
			}
			if (language === 1) {
				return 'Ксения Кравченко';
			}
			if (language === 2) {
				return 'Xenia Krawtschenko';
			}
		},
		info: language => {
			if (language === 0) {
				return 'Компания «Битрикс24 Казахстан и Центральная Азия»';
			}
			if (language === 1) {
				return 'Bitrix24 Қазақстан және Орталық Азия';
			}
			if (language === 2) {
				return 'Bitrix24 Kasachstan und Zentralasien';
			}
		},
	},
	{
		order: 24,
		name: language => {
			if (language === 0) {
				return 'Курмангазы Турумбет';
			}
			if (language === 1) {
				return 'Курмангазы Турумбет';
			}
			if (language === 2) {
				return 'Kurmangazy Turumbet';
			}
		},
		info: language => {
			if (language === 0) {
				return 'Сертифицированный тренер по кайдзен, построению бизнес процессов, обучение и тренинг сотрудников крупных компаний, и консультирование предпринимателей МСБ';
			}
			if (language === 1) {
				return 'Кайзен, бизнес-процестерді құру, ірі компаниялардың қызметкерлерін оқыту және оқыту, ШОБ кәсіпкерлеріне кеңес беру бойынша сертификатталған жаттықтырушы';
			}
			if (language === 2) {
				return 'Zertifizierter Trainer für Kaizen, Aufbau von Geschäftsprozessen, Aus- und Weiterbildung von Mitarbeitern großer Unternehmen und Beratung von KMU-Unternehmern';
			}
		},
	},
	{
		order: 25,
		name: language => {
			if (language === 0) {
				return 'Наталья Онума';
			}
			if (language === 1) {
				return 'Наталья Онума';
			}
			if (language === 2) {
				return 'Natalia Onuma';
			}
		},
		info: language => {
			if (language === 0) {
				return 'Практик в мире моды ';
			}
			if (language === 1) {
				return 'Сән әлеміндегі тәжірибеші';
			}
			if (language === 2) {
				return 'Praktiker in der Modewelt';
			}
		},
	},
	{
		order: 7,
		name: language => {
			if (language === 0) {
				return 'Сауле Шауенова';
			}
			if (language === 1) {
				return 'Сауле Шауенова';
			}
			if (language === 2) {
				return 'Saule Schauenova';
			}
		},
		info: language => {
			if (language === 0) {
				return 'Основатель и генеральный директор группы компаний "Ютария LTD"';
			}
			if (language === 1) {
				return '«Ютария ЛТД» компаниялар тобының негізін қалаушы және бас директоры';
			}
			if (language === 2) {
				return 'Gründer und CEO der Unternehmensgruppe „Yutaria LTD“';
			}
		},
	},
	{
		order: 22,
		name: language => {
			if (language === 0) {
				return 'Олег Фирсенко';
			}
			if (language === 1) {
				return 'Олег Фирсенко';
			}
			if (language === 2) {
				return 'Oleg Firsenko';
			}
		},
		info: language => {
			if (language === 0) {
				return 'Торговая платформа «Satu.kz»';
			}
			if (language === 1) {
				return '«Satu.kz» сауда алаңы';
			}
			if (language === 2) {
				return 'Handelsplattform «Satu.kz»';
			}
		},
	},

	{
		order: 8,
		name: language => {
			if (language === 0) {
				return 'Андреа Елиш';
			}
			if (language === 1) {
				return 'Андреа Елиш';
			}
			if (language === 2) {
				return 'Andrea Elish';
			}
		},
		info: language => {
			if (language === 0) {
				return 'Руководитель проектов GIS';
			}
			if (language === 1) {
				return 'GIS жобасының менеджері';
			}
			if (language === 2) {
				return 'GIS-Projektleiter';
			}
		},
	},
	{
		order: 18,
		name: language => {
			if (language === 0) {
				return 'Елена Мищенко';
			}
			if (language === 1) {
				return 'Елена Мищенко';
			}
			if (language === 2) {
				return 'Elena Mischtschenko';
			}
		},
		info: language => {
			if (language === 0) {
				return 'Швейный салон “Аленушка”, участник программы';
			}
			if (language === 1) {
				return '«Алёнушка» тігін салоны, бағдарламаға қатысушы';
			}
			if (language === 2) {
				return 'Nähsalon „Alyonushka“, Teilnehmer des Programms';
			}
		},
	},
];

const notImageSpeakerIdx = [8, 9, 13];

export default function Speakers({ texts }) {
	return (
		<section className={styles.speakers} id="speakers">
			<h3 className="title">{texts.speakers}</h3>

			<ul className={styles.speakerList}>
				{speakers
					.sort((p, c) => p.order - c.order)
					.map((speaker, idx) => {
						speaker.image = `/img/${speaker.name(0)}.png`;
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
