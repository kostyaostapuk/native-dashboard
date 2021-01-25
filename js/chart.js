const x = document.querySelector('.axis-x');
for (let i = 0; i < x.children.length; i++) {
    x.children[i].style.height = x.children[i].getAttribute('data-percent')+ '%';
}