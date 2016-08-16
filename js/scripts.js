// //<!-- Back End -->
var output = [];

// **************counting**************
function countUp(multiple, end) {
  for (i = 0; i <= end; i += multiple) {
    output.push(i);
  }
}
// **************word thing**************

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
// **************factorial**************

function factorial(number) {
  for (i = number - 1; i > 0; i--) {
    number = number * i;
  }
  return number;
  // var total = 1
  // var factArray = [];
  // for (i = 1; i <= number; i++) {
  //   factArray.push(i);
  // } return factArray
  // for (i = 0; i = factArray.length; i++) {
  //   // total *= factArray
  // } return total;
};



//<!-- Front End  -->
$(document).ready(function() {
  // **************counting**************
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
    event.preventDefault();
    }
  });
  // **************words**************
  $('#wordForm').submit(function(event) {
    var sentence = $('#sentenceInput').val();
    var newSentence = removeVowels(sentence);
    $('#results2').append(newSentence);
    event.preventDefault();
  });
 // **************factorial**************
  $('#factorialForm').submit(function(event) {
    var numberInput = parseInt($('#factorialInput').val());
    var newNumber = factorial(numberInput);
    console.log(factorial);
    event.preventDefault();
  });
});
