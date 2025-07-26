const people = [
    "Liam", "Emma", "Noah", "Olivia", "Ava", "Sophia", "Jackson", "Isabella", "Lucas", "Mia",
    "Ethan", "Amelia", "Harper", "Evelyn", "Alexander", "Luna", "James", "Aria", "Benjamin", "Charlotte",
    "Henry", "Gianna", "Michael", "Sofia", "William", "Camila", "Daniel", "Avery", "Joseph", "Scarlett",
    "David", "Emily", "Samuel", "Chloe", "Matthew", "Ella", "Jack", "Grace", "Sebastian", "Lily",
    "Owen", "Zoey", "Gabriel", "Victoria", "Julian", "Madison", "Wyatt", "Penelope", "John", "Riley",
    "Luke", "Addison", "Jayden", "Layla", "Dylan", "Natalie", "Grayson", "Mila", "Carter", "Hannah",
    "Isaac", "Julia", "Elijah", "Abigail", "Levi", "Madelyn", "Jaxon", "Ellie", "Mateo", "Aubrey",
    "Lincoln", "Stella", "Anthony", "Nora", "Isaiah", "Otito", "Hazel", "Joshua", "Elizabeth", "Andrew", "Violet",
    "Thomas", "Paisley", "Ryan", "Savannah", "Nathan", "Skylar", "Aaron", "Claire", "Charles", "Brooklyn",
    "Caleb", "Aaliyah", "Josiah", "Sadie", "Christian", "Eva", "Jonathan", "Leah", "Landon", "Anna"
];

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


// mouseenter - mouseleave
// mouseover - mouseout


results.addEventListener('mouseover', (e) => {
            if (e.target.tagName === "LI") {
                e.target.style.textDecoration = "underline";
                e.target.style.color = "yellow"
            }
        });

results.addEventListener("mouseout", (e) => {
    if (e.target.tagName === "LI") {
                e.target.style.textDecoration = "none";
                e.target.style.color = "black"
}
});

results.addEventListener('click', e => {
    console.log(e.target.textContent);
    
})
