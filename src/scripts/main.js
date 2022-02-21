function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomizeGradients() {
    const gradientID = Math.floor((Math.random() * 10) + 1);
    const buttonPrimary = document.querySelector('.primary');
    const buttonSecondary = document.querySelector('.gradient-secondary');

    console.log(gradientID);

    switch(gradientID) {
        case 1:
            buttonPrimary.style.background = "linear-gradient(to right, #c31432, #240b36)";
            buttonSecondary.innerHTML = "<linearGradient id='g1'><stop stop-color='#c31432'/><stop offset='1' stop-color='#240b36'/></linearGradient>";
            break;
        case 2:
            buttonPrimary.style.background = "linear-gradient(120deg, rgba(255, 243, 59, 1) 0%, rgba(253, 199, 12, 1) 28%, rgba(237, 104, 60, 1) 67%, rgba(237, 104, 60, 1) 89%, rgba(233, 62, 58, 1) 100%)";
            buttonSecondary.innerHTML = "<linearGradient id='g1' gradientUnits='userSpaceOnUse' x1='84.15%' y1='109.15%' x2='15.85%' y2='-9.15%'><stop class=\"stop1\" stop-color='#fff33b'/><stop class=\"stop2\" offset='.28' stop-color='#fdc70c'/><stop class=\"stop3\" offset='.67' stop-color='#ed683c'/><stop class=\"stop4\" offset='.89' stop-color='#ed683c'/><stop class=\"stop5\" offset='1' stop-color='#e93e3a'/></linearGradient>";
            break;
        case 3:
            buttonPrimary.style.background = "linear-gradient(to right, #159957, #155799)";
            buttonSecondary.innerHTML = "<linearGradient id='g1'> <stop stop-color='#159957'/> <stop offset='1' stop-color='#155799'/> </linearGradient>";
            break;
        case 4:
            buttonPrimary.style.background = "linear-gradient(285deg, #4158d0 0%, #c850c0 46%, #ffcc70 100%)";
            buttonSecondary.innerHTML = "<linearGradient id='g1' gradientUnits='userSpaceOnUse' x1='109.15%' y1='65.85%' x2='-9.15%' y2='34.15%'> <stop stop-color='#4158d0'/> <stop offset='.46' stop-color='#c850c0'/> <stop offset='1' stop-color='#ffcc70'/> </linearGradient>";
            break;
        case 5:
            buttonPrimary.style.background = "linear-gradient(285deg, #00dbde 0%, #fc00ff 100%)";
            buttonSecondary.innerHTML = "<linearGradient id='g1' gradientUnits='userSpaceOnUse' x1='109.15%' y1='65.85%' x2='-9.15%' y2='34.15%'> <stop stop-color='#00dbde'/> <stop offset='1' stop-color='#fc00ff'/> </linearGradient>";
            break;
        case 6:
            buttonPrimary.style.background = "linear-gradient(19deg, #21d4fd 0%, #b721ff 100%)";
            buttonSecondary.innerHTML = "<linearGradient id='g1' gradientUnits='userSpaceOnUse' x1='29.31%' y1='110.09%' x2='70.69%' y2='-10.09%'> <stop stop-color='#21d4fd'/> <stop offset='1' stop-color='#b721ff'/> </linearGradient>";
            break;
        case 7:
            buttonPrimary.style.background = "linear-gradient(45deg, #fa8bff 0%, #2bd2ff 52%, #2bff88 90%)";
            buttonSecondary.innerHTML = "<linearGradient id='g1' y1='1'> <stop stop-color='#fa8bff'/> <stop offset='.52' stop-color='#2bd2ff'/> <stop offset='.9' stop-color='#2bff88'/> </linearGradient>";
            break;
        case 8:
            buttonPrimary.style.background = "linear-gradient(45deg, #fbda61 0%, #ff5acd 100%)";
            buttonSecondary.innerHTML = "<linearGradient id='g1' y1='1'> <stop stop-color='#fbda61'/> <stop offset='1' stop-color='#ff5acd'/> </linearGradient>";
            break;
        case 9:
            buttonPrimary.style.background = "linear-gradient( 225deg, #ff3cac 0%, #784ba0 50%, #2b86c5 100%)";
            buttonSecondary.innerHTML = "<linearGradient id='g1' x1='1' x2='0' y2='1'> <stop stop-color='#ff3cac'/> <stop offset='.5' stop-color='#784ba0'/> <stop offset='1' stop-color='#2b86c5'/>";
            break;
        case 10:
            buttonPrimary.style.background = "linear-gradient(90deg, #74ebd5 0%, #9face6 100%)";
            buttonSecondary.innerHTML = "<linearGradient id='g1'> <stop stop-color='#74ebd5'/> <stop offset='1' stop-color='#9face6'/> </linearGradient>";
            break;
    }
}

randomizeGradients();