// your code here!
//var str = $('#user-text');
function countWords(text) {  
   return text.length;      
}

function averageWordLength(text) {
    var totalLength = text.join("").length;
    return (totalLength/text.length).toFixed(2);
}

function wordCountUnique (text) {
    wordObj = {};
    for (var i =0; i < text.length; i++) { 
                 if (text[i] in wordObj) {
                     wordObj[text[i]]++
                 } 
                 else {
                     wordObj[text[i]] = 1
                 }
            }
            return Object.keys(wordObj).length;
        }       
             
 // function avg (text) {
   // var length = text.length;
    //var reducedText = text.reduce(function(val1, val2){
      //  return val1 + val2;
    //});
    //return (reducedText /length).toPrecision(3);
//}

//function averageWordLength (text){
//var wordArray = text.map(function(val){
  //  return val.length;
//});
//return avg(wordArray);
//}        

$(document).ready(function() {
    $('button').on('click', function(event) {
        var text = $('#user-text').val();
        var wordArray = text.split(/\s+/);
        
        $('dl').removeClass("hidden");
        $('#wCount').text(countWords(wordArray));
        $('#uCount').text(wordCountUnique(wordArray));
        $('#aWord').text(averageWordLength(wordArray));
        event.preventDefault();
    });
});


/*Explanation of what is happening

-The first function returns the length of the characters in the text which
is consolidated and extracted from 'user-text' field.

- The unique word function creates an array to store values then checks
if a word already in the array or not. If not then it adds 1 to the index. 

-Simplified code from initial avg function to a shorter version. AverageWordLength
function takes the total length and divides by amt of words in text.

-On click of analyze button we are extracting info in text box and we are
removing blank spaces. We are then showing results portion by removing hidden
class. We then put results of the word count, unique words and average words
in the appropriate <dd> #id.


*/