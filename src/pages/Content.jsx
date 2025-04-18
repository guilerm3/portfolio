import { useEffect } from "react";
import styled from "styled-components";

/** Components **/
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Button } from "../components/Button";

/** Assets **/
import projeto1 from "../assets/projeto1.png";
import projeto2 from "../assets/projeto2.png";
import projeto3 from "../assets/projeto3.png";
import projeto4 from "../assets/projeto4.png";
import wppico from "../assets/wppico.png";
import timeline from "../assets/timeline.svg";

export const Div = styled.div`
  * {
    margin: 0;
    padding: 0;
  }
  canvas {
    display: block;
    position: absolute;
    z-index: 1;
  }

  .hero, .projects, .time-l, .time-q, .title {
    position: relative;
    z-index: 2;
  }

  .title{
    
  }
`;

function Content() {
  useEffect(() => {
    const c = document.getElementById("c");
    const ctx = c.getContext("2d");

    c.height = document.documentElement.scrollHeight;
    c.width = document.documentElement.scrollWidth;

    if (isNaN(c.width) || c.width <= 0) {
      console.error("Canvas width is invalid!");
      return;
    }

    let matrix =
      "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()*&^%+-/~{[|`]}";
    matrix = matrix.split("");

    const font_size = 10;
    const columns = Math.floor(c.width / font_size);

    if (columns <= 0) {
      console.error("Invalid number of columns:", columns);
      return;
    }

    const drops = Array(columns).fill(1);

    function draw() {
      ctx.fillStyle = "rgba(0, 0, 0, 0.2)";
      ctx.fillRect(0, 0, c.width, c.height);

      ctx.fillStyle = "green";
      ctx.font = font_size + "px arial";

      for (let i = 0; i < drops.length; i++) {
        const text = matrix[Math.floor(Math.random() * matrix.length)];
        ctx.fillText(text, i * font_size, drops[i] * font_size);

        if (drops[i] * font_size > c.height && Math.random() > 0.975) {
          drops[i] = 0;
        }

        drops[i]++;
      }
    }

    const interval = setInterval(draw, 25);

    return () => {
      clearInterval(interval);
    };
  }, []);
  

  return (
    <Div>
      <Header />
        <canvas id="c"></canvas>
        <div className="hero">
          <h1>Portfolio de projetos</h1>
          <p>
            Sou um desenvolvedor front-end apaixonado por criar interfaces
            responsivas e visualmente impactantes. Com uma combinação de
            design criativo e código limpo, eu ajudo a transformar projetos em
            sites e aplicações intuitivas, rápidas e visualmente agradáveis.
            Explore meus projetos e veja como posso ajudar a dar vida à sua
            ideia!
          </p>
          <a href="https://wa.me/5531988884037" target="_blank">
            <Button className="bt">
              WhatsApp
              <img src={wppico} height="40px" />
            </Button>
          </a>
        </div>
        
        <h1 className="title">PROJETOS</h1>

        <div id="projects" className="projects">
          
          <div className="project">
            <img src={projeto1} alt="" />
            <h1>Dashboard de vendas completo</h1>
            <p>
              Um dashboard interativo de vendas desenvolvido com React e
              TypeScript/JavaScript, projetado para gerenciar leads e perfis
              de usuários. A aplicação conta com funcionalidades completas e
              testes automatizados para garantir a confiabilidade
            </p>
            <a
              href="https://dnc-sales-dashboard-gas.vercel.app"
              target="_blank"
            >
              <Button>Clique aqui</Button>
            </a>
          </div>
          <div className="project">
            <img src={projeto2} alt="" />
            <h1>Arquitetura vitrine digital</h1>
            <p>
              Site desenvolvido como uma Single Page Application (SPA) usando
              React. O projeto faz consumo de APIs REST para exibir dados de
              forma dinâmica.
            </p>
            <a
              href="https://arquitetura-spa-react.vercel.app"
              target="_blank"
            >
              <Button>Clique aqui</Button>
            </a>
          </div>
          <div className="project">
            <img src={projeto3} alt="" />
            <h1>Todo List para mobile</h1>
            <p>
              Projeto de gerenciador de tarefas responsivo para dispositivos
              móveis. Desenvolvido com foco em simplicidade e usabilidade.
            </p>
            <a
              href="https://guilerm3.github.io/RID185998_Desafio03/"
              target="_blank"
            >
              <Button>Clique aqui</Button>
            </a>
          </div>
          <div className="project">
            <img src={projeto4} alt="" />
            <h1>Site para captação de leads</h1>
            <p>
              Site para captação de leads na área de gestão de projetos e
              produtos digitais
            </p>
            <a
              href="https://guilerm3.github.io/site-portifolio01/"
              target="_blank"
            >
              <Button>Clique aqui</Button>
            </a>
          </div>
        </div>

        <div id="about"className="time-l">
          <div className="time-p">
            <div>2021</div>
            <div>2022</div>
            <div>2023</div>
            <div>2024</div>
          </div>
          <img src={timeline} className="time-img" />
        </div>
        <div className="time-q">
          <div className="time-d">
            Formando em sistemas de informação pela faculdade Doctum de
            Ipatinga MG
          </div>
          <div className="time-d">
            Início da especialização de desenvolvimento front end
          </div>
          <div className="time-d">
            Ano do primeiro projeto de larga escala e primeira venda de
            serviço freelancer
          </div>
          <div className="time-d">
            Premiação lean six-sigma em redução de custos operacionais pela
            empresa Brinks
          </div>
        </div>
      <Footer />
    </Div>
  );
}

export default Content;
