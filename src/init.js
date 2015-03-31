$(document).ready(function(){
  window.dancers = [];
  window.duke = [];
  window.wisco = [];
  window.michigan = [];
  window.kentucky = [];

  var $body = $('body');
  var height = $body.height();
  var width = $body.width();

  $(".addDancerButton").on("click", function(event){
    /* This function sets up the click handlers for the create-dancer
     * buttons on index.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data("dancer-maker-function-name");

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      height * Math.random(),
      width * Math.random(),
      Math.random() * 1000
    );

    $body.append(dancer.$node);
    if (window.dancers.length === 1){
      var position = window.dancers[0].$node.position();
      var ball = new makeBall(position.top, position.left, Math.random() * 1000);
      $body.append(ball.$node);
      console.log('ball made');
    }




  });

  $(".lineupButton").on("click", function(event){
    lineup();

  });

  var lineup = function(){
    var vloc = height/2;
    var space;
    var hloc = 0;
    if (window.dancers.length !== 0){
      space = width/window.dancers.length;
    }
    for (var i = 0; i < window.dancers.length; i++){
      window.dancers[i].setPosition(vloc, hloc );
      hloc += space;
    }
  }

  $body.on('mouseover', '.dancer', function(event){
    console.log('hover');
    // if (this instanceof makePlayerDancer){
      // console.log('playerdancer!');
      $(this).toggleClass('spin');
    // }
  });













});

