$(function(){

let hako = 0;

function checkBox(){
    if(hako > 5){
        $("#content").text(hako + "個はいっています。箱はいっぱいです。空にします。");
        hako = 0;
    }else if(hako <= 0){
        hako = 0;
        $("#content").text(hako+"個。はいっていません");
    }else{
        $("#content").text(hako+"個はいっています。まだはいります。");
    }
}

$("#button01").on("click",function(){
    checkBox()
})

$("#button02").on("click",function(){
    hako++;
    checkBox()
})
$("#button03").on("click",function(){
    hako--;
    checkBox()
})

})