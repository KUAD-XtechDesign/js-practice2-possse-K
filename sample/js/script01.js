$(function(){

    let txt1 = "おはようございます！";
    let txt2 = "おげんきですか？";
    let num1 = 20;
    let num2 = 32;

    function seyHellow(){
        $("#content").text("こんにちは！");
    }

    function saySomething(txt){
        $("#content").text(txt);
    }

    function samTow(arg1,arg2){
        $("#content").append(arg1 + arg2);
    }
    　　
    $("#button01").on("click",function(){
      seyHellow();
    })
    
    $("#button02").on("click",function(){
      saySomething(txt1);
    })
    
    $("#button03").on("click",function(){
       //$("#content").text(num1 + num2);
        samTow(txt1,txt2);
    })
    
    $("#button04").on("click",function(){
      //$("#content").text(num1 + num2);
      samTow(num1,num2);
    })
    
    // + - * /
    
    $("#button05").on("click",function(){
      samTow(txt1,txt2);
      samTow(num1,num2);
    })
   


})