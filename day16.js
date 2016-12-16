

// Call the data you have at this point "a".
// Make a copy of "a"; call this copy "b".
// Reverse the order of the characters in "b".
// In "b", replace all instances of 0 with 1 and all 1s with 0.
// The resulting data is "a", then a single 0, then "b".
var a = '11011110011011101';
var max = 272
function hello() {
  while(a.length < 272) {
   var tempA = a.split('').reverse()
   var newA = [];
   for(var i = 0; i < tempA.length; i++) {
     var newChar;
     if(tempA[i] === '1') {
       newChar = '0';
     } else {
       newChar = '1';
     }
     newA.push(newChar)
   }
   a = a + '0' + newA.join('')
  }
  return a.slice(0,272)
}

function hello2(){
  var val = hello()
  console.log(val)
  var arr;
  while(val.length % 2 === 0) {
    arr = []
    for(var i = 0; i < val.length; i+=2) {
      if(val[i] === val[i + 1]) {
        arr.push('1')
      } else {
        console.log(val[i], val[i+1])
        arr.push('0')
      }
    }
    val = arr.join('')
  }
  console.log(arr.join(''))
  return arr
}
hello2()
