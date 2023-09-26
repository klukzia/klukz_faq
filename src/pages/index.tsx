import HomePageStyled from "@zero/styles/pageStyled/HomePageStyled";
import type { NextPage } from "next";
import Link from "next/link";
import { faqData, faqDataEsp } from "@zero/libs/data/info";
import { useState } from "react";

const Home: NextPage = () => {
	const [lang, setLang] = useState<"en" | "es">("en");
	const data = lang === "en" ? faqData : faqDataEsp;

	return (
		<HomePageStyled>
			<div className="language">
				<button type="button" onClick={() => setLang("en")}>English</button>
				<button type="button" onClick={() => setLang("es")}>Español</button>
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
