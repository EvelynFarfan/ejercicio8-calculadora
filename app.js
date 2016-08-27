var opcion= parseInt(prompt("Escoja una opción:\n" +
"1. Suma \n" +
"2. Resta \n" +
"3. Multiplicación \n" +
"4. División \n" + 
"5. Número mayor \n"+
"6. Número menor \n"+
"7. Resto \n"+
"8. Igualdad \n"
));
var num1 = parseInt(prompt("Ingrese el número"));
var num2 = parseInt(prompt("Ingrese el número"));
switch(opcion){
	case 1:
	var suma = num1 + num2;
	window.alert("La suma es: " + suma);
	break;

	case 2:
	var resta = num1 - num2;
	window.alert("La resta es: " + resta);
	break;

	case 3:
	var multiplicación = num1 * num2;
	window.alert("La Multiplicación es: " + multiplicación);
	break;

	case 4:
	var division = num1 / num2;
	window.alert("El cociente es: " + division);
	break;

	case 5:
	if (num1 > num2 ){
		window.alert("El número mayor es :" + num1);
	}else{
		window.alert("El número mayor es :" + num2);
	}
	break;

	case 6:
	var menor = num1 < num2;
	if (num1 < num2 ){
		window.alert("El número menor es :" + num1);
	}else{
		window.alert("El número menor es :" + num2);
	}
	break;

	case 7:  
	var resto = num1 % num2;
	window.alert("El resto es: " + resto);
	break;

	case 8:
	if (num1 == num2){
		window.alert("Los números son iguales");
	}else{
		window.alert("Los números no son iguales");
	}
	break;
	default:
	 window.alert("No es una opción válida");
}
