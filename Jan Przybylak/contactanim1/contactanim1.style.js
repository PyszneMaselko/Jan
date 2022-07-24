
import { html } from '@polymer/lit-element';
let cssText = `


      html {
        height: 100%;
        width: 100%;
      }

      body {
        font-family: 'Open Sans', serif;
        margin: 0;
        padding: 0;
        height: 100%;
        width: 100%;
        -webkit-font-smoothing: antialiased;
        overflow: -moz-scrollbars-none;
        -ms-overflow-style: none;
      }

      
        @font-face {
          font-family: geometria_regular;
          src: url(assets/Geometria.ttf);
        }
        

      .contactanim1 {

      display: block;
      position: absolute;
      box-sizing: content-box;
      -ms-transform: rotate(0.00deg);
    -webkit-transform: rotate(0.00deg);
    transform: rotate(0.00deg);
    -ms-transform-origin: center;
    -webkit-transform-origin: center;
    transform-origin: center;
      opacity: 1;
      cursor: default;
      margin-top: -400px;
      margin-right: 0.00px;
      margin-bottom: 0.00px;
      margin-left: -700px;
      padding-top: 0.00px;
      padding-right: 0.00px;
      padding-bottom: 0.00px;
      padding-left: 0.00px;
      overflow-x: auto;
      overflow-y: auto;
      background-color: rgba(255, 255, 255, 1);
      width: 1400.00px;
    height: 800.00px;
    left: 50%;
    top: 50%;

}

.contactanim1 .contact {
    position: absolute;
      box-sizing: content-box;
      -ms-transform: rotate(0.00deg);
    -webkit-transform: rotate(0.00deg);
    transform: rotate(0.00deg);
    -ms-transform-origin: center;
    -webkit-transform-origin: center;
    transform-origin: center;
      opacity: 1;
      cursor: default;
      margin-top: 0.00px;
      margin-right: 0.00px;
      margin-bottom: 0.00px;
      margin-left: 0.00px;
      padding-top: 0.00px;
      padding-right: 0.00px;
      padding-bottom: 0.00px;
      padding-left: 0.00px;
      background-color: rgba(255, 255, 255, 0);
      text-align: left;
      letter-spacing: 2.40px;
      color: rgba(0, 0, 0, 1);
      -webkit-text-stroke: unset;
      font-size: 30.00px;
      font-weight: 400;
    font-style: normal;
      font-family: geometria_regular, Arial;
      text-decoration: none;
      box-shadow: none;
      overflow-x: unset;
      overflow-y: unset;
      white-space: pre;
      width: 126.00px;
    height: 37.00px;
    left: 637.00px;
    top: 382.00px;

}

;
`;
cssText = cssText.replace(/background-image: url\(\"assets/g, `background-image: url("${import.meta.url.replace('contactanim1.style.js', 'assets')}`);
cssText = cssText.replace(/src: url\(assets/g, `src: url(${import.meta.url.replace('contactanim1.style.js', 'assets')}`);
export const Contactanim1Style = html`
${cssText}
`;
