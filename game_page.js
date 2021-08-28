var p1=localStorage.getItem("player1")
var p2=localStorage.getItem("player2")
var p1score=0
var p2score=0
document.getElementById("player1_name").innerHTML=p1
document.getElementById("player2_name").innerHTML=p2
document.getElementById("player1_score").innerHTML=p1score
document.getElementById("player2_score").innerHTML=p2score
document.getElementById("player_question").innerHTML="Question - "+p1
document.getElementById("player_answer").innerHTML="Answer - "+p2
function send(){
    getword=document.getElementById("word").value
    word=getword.toLowerCase()
    c1=word.charAt(1)
    console.log(c1)
    middle=Math.floor(word.length/2)
    c2=word.charAt(middle)
    console.log(c2)
    last=word.length-1
    c3=word.charAt(last)
    console.log(c3)
    remove_c1=word.replace(c1,"_")
    remove_c2=remove_c1.replace(c2,"_")
    remove_c3=remove_c2.replace(c3,"_")
    console.log (remove_c3)
    question="<h4 id='word_display'> Q. "+ remove_c3+ "</h4>"
    answer="<br> answer : <input type='text' id='input_check_box'>"
    check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
     row = question + answer + check_button ;
      document.getElementById("output").innerHTML = row;
       document.getElementById("word").value = "";
}