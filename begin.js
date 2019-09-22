//différentes touches du clavier à gérer
const KeyCode = {
KEY_ENTER : 13,
KEY_SPACE : 32,
KEY_ARROWRIGHT : 39,
KEY_ARROWLEFT : 37, 
KEY_ARROWUP : 38,
KEY_ARROWDOWN : 40
}

const start = document.querySelector(".begin");

window.addEventListener("keydown", /*keypress*/ post);

//ajax get ici récupérer l'animation et cadran co et inscription
function keypress(){
    start.classList.add("desactive");//class css pour desact anim mais marche pas

    var request = new XMLHttpRequest();

    request.open("GET", "/p&c/public/inscription", true);
    //request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

    request.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            const inscription = document.querySelector(".inscription");
            inscription.innerHTML = this.responseText;
            
            //animate.classList.add("animateEnd");
            console.log(request.responseText);
        }
    }

    request.send();
    /*const key = event.key.toLowerCase();
    console.log(key);*/    
    //location.replace("/p&c/public/next");
}

//ajax post envoyer les informations dans une page à traiter
function post(e){
e.preventDefault();
    let array = ["ok"];
    let arraystr = JSON.stringify(array);
    let id = 14;
    var request = new XMLHttpRequest();

    request.open("POST", "/p&c/public/traitement", true);
    request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    request.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            console.log(this.responseText);
        
        }
    }

request.send("data=" + arraystr + "&id=" + id);
    //request.send("data="+ arraystr + "&id=" + idstr);
}
