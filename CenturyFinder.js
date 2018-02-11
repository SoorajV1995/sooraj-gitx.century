let century;
let findCentury;

function CalculateCentury(year) {
	findCentury = Number(year.match(century));
	findCentury = findCentury+1;
	console.log(findCentury);
}
function findingCentury(year) {
	
	if(Number(year)>1000) {
	century = /^\d{2}/;
	CalculateCentury(year);
	}
else if(Number(year)<900 && Number(year)>100) {
	century = /^\d{1}/;
	CalculateCentury(year);
	}
else if(Number(year)<=100) {
	findCentury = 1;
	console.log(findCentury);
	}
}
findingCentury('100');