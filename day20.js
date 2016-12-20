const fs = require('fs');
var data = fs.readFileSync('day20Data.txt', 'utf8')
data = (JSON.stringify(data).split('\\n'))
var minimum = 0;
var first = data[0].slice(1)
var last = (data[data.length -1].slice(0,-1))
data[0] = first;
data[data.length - 1] = last;
data = data.sort(function(a,b) {
 return	Number(a.split('-')[0]) - Number(b.split('-')[0])
})

var count = 0;
for(var i = 0; i < data.length; i++) {
	if( minimum < Number(data[i].split('-')[0])) {
		while(minimum < Number(data[i].split('-')[0])) {
			console.log(count, minimum, Number(data[i].split('-')[0]), Number(data[i].split('-')[1]))
			minimum ++
			count ++
		}
		console.log('done looping')
		console.log('previous', Number(data[i].split('-')[0]), Number(data[i].split('-')[1]))
		minimum = Number(data[i].split('-')[1]) + 1
		console.log('minimumminimum',minimum)
	} else if(minimum < Number(data[i].split('-')[1])){
			minimum = Number(data[i].split('-')[1]) + 1
	}

}
console.log('minasdfasdfasdfas', count)
First IP = 32259706
IP count = 113
