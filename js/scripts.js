// //<!-- Back End -->
var output = [];
var vowels = ['a','e','i','o','u'];

function countUp(multiple, end) {
  for (i = 0; i <= end; i += multiple) {
    output.push(i);
  }
}

// function removeVowels(string) {
//   var vowels = ['a','e','i','o','u'];
//   var finalArray = [];
//   var newArray = string.split('');
//   for (i = 0; i <= newArray.length; i++) {
//     if (vowels.includes(newArray[i])) {
//       finalArray.push('-');
//     } else {
//       finalArray.push(newArray[i]);
//     }
//   }
//   return finalArray.join("");
// };

function removeVowels(string) {
  var vowels = ['a','e','i','o','u'];
  var newArray = string.split('');
  for (i = 0; i <= newArray.length; i++) {
    if (vowels.includes(newArray[i])) {
      newArray.splice(i,1,"-");
    }
  }
  return newArray.join("");
};



//<!-- Front End  -->
$(document).ready(function() {
  $('#numberForm').submit(function(event) {
    var countTo = parseInt($('#countTo').val());
    var countBy = parseInt($('#countBy').val());
    if (!countTo || !countBy) {
      alert('eat a gigantic steaming bag of dicks');
    } else if (countTo < 0 || countBy < 0) {
      alert('use positive numbers you grumpy muthatrucka');
    } else if (countTo < countBy) {
      alert('don\t be a jackass');
    } else {
    countUp(countBy, countTo);
    $('#results').append(output.toString());
    //prevent countby from being higher than countTo
    event.preventDefault();
    // this is the end of the numbers thing dawg, now we start the words thing.
    }
  });
  $('#wordForm').submit(function(event) {
    var sentence = $('#sentenceInput').val();
    var newSentence = removeVowels(sentence);
    $('#results2').append(newSentence);
    event.preventDefault();
  });
});
