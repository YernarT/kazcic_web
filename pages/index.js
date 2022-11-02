import Head from 'next/head';

import styles from '../styles/Home.module.css';

import { Navbar, Intro, Info, Footer } from '../components';

export default function Home() {
	return (
		<div className={styles.container}>
			<Head>
				<title>DC KazCic</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Navbar />

			<Intro />
			<Info />

			<Footer />
		</div>
	);
}
