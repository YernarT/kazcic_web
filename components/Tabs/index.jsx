/* eslint-disable react/no-unescaped-entities */
import React, { useState } from 'react';
import { useRecoilValue } from 'recoil';
import { languageAtom } from '../../atoms';

import styles from './style.module.css';

export default function Tabs() {
	const [section, setSection] = useState(1);
	const language = useRecoilValue(languageAtom);

	return (
		<div className={styles.tabs}>
			<div className={styles.head}>
				{[1, 2, 3, 4].map(i => (
					<div
						className={`${styles.sectionNum} ${section === i ? 'active' : ''}`}
						key={i}
						onClick={() => setSection(i)}>
						{i} {language === 0 && 'секция'}
						{language === 1 && 'бөлім'}
						{language === 2 && 'abschnitt'}
					</div>
				))}
			</div>

			<Section1 activeSectionId={section} language={language} />
			<Section2 activeSectionId={section} language={language} />
			<Section3 activeSectionId={section} language={language} />
			<Section4 activeSectionId={section} language={language} />
		</div>
	);
}

const CommonText = ({ language }) => (
	<div className={styles.group}>
		<div className="date">14:00-14:10</div>

		<div className="title">
			{language === 0 && 'Приветственное слово модератора:'}
			{language === 1 && 'Модератордың құттықтау сөзі:'}
			{language === 2 && 'Begrüßungsrede der Moderatorin:'}
		</div>

		<p className="item">
			{language === 0 &&
				'Аханова Салтанат Музарафовна, Заместитель председателя правления Внешнеторговой палаты Казахстана'}
			{language === 1 &&
				'Аханова Салтанат Мұзарафқызы, ҚР Сыртқы сауда палатасы басқарма төрағасының орынбасары'}
			{language === 2 &&
				'Akhanova Saltanat Muzarafovna, stellvertretende Vorstandsvorsitzende der Außenhandelskammer Kasachstans'}
		</p>
		<p className="item">
			{language === 0 &&
				'Моника Штинекер, представитель международной программы подготовки менеджеров Федерального министерства экономики и защиты климата (BMWK)'}
			{language === 1 &&
				'Моника Стинекер, Экономикалық істер және климатты қорғау федералды министрлігінің (BMWK) менеджмент бойынша халықаралық оқыту бағдарламасының өкілі'}
			{language === 2 &&
				'Monika Stinecker, Vertreterin des Internationalen Führungskräftetrainings des Bundesministeriums für Wirtschaft und Klimaschutz (BMWK)'}
		</p>
		<p className="item">
			{language === 0 &&
				'Дарын Абдуалиев, директор Департамента развития предпринимательства Министерства национальной экономики Республики Казахстан'}
			{language === 1 &&
				'Дарын Әбдуалиев, ҚР Ұлттық экономика министрлігі Кәсіпкерлікті дамыту департаментінің директоры'}
			{language === 2 &&
				'Daryn Abdualiev, Direktor der Abteilung für unternehmerische Entwicklung des Ministeriums für Volkswirtschaft der Republik Kasachstan'}
		</p>
	</div>
);

const Section1 = ({ activeSectionId, language }) => (
	<section
		className={styles.section}
		style={{ display: activeSectionId === 1 ? 'block' : 'none' }}>
		<CommonText language={language} />

		<div className={styles.group}>
			<div className="date">14:10-17:15</div>

			<div className="title">
				I {language === 0 && 'Секция'}
				{language === 1 && 'бөлім'}
				{language === 2 && 'Abschnitt'}
				<br />
				{language === 0 && 'Современные тенденции в агробизнесе'}
				{language === 1 && 'Агробизнестегі заманауи трендтер'}
				{language === 2 && 'Moderne Trends in der Agrarindustrie'}
			</div>

			<div className="subtitle">
				{language === 0 && 'Модератор:'}
				{language === 1 && 'Модератор:'}
				{language === 2 && 'Moderation:'}
			</div>

			<p className="item">
				{language === 0 &&
					'Эдуард Кинсбрунер, Региональный директор по Центральной Азии, Восточный комитет германской экономики'}
				{language === 1 &&
					'Эдуард Кинсбрунер, Германия экономикасының Шығыс комитетінің Орталық Азия бойынша аймақтық директоры'}
				{language === 2 &&
					'Eduard Kinsbrunner, Regionaldirektor für Zentralasien, Ostausschuss der Deutschen Wirtschaft'}
			</p>

			<div className="subtitle">
				{language === 0 && 'Выступающие:'}
				{language === 1 && 'Спикерлер:'}
				{language === 2 && 'Sprecher:'}
			</div>

			<p className="item">
				{language === 0 &&
					'Д-р Пер Бродерзен, директор Альянса германского агробизнеса при Восточном комитете немецкой экономики'}
				{language === 1 &&
					'Германия экономикасының Шығыс комитеті жанындағы неміс агробизнес альянсының директоры'}
				{language === 2 &&
					'Dr. Per Brodersen, Geschäftsführer der German Agribusiness Alliance im Ostausschuss der Deutschen Wirtschaft'}
			</p>

			<div className="subtitle">
				{language === 0 &&
					'Тема: Перспективы сотрудничества между казахстанским и германским агробизнесом'}
				{language === 1 &&
					'Тақырыбы: Қазақстандық және неміс АӨК ынтымақтастығы перспективалары'}
				{language === 2 &&
					'Thema: Perspektiven der Zusammenarbeit zwischen kasachischer und deutscher Agrarindustrie'}
			</div>

			<p className="item">
				{language === 0 &&
					'Еркен Наурзбеков, Заместитель Директора Департамента агропромышленного комплекса и пищевой промышленности НПП РК "Атамекен"'}
				{language === 1 &&
					'Еркен Наурзбеков, ҚР ҰКП Агроөнеркәсіптік кешен және тамақ өнеркәсібі департаменті директорының орынбасары"Атамекен"'}
				{language === 2 &&
					'Yerken Naurzbekov, Stellvertretender Direktor der Abteilung für Agrarindustriekomplex und Lebensmittelindustrie, NCE RK „Atameken“'}
			</p>

			<div className="subtitle">
				{language === 0 &&
					'Тема: Возможности Казахстана по продаже продовольственной продукции'}
				{language === 1 &&
					'Тақырыбы: Қазақстанның азық-түлік өнімдерін өткізу мүмкіндіктері'}
				{language === 2 &&
					'Thema: Möglichkeiten Kasachstans, Lebensmittel zu verkaufen'}
			</div>
			<p className="item">
				{language === 0 &&
					'Айсулу Акпекова, СПК «Урджар-Сут», участник программы '}
				{language === 1 &&
					'Айсулу Акпекова, «Үржар-Сүт» СПК, бағдарламаға қатысушы'}
				{language === 2 &&
					'Aisulu Akpekova, SPK "Urjar-Sut", Teilnehmerin des Programms'}
			</p>

			<div className="subtitle">
				{language === 0 &&
					'Тема: Итоги обучения по программе «Fit for Partnership with Germany» и инструмента «Деловые связи»'}
				{language === 1 &&
					'Тақырыбы: «Германиямен серіктестікке жарамды» оқу бағдарламасының нәтижелері және «Іскерлік қатынастар» құралы'}
				{language === 2 &&
					'Thema: Ergebnisse des Trainingsprogramms „Fit for Partnership with Germany“ und Werkzeug "Geschäftsbeziehungen"'}
			</div>

			<p className="item">
				{language === 0 &&
					'Иван Лайс, менеджер по продажам Европа и Азия „GRIMME Landmaschinenfabrik GmbH & Co. KG“'}
				{language === 1 &&
					'Иван Лайс, Еуропа және Азия бойынша сату менеджері «GRIMME Landmaschinenfabrik GmbH & Co. КГ»'}
				{language === 2 &&
					'Ivan Lais, Vertriebsleiter Europa und Asien „GRIMME Landmaschinenfabrik GmbH & Co. KG"'}
			</p>

			<div className="subtitle">
				{language === 0 &&
					'Тема: Инновационные и экономичные решения в области картофеле-, свекло- и овощеводства'}
				{language === 1 &&
					'Тақырыбы: Картоп, қызылша және көкөніс өндірісінің инновациялық және үнемді шешімдері'}
				{language === 2 &&
					'Thema: Innovative und wirtschaftliche Lösungen für die Kartoffel-, Rüben- und Gemüseproduktion'}
			</div>

			<p className="item">
				{language === 0 && 'Жанайдар Кумекбаев, Директор ТОО «Game Dev»'}
				{language === 1 && 'Жанайдар Кумекбаев, «Game Dev» ЖШС директоры'}
				{language === 2 && 'Жанайдар Кумекбаев, Директор ТОО «Game Dev»'}
			</p>

			<div className="subtitle">
				{language === 0 &&
					'Тема: АгроМаркет – маркетплейс для субъектов агропромышленного рынка'}
				{language === 1 &&
					'Тақырыбы: АгроМаркет – агроөнеркәсіптік нарық субъектілерінің базар алаңы'}
				{language === 2 &&
					'Тема: АгроМаркет – маркетплейс для субъектов агропромышленного рынка'}
			</div>

			<div className="title">
				{language === 0 && 'Тренинги'}
				{language === 1 && 'Тренингтер'}
				{language === 2 && 'Schulungen'}
			</div>

			<p className="item">
				{language === 0 && 'Метод Кайдзен'}
				{language === 1 && 'Кайзен әдісі'}
				{language === 2 && 'Kaizen-Methode'}
			</p>

			<div className="subtitle">
				{language === 0 && 'Тренер:'}
				{language === 1 && 'Тренер:'}
				{language === 2 && 'Trainer: '}
			</div>

			<p className="item">
				{language === 0 &&
					'Курмангазы Турумбет, сертифицированный тренер по кайдзен, построению бизнес процессов, обучение и тренинг сотрудников крупных компаний, и консультирование предпринимателей МСБ'}
				{language === 1 &&
					'Құрманғазы Тұрымбет, кайдзен, бизнес-процестерді құру, ірі компаниялардың қызметкерлерін оқыту және оқыту, ШОБ кәсіпкерлеріне кеңес беру бойынша сертификатталған тренер'}
				{language === 2 &&
					'Kurmangazy Turumbet, zertifizierter Trainer für Kaizen, Aufbau von Geschäftsprozessen, Schulung und Schulung von Mitarbeitern großer Unternehmen und Beratung von KMU-Unternehmern'}
			</p>
		</div>
	</section>
);

const Section2 = ({ activeSectionId, language }) => (
	<section
		className={styles.section}
		style={{ display: activeSectionId === 2 ? 'block' : 'none' }}>
		<CommonText language={language} />

		<div className={styles.group}>
			<div className="date">14:10-17:15</div>

			<div className="title">
				II {language === 0 && 'Секция'}
				{language === 1 && 'бөлім'}
				{language === 2 && 'Abschnitt'} <br />
				{language === 0 && 'Цифровизация и модернизация компании'}
				{language === 1 && 'Компанияны цифрландыру және жаңғырту'}
				{language === 2 &&
					'Digitalisierung und Modernisierung des Unternehmens'}
			</div>

			<div className="subtitle">
				{language === 0 && 'Модератор:'}
				{language === 1 && 'Модератор:'}
				{language === 2 && 'Moderation:'}
			</div>

			<p className="item">
				{language === 0 && 'уточняется'}
				{language === 1 && 'уточняется'}
				{language === 2 && 'уточняется'}
			</p>

			<div className="subtitle">
				{language === 0 && 'Выступающие:'}
				{language === 1 && 'Спикерлер:'}
				{language === 2 && 'Sprecher:'}
			</div>

			<p className="item">
				{language === 0 &&
					'Махмут Томанов, к.э.н., ассоц.профессор, вице-президент Центрально-Азиатской Ассоциации Экспертов Цифровизации'}
				{language === 1 &&
					'Махмут Томанов, экономика ғылымдарының кандидаты, доцент, Цифрландыру сарапшылары Орталық Азия қауымдастығының вице-президенті'}
				{language === 2 &&
					'Makhmut Tomanov, PhD in Wirtschaftswissenschaften, außerordentlicher Professor, Vizepräsident der Central Asian Association of Digitalization Experts'}
			</p>

			<div className="subtitle">
				{language === 0 &&
					'Тема: Цифровизация МСБ и промышленных предприятий РК'}
				{language === 1 &&
					'Тақырыбы: Қазақстан Республикасының ШОБ және өнеркәсіптік кәсіпорындарын цифрландыру'}
				{language === 2 &&
					'Thema: Digitalisierung von KMU und Industrieunternehmen der Republik Kasachstan'}
			</div>

			<p className="item">
				{language === 0 &&
					'Руслан Пушилин, генеральный директор Genesis Engineering Project Management Corporation'}
				{language === 1 &&
					'Руслан Пушилин, Genesis Engineering Project Management корпорациясының бас директоры'}
				{language === 2 &&
					'Ruslan Pushilin, Generaldirektor der Genesis Engineering Project Management Corporation'}
			</p>

			<div className="subtitle">
				{language === 0 &&
					'Тема: Инжиниринг Центров обработки данных на базе немецких технологий'}
				{language === 1 &&
					'Тақырыбы: Неміс технологияларына негізделген деректер орталығы инженериясы'}
				{language === 2 &&
					'Thema: Rechenzentrumstechnik auf Basis deutscher Technologien'}
			</div>

			<p className="item">
				{language === 0 &&
					'Дидар Ахмедин, директор ТОО «Bestinet Kazakhstan» и член ОО «Kaz Alpine Club»'}
				{language === 1 &&
					'Дидар Ахмедин, «Бестинет Казахстан» ЖШС директоры және «Kaz Alpine Club» ҮЕҰ мүшесі'}
				{language === 2 &&
					'Didar Akhmedin, Direktor von Bestinet Kazakhstan LLP und Mitglied der NGO Kaz Alpine Club'}
			</p>

			<div className="subtitle">
				{language === 0 &&
					'Тема: Модернизация туризма в Республике Казахстан с использованием цифровой платформы'}
				{language === 1 &&
					'Тақырыбы: Цифрлық платформаны қолдану арқылы Қазақстан Республикасындағы туризмді жаңғырту'}
				{language === 2 &&
					'Thema: Modernisierung des Tourismus in der Republik Kasachstan durch eine digitale Plattform'}
			</div>

			<p className="item">
				{language === 0 &&
					'Ксения Кравченко, компания "Битрикс24 Казахстан и Центральная Азия"'}
				{language === 1 &&
					'Ксения Кравченко, «Bitrix24 Қазақстан және Орталық Азия» компаниясы'}
				{language === 2 &&
					'Ksenia Kravchenko, Bitrix24 Kasachstan und Zentralasien'}
			</p>

			<div className="subtitle">
				{language === 0 && 'Тема: Цифровые инструменты современного бизнеса'}
				{language === 1 && 'Тақырыбы: Қазіргі бизнестің цифрлық құралдары'}
				{language === 2 && 'Thema: Digitale Werkzeuge des modernen Business'}
			</div>

			<p className="item">
				{language === 0 &&
					'Юлия Пересыпкина, компания "Акисиома А", участник программы'}
				{language === 1 &&
					'Юлия Пересыпкина, компаниясы «Акисиома А», бағдарламаға қатысушы'}
				{language === 2 &&
					'Yulia Peresypkina, Firma Akisioma A, Teilnehmerin des Programms'}
			</p>

			<div className="subtitle">
				{language === 0 &&
					'Тема: Итоги обучения по программе «Fit for Partnership with Germany» и инструмента «Деловые связи»'}
				{language === 1 &&
					'Тақырыбы: «Германиямен серіктестікке жарамды» оқу бағдарламасының нәтижелері және «Іскерлік қатынастар» құралы'}
				{language === 2 &&
					'Thema: Ergebnisse des Trainingsprogramms „Fit for Partnership with Germany“ und Werkzeug "Geschäftsbeziehungen"'}
			</div>

			<p className="item">
				{language === 0 && 'Олег Фирсенко, торговая платформма "Satu.kz"'}
				{language === 1 && 'Олег Фирсенко, «Satu.kz» сауда алаңы'}
				{language === 2 && 'Олег Фирсенко, торговая платформма "Satu.kz"'}
			</p>

			<div className="subtitle">
				{language === 0 &&
					'Тема: Возможности цифровой платформы для развития бизнеса '}
				{language === 1 &&
					'Тақырыбы: Бизнесті дамыту үшін цифрлық платформаның мүмкіндіктері'}
				{language === 2 &&
					'Тема: Возможности цифровой платформы для развития бизнеса '}
			</div>

			<div className="title">
				{language === 0 && 'Тренинги'}
				{language === 1 && 'Тренингтер'}
				{language === 2 && 'Schulungen'}
			</div>

			<p className="item">
				{language === 0 && 'Проактивность, как элемент успешной жизни'}
				{language === 1 && 'Белсенділік табысты өмірдің элементі ретінде'}
				{language === 2 &&
					'Proaktivität als Element eines erfolgreichen Lebens'}
			</p>

			<div className="subtitle">
				{language === 0 && 'Тренер:'}
				{language === 1 && 'Тренер:'}
				{language === 2 && 'Trainer: '}
			</div>

			<p className="item">
				{language === 0 &&
					'Айдос Ибрагим, дипломированный психолог, магистр, в данный момент докторант. Более трех лет работы по семи навыкам высокоэффективных людей Стивена Кови. '}
				{language === 1 &&
					'Айдос Ибрагим, психолог, магистр, қазіргі уақытта докторант. Стивен Ковидің «Жоғары тиімді адамдардың жеті әдеті» бойынша үш жылдан астам жұмыс.'}
				{language === 2 &&
					'Aidos Ibragim, Diplom-Psychologe, Master, derzeit Doktorand. Über drei Jahre Arbeit an Stephen Coveys Seven Habits of Highly Effective People.'}
			</p>
		</div>
	</section>
);

const Section3 = ({ activeSectionId, language }) => (
	<section
		className={styles.section}
		style={{ display: activeSectionId === 3 ? 'block' : 'none' }}>
		<CommonText language={language} />

		<div className={styles.group}>
			<div className="date">14:10-17:15</div>

			<div className="title">
				III {language === 0 && 'Секция'}
				{language === 1 && 'бөлім'}
				{language === 2 && 'Abschnitt'} <br />
				{language === 0 &&
					'Современные экономические вызовы в отрасли легкой промышленности и фэшн индустрии'}
				{language === 1 &&
					'Жеңіл өнеркәсіп пен сән индустриясындағы заманауи экономикалық міндеттер'}
				{language === 2 &&
					'Moderne wirtschaftliche Herausforderungen in der Leicht- und Modeindustrie'}
			</div>

			<div className="subtitle">
				{language === 0 && 'Модератор:'}
				{language === 1 && 'Модератор:'}
				{language === 2 && 'Moderation:'}
			</div>

			<p className="item">
				{language === 0 &&
					'Гульмира Уахитова, к.э.н., Председатель Правления СРО Союз ЮЛ и ИП «Нац. объединение предпринимателей легкой промышленности «Qaz Textile Industy»'}
				{language === 1 &&
					'Гүлмира Уахитова, ф.ғ.к. «Qaz Textile Industry» жеңіл өнеркәсіп кәсіпкерлері қауымдастығы'}
				{language === 2 &&
					'Gulmira Uakhitova, Ph.D. Verband der Unternehmer der Leichtindustrie "Qaz Textile Industry"'}
			</p>

			<div className="subtitle">
				{language === 0 && 'Выступающие:'}
				{language === 1 && 'Спикерлер:'}
				{language === 2 && 'Sprecher:'}
			</div>

			<p className="item">
				{language === 0 &&
					'Сауле Шауенова, основатель и генеральный директор группы компаний "Ютария LTD" '}
				{language === 1 &&
					'Сауле Шауенова, «Ютария ЛТД» компаниялар тобының негізін қалаушы және бас директоры'}
				{language === 2 &&
					'Saule Shauenova, Gründerin und Generaldirektorin der Unternehmensgruppe „Yutaria LTD“'}
			</p>

			<p className="item">
				{language === 0 &&
					'Наталья Онума, практик в мире моды с 2001 г. в Германии'}
				{language === 1 &&
					'Наталья Онума, Германияда 2001 жылдан бастап сән әлеміндегі тәжірибеші'}
				{language === 2 &&
					'Natalia Onuma, Praktikerin in der Modewelt seit 2001 in Deutschland'}
			</p>

			<div className="subtitle">
				{language === 0 &&
					'Тема: Пересмотр старых моделей бизнеса и новые перспективы фэшн индустрии в Германии'}
				{language === 1 &&
					'Тақырыбы: Германиядағы сән индустриясының ескі бизнес үлгілерін және жаңа перспективаларын қайта қарау'}
				{language === 2 &&
					'Thema: Wiederbegegnung alter Geschäftsmodelle und neue Perspektiven für die Modebranche in Deutschland'}
			</div>

			<p className="item">
				{language === 0 &&
					'Айдархан Калиев, главный дизайнер Дома Моды «Асыл-Дизайн», к.т.н., доцент искусствоведения'}
				{language === 1 &&
					'Айдархан Калиев, «Асыл-Дизайн» сән үйінің бас дизайнері, т.ғ.к., өнертану кафедрасының доценті'}
				{language === 2 &&
					'Aidarkhan Kaliev, Chefdesigner des Modehauses Asyl-Design, Ph.D., außerordentlicher Professor für Kunstgeschichte'}
			</p>

			<div className="subtitle">
				{language === 0 &&
					'Тема: Опыт продвижения стиля «нео-фольклор» в глобальную Fashion индустрию (с точки зрения менеджмента)'}
				{language === 1 &&
					'Тақырыбы: Әлемдік сән индустриясында «нео-фольклор» стилін ілгерілету тәжірибесі (менеджмент тұрғысынан)'}
				{language === 2 &&
					'Thema: Erfahrung in der Förderung des „Neo-Folklore“-Stils in der globalen Modebranche (in Bezug auf das Management)'}
			</div>

			<p className="item">
				{language === 0 &&
					'Елена Мищенко, швейный салон “Аленушка”, участник программы'}
				{language === 1 &&
					'Елена Мищенко, «Алёнушка» тігін салоны, бағдарламаға қатысушы'}
				{language === 2 &&
					'Elena Mishchenko, Nähsalon "Alyonushka", Teilnehmerin des Programms'}
			</p>

			<div className="subtitle">
				{language === 0 &&
					'Тема: Итоги обучения по программе «Fit for Partnership with Germany» и инструмента «Деловые связи»'}
				{language === 1 &&
					'Тақырыбы: «Германиямен серіктестікке жарамды» оқу бағдарламасының нәтижелері және «Іскерлік қатынастар» құралы'}
				{language === 2 &&
					'Thema: Ergebnisse des Trainingsprogramms „Fit for Partnership with Germany“ und Werkzeug "Geschäftsbeziehungen"'}
			</div>

			<p className="item">
				{language === 0 &&
					'Гульмира Уахитова, к.э.н., Председатель Правления СРО Союз ЮЛ и ИП «Нац. объединение предпринимателей легкой промышленности «Qaz Textile Industy»'}
				{language === 1 &&
					'Гульмира Уахитова, к.э.н., Заңды тұлғалар одағы және АЖ СРО Басқарма төрағасы «Нат. «Qaz Textile Industry» жеңіл өнеркәсіп кәсіпкерлері қауымдастығы'}
				{language === 2 &&
					'Gulmira Uakhitova, Ph.D. Verband der Unternehmer der Leichtindustrie "Qaz Textile Industry"'}
			</p>

			<div className="subtitle">
				{language === 0 && 'Тема: Тренды и технологии FASHION индустрии'}
				{language === 1 &&
					'Тақырыбы: FASHION индустриясының трендтері мен технологиялары'}
				{language === 2 && 'Thema: Trends und Technologien der FASHION-Branche'}
			</div>

			<div className="title">
				{language === 0 && 'Тренинги'}
				{language === 1 && 'Тренингтер'}
				{language === 2 && 'Schulungen'}
			</div>

			<p className="item">
				{language === 0 && 'Ритуалы в тайм-менеджменте'}
				{language === 1 && 'Уақытты басқарудағы рәсімдер'}
				{language === 2 && 'Rituale im Zeitmanagement'}
			</p>

			<div className="subtitle">
				{language === 0 && 'Тренер:'}
				{language === 1 && 'Тренер:'}
				{language === 2 && 'Trainer: '}
			</div>

			<p className="item">
				{language === 0 &&
					'Жанара Нурсеитова, социальный психолог, НЛП мастер, бизнес тренер'}
				{language === 1 &&
					'Жанара Нұрсейітова, әлеуметтік психолог, NLP шебері, бизнес-тренер'}
				{language === 2 &&
					'Zhanara Nurseitova, Sozialpsychologin, NLP-Meisterin, Business Coach'}
			</p>
		</div>
	</section>
);

const Section4 = ({ activeSectionId, language }) => (
	<section
		className={styles.section}
		style={{ display: activeSectionId === 4 ? 'block' : 'none' }}>
		<CommonText language={language} />

		<div className={styles.group}>
			<div className="date">14:10-17:15</div>

			<div className="title">
				IV {language === 0 && 'Секция'}
				{language === 1 && 'бөлім'}
				{language === 2 && 'Abschnitt'} <br />
				{language === 0 &&
					'"Fit for partnership with Germany" - как установить контакт с немецкими компаниями, где и как найти подходящих партнеров?'}
				{language === 1 &&
					'«Fit for partnership with Germany» - неміс компанияларымен қалай байланыс орнатуға болады, лайықты серіктестерді қайдан және қалай табуға болады?'}
				{language === 2 &&
					'„Fit for Partnership with Germany“ – wie knüpft man Kontakte zu deutschen Unternehmen, wo und wie findet man geeignete Partner?'}
			</div>

			<div className="subtitle">
				{language === 0 && 'Модератор:'}
				{language === 1 && 'Модератор:'}
				{language === 2 && 'Moderation:'}
			</div>

			<p className="item">
				{language === 0 && 'Владимир Богданов, представитель GIZ'}
				{language === 1 && 'Владимир Богданов, GIZ өкілі'}
				{language === 2 && 'Vladimir Bogdanov, GIZ-Vertreter'}
			</p>

			<div className="subtitle">
				{language === 0 && 'Выступающие:'}
				{language === 1 && 'Спикерлер:'}
				{language === 2 && 'Sprecher:'}
			</div>

			<p className="item">
				{language === 0 &&
					'Мерей Исаева, заместитель директора Департамента развити предпринимательства Министерства национальной экономики Республики Казахстан'}
				{language === 1 &&
					'Мерей Исаева, Даму департаменті директорының орынбасары Ұлттық экономика министрлігінің кәсіпкерлік Қазақстан Республикасы'}
				{language === 2 &&
					'Merey Isayeva, stellvertretende Direktorin der Entwicklungsabteilung Unternehmertum des Ministeriums für Volkswirtschaft Republik Kasachstan'}
			</p>

			<div className="subtitle">
				{language === 0 &&
					'Тема: Меры государственной поддержки и развития предпринимательства в РК'}
				{language === 1 &&
					'Тақырыбы: Қазақстан Республикасындағы кәсіпкерлікті мемлекеттік қолдау және дамыту шаралары'}
				{language === 2 &&
					'Thema: Maßnahmen der staatlichen Unterstützung und Entwicklung des Unternehmertums in der Republik Kasachstan'}
			</div>

			<p className="item">
				{language === 0 && 'Владимир Богданов, представитель GIZ'}
				{language === 1 && 'Владимир Богданов, GIZ өкілі'}
				{language === 2 && 'Vladimir Bogdanov, GIZ-Vertreter'}
			</p>

			<div className="subtitle">
				{language === 0 &&
					'Тема: Презентация Программы Федерального министерства экономики и защиты климата (BMWK) по подготовке менеджеров'}
				{language === 1 &&
					'Тақырыбы: Федералдық экономика және климатты қорғау министрлігінің (BMWK) менеджерлерді оқыту бағдарламасының тұсаукесері'}
				{language === 2 &&
					'Thema: Vorstellung des Programms des Bundesministeriums für Wirtschaft und Klimaschutz (BMWK) zur Ausbildung von Führungskräften'}
			</div>

			<p className="item">
				{language === 0 &&
					'Д-р Вадим Ермаков, руководитель программ, международные проекты, bbw Bildungswerk der Wirtschaft in Berlin und Brandenburg e.V.'}
				{language === 1 &&
					'Д-р Вадим Ермаков, Бағдарлама менеджері, халықаралық жобалар, bbw Bildungswerk der Wirtschaft in Berlin und Brandenburg e.V.'}
				{language === 2 &&
					'Dr. Vadim Ermakov, Programmleiter Internationale Projekte, bbw Bildungswerk der Wirtschaft in Berlin und Brandenburg e.V.'}
			</p>

			<div className="subtitle">
				{language === 0 &&
					'Тема: Поиск и установление контактов с немецкими деловыми партнерами'}
				{language === 1 &&
					'Тақырыбы: Неміс іскер серіктестерін табу және байланыс орнату'}
				{language === 2 &&
					'Thema: Kontakte finden und aufbauen zu deutschen Geschäftspartnern'}
			</div>

			<div className="title">
				{language === 0 && 'Тренинги'}
				{language === 1 && 'Тренингтер'}
				{language === 2 && 'Schulungen'}
			</div>

			<p className="item">
				{language === 0 &&
					'Тренды в управлении человеческими ресурсами в мире и в Казахстане'}
				{language === 1 &&
					'Әлемдегі және Қазақстандағы адам ресурстарын басқарудың тенденциялары'}
				{language === 2 &&
					'Trends im Personalmanagement in der Welt und in Kasachstan'}
			</p>

			<div className="subtitle">
				{language === 0 && 'Тренер:'}
				{language === 1 && 'Тренер:'}
				{language === 2 && 'Trainer: '}
			</div>

			<p className="item">
				{language === 0 &&
					'Гульмира Раисова, президент координационного совета Ассоциации HR менеджеров РК, менеджеров РК, партнер Empower people, SCP SHRM'}
				{language === 1 &&
					'Гүлмира Раисова, Қазақстан Республикасы HR-менеджерлер қауымдастығының Үйлестіру кеңесінің президенті, Қазақстан Республикасының менеджерлері, Empower people серіктесі, SCP SHRM'}
				{language === 2 &&
					'Gulmira Raisova, Präsidentin des Koordinierungsrates der Vereinigung der Personalmanager der Republik Kasachstan, Manager der Republik Kasachstan, Partner von Empower People, SCP SHRM'}
			</p>
		</div>
	</section>
);
