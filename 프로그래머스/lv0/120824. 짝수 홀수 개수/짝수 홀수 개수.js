const solution = (num_list) => {
	let num1 = num_list.filter(n=>n%2===0).length;
	let num2 = num_list.filter(n=>n%2===1).length;
	return [num1, num2]
}