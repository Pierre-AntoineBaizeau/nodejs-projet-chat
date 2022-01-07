# Application de chat entre internaute

Ce projet a été réalisé par Abdel-Hakim Tioursi, Benjamin Burstein, Pierre-Antoine Baizeau, Edson De Carvalho, Xavier Lami et Karen Azoulay.

## Installation

Clonez le projet et installez les nodes modules en faisant :

```bash
npm install
```
Puis allez dans le dossier client et installez les nodes modules en faisant :
```bash
cd client
npm install
```
Créez une base de données MongoDB et reliez le au projet en remplaçant la ligne DATABASE_URL dans le fichier .env
Puis migrez la base de donnée en faisant :
```bash
prisma generate
prisma db push
```
Vous pouvez à présent lancer le projet en faisant à la racine du projet :
```bash
npm start
```
Et dans un autre terminal :
```bash
cd client
npm start
```