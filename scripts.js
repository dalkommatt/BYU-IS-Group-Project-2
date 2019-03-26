function playGame() {
    class team {
        teamName;
        wins;
        losses;
        winLossPct;
        games;

        constructor(teamName) {
            this.teamName = teamName;
        }
    }

    class BasketballTeam extends team {
        totalPointsFor;
        totalPointsAgainst;
    }

    class Game {
        myScore;
        theirScore;
        winOrLoss;

        constructor(myScore, theirScore, winOrLoss) {
            this.myScore =
                this.theirScore =
                this.winOrLoss =
        }
    }
    var lis = document.getElementById("teamList").getElementsByTagName("li");
    
}