// Enemies our player must avoid
const Enemy = function(x, y, step) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
    this.x = x;
    this.y = y;
    this.step = step;

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    this.x += this.step * dt;

//Check collision between player and enemies.
    if (player.x < this.x + 80 && player.x + 80 > this.x && player.y === this.y) {

      player.x = 202;
      player.y = 400;

    }

//Reset x position and change step when enemy reaches border.
    if (this.x > 505) {

      this.x = 0;
      this.step = 200 + Math.floor(Math.random() * 1024);

    };
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
const Player = function(x, y) {

    this.x = x;
    this.y = y;
    this.sprite = 'images/char-boy.png';

};

Player.prototype.update = function() {

//If reach water...
    if (this.y < -14) {
        this.y = 400;
    }

//Player move within the game field.
    if (this.y > 400) {
        this.y = 400;
    }

    if (this.x > 402) {
        this.x = 402;
    }

    if (this.x < 2) {
        this.x = 2;
    }
};

Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Player.prototype.handleInput = function(key) {

    switch (key) {
        case 'left':
          this.x -= 101;
          break;
        case 'up':
          this.y -= 83;
          break;
        case 'right':
          this.x += 101;
          break;
        case 'down':
          this.y += 83;
          break;
    }
};

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
const allEnemies = [];

//Position where the enemies are created
const enemyY = [68, 151, 234];

enemyY.forEach(function(y) {

  allEnemies.push(new Enemy(0, y, 200 + Math.floor(Math.random() * 1024)));

});

// Place the player object in a variable called player
//Initial position for Player.
const player = new Player(202, 400);

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    const allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
