var makePlayerDancer = function(top, left, timeBetweenSteps){
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$sprite = $('<img></img>');
  this.$dancer.append(this.$sprite);
};

  makePlayerDancer.prototype = Object.create(makeDancer.prototype);
  makePlayerDancer.prototype.constructor = makePlayerDancer;
  makePlayerDancer.prototype.move = function(){
    this.$dancer.animate({"left": "+=50px"}, "slow");
    this.$dancer.animate({"left": "-=50px"}, "slow");

  }



  makePlayerDancer.prototype.step = function(){
    // call the old version of step at the beginning of any call to this new version of step
    makeDancer.prototype.step.call(this);
    // toggle() is a jQuery method to show/hide the <span> tag.
    // See http://api.jquery.com/category/effects/ for this and
    // other effects you can use on a jQuery-wrapped html tag.
    this.move();
  };
