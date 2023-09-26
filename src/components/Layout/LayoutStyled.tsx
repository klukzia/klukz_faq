import styled from "styled-components";

const LayoutStyled = styled.main`
	max-width: 1536px;
	margin: 0 auto;
	padding: 0 4rem;

	@media (max-width: ${({ theme }) => theme.sizes.mobileMedium}) {
		padding: 0 2rem;
	}

	@media (max-width: ${({ theme }) => theme.sizes.mobileSmall}) {
		padding: 0 1rem;
	}
`;

export default LayoutStyled;
