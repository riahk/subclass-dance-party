var makeWiscoDancer = function(top, left, timeBetweenSteps){
  // debugger;
  makePlayerDancer.call(this, top, left, timeBetweenSteps);
  window.wisco.push(this.$node);
  this.$sprite.attr('src', 'assets/wisconsin-sprite.gif');
  //this.$dancer.addClass("wisco");
};

  makeWiscoDancer.prototype = Object.create(makePlayerDancer.prototype);
  makeWiscoDancer.prototype.constructor = makeWiscoDancer;

  makeWiscoDancer.prototype.step = function(){
    // call the old version of step at the beginning of any call to this new version of step
    makePlayerDancer.prototype.step.call(this);
    // toggle() is a jQuery method to show/hide the <span> tag.
    // See http://api.jquery.com/category/effects/ for this and
    // other effects you can use on a jQuery-wrapped html tag.
  };
