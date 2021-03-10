let preguntasChidas = [
  {
    title: "Cuantos años tiene JungKook?",
    Respuestas: {
      a: "24 años",
      b: "23 años",
      c: "22 años",
      d: "25 años",
    },
    RespuestaCorrecta: "24 años",
  },
  {
    title: "Cuantos años tiene V?",
    Respuestas: {
      a: "24 años",
      b: "23 años",
      c: "26 años",
      d: "25 años",
    },
    RespuestaCorrecta: "25 años",
  },
  {
    title: "Cuantos años tiene RM?",
    Respuestas: {
      a: "24 años",
      b: "28 años",
      c: "26 años",
      d: "25 años",
    },
    RespuestaCorrecta: "26 años",
  },
  {
    title: "Cuanto mide JungKook?",
    Respuestas: {
      a: "1,79 m",
      b: "1,80 m",
      c: "1,78 m",
      d: "1,77 m",
    },
    RespuestaCorrecta: "1,79 m",
  },
  {
    title: "Cuanto mide Jimin?",
    Respuestas: {
      a: "1,75 m",
      b: "1,73 m",
      c: "1,72 m",
      d: "1,74 m",
    },
    RespuestaCorrecta: "1,74 m",
  },
  {
    title: "Cuanto le mide a Damian?",
    Respuestas: {
      a: "19 cm",
      b: "30 cm",
      c: "25 cm",
      d: "Le dicen la Anaconda Humana",
      e: "Ninguna de las anteriores es Mentira",
    },
    RespuestaCorrecta: "Ninguna de las anteriores es Mentira",
  },
  {
    title: "Cuanto le mide a Luisito?",
    Respuestas: {
      a: "2.5 cm",
      b: "3 cm",
      c: "6.5 cm",
      d: "4.5 cm",
      e: "4 cm",
    },
    RespuestaCorrecta: "4.5 cm",
  }
];

//variables Goblales
var arrayDeRespuestasCorrectas = [];
var arrayDeObjetosRespuestas = [];
var cont = 0;
var contError = 0;
var totalDePreguntas = preguntasChidas.length;
var item = "";
var numRandomParaElegirObjeto;
var imprimirPreguntas = document.querySelector(".preguntas");
var imprimirTitulo = document.querySelector(".titulo");
let btnForm = document.querySelector("#formForBtn");
var btn = document.querySelector(".btn");
var btnDelForm = document.querySelector(".btnDelForm");

//para quitar las respuestas correctas y tambien las respuestas en si
RecorridoDeArrays = () => {
  for (let i = 0; i < preguntasChidas.length; i++) {
    arrayDeRespuestasCorrectas.push(preguntasChidas[i].RespuestaCorrecta);
    arrayDeObjetosRespuestas.push(preguntasChidas[i].Respuestas);
  }
};

RecorridoDeArrays();

//al presionar el boton se mostrara el objeto entero aleatoriamete y sus respuestas tambien en orden aleatorio
PintarEnPantalla = (e) => {
  e.preventDefault();

  imprimirPreguntas.innerHTML = "";
  btn.style.display = "none";

  //numero para elegir un objeto random
  numRandomParaElegirObjeto = Math.floor(
    Math.random() * preguntasChidas.length
  );

  var a = preguntasChidas[numRandomParaElegirObjeto].Respuestas;
  //console.log(preguntasChidas[numRandomParaElegirObjeto].RespuestaCorrecta);
  var arrayA = [];
  //guarda en arrayA los 4 textos que estan como respuesta en el objeto creado
  Object.keys(a).forEach((e) => {
    arrayA.push(a[e]);
  });
  //imprime el titulo
  imprimirTitulo.innerHTML = `
          <label></label>
          <h4>${preguntasChidas[numRandomParaElegirObjeto].title}</h4>`;

  //este sort lo que hace es que aparezca las respuesta de forma aleatoria
  arrayA.sort(function () {
    return Math.random() - 0.5;
  });
  for (let i = 0; i < arrayA.length; i++) {
    imprimirPreguntas.innerHTML += `
          <div class="inputRadio">
            <label></label>
            <input type='radio' name='radio' class='opcionRespuesta${numRandomParaElegirObjeto}' value='${arrayA[i]}'><span>${arrayA[i]}</span></input>
          </div>`;
  }

  //para sumar las respuestas correctas
  var contadorParaCadaPreguntar = 0;
  var textoCorrecto = [];
  var opcionRespuesta;
  opcionRespuesta = document.querySelector(
    `.opcionRespuesta${numRandomParaElegirObjeto}`
  );
  for (let i = 0; i < arrayA.length; i++) {
    textoCorrecto[i] = document.querySelector(`input[value='${arrayA[i]}']`);
    console.log(textoCorrecto);
    textoCorrecto[i].addEventListener("change", (e) => {
      contadorParaCadaPreguntar++;
      item = e.target.value;
      console.log("haz algo cuando se seleccione un radio");
      if (contadorParaCadaPreguntar == 1) {
        if (
          preguntasChidas[numRandomParaElegirObjeto].RespuestaCorrecta == item
        ) {
          cont++;
          preguntasChidas.splice(numRandomParaElegirObjeto, 1);
          imprimirPreguntas.innerHTML = "";
          btn.style.display = "block";
        } else {
          contError++;
          imprimirPreguntas.innerHTML = "";
          preguntasChidas.splice(numRandomParaElegirObjeto, 1);
          btn.style.display = "block";
        }
      }
    });
  }
  if (preguntasChidas.length == 1) {
    btn.style.display = "none";

    btnDelForm.innerHTML = `<button type="submit" class="btnResultados">Ver Resultados</button>`;

    btnDelForm.addEventListener("click", (event) => {
      event.preventDefault();
      var pintarResultados = document.querySelector(".correctosYErrores");
      if (preguntasChidas.length == 0) {
        pintarResultados.innerHTML = `
        <h4>Correctos: ${cont}, Errados: ${contError}, ${cont < totalDePreguntas / 2 ? "Eres una Decepcion Hermano" : "Muy bien Imbecil"}</h4>`;
        pintarResultados.style.display = "block";
        btnDelForm.style.display = "none";
      } 
    });
  }
};
