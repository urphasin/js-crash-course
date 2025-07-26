function checkPalindrome() {
    const input = document.querySelector('.number_input');
    let x = input.value;
    let isPalindrome = false;
    if (!x) {
        isPalindrome = false;
    } else {
        isPalindrome  = x === x.split("").reverse().join("")
    }
    
    const answer = document.querySelector("#answer")
    answer.textContent = isPalindrome.toString().toUpperCase();
}

const input =  document.querySelector('.number_input')
input.addEventListener('input', checkPalindrome);


checkPalindrome();