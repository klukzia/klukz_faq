import styled from "styled-components";

const FooterStyled = styled.footer`
	width: 100%;
	height: 5vh;
	display: flex;
	justify-content: center;
	align-items: center;
	color: #ffffff70;
	font-size: 1.2rem;
	font-weight: 500;
	padding: 0 1rem;
	margin-top: 3rem;

	a {
		color:#ffffff70;
		text-decoration: none;
		font-weight: 700;
		transition: all 0.3s ease;

		&:hover {
			color: #f2a756;
		}		
	}
`;

export default FooterStyled;