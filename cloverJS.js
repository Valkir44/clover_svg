var buttonsClover = document.querySelectorAll('.buttons button');

var clover = document.getElementsByClassName('clover')[0];
console.log(clover);
for (var i = 0; i < buttonsClover.length; i++) {
    buttonsClover[i].addEventListener('click', manageCloverClasses );
}

function manageCloverClasses() {
    if (this.getAttribute('data-add')) {
        clover.classList.add(this.getAttribute('data-add'));
    }
    if (this.getAttribute('data-remove')) {
        clover.classList.remove(this.getAttribute('data-remove'));
    }
}