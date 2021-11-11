import styled from 'styled-components';
import illustrationImg from '../assets/illustration.svg';
import logoImg from '../assets/logo.svg';

import { Button } from '../components/Button'

export const HomeStyles = styled.div`
	display: flex;
	align-items: stretch;
	height: 100vh;
`;

export const AsideStyles = styled.aside`
	display: flex;
	flex-direction: column;
	justify-content: center;
	flex: 6;
	background-color: #835afd;
	color: #fff;
	padding: 120px 80px;

	img {
      max-width: 320px;
    }

    strong {
      font: 700 36px 'Poppins', sans-serif;
      line-height: 42px;
      margin-top: 16px;
    }

    p {
      font-size: 24px;
      line-height: 32px;
      margin-top: 16px;
      color: #f8f8f8;
    }
`;

export const MainStyles = styled.main`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	flex: 8;
	padding: 0 32px;

	.content {
		display: flex;
		flex-direction: column;
		width: 100%;
		max-width: 320px;
		align-items: stretch;
		text-align: center;
        
        > img {
		    align-self: center;
		}

		h2 {
            font-size: 24px;
            margin: 64px 0 24px;
            font-family: 'Poppins', sans-serif;
		}

		form {
			input {
				height: 50px;
				border-radius: 8px;
				padding: 0 16px;
				background: #FFF;
				border: 1px solid #a8a8b3;
			}

			button { 
				margin-top: 16px;
			}

			button, input {
				width: 100%;
			}
		}

		p {
		font-size: 14px;
		color: #737380;
		margin-top: 16px;

			a {
				color: #e559f9;
                text-decoration: none;
			}
		}

		
	}

`;

export function NewRoom() {
	return (
		<HomeStyles>
			<AsideStyles>
				<img src={illustrationImg} alt='Illustration' />
				<strong>Toda pergunta tem uma resposta.</strong>
				<p>Aprenda e compartilhe conhecimento com outras pessoas</p>
			</AsideStyles>
			<MainStyles>
				<div className='content'>
					<img src={logoImg} alt='Logo Letmeask' />

                    <h2>Criar uma nova sala</h2>
					<form>
						<input type='text' placeholder='Nome da sala' />
						<Button type='submit'>
							Criar sala
						</Button>
					</form>
                    <p>Quer entrar em uma sala existente? <a href="#">Clique aqui</a></p>
				</div>
			</MainStyles>
		</HomeStyles>
	);
}
