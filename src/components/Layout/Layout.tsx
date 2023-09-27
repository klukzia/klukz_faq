import React, { PropsWithChildren, useEffect } from "react";
import Header from "../Header/Header";
import LayoutStyled from "./LayoutStyled";
import Head from "next/head";
import Footer from "../Footer/Footer";

const Layout: React.FC<PropsWithChildren> = ({ children }) => {
	const a = "a";

	return (
		<LayoutStyled>
			<Head>
				<title>kluzk - Faq</title>
				<meta name="description" content="Faq" />
				<link rel="icon" href="/images/klukz.ico" />
				{/* Open Graph metadata */}
				<meta property="og:title" content={'Klukz - Faq'} />
				<meta property="og:description" content={'Klukz - Faq'} />
				<meta property="og:type" content="website" />
				<meta property="og:site_name" content="Klukz" />
				<meta property="og:url" content={'https://klukz.info/'} />
				<meta property="og:image" content="/images/klukz.ico" />
			</Head>
			<Header />
			{children}
			<Footer />
		</LayoutStyled>
	);
};

export default Layout;
