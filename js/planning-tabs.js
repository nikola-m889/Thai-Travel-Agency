const TabOption=document.querySelectorAll('.tab');
const TabContent=document.querySelectorAll('.tab-content');

function SelectItem(e) {
    removeBorder();
    removeShow();

    this.classList.add('t-border');
    let ContentName=document.querySelector(`#${this.id}-content`);
    ContentName.classList.add('show');

}

function removeBorder() {
    TabOption.forEach(item=>item.classList.remove('t-border'));
}

function removeShow() {
    TabContent.forEach(item=>item.classList.remove('show'));
}


TabOption.forEach(item=>item.addEventListener('click',SelectItem));
