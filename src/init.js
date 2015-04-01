$(document).ready(function(){
  window.dancers = [];
  window.duke = [];
  window.wisco = [];
  window.michigan = [];
  window.kentucky = [];
  window.teams = [window.duke, window.wisco, window.michigan, window.kentucky];
  window.ball = null;

  var $body = $('body');
  var height = $body.height();
  var width = $body.width();

  var backgrounds = ['url(\'assets/Cameron_Indoor_Stadium.jpg\')', 'url(\'assets/rupp-uk.jpg\')',
                    'url(\'assets/michigan-court.jpg\')', 'url(\'assets/wisconsin-court.jpg\')' ];

  $(".addDancerButton").on("click", function(event){
    var dancerMakerFunctionName = $(this).data("dancer-maker-function-name");
    var dancerMakerFunction = window[dancerMakerFunctionName];
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
      window.dancers[0].catchBall();
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
      $(this).toggleClass('spin');
  });

  var currentBackground = 0;
  $('.backgroundButton').on('click', function(event){
    $body.css({'background-image': backgrounds[currentBackground]});
    if(currentBackground === backgrounds.length-1) {
      currentBackground = 0;
    } else { currentBackground++; }
  })

  var clear = function(){
    $('.container').remove();
    window.dancers = [];
    window.duke = [];
    window.wisco = [];
    window.michigan = [];
    window.kentucky = [];
    window.teams = [window.duke, window.wisco, window.michigan, window.kentucky];
    window.ball = null;
  }

  $('.clearButton').on('click', function(event){
    clear();
  })

  var startingLineup = function(){
    var hSpace = width/6;
    var vSpace = height/8;

    for (var i = 2; i < 8; i += 2){
        var yPos = vSpace * i;
        var player = new makeDukeDancer(yPos, hSpace, Math.random()*1000);
        $body.append(player.$node);
        var opponent = new makeMichiganDancer(yPos, hSpace*5, Math.random()*1000);
        $body.append(opponent.$node);

    };
    for (var i = 3; i < 7; i += 2){
      var yPos = vSpace * i;
      var player = new makeDukeDancer(yPos, hSpace*2, Math.random()*1000);
      $body.append(player.$node);
      var opponent = new makeMichiganDancer(yPos, hSpace*4, Math.random()*1000);
      $body.append(opponent.$node);
    }

    var startPlayer = window.dancers[Math.floor(Math.random()*window.dancers.length)];
    var ball = new makeBall(startPlayer.topPos, startPlayer.leftPos, Math.random()*1000);
    $body.append(ball.$node);
    startPlayer.catchBall();
  }

  $('.teamButton').on('click', function(event){
    if (window.dancers.length !== 0){
      clear();
    }
    startingLineup();
  })

});

