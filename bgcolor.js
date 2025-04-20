let button =document.querySelector("#start");
let instId;

button.addEventListener('click',function(){
    function randomColor(){
        let letter='0123456789ABCDEF';
        let color='#';
        for(let i=0;i<6;i++){
            color += letter[Math.floor(Math.random()*16)];
        }
        return color;

    }

    let value=function(){
        document.body.style.backgroundColor=randomColor();
    }
    instId=setInterval(value,2000);

});

let buttonn = document.querySelector("#stop");
buttonn.addEventListener('click',function(){
    clearInterval(instId);
})