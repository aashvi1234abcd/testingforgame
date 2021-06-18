player1names=localStorage.getItem("names1");
player2names=localStorage.getItem("names2");
player1scores=0;
player2scores=0;

document.getElementById("player1name").innerHTML=player1names+" : ";
document.getElementById("player2name").innerHTML=player2names+" : ";
document.getElementById("player1score").innerHTML=player1scores;
document.getElementById("player2score").innerHTML=player2scores;
document.getElementById("question").innerHTML="Question Turn-"+player1names;
document.getElementById("answer").innerHTML="Answer Turn-"+player2names;

function send() {
    var getword=document.getElementById("giveword").value;
    var word=getword.toLowerCase();
    var character1=word.charAt(1);
    var missingword=Math.floor(word.length/2);
    var character2=word.charAt(missingword);
    var reducedword=word.length-1
    var character3=word.charAt(reducedword);
    var nochar1=word.replace(character1,"_");
    var nochar2=nochar1.replace(character2,"_");
    var nochar3=nochar2.replace(character3,"_");
    var questionword="<h4 id='qword'> Question is "+nochar3+"</h4>" ;
    var answerinput="<br> answer is <input type='text' id='answertext'>";
    var checkbutton="<br><br><button style='background-color: fuchsia;'>Check</button>";
    var allrows=questionword+ answerinput+ checkbutton;
    document.getElementById("output").innerHTML=allrows;
    document.getElementById("giveword").innerHTML=" ";
}