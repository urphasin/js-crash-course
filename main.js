let count = 0;

const button = document.getElementById('tapBtn');
button.addEventListener('click', () => {
    count++;
    button.textContent = `Tapped ${count} times`;
})


const sidebar = document.querySelector('.sidebar');