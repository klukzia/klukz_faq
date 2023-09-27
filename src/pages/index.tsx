import HomePageStyled from "@zero/styles/pageStyled/HomePageStyled";
import type { NextPage } from "next";
import Link from "next/link";
import Image from "next/image";
import { faqData, faqDataEsp } from "@zero/libs/data/info";
import { useState } from "react";

const Home: NextPage = () => {
	const [lang, setLang] = useState<"en" | "es">("en");
	const data = lang === "en" ? faqData : faqDataEsp;

	return (
		<HomePageStyled selectedLang={lang}>
			<div className="banner">
				<span className="banner-text">FAQ</span>
			</div>
			<div className="language">
				<button type="button" onClick={() => setLang("en")}><Image src={"/images/usa.png"} className="us-img" width={30} height={30} alt="english" /></button>
				<button type="button" onClick={() => setLang("es")}><Image src={"/images/spain.png"} className="es-img" width={30} height={30} alt="spain" /></button>
			</div>
			<div className="container">
				{data.map(item => (
					<details key={item.answer} className="faq">
						<summary className="faq-quest">{item.question}</summary>
						<div className="faq-answ">
							{item.answer}
						</div>
					</details>
				))}
			</div>
		</HomePageStyled>
	);
};

export default Home;
