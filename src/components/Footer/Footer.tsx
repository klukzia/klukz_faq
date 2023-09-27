import React from 'react'
import FooterStyled from './FooterStyled';

const Footer = (): JSX.Element => {

	const a = "a";

	return (
		<FooterStyled>
			<span>Made with ❤️ by <a href='https://github.com/markox36'>Markox</a></span>
		</FooterStyled>
	)
}

export default Footer