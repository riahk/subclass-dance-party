var makeKentuckyDancer = function(top, left, timeBetweenSteps){
  // debugger;
  makePlayerDancer.call(this, top, left, timeBetweenSteps);
  window.kentucky.push(this.$node);
  this.$sprite.attr('src', 'assets/kentucky-sprite.gif');
  // this.$dancer.addClass("kentucky");
};

  makeKentuckyDancer.prototype = Object.create(makePlayerDancer.prototype);
  makeKentuckyDancer.prototype.constructor = makeKentuckyDancer;

  makeKentuckyDancer.prototype.step = function(){
    // call the old version of step at the beginning of any call to this new version of step
    makePlayerDancer.prototype.step.call(this);
    // toggle() is a jQuery method to show/hide the <span> tag.
    // See http://api.jquery.com/category/effects/ for this and
    // other effects you can use on a jQuery-wrapped html tag.
    // this.$dancer.toggle();
  };
