var makeDukeDancer = function(top, left, timeBetweenSteps){
  // debugger;
  makePlayerDancer.call(this, top, left, timeBetweenSteps);
  window.duke.push(this);
  this.$sprite.attr('src', 'assets/duke-sprite.gif');
  this.team = window.duke;
  this.turnover = 0.2;

  // this.$dancer.addClass("duke");
  //this.$dancer.append(this.$sprite);
};

  makeDukeDancer.prototype = Object.create(makePlayerDancer.prototype);
  makeDukeDancer.prototype.constructor = makeDukeDancer
  makeDukeDancer.prototype.move = function(){
    this.$dancer.animate({"top": "+=50px"}, "slow")
    this.$dancer.animate({"top": "-=50px"}, "slow")

  }
  makeDukeDancer.prototype.step = function(){
    // call the old version of step at the beginning of any call to this new version of step
    makePlayerDancer.prototype.step.call(this);
    // toggle() is a jQuery method to show/hide the <span> tag.
    // See http://api.jquery.com/category/effects/ for this and
    // other effects you can use on a jQuery-wrapped html tag.
    this.move();
  };
