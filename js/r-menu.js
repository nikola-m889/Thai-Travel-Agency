let status=false;

let mobileMenu = function() {
    let MenuItem=document.querySelector('.mobile-menu');
    let MenuItemUl=document.querySelector('.mobile-ul');
    let MenuItemLink=document.querySelectorAll('.mobile-li a');

    if(status === false) {

        MenuItem.style.height="250px";
        MenuItemUl.style.visibility="visible";

        let LinkA=MenuItemLink.length;
        for(let i=0;i<LinkA;i++) {
        MenuItemLink[i].style.opacity="1";
    }
    status=true;

    }
    else if(status === true) {

        MenuItem.style.height="0.01px";
        MenuItemUl.style.visibility="hidden";

        let LinkA=MenuItemLink.length;
        for(let i=0;i<LinkA;i++) {
            MenuItemLink[i].style.opacity="0"
        }
        status=false;
    }

    function close(e) {
        MenuItem.style.height="0.01px";
        MenuItemUl.style.visibility="hidden";

        let LinkA=MenuItemLink.length;
        for(let i=0;i<LinkA;i++) {
            MenuItemLink[i].style.opacity="0"
        }
        status=false;
    }

    MenuItemLink.forEach(item=>item.addEventListener('click',close));
}