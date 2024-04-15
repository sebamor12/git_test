let userNumber = prompt('Enter number', 0);

for (let i = 1; (i <= userNumber); i++ ) {
    if (ui % 5 == 0 && i % 3 == 0) {
        console.log('fizzbuzz');
    }

    else if (i % 3 == 0) {
        console.log('fizz');
    } 

    else if (i % 5 == 0) { 
        console.log('buzz');
    } 
    
    else console.log(i);
}