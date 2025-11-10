function cliquemodal(img){
    const janelamodal= document.getElementById('janelamodal');
    const imgmodal= document.getElementById('imgmodal');
    const txtmodal = document.getElementById('txtmodal');
    const bntfechar = document.getElementById('bntfechar');


janelamodal.classList.remove("ocultajanelamodal");
janelamodal.classList.add("mostrajanelamodal");

imgmodal.src=img.src;
imgmodal.alt=img.alt;
txtmodal.innerHTML= img.alt;

bntfechar.onclick= function(){

janelamodal.classList.remove("mostrajanelamodal");
janelamodal.classList.add("ocultajanelamodal");
}
}