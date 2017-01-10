/* Program:  mylab8chall.js --> JavaScript file to Lab8_Challenge.html
   Programmer:  Lauren Etheridge
   Date:  8 November 2016
   Class:  ITP 140 FA16 - Lab8 | Challenge
*/

var turn = 0;
var icon = 'X';
var player = 'Player 1';

// Set background color
$(document).ready(function() {  
$('body').css('background-color', '#aad4ad');
});

//click event. Switch from X to O and draw the corresponding icon every turn, plus incrementing the turn counter
$('.piece').click(function(){
  if($(this).html()===""){
    if (turn%2!==0) {
      icon = "O";

    } 
	  else {
      icon = 'X';
      player = 'Player 1';
    }
    $(this).html(icon);
    checkWin();
    turn++;
  }
});

//restart the game
$('#restart').click(function(){
  $('.piece').html('');
  $('.piece').removeClass('won');
  turn = 0;
});

//winning possibilities
function checkWin(){
  if ($('#p1').html()===icon && $('#p2').html()===icon && $('#p3').html()===icon ) {
    $('#p1, #p2, #p3').addClass('won');
    alert(player + ' won!');
  } else if ($('#p4').html()===icon && $('#p5').html()===icon && $('#p6').html()===icon ) {
    $('#p4, #p5, #p6').addClass('won');
    alert(player + ' won!');
  } else if ($('#p7').html()===icon && $('#p8').html()===icon && $('#p9').html()===icon ) {
    $('#p7, #p8, #p9').addClass('won');
    alert(player + ' won!');
  } else if ($('#p7').html()===icon && $('#p4').html()===icon && $('#p1').html()===icon ) {
    $('#p7, #p4, #p1').addClass('won');
    alert(player + ' won!');
  } else if ($('#p8').html()===icon && $('#p5').html()===icon && $('#p2').html()===icon ) {
    $('#p8, #p5, #p2').addClass('won');
    alert(player + ' won!');
  } else if ($('#p9').html()===icon && $('#p6').html()===icon && $('#p3').html()===icon ) {
    $('#p9, #p6, #p3').addClass('won');
    alert(player + ' won!');
  } else if ($('#p7').html()===icon && $('#p5').html()===icon && $('#p3').html()===icon ) {
    $('#p7, #p5, #p3').addClass('won');
    alert(player + ' won!');
  } else if ($('#p9').html()===icon && $('#p5').html()===icon && $('#p1').html()===icon ) {
    $('#p9, #p5, #p1').addClass('won');
    alert(player + ' won!');
  }
  
//Draw Alert
  else if (turn === 8) {
    alert("It's a draw!");
  }
}
