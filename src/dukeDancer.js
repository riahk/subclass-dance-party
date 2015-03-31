var makeDukeDancer = function(top, left, timeBetweenSteps){
  // debugger;
  makePlayerDancer.call(this, top, left, timeBetweenSteps);
  window.duke.push(this.$node);
  this.$dancer.addClass("duke");
};

  makeDukeDancer.prototype = Object.create(makePlayerDancer.prototype);
  makeDukeDancer.prototype.constructor = makeDukeDancer;

  makeDukeDancer.prototype.step = function(){
    // call the old version of step at the beginning of any call to this new version of step
    makeDancer.prototype.step.call(this);
    // toggle() is a jQuery method to show/hide the <span> tag.
    // See http://api.jquery.com/category/effects/ for this and
    // other effects you can use on a jQuery-wrapped html tag.
    this.$dancer.toggle();
  };
