import styled from "styled-components";
import githubico from "/github.svg"
import linkedinico from "/linkedin.svg"

export const Foooter = styled.footer`
    display: flex;
    justify-content: flex-start;
    gap: 40rem;
    margin: 10rem 0 0 10rem;
    padding-bottom: 2rem;
    background-color: black;
`;

export const Icon = styled.img`
    margin-left: 20px;
`;

function Footer() {
    return (
      <>
        <Foooter>
            <div>
                <div>Meu contato:</div>
                <div>(31)98888-4037</div>
            </div>
            <div>
                <div>Email:</div>
                <div>gas7@outlook.com</div>
            </div>
            <div>
                <a href="https://github.com/guilerm3" target="_blank">
                    <Icon src={githubico}/>
                </a>
                <a href="https://www.linkedin.com/in/guilherme-augusto-14069a214/" target="_blank">
                    <Icon src={linkedinico}/>
                </a>
            </div>
        </Foooter>
      </>
    );
}

export default Footer;
