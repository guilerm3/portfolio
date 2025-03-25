import styled from "styled-components";

export const Div = styled.div`
    padding: 1rem 1rem 1rem 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-weight: 500;
`;

export const ItemsContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-grow: 1;
    gap: 5rem;
`;

export const Item = styled.div`
    margin: 0 1.25rem;
    transition: background-color 0.3s ease;
    border-radius: 20px;
    padding:10px;

    &:hover {
        background-color: rgba(136, 136, 136, 0.23); /* Fundo levemente cinza */
    }
`;

export const RrightDiv = styled.div`
    margin-left: 1.25rem;
    display: flex;
    justify-content: space-between;
    width: 5rem;
`;

const handleScroll1 = () => {
    const targetElement = document.getElementById('projects');
    targetElement.scrollIntoView({ behavior: 'smooth' });
  };
  const handleScroll2 = () => {
    const targetElement = document.getElementById('about');
    targetElement.scrollIntoView({ behavior: 'smooth' });
  };
  const handleScroll3 = () => {
    const targetElement = document.getElementById('technologies');
    targetElement.scrollIntoView({ behavior: 'smooth' });
  };


function Header() {
    return (
      <Div>
        <ItemsContainer>
            <Item onClick={handleScroll1}>Projetos</Item>
            <Item onClick={handleScroll3}>Tecnologias</Item>
            <Item onClick={handleScroll2}>Sobre mim</Item>
        </ItemsContainer>
        <RrightDiv>
            <a href="https://github.com/guilerm3" target="_blank">
            <img src="./github.svg" height={"32px"} alt="Github Icon" />
            </a>
            <a href="https://www.linkedin.com/in/guilherme-augusto-14069a214/" target="_blank">
            <img src="./linkedin.svg" height={"32px"} alt="Linkedin Icon" />
            </a>
        </RrightDiv>
      </Div>
    );
}

export default Header;
