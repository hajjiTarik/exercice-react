import React from 'react';
import ReactDOM from 'react-dom';

import App from './containers/App';

/*

EXO

ETQ utlisateur je veut un ecran d'authentification pour permettre de voir mes informations.

le formulaire de authentification:
    deux champs [utilisateur, mot de passe]
    un button de connexion
        au click:
            apeler le ws : http://www.mocky.io/v2/5e95f5b92f0000b4730256c6
        si connexion OK

    rederigé vers ecran profile avec la restitution des informations
        Si status => "obsolete" : affiche un bloc rouge avec le texte : "Informations obsolète"
        Sinon rien

    les informations doivent avoir la forme decrite si dessus:
    ------------------------
    - -------              -
    - - img -              -
    - -------              -
    -   Username : ...     -
    -   Name: ...          -
    -   Nickname: ...      -
    -   Age: ...           -
    -   Description: ...   -
    ------------------------

        si KO
            affiché un message d'authentification en dessous du formulaire

 */

ReactDOM.render(
    <App />,
  document.getElementById('root')
);
