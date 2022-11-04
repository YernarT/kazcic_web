import React, { useState } from 'react';

import styles from './style.module.css';

export default function Tabs() {
	const [section, setSection] = useState(1);

	return (
		<div className={styles.tabs}>
			<div className={styles.head}>
				{[1, 2, 3, 4].map(i => (
					<div
						className={`${styles.sectionNum} ${section === i ? 'active' : ''}`}
						key={i}
						onClick={() => setSection(i)}>
						{i} секция
					</div>
				))}
			</div>

			<Section1 activeSectionId={section} />
			<Section2 activeSectionId={section} />
			<Section3 activeSectionId={section} />
			<Section4 activeSectionId={section} />
		</div>
	);
}

const Section1 = ({ activeSectionId }) => (
	<section
		className={styles.section}
		style={{ display: activeSectionId === 1 ? 'block' : 'none' }}>
		<div className={styles.group}>
			<div className="date">14:00-14:10</div>

			<div className="title">Приветственное слово модератора:</div>

			<p className="item">
				Еренов Аян Айдарович, Председатель правления Внешнеторговой палаты
				Казахстана{' '}
			</p>
			<p className="item">
				Представитель Министерства национальной экономики Республики
			</p>
			<p className="item">
				Казахстан Представитель Федерального Министерства экономики и защиты
				климата Германии
			</p>
		</div>

		<div className={styles.group}>
			<div className="date">14:10-17:15</div>

			<div className="title">
				I Секция <br />
				Современные тенденции в сотрудничестве
			</div>

			<div className="subtitle">Модератор:</div>

			<p className="item">
				Эдуард Кинсбрунер, Региональный директор по Центральной Азии, Восточный
				комитет германской экономики
			</p>

			<div className="subtitle">Выступающие:</div>

			<p className="item">
				Д-р Пер Бродерзен, директор Альянса германского агробизнеса при
				Восточном комитете немецкой экономики
			</p>

			<div className="subtitle">
				Перспективы сотрудничества между казахстанским и германским агробизнесом
			</div>

			<p className="item">
				Еркен Наурзбеков, Заместитель Директора Департамента агропромышленного
				комплекса и пищевой промышленности НПП РК "Атамекен"{' '}
			</p>
			<div className="subtitle">
				Возможности Казахстана по продаже продовольственной продукции{' '}
			</div>
			<p className="item">
				Айсулу Акпекова, СПК «Урджар-Сут», участник программы{' '}
			</p>

			<div className="subtitle">
				Итоги обучения по программе «Fit for Partnership with Germany» и
				инструмента «Деловые связи»{' '}
			</div>

			<p className="item">
				Иван Лайс, менеджер по продажам Европа и Азия „GRIMME
				Landmaschinenfabrik GmbH & Co. KG“{' '}
			</p>

			<div className="subtitle">
				Инновационные и экономичные решения в области картофеле-, свекло- и
				овощеводства{' '}
			</div>
			<p className="item">Жанайдар Кумекбаев, Директор ТОО «Game Dev» </p>

			<div className="subtitle">
				АгроМаркет – маркетплейс для субъектов агропромышленного рынка{' '}
			</div>

			<div className="title">Тренинги</div>

			<p className="item"> Метод Кайдзен</p>

			<div className="subtitle">Тренер:</div>

			<p className="item">
				Курмангазы Турумбет, сертифицированный тренер по кайдзен, построению
				бизнес процессов, обучение и тренинг сотрудников крупных компаний, и
				консультирование предпринимателей МСБ
			</p>

			<p className="item">
				Представитель Министерства национальной экономики Республики
			</p>
			<p className="item">
				Казахстан Представитель Федерального Министерства экономики и защиты
				климата Германии
			</p>
		</div>
	</section>
);

const Section2 = ({ activeSectionId }) => (
	<section
		className={styles.section}
		style={{ display: activeSectionId === 2 ? 'block' : 'none' }}>
		<div className={styles.group}>
			<div className="date">14:00-14:10</div>

			<div className="title">Приветственное слово модератора:</div>

			<p className="item">
				Еренов Аян Айдарович, Председатель правления Внешнеторговой палаты
				Казахстана{' '}
			</p>
			<p className="item">
				Представитель Министерства национальной экономики Республики
			</p>
			<p className="item">
				Казахстан Представитель Федерального Министерства экономики и защиты
				климата Германии
			</p>
		</div>

		<div className={styles.group}>
			<div className="date">14:10-17:15</div>

			<div className="title">
				II Секция <br />
				Цифровизация и модернизация компании
			</div>

			<div className="subtitle">Модератор:</div>

			<p className="item">
				Асель Жанасова, Председатель Правления АО "Казпочта"
			</p>

			<div className="subtitle">Выступающие:</div>

			<p className="item">
				Дидар Ахмедин, Представитель малазийской компании Tass Tech
				International Sdn. Bhd. на рынках Центральной Азии и Восточной Европы и
				член ОО KAC
			</p>

			<p className="item">
				Ксения Кравченко, компания "Битрикс24 Казахстан и Центральная Азия"
			</p>

			<div className="subtitle">Цифровые инструменты современного бизнеса</div>

			<p className="item">
				Юлия Пересыпкина, компания "Акисиома А", участник программы
			</p>

			<div className="subtitle">
				Итоги обучения по программе «Fit for Partnership with Germany» и
				инструмента «Деловые связи»
			</div>

			<p className="item">Олег Фирсенко, торговая платформма "Satu.kz"</p>

			<div className="subtitle">
				Возможности цифровой платформы для развития бизнеса
			</div>

			<div className="title">Тренинги</div>
			<p className="item">
				Тренды в управлении человеческими ресурсами в мире и в Казахстане
			</p>

			<div className="subtitle">Тренер:</div>

			<p className="item">
				{' '}
				Гульмира Раисова, президент координационного совета Ассоциации HR
				менеджеров РК, менеджеров РК, партнер Empower people, SCP SHRM{' '}
			</p>
		</div>
	</section>
);

const Section3 = ({ activeSectionId }) => (
	<section
		className={styles.section}
		style={{ display: activeSectionId === 3 ? 'block' : 'none' }}>
		<div className={styles.group}>
			<div className="date">14:00-14:10</div>

			<div className="title">Приветственное слово модератора:</div>

			<p className="item">
				Еренов Аян Айдарович, Председатель правления Внешнеторговой палаты
				Казахстана{' '}
			</p>
			<p className="item">
				Представитель Министерства национальной экономики Республики
			</p>
			<p className="item">
				Казахстан Представитель Федерального Министерства экономики и защиты
				климата Германии
			</p>
		</div>

		<div className={styles.group}>
			<div className="date">14:10-17:15</div>

			<div className="title">
				III Секция <br />
				Современные экономические вызовы в отрасли легкой промышленности и фэшн
				индустрии
			</div>

			<div className="subtitle">Модератор:</div>

			<p className="item">
				Гульмира Уахитова, к.э.н., Председатель Правления СРО Союз ЮЛ и ИП «Нац.
				объединение предпринимателей легкой промышленности «Qaz Textile Industy»
			</p>

			<div className="subtitle">Выступающие:</div>

			<p className="item">
				Беджамин Редлингсхёфер, генеральный директор Thüringisches Institut für
				Textil- und KunststoffForschung e. V. (TITK)
			</p>

			<p className="item">
				Сауле Шауенова, основатель и генеральный директор группы компаний
				"Ютария LTD"
			</p>

			<p className="item">
				Наталья Онума, практик в мире моды с 2001 г. В Германии
			</p>

			<div className="subtitle">
				Пересмотр старых моделей бизнеса и новые перспективы в Германии в фэшн
				индустрии
			</div>

			<p className="item">
				Айдархан Калиев, главный дизайнер Дома Моды «Асыл-Дизайн», к.т.н.,
				доцент искусствоведения
			</p>

			<div className="subtitle">
				Опыт продвижения стиля «нео-фольклор» в глобальную Fashion индустрию (с
				точки зрения менеджмента)
			</div>
			<p className="item">
				Елена Мещенко, швейный салон “Аленушка”, участник программы
			</p>

			<div className="subtitle">
				Итоги обучения по программе «Fit for Partnership with Germany» и
				инструмента «Деловые связи»
			</div>

			<div className="title">Тренинги</div>

			<div className="item">Ритуалы в тайм-менеджменте</div>

			<div className="subtitle">Тренер:</div>

			<p className="item">
				{' '}
				Жанна Нурсеитова, социальный психолог, НЛП мастер, бизнес тренер
			</p>
		</div>
	</section>
);

const Section4 = ({ activeSectionId }) => (
	<section
		className={styles.section}
		style={{ display: activeSectionId === 4 ? 'block' : 'none' }}>
		<div className={styles.group}>
			<div className="date">14:00-14:10</div>

			<div className="title">Приветственное слово модератора::</div>

			<p className="item">
				Еренов Аян Айдарович, Председатель правления Внешнеторговой палаты
				Казахстана{' '}
			</p>
			<p className="item">
				Представитель Министерства национальной экономики Республики
			</p>
			<p className="item">
				Казахстан Представитель Федерального Министерства экономики и защиты
				климата Германии
			</p>
		</div>

		<div className={styles.group}>
			<div className="date">14:10-17:15</div>

			<div className="title">
				IV Секция <br />
				"Fit for partnership with Germany" - как установить контакт с немецкими
				компаниями, где и как найти подходящих партнеров?
			</div>

			<div className="subtitle">Модератор:</div>

			<p className="item">Изольда Хайнц, руководитель проектов GIZ</p>

			<div className="subtitle">Выступающие:</div>

			<div className="subtitle">
				Презентация Программы Федерального министерства экономики и защиты
				климата (BMWK) по подготовке менеджеров
			</div>

			<p className="item">
				Д-р Вадим Ермаков, руководитель программ, международные проекты, bbw
				Bildungswerk der Wirtschaft in Berlin und Brandenburg e.V.
			</p>

			<p className="item">
				Еркен Наурзбеков, Заместитель Директора Департамента агропромышленного
				комплекса и пищевой промышленности НПП РК "Атамекен"{' '}
			</p>

			<div className="subtitle">
				Поиск и установление контактов с немецкими деловыми партнерами
			</div>

			<div className="title">Тренинги</div>

			<p className="item">
				Тренды в управлении человеческими ресурсами в мире и в Казахстане
			</p>

			<div className="subtitle">Тренер:</div>

			<p className="item">
				Гульмира Раисова, президент координационного совета Ассоциации HR
				менеджеров РК, менеджеров РК, партнер Empower people, SCP SHRM
			</p>
		</div>
	</section>
);
