const arr1 = [24.6,23.7,18.9,76.5]; 
const arr2 = [54,23,12,97,100]; 

function arrSort(arr) { 
	arr.sort((a,b)=>b-a); 
	return arr; 
} 

console.log(arrSort(arr1)); 
console.log(arrSort(arr2));
