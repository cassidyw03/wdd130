console.log("HELLO");
const button = document.querySelector('#btn');
button.innerText = 'CLICK ME?';


button.addEventListener('click', function() {
    document.getElementById('bod').innerHTML += 'HELLO...';
})