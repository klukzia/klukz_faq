import React, { PropsWithChildren, useEffect } from "react";
import Header from "../Header/Header";
import LayoutStyled from "./LayoutStyled";

const Layout: React.FC<PropsWithChildren> = ({ children }) => {
	const a = "a";

	return (
		<LayoutStyled>
			<Header />
			{children}
		</LayoutStyled>
	);
};

export default Layout;
