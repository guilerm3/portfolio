import { useEffect } from 'react';
import styled from 'styled-components';
import particlesJS from 'particles.js';
import Stats from 'stats.js';

const ParticlesContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: #0f1624;
  background-image: url("");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50% 50%;
`;

const CountParticles = styled.div`
  background: #000022;
  position: absolute;
  top: 48px;
  left: 0;
  width: 80px;
  color: #13E8E9;
  font-size: 0.8em;
  text-align: left;
  text-indent: 4px;
  line-height: 14px;
  padding-bottom: 2px;
  font-family: Helvetica, Arial, sans-serif;
  font-weight: bold;
  border-radius: 0 0 3px 3px;
`;

const StatsContainer = styled.div`
  -webkit-user-select: none;
  margin-top: 5px;
  margin-left: 5px;
  border-radius: 3px 3px 0 0;
  overflow: hidden;
`;

// Componente principal
const ParticlesJSComponent = () => {
  useEffect(() => {

    // Inicializando particles.js
    particlesJS("particles-js", {
      "particles": {
        "number": {
          "value": 80,
          "density": {
            "enable": true,
            "value_area": 800
          }
        },
        "color": {
          "value": "#ffffff"
        },
        "shape": {
          "type": "circle",
          "stroke": {
            "width": 0,
            "color": "#000000"
          },
          "polygon": {
            "nb_sides": 5
          },
          "image": {
            "src": "img/github.svg",
            "width": 100,
            "height": 100
          }
        },
        "opacity": {
          "value": 0.5,
          "random": false,
          "anim": {
            "enable": false,
            "speed": 1,
            "opacity_min": 0.1,
            "sync": false
          }
        },
        "size": {
          "value": 3,
          "random": true,
          "anim": {
            "enable": false,
            "speed": 40,
            "size_min": 0.1,
            "sync": false
          }
        },
        "line_linked": {
          "enable": true,
          "distance": 150,
          "color": "#ffffff",
          "opacity": 0.4,
          "width": 1
        },
        "move": {
          "enable": true,
          "speed": 6,
          "direction": "none",
          "random": false,
          "straight": false,
          "out_mode": "out",
          "bounce": false,
          "attract": {
            "enable": false,
            "rotateX": 600,
            "rotateY": 1200
          }
        }
      },
      "interactivity": {
        "detect_on": "canvas",
        "events": {
          "onhover": {
            "enable": true,
            "mode": "repulse"
          },
          "onclick": {
            "enable": true,
            "mode": "push"
          },
          "resize": true
        },
        "modes": {
          "grab": {
            "distance": 400,
            "line_linked": {
              "opacity": 1
            }
          },
          "bubble": {
            "distance": 400,
            "size": 40,
            "duration": 2,
            "opacity": 8,
            "speed": 3
          },
          "repulse": {
            "distance": 200,
            "duration": 0.4
          },
          "push": {
            "particles_nb": 4
          },
          "remove": {
            "particles_nb": 2
          }
        }
      },
      "retina_detect": true
    });

        const stats = new Stats();
        stats.setMode(0);
        stats.domElement.style.position = 'absolute';
        stats.domElement.style.left = '0px';
        stats.domElement.style.top = '0px';
        document.body.appendChild(stats.domElement);
    
        const countParticles = document.querySelector('.js-count-particles');
        
        const update = () => {
          stats.begin();
          stats.end();
          if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) {
            countParticles.innerText = window.pJSDom[0].pJS.particles.array.length;
          }
          requestAnimationFrame(update);
        };
    
        requestAnimationFrame(update);
    
        return () => {
          document.body.removeChild(stats.domElement);
        };
      }, []);
    
      return (
        <ParticlesContainer id="particles-js">
          <CountParticles className="count-particles">
            <span className="js-count-particles">--</span> particles
          </CountParticles>
        </ParticlesContainer>
      );
    };
    
export default ParticlesJSComponent;
    