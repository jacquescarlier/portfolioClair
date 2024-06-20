import React from 'react';
/*import './styles.css';*/ // Assurez-vous de créer un fichier styles.css pour définir vos styles

const LangageComponent = ({ imgLangages }) => {
  return (
    <div className="imgProject" aria-label="langage de programmation">
      {imgLangages.map(function (langage) {
        return (
          <div key={langage.id} className="langage-container">
            <img src={langage.img} alt={langage.alt} aria-label={langage.alt} />
            <div className="tip">{langage.tips}</div>
          </div>
        )
      })}
    </div>
  );
};

export default LangageComponent;
