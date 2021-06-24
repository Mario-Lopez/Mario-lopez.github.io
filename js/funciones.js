window.addEventListener('scroll',function()
{
    let fotoMario = this.document.getElementById('fotoMia');
    let InfMario = this.document.getElementById('infoMia');
    let btnBack = this.document.getElementById('btnBack');


    let portafolio = this.document.getElementById('divPortafolio');
    
    let pos = fotoMario.getBoundingClientRect().top;
    let pos2 = portafolio.getBoundingClientRect().top;


    let botonHome = window.innerHeight/1;
    let limite = window.innerHeight/0.8;
    if(pos2 < limite)
    {
        portafolio.style.transform="translateY(0%)"
        portafolio.style.opacity="1"
    }
    else{
        portafolio.style.transform="translateY(50%)"
        portafolio.style.opacity="0"
    }
    if(pos < botonHome)
    {
        fotoMario.style.opacity="1";
        fotoMario.style.transform="translateY(0%)"
        InfMario.style.opacity="1";
        InfMario.style.transform="translateY(0%)"
        btnBack.style.transform="translateY(0%)"
    }
    else
    {
        fotoMario.style.opacity="0";
        fotoMario.style.transform="translateY(50%)"
        InfMario.style.opacity="0";
        InfMario.style.transform="translateY(50%)"
        btnBack.style.transform="translateY(280%)"
    }
})
