import styled from "styled-components";

export const Div = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
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
`;

export const RrightDiv = styled.div`
    margin-left: 1.25rem;
    display: flex;
    justify-content: space-between;
    width: 5rem;
`;

function Header() {
    return (
      <Div>
        <ItemsContainer>
            <Item>Projetos</Item>
            <Item>Tecnologias</Item>
            <Item>Sobre mim</Item>
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
