##Exercice

ETQ utlisateur je veut un ecran d'authentification pour permettre d'acceder mes informations.

###Formulaire de authentification:
deux champs [utilisateur, mot de passe]

un button de connexion
#### au click sur le button:
apeler le ws : [http://www.mocky.io/v2/5e95f5b92f0000b4730256c6][ws]

**Si connexion OK**
        
rederigé vers ecran profile avec la restitution des informations

###Bloc Profil:
reponse ws :

    {
        "username": "John_Doe_123",
        "name": "Doe",
        "nickname": "John",
        "birthday": "15/03/1993",
        "description": "lorem ipsum dolor set amet",
        "image_url": "https://picsum.photos/200",
        "status": "obsolete"
    }

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
    
_si le ws retourne status => "obsolete"_ : 

affiche un bloc rouge avec le texte : "Informations obsolète"

_Sinon rien_

    
**si connexion KO**

affiché un message d'authentification en dessous du formulaire

[ws]: http://www.mocky.io/v2/5e95f5b92f0000b4730256c6
