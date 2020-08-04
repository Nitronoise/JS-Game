let GameManager = {
  setGameStart: function (classType) {
    this.resetPlayer(classType);
    this.setPreFight();
  },
  resetPlayer: function (classType) {
    switch (classType) {
      case "Warrior":
        player = new Player(classType, 200, 2, 200, 100, 50);
        break;

      case "Rogue":
        player = new Player(classType, 100, 0, 100, 150, 200);
        break;

      case "Mage":
        player = new Player(classType, 80, 3, 50, 200, 50);
        break;

      case "Hunter":
        player = new Player(classType, 200, 0, 50, 170, 100);
        break;
    }

    let getInterface = document.querySelector(".interface");
    getInterface.innerHTML =
      '<img src="/img/' +
      classType.toLowerCase() +
      '.png"  class="img-avatar"> <div><h3> ' +
      classType +
      ' </h3> <p class="health-player"> Health: ' +
      player.health +
      " </p><p> Manner: " +
      player.manner +
      " </p><p> Strength: " +
      player.strength +
      " </p><p> Agility: " +
      player.agility +
      " </p> <p> Speed: " +
      player.speed +
      " </p>  ";
  },
  setPreFight: function () {
    let getHeader = document.querySelector(".header");
    let getActions = document.querySelector(".actions");
    let getArena = document.querySelector(".arena");
    getHeader.innerHTML = "<p> Find an enemy! </p>";
    getActions.innerHTML =
      '<a href ="#" class="btn-prefight" onclick= "GameManager.setFight()"> Search for enemy!</a>';
    getArena.style.visibility = "visible";
    getArena.style.height = "180px";
  },
  setFight: function () {
    let getHeader = document.querySelector(".header");
    let getActions = document.querySelector(".actions");
    let getEnemy = document.querySelector(".enemy");
    // Creates enemy
    let enemy00 = new Enemy("Goblin", 100, 1, 50, 100, 100);
    let enemy01 = new Enemy("Troll", 200, 0, 150, 80, 100);
    let enemy02 = new Enemy("Warlord", 210, 2, 200, 100, 105);
    let chooseRandomEnemy = Math.floor(Math.random() * Math.floor(3));
    switch (chooseRandomEnemy) {
      case 0:
        enemy = enemy00;
        break;
      case 1:
        enemy = enemy01;
        break;
      case 2:
        enemy = enemy02;
        break;
    }
    getHeader.innerHTML = "<p> Battle begins, Fight!</p>";
    getActions.innerHTML =
      '<a href ="#" class="btn-prefight" onclick= "PlayerMoves.calcAttack()"> Attack the enemy!</a> ';
    getEnemy.innerHTML =
      '<img src="/img/' +
      enemy.enemyType.toLowerCase() +
      '.png"  class="img-avatar" alt=" ' +
      enemy.enemyType +
      ' "> <div><h3> ' +
      enemy.enemyType +
      ' </h3> <p class="health-enemy"> Health: ' +
      enemy.health +
      " </p><p> Manner: " +
      enemy.manner +
      " </p><p> Strength: " +
      enemy.strength +
      " </p><p> Agility: " +
      enemy.agility +
      " </p> <p> Speed: " +
      enemy.speed +
      " </p> </div> ";
  },
};
