//                      <------------------------ Assignment 11 ------------------------->

// Question 1
for (let i = 0; i < 10; i++) {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    let color = `rgb(${r}, ${g}, ${b})`;
    console.log(color);
    alert(color)
    document.write(color + "<br>");
}

// Question 1 end 

// Question 2
function getHexColor() {
    let hex = Math.floor(Math.random() * 16777215).toString(16);
    return "#" + hex.padStart(6, "0");
}

for (let i = 0; i < 5; i++) {
    let hexColor = getHexColor();
    console.log(hexColor);
    document.write(hexColor + "<br>");
}


// Question 2 end 

// Question 3
for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
       
    } else if (i % 3 === 0) {
        console.log("Fizz");
       
    } else if (i % 5 === 0) {
        console.log("Buzz");
        
    } else {
        console.log(i);
       
    }
}
// Question 3 end 

// Question 4
let sum = 0;

for (let i = 1; i <= 100; i++) {
    if (i % 5 === 0) {
        sum += i;
    }
}

console.log("Sum of multiples of 5: " + sum);
document.write("Sum of multiples of 5 between 1 and 100 is: " + sum);

// Question 4 end 

//                      <------------------------ Assignment 11 end  ------------------------->