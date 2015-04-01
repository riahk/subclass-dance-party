var makeBall = function(top, left, timeBetweenSteps){
  makeDancer.call(this, top, left, timeBetweenSteps);
  window.ball = this;
  this.$sprite = $('<img src="assets/basketball.png"></img>');
  this.$dancer.append(this.$sprite);
  this.$sprite.addClass('ball');
};

  makeBall.prototype = Object.create(makeDancer.prototype);
  makeBall.prototype.constructor = makeBall;
  makeBall.prototype.move = function(){
    this.$dancer.animate({"top": "+=50px"}, "slow");
    this.$dancer.animate({"top": "-=50px"}, "slow");

  }

  makeBall.prototype.step = function(){
    makeDancer.prototype.step.call(this);
    this.move();
  };
