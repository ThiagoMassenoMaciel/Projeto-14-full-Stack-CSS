import React from "react";

const Projeto = ({
  linkPROJETO,
  imgPROJETO,
  titlePROJETO,
  descricaoPROJETO,
  techUsed,
}) => {
  return (
    <div className="Projeto">
      <a
        className="Projeto_block"
        href={linkPROJETO}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          className="Projeto_block_img"
          src={imgPROJETO}
          alt={titlePROJETO}
        />
        <div className="Projeto_block_text">
          <h3>{titlePROJETO}</h3>
          <h4>{descricaoPROJETO}</h4>
        </div>
        <div className="Projeto_block_TechUsed">
            {techUsed.map((item, index) => (
              <img
                id={`img${index}`}
                className="Projeto_block_TechUsed_img"
                src={item}
                alt={`tech ${index + 1} usada`}
                key={index}
                style={{
                  transitionDuration: `${(index * 0.2) + 0.4}s`// serve para cada imagem fazer transition em tempos diferentes
                }}
              />
            ))}
          </div>
      </a>
    </div>
  );
};

export default Projeto;
