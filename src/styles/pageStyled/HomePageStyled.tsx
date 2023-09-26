import styled from "styled-components";

const HomePageStyled = styled.main`
  max-width: 1526px;
	margin: 0 auto;
	padding: 0 20px;

	@media (max-width: ${(props) => props.theme.sizes.mobileLarge}) {
		padding: 0 10px;
	}

	.language {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 1rem;
		padding: 1rem 0;

		button {
			background-color: #ffffff05;
			padding: 1rem 2rem;
			border-radius: 10px;
			border: none;
			color: ${(props) => props.theme.colors.text_primary};
			font-size: 1.2rem;
			cursor: pointer;
			transition: 0.3s;

			&:hover {
				color: ${(props) => props.theme.colors.text_secondary};
			}
		}
	}

	.container {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 1rem;
		padding: 2rem 0;
	}

	.faq {
		min-width: 70%;
		color: ${(props) => props.theme.colors.text_primary};
		background-color: #ffffff05;
		border-radius: 10px;
		padding: 1rem 2rem;

		&::-webkit-details-marker {
			display: none;
		}
	
		&-quest {
			font-size: 1.5rem;
			font-weight: 600;
			cursor: pointer;		
		}

		&-answ {
			font-size: 1.2rem;
			font-weight: 400;
			margin-top: 1rem;
		}
	}

`;

export default HomePageStyled;
