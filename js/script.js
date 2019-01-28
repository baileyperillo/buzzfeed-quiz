/* global $ */

$(document).ready(function() {
   
   
    //function score(ans1,ans2,ans3) {
      // $("#result").html("you got")
    //}
        
    $("button").click(function() {
        var name = $("#name").val();
        var placement = "TBD";
        var imgSrc = "https://media.giphy.com/media/22zgHX8aop488/giphy.gif";
        var q1Result = $("#question1").val();
        var q2Result = $("#question2").val();
        var q3Result = $("#question3").val();
        var totalScore=q1Result+q2Result+q3Result;
        
        function num1() {
        if("#question1"=="powers"){
            q1Result=1 
             }else if("#question1"=="intelligence"){
            q1Result=2
             }else if("#question1"=="law"){
             q1Result=3
             }else if("#question1"=="skill"){
             q1Result=4
            }else{     
        var q1Result=0
    };
        }
        function num2() {
            if("#question2"=="supernatural abilities"){
                q2Result=1
            }else if("#question2"=="mind"||"#question2"=="heart"||"#question2"== "mind and/or heart"){
                q2Result=2
            }else if("#question2"=="fists and weapons"){
                q2Results=3
            }else if("#question2"=="rules"||"#question2"=="the rules"){
                q2Results=4
            }else{
                q2Results=0
            };
        }
        
        function num3() {
            if("#question3"=="difficulty managing a double life"){
                q3Result=1
            }else if("#question3"=="self-doubt"){
                q3Result=2
            }else if("#qusetion3"=="narrow mindset"){
                q3Result=3
            }else if("#question3"=="physical properties"){
                q3Result=4
            }else{
                q3Result=0
            };
        }

        function display(name) {
    $(".result").text("congrats " + name + "! You would be a "+ person)

    function person(){
    if(totalScore==3){
            placement="metahuman"
        }else if(totalScore==6){
            placement="vigilante"
        }else if(totalScore==19){
            placement="public authority"
        }else if(totalScore==12){
            placement="desk support"
        }else{
            placement="civilian"
        };
    }
    $(".result").show(display);
}