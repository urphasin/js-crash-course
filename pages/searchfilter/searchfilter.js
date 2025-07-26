const people = ['Alice', 'Bob', 'Charles', 'David', 'Eva', 'Abigail', 'Leclear', 'Brandon'];

const input = document.getElementById('search');

const results = document.getElementById('results');


function render(filteredList)
{
    results.innerHTML = '';
    filteredList.forEach(name => {
        const li = document.createElement('li');
        li.textContent = name;
        results.appendChild(li);
    });
}

input.addEventListener('input', () => {
    const keyword = input.value.toLowerCase();
    const filtered = people.filter(name => name.toLowerCase().includes(keyword));
    render(filtered);
});

render(people);

