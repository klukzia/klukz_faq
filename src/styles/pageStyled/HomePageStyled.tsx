import styled from "styled-components";

interface selectedLang {
	selectedLang: "en" | "es";
}

const HomePageStyled = styled.main<selectedLang>`
  max-width: 1526px;
	margin: 0 auto;
	padding: 0 20px;
	width: 70%;

	@media (max-width: ${(props) => props.theme.sizes.mobileLarge}) {
		padding: 0 10px;
	}

	.language {
		width: 100%;
		display: flex;
		justify-content: flex-end;
		align-items: center;
		gap: 1rem;
		padding: 1rem 0;

		.us-img {
			opacity: ${(props) => (props.selectedLang === "en" ? 1 : 0.5)};
		}

		.es-img {
			opacity: ${(props) => (props.selectedLang === "es" ? 1 : 0.5)};
		}
	}

	.banner {
		width: 100%;
		height: 300px;
		background-image: url("/images/klukz_background.png");
		background-position: center;
		background-size: cover;
		background-repeat: no-repeat;
		border-radius: 10px;
		margin: 2rem 0;
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
		width: 100%;
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
