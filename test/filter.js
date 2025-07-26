let numbers = [0, 1, 2, 3, 4, 5, 6];

let newNums = numbers.filter(evenAtEvenIndex)

console.log(newNums);


function evenAtEvenIndex(element, index)
{
    console.log(`element: ${element}, index: ${index},`);
    
    return element % 2 === 0 && index % 2 === 0;
}