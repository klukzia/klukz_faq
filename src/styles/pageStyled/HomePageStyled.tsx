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
		width: 100%;
	}

	.language {
		width: 100%;
		display: flex;
		justify-content: flex-end;
		align-items: center;
		gap: 1rem;
		padding: 1rem 0;

		button {
			border-radius: 50%;
			cursor: pointer;
		}

		.us-img,
		.es-img {
			transition: all 0.3s ease;
			cursor: pointer;

			&:hover {
				opacity: 1;
			}
		}

		.us-img {
			opacity: ${(props) => (props.selectedLang === "en" ? 1 : 0.5)};
		}

		.es-img {
			opacity: ${(props) => (props.selectedLang === "es" ? 1 : 0.5)};
		}
	}

	.banner {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100%;
		height: calc(3em + 20vh) ;
		background-image: url("/images/klukz_background.png");
		background-position: center;
		background-size: cover;
		background-repeat: no-repeat;
		border-radius: 10px;
		margin: 2rem 0;

		&-text {
			font-family: "Shrimps", sans-serif;
			font-size: calc(3em + 2vw);
			font-weight: 600;
			color: ${(props) => props.theme.colors.text_primary};
			text-align: center;
			padding-top: 2rem;
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
