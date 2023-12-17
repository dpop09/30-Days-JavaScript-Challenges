let trigger = [true,true,true,true,true,true,true,true,true];
let ids = ["clap-box","hihat-box","kick-box","openhat-box","boom-box","ride-box","snare-box","tom-box","tink-box"];

window.addEventListener("keydown", (event) => {
    let pressedKey = event.key;
    switch(pressedKey){
        case "a":
            let clap = new Audio("resources/clap.wav");
            clap.play();
            let clapBox = document.getElementById(ids[0]);
            if (trigger[0]) {
                clapBox.id = "clap-pop-box";
                ids[0] = "clap-pop-box";
                trigger[0] = false;
                
            } else if (!trigger[0]) {
                clapBox.id = "clap-pop-pop-box";
                ids[0] = "clap-pop-pop-box";
                trigger[0] = true;
            }
            break;
        case "s":
            let hihat = new Audio("resources/hihat.mp3");
            hihat.play();
            let hihatBox = document.getElementById(ids[1]);
            if (trigger[1]) {
                hihatBox.id = "hihat-pop-box";
                ids[1] = "hihat-pop-box";
                trigger[1] = false;
            } else if (!trigger[1]) {
                hihatBox.id = "hihat-pop-pop-box";
                ids[1] = "hihat-pop-pop-box";
                trigger[1] = true;
            }
            break;
        case "d":
            let kick = new Audio("resources/kick.mp3");
            kick.play();
            let kickBox = document.getElementById(ids[2]);
            if (trigger[2]) {
                kickBox.id = "kick-pop-box";
                ids[2] = "kick-pop-box";
                trigger[2] = false;
            } else if (!trigger[2]) {
                kickBox.id = "kick-pop-pop-box";
                ids[2] = "kick-pop-pop-box";
                trigger[2] = true;
            }
            break;
        case "f":
            let openhat = new Audio("resources/openhat.mp3");
            openhat.play();
            let openhatBox = document.getElementById(ids[3]);
            if (trigger[3]) {
                openhatBox.id = "openhat-pop-box";
                ids[3] = "openhat-pop-box";
                trigger[3] = false;
            } else if (!trigger[3]) {
                openhatBox.id = "openhat-pop-pop-box";
                ids[3] = "openhat-pop-pop-box";
                trigger[3] = true;
            }
            break;
        case "g":
            let boom = new Audio("resources/boom.mp3");
            boom.play();
            let boomBox = document.getElementById(ids[4]);
            if (trigger[4]) {
                boomBox.id = "boom-pop-box";
                ids[4] = "boom-pop-box";
                trigger[4] = false;
            } else if (!trigger[4]) {
                boomBox.id = "boom-pop-pop-box";
                ids[4] = "boom-pop-pop-box";
                trigger[4] = true;
            }
            break;
        case "h":
            let ride = new Audio("resources/ride.mp3");
            ride.play();
            let rideBox = document.getElementById(ids[5]);
            if (trigger[5]) {
                rideBox.id = "ride-pop-box";
                ids[5] = "ride-pop-box";
                trigger[5] = false;
            } else if (!trigger[5]) {
                rideBox.id = "ride-pop-pop-box";
                ids[5] = "ride-pop-pop-box";
                trigger[5] = true;
            }
            break;
        case "j":
            let snare = new Audio("resources/snare.mp3");
            snare.play();
            let snareBox = document.getElementById(ids[6]);
            if (trigger[6]) {
                snareBox.id = "snare-pop-box";
                ids[6] = "snare-pop-box";
                trigger[6] = false;
            } else if (!trigger[6]) {
                snareBox.id = "snare-pop-pop-box";
                ids[6] = "snare-pop-pop-box";
                trigger[6] = true;
            }
            break;
        case "k":
            let tom = new Audio("resources/tom.mp3");
            tom.play();
            let tomBox = document.getElementById(ids[7]);
            if (trigger[7]) {
                tomBox.id = "tom-pop-box";
                ids[7] = "tom-pop-box";
                trigger[7] = false;
            } else if (!trigger[7]) {
                tomBox.id = "tom-pop-pop-box";
                ids[7] = "tom-pop-pop-box";
                trigger[7] = true;
            }
            break;
        case "l":
            let tink = new Audio("resources/tink.mp3");
            tink.play();
            let tinkBox = document.getElementById(ids[8]);
            if (trigger[8]) {
                tinkBox.id = "tink-pop-box";
                ids[8] = "tink-pop-box";
                trigger[8] = false;
            } else if (!trigger[8]) {
                tinkBox.id = "tink-pop-pop-box";
                ids[8] = "tink-pop-pop-box";
                trigger[8] = true;
            }
            break;
    }
})