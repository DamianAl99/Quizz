const preguntasChidas = [
  {
    title: "Quien es el presidente de Paraguay",
  },
  {
    title: "Quien es el presidente de Brasil",
  },
  {
    title: "Quien es el presidente de EEUU",
  },
];
const respuestaChidas = [
  {
    Respuesta1: "Marito",
    Respuesta2: "Cartes",
    Respuesta3: "Obama",
    Respuesta4: "Colon",
    RespuestaCorrecta: "correc",
  },
  {
    Respuesta1: "Marito",
    Respuesta2: "Bolsonaro",
    Respuesta3: "Fernandez",
    Respuesta4: "Trump",
    RespuestaCorrecta: "correc",
  },
  {
    Respuesta1: "Marito",
    Respuesta2: "Trump",
    Respuesta3: "El nuevo ese",
    Respuesta4: "Obama",
    RespuestaCorrecta: "correc",
  },
];

var imprimirPreguntas = document.querySelector(".jsonEstatico");
// var posicionAleatoria = Math.floor(Math.random() * preguntasChidas.length);

for (let i = 1; i <= preguntasChidas.length; i++) {
  imprimirPreguntas.innerHTML = `
    <h1>${preguntasChidas[i].title}</h1>
    <input type="checkbox" id="1" class="check" value="">
        ${respuestaChidas[i].Respuesta1}
    </input>
    <input type="checkbox" id="2" class="check">
        ${respuestaChidas[i].Respuesta2}
    </input>
    <input type="checkbox" id="3" class="check">
        ${respuestaChidas[i].Respuesta3}
    </input>
    <input type="checkbox" id="4" class="check">
        ${respuestaChidas[i].Respuesta4}
    </input>
`;
}

var respuestaDelHtml = document.querySelector(".check");
