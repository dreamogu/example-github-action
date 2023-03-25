const solution = (dot) => { 
	
	let num1 = Number(dot[0]);
	let num2 = Number(dot[1]);
	let result = 0

	if( num1 > 0  && num2 > 0) {
		result = 1
	} else if ( num1 > 0 && num2 < 0){
		result = 4
	} else if ( num1 < 0 && num2 > 0){
		result = 2
	} else {
		result = 3
	}
	return result
}