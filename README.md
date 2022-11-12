# Desafio _Frontend_ - **Bsale** 

![SPA](https://jonmircha.com/img/blog/arquitectura-spa.png)

## Tecnologías:
Para el desarrollo de el _Frontend_ de esta _App Web_ se usaron las siguientes tecnologías:
- **_HTML:_** Con este lenguaje se maquetó semánticamente la estructura de la _app_.
- **_CSS:_** Con este lenguaje se aplicaron estilos y **_Responsive Web Design_** a la app con un enfoque _Mobile First_.
- **_Vanilla JS:_** Con este lenguaje de programación se agregó funcionalidad a la _App Web_.
- **_SASS_**: Con este _Pre-procesador_ se extendieron las funcionalidades de **CSS** como agregar _nesting_, _modularización_, _estilos reutilizables_, _variables_, etc.
- **_NPM:_** Gestor de dependecias de _NodeJS_ para instalar librerías.

---

## ¿Que enfoque usa esta _App Web_?
Esta _App Web_ es una **Single Page Application(_SPA_)** o **Aplicación de una Sola Página**.

### ¿Por qué esta web es una **_SPA_**?
- Porque todo el contenido carga de una sola vez, es decir, el navegador descarga solo un archivo _HTML_ con todos los recursos haciendo que la navegación sea más rápida y fluida.
- Porque carga contenido de forma dinámica sin necesidad de recargar la página usando **_AJAX_**.
- Porque mediante una _API_ conecta el _Frontend_ con el _Backend_, y este último mencionado es independiente a la _SPA_ importando poco en que lenguaje esté programado o que patrones use.
- Porque el _Frontend_, _Backend_ y la _persistencia de datos_ estan desacoplados y descentralizados de sí mismos. 

---
## Estructura de carpetas y archivos:

| Carpeta / Archivo | Funcionalidad | 
| --------- | --------- | 
| /app                  |         
| /app/assets           |         
| /app/components       |         
| /components/Router.js |         
| /app/helpers          |         
| /build                |         
| /node_modules         |         
| /scss                 |         
| /scss/base            |         
| /scss/ui              |         
| /scss/app.scss        |         
| .gitignore            |         
| App.js                |         
| index.html            |         
| index.js              |         
| package.json          |         

