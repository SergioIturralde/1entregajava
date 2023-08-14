// Funcion para determinar la indicación metronomica
function indicacionMetronomo(bpm) {
  if (bpm >= 40 && bpm <= 60) {
    return "Largo";
  } else if (bpm > 60 && bpm <= 80) {
    return "Andante";
  } else if (bpm > 80 && bpm <= 108) {
    return "Moderato";
  } else if (bpm > 108 && bpm <= 120) {
    return "Allegro";
  } else if (bpm > 120 && bpm <= 160) {
    return "Vivace";
  } else if (bpm > 160 && bpm <= 208) {
    return "Presto";
  } else if (bpm > 208) {
    return "Prestissimo";
//   } else if (bpm < 40) {
//     return "ingrese un valor igual o mayor a 40bpm.";
  } else {
    return "No se pudo determinar la indicacion";
  }
}

// Ciclo para solicitar ingreso de BPM hasta que se presione la tecla ESC
while (true) {
  const numero = prompt(
    "Ingrese el numero de BPM (pulsos por minuto), o presiona ESC para salir:"
  );

  if (numero === null) {
    break;
  }

  const bpm = parseInt(numero);

  if (isNaN(bpm)){
    alert("Porfavor, ingrese un numero.");
  } else if (bpm <40) {
    alert("Porfavor, ingrese un valor mayor o igual a 40");
  } else {
  const tempo = indicacionMetronomo(bpm);
  alert(
    `El numero de BPM ${bpm} corresponde a la indicacion metronomica: ${tempo}`
  );
}
}
