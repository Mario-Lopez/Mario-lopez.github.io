window.addEventListener('scroll',function()
{
    let objetivos = this.document.getElementById('objetivos');
    let home = this.document.getElementById('home');
    let menu = this.document.getElementById('menu');

    let pos = objetivos.getBoundingClientRect().top;
    console.log(pos);


    let inicio = window.innerHeight/1.2;

    if(pos < inicio)
    {
        home.style.visibility='visible';
        home.style.transform='translateY(-10%)';
        objetivos.style.animation='mover 0.8s ease-out';
        menu.style.background='black';
    }
    else
    {
        home.style.transform='translateY(200%)';
        home.style.visibility='hidden';
        menu.style.background='rgb(0, 0, 0,0.1)';
    }
})