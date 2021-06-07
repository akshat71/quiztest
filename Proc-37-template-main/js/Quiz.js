class Quiz {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
    }
  }

  play(){
    //write code here to hide question elements
//question.this.title.hide()
//question.this.button.hide()
//question.this.input2.hide()
    //write code to change the background color here
background("yellow")
    //write code to show a heading for showing the result of Quiz
textSize(25)

var result=createElement("h2")
result.html("RESULTS")

    //call getContestantInfo( ) here
    Contestant.getPlayerInfo()
    if(allContestants!==undefined){
fill("blue")
textSize(20)
text("Contestant who answerd correct are highlited with green color")
    }
for(var plr in allContestants){
  var correctAns="2"
if(correctAns===allContestants[plr].answer){
fill("green")
}
else{
  fill("red")
}
}
    //write condition to check if contestantInfor is not undefined

    //write code to add a note here

    //write code to highlight contest who answered correctly
    
  }

}
