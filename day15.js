// Disc #1 has 13 positions; at time=0, it is at position 11.
// Disc #2 has 5 positions; at time=0, it is at position 0.
// Disc #3 has 17 positions; at time=0, it is at position 11.
// Disc #4 has 3 positions; at time=0, it is at position 0.
// Disc #5 has 7 positions; at time=0, it is at position 2.
// Disc #6 has 19 positions; at time=0, it is at position 17.
// [0] is positions [1] is position
// positions = 0 to n -1
var arr =[
	[13,11],
	[5,0],
	[17, 11],
	[3,0],
	[7,2],
	[19,17] 
]


let going = true
let time2 = 0
while(going) {
	console.log('times', time2)
	var time = time2
	for(var i = 0; i < arr.length; i++) {
		if(0 === (arr[i][1] + time + 1)%(arr[i][0])){
			if(i === arr.length - 1) {
				going = false    
				console.log('done',time2)
			}
			time ++;
		} else {
			i = 100;
		}
	}
	time2 ++;
	if(time2 > 1000000) {
		console.log('faiill')
		going = false
	}
}
