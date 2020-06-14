//CHAPTER 1

//task 1

// alert("Welcome to my webpage")

//task2

// alert('Error! please enter a valid password')

// task 3

// alert('Welcome to JS land...' + "\n" + 'Happy coding!')

//task 4

// alert('Welcome to JS land...')
// alert('Happy coding')

//task 5 (write the following code in browser console)

// alert('Hello.....I can run JS through my web browser\'s console')

//task 6

// alert('Welcome to my periodic table')


//CHAPTER 2


//task 1

// var username = 'Hassan2001'

// task 2

// var myName = "Hassan Ashfaq"

// task 3

// var message = 'Hello World'
// alert(message)

//task 4

// var name = 'Johne doe'
// var age = '15 years old'
// var qualification = 'certified mobile apllication development'

// alert(name)
// alert(age)
// alert(qualification)

//task 5

// var p = 'PIZZA'
// alert(p.slice(0,5)+'\n'+p.slice(0,4)+'\n'+p.slice(0,3)+'\n'+p.slice(0,2)+'\n'+p.slice(0,1))

//task 6

// var email = 'hassan.ashfaq112@gmail.com'
// alert('My email address is ' + email)

//task 7

// var book = 'A smarter way to learn JavaScript'
// alert('I am trying to learn from the book '+book)

//task 8

// document.write('Yah! I can write HTML content through Javascript')

//task 9

// var str = '▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬'
// alert(str)


//CHAPTER 3

//task 1

// var age = '18'
// alert('I am ' +age+ ' years old')

//task 2

// var N = "14";
// alert('You have visited this site '+N+ ' times')

//task 3

// var birthYear = 2001
// document.write('My birth year is '+birthYear + '<br>')
// document.write('Data type of my declared variable is number')

//task 4

// var name = 'Hassan'
// name = name.bold()
// var prdTitle = "T-shirt"
// prdTitle = prdTitle.bold()
// var quantity = "5"
// quantity = quantity.bold()
// document.write(name + ' ordered ' + quantity +' ' + prdTitle + '(s)' + ' on XYZ Clothing store')


//CHAPTER 4

//task 1

// var abc , def , ghi;

//task 2

// var name , $class , _class , House63 , User_name; (legal)
// var 4name , clss-pp , user name , cl/ss , !name ; (illegal)

//task 3

// var rule = 'Rules for naming JS variables'
// rule = rule.bold()
// document.write(rule + '<br><br>' + 'Variables can only contain numbers, $ and _. For example : $any_1stVariable<br>' + 
// 'Variables must begin with a letter, $ or _. For example : $enter_name or name<br>' + 
// 'Variable names are case sensitive<br>' + 'Variable names should not be JS Keywords')


//CHAPTER 5

//task 1

// var num1 , num2;
// num1 = +prompt("Enter number 1")
// num2 = +prompt("Enter number 2")

// var result = num1 + num2;
// document.write('Sum of '+num1 + ' and '+ num2 + ' is ' +  result)

//task 2 

// var num1 , num2 , op;
// num1 = +prompt("Enter number 1")
// num2 = +prompt("Enter number 2")
// op = prompt('Enter operator')

// if (op === '*'){
//     var result = num1 * num2;
// document.write('Multiplication of '+num1 + ' and '+ num2 + ' is ' +  result)
// }

// else if (op === '-'){
//     var result = num1 - num2;
// document.write('Subtraction of '+num1 + ' and '+ num2 + ' is ' +  result)
// }

// else if (op === '/'){
//     var result = num1 / num2;
// document.write('Division of '+num1 + ' and '+ num2 + ' is ' +  result)
// }

// else if (op === '%'){
//     var result = num1 % num2;
// document.write('Modulus of '+num1 + ' and '+ num2 + ' is ' +  result)
// }

// else{
//     document.write('Invalid Operator')
// }

//task 3

// var num;
// document.write('Value after variable declaration is undefined <br>')
// num = '5'
// document.write('Initial value :' + num + '<br>')
// num++;
// document.write('Value after inrement is : '+num+ '<br>')
// num = num + 7;
// document.write('Value after addition is : '+num+ '<br>')
// --num;
// document.write('Value after decrement is : '+num+ '<br>')
// document.write('The remainder is : ' + num%3)

//task 4

// var price = 600;
// document.write('Total cost to buy 5 tickets to a movie is '+price*5+'PKR')

//task 5

// var num = 4;
// document.write('Table of ' + num + '<br>')
// for(var a = 1 ; a<=10 ; a++)
// {
//     document.write(num + ' x ' + a + ' = ' + num*a + '<br>')
// }

//task 6

// var c = 25
// document.write(c+'\u00B0C' + ' is ' + (c * 9/5 + 32)+'\u00B0F<br>')

// var f = 70
// document.write(f+'\u00B0F' + ' is ' + ((f - 32) * (5/9)) +'\u00B0C<br>')

//task 7

// var item1 = 650 , item2 = 100;
// var qua1 = 3 , qua2 = 7;
// var shpchr = 100;

// document.write('Price of item 1 is '+item1+'<br>Ordered quantity of item 1 is '+qua1+ '<br>'+ 
// 'Price of item 2 is '+item2 +'<br>'+ 'Ordered quantity of item 2 is '+qua2+ '<br>'+'Shipping charges is '
// +shpchr + '<br><br>' + 'Total cost of your order is '+ ((item1*qua1) + (item2*qua2)))

//task 8

// var mobt = 804
// var mtot = 980
// var per = ((mobt / mtot) * (100))

// document.write('Total marks: '+mtot+'<br>'+ 'Marks obtained: '+mobt
//                 + '<br>' + 'Percentage: '+per+ '%')

//task 9

// var inRuppee = ((10*104.80) + (25*28))
// document.write('Total Currency in PKR: '+inRuppee)

//task 10

// var num = 10;
// var num = (((num + 5) * 10) / 2)
// document.write(num)

//task 11

// var year = 2020
// var bYear = 2001
// var c = 'Age Calculator'
// var c = c.bold()

// document.write(c+'<br><br>'+ 'Current Year: '+year+'<br>'+'Birth Year: '
//                 +bYear+'<br>'+'Your Age is: '+(year-bYear))

//task 12

// var r = 20;
// var cir = 2 * 3.142 * r
// var area = 3.142 * r * r

// document.write('Radius of a circle is: '+r+'<br>'+
// 'The circumference is: '+cir+ '<br>'+ 'The area is: '+area)

//task 13

// var fav = 'Fries'
// var crAge = 18
// var maxAge = 85
// var perDay = 1
// var c = 'The Lifetime Suppky Calculator'
// var c = c.bold()
// var amNeed = ((maxAge - crAge) * 365 * perDay)
// document.write(c+'<br><br>'+'Favourite snack: '+fav+'<br>'+'Current age: '+crAge+'<br>'+'Estimated Maximum Age: '+maxAge+'<br>'+'Amount of snacks per day: '+perDay+'<br>'+'You will need '+amNeed+'  to last you until the ripe old age of '+maxAge)


//CHAPTER 6-9

//task 1

// var a = '10'
// document.write('Result<br>The value of a is: '+ a +'<br>------------------------------'+
// '<br><br>The value of ++a is: '+ (++a) + '<br>Now the value of a is: '+ a +
// '<br><br>The value of a++ is: '+ (a++) +'<br>Now the value of a is: '+ a +
// '<br><br>The value of --a is: '+ (--a) + '<br>Now the value of a is: '+ a +
// '<br><br>The value of a-- is: '+ (a--) + '<br>Now the value of a is: '+ a)

//task 2

// var a = 2 , b = 1;
// var result = --a - --b + ++b + b--;
// document.write('a is '+a+ '<br>b is '+b+ '<br>result is '+result)

//task 3

// var name = prompt('Enter your name:- ')
// alert('Welcome ' + name)

//task 4

// var num = +prompt('Enter any number: ')
// if(num == '')
// {
//     for (var a = 1 ; a<=10 ; a++){
//         document.write('5 x ' + a + ' = ' + (5*a)+'<br>')
//     }
// }
// else{
//     for (var b = 1 ; b<=10 ; b++){
//         document.write(num+' x ' + b + ' = ' + (num*b)+'<br>')
//     }
// }

//task 5

// var eng, mth, urdu, tm = 100;
// eng = +prompt('Enter english marks = ')
// mth = +prompt('Enter maths marks = ')
// urdu = +prompt('Enter urdu marks = ')

// var obt = eng + urdu +mth
// var per = (obt / tm) * 100;

// document.write('Subject &emsp;    Total marks  &emsp;   Obtained marks   &emsp;  Percentage<br><br>'+
//                'English    &emsp; &emsp;'+tm+ '&emsp; &emsp;&emsp; &emsp;  &emsp;'+ eng + '&emsp; &emsp;&emsp; &emsp;  &emsp;'+eng+'%<br>'
//                +' '+
//                'Maths    &emsp; &emsp;&ensp;'+tm+ '&emsp; &emsp;&emsp; &emsp;  &emsp; '+ mth + '&emsp; &emsp;&emsp; &emsp;  &emsp;'+mth+'%<br>'
//                +' '+
//                'Urdu    &emsp; &emsp;  &ensp;'+''+tm+''+ '&emsp; &emsp;&emsp; &emsp;  &emsp; '+ urdu + '&emsp; &emsp;&emsp; &emsp;  &emsp;'+urdu+'%<br><br>'+
//                '&emsp;&emsp;&emsp;&emsp;&emsp;&ensp;'+(tm*3) + '&emsp; &emsp; &emsp; &emsp;&emsp; '+(eng+mth+urdu)+'&emsp; &emsp; &emsp; &emsp;&emsp;'+(((eng+mth+urdu)/(tm*3)) * 100)+'%') 


//CHAPTER 9-11


//task 1

// var city = prompt('Enter City:')
// if (city === 'Karachi'){
//     alert('Welcome to City of Lights')
// }

//task 2

// var gender = prompt('What is your gender?')
// if(gender === 'Male'){
//     alert('Good Morning Sir')
// }
// else if(gender === 'Female'){
//     alert('Good Morning Ma\'am')
// }

//task 3

// var signal = prompt('Enter signal colour:')
// if(signal === 'Red'){
//     alert('Must stop')
// }
// else if(signal === 'Yellow'){
//     alert('Ready to move')
// }
// else if(signal === 'Green'){
//     alert('Move now')
// }
// else{
//     alert('Invalid color')
// }

//task 4

// var pet = +prompt('Enter petrols in Litres:')
// if (pet <= 0.25 ){
//     alert('Please refill the fuel in your car')
// }
// else{
//     alert('Move on')
// }

//task 5

// var a = 4;
//  if (++a === 5){ 
//      alert("given condition for variable a is true"); 
//  } 

// var b = 82;
// if (b++ === 83){ 
//     alert("given condition for variable b is true"); } 
//  }

// var c = 12; 
// if (c++ === 13){ 
//     alert("condition 1 is true");
//  }
// if (c === 13){ 
//     alert("condition 2 is true"); 
// }
// if (++c < 14){ 
//     alert("condition 3 is true"); 
// } 
// if(c === 14){ 
//     alert("condition 4 is true"); 
// } 

// var materialCost = 20000;
// var laborCost = 2000; 
// var totalCost = materialCost + laborCost; 
// if (totalCost === laborCost + materialCost){ 
//     alert("The cost equals"); 
//   } 

// if (true){ 
//    alert("True"); 
//   } 
// if (false){ 
//    alert("False"); 
//   }

// if("car" < "cat"){ 
//     alert("car is smaller than cat"); 
//      } 

//task 6

// var eng = +prompt('Enter english marks = ')
// var urdu = +prompt('Enter urdu marks = ')
// var mth = +prompt('Enter maths marks = ')
// var total = 300
// var obt = eng + urdu + mth
// var per = ((obt / total) * 100)

// if(per >= 80 || per < 100){
//     grade = 'A-one'
//     remarks = 'Excellent'
// }
// else if(per >= 70 || per < 80){
//     grade = 'A'
//     remarks = 'Good'
// }
// else if(per >= 60 || per < 70){
//     grade = 'A'
//     remarks = 'You need to improve'
// }
// else if(per < 60){
//     grade = 'Fail'
//     remarks = 'Sorry'
// }
// else{
//     alert('Invalid percentage')
// }
// var m = 'Mark Sheet'
// m = m.bold()
// document.write(m+'<br><br>'+'Total marks : '+total+'<br>Marks obtained : '
//             +obt+'<br>Percentage : '+per+'%<br>Grade : '+grade+'<br>Remarks : '+remarks)
  
//task 7

// var num = 4;
// var num1 = +prompt('Guess the number:')
// if (num1 === num){
//     document.write("Bingo! Correct answer")
// }
// else if(num === num1 + 1){
//     document.write('Close enough to the correct answer')
// }
// else{
//     document.write('Wrong guess')
// }

//task 8

// var num = +prompt('Enter any number:')
// if (num%3 === 0){
//     document.write('Number is divisible by 3')
// }
// else{
//     document.write('Number not divisible by 3')
// }

//task 9

// var num = +prompt('Enter any number:')
// if(num%2 === 0){
//     document.write("Number is even.")
// }
// else{
//     document.write('Number is odd.')
// }

//task 10

// var T = +prompt('Enter temperature:')
// if(T >= 40){
//     document.write('It is too hot outside.')
// }
// else if(T >= 30 && T < 40){
//     document.write("The Weather is normal Today.")
// }
// else if(T >= 20  && T < 30){
//     document.write("Today's Weather is cool.")
// }
// else if(T >= 10  && T < 20){
//     document.write("OMG! Today's Weather is so cool.")
// }

// else{
//     document.write('Weather is cold')
// }

//task 11

// var num1 = +prompt('Enter 1st number: ')
// var num2 = +prompt('Enter 2nd number: ')
// var op = prompt('Enter Operator: ')
// if (op === '+'){
//     document.write(num1 + op + num2 + '=' + (num1+num2))
// }
// else if (op === '-'){
//     document.write(num1 + op + num2 + '=' + (num1-num2))
// }
// else if (op === '*'){
//     document.write(num1 + op + num2 + '=' + (num1*num2))
// }
// else if (op === '/'){
//     document.write(num1 + op + num2 + '=' + (num1/num2))
// }
// else if (op === '%'){
//     document.write(num1 + op + num2 + '=' + (num1%num2))
// }
// else{
//     document.write('Invalid Operator')
// }


//CHAPTER 12-13


//task 1

// var char = prompt('Enter any character:')
// var m = char.charCodeAt()
// if(m >= 65 && m <= 90){
//     document.write(char +' is in Uppercase')
// }
// else if(m >= 97 && m <= 122){
//     document.write(char +' is in Lowercase')
// } 
// else if(m >= 48 && m <= 57){
//     document.write(char +' is number')
// }
// else{
//     document.write('Invalid Character')
// }

//task 2

// var num1 = +prompt('Enter 1st number '), num2 = +prompt('Enter 2nd number ')
// if(num1 > num2){
//     document.write(num1+' is the greatest')
// }
// else if(num2 > num1){
//     document.write(num2+' is the greatest')
// }
// else{
//     document.write('Both numbers are equal')
// }

//task 3

// var num = +prompt('Enter any number:')
// if(num > 0){
//     document.write(num+' is positive')
// }
// else if(num < 0){
//     document.write(num+' is negative')
// }
// else{
//     document.write('Zero(0)')
// }

//task 4

// var c = prompt('Enter any character:')
// if (c === 'a' || c === 'e'  || c === 'i'  || c === 'i'  || c === 'o' || c === 'u'
//     || c === 'A' || c === 'E'  || c === 'I'  || c === 'O'  || c === 'o' || c === 'U'){
//     document.write('True')
// }
// else{
//     document.write('False')
// }

//task 5

// var password = 'hassan'
// var get = prompt('Enter password:')
// if (get === ''){
//     document.write('Please enter your password!')
// }
// else if(get === password){
//     document.write( 'Correct! The password you entered matches the original password')
// }
// else{
//     document.write('Incorrect password')
// }

//task 6

// var greeting; 
// var hour = 13; 
// if (hour < 18) { 
//     greeting = "Good day";
// }
// else {
//     greeting = "Good evening"; 
// } 
  
//task 7

// var time = 1900
// if (time >= 0000 && time < 1200){
//     document.write('Good Morning!')
// }
// else if(time >= 1200 && time < 1700){
//     document.write('Good Afternoon!')
// }
// else if(time >= 1700 && time < 2100){
//     document.write('Good Evening!')
// }
// else if(time >= 2100 && time < 2359){
//     document.write('Good Night!')
// }
// else{
//     document.write('Invalid Night')
// }


//CHAPTERS 14-16

//task 1

// var stu = {}

//task 2

// var stu = []

//task 3

//var str = ['a' , 'b' , 'c']

//task 4

//var num = [1 , 2 , 3]

//task 5

//var bool = [true , false]

//task 6

//var mixed = ['Hassan' , 1 , 2 , 'ashfaq' , true] 

//task 7 

// var qual = ['SSC' , 'HSC' , 'BCS' , 'BS' , 'BCOM' , 'MS' , 'M. Phil.' , 'PhD']
// for(var a = 0 ; a < qual.length ; a++){
//     document.write((a+1)+') '+ qual[a] + '<br>')
// }

//task 8

// var nm = ['Michael' , 'John' , 'Tony']
// var marks =[320 , 230 , 480]
// var total = 500

// for (var v = 0 ; v < marks.length ; v++){
//     document.write('Score of '+ nm[v] + ' is '+ marks[v]+
//     '. Percentage: '+((marks[v]/total) * 100)+'%<br>')
// }

//task 9

// var cl = ["black" , "white" , "red" , "green"]
// document.write(cl + '<br>')

// var cl1 = prompt('Add a colour at the beginning?')
// cl.unshift(cl1)
// document.write(cl)

// var cl2 = prompt('Add a colour at the end?')
//cl.push(cl2)
// document.write(cl)

// var c3 = prompt('Enter color:')
// var c4 = prompt('Enter color:')
// cl.unshift(c3 , c4)
// document.write(cl)

// cl.shift()
// document.write(cl)

// cl.pop()
// document.write(cl)

// var ask = +prompt('Enter the index?')
// cl.splice(ask , 0 , 'Blue')
// document.write(cl + '<br>')

// var ask1 = +prompt('Enter the index?')
// var ask2 = +prompt('How many colors to delete?')
// cl.splice(ask1 , ask2)
// document.write(cl + '<br>')

//task 10

// var marks = [320 , 230 , 480 , 120]
// document.write('Score of Students : ' + marks[0] +', '+ marks[1] +', '+ marks[2] +', '+ marks[3] +'<br>')
// marks.sort()
// document.write('Ordered scores of Students: ')
// for (var a = 0 ; a < marks.length ; a++){
//     document.write(marks[a]+', ')
// }

//task 11

// var city = ['Karachi','Lahore','Islamabad','Quetta','Peshwar']
// var copy = []
// copy.push(city[2])
// copy.push(city[3])
// copy.push(city[4])

// document.write('Selected Cities list:<br>')
// document.write(copy)

//task 12

// var arr = ['This',  'is' ,  'my' ,  'cat'];
// document.write('String: <br>'arr.join(' '))

//task 13

// var dev = []
// for (var a = 0 ; a < 3 ; a++){
//     var b = prompt('Enter device name:')
//     dev.push(b)
// }

// document.write('Devices : ' + '<br>' + dev)
// for (var c = 0 ; c < dev.length ; c++){
//     document.write('<br>Out:<br>'+dev[c]+'<br>')
// }

//task 14

// var dev = []
// for (var a = 0 ; a < 3 ; a++){
//     var b = prompt('Enter device name:')
//     dev.push(b)
// }
// document.write('Devices : ' + '<br>' + dev+'<br>')

// dev.reverse()
// for (var c = 0 ; c < dev.length ; c++){
//     document.write('<br>Out:<br>'+dev[c]+'<br>')
// }

//task 15

// var arr = ['Apple','Samsung','Mototrola','Nokia','Sony','Haier']
// document.write('<select>')
// for(var i = 0 ; i < arr.length ; i++){
//     document.write('<option>' + arr[i] + '</option>')
// }
// document.write('</select>')


//CHAPTER 17-20

//task 1

// var arr = [[] ,[]]

//task 2

// var arr = [[0,1,2,3] , [1,0,1,2] , [2,1,0,1]]
// for (var a = 0 ; a < arr.length ; a++){
//     document.write(arr[a].join(' ')+'<br>')
// }

//task 3

// for (var a = 0 ; a<=10 ; a++){
//     document.write(a + '<br>')
// }

//task 4

// var num = +prompt('Enter any number:')
// var len = +prompt('Table upto?')
// for(var a = 1 ; a <= len ; a++){
//     document.write(num + ' x ' + a + ' = ' + (num * a)+'<br>')
// }

//task 5

// var fruit = ['apple','banana','mango','orange','strawberry']
// for (var a = 0 ; a < fruit.length ; a++){
//     document.write('Element at index '+ a + ' is '+ fruit[a]+'<br>')
// }

//task 6

// var arr = [] , arr1 = [] ,arr2 = [] , arr3= [] , arr3 = []
// for (var a = 1 ; a<16 ; a++){
//     arr.push(a)
// }
// document.write('Counting '+arr.join(', '))

// for (var a = 10 ; a>=1 ; a--){
//     arr.push(a)
// }
// document.write('Counting '+arr1.join(', ')+'<br')

// for (var a = 0 ; a<=20 ; a=a+2){
//     arr.push(a)
// }
// document.write('Counting '+arr2.join(', ')+'<br')

// for (var a = 1 ; a<=19 ; a=a+1){
//     arr.push(a)
// }
// document.write('Counting '+arr3.join(', ')+'<br')

// for (var a = 2 ; a<=20 ; a=a+2){
//     arr.push(a)
// }
// document.write('Counting '+arr4.join(', ')+'<br')


//task 7

// var a = ['cake' , 'cookie' , 'biscuit']
// var b = prompt('Search item:')
// for (var c = 0 ; c < a.length ; c++){
//     if(a[c] === b){
//         document.write('Item found')
//         break
//     }
// }


//task 8

// var arr = [24 , 53 , 78 , 91 , 12]
// var max = arr[0]
// for (a = 0 ; a < arr.length ; a++){
//     if (max < arr[a]){
//         max = arr[a]
//     }
// }
// document.write('The largest number is '+max)

//task 9

// var arr = [24 , 53 , 78 , 91 , 12]
// var min = arr[0]
// for (a = 0 ; a < arr.length ; a++){
//     if (min > arr[a]){
//         min = arr[a]
//     }
// }
// document.write('The smallest number is ' +min)

//task 10

// var arr = []
// for(a = 0 ; a<=100 ; a=a+5){
//     arr.push(a)
// }
// document.write(arr.join(', '))

