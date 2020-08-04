let player;

function Player(classType, health, manner, strength, agility, speed) {
    this.classType = classType;
    this.health = health;
    this.manner = manner;
    this.strength = strength;
    this.agility = agility;
    this.speed = speed;
}
let PlayerMoves = {
    calcAttack: function() {
    // who attacks first?
    let getPlayerSpeed = player.speed;
    let getEnemySpeed = enemy.speed;
            // Player attacks!
                let playerAttack = function() {
                let calcBaseDamage;
                if (player.manner > 0) {
                    calcBaseDamage = player.strength * player.manner / 1000;
                } else {
                    calcBaseDamage = player.strength * player.agility / 1000;
                }
                let offsetDamage = Math.floor(Math.random() * Math.floor(10));
                let calcOutputDamage = calcBaseDamage + offsetDamage
                // Number of hits
                let numberOfHits = Math.floor(Math.random() * Math.floor(player.agility / 10 / 2 + 1));
                let attackValues = [calcOutputDamage, numberOfHits];
                return attackValues;
            }
                // Enemy attacks!
                let enemyAttack = function() {
                let calcBaseDamage;
                if (enemy.manner > 0) {
                    calcBaseDamage = enemy.strength * enemy.manner / 1000;
                } else {
                    calcBaseDamage = enemy.strength * enemy.agility / 1000;
                }
                let offsetDamage = Math.floor(Math.random() * Math.floor(10));
                let calcOutputDamage = calcBaseDamage + offsetDamage
                // Number of hits
                let numberOfHits = Math.floor(Math.random() * Math.floor(enemy.agility / 10 / 2 + 1));
                let attackValues = [calcOutputDamage, numberOfHits];
                return attackValues;
             }
             // Get player/enemy health to change later!
             let getPlayerHealth = document.querySelector(".health-player");
             let getEnemyHealth = document.querySelector(".health-enemy");
                // Initiate attacks!
            if (getPlayerSpeed >= getEnemySpeed){
                let playerAttackValues = playerAttack();
                let totalDamage = playerAttackValues [0] * playerAttackValues[1];
                enemy.health = enemy.health - totalDamage;
                alert("You hit causing " + playerAttackValues[0] + " damage " + playerAttackValues[1] + " Times." );
            }
            if (enemy.health <= 0){
                alert("You win! Refresh to play again");
                getPlayerHealth.innerHTML = 'Health: ' + player.health;
                getEnemyHealth.innerHTML = 'Health: 0';
            }
            else {
                getEnemyHealth.innerHTML = 'Health: ' + enemy.health;
                // Enemy Attacks!
                let enemyAttackValues = enemyAttack();
                let totalDamage = enemyAttackValues [0] * enemyAttackValues[1];
                player.health = player.health - totalDamage;
                alert("Enemy hits causing " + enemyAttackValues[0] + " damage " + enemyAttackValues[1] + " Times." );
                getPlayerHealth.innerHTML = 'Health: ' + player.health;
            }   
            if (player.health <= 0){
                    alert("You lose! Refresh to play again");
                    getPlayerHealth.innerHTML = 'Health: 0';
                    getEnemyHealth.innerHTML = 'Health: ' +enemy.health;
                } 
                else{
                    getPlayerHealth.innerHTML = 'Health: ' + player.health;
                } 
         if (getEnemySpeed >= getPlayerSpeed){
            enemyAttackValues = enemyAttack();
            totalDamage = enemyAttackValues [0] * enemyAttackValues[1];
            player.health = player.health - totalDamage;
            alert("Enemy hits causing " + enemyAttackValues[0] + " damage " + enemyAttackValues[1] + " Times." );
        } 
        if (player.health <= 0){
            alert("You lose! Refresh to play again");
            getEnemyHealth.innerHTML = 'Health: ' + enemy.health;
            getPlayerHealth.innerHTML = 'Health: 0';
        }
        else {
            getPlayerHealth.innerHTML = 'Health: ' + player.health;
            // Player Attacks!
            playerAttackValues = playerAttack();
            totalDamage = playerAttackValues [0] * playerAttackValues[1];
            enemy.health = enemy.health - totalDamage;
            alert("You hit causing " + playerAttackValues[0] + " damage " + playerAttackValues[1] + " Times." );
            getEnemyHealth.innerHTML = 'Health: ' + enemy.health;
        }   if (enemy.health <= 0){
                alert("You Win! Refresh to play again");
                getEnemyHealth.innerHTML = 'Health: 0';
                getPlayerHealth.innerHTML = 'Health: ' + player.health;
            } 
            else{
                getEnemyHealth.innerHTML = 'Health: ' + enemy.health;
            }
        } 
    }
        

