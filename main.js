
console.log("Webpage loaded");

let text = "I can't do this"; // text is the variable. "I can't do this" is a string.
console.log(text);

console.log(typeof 8); // typeof operator will display the type of variable next to it.

let x = 5; // = is the assignment operator. I have assigned the value of 5 to x.
const y = 2; // const refers to constant - a variable that doesn't change.
console.log(x + y); // + is an arithmetic operator. Operators perform actions on operands (values and variables).

/*let a = 5;
let b = 9;
console.log("Addition: " + Number(a + b));
console.log("Subtraction: " + Number(b - a));
console.log("Division: " + Number(b / a));
console.log("Multiplicaiton: " + Number(a * b));
console.log("Exponential: " + Number(b ** a));
console.log("Remainder: " + Number(a % b));
a++ // = 6
b-- // = 8
console.log(a);

a = 15;
console.log("Addition: " + Number(a + b));
console.log("Subtraction: " + Number(b - a));
console.log("Division: " + Number(b / a));
console.log("Multiplication: " + Number(a * b));
console.log("Exponential: " + Number(b ** a));
console.log("Remainder: " + Number(a % b));

c = 100;
console.log("Addition: " + Number(a + c));
console.log("Subtraction: " + Number(c - a));
console.log("Division: " + Number(c / a));
console.log("Multiplication: " + Number(a * c));
console.log("Exponential: " + Number(c ** a));
console.log("Remainder: " + Number(a % c));
*/

console.log("Task 1:");
d = 5
console.log(d);
d--
console.log(d);
d--
console.log(d);
d++
console.log(d);

console.log("Task 2:");
e = 14
f = 2
g = 76
console.log(Number(e + f + g));
e = 10
console.log(Number(e + f + g));
f++
console.log(Number(e + f + g));
g--
console.log(Number(e + f + g));

console.log("Task 3:");
let imCold = true;
let imHot = false;
console.log(imCold);
console.log(imHot);
console.log(!imCold);
console.log(!imHot);
console.log(imCold == imHot);
console.log(imCold !== imHot);

console.log("Task 4:");
a = 17
b = 12
console.log(a > b);
console.log(a < b);
console.log(a == b);

console.log("Task 5:");
let imEllen = true;
console.log(imEllen && imCold);
console.log(imEllen || imHot);
console.log(imCold && imHot);
console.log(imHot || imCold);

console.log("Task 6: ");
console.log(imHot && a > b);
console.log(imCold && b <= a);

console.log("Task 7: ");
let nameOne = "Ellen";
let nameTwo = "Callum";
let nameThree = "Ruskie";
let nameFour = "Ellen";

console.log(nameOne == nameTwo);
console.log(nameTwo !== nameThree);
console.log(nameOne == nameFour);
console.log(nameOne !== nameTwo && nameOne == nameFour);
console.log(nameTwo == nameThree || (nameFour == nameTwo & imCold));

console.log("Task 8:");
if (imHot){
    console.log("I am hot");
}
else{
    console.log("I am not hot");
}
if( imHot){
    console.log("I am hot");
}
if (!imCold){
    console.log("I am lukewarm");
}
if (imCold || imHot){
    console.log("I don't know my own temperature");
}
if (imCold && imHot){
    console.log("I have cold toes but warm hands");
}

let currentTemp = 10;
let forecastTemp = 8;
let desiredTemp = 15;

console.log("Task 8.3");
if (currentTemp > forecastTemp){
    console.log("Yippee it's getting warm!");
}
else {console.log("boohoo");
}

let tempInParis = 15;
currentTemp = 16;

if (currentTemp < desiredTemp){
    console.log("Cold British weather");
}
else if (forecastTemp == currentTemp){
    console.log("Forecast was right!");
}
else if (desiredTemp == tempInParis){
    console.log("I should move to France");
}
else {console.log("The weather just sucks");}

if (desiredTemp < forecastTemp){
    console.log("pretty cold");
}
else if (desiredTemp < currentTemp){
    console.log("still pretty but not cold");
}
else if (desiredTemp < tempInParis + 10){
    console.log("Paris is still tempting");
}
else {console.log("Just deal with it");}

console.log("Task 8.4");
if (desiredTemp - 100 > tempInParis){
    console.log("still warmer in Paris");
}
else if (currentTemp - 6 == desiredTemp - 5){
    console.log("Temperature task");
}
if ((desiredTemp > forecastTemp || tempInParis < forecastTemp) && currentTemp >= 14){
    console.log("all seems good")
}
else {console.log("something is up");}

let sentenceOne = "Hello there";
let sentenceTwo = "Good bye";

console.log("Task 9:");
console.log(sentenceOne.charAt(4));
console.log(sentenceOne.charAt(8));
console.log(sentenceTwo.charAt(3));
console.log(sentenceTwo.charAt(0) + sentenceTwo.charAt(6));
console.log(sentenceOne.charAt(0) + sentenceOne.charAt(1) + sentenceTwo.charAt(6));

console.log("Task 9.2:");
console.log(sentenceOne.length);
console.log(sentenceTwo.length);
console.log(sentenceOne.length == sentenceTwo.length);

if (sentenceOne.length == 9){
    console.log("Nice");
} else if (sentenceOne.length < 10){
    console.log("cool");
} else if(sentenceOne.length == 11){
    console.log("Great");
} else {
    console.log("Amazing");
}

if (sentenceTwo.length < 5){
    console.log(sentenceTwo.charAt(0));
} else if (sentenceTwo.length > 20){
    console.log(sentenceTwo.charAt(-1));
} else {
    console.log(sentenceTwo.charAt(sentenceTwo.length/2)); 
}

let letterOne = "c";
let letterTwo = "b";
console.log(letterOne != letterTwo);

console.log("Task 10:");
let taskTen = "Hello. I'm a little cutie. Apples apples. : ) ("
console.log(taskTen.substring(0, 5));
console.log(taskTen.substring(7, 25));
console.log(taskTen.substring(42, 43) + taskTen.substring(44, 45));
console.log(taskTen.substring(42, 43) + taskTen.substring(46));

let wagonWheel = "Hi my name is Ellen and I really like wagon wheels!";
console.log(wagonWheel.substring(3, 19));
console.log(wagonWheel.substring(3, 14) + wagonWheel.substring(38, 49));
console.log(wagonWheel.substring(38, 50) + wagonWheel.substring(2, 3) + wagonWheel.substring(0, 2) + wagonWheel.substring(50));

let replaceMethod = "Hello Fred, my how handsome you look Fred, my oh my";
let fredReplace = replaceMethod.replace("Fred", "Callum");
console.log(fredReplace);
let handsomeReplace = replaceMethod.replace("handsome", "funky");
console.log(handsomeReplace);
let callumReplace = replaceMethod.replaceAll("Fred", "Callum");
console.log(callumReplace);
let myReplace = replaceMethod.replaceAll("my", "oh");
console.log(myReplace);

console.log(fredReplace.toUpperCase());
console.log(callumReplace.toLowerCase());
let fredReplaceUC = fredReplace.toUpperCase();
console.log(fredReplaceUC[0].toLowerCase() + fredReplaceUC.slice(1));
let callumReplaceLC = callumReplace.toLowerCase();
console.log(callumReplaceLC[0] + callumReplaceLC[1].toUpperCase() + callumReplace.slice(2, 11) + callumReplaceLC[11].toUpperCase() + callumReplace.slice(12));

console.log(wagonWheel.substring(0, 25).toUpperCase() + wagonWheel.substring(25).toLowerCase());
console.log(wagonWheel.substring(0, 13).toUpperCase() + wagonWheel.substring(13, 25).toLowerCase() + wagonWheel.substring(25, 37).toUpperCase() + wagonWheel.substring(37, 50).toLowerCase())
           //                 0   7    12     18   23
let taskTenPointFive = "cheese bees mouse leek cheese";
let wordSplit = taskTenPointFive.split(" ");

console.log("Task 10.5");
/*for (number = 0; number < wordSplit.length; number++){
    console.log(wordSplit[number].charAt(0));
}*/

console.log(taskTenPointFive.indexOf("c"));
console.log(taskTenPointFive.indexOf("b"));
console.log(taskTenPointFive.indexOf("m"));
console.log(taskTenPointFive.indexOf("l"));
console.log(taskTenPointFive.indexOf("c", 10));

console.log("Task 11");

let colour = ["red", "green", "blue", "pink"];
console.log(colour.length);

let numberList = [10, 22, 5, 9, 11, 12, 76, 53, 91, 6];
console.log(numberList.length/2);
console.log(numberList.length/4);
console.log(numberList[numberList.length/2]);
console.log(numberList[Math.round(numberList.length/4)]);
console.log(numberList[Math.round(numberList.length*0.75)]);

let kindsOfCheeseIHate = ["none"];
console.log(kindsOfCheeseIHate);
kindsOfCheeseIHate = ["nil", "nada"];
console.log(kindsOfCheeseIHate);

console.log(Math.round(Math.random(numberList)*numberList.length));

console.log("Task 12");
let currentDate = Date();
console.log(currentDate);

let ellensBirthday = new Date("1999-11-22");
console.log(ellensBirthday);

let randomDate = new Date(1898, 12, 17, 20, 40, 40);
console.log(randomDate);

console.log(ellensBirthday.getDate());

console.log(ellensBirthday.getDate() + "-" + (ellensBirthday.getMonth()+1));

//FUNCTIONS :(((((( make no sense
console.log("Task 13");

function LogDate(){
    let todaysDate = Date();
    console.log(todaysDate);
 }
 LogDate();
 LogDate();
 LogDate();
 LogDate();

 function multiply(a, b){
    console.log(a * b);
}
multiply(10, 2);
multiply(4, 2);
multiply(8, 2);

function thatTakesAString(string){
    console.log(string.toUpperCase());
    console.log(string.toLowerCase());
}

thatTakesAString("This makes no sense");

function thatTakesASecondString(stringTwo){
    console.log(stringTwo.charAt(4));
    console.log(stringTwo.charAt(11));
    console.log(stringTwo.charAt(23));
    console.log(stringTwo.charAt(16));
}
thatTakesASecondString("I might understand functions");

function booleanComparison(red, blue){//Task 13.5 copied callum
    console.log(red && blue);
    console.log(red || blue);
}
booleanComparison(true, false);

function string(m){//Task 13.6 complete
    console.log(m.substring(0, m.length/2))
}
string("Will this work?");

function takesTwoNumbers(variableOneAsNumber, variableTwoAsNumber){
    //let sum = variableOneAsNumber + variableTwoAsNumber;
    //let variableOneAsString = variableOneAsNumber.toString();
    //let variableTwoAsString = variableTwoAsNumber.toString();
    //console.log(variableOneAsString + "+" + variableTwoAsString + "=" + sum);

    console.log(variableOneAsNumber.toString() + "+" + variableTwoAsNumber.toString() + "=" + (variableOneAsNumber + variableTwoAsNumber));
}

takesTwoNumbers(3, 3);

function dateLog(year, month, day){//Task 13.8 complete
    let weekDays = ["Friday", "Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday",];
    let newDay = new Date(year, month, day);
   console.log(weekDays[newDay.getDay()]);
}
dateLog(2024, 11, 22); 

function getCharacterAt(sting, no){//Task 13.9 complete
    console.log(sting.charAt(no));
}
getCharacterAt("im wrong", 3);

function lastTask(pink, stringThree, stringFour){//Task 13.10 complete
    if (pink == true){
        console.log(stringThree);
    }
    else{
        console.log(stringFour)
    }
}
lastTask(true, "ruskie", "dotty");

function booleanTask(r, s, t){ //Task 13.11 rst rts / srt str/ trs tsr
    console.log("\nTask 13.11");
    if (r < s && s < t){
        console.log(r, s, t);
    }
    else if (r < t && t < s){
        console.log(r, t, s);
    }
    else if (s < r && r < t){
        console.log(s, r, t);
    }
    else if (s < t && t < r){
        console.log(s, t, r);   
    }
    else if (t < r && r < s){
        console.log(t, r, s);   
    }
    else if (t < s && s < r){
        console.log(t, s, r);   
    }

    if (r < s)
    {
        // Either r or t is the first
        // r comes before s

        if (t < r)
        {
            // t comes before r

            console.log(t, r, s);
        }
        else
        {
            // r comes before t
            
            if (t < s){
                // t comes before s
                console.log(r, t, s);
            }
            else {
                // s comes before t
                console.log(r, s, t);
            }
        }
    }
    else
    {
        // either s or t is first
        // s comes before r
        if (t < s){
            // t comes before s
            console.log(t, s, r)
        }
        else {
            // s comes before t
            // t comes before r
            if (t < r){
                console.log(s, t, r)
            }
            else {
                // 
                console.log(s, t, r)
            }
        }
    }
}

console.log("Task 13.12");

//let run = true

function functionOne(run, stringTen){    
    if (run == true){
        functionTwo(stringTen);
    }
    else{ 
        functionThree(stringTen);
    }
}
function functionTwo(stringTen){
    console.log(stringTen.toUpperCase());
}
function functionThree(stringTen){
    console.log(stringTen.substring(0, stringTen.length/2).toLowerCase());
}

functionOne(true, "Callum");
functionOne(false, "Callum");
functionOne(true, "Beanboy");
functionOne(false, "Ellen smells");


console.log("Task 13.13");

function Ddate(climb, day, month, year){
    let dayList = ["Friday", "Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"];
    let monthList = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"];
    let newDay = new Date(year, month, day);
    
        if (climb == true){
            console.log(dayList[newDay.getDay()]);
        }
        else{
            console.log(monthList[newDay.getMonth()-1]);
        }
}
Ddate(true, 14, 4, 2024);
Ddate(false, 14, 4, 2024);

console.log("Task 14");

function delayFunction(stringEleven){
    console.log(stringEleven);
}
setTimeout (delayFunction, 2000, "Javascript doesn't have sleep function");


console.log("Task 13,14");

function addTwoNumbers(numberOne, numberTwo){
    let addedSum = numberOne + numberTwo;
    console.log(addedSum);
}

function multiplyTwoNumbers(numberThree, numberFour){
    let multipliedSum = numberThree * numberFour;
    console.log(multipliedSum);
}

function compareTwoNumbers(numberFive, numberSix){
    if (numberFive > numberSix){
        addTwoNumbers(numberFive, numberSix);
    }
    else{
        multiplyTwoNumbers(numberFive, numberSix);
    }
}

compareTwoNumbers(2, 3);

let listOfNumbers = [6, 5, 4, 3, 2, 1];
let otherList = [20, 40, 50, 60, 70, 100];

function logLastInList(listOfNumbersLast){
    console.log(listOfNumbersLast[listOfNumbersLast.length-1])
}

function logMiddleOfList(listOfNumbersMiddle){
    console.log(listOfNumbersMiddle[listOfNumbersMiddle.length/2])
}

function logFirstOfList(listOfNumbersFirst){
    console.log(listOfNumbersFirst[0]);
}

function logABitOfList(passedInList, numero){
    if (numero == 0){
        logLastInList(passedInList);
    }
    else if (numero == 1){
        logMiddleOfList(passedInList);
    }
    else if (numero == 2){
        logFirstOfList(passedInList);
    }
    
}
logABitOfList(otherList, 0);
logABitOfList(otherList, 1);
logABitOfList(otherList, 2);


console.log("Task 13.15");

let listOfStrings = ["Rice", "Coffee", "Potatos", "Egg", "Courgette"];

function logTwoStrings(stringFive, stringSix){
    console.log(stringFive + " " + stringSix)
}
function logThreeStrings(stringSeven, stringEight, stringNine){
    console.log(stringSeven + " " + stringEight + " " + stringNine)
}
function mainThing(listOfStrings, someString, booleanValue){
    let randomString = listOfStrings[Math.round(Math.random()*(listOfStrings.length)-1)];
    if (booleanValue == true){
        logTwoStrings(randomString, someString);
    }
    else{
        logThreeStrings(randomString, someString, listOfStrings[listOfStrings.length-1]);
    }
}

mainThing(listOfStrings, "Breakfast", true);
mainThing(listOfStrings, "Breakfast", false);

console.log("Task 13.16");

let result = addTwoNumberss(1, 2);
let resultA = addTwoNumberss(7, 8)
let resultB = addTwoNumberss(result, resultA);

function addTwoNumberss(p, q){
    return p - q;
}

console.log(resultB);

console.log("Task 13.17");

listC = ["couscous", "cauliflower", "onion", "hummus", "garlic"];

function getRandomItemFromList(listA){
    let index = Math.round(Math.random()*(listA.length-1));
    return listA[index]
}
function logRandomItemsFromList(listB){
    let variableA = getRandomItemFromList(listB);
    let variableB = getRandomItemFromList(listB);
    let variableC = getRandomItemFromList(listB);
    console.log(variableA + " " + variableB + " " + variableC)
}

logRandomItemsFromList(listC);

console.log("Task 13.18");

function LogLongestStr(stringA, stringB, stringC){//A>B A>C B>A B>C C>A C>B
    let A = stringA.length;
    let B = stringB.length;
    let C = stringC.length;

    //A = 1, B = 2, C = 2
    if(A > B){
        //A or C will be longest
        if(A > C){ //A greater than B and C
            return stringA;
        }
        else{ //C greater than A and B
            return stringC;
        }
    }
    else if(B > A){
        //B or C will be the longest
        if(B > C){ //B greater than A and C
            return stringB;
        }
        else{ // C greater than B and A
            return stringC;
        }
    }
    else if(C > A){
        //B or C will be the longest
        if(C > B){ // C greater than A and B
            return StringC;
        }
        else{ // B greater than C and A
            return stringB;
        }
    }
}
let listOfNumbersAsStrings = ["2", "11", "24", "111"];

function LogSumOfStr(stringD, stringE, stringF){
    let numD = Number(stringD);
    let numE = Number(stringE);
    let numF = Number(stringF);
    let sumNum = numD + numE + numF;
    return sumNum;
}
function mainStr(listOfStr, BooleanValue){
    //let listOfStr = listOfNumbersAsString;
    //let BooleanValue = true;

    let result;
    if (BooleanValue == true){
        result = LogLongestStr(listOfStr[0], listOfStr[1], listOfStr[2]);
    }
    else{
        result = LogSumOfStr(listOfStr[0], listOfStr[1], listOfStr[2]);
    }
    console.log(result)
;}
mainStr(listOfNumbersAsStrings, true);
mainStr(listOfNumbersAsStrings, false);

console.log("Task 13.19");

listOfNumbs = ["2", "2", "2", "2"];

function addThreeNumbers(numA, numB, numC){
    let Sum = Number(numA) + Number(numB) + Number(numC);
    return Sum;
}
function multiplyFourNumbers(numD, numE, numF, numG){
    let product = Number(numD) * Number(numE) * Number(numF) * Number(numG);
    return product;
}
let results = 0;
function mainThirteenPointNineteen(listOfNum, bool){
    let randomNum = listOfNum[Math.round(Math.random(listOfNum)*(listOfNum.length)-1)];
    if (bool == true){
        results = addThreeNumbers(randomNum, randomNum, randomNum);
    }
    else {
       results =  multiplyFourNumbers(randomNum, randomNum, randomNum, randomNum);
    }
    console.log(results);  
}
mainThirteenPointNineteen(listOfNumbs, true);
mainThirteenPointNineteen(listOfNumbs, false);

console.log("Task 13.20");

function ReturnAddTwoNumbers(numA, numB){
    numsum = Number(numA) + Number(numB);
    return numsum;
}
function ReturnMultiplyTwoNumbers(numC, numD){
    numproduct = Number(numC) * Number(numD);
    return numproduct;
}
function ReturnSubtractTwoNumbers(numE, numF){
    subtractnum = Number(numE) - Number(numF);
    return subtractnum;
}
function MainThirteenPointTwenty(numbOne, numbTwo){
    result1 = ReturnAddTwoNumbers(numbOne, numbTwo);
    result = ReturnMultiplyTwoNumbers(numbOne, numbTwo);
    result2 = ReturnSubtractTwoNumbers(result, result1);
    console.log(result2);
}
MainThirteenPointTwenty(3, 3);

console.log("Task 13.21");

let monthList = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"];

function randomNumberGenerator(min, max){
    generatedNumber = Math.floor(Math.random() * (max - min) ) + min;
    return generatedNumber;
}
function mainThirteenPointTwentyOne(theList){
    result = randomNumberGenerator(theList.length, theList.length/2);
    console.log(theList[result]);
}

mainThirteenPointTwentyOne(monthList);

console.log("Task 13.22");

function booleanFunction(bool1, bool2, bool3){
    return bool1 && bool2 && bool3;
}

function equalNum (numD, numE){
    //numD = 7; numE = 7;
    return numD != numE;
}

function mainFunction(bool4, bool5, bool6, numF, numG){
    let resultA = booleanFunction(bool4, bool5, bool6);
    let resultB = equalNum(numF, numG);
    console.log(Boolean(resultA) + " and " + resultB)
}

mainFunction(true, true, true, 5, 6); //true and true
mainFunction(true, false, true, 5, 5); //false and false

//console.log("Task 14");

function tickTock(){
    console.log("Tick tock");
}

//setInterval(tickTock, 2000);

let tick = false;
function tickThenTock(){
    tick = !tick
    if (tick){
        //tick = false;
        console.log("Tick");
    }
    else{
        //tick = true;
        console.log("Tock");
    }
}
//setInterval(tickThenTock, 2000);

let num = 0;
function numberTimer(){
    num += 1;
    console.log(num);
}
//setInterval(numberTimer, 2000);

monthList = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"];
let numberA = -1;
function monthTimer(){
    if (numberA < 11){
        numberA += 1;
    }
    else{
        numberA = 0
    }
    console.log(monthList[numberA]);
}
//setInterval(monthTimer, 2000);

//console.log("Task 14.4");

let animalList = ["cat", "dog", "frog", "duck", "hippo", "parrot"];
let foodList = ["carrot", "sausage", "bap", "cake", "butter", "rhubarb"];
let animalNumber = 0;
let foodNumber = foodList.length - 1;
function FourteenPointFour(){             
    console.log(animalList[animalNumber] + " " + foodList[foodNumber])
    if(animalNumber < animalList.length - 1 && foodNumber < foodList.length && foodNumber > 0){
        animalNumber += 1;
        foodNumber -= 1; 
    }
    else{
        animalNumber = 0;      
        foodNumber = foodList.length - 1;
    }

}
//setInterval(FourteenPointFour, 1500);

console.log("Task 14.5 fibonacci");

let previous = 1;
let current = 0;  
let temp = 0;
function fibonacci(){
    temp = current;
    current += previous;
    previous = temp;
    console.log(current);
}
//setInterval(fibonacci, 1000);

console.log("Task 14.6");

let StringOne = "cheese";
let StringTwo = "cake";

function mainFourteenPointSix(){
	let StringTemp = StringTwo;
    StringTwo = StringOne;
    StringOne = StringTemp;
	
	console.log(StringOne + StringTwo);
}
//setInterval(mainFourteenPointSix, 2000)

//console.log("Task 14,7");

let ducks = ["mallard", "mandarin", "mallard"];

function FourteenPointSeven(){
    let duckSpace = ducks[0];
    ducks[0] = ducks[1];
    ducks[1] = duckSpace;
    console.log(ducks[0] + ", " + ducks[1]);
}

//setInterval(FourteenPointSeven, 2000);

//console.log("Task 14.8");

foodList = ["carrot", "sausage", "bap", "cake", "butter", "rhubarb"];
animalList = ["cat", "dog", "frog", "duck", "hippo", "parrot"];

function fourteenPointEight(){
    console.log(animalList);
    console.log(foodList);
    let randomListNumber = Math.round(Math.random()*(animalList.length) - 1);
    let tempStore = foodList[randomListNumber];
    foodList[randomListNumber] = animalList[randomListNumber];
    animalList[randomListNumber] = tempStore;
}
//setInterval(fourteenPointEight, 10000);

//Task 15.1
let websiteTitle = document.getElementsByClassName("header1");
websiteTitle[0].innerHTML = "Using Javascaript to change the title";

let footNote = document.getElementById("footnote");
footNote.innerHTML = "I have moved out of Newcastle!";

monthList = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"];

let numberSequence = -1
let paragraphToNumber = document.getElementsByClassName("galleryText");
function taskFifteenPointOne(){ 
    if(numberSequence < monthList.length-1){
        numberSequence += 1;
    }
    else{
        numberSequence = 0;
    }
    paragraphToNumber[1].innerHTML = monthList[numberSequence];
}

setInterval(taskFifteenPointOne, 2000);

//Task 15.2

/*let fruit = document.getElementsByClassName("jsTest");

function taskFifteenPointTwo(){ 
    let randomFruit = Math.round(Math.random()*(fruit.length-1));
    let randomNumber = Math.round(Math.random()*99);
    fruit[randomFruit].innerHTML = randomNumber;
}

setInterval(taskFifteenPointTwo, 2000);*/

//Task 15.3

function dateAndTime(){
    document.getElementsByClassName("dateAndTime")[0].innerHTML = new Date();
}

setInterval(dateAndTime, 1000);

//Task 15.4
    let blueBackground = document.getElementsByClassName("header1");
    //blueBackground[0].classList.add("blueBackground");


//Task 15.4.2
function toggleBackground(){
    let greenBackground = document.getElementsByClassName("header1");
    greenBackground[0].classList.toggle("greenBackground");
    
}
//setInterval(toggleBackground, 2000);

//Task 15.5
function randomDiv(){
    let DivList = document.getElementsByTagName("div");
    let randomDiv = Math.round(Math.random()*(DivList.length-1));
    DivList[randomDiv].classList.add("greenBackground");
}
setInterval(randomDiv, 2000);

//Task 15.6
function body(){
    let body = document.body;
    body.classList.add("blueBackground");
}
//body();

//Task 16

let newPara = document.createElement("p");
let newNode = document.createTextNode("Adding elements programmatically using Javascript");
newPara.appendChild(newNode);
let existingElement  = document.getElementById("audioAndDate");
existingElement.appendChild(newPara);

//Task 16.2

function addRandomNumber(){
    let numberElement = document.createElement("p");
    let Node = document.createTextNode(Math.round(Math.random()*99));
    numberElement.appendChild(Node);
    let DivList = document.getElementsByTagName("div");
    let randomDiv = Math.round(Math.random()*(DivList.length-1));
    DivList[randomDiv].appendChild(numberElement);
}

//setInterval(addRandomNumber, 2000);

//Task 16.3

function removeParagraph(){
    let targetElement = document.getElementsByTagName("p")
    let randomPara = Math.round(Math.random()*(targetElement.length-1));
    targetElement[randomPara].remove();
}

//setInterval(removeParagraph, 2000);

//Task 17.1

document.getElementById("button1").onclick = function(){button1Function()};
function button1Function(){
    let newButtonText = document.getElementById("button1");
    let currentDate = new Date();
    let timeLogHour = currentDate.getHours();
    let timeLogMinute = currentDate.getMinutes();

    // if (timeLogMinute < 10){
    //     // + '0'
    // }
    // else{
    //     // + ''
    // }

    //text inside button changes:                                       //boolean condition ? do if true : do if false
    newButtonText.innerHTML = "I was clicked at " + timeLogHour + ":" + (timeLogMinute < 10 ? '0' : '') + timeLogMinute;
    console.log("button1 clicked");  
    //text beneath button is added:
    let newTextBeneathButton = document.createElement("p");
    let textNode = document.createTextNode("I was clicked at " + timeLogHour + ":" + (timeLogMinute < 10 ? '0' : '') + timeLogMinute);
    newTextBeneathButton.appendChild(textNode);
    let buttonDiv = document.getElementById("buttonDiv");
    buttonDiv.appendChild(newTextBeneathButton);
}

//Task 17.15

let musicalInstruments = ["flute", "piano", "trumpet", "violin", "harp", "oboe", "flute", "piano", "trumpet", "violin", "harp", "oboe"];
let prevInstrumentIndex = -1;

function fourteenPointOneFive(instrumentIndexClicked){ //0
    if (prevInstrumentIndex == -1){
        console.log("Only one item found so far");
        prevInstrumentIndex = instrumentIndexClicked; 
    }
    else{
        let instrumentIndexBoolean = musicalInstruments[prevInstrumentIndex] == musicalInstruments[instrumentIndexClicked];
        if (instrumentIndexBoolean == true){
            console.log("Pair found");
        }
        else{
            console.log("Not matching pairs");
        }
        prevInstrumentIndex = -1;    
    }
}


let moreInstruments =   [["flute", "piano"], 
                        ["piano", "flute"]];

prevInstrumentRow = -1; 
prevInstrumentColumn = -1; 

function fourteenPointOneSix(instrumentRowClicked, instrumentColumnClicked){
    if (prevInstrumentRow == -1 && prevInstrumentColumn == -1){
        prevInstrumentRow = instrumentRowClicked;
        prevInstrumentColumn = instrumentColumnClicked;
        console.log("Only one item found so far");
    }
    else{
        console.log(moreInstruments[prevInstrumentRow][prevInstrumentColumn])
        let instrumentBoolean = moreInstruments[prevInstrumentRow][prevInstrumentColumn] == moreInstruments[instrumentRowClicked][instrumentColumnClicked];
        if (instrumentBoolean == true){
            console.log("Pair found")
        }
        else{
            console.log("Not matching pairs");
        }
        prevInstrumentRow = -1;
        prevInstrumentColumn = -1;
    }
}

//Task 17.1.7

let flowers = [["tulips", "roses", "poppies"],
                ["daisies", "daffoldils", "pansies"],
                ["snowdrops", "orchids", "tulips"]];

let prevFlowerRow = -1;
let prevFlowerColumn = -1;
                                                              
function fourteenPointOneSeven(flowerRowClicked, flowerColumnClicked){
    if (prevFlowerColumn == -1 && prevFlowerRow == -1){
        prevFlowerRow = flowerRowClicked;
        prevFlowerColumn = flowerColumnClicked;
        console.log("Only one item so far");
    }
    else{ let clicked = flowers[prevFlowerRow][prevFlowerColumn] == flowers[flowerRowClicked][flowerColumnClicked];
        if (clicked == true){
            console.log("pair found")
        }
        else{
            console.log("Not matching pair")
        }
        prevFlowerRow = -1;
        prevFlowerColumn = -1;
    }
}

//swapping items in a 3d array

let flowers1 = ["tulips", "roses", "poppies"];
let flowers2 = ["daisies", "daffoldils", "pansies"];
let flowers3 = ["snowdrops", "orchids", "tulips"];
flowers = [flowers1, flowers2, flowers3];

function flowerArraySwap(firstFlowerRow, firstFlowerColumn, secondFlowerRow, secondFlowerColumn){
    //let firstFlower = flowers[firstFlowerRow][firstFlowerColumn];
    //let secondFlower = flowers[secondFlowerRow][secondFlowerColumn]
                                // = pansies
    let flowerTempVariable = flowers[firstFlowerRow][firstFlowerColumn];
             // = orchids
    flowers[firstFlowerRow][firstFlowerColumn] = flowers[secondFlowerRow][secondFlowerColumn];
            //   = pansies
    flowers[secondFlowerRow][secondFlowerColumn] = flowerTempVariable; 
    //flowers[firstFlowerRow][firstFlowerColumn] = firstFlower;
    //flowers[secondFlowerRow][secondFlowerColumn] = secondFlower;
    console.log(flowers);

}

flowerArraySwap(1, 2, 2, 1);



let flowerList = ["tulips", "roses", "poppies", "daisies", "daffodils", "pansies", "snowdrops", "orchids", "lillies"]
function flowerSwap(prevFlowerIndex, currentFlowerIndex){
    let tempFlower = flowerList[currentFlowerIndex];
    flowerList[currentFlowerIndex] = flowerList[prevFlowerIndex];
    flowerList[prevFlowerIndex] = tempFlower;
    console.log(flowerList);
}

flowerSwap(0, 3);

//Task 17.2.1

document.getElementById("button2").onclick = function() {setInterval(randomNumberGeneratorButton, 2000)};
function randomNumberGeneratorButton(){
    let button2Text = document.getElementById("button2");
    let randomNumberForButton2 = Math.round(Math.random()*99);
    button2Text.innerHTML = randomNumberForButton2
    
}

//Task 17.2.2

monthList = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"];
monthNumber = -1;

document.getElementById("button3").onclick = function() {setInterval(monthsCycle, 2000)};
function monthsCycle(){
    let button3Text = document.getElementById("button3");
    if(monthNumber < monthList.length-1){
        monthNumber += 1;
    }
    else{
        monthNumber = 0
    }
    button3Text.innerHTML = monthList[monthNumber];
}

//Task 17.3
document.getElementsByClassName("tableClassOne")[0].onmouseover = function() {tableColourChangeOne()};
function tableColourChangeOne(){
    let tableClassOne = document.getElementsByClassName("tableClassOne");
    tableClassOne[0].classList.add("tableClassOneHover");
}
document.getElementsByClassName("tableClassOne")[0].onmouseleave = function() {tableColourRevertsOne()};
function tableColourRevertsOne(){
    let tableClassOne = document.getElementsByClassName("tableClassOne");
    tableClassOne[0].classList.remove("tableClassOneHover");
}

document.getElementsByClassName("tableClassOne")[1].onmouseover = function() {tableColourChangeFour()};
function tableColourChangeFour(){
    let tableClassOne = document.getElementsByClassName("tableClassOne");
    tableClassOne[1].classList.add("tableClassOneHover");
}
document.getElementsByClassName("tableClassOne")[1].onmouseleave = function() {tableColourRevertsFour()};
function tableColourRevertsFour(){
    let tableClassOne = document.getElementsByClassName("tableClassOne");
    tableClassOne[1].classList.remove("tableClassOneHover");
}

document.getElementsByClassName("tableClassTwo")[0].onmouseover = function() {tableColourChangeTwo()};
function tableColourChangeTwo(){
    let tableClassTwo = document.getElementsByClassName("tableClassTwo");
    tableClassTwo[0].classList.add("tableClassTwoHover");
}
document.getElementsByClassName("tableClassTwo")[0].onmouseleave = function() {tableColourRevertsTwo()};
function tableColourRevertsTwo(){
    let tableClassOne = document.getElementsByClassName("tableClassTwo");
    tableClassOne[0].classList.remove("tableClassTwoHover");
}

document.getElementsByClassName("tableClassTwo")[1].onmouseover = function() {tableColourChangeThree()};
function tableColourChangeThree(){
    let tableClassTwo = document.getElementsByClassName("tableClassTwo");
    tableClassTwo[1].classList.add("tableClassTwoHover");
}
document.getElementsByClassName("tableClassTwo")[1].onmouseleave = function() {tableColourRevertsThree()};
function tableColourRevertsThree(){
    let tableClassTwo = document.getElementsByClassName("tableClassTwo");
    tableClassTwo[1].classList.remove("tableClassTwoHover");
}

//Task 17.4

/*document.body.onmousemove = function() {mousePositionLog()};
function mousePositionLog(event){
    let x = event.clientX;
    let y = event.clientY;
    console.log("(" + x + ", " + y + ")");
}*/

//Task 17.4.2

/*document.getElementsByTagName("*")[0].onclick = function() {logElement()};
function logElement(){
    let clickedElement = document.getElementsByTagName("*");
    console.log(clickedElement);
}*/

console.log("task 18.1")

let sunny = true;
/*while (sunny == true){
    console.log("code is running")
}

let rainButton = document.getElementById("button4").onclick = function() {setSunnyTofalse()};

function setSunnyTofalse(){
    sunny = false;
}*/

//Minesweeper

// Creating mine table
let row1IsMine = [false, false, false, false];
let row2IsMine = [false, false, false, false];
let row3IsMine = [false, false, false, false];
let row4IsMine = [false, false, false, false];
let table = [row1IsMine, row2IsMine, row3IsMine, row4IsMine];

// Setting random cell to be a mine
function randomTrueValue(){
    let randomRowIndex = Math.round(Math.random()*(table.length-1));
    let randomColumnIndex = Math.round(Math.random()*(table[randomRowIndex].length-1));
    table[randomRowIndex][randomColumnIndex] = true;
    console.log(table);

}
randomTrueValue();

// setting each cell to be a boolean: clicked = true/ notclicked = false
let row1HasCellBeenCliked = [false, false, false, false];
let row2HasCellBeenCliked = [false, false, false, false];
let row3HasCellBeenCliked = [false, false, false, false];
let row4HasCellBeenCliked = [false, false, false, false];
let hasBeenClickedTable = [row1HasCellBeenCliked, row2HasCellBeenCliked, row3HasCellBeenCliked, row4HasCellBeenCliked];

//calling the minesweeper function when any item of the 3d array is clicked on
document.getElementsByClassName("goGreen")[0].onclick = function() {minesweeper(0, 0, 0)};
document.getElementsByClassName("goGreen")[1].onclick = function() {minesweeper(0, 1, 1)};
document.getElementsByClassName("goGreen")[2].onclick = function() {minesweeper(0, 2, 2)};
document.getElementsByClassName("goGreen")[3].onclick = function() {minesweeper(0, 3, 3)};
document.getElementsByClassName("goGreen")[4].onclick = function() {minesweeper(1, 0, 4)};
document.getElementsByClassName("goGreen")[5].onclick = function() {minesweeper(1, 1, 5)};
document.getElementsByClassName("goGreen")[6].onclick = function() {minesweeper(1, 2, 6)};
document.getElementsByClassName("goGreen")[7].onclick = function() {minesweeper(1, 3, 7)};
document.getElementsByClassName("goGreen")[8].onclick = function() {minesweeper(2, 0, 8)};
document.getElementsByClassName("goGreen")[9].onclick = function() {minesweeper(2, 1, 9)};
document.getElementsByClassName("goGreen")[10].onclick = function() {minesweeper(2, 2, 10)};
document.getElementsByClassName("goGreen")[11].onclick = function() {minesweeper(2, 3, 11)};
document.getElementsByClassName("goGreen")[12].onclick = function() {minesweeper(3, 0, 12)};
document.getElementsByClassName("goGreen")[13].onclick = function() {minesweeper(3, 1, 13)};
document.getElementsByClassName("goGreen")[14].onclick = function() {minesweeper(3, 2, 14)};
document.getElementsByClassName("goGreen")[15].onclick = function() {minesweeper(3, 3, 15)};
let numberOfSquaresClicked = -1;
let hasPlayerLost = false;
let loseWinMessage = false;

//function to make any square corresponding to 'false' turn green that is clicked on by user 
function goGreen(i){
    let goGreen = document.getElementsByClassName("goGreen")[i];
    goGreen.classList.add("youWin");
}
//function to make all squares turn green when user clicks on all squares corresponding to 'false' without clicking on the square corresponding to 'true'. 
function allGreen(){
    let allGreen = document.getElementsByClassName("minesweeper")[0];
    allGreen.classList.add("allGreen")
}
//function to make square corresponding to 'true' turn red (if clicked on by user).
function goRed(i){
    let goRed = document.getElementsByClassName("goGreen")[i];
    goRed.classList.add("youLose");
}
//function to make all remaining squares corresponding to 'false' turn red if square corresponsing to 'true' is clicked on by user.
function allRed(){
    let allRed = document.getElementsByClassName("minesweeper")[0];
    allRed.classList.add("allRed")
}
//function to revert the table to it's original class if user clicks 'reset' button.
function resetTable(){
    let originalTableColour = document.getElementById("minesweeper");
    originalTableColour.classList.remove("allRed");
    originalTableColour.classList.remove("allGreen");

    table[0][0] = false;
    table[0][1] = false;
    table[0][2] = false;
    table[0][3] = false;
    table[1][0] = false;
    table[1][1] = false;
    table[1][2] = false;
    table[1][3] = false;
    table[2][0] = false;
    table[2][1] = false;
    table[2][2] = false;
    table[2][3] = false;
    table[3][0] = false;
    table[3][1] = false;
    table[3][2] = false;
    table[3][3] = false;

    hasBeenClickedTable[0][0] = false;
    hasBeenClickedTable[0][1] = false;
    hasBeenClickedTable[0][2] = false;
    hasBeenClickedTable[0][3] = false;
    hasBeenClickedTable[1][0] = false;
    hasBeenClickedTable[1][1] = false;
    hasBeenClickedTable[1][2] = false;
    hasBeenClickedTable[1][3] = false;
    hasBeenClickedTable[2][0] = false;
    hasBeenClickedTable[2][1] = false;
    hasBeenClickedTable[2][2] = false;
    hasBeenClickedTable[2][3] = false;
    hasBeenClickedTable[3][0] = false;
    hasBeenClickedTable[3][1] = false;
    hasBeenClickedTable[3][2] = false;
    hasBeenClickedTable[3][3] = false;

    // get list of elements with class goGreen and remove classes "youWin" and "youLose" from each one
    document.getElementsByClassName("goGreen")[0].classList.remove("youWin", "youLose");
    document.getElementsByClassName("goGreen")[1].classList.remove("youWin", "youLose");
    document.getElementsByClassName("goGreen")[2].classList.remove("youWin", "youLose");
    document.getElementsByClassName("goGreen")[3].classList.remove("youWin", "youLose");
    document.getElementsByClassName("goGreen")[4].classList.remove("youWin", "youLose");
    document.getElementsByClassName("goGreen")[5].classList.remove("youWin", "youLose");
    document.getElementsByClassName("goGreen")[6].classList.remove("youWin", "youLose");
    document.getElementsByClassName("goGreen")[7].classList.remove("youWin", "youLose");
    document.getElementsByClassName("goGreen")[8].classList.remove("youWin", "youLose");
    document.getElementsByClassName("goGreen")[9].classList.remove("youWin", "youLose");
    document.getElementsByClassName("goGreen")[10].classList.remove("youWin", "youLose");
    document.getElementsByClassName("goGreen")[11].classList.remove("youWin", "youLose");
    document.getElementsByClassName("goGreen")[12].classList.remove("youWin", "youLose");
    document.getElementsByClassName("goGreen")[13].classList.remove("youWin", "youLose");
    document.getElementsByClassName("goGreen")[14].classList.remove("youWin", "youLose");
    document.getElementsByClassName("goGreen")[15].classList.remove("youWin", "youLose");

    // get element with iD minesweeperDiv
    minesweeperTableElement = document.getElementById("minesweeperDiv");
    // if loseWinMessage is true, run the code
    if (loseWinMessage == true){
        // set loseWinMessage to false (so it doesn't keep removing child nodes once the loseWinMessage has been removed)
        loseWinMessage = false;
        // remove last element in the list of children in the minesweeperDiv
        minesweeperTableElement.removeChild(minesweeperTableElement.children[minesweeperTableElement.children.length-1]);
    }
}

// function to call each of the above functions depending on the user event.
function minesweeper(r, c, i){
    // if user has not clicked on true square
    if(hasPlayerLost == false){
        // if square has not been clicked on before, run the code.
        if(hasBeenClickedTable[r][c] == false){
            // set the square to true.
            hasBeenClickedTable[r][c] = true;
            // and if the user has clicked on square corresponding to false, run the code
            if(table[r][c] == false){
                // if number of squares user has clicked is less than 13, run the code.
                if(numberOfSquaresClicked < 13){
                    // add one to number of squares clicked
                    numberOfSquaresClicked += 1;
                    // call goGreen function
                    goGreen(i);
                }
                // if number of squares clicked is not less than 13, run the code.
                else{
                    // call allGreen function.
                    allGreen();
                    // set loseWinMessage to be true
                    loseWinMessage = true;
                    // add child node "You Win" to minesweeperDiv
                    youWinText = document.createElement("p");
                    let winNode = document.createTextNode("YOU WIN :D");
                    youWinText.appendChild(winNode);
                    let minesweeperElementWin = document.getElementById("minesweeperDiv");
                    minesweeperElementWin.appendChild(youWinText); //CHEATING!!!!!!!!!!!!!!!!!
                }     //love yaGAIN cheeselove you too xxx :D
            }
            // if user has clicked on true square and the number of squares clicked is less than or equal to 13, run the code.
            else if(numberOfSquaresClicked <= 13){
                // player has lost is true
                hasPlayerLost = true;
                //call function goRed
                goRed(i);
                // set loseWinMessage to be true
                loseWinMessage = true;
                // add child node "You Lose" to minesweeperDiv
                youLoseText = document.createElement("p");
                let loseNode = document.createTextNode("YOU LOSE :(");
                youLoseText.appendChild(loseNode);
                let minesweeperElementLose = document.getElementById("minesweeperDiv");
                minesweeperElementLose.appendChild(youLoseText);
                //call function allRed
                allRed();
            }
        }   
    }    
}
    

//get first in the list of elements with class name 'reset button' and when user clicks on this area, call function 'resetGame'
document.getElementsByClassName("resetButton")[0].onclick = function() {resetGame()};

//a function to reset the game.
function resetGame(){ 
    //reset number of squares clicked to 0
    numberOfSquaresClicked = -1;
    // call randomTrueValue function
     // C: Here we set a random value. Yes, this still works.
   
    // reset hasPlayerLost to false 
    hasPlayerLost = false;
    let originalTableColour = document.getElementById("minesweeper");
    originalTableColour.classList.remove("allRed");
    originalTableColour.classList.remove("allGreen");

    // C: Here we set all the values to be false.

    table[0][0] = false;
    table[0][1] = false;
    table[0][2] = false;
    table[0][3] = false;
    table[1][0] = false;
    table[1][1] = false;
    table[1][2] = false;
    table[1][3] = false;
    table[2][0] = false;
    table[2][1] = false;
    table[2][2] = false;
    table[2][3] = false;
    table[3][0] = false;
    table[3][1] = false;
    table[3][2] = false;
    table[3][3] = false;

    hasBeenClickedTable[0][0] = false;
    hasBeenClickedTable[0][1] = false;
    hasBeenClickedTable[0][2] = false;
    hasBeenClickedTable[0][3] = false;
    hasBeenClickedTable[1][0] = false;
    hasBeenClickedTable[1][1] = false;
    hasBeenClickedTable[1][2] = false;
    hasBeenClickedTable[1][3] = false;
    hasBeenClickedTable[2][0] = false;
    hasBeenClickedTable[2][1] = false;
    hasBeenClickedTable[2][2] = false;
    hasBeenClickedTable[2][3] = false;
    hasBeenClickedTable[3][0] = false;
    hasBeenClickedTable[3][1] = false;
    hasBeenClickedTable[3][2] = false;
    hasBeenClickedTable[3][3] = false;

    randomTrueValue();

    // get list of elements with class goGreen and remove classes "youWin" and "youLose" from each one
    document.getElementsByClassName("goGreen")[0].classList.remove("youWin", "youLose");
    document.getElementsByClassName("goGreen")[1].classList.remove("youWin", "youLose");
    document.getElementsByClassName("goGreen")[2].classList.remove("youWin", "youLose");
    document.getElementsByClassName("goGreen")[3].classList.remove("youWin", "youLose");
    document.getElementsByClassName("goGreen")[4].classList.remove("youWin", "youLose");
    document.getElementsByClassName("goGreen")[5].classList.remove("youWin", "youLose");
    document.getElementsByClassName("goGreen")[6].classList.remove("youWin", "youLose");
    document.getElementsByClassName("goGreen")[7].classList.remove("youWin", "youLose");
    document.getElementsByClassName("goGreen")[8].classList.remove("youWin", "youLose");
    document.getElementsByClassName("goGreen")[9].classList.remove("youWin", "youLose");
    document.getElementsByClassName("goGreen")[10].classList.remove("youWin", "youLose");
    document.getElementsByClassName("goGreen")[11].classList.remove("youWin", "youLose");
    document.getElementsByClassName("goGreen")[12].classList.remove("youWin", "youLose");
    document.getElementsByClassName("goGreen")[13].classList.remove("youWin", "youLose");
    document.getElementsByClassName("goGreen")[14].classList.remove("youWin", "youLose");
    document.getElementsByClassName("goGreen")[15].classList.remove("youWin", "youLose");

    // get element with iD minesweeperDiv
    minesweeperTableElement = document.getElementById("minesweeperDiv");
    // if loseWinMessage is true, run the code
    if (loseWinMessage == true){
        // set loseWinMessage to false (so it doesn't keep removing child nodes once the loseWinMessage has been removed)
        loseWinMessage = false;
        // remove last element in the list of children in the minesweeperDiv
        minesweeperTableElement.removeChild(minesweeperTableElement.children[minesweeperTableElement.children.length-1]);
    }
}
    
// Pairs Game

let rowOne = ["pig", "dog", "ant", "fox"];
let rowTwo = ["ant", "rat", "fox", "bear"];
let rowThree = ["pig", "cow", "cow", "hog"];
let rowFour = ["hog", "bear", "rat", "dog"];

let animals = [rowOne, rowTwo, rowThree, rowFour];

let listOfTileTextElements = document.getElementsByClassName("tiletext");

listOfTileTextElements[0].onclick = function() {pairs(0, 0, 0)};
listOfTileTextElements[1].onclick = function() {pairs(0, 1, 1)};
listOfTileTextElements[2].onclick = function() {pairs(0, 2, 2)};
listOfTileTextElements[3].onclick = function() {pairs(0, 3, 3)};

listOfTileTextElements[4].onclick = function() {pairs(1, 0, 4)};
listOfTileTextElements[5].onclick = function() {pairs(1, 1, 5)};
listOfTileTextElements[6].onclick = function() {pairs(1, 2, 6)};
listOfTileTextElements[7].onclick = function() {pairs(1, 3, 7)};

listOfTileTextElements[8].onclick = function() {pairs(2, 0, 8)};
listOfTileTextElements[9].onclick = function() {pairs(2, 1, 9)};
listOfTileTextElements[10].onclick = function() {pairs(2, 2, 10)};
listOfTileTextElements[11].onclick = function() {pairs(2, 3, 11)};

listOfTileTextElements[12].onclick = function() {pairs(3, 0, 12)};
listOfTileTextElements[13].onclick = function() {pairs(3, 1, 13)};
listOfTileTextElements[14].onclick = function() {pairs(3, 2, 14)};
listOfTileTextElements[15].onclick = function() {pairs(3, 3, 15)};

function tileReveal(i){
    let tileReveal = document.getElementsByClassName("tiletext")[i];
    tileReveal.classList.add("tileReveal");
}

function pairNoMatch(indexPrevious, i){
    let tileCurrentNoMatch = document.getElementsByClassName("tiletext")[i];
    let tilePreviousNoMatch = document.getElementsByClassName("tiletext")[indexPrevious];
    tileCurrentNoMatch.classList.remove("tileReveal");
    tilePreviousNoMatch.classList.remove("tileReveal");

}

function pairMatch(indexPrevious, i){
    let tileCurrentMatch = document.getElementsByClassName("tiletext")[i];
    let tilePreviousMatch = document.getElementsByClassName("tiletext")[indexPrevious];
    tileCurrentMatch.classList.add("pairMatch");
    tilePreviousMatch.classList.add("pairMatch");

}

let pairsElementWin = document.getElementById("pairsDiv");
let rowPrevious = -1;
let columnPrevious = -1;
let indexPrevious = -1;
let pairsFound = 0;
let numberOfTilesClicked = 0; 
let allPairsFound = false;
                    //0                   0        0   
function pairs(tileRowClicked, tileColumnClicked, i){
    console.log(numberOfTilesClicked);

    // if rowprevious = -1, columnprevious = -1 and numberoftilesclicked = -1 (yes in first instance)
    //This should be true the first time a tile is clicked
    if (rowPrevious == -1 && columnPrevious == -1 && numberOfTilesClicked < 2){
        // add one to numberoftilesclicked
        numberOfTilesClicked += 1;
        // set rowprev = 0
        rowPrevious = tileRowClicked;
        // set column prev = 0
        columnPrevious = tileColumnClicked;
        //call pair match to reveal tile
        indexPrevious = i;
        tileReveal(i);

        console.log("First click went to the right place :)");
    }
    //if rowprevious > -1 (i.e. 2), columnprevious > -1 (i.e. 0) and numberoftilesclicked > -1 

    //The else should be entered the second time a tile is clicked
    else{
        console.log("Second click went to the right place :)");

        // check if animals[0][0] = animals[2][0] (true)
        let tileClicked = animals[rowPrevious][columnPrevious] == animals[tileRowClicked][tileColumnClicked];
        //set numberoftilesclicked back to 0
        numberOfTilesClicked = 0;
        //if animals[0][0] = animals[2][0],
        rowPrevious = -1;
        columnPrevious = -1;
        
        console.log("Do the tiles match: " + tileClicked);

        if (tileClicked == true){
            // add 1 to pairsfound
            pairsFound += 1;
            // call pair match function to embolden text
            tileReveal(i);
            setTimeout(pairMatch, 2000, indexPrevious, i);
            // if pairsfound = 8
            if (pairsFound == 8){
                // add childnode with you win text
                youWinText = document.createElement("p");
                let winNode = document.createTextNode("YOU WIN :D");
                youWinText.appendChild(winNode);
                pairsElementWin = document.getElementById("pairsDiv");
                pairsElementWin.appendChild(youWinText);
                allPairsFound = true;
                // add reset game button TO DO
            }
        }
        //if animals[0][0] != animals[2][0],
        else{
            // call pairnomatch function to remove tilereveal class
            tileReveal(i);
            setTimeout(pairNoMatch, 2000, indexPrevious, i);
        }

    }
}

document.getElementsByClassName("resetPairsButton")[0].onclick = function() {resetPairsGame()};

function resetPairsGame(){
    rowPrevious = -1;
    columnPrevious = -1;
    indexPrevious = -1;
    pairsFound = 0;
    numberOfTilesClicked = 0;
    allPairsFound = false;

    if(allPairsFound == false){
        pairsElementWin.removeChild(pairsElementWin.children[pairsElementWin.children.length-1])
    }

    document.getElementsByClassName("tiletext")[0].classList.remove("pairMatch", "tileReveal");
    document.getElementsByClassName("tiletext")[1].classList.remove("pairMatch", "tileReveal");
    document.getElementsByClassName("tiletext")[2].classList.remove("pairMatch", "tileReveal");
    document.getElementsByClassName("tiletext")[3].classList.remove("pairMatch", "tileReveal");
    document.getElementsByClassName("tiletext")[4].classList.remove("pairMatch", "tileReveal");
    document.getElementsByClassName("tiletext")[5].classList.remove("pairMatch", "tileReveal");
    document.getElementsByClassName("tiletext")[6].classList.remove("pairMatch", "tileReveal");
    document.getElementsByClassName("tiletext")[7].classList.remove("pairMatch", "tileReveal");
    document.getElementsByClassName("tiletext")[8].classList.remove("pairMatch", "tileReveal");
    document.getElementsByClassName("tiletext")[9].classList.remove("pairMatch", "tileReveal");
    document.getElementsByClassName("tiletext")[10].classList.remove("pairMatch", "tileReveal");
    document.getElementsByClassName("tiletext")[11].classList.remove("pairMatch", "tileReveal");
    document.getElementsByClassName("tiletext")[12].classList.remove("pairMatch", "tileReveal");
    document.getElementsByClassName("tiletext")[13].classList.remove("pairMatch", "tileReveal");
    document.getElementsByClassName("tiletext")[14].classList.remove("pairMatch", "tileReveal");
    document.getElementsByClassName("tiletext")[15].classList.remove("pairMatch", "tileReveal");

}

// Take first 2 characters of a string and put them on the end. e.g. LeanMc

function cutThisString(stringToCut, numOfCharactersToMove){
    if (numOfCharactersToMove > stringToCut.length){
        numOfCharactersToMove %= stringToCut.length
    }
    let cutSection = stringToCut.substring(0, numOfCharactersToMove);
    let mainSection = stringToCut.substring(numOfCharactersToMove);
    console.log(mainSection + cutSection)
}

cutThisString("McLean", 2);
cutThisString("McLean", 7);
cutThisString("hey", 10);

// Whacka Number

let whackaNumberList = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
whackaNumberList[0] = document.getElementsByClassName("number")[0];
whackaNumberList[1] = document.getElementsByClassName("number")[1];
whackaNumberList[2] = document.getElementsByClassName("number")[2];
whackaNumberList[3] = document.getElementsByClassName("number")[3];
whackaNumberList[4] = document.getElementsByClassName("number")[4];
whackaNumberList[5] = document.getElementsByClassName("number")[5];
whackaNumberList[6] = document.getElementsByClassName("number")[6];
whackaNumberList[7] = document.getElementsByClassName("number")[7];
whackaNumberList[8] = document.getElementsByClassName("number")[8];
whackaNumberList[9] = document.getElementsByClassName("number")[9];

whackaNumberList[0].onclick = function () {checkIfNumbersMatch(0)};
whackaNumberList[1].onclick = function () {checkIfNumbersMatch(1)};
whackaNumberList[2].onclick = function () {checkIfNumbersMatch(2)};
whackaNumberList[3].onclick = function () {checkIfNumbersMatch(3)};
whackaNumberList[4].onclick = function () {checkIfNumbersMatch(4)};
whackaNumberList[5].onclick = function () {checkIfNumbersMatch(5)};
whackaNumberList[6].onclick = function () {checkIfNumbersMatch(6)};
whackaNumberList[7].onclick = function () {checkIfNumbersMatch(7)};
whackaNumberList[8].onclick = function () {checkIfNumbersMatch(8)};
whackaNumberList[9].onclick = function () {checkIfNumbersMatch(9)};

let numberOfPoints = 0;
let whackaNumberLoseText = false;
let pointsVisible = false;
let needRandomNumber = true;
let playAgainButton = false;
let youLoseText = false;
let counter = 2000;
let pointAdded = false;

document.getElementsByClassName("startGame")[0].onclick = function() {startGame()};

let randomNum = Math.round(Math.random()*9);

function randomNumGenerator(){
    clearInterval(gameStartIntervalID);
    gameStartIntervalID = setInterval(randomNumGenerator, counter);
    randomNum = Math.round(Math.random()*9);
    document.getElementsByClassName("randomNumberBox")[0].innerHTML = randomNum;
}

function setRandomNumberToZero(){
    document.getElementsByClassName("randomNumberBox")[0].innerHTML = "0";
}

function removeStartButton(){
    let list = document.getElementById("whackaNumber");
    list.removeChild(list.children[1]);
}

function addPoint(){
    document.getElementsByClassName("pointNumberClass")[0].innerHTML = numberOfPoints; // changes value of number of points element
}

function addYouLoseText(){
    if(youLoseText == false){
        youLoseText = true;
        youLoseText = document.createElement("p");
        let loseNode = document.createTextNode("YOU LOSE :(");
        youLoseText.appendChild(loseNode);
        let minesweeperElementLose = document.getElementById("whackaNumberDiv");
        minesweeperElementLose.appendChild(youLoseText); 
    }
}

function addPlayAgainButton(){
    // code to add play again button function to whackanumberDiv
    let againButton = document.createElement('button');
    let buttonNode = document.createTextNode("Play again");
    againButton.appendChild(buttonNode);
    let againButtonElement = document.getElementById("whackaNumber");
    againButtonElement.appendChild(againButton);
    againButton.classList.add("playAgain");
}

function startGame(){
    gameStartIntervalID = setInterval(randomNumGenerator, counter);// start random number generator
    playAgainButton = false;
    if (youLoseText == true){
        let minesweeperElementLose = document.getElementById("whackaNumberDiv");
        minesweeperElementLose.removeChild(minesweeperElementLose.children[minesweeperElementLose.children.length-1]);
        youLoseText = false;
    }
        
    removeStartButton(); 
    document.getElementById("numberList").classList.add("numberCursor");
    if (pointsVisible == false){
        pointsVisible = true;
        let pointsElement = document.createElement("p");
        let pointNode = document.createTextNode(numberOfPoints);
        pointsElement.appendChild(pointNode);
        let pointsDiv = document.getElementById("points");
        pointsDiv.appendChild(pointsElement);//1698-1704 adds element containing number of points(0 at this point)
        pointsElement.classList.add("pointNumberClass")//adds the box, padding etc to element containing number of points
    }
    else{
        addPoint(); //increases number of points as player clicks on the correct number

    }   
}

function resetWhackaNumber(){  
    counter = 2000;
    numberOfPoints = 0; // reset number of points
    setRandomNumberToZero(); 
    clearInterval(gameStartIntervalID);// stop randomnumbergenerator
    document.getElementsByClassName("playAgain")[0].onclick = function() {startGame()};
    document.getElementById("numberList").classList.remove("numberCursor");
}

function checkIfNumbersMatch(i){
    if (i == randomNum){
        numberOfPoints += 1;
        addPoint()
        if (numberOfPoints >= 5){
            counter -= 100;
        }
    }
    else{
        if (playAgainButton == false){
            playAgainButton = true;
            addPlayAgainButton();
        }
    addYouLoseText();
    youLoseText = true;
    resetWhackaNumber(); 
    }
}

console.log("Task 18.1");

/*for (let i = 0; i < 26; i++){
    console.log(i);
}*/

/*for (let i = 15; i < 28; i++){
    console.log(i);
}*/

for (let i = 0.1; i < 0.6; i += 0.1){
    console.log(i);
}

/*for (let i = 15; i > -16; i--){
    console.log(i);
}*/

console.log("Task 18.2");

let teas = ["jasmine ", "chamomile ", "green"];

for (let i = 0; i < 3; i++){
    console.log(teas[i]);
}

console.log("Task 18.3");

let allTeas = ""

for (let i = 0; i < 3; i++){
    allTeas += teas[i];
}
console.log(allTeas)

//console.log("Task 18.4");

let fruit = document.getElementsByClassName("jsTest");
let anotherRandomNumber = ""

for (let i = 0; i < 4; i++){
    anotherRandomNumber = Math.round(Math.random()*99);
    fruit[i].innerHTML = anotherRandomNumber;
}

console.log("Task 18.5")

let usersWord = "a string";
let usersLetter = "a letter";
let prevPositionOfLetter = 0
let currentPositionOfLetter = usersWord.indexOf(usersLetter);
let isLetterInWord = false;

function positionOfLetterInAString(usersWord, usersLetter){
    for (let i = 0; i < usersWord.length; i++){
        // if e ==e
        if (usersWord.charAt(i) == usersLetter){
            //
            currentPositionOfLetter = usersWord.indexOf(usersLetter, prevPositionOfLetter);
            prevPositionOfLetter = currentPositionOfLetter + 1;
            console.log(currentPositionOfLetter);
            isLetterInWord = true;
        }
    }

}
if (isLetterInWord == false){
            console.log("The letter isn't in the word")
} 

positionOfLetterInAString("encyclopedia", "e")

console.log("Task 18.9.1")

let listOfGames = ["Mario ", "Zelda ", "Animal Crossing ", "Just Dance "];
let listOfConsoles = ["Wii ", "Switch ", "DS ", "Playstation "];
let j = listOfConsoles.length-1;
let allGamesAndConsoles = "";

for (let i = 0; i < listOfGames.length; i++){
    allGamesAndConsoles += listOfGames[i] + listOfConsoles[j]
    j -= 1
}
console.log(allGamesAndConsoles)

console.log("Task 18.9.2")

let allConsolesAndGames = "";

for (let i = 0, k = listOfGames.length-1; i < listOfGames.length; i++, k--){
    allConsolesAndGames += listOfGames[k] + listOfConsoles[i]
}
console.log(allConsolesAndGames)

console.log("Task 18.10")

let foodStuff = ["meat ", "cheese ", "wine"];
let foodStuffs = "";

for (i = 0; i < foodStuff.length; i++){
    foodStuffs += foodStuff[i]
}

console.log(foodStuffs)


/*let someGlobalVariable = 5;

function SomeFunction(){               //2secs, 4secs, 6secs, 8secs, 10secs
    console.log(someGlobalVariable++); // 5       0       1     2       3

    //Pre-increment
    //++someGlobalVariable;

    //Post-increment
    //someGlobalVariable++;
}

function someFunctionTwo(){
    someGlobalVariable = 0;
}

setInterval(SomeFunction, 2000);

setTimeout(someFunctionTwo, 3000);

console.log(someGlobalVariable);//5*/








 
            






   





