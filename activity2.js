function getscore() {
    score=localStorage.getItem("score");
    document.getElementById("updated_score").innerHTML="<h1> score= "+score+"</h1>";
}
function home() {
    window.location="activity.html";
}