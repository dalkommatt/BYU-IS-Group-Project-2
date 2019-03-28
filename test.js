for (var iHomeCount = 0; iHomeCount < 9; iHomeCount++) {
               //There was an iWins thing here
               //inner loop cycles through each team's 20 games
               for (var iAwayCount = 0; iAwayCount < 9; iAwayCount++) {

                   if(iAwayCount !== iHomeCount)
                   {
                   //play home game
                   myScore = Math.floor(Math.random() * 101) + 5;
                   theirScore = Math.floor(Math.random() * 101);

                   //break ties
                   while (myScore === theirScore) {
                       myScore = myScore + Math.floor(Math.random() * 16);
                       theirScore = theirScore + Math.floor(Math.random() * 16);
                   }

                   aoTeams[iHomeCount].addPointsFor(myScore);
                   aoTeams[iAwayCount].addPointsAgainst(myScore);

                   aoTeams[iHomeCount].addPointsAgainst(theirScore);
                   aoTeams[iAwayCount].addPointsFor(theirScore);

                   if (myScore > theirScore) {
                       winOrLoss = "W";
                       aoTeams[iHomeCount].iWins = aoTeams[iHomeCount].iWins + 1;
                       aoTeams[iAwayCount].iLosses = aoTeams[iHomeCount].iLosses + 1;
                   } else {
                       winOrLoss = "L";
                       aoTeams[iAwayCount].iWins = aoTeams[iAwayCount].iWins + 1;
                       aoTeams[iHomeCount].iLosses = aoTeams[iHomeCount].iLosses + 1;
                   }

                   var myGame = new Game(myScore, theirScore, winOrLoss);
                   aoTeams[iHomeCount].aoGames.push(myGame);

                   /*if (winOrLoss === ") {
                       winOrLoss = true;
                   } else {
                       winOrLoss = false;
                   }*/

                   //push scores
                   awayGame = new Game(theirScore, myScore, winOrLoss);
                   aoTeams[iAwayCount].aoGames.push(myGame);


                   //play away game
                   /*myScore = Math.floor(Math.random()* 101);
                   theirScore = Math.floor(Math.random() * 101 + 5);

                   while (myScore === theirScore) {
                       myScore = myScore + Math.floor(Math.random() * 16);
                       theirScore = theirScore + Math.floor(Math.random() * 16);
                   }

                   aoTeams[iHomeCount].addPointsFor(myScore);
                   aoTeams[iAwayCount].addPointsAgainst(myScore);

                   aoTeams[iHomeCount].addPointsAgainst(theirScore);
                   aoTeams[iAwayCount].addPointsFor(theirScore);

                   if (myScore > theirScore) {
                       winOrLoss = true;
                       aoTeams[iHomeCount].iWins = aoTeams[iHomeCount].iWins + 1;
                       aoTeams[iAwayCount].iLosses = aoTeams[iHomeCount].iLosses + 1;
                   } else {
                       winOrLoss = false;
                       aoTeams[iAwayCount].iWins = aoTeams[iAwayCount].iWins + 1;
                       aoTeams[iHomeCount].iLosses = aoTeams[iHomeCount].iLosses + 1;
                   }

                   var myGame = new Game(myScore, theirScore, winOrLoss);
                   aoTeams[iHomeCount].aoGames.push(myGame);

                   if (winOrLoss === false) {
                       winOrLoss = true;
                   } else {
                       winOrLoss = false;
                   }

                   //push scores
                   awayGame = new Game(theirScore, myScore, winOrLoss);
                   aoTeams[iAwayCount].aoGames.push(myGame);*/
                   }
                   else
                   {

                   }
               }