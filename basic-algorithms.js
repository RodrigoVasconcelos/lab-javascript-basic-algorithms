// Names and Input

var hacker1 = `Sober`;

console.log(`The driver's name is ` + hacker1 + `.`);

var hacker2 = `Helena`; //prompt(`Write down your Name, navigator!`);

console.log(`The navigator's name is ` + hacker2 + `.`);

//Conditionals

if (hacker1.length >= 6 && hacker2.length >= 6) {
  console.log(`wow, you both got equally long names, ` + hacker2.length + ` characters!!`)
} else if (hacker1.length >= 6 && hacker2.length < 6) {
  console.log(`The Driver has the longest name, it has ` + hacker1.length + ` characters`) 
} else if (hacker1.length < 6 && hacker2.length >= 6) {
  console.log(`Yo, navigator got the longest name, it has ` + hacker2.length + ` characters`)
}/* else {
  console.log(`uh, none of the names are big!`)
}*/

//Iteration 3: Loops

for (var i = 0; i < hacker1.length ; i++) {
  console.log(hacker1.toUpperCase()[i])
}

for (var i = hacker1.length ; i >= 0 ; i--) {
  console.log(hacker1[i])
}
 
var lexicOrder = lexicOrder.push(hacker2[1]);

// Lorem ipsum generator


var loremIpsum = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris congue ante a eleifend eleifend. Nulla commodo ipsum id nisl finibus imperdiet ut non mi. Sed at leo risus. Nam vitae velit ut lectus luctus consequat vel fermentum felis. Phasellus quis massa eu mauris luctus venenatis id ac erat. Sed sed magna imperdiet, lobortis eros eget, pellentesque odio. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean quis magna sit amet eros fringilla posuere.
Fusce ac dolor rutrum ante malesuada aliquam vel non orci. Nunc pellentesque, lectus in molestie efficitur, ligula felis tincidunt libero, vel ultricies nibh dolor nec mi. Sed molestie bibendum leo et facilisis. Proin ut rutrum orci. Maecenas sit amet ligula a nulla sagittis scelerisque ac nec urna. Donec dapibus ligula nec consequat bibendum. Vestibulum ornare quam nibh, ut dignissim enim rhoncus ac.
Praesent lectus augue, fermentum ut sollicitudin quis, finibus sed mi. Sed elementum diam eu urna eleifend pretium. Ut congue neque ipsum, in vehicula nisl iaculis vel. Curabitur nulla odio, ullamcorper id lorem non, tincidunt bibendum nibh. Vestibulum nec tellus condimentum, mattis urna eget, faucibus dui. Donec sodales lacinia urna, in accumsan felis molestie sit amet. Aliquam at laoreet nulla, ac bibendum odio.`

var loremWords = loremIpsum.split(` `).length;
var latinWord = (loremIpsum.split(`latin`).length) - 1;

console.log(loremWords)
console.log(latinWord)