import styled from "styled-components";

export const Div = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Share+Tech+Mono&display=swap");
    
  html {
    background-color: black;
  }

  body {
    height: 100vh;
    overflow: hidden;
    background-color: black;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 200px 0 200px;
  }

  h1 {
    color: green;
    font-family: "Share Tech Mono", "Cascadia Code", Menlo, Monaco,
    "Courier New", monospace;
    font-size: 6rem;
    filter: drop-shadow(0px 0px 5px currentColor);
    white-space: nowrap;
    overflow: hidden;
    border-right: 0.1em solid currentColor;
    animation: typing 10s steps(30) 1s infinite, blink 0.75s step-end infinite;
  }

  a {
    position: absolute;
    top: 20%;
    color: green;
    font-family: "Share Tech Mono", "Cascadia Code", Menlo, Monaco,
    "Courier New", monospace;
    font-size:20px;
    text-decoration: none;
  }

    a:visited {
            color: green;
        }

    a:active {
            color: green;
        }

  @keyframes typing {
    0% {
      width: 0;
    }
    50% {
      width: 88%;
    }
    100% {
      width: 0;
    }
  }

  @keyframes blink {
    0% {
      border-color: transparent;
    }
    50% {
      border-color: currentColor;
    }
    100% {
      border-color: transparent;
    }
  }

  .grid-container {
    --grid: 10rem;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    transform-style: preserve-3d;
    perspective: 100rem;
    animation: rotate 100s linear infinite forwards;

    .plane {
      --dir: 1;
      width: 300%;
      height: 150%;
      min-height: 70rem;
      position: absolute;
      bottom: 0;
      transform-style: preserve-3d;
      transform-origin: bottom center;
      transform: translateX(-50%) rotateX(85deg);

      &:last-child {
        --dir: -1;
        top: 0;
        transform-origin: top center;
        transform: translateX(-50%) rotateX(-85deg);

        & > * {
          &::after {
            background-image: linear-gradient(
              to top,
              rgba(0, 0, 0, 255) var(--grid),
              rgba(0, 0, 0, 0)
            );
          }
        }
      }

      & > * {
        transform-style: preserve-3d;
        height: 100%;
        width: 100%;
        position: absolute;

        &::before,
        &::after {
          content: "";
          display: block;
          position: absolute;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
        }

        &::before {
          background-image: repeating-linear-gradient(
              to left,
              rgba(0, 128, 0, 0.4),
              rgba(0, 128, 0, 0.4) 4px,
              transparent 4px,
              transparent var(--grid)
            ),
            repeating-linear-gradient(
              to bottom,
              rgba(0, 128, 0, 0.4),
              rgba(0, 128, 0, 0.4) 4px,
              transparent 4px,
              transparent var(--grid)
            );
          animation: move 1s linear infinite forwards;
        }

        &::after {
          background-image: linear-gradient(
            to bottom,
            rgba(0, 0, 0, 255) var(--grid),
            rgba(0, 0, 0, 0)
          );
          z-index: 1;
          transform: translateZ(1px);
        }
      }

      .glow {
        filter: blur(1rem);
        z-index: 1;
        mix-blend-mode: plus-lighter;
      }
    }
  }

  @keyframes move {
    from {
      transform: translateY(0px);
    }

    to {
      transform: translateY(calc(var(--grid) * var(--dir)));
    }
  }
`;

function Presentation() {
  
  return (
    <Div>
      <body>
        <div className="grid-container">
          <div className="plane">
            <div className="grid"></div>
            <div className="glow"></div>
          </div>
          <div className="plane">
            <div className="grid"></div>
            <div className="glow"></div>
          </div>
        </div>
        <a href="/content">Saber mais</a>
        <h1>Desenvolvedor Freelancer</h1>
      </body>
    </Div>
  );
}

export default Presentation;
