/**
 * 
 */


let palabra = "";
let palabraAdivinada = [];
let intentos = 0;
let errores = 0;
let letrasMal = [];
let inicio;
let tiempoTotal;

function introducirPalabra() {
	palabra = prompt("Introduce la palabra que tienes que adivinar:");
	palabraAdivinada = Array(palabra.length).fill("_");
	actualizar();
	inicio = new Date().getTime();
}

function introducirLetra() {
	if (errores >= 5 || palabraAdivinada.join("") === palabra) return;

	let letra = prompt("Introduce una letra:")
	intentos++;

	if (palabra.includes(letra)) {
		for (let i = 0; i < palabra.length; i++) {
			if (palabra[i] === letra) {
				palabraAdivinada[i] = letra;
			}
		}
	} else {
		errores++;
		letrasMal.push(letra);
	}

	if (errores >= 5 || palabraAdivinada.join("") === palabra) {
		fin();
	}

	actualizar();
}

function actualizar() {
	document.getElementById("palabra").innerHTML = "Palabra: " + palabraAdivinada.join(" ");
	document.querySelector("p").innerHTML = "Intentos: " + intentos;
}

function fin() {
	let fin = new Date().getTime();
	tiempoTotal = (fin - inicio) / 1000;

	let mensaje = "";
	if (errores < 1) {
		mensaje = "Magnífico";
	} else if (errores < 3) {
		mensaje = "Bien";
	} else if (errores < 5) {
		mensaje = "Por poco";
	} else {
		mensaje = "Has perdido";
	}

	alert(mensaje);

	let nuevaFila = `<tr>
           				 <td>${palabra}</td>
            			 <td>${intentos}</td>
            			 <td>${tiempoTotal} segundos</td>
        			</tr>`;
	document.getElementById("tabla").innerHTML += nuevaFila;
}

function tiempo() {
	if (inicio) {
		let ahora = new Date().getTime();
		let tiempoActual = (ahora - inicio) / 1000;
		alert("Tiempo transcurrido: " + tiempoActual + " segundos");
	} else {
		alert("tienes que empezar primero");
	}
}