AFRAME.registerComponent("game",{
    schema:{
        gameState:{type:"string",default:"play"}
    },
    init:function(){
        var duration = 300;
        var timerEl = document.querySelector("#timer")
        this.startTimer(duration,timerEl)
    },
    startTimer:function(duration,timerEl){
        var minuets
        var seconds
        setInterval(() => {
            if (duration>=0) {
                this.data.gameState = "play"
                minuets = parseInt(duration/60)
                seconds = parseInt(duration%60)
                if(minuets<10){
                    minuets = "0"+ minuets
                }
                if(seconds<10){
                    seconds = "0"+ seconds
                }
                timer.setAttribute("text",{value:minuets+":"+seconds})
                duration -=1
            } else {
                this.data.gameState="over"
                var cameraRig = document.querySelector("#camera-rig")
                cameraRig.setAttribute("velocity",{x:0,y:0,z:0})
                var Over = document.querySelector("#over")
                Over.setAttribute("visible",true)
                var carSpeed = document.querySelector("#speed")
                carSpeed.setAttribute("text",{value:"0"})

            }
        }, 1000);
    }
})
