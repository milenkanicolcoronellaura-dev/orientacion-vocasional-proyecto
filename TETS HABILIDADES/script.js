/* =========================================
   TEST 2 - HABILIDADES Y APTITUDES
   80 PREGUNTAS - DEPARTAMENTO DE LA PAZ
========================================= */

// Cada pregunta pertenece a una dimensión.
const preguntas = [
  // Preguntas 1 a 10
  { q: "Resuelvo problemas matemáticos siguiendo un procedimiento ordenado.", d: "L" },
  { q: "Aprendo a utilizar nuevas aplicaciones sin mucha dificultad.", d: "T" },
  { q: "Observo detalles importantes durante un experimento.", d: "N" },
  { q: "Explico mis ideas con claridad frente a otras personas.", d: "V" },
  { q: "Escucho con atención cuando alguien necesita hablar.", d: "S" },
  { q: "Propongo ideas originales para trabajos escolares.", d: "A" },
  { q: "Planifico mis actividades para cumplir los plazos.", d: "O" },
  { q: "Tomo la iniciativa cuando un grupo necesita organizarse.", d: "E" },
  { q: "Sigo instrucciones para armar objetos o modelos.", d: "P" },
  { q: "Interpreto planos o croquis sencillos.", d: "X" },

  // Preguntas 11 a 20
  { q: "Identifico patrones en secuencias de números o figuras.", d: "L" },
  { q: "Puedo explicar a alguien cómo usar una herramienta digital.", d: "T" },
  { q: "Formulo preguntas para comprender por qué ocurre un fenómeno.", d: "N" },
  { q: "Redacto textos que otras personas pueden comprender fácilmente.", d: "V" },
  { q: "Reconozco cuando otra persona necesita ayuda.", d: "S" },
  { q: "Combino colores y formas para comunicar una idea.", d: "A" },
  { q: "Mantengo ordenados mis materiales y documentos.", d: "O" },
  { q: "Distribuyo tareas de acuerdo con las capacidades del equipo.", d: "E" },
  { q: "Utilizo herramientas escolares o de taller con cuidado.", d: "P" },
  { q: "Imagino cómo se vería un objeto desde otro ángulo.", d: "X" },

  // Preguntas 21 a 30
  { q: "Comparo distintas soluciones antes de elegir una.", d: "L" },
  { q: "Organizo archivos y carpetas de forma clara en una computadora.", d: "T" },
  { q: "Registro observaciones de forma ordenada.", d: "N" },
  { q: "Resumo la información más importante de una lectura.", d: "V" },
  { q: "Explico un tema con paciencia a quien no lo entiende.", d: "S" },
  { q: "Encuentro varias maneras de presentar un mismo tema.", d: "A" },
  { q: "Reviso mi trabajo antes de entregarlo.", d: "O" },
  { q: "Presento propuestas para mejorar una actividad.", d: "E" },
  { q: "Identifico piezas y componentes de un objeto.", d: "P" },
  { q: "Ubico lugares utilizando mapas o referencias espaciales.", d: "X" },

  // Preguntas 31 a 40
  { q: "Interpreto tablas con cantidades y porcentajes.", d: "L" },
  { q: "Encuentro soluciones cuando un programa presenta errores sencillos.", d: "T" },
  { q: "Distingo una opinión de un dato comprobable.", d: "N" },
  { q: "Adapto mi forma de hablar según el público.", d: "V" },
  { q: "Colaboro con compañeros que tienen diferentes formas de pensar.", d: "S" },
  { q: "Imagino diseños para mejorar un espacio u objeto.", d: "A" },
  { q: "Sigo instrucciones detalladas sin omitir pasos.", d: "O" },
  { q: "Puedo tomar decisiones después de escuchar distintas opiniones.", d: "E" },
  { q: "Comprendo diagramas sencillos de funcionamiento.", d: "P" },
  { q: "Calculo aproximadamente si un objeto cabe en un espacio.", d: "X" },

  // Preguntas 41 a 50
  { q: "Calculo gastos o presupuestos sin perderme en los datos.", d: "L" },
  { q: "Comprendo instrucciones para configurar dispositivos digitales.", d: "T" },
  { q: "Comparo resultados antes de sacar conclusiones.", d: "N" },
  { q: "Formulo preguntas claras durante una conversación.", d: "V" },
  { q: "Mantengo el respeto cuando hay desacuerdos.", d: "S" },
  { q: "Creo historias, dibujos o contenidos originales.", d: "A" },
  { q: "Registro información con precisión.", d: "O" },
  { q: "Motivo a otras personas para alcanzar una meta común.", d: "E" },
  { q: "Encuentro fallas visibles en modelos o mecanismos simples.", d: "P" },
  { q: "Identifico proporciones en dibujos o construcciones.", d: "X" },

  // Preguntas 51 a 60
  { q: "Comprendo problemas que requieren varios pasos.", d: "L" },
  { q: "Creo presentaciones o documentos digitales bien estructurados.", d: "T" },
  { q: "Sigo instrucciones de seguridad durante prácticas de laboratorio.", d: "N" },
  { q: "Argumento mis opiniones utilizando razones.", d: "V" },
  { q: "Identifico maneras de incluir a alguien en una actividad grupal.", d: "S" },
  { q: "Aporto soluciones creativas cuando hay pocos recursos.", d: "A" },
  { q: "Distingo las tareas urgentes de las que pueden esperar.", d: "O" },
  { q: "Busco alternativas cuando un plan no funciona.", d: "E" },
  { q: "Realizo trabajos manuales que requieren precisión.", d: "P" },
  { q: "Represento ideas mediante esquemas o bocetos.", d: "X" },

  // Preguntas 61 a 70
  { q: "Detecto errores en operaciones o razonamientos.", d: "L" },
  { q: "Identifico qué herramienta digital conviene para una tarea.", d: "T" },
  { q: "Relaciono conocimientos de biología, química o física con situaciones reales.", d: "N" },
  { q: "Escucho una explicación y puedo transmitirla correctamente.", d: "V" },
  { q: "Puedo acompañar a una persona sin juzgarla.", d: "S" },
  { q: "Identifico aspectos visuales que pueden mejorarse en un diseño.", d: "A" },
  { q: "Organizo listas o cronogramas para un proyecto.", d: "O" },
  { q: "Coordino actividades escolares o comunitarias.", d: "E" },
  { q: "Aprendo procedimientos prácticos mediante demostraciones.", d: "P" },
  { q: "Comprendo cómo se distribuyen espacios en una vivienda.", d: "X" },

  // Preguntas 71 a 80
  { q: "Organizo información numérica para sacar conclusiones.", d: "L" },
  { q: "Mantengo la paciencia al aprender funciones tecnológicas nuevas.", d: "T" },
  { q: "Reconozco cuando necesito más información para explicar algo.", d: "N" },
  { q: "Organizo una exposición con introducción, desarrollo y conclusión.", d: "V" },
  { q: "Cumplo acuerdos cuando trabajo con otras personas.", d: "S" },
  { q: "Transformo una idea inicial en una propuesta concreta.", d: "A" },
  { q: "Soy constante cuando una actividad requiere atención prolongada.", d: "O" },
  { q: "Explico a un grupo cómo lograr un objetivo.", d: "E" },
  { q: "Compruebo si un objeto construido funciona como se esperaba.", d: "P" },
  { q: "Reconozco formas geométricas en estructuras reales.", d: "X" }
];

/* LAS 10 ÁREAS EVALUADAS */
const dimensiones = {
  L: "Razonamiento lógico y matemático",
  T: "Habilidades digitales",
  N: "Observación e investigación científica",
  V: "Comunicación verbal y escrita",
  S: "Habilidades sociales y de apoyo",
  A: "Creatividad y expresión",
  O: "Organización y precisión",
  E: "Liderazgo e iniciativa",
  P: "Habilidades prácticas y técnicas",
  X: "Orientación espacial y diseño"
};

/* CATÁLOGO DE CARRERAS PARA EXPLORAR EN LA PAZ
   Los números son ponderaciones orientativas
   elaboradas para el funcionamiento de la plataforma.
   No representan baremos psicométricos validados.
*/
const carreras = [
  ["Ingeniería de Sistemas", { T: 3, L: 2, O: 1 }],
  ["Ingeniería Informática", { T: 3, L: 2, N: 1 }],
  ["Ingeniería Electrónica", { P: 2, T: 2, L: 2 }],
  ["Ingeniería Civil", { X: 3, L: 2, P: 1 }],
  ["Arquitectura", { X: 3, A: 2, P: 1 }],
  ["Ingeniería Industrial", { O: 2, L: 2, P: 2 }],
  ["Ingeniería Mecánica", { P: 3, X: 2, L: 1 }],
  ["Medicina", { N: 3, S: 2, O: 1 }],
  ["Enfermería", { S: 3, N: 2, O: 1 }],
  ["Odontología", { P: 2, N: 2, S: 2 }],
  ["Bioquímica", { N: 3, O: 2, L: 1 }],
  ["Biología", { N: 3, O: 2, L: 1 }],
  ["Psicología", { S: 3, V: 2, N: 1 }],
  ["Trabajo Social", { S: 3, V: 2, E: 1 }],
  ["Ciencias de la Educación", { S: 3, V: 2, A: 1 }],
  ["Derecho", { V: 3, L: 2, S: 1 }],
  ["Comunicación Social", { V: 3, A: 2, S: 1 }],
  ["Diseño Gráfico", { A: 3, X: 2, T: 1 }],
  ["Artes Plásticas", { A: 3, X: 2, P: 1 }],
  ["Administración de Empresas", { E: 3, O: 2, V: 1 }],
  ["Contaduría Pública", { O: 3, L: 2, T: 1 }],
  ["Economía", { L: 3, N: 2, O: 1 }],
  ["Ingeniería Comercial", { E: 3, L: 2, V: 1 }],
  ["Comercio Internacional", { E: 2, V: 2, O: 2 }],
  ["Turismo", { V: 2, S: 2, E: 2 }],
  ["Agronomía", { N: 2, P: 2, O: 2 }],
  ["Ingeniería Ambiental", { N: 3, L: 2, P: 1 }],
  ["Fisioterapia y Kinesiología", { S: 3, N: 2, P: 1 }],
  ["Nutrición y Dietética", { N: 2, S: 2, O: 2 }],
  ["Auditoría", { O: 3, L: 2, V: 1 }]
];

/* OPCIONES DE RESPUESTA */
const opcionesTexto = [
  "Muy difícil",
  "Difícil",
  "Regular",
  "Fácil",
  "Muy fácil"
];

/* ESTADO DEL TEST */
let actual = 0;
const respuestas = Array(preguntas.length).fill(null);

const $ = id => document.getElementById(id);

/* CAMBIAR DE PANTALLA */
function mostrar(id) {
  ["inicio", "cuestionario", "resultados"].forEach(seccion => {
    $(seccion).classList.toggle("oculto", seccion !== id);
  });

  window.scrollTo(0, 0);
}

/* MOSTRAR UNA PREGUNTA */
function pintar() {
  const pregunta = preguntas[actual];

  $("numero").textContent = "Pregunta " + (actual + 1);
  $("contador").textContent =
    (actual + 1) + " de " + preguntas.length;

  $("relleno").style.width =
    ((actual + 1) / preguntas.length * 100) + "%";

  $("textoPregunta").textContent = pregunta.q;
  $("opciones").replaceChildren();

  opcionesTexto.forEach((texto, indice) => {
    const valor = indice + 1;

    const label = document.createElement("label");
    label.className = "opcion";

    const input = document.createElement("input");
    input.type = "radio";
    input.name = "respuesta";
    input.value = valor;

    input.checked = respuestas[actual] === valor;

    input.addEventListener("change", () => {
      respuestas[actual] = valor;
      $("error").textContent = "";
    });

    label.append(input, document.createTextNode(texto));
    $("opciones").append(label);
  });

  $("anterior").disabled = actual === 0;

  $("siguiente").textContent =
    actual === preguntas.length - 1
      ? "Ver mis resultados →"
      : "Siguiente pregunta →";

  $("error").textContent = "";
}

/* CALCULAR Y MOSTRAR RESULTADOS */
function calcular() {
  const datos = Object.entries(dimensiones).map(
    ([id, nombre]) => ({
      id,
      nombre,
      total: preguntas.reduce((suma, pregunta, indice) => {
        return suma + (
          pregunta.d === id ? respuestas[indice] : 0
        );
      }, 0)
    })
  ).sort((a, b) => b.total - a.total);

  $("top").textContent =
    "Tus principales fortalezas percibidas: " +
    datos.slice(0, 3).map(d => d.nombre).join(", ") + ".";

  $("grafico").replaceChildren();

  datos.forEach(d => {
    const item = document.createElement("div");
    item.className = "resultado";

    const linea = document.createElement("div");
    linea.className = "linea";

    const nombre = document.createElement("strong");
    nombre.textContent = d.nombre;

    const puntaje = document.createElement("span");
    puntaje.textContent = d.total + " / 40";

    linea.append(nombre, puntaje);

    const pista = document.createElement("div");
    pista.className = "pista";

    const relleno = document.createElement("div");
    relleno.style.width = (d.total / 40 * 100) + "%";

    pista.append(relleno);
    item.append(linea, pista);

    $("grafico").append(item);
  });

  /* COMBINAR HABILIDADES PARA SUGERIR CARRERAS */
  const medias = Object.fromEntries(
    datos.map(d => [d.id, d.total / 8])
  );

  const lista = carreras.map(([nombre, pesos]) => {
    const suma = Object.entries(pesos).reduce(
      (total, [area, peso]) => {
        return total + medias[area] * peso;
      }, 0
    );

    const totalPesos = Object.values(pesos).reduce(
      (total, peso) => total + peso, 0
    );

    return {
      nombre,
      valor: suma / totalPesos,
      areas: Object.keys(pesos)
    };
  }).sort((a, b) => b.valor - a.valor);

  $("carreras").replaceChildren();

  lista.slice(0, 12).forEach((carrera, indice) => {
    const item = document.createElement("article");
    item.className = "carrera";

    const titulo = document.createElement("strong");
    titulo.textContent =
      (indice + 1) + ". " + carrera.nombre;

    const detalle = document.createElement("small");
    detalle.textContent =
      "Relacionada con: " +
      carrera.areas
        .map(area => dimensiones[area].toLowerCase())
        .join(", ") + ".";

    item.append(titulo, detalle);
    $("carreras").append(item);
  });

  mostrar("resultados");
}

/* BOTÓN COMENZAR */
$("comenzar").addEventListener("click", () => {
  actual = 0;
  pintar();
  mostrar("cuestionario");
});

/* BOTÓN ANTERIOR */
$("anterior").addEventListener("click", () => {
  if (actual > 0) {
    actual--;
    pintar();
  }
});

/* BOTÓN SIGUIENTE */
$("siguiente").addEventListener("click", () => {
  if (respuestas[actual] === null) {
    $("error").textContent =
      "Selecciona una opción antes de continuar.";
    return;
  }

  if (actual === preguntas.length - 1) {
    calcular();
  } else {
    actual++;
    pintar();
  }
});

/* BOTÓN REINICIAR */
$("reiniciar").addEventListener("click", () => {
  respuestas.fill(null);
  actual = 0;
  mostrar("inicio");
});

/* BOTÓN IMPRIMIR */
$("imprimir").addEventListener("click", () => {
  window.print();
});
