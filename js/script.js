var questionInput = prompt("Enter a sentence:");
var output1 = questionInput.charAt(0).toUpperCase();
var output2 = questionInput.charAt(questionInput.length-1).toUpperCase();
var output =  output1.concat(output2);
alert(output);

var reverseInput = output.split("").reverse().join('');
alert(reverseInput);

var thirdFunction = questionInput.concat(reverseInput);
alert(thirdFunction);

var fourthFunction = Math.floor(questionInput.length / 2);
var index = questionInput.charAt(fourthFunction);
alert(index.concat(questionInput);




jQuery("img1").click(function() {
  alert(questionInput);
});
jQuery("img2").click(function() {
  alert(index);
});
