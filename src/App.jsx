import Projeto from "./components/Projeto.jsx";

import html5 from "./assets/html5.png";
import css3 from "./assets/css3.png";
import javascript from "./assets/javascript.png";
import react from "./assets/react.png";
import phaser from "./assets/phaser.png";

import p1 from "./assets/side-projects/p1.png";
import p2 from "./assets/side-projects/p2.png";
import p3 from "./assets/side-projects/p3.png";
import p4 from "./assets/side-projects/p4.png";
import p5 from "./assets/side-projects/p5.png";
import p6 from "./assets/side-projects/p6.png";
import p7 from "./assets/side-projects/p7.png";
import p8 from "./assets/side-projects/p8.png";
import p9 from "./assets/side-projects/p9.png";
import p10 from "./assets/side-projects/p10.png";
import p11 from "./assets/side-projects/p11.png";
import p12 from "./assets/side-projects/p12.png";

import OutroExemplo from "./components/ex2Aula1/OutroExemplo.jsx";
import ProfileArtist from "./components/ex3Aula2/ProfileArtist.jsx";
import Song from "./components/ex4Aula2/Song.jsx";

const array = [
  {
    linkPROJETO: "https://github.com/ThiagoMassenoMaciel/From-The-Ashes.github.io/blob/versionONE/README.md",
    imgPROJETO: p12,
    titlePROJETO: "Jogo: From the Ashes",
    descricaoPROJETO: "Um jogo 2d de labirinto programado com javascript e o framework PHASER 3.8.",
    techUsed: [html5,css3,javascript, phaser,react],
  }
  ,
  {
    linkPROJETO: "https://github.com/ThiagoMassenoMaciel/From-The-Ashes.github.io/blob/versionONE/README.md",
    imgPROJETO: p12,
    titlePROJETO: "Jogo: From the Ashes",
    descricaoPROJETO: "Um jogo 2d de labirinto programado com javascript e o framework PHASER 3.8.",
    techUsed: [html5,css3,javascript, phaser],
  }
  ,
  {
    linkPROJETO: "https://github.com/ThiagoMassenoMaciel/Projeto-11-front-end.github.io/blob/main/README.md",
    imgPROJETO: p11,
    titlePROJETO: "Explore o universo",
    descricaoPROJETO: "Uma aplicação web com o principio de Single Page Aplication (SPA), tal qual exibe as diferentes páginas do site mais rápido sem recarrar toda a página web.",
    techUsed: [html5,css3,javascript],
  }
  ,
  {
    linkPROJETO: "https://github.com/ThiagoMassenoMaciel/Projeto-10--front-end.github.io/blob/main/README.md",
    imgPROJETO: p10,
    titlePROJETO: "Cronômetro Timer",
    descricaoPROJETO: "Uma aplicação web interativa que depois de decidido pelo usuário a contagem regressiva de algum tempo em minutos é dispertado um alarme. E acompanhado com o botão de uma musica de fundo.",
    techUsed: [html5,css3, javascript],
  }
  ,
  {
    linkPROJETO: "https://github.com/ThiagoMassenoMaciel/Projeto-09-V-1.3--clean---some-comments-front-end.github.io/blob/main/README.md",
    imgPROJETO: p9,
    titlePROJETO: "Calculadora do Indice de massa Corporal (IMC)",
    descricaoPROJETO: "Um projeto interativo com o intuito de calcular para o usuário seu indice de massa corporal.",
    techUsed: [html5,css3,javascript],
  }
  ,
  {
    linkPROJETO: "https://github.com/ThiagoMassenoMaciel/Projeto-08-front-end.github.io/blob/main/README.md",
    imgPROJETO: p8,
    titlePROJETO: "Biscoito da Sorte",
    descricaoPROJETO: "Uma aplicação web interativa que simula um biscotinho da sorte chinês , acompanhado de mensagens da sorte.",
    techUsed: [html5,css3,javascript],
  }
  ,
  {
    linkPROJETO: "https://github.com/ThiagoMassenoMaciel/Projeto-07-front-end.github.io/blob/main/README.md",
    imgPROJETO: p7,
    titlePROJETO: "Jogo de Adivinhação",
    descricaoPROJETO: "Tente adivinhar qual número é sorteado.",
    techUsed: [html5,css3, javascript],
  }
  ,
  {
    linkPROJETO: "https://github.com/ThiagoMassenoMaciel/Projeto-06--front-end.github.io/blob/main/README.md", 
    imgPROJETO: p6, 
    titlePROJETO: "Uma galeria de imagens" , 
    descricaoPROJETO: "Exibe um conjunto de imagens categorizadas com animação.", 
    techUsed: [html5,css3]
  }
  ,
  {
    linkPROJETO: "https://github.com/ThiagoMassenoMaciel/Projeto-05-Front-End.github.io/blob/main/README.md", 
    imgPROJETO: p5, 
    titlePROJETO: "Site de uma coleção de Galáxias" , 
    descricaoPROJETO: "Exibe um conjunto de Galáxias e algumas curiosidades a respeito do cosmo.", 
    techUsed: [html5,css3]
  }
  ,
  {
    linkPROJETO: "https://github.com/ThiagoMassenoMaciel/Projeto-04-Front-end.github.io/blob/main/README.md", 
    imgPROJETO: p4, 
    titlePROJETO: "Site responsivo" , 
    descricaoPROJETO: "Simples pagina web estilo lading page tal qual referece á um exemplo de responsividade aplicada em uma lading page.", 
    techUsed: [html5,css3]
  }
  ,
  {
    linkPROJETO: "https://github.com/ThiagoMassenoMaciel/Projeto03-front-end.github.io/blob/main/README.md", 
    imgPROJETO: p3, 
    titlePROJETO: "Formulário de eventos" , 
    descricaoPROJETO: "Simples pagina web estilo lading page de um formulário a fim de registar em agenda eventos.", 
    techUsed: [html5,css3]
  }
  ,
  {
    linkPROJETO: "https://github.com/ThiagoMassenoMaciel/Projeto-02-front-end.github.io/blob/main/README.md", 
    imgPROJETO: p2, 
    titlePROJETO: "Site de uma academia" , 
    descricaoPROJETO: "Este projeto é uma lading page de uma empresa fictícia no ramo academia ", 
    techUsed: [html5,css3]
  }
  ,
  {
    linkPROJETO: "https://github.com/ThiagoMassenoMaciel/Projetos-front-end.github.io/blob/main/README.md", 
    imgPROJETO: p1, 
    titlePROJETO: "Site de uma imobiliária" , 
    descricaoPROJETO: "Simples pagina web estilo lading page ", 
    techUsed: [html5,css3]
  }
]
function App() {

  return (
    <>
      <main>
        <h1>Grid , transition no :hover</h1>
        <div className="Projetos">
          {
            array.map((item, index) => (
              <Projeto
                key={index}
                {...item}
              />
              )
            )
          }
        </div>

        <OutroExemplo/>

        <ProfileArtist/>

        <Song/>

      </main>
    </>
  )
}

export default App
