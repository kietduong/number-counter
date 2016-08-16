// //<!-- Back End -->
var output = [];

function countUp(multiple, end) {
  for (i = 0; i <= end; i += multiple) {
    output.push(i);
  }
}

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
      alert('don\'t be a jackass');
    } else {
    countUp(countBy, countTo);
    $('#results').append(output.toString());
    //prevent countby from being higher than countTo
    event.preventDefault();
    }
  });
});
