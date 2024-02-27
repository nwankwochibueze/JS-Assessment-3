// How can you select an element by its ID using JavaScript? //
let idElement = document.getElementById('')

// ● How can you select an element by its ID using JavaScript? //
let cssElement = document.getElementsByClassName('')

// ● How can you select the first child element of a given element? //
let container = document.getElementById('')
let getFirstElementChild = container.firstElementChild

// ● How can you select all elements that match a specific CSS selector? //
let containerElement = document.querySelectorAll('')

// ● How can you change the text content of an element? //
let text = document.getElementById('')
text.innerHTML = ''

// ● How can you modify the value of an HTML attribute //
let numberValue = document.getElementById('')
numberValue.setAttribute('attribute_name', 'new_value')

// ● How can you add a new element to the DOM? //
const newElement = document.createElement("p");
newElement.textContent = "This is a new paragraph";

// ● How can you remove an element from the DOM? //
const newElement = document.createElement("p");
newElement.textContent = "This is a new paragraph";
newElement.remove();

// How can you access the parent element of a given element? //
let textElement = document.getElementById('')
let textValue = textElement.parentElement

// ● How can you access the next sibling element of a given element? //
let siblingElement = textElement.nextElementSibling

// How can you iterate over all child elements of a given element? //
const ElementHolder = document.getElementById('')
for(let i = 0; i < ElementHolder.childNodes.length; i++ ){
    const childNodes = ElementHolder.childNodes[i];
    console.log(childNodes);
}

// ● How can you change the inline style of an element using JavaScript? //
let htmlValue = document.getElementById('')
htmlValue.style.borderInline = 'none'

// ● How can you add or remove CSS classes from an element? //
let formElement = document.getElementById('')
formElement.classList.remove // Removing a class //
formElement.classList.add // Adding a class //

// ● How can you toggle between two different styles for an element? //

// ● How can you dynamically create and add a CSS stylesheet to the document? //
let iconElement = createElement('icon_style') // creating the icon element //
document.head.append(iconElement) // appending the element in the html haead //

// ● Explain the syntax and purpose of the forEach method in JavaScript ? -The forEach method is an array method function that executes each element of an array 

// ● How does forEach differ from traditional for loops in terms of scope and behaviour? - 
// - i,The forEach callback function runs in the same scope as the surrounding scope, ii,No initialization or increment is passed
// ● i, The forLoop vriable, initialization and increment are all passed inside a block scope and it cannot be used outside //

// ● Write code to double each element in an array using forEach.//
let numbers = [2,4,6,8]
numbers.forEach(function(value, index){
    numbers[index] *= 2;
})
console.log(numbers)
// Create a new array containing only strings from a mixed array using forEach. //
let arrayValues1 = [1,'A',2,'B',3,'C'];
let newArray = [];

arrayValues1.forEach(function(element, index){
    if(typeof element === 'string'){
        newArray.push(element);
    }
});
console.log(newArray)
//  Filter an array to include only even numbers using forEach //
let arrayValues2 = [4,5,8,9,,17,16];
let evenArray = [];

arrayValues2.forEach(function(number, index){
    if(number % 2 === 0){
        evenArray.push(number)
    }
});
console.log(evenArray)

// ● Demonstrate how to access the current index within a forEach callback //
    // The forEach method provides a call back function and in that function holds a parameter which stores the value and the second parameter hold the index numbers of the values. You can assess the current index of the forEach method by using the square brackets with the particular index number of the array. example 
    newArray = evenArray[1] 

// ● Explain how to break out of a forEach loop early. //
    // ● The break value cannot be passed in the forEach method but the loop can be broken in the forEach method when the loop value doesnt meet the looping system Eg: const arrayElement = [1,2,3,]
    // arrayElement.forEach(function(item,inde){
    //  if(item > 3){
    //  return false. // the forEach stops iterating when the array numbers are greater than 3   
    //  }
    //})


// ● Can you modify the original array directly within a forEach callback? Why or
//why not? // Yes the original array can be modified directtly.


// ● Describe common use cases for forEach in JavaScript applications. // You can use forEach to iterate over each element in an array and perform various operations on them, such as logging, modifying, or transforming.

// ● When would you choose forEach over other looping methods? // The forEach is used when we dont know // when we need to iterate over each element in an array and perform an action without creating a new array.

// ● Explain the syntax and purpose of the for...of loop in JavaScript. //for marks the beginning of the loop , const/let/var holds the variable to be declared, of denotes the type of the for..loop. , {}the body where all the codes are written 

// ● How does for...of differ from traditional for loops and forEach? // The syntax varies from each of the loop methods, Iterate over values in iterables (arrays, strings, Maps, Sets).

// ● Iterate over an array of numbers and print their squares using for...of. //
let values = [2,4,6,8]
 for(const number of values){
     const square = number * number
     console.log(square)
 }
 // ● Create a new array containing the string lengths of each element in another
// array using for...of. 
let Arrayvalues = ['Abel','Bayo','Cole','Dorathy']
 let checkArrayLength = []
 for(const number of Arrayvalues ){
     newArray = number.length
     checkArrayLength.push(newArray)
    console.log(checkArrayLength)
 }


 //● Iterate over the keys of an object using for...of. // the for.. can't diectly iterate over keys of an object but can only iterate arrays,maps and sets 


 // ● Iterate over the values of an object using for...of //
 let address = {
    country : "Portugal",
    state : "Lisbon",
    city : "Laos"
}
for(const value of Object.values(address)){
    console.log(value)
}


 // ● Iterate over the key of an object using for...of //
 let person = {
    name : "janet",
    age : 28,
    country : "England"
}
for(const key of Object.keys(person)){
    console.log(person[key])
}

// ● Explain how to access both keys and values in a for...of loop
let Useraddress = {
    country : "Portugal",
    state : "Lisbon",
    city : "Laos"
}
for(const [key,value] of Object.entries(Useraddress)){
    console.log(key,value)
}

// ● Describe common use cases for for...of loops in JavaScript applications 
//Iterating over arrays and strings:
//Processing Map and Set entries:
//Looping over iterables created dynamically:


// ● When would you choose for...of over other looping methods?
// You need to iterate over the values of an iterable:
// You want a concise and readable loop syntax:

// ● Write a for loop that prints numbers from 1 to 10.
for(x = 1; x <= 10; x++){
    console.log(x)
}

// ● Write a for loop that sums all numbers in an array.
let arraynumbs = [1,2,3,4]
let sum = 0
for(x = 0; x < arraynumbs.length; x++){
    sum += arraynumbs[x]
}
console.log(sum)

// ● Find the largest number in an array using a for loop.
let numbersarray = [10,20,30,40]
let largest = numbersarray[0]
for(i = 0; i < numbersarray.length; i++ ){
    if(numbersarray[i] > largest){
        largest = numbersarray[i];
    }
}
console.log(largest)


// ● Create a new array containing the squares of numbers in another array using
//a for loop.
let figures = [1,2,3,4,5]
let squared = []
for(x = 0; x < figures.length; x++){
    squaredvalues = figures[x] * figures[x]
    // console.log(squaredvalues)
    squared.push(squaredvalues);
}
console.log(squared)
// ● Iterate over an object's properties and values using a for loop // //The for loop cant iterate over an object value.
let object = {name: 'Mel', age : 28}
for(const key in object){
    if(object.hasOwnProperty(key)){
        console.log(key, object[key])
    }
}

// ● Explain the difference between initial, conditional, and increment expressions
//in for loops.
// The initial is the variable being set to track the loop progress. eg y = 0 
// The conditional is a comparrison operator passed across the loop.it determines if the loop will run or not eg y = 0; y < 5
// The increment expression is used to update the counter variable in preparation for the next iteration eg y = 0; y < 5; y++. increment y by 1 after each iteration.


// Demonstrate how to nest for loops to create multidimensional arrays. //

// ● Break out of a for loop early using the break statement. //
const numbersLoop = [1, 5, 2, 7, 3];
const target = 7;

for (let i = 0; i < numbersLoop.length; i++){
    if (numbers[i] === target) {
    console.log("Found:", target);
    break;
    }
  }
  console.log(i)
// ● Continue to the next iteration of a for loop using the continue statement.//

const numbersArray = [1, 2, 3, 4, 5];

for (let i = 0; i < numbersArray.length; i++) {
  if (numbersArray[i] % 2 === 0) {
    continue;
  }
  console.log(numbersArray[i]);
}

// ●  Describe common use cases for for loops in JavaScript applications. //
    // use for iterating over an array
    // use for iterating over strings
    // iterating over an object property


//● Select an element by its ID using getElementById.//
let form = document.getElementById('form') // the form Id name = "form" //

//● Select all elements of a specific class name using getElementsByClassName. //
let div = document.getElementsByClassName('divClass') // the div class name = "divClass" //


// ● Select the first child element of a given element using firstChild. //
let containerWrapper = document.getElementById('containerWrapper')
let containerChild = container.getFirstElementChild

// ● Select all elements that match a specific CSS selector using querySelector //
let selectElement = document.querySelectorAll('element_class')

// ● Access the parent element of a given element using parentNode.//
let parentH1 = document.getElementById('parent_H1')
let parent = parentH1.parentElement

// ● Access the next sibling element of a given element using nextSibling //
let formDiv = document.getElementById('')
const formSibling = formDiv.nextElementSibling

// ● Iterate over all child elements of a given element using childNodes. //
const formChild = formDiv.childNodes

// ● Find all elements matching a specific condition within a subtree using a
//recursive function.


// ● Explain the difference between childNodes, children, and
// getElementsByTagName.
// childNodes returns all the nodelist containing all child nodes of an element
// children returns an Html collection containing only the direct child element nodes of an element
// getElementsByTagName returns an HTMLCollection containing all elements within the entire document (or a specific parent element if specified) that have the provided tag name

// ● Demonstrate how to modify element content (text and attributes) using DOM
// manipulation.
let paragraphText = document.getElementById('paragraph_text')
paragraphText.innerText = '' // Changes the text element //
paragraphText.setAttribute('underlined',true)

// ● Add a new element to the DOM using createElement and appendChild. //
const formtext = document.createElement('form_text')
const divElement = document.createElement('div')
divElement.append(formtext)

// ● Remove an element from the DOM using removeChild. //
divElement.removeChild

// ● Change the inline style of an element using style. //
formtext.style.borderInline = ('none')

//● Add or remove CSS classes from an element using classList. //
formtext.classList.add('class_name')
formtext.classList.remove('class_name')

// ●Toggle between two different styles for an element using JavaScript.//
formtext.classList.toggle('myClass')

// ● Use a for loop to create 10 new paragraph elements and append them to the
// body of the document.


let formForm = document.getElementById('form')
let input = document.getElementsByClassName('inputClass')


let divDiv = document.getElementById('div_')
let pOne = document.getElementById('p_one')
let pTwo = document.getElementById('p_two')
let pThree = document.getElementById('p_three')
let pFour = document.getElementById('p_four')
let pFive = document.getElementById('p_five')
let pSix = document.getElementById('p_six')
let pSeven = document.getElementById('p_seven')
let pEight = document.getElementById('p_eight')
let pNine = document.getElementById('p_nine')
let pTen = document.getElementById('p_ten')

let divElementValue = div.append(pOne, pTwo, pThree ,pFour,pFive, pSix, pSeven, pEight, pNine, pTen )

for(i = 0; i < divElementValue.length; i++){
    console.log(i)
}

// ● Use forEach to iterate over all images on a page and add a border to each
// one.
let image_one = document.getElementById('img')
let image_two = document.getElementById('img')
let divWrap = document.getElementById('div')

let content = divWrap.append(image_one, image_two)
divWrap.forEach(function(element,index){
    if(element.tagName === 'img'){
        element.style.border = '1px solid black'
    
    }
})


















 


