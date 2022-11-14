# Desafio _Frontend_ - **Bsale** 

![SPA](https://jonmircha.com/img/blog/arquitectura-spa.png)

> **Nota**: Si se usa _Visual Studio Code_ se recomienda usar el _plugin_ llamado **_es6-string-html_** para que se coloree el html codificado en los archivos _javascript_.

## Tecnologías:
Para el desarrollo de el _Frontend_ de esta _App Web_ se usaron las siguientes tecnologías:
- **_HTML:_** Con este lenguaje se maquetó semánticamente la estructura de la _app_.
- **_CSS:_** Con este lenguaje se aplicaron estilos y **_Responsive Web Design_** a la app con un enfoque _Mobile First_.
- **_Vanilla JS:_** Con este lenguaje de programación se agregó funcionalidad a la _App Web_.
- **_SASS_**: Con este _Pre-procesador_ se extendieron las funcionalidades de **CSS** como agregar _nesting_, _modularización_, _estilos reutilizables_, _variables_, etc.
- **_NPM:_** Gestor de dependecias de _NodeJS_ para instalar librerías de _JS_.
- **SweetAlert2:_** Librería de javascript que permite crear ventanas _modales_.

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
| --------- | ---------   | 
| `/app`                  | Contiene todos los archivos importantes de la aplicación        
| `/app/assets`           | Contiene todos los recursos estáticos como _imágenes_, _SVG_, _videos_, etc.      
| `/app/components`       | Contiene todos los componentes _Javascript_ de la app.       
| `/components/Router.js` | Maneja la lógica al cambiar el _hash_ de la url.       
| `/app/helpers`          | Contiene todas las _funciones reutilizables_ de ayuda y _constantes_ que se usan en la app.        
| `/build`                | Contiene todo el código _CSS_ compilado por _SASS_.      
| `/node_modules`         | Carpeta que guarda las dependecias instaladas con _NPM_.         
| `/scss`                 | Contiene todo los archivos _SASS_ de la app.        
| `/scss/base`            | Contiene los módulos de _SASS_ que establecen los estilos globales como definir las _variables_, los _mixins_ reutilizables, normalizar los estilos, etc.        
| `/scss/ui`              | Contiene los módulos de _SASS_ que estilizan los _componentes_ de la app.     
| `/scss/app.scss`        | Archivo de _SASS_ que se encarga de importar todos los módulos de SASS de la app.       
| `.gitignore`            | Establece carpetas o archivos que son de desarrollo y no tendrán seguimiento con _Git_.        
| `App.js`                | Se encarga de renderizar los _componentes_ de la app y el _Router_.       
| `index.html`            | Único archivo _HTML_ donde carga todo el contenido de una vez con todos los recursos        
| `index.js`              | Archivo se se encarga de renderizar el contenido de la _SPA_ de una sola vez y cada vez que cambia el _hash_ de la url.        
| `package.json`          | Archivo de configuración de dependencias de _NodeJS_.        

