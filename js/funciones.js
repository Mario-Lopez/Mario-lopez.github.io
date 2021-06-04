window.addEventListener('scroll',function()
{
    let menu = this.document.getElementById('menu');

    let pos = limite.getBoundingClientRect().top;
    console.log(pos);


    let botonHome = window.innerHeight/1.1;

    if(pos < botonHome)
    {
        menu.style.background="black";
        menu.style.paddingTop="20px";
        menu.style.paddingBottom="20px";
        // menu.style.height="50px";
    }
    else
    {
        menu.style.background="none";
        menu.style.paddingTop="0px";
        menu.style.paddingBottom="0px";
        // menu.style.height="80px";
    }
})
