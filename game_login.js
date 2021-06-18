function letsplay() {
    var name1=document.getElementById("person1usern").value;
    var name2=document.getElementById("person2usern").value;
    localStorage.setItem("names1",name1);
    localStorage.setItem("names2",name2);
    window.location="game.html";
}