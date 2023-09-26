import styled from "styled-components";

interface HeaderStyledType {
	opened: boolean;
}

const HeaderStyled = styled.header<HeaderStyledType>`
	display: flex;
	align-items: center;
	justify-content: space-around;
	padding: 20px 0;
	z-index: 999;
	color: ${({ theme }) => theme.colors.text_secondary};
	overflow: ${({ opened }) => (opened ? "hidden" : "visible")};

	@media (max-width: ${({ theme }) => theme.sizes.mobileLarge}) {
		justify-content: space-between;
	}

	.hamburguer {
		display: none;
		font-size: 1.25rem;
		z-index: 999;

		@media (max-width: ${({ theme }) => theme.sizes.mobileLarge}) {
			display: block;
			z-index: 999;
			cursor: pointer;
			${({ opened }) =>
		opened && `
				position: fixed;
				top: 3rem;
				right: 3rem;
			`}
			
		}
	}

	.header {
		&-web {
			display: flex;
			align-items: center;
			justify-content: center;
			gap: 10px;

			.name {
				font-size: 1.5rem;
				font-weight: 700;
			}
		}

		&-routes {
			display: flex;
			align-items: center;
			justify-content: center;
			gap: 20px;
			font-size: 1rem;
			font-weight: 600;
			
			@media (max-width: ${({ theme }) => theme.sizes.mobileLarge}) {
				transform: translateY(${({ opened }) => (opened ? "0" : "-100%")});
				transition: all 0.5s ease-in-out;
				flex-direction: column;
				position: fixed;
				top: 0;
				left: 0;
				width: 100%;
				height: 100vh;
				background-color: #00000090;
				z-index: 998;
				gap: 10px;
			}

			&-link {
				transition: all 0.2s ease-in-out;
				cursor: pointer;

				&__button {
					padding: 7px 20px;
					border-radius: 10px;
					border: 2px solid #7b00ffad;
			background-color: #7b00ff54;
					color: ${({ theme }) => theme.colors.text_primary};
					transition: all 0.2s ease-in-out;
					cursor: pointer;

					&:hover {
						background-color: #7b00ff6f;
						color: ${({ theme }) => theme.colors.text_secondary};
					}
				}
			}
		}
	}
`;

export default HeaderStyled;
