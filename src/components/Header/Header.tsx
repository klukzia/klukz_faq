import React, { useState } from "react";
import HeaderStyled from "./HeaderStyled";
import Image from "next/image";
import Link from "next/link";

interface IRouter {
	name: string;
	path: string;
	btn?: boolean;
}

const Header = () => {
	const [opened, setOpened] = useState(false);

	return (
		<HeaderStyled opened={opened}>
			<div className="header-web">
				<Image src="/images/klukz.png" alt="logo" width={50} height={50} style={{ borderRadius: "50%" }} />
				<span className="name">klukz</span>
			</div>
			<div className="header-routes">
				<Link href={"Home"} key={"Home"} passHref>
					<span className="header-routes-link">FAQ</span>
				</Link>
			</div>
			{/* rome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
			<div className="hamburguer" onClick={() => setOpened(!opened)}>
				<i className="fas fa-bars" />
			</div>
		</HeaderStyled>
	);
};

export default Header;
