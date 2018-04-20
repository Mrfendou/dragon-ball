window.onload = function () {
    var arr = ["../music/bgm.mp3", 
    "../music/bgmz.mp3", 
    "../music/bgmgt.mp3", 
    "../music/bgmchao.mp3"];
    var myAudio = new Audio();
    myAudio.preload = true;
    myAudio.controls = true;    
    myAudio.src = arr.shift();
    myAudio.addEventListener('ended', playEndedHandler, false);
    myAudio.style.width = "159px";
    // myAudio.play();
    document.getElementById("bgm").appendChild(myAudio);
    myAudio.loop = false;
    function playEndedHandler() {
        myAudio.src = arr.pop();
        myAudio.play();
        console.log(arr.length);
        !arr.length && myAudio.removeEventListener('ended', playEndedHandler, false); //只有一个元素时解除绑定
    }
}