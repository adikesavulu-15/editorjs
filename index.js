/*console.log('hi there');
console.log("how are you");
//hiiiiiiiiiiiiiii
/*
hi boss i need water
window.alert('hi how are you');
*/
/*console.log(window.innerHeight);
console.log(window.innerWidth);
console.log(window.location);

var person={
    firstName:'Adi',
    lastName:'kesav',
    age:24,
    isStudent:false,
    btech:true,
    address:{
        city:'darsi',
        village:'chowtapalem',
        street:'main road',
    },
    sayhello:function(){
        console.log('hi');
    }
};
console.log(person);
console.log(person.firstName);
console.log(person.isStudent);
console.log(person.address);
console.log(person.sayhello());*/

// function display(){
//     if(true){
//         const x=13;
//         console.log(x+''+window.innerHeight);
//     }
//     const x=76476567;
    
//   console.log('dfdfdfff'+x);
// }

// display();

// let firsrName="adi";
// let age=23;
// let student=true;
// document.getElementById("h1").innerHTML="Hi "+firsrName;
// document.getElementById("h2").innerHTML="my age is "+ age;
// document.getElementById("h3").innerHTML="Enrolled " + student;
// console.log(firsrName,'',1);
// console.log('dfgdxgfdg',age,'sddsfdf');
// console.log(student+1);

// data="please wait until and unless you have enough";
// search="p";
// data=data.split(search);
// console.log('ijijijj',data);
// console.log(data.length-1)

// s=34;
// // console.log(s%=2)

// let username=window.prompt('hey ? whats your name?');
// console.log('welcome ',username);

// let username;
// document.getElementById('mybutton').onclick=function(){
//     username=document.getElementById('myinput').value;
//     console.log('welcome ',username);
//     alert(username);
// }


// age=window.prompt();
// console.log(typeof age)
// age=Number(age);
// age+=1;
// console.log('age',age);
// let a=String(343);
// console.log(a,typeof a);
// console.log(Number('454'));
// console.log(Boolean());

// const pi=3.14
// ra=window.prompt('enter the radius of the circle');
// perimeter=2 * pi * ra
// console.log(perimeter)



// let a=3.14
// console.log(Math.round(a));
// console.log(Math.abs(a));
// console.log(Math.sqrt(a));
// console.log(Math.pow(a,2));
// console.log(Math.floor(a));
// console.log(Math.ceil(a));

// let count=0;
// document.getElementById('reset').onclick=function(){
//     count=0;
//     document.getElementById('result').innerHTML=count;
// };

// document.getElementById('increase').onclick=function(){
//     count+=1;
//     document.getElementById('result').innerHTML=count;
// }
// document.getElementById('decrease').onclick=function(){
//     count-=1;
//     document.getElementById('result').innerHTML=count;
// }



// document.getElementById('roll').onclick=function(){
//     let a=Math.floor(Math.random()*6)+1;
//     let b=Math.floor(Math.random()*6)+1;
//     let c=Math.floor(Math.random()*6)+1;

// document.getElementById('label1').innerHTML=a;
// document.getElementById('label2').innerHTML=b;
// document.getElementById('label3').innerHTML=c;
// }


// let userName="adi kesavulu";
// console.log(userName.replace('k','K'));
// console.log(userName.split('a'))
// console.log(userName.charAt(0).toUpperCase())
//console.log(userName.indexOf('k'))
// console.log(userName.length)

// let firstName=userName.slice(0,3);
// let lastName=userName.slice(4,12);
// console.log(firstName.slice(userName.indexOf(' ')));
// console.log(lastName.toLowerCase().length);
// lett=userName.slice(1,12)
// console.log(lett)
// out=userName.charAt(0).toUpperCase()+lett
// console.log(out);

// let age=18;
// if(age <18){
//     console.log('you are child');
// }
// else if(age === 18){
//     console.log('you are major');

// }
// else{
//     console.log('you are not born')
// }

// document.getElementById('sub_button').onclick=function(){
//     const checkBox=document.getElementById('mycheckbox')
//     const radio1=document.getElementById('paypal');
//     const radio2=document.getElementById('master');
//     const radio3=document.getElementById('visa');
//     if(checkBox.checked){
//         console.log('you are follow this user');
//     }
//     else if(radio1.checked){
//         console.log('you clicked the paypal card');
//     }
//     else if(radio2.checked){
//         console.log('you clicked the master card');
//     }
//     else if(radio3.checked){
//         console.log('you clicked the visa card');
//     }

//     else{
//         console.log('you have salect one');
//     }
// };
// let score=window.prompt('enter your score from a to e');
// switch(score){
//     case 'a':
//         console.log('you great');
//         break;
//     case 'b':
//         console.log('you fine',score);
//         break;
//     case 'c':
//         console.log('you avg',score);
//         break;
//     case 'd':
//         console.log('you min',score);
//         break;
//     case 'e':
//         console.log('you fail',score);
//         break;
//     default:
//         console.log('please select a grade from a to e')
// };

// let temp=0;
// if(!(temp>=0)){
//     console.log('its warm outside');
// }else{
//     console.log('its cold outside');
// }
// let userName;
// do{
//     userName=window.prompt('enter your name');
// }while(userName=='' && userName==null);

// console.log(userName);

// for(let counter=0;counter<=10;counter+=1){
//     console.log(counter);
// }

// for(i=1;i<6;i+=1){
//     if(i==4){
//         console.log('hi this is 4');
//         continue;
//     }
//     console.log(i);
// }

// for(i=1;i<=3;i+=1){
//     for(j=1;j<=3;j+=1){
//         for(k=1;k<=3;k+=1){
//             console.log(k);
//         }
//     }
// }
// adi();
// function adi(){
//    let a=15;
//    let b=15;
//    getinput(a,b);
// }
// function getinput(a,b){
//     let sum=a+b
//    console.log('sum is',sum);
// }

// let width;
// let height;
// let area;

// width=window.prompt('enter height of a rectangle');
// height=window.prompt('enter width of a rectangle');
// area=getarea(width,height)
// console.log('area is',area);
// console.log(typeof Number(height))
// function getarea(width,height){
//     return Number(width)*Number(height);
// };


// function checkAge(age){
//     // if (age>=18){
//     //     return true;
//     // }else{
//     //     return false;
//     // }

//     return age>=18?window.prompt('enter true'):window.prompt('enter false');
// }
// let adult=checkAge(window.prompt('enter age of a person'));
// console.log(adult);
// let userName="adikesavulu";
// let age=24;
// let address="east chowtapalem Village";
// let text=`My name is ${userName},<br>

// I am ${age} years old<hr>

// i am from ${address}`
// document.getElementById('lab').innerHTML=text;
// let number=72827.823;
// console.log(number.toLocaleString('en-US',{style:'currency','currency':'USD'}));
// console.log(number.toLocaleString('hi-IN',{style:'currency','currency':'INR'}));
// console.log(number.toLocaleString('de-DE',{style:'currency','currency':'EUR'}));

// const answer=Math.floor(Math.random() * 10 + 1);
// let guesses=0;
// console.log(answer);
// document.getElementById('submiButon').onclick=function(){
//     guesses+=1;
//     let guess=document.getElementById('guessInput').value;
//     document.getElementById('guesscount').innerHTML=`total Guessess:${guesses}`
//     console.log(guess);
//     if(guess == answer) {
        
//         alert(`your guess is ${answer} and you use ${guesses} guesses`);
//     }else if(guess < answer) {
//         alert(`your guess is to smaal you use ${guesses} guesses`);
//     }else{
//         alert('try again '); 
//     }
// }
// document.getElementById('submitbutton').onclick=function(){

//     let temp;
//     if(document.getElementById('cbutton').checked) {
//         temp=document.getElementById('inputtemp').value;
//         temp=Number(temp);
//         temp=Celcius(temp);
//         document.getElementById('result').innerHTML=temp + '0';
//     }else if(document.getElementById('fbutton').checked){
//         temp=document.getElementById('inputtemp').value;
//         temp=Number(temp);
//         temp=Fahrenheit(temp);
//         document.getElementById('result').innerHTML=temp+'F';
//     }else{
//         document.getElementById('result').innerHTML='please select option';
//     }



// }



// function Celcius(temp){
//     return (temp-32)*(5/9);
// }
// function Fahrenheit(temp){
//     return temp * 9/5 + 32;
// }


// let ex=['apple', 'orange', 'banana',-1,'43',true,-34]
// fruits.push('appl');
// fruits.pop()
// fruits.unshift('adi');
// // fruits.shift();
// length=fruits.length;
// index=fruits.indexOf('adi');
// console.log(fruits)

// for (i=0;i<ex.length;i++){
//     console.log(ex[i]);
// }
// for(i=ex.length-1;i>=0;i--){
//     console.log(ex[i])

// }
// ex=ex.sort().reverse();
// for(let price of ex){
//     console.log(price);
// }

// numbers=[12,33,45]
// words=['sdsd','Sd','wrr','eri']
// char=['#','%','&']

// // console.log(words)

// all=[numbers,words,char]
// all[0][1]='wewwewe'
// // console.log(all)

// for(let list of all){
//     for(let il of list){
//         console.log(il)
//     }

// }
// let arr=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
// let userName="adi i kesavulu mitnala";
// let maxi=Math.max(...arr)
// console.log(userName.split(''))
// // console.log(maxi)

// let count=1;
// let countt=1;
// document.getElementById("hello").onclick=function(){
//     alert('thisis an h2 tag'+count);
//     count+=1;
// }
// let o=document.getElementById("one").onclick=function(){
// //     document.getElementById('inputbox').innerHTML=o;
// // }
// let one = document.getElementById("one");
// one.onclick = function() {
//     console.log(one.innerHTML)
//     document.getElementById('inputbox').value=one.innerHTML; // or use one.innerText
// };
// let two = document.getElementById("two");
// two.onclick = function() {
//     console.log(two.innerHTML)
//     document.getElementById('inputbox').value=two.innerHTML; // or use one.innerText
// };
// let sum = document.getElementById("do");
// sum.onclick = function() {
   
//     document.getElementById('inputbox').value=two.innerHTML; // or use one.innerText
// };

// let a=1;
// let b=2;
// let c=3
// let d=4;

// console.log(sum(a,b,c,d));

// function sum(...numbers) {
//     let total=0;
//     for(let numbr of numbers){
//         total+=numbr
//     }
//     return total

// }
// total=sum(a,b,disdom,discon);
// function sum(a,b,callback,callBack){
//     let result = a+b;
//     callback(result);
//     callBack(result)
// }
// function disdom(output){
//     document.getElementById('mylabel').innerHTML=output
// }
// function discon(output){
//     console.log(output)
// }

// let students=['adi','kesavulu','mitnala']
// students.forEach(capitalize);
// function capitalize(element,index,array){
//     array[index]=element[0].toUpperCase()+element.substring(1);
// }
// console.log(students[0])

// for (let name of students){
//     console.log(name.substring(1))
// }
// console.log(typeof students);
// console.log(Array.isArray(students));

// document.write(2+3==5?`yes correct`:`no its not correct${students[2]}`);

// let boy=confirm("Are you a boy?");
// if(boy){
//     let name=prompt("enter your name man");
//     document.write(`welcome${name}`);
// }else{
//     let name=prompt("enter your name");
//     document.write(`welcome madam ${name}`);
// }
// function pro(){
//     for(var i=0;i<students.length;i++){
//         document.write(i+` ${students[i]}<br>`);
//     }
// }
// pro();
// let arr={
//     name:'hola hola',
//     age:'24',
//     location:"darsi",
//     obj:{
//         dist:'prakasam',
//         state:'ongole',
//     }
// }
// console.log(arr.location)
// console.log(arr.obj.dist)
// let g=parseInt(arr.age)
// console.log(typeof arr.obj)



// let age=prompt('enter age of a boy')
// let pa=parseInt(age)
// switch(true){
//     case pa<=18:
//         document.write(`you are a child`)
//     break;
//     case pa>19 && pa<=28:
//         document.write(`you are goint to be married soon`)
//     break;
//     case pa>29 && pa<50:
//         document.write(`you are a old man dont playgames`)
//         break;
//     case pa>51 && pa<75:
//         document.write(`you are in last stage lets enjoy it`)
//         break;
//     case pa>76 && pa<150:
//         document.write(`<h1>you are god</h1>`)
//         break;
//     default:
//         document.write('please enter age below  150 years')
//         break;

// }




// var a=function apple(){
//     document.write('this is an apple ');
// }

// a();
// var count;
// function add(a,b){
    
//     return count=a+b;
    
// }
// document.write(add(10,10),count);

// let userName=prompt('enter your username please')
// let usesefName;
// function greet(name){
//     return document.write(`<h1>Hi Welcome ${name}</h1>`)
// }

// greet(usesefName);

// let a=Number(prompt("enter number"))
// let b=Number(prompt('enter b number'))

// function add(a,b){
//     return document.write(`the sum is ${a} + ${b} is ` , a-b)
// }

// add(a,b);


// let height=Number(prompt('enter height of a triangle'))
// let base=Number(prompt('enter base of a triangle'))

// function area(height,base){
//     return document.write(`the area of a triangle is `,0.5*(height*base))
// }

// area(height,base);


// let num=parseInt(prompt(`enter number`))

// function evenOdd(num){
//     if (num%2==0){
//         return document.write('this is a even number');
//     }else if(num%2==1){
//         return document.write('this is odd');
//     }else{
//         return document.write('enter number mannnnn')
//     }
// }


// evenOdd(num);



// let num1=Number(prompt('enter num1'))
// let num2=Number(prompt('enter num2'))
// let num3=Number(prompt('enter num3'))


// function maximum(num1,num2,num3){
//     if(num1 > num2 && num1>num3){
//         return document.write(`<h1>${num1}</h1> is maximum number`)
//     }else if(num2 > num1 && num2>num3){
//         return document.write(`<h1>${num2}</h1> is maximum number`)
//     }else{
//         return document.write(`<h1>${num3}</h1> is maximum number`)
//     }
// }


// maximum(num1,num2,num3);


// let word=prompt('enter string');

// function rev(word){
//     let ss='';
//     for (let i=word.length-1;i>=0;i--){
//         ss+=word[i];
        
//     }
//     return document.write(ss);
    
  
// }


// rev(word);



// let num=Number(prompt('enter a number'))

// function fact(num){
//     let result=1;
//     for(let i=1;i<=num;i++){
//         result*=i;
        
//     }
//     return document.write(result);
// }

// fact(num);

// let num=Number(prompt('enter number'))

// function temp(num){
//     let result;
//     result=(num*(9/5)+32)
//     return document.write(result);
// }

// temp(num);


// let str=prompt('enter string')

// function pali(stre){
//     let result=''
//     for(let i=str.length-1;i>=0;i--){
//         result+=str[i]
       
//     }
//     if(result===str){
//         return document.write('the given string is polindrome')
//     }else{
//         return document.write('its not polindrome')
//     }
// }


// pali(str)


// let base=parseInt(prompt('enter base'))
// let exponent=parseInt(prompt('enter exponent'))


// function power(base, exponent){
//     return document.write(base** exponent)
// }

// power(base, exponent)



// let array=prompt('enter array')
// let target=prompt('enter target value')
// var count=0;
// function occur(array,target){
//     for(let i=0;i<array.length-1;i++){
        
//         if(array[i]==target){
//             count+=1;
//         }
        
//     }
//     document.write('array is ',array)
//     document.write(`total occurance of ${target} is`+count)
// }


// occur(array,target);



// let arr1=['1', '2']
// let arr2=['world','are','you']
// let result=arr1.concat(arr2).splice(0,1,'adi')
// document.write(result)
// document.write(result.join('/'));
// document.write(result.slice(0,3)+'<br>')
// document.write(result.splice(0,1,'dsfsdfsdf'))

// let num=[4,45,4,54,544,48,8,84,848,48,48,484]
// // let res=num.splice(4,2,'sdsd')
// let res=num.splice(0,0,'add')
// document.write(res+'</br>')
// document.write(num)

// let names=['adi','anil','chaitu','chenna','lakshmi','narasamma','lingaiah']

// // document.write(names.indexOf('chaitu'))

// names.forEach(function(name){
//     document.write(name+'<br>')
// })


// let x=10;

// while(x>=0){
//     document.write(x+'<br>')
//     x--;
// }
// var intrest=2

// document.getElementById('total').onclick=function(){
//     document.body.color='red';
//     var adi=document.getElementById('adilabel').innerHTML=document.getElementById('adimoney').value;
//     var anil=document.getElementById('anillabel').innerHTML=document.getElementById('anilmoney').value;
//     var chaitu=document.getElementById('chaitulabel').innerHTML=document.getElementById('chaitumoney').value;
//     document.write(`the money of adi is   ${adi}`+'<br>');
//     document.write(`the money of anil is  ${anil}`+'<br>');
//     document.write(`the money of chaitu is   ${chaitu}`);
//     function addintrest(intrest){
//         return document.write('adi intrest is ',adi*(intrest/100) +'<br>') + document.write('anil intrest is ', anil*(intrest/100) +'<br>') + document.write(`chaitu intrest is `, chaitu*(intrest/100) )
//   }
//   addintrest(intrest)
    
// }

// document.getElementById('submit').onclick = function(){
//     var money=document.getElementById('totalMoney').value;
//     var intrest=document.getElementById('intrest').value/100;
//     var time=document.getElementById('time').value;

//     function calcintrest(money,intrest,time){
//         var getto=(intrest*100)/(money*time);
//         return document.write(`total amount with intrest is <h1>${getto}</h1>`)
//     }
//     calcintrest(money,intrest,time);
// }

// var num=[1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9]
// var rnum=[]
// function q(){
// for(i=0;i<num.length;i++){
//     if(i%2==1){
//         rnum+=num[i]
//     }
   
    
// }
// return document.write(rnum)
// }
// q();

// var a=document.querySelector("#h1tag").style.backgroundColor='red';
// a.setAttribute('style','color:red;border:20px solid black;')


// function singleclick(){
//     document.querySelector('#h1tag').style.backgroundColor='black';
//     document.querySelector('#h1tag').style.color='white';
// }

// function doubleclick(){
//     document.querySelector('#h1tag').style.backgroundColor='white';
//     document.querySelector('#h1tag').style.color='black';
// }

// function hovin(item){
//     item.style.backgroundColor='red'
// }

// function hovout(item){
//     item.style.backgroundColor='white'
// }
// const log=document.querySelector('#loginbut')

// log.onclick=function(){
//     document.getElementById('loginblock').style.display='block';
//     document.getElementById('h1block').style.display='none';
//     log.style.display='none';
// }
// document.getElementById('closeBtn').addEventListener('click',openLogin)
//     function openLogin(){
//         document.getElementById('loginblock').style.display='none';
//         document.getElementById('h1block').style.display='block';
//         log.style.display='block';
//     }

// const myform=document.getElementById('myForm');
// const userName=document.getElementById('username');
// const names=document.getElementById('name');
// const pass=document.getElementById('pass');

// myform.addEventListener('input',function(e){
//     e.preventDefault();
//     const muusername=userName.value
//     names.textContent=muusername;
   
   
// })

// userName.addEventListener('focus',function(e){
//     e.target.style.border='2px solid red';
// })
// userName.addEventListener('blur',function(e){
//     e.target.style.border='';
// })


// const color=document.getElementById('selection')
// const Box=document.getElementById('box')

// color.addEventListener('change',function(e){
//     // Box.style.backgroundColor=color.value;
//     Box.textContent=color.value
// })

// const Open=document.getElementById('open')

// const Close=document.getElementById('close')
// const box_c=document.getElementById('box')
// // Open.addEventListener('click',function(){
// //     box_c.classList.add('apple')
// //     document.querySelector('.apple').style.display='block'; 
// // })

// Close.addEventListener('click',function(){
//     box_c.classList.toggle('banana');
//     // document.querySelector('.banana').style.display='none';
// })


// const toDate=new Date();
//  toDate.setSeconds(9)
// document.write("<ul>",toDate)

// const ani=setInterval(timer,1000)

// a=0
// function animator(){
//     a=a+1
//     const title=document.querySelector('#text')
//     title.style.fontSize=a+'px'
// }
// const t=new Date();
// function timer(){
//     if(t.length >0){
//         clearInterval(ani)
//     }else{
//         document.write(t)
//     }
    
    

// }

// const changer=setTimeout(function(){
//     const text=document.querySelector('#text')
//     text.style.color='red'
//     text.style.fontSize='14px'
// }, 3000);

// const fun=(a,b)=>{
//     document.write('hlo adi',a+b)
// }
// fun(10,20)
// let a=[1,2,3,4,5,6,7,65]

// for(let o of a){
//     document.write(o+1,'<br>')
// }

// let a={
//     name:'adi',
//     age:20,
//     city:'darsi'
// }

// for(let i in a){
//     document.write(a[i],'<br>')
// }
// let result=0
// function spread(name,...coll){
//     for(let i in coll){
//         result+=coll[i]
//     }
//     document.write(name,result)
// }

// spread('adi',1,23,34)

// const nameers=[3,4,5]
// let actres=['savithri','megana','latha']

// let a=[...names,...actres]
// document.write(a)

// const [one,two,three] = nameers

// document.write(three)


// const namsdffes={
//     fname:'adi',
//     lname:'mitnala'
// }


// const {fname,lname} = namsdffes
// document.write(fname)

// console.log('1')
// console.log('2')
// console.log('3')
// setTimeout(()=>{
//     console.log('4')
// },5000)
// console.log('5')


// const welcome=()=>{
//     setTimeout(()=>{
//         console.log('welcome')
       
//     },2000)
// }

// const Register=(adi)=>{
//     setTimeout(()=>{
//         console.log('please register')
//         adi()
//     },3000)
// }



// const Thank=()=>{
//     setTimeout(()=>{
//         document.write('<h1>Hello Welcome to your DashBoards</h1>')
//     },6000)
// }

// welcome()
// Register(function(){
//     Login(function(){
//         Thank()
//     })
// })
// const Login=()=>{
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log('Please Login')
//             resolve('login')
//         },1000)
//     })
  
// }
// const Register=()=>{
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log('Please register')
//             resolve('successfully registered code')
//         },3000)
//     })
// }
// const Thank=()=>{
//     new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             document.write('<h1>Hello Welcome to your DashBoards</h1>')
//             resolve('thanks')
//         },1000)
       
//     })
    
// }
// Register().then(Login).then(Thank)



// const getDate=new Date();
// if(getDate.getDay()==4){
// document.write('Today is Tuesday')
// }else{
//     document.write('Today is :something')
// }

// const today = new Date();
// const dayName = today.toLocaleDateString('en-US', { weekday: 'long' });
// document.write(`Today is ${dayName}<br>`);
// document.write(`Time is ${today.getHours()} PM: ${today.getMinutes()} : ${today.getSeconds()}`);


// function getwin(){
//     window.print()
// }


// var date=new Date();

// var year=date.getFullYear();
// var month=date.getMonth()+1;
// var dat=date.getDate();

// document.write(`${month} - ${dat} - ${year} <br>or ${month} / ${dat} / ${year}`)




// inputText.addEventListener('submit',function(){
//     var inputText=document.getElementById('tinput').value;
//     for(var i=inputText.length-1;i>0;i--){
//         document.write(inputText[i])
//     }
// })

// function reverse(){
//     let text=document.getElementById('tinput').value;
//     let rever=text.split('').reverse().join('');
//     document.getElementById('result').textContent=rever

// }

// reverse()

// function reverse(){
//     let text=document.getElementById('tinput').value;
//     let result='';
//     for(let i=text.length-1;i>=0;i--){
//         result+=text[i]
//     }
//     document.getElementById('result').textContent=result
// }
// function upper1(a){
//     return a.charAt(0).toUpperCase()+a.slice(1).toLowerCase()
// }
// function upper(){
//     let text=document.getElementById('tinput').value;
//     // let result=text.toUpperCase();
//     let result=text.split(' ')
//     let string=result.map(upper1)
//     let output=string.join(' ')
//     document.getElementById('result').textContent=output
// }

// function palindrome(){
//     let text=document.getElementById('tinput').value;
//     let result=text.split('').reverse(' ').join('');
//     let outcome=document.getElementById('result');
//     console.log(result)
//     if(result==text){
//         outcome.textContent=result+'yes'
//     }else{
//         outcome.textContent=result+'not palindrome'
//     }
// }

// const colorButton=document.getElementById('changeColor')

// colorButton.addEventListener('click',()=>{
//     const randomColor=getRandomcolor()
//     document.body.style.backgroundColor=randomColor
// })

// function getRandomcolor(){
//     const letters="0123456789ABCDEF"
//     let color='#'
//     for(let i=0;i<6;i++){
//         color+=letters[Math.floor(Math.random()*12)]
//         console.log(color)
//     }
//     return color

// }


// const button=document.getElementById('button');
// function checkleapyear(){
//     const year=document.getElementById('inputnumber').value;
//     console.log(year)
//     let output=document.getElementById('result')
   
//     return output.textContent = (year %100 ===0)?(year %400 ===0):(year % 4===0);
     
// }


// const maps=new Map(
//     // [
//     //     ["a",2012],
//     //     ['b','2000']
//     // ]
//    [ ['a','sdd']]
// )
// console.log(maps)
// console.log(maps.set('name1','anil'))
// console.log(maps.has('namee'))
// console.log(parseInt(maps.get('a'))+parseInt(maps.get('b')))



// maps.forEach(function(key,value){
//     console.log(key,value)
// })

// let welcome=(...a)=>{
//     console.log('welcome'+a)
// }

// welcome('adikesavulu','hlooo','weawer',23456)

// let hello=(a)=>{
//     document.getElementById('result').innerHTML+=this;
// }


// window.addEventListener('load',hello('adikesavulu'))


// setInterval(getTime,1000)

// function getTime(){
//     var time=new Date()
//     document.getElementById('result').innerHTML=time.toLocaleTimeString()
// }


// let date=new Date()
// date.setFullYear(2014)

// let setYear1=date.toLocaleDateString()+'<br>'
// date.setFullYear(2050)
// let setYear2=date.toLocaleDateString()
// document.write(setYear1,setYear2)

 

// for(let year=2023;year<=2050;year++){
//     var d=new Date(year,0,1)
//     document.write(d.toLocaleString(),'<br>')
//     if(d.getDay()===0){
//         document.write(year,'is sunday'+'<br>')
//     }
// }
// var days=['Sunday', 'Monday', 'Tuesday','Wednesday','Thursday','Friday','Saturday']
// var d=new Date(2024,0,1);
// for(i=0;i<7;i++){
//     let day=days[d.getDay()]
//     document.write(d.toLocaleString(),'<br>'+ day)
//     date.setDate(date.getDate() + 1);
// }

// let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

// // Start with the first day of the specified year and month
// let date = new Date(2023, 0, 14); // Year 2024, January (month 0)
// let birthday=new Date(0,5,30)
// console.log(birthday.toLocaleDateString())
// for (let i = 0; i < 7; i++) {
//   let day = days[date.getDay()]; // Get the actual day of the week
//   let getBitrhMonth=birthday.getDate()&& birthday.getMonth()
//   let celeb=(getBitrhMonth-birthday)
//   console.log(celeb)
//   document.write(date.toLocaleDateString(), day,'<br>');
//   if(date.getDate()===birthday){
//     document.write('happy birthday to u')
//   }else{
//     document.write(celeb.toLocaleDateString())
//   }
//   date.setDate(date.getDate() + 1); // Advance to the next day
// }

// let a=new Date()
// let b=new Date(2000,3,5) // convert
// let c=(a-b)// convert
// document.write(c)

// const birthday = new Date(1999, 11, 22);
// console.log(birthday)
// const today = new Date();

// Calculate the days remaining in the current year
// const daysThisYear = new Date(today.getFullYear(), 11, 31) - today;
// const daysRemaining = (daysThisYear + (birthday - new Date(today.getFullYear() + 1, 5, 30))) / (1000 * 60 * 60 * 24);

// Display message based on the corrected calculation
// if (daysRemaining > 0) {
//   document.write(`There are ${Math.floor(daysRemaining)} days until your birthday! `);
// } else if (daysRemaining === 0) {
//   document.write(`Happy Birthday! `);
// } else {
//   document.write(`It looks like you've already celebrated your birthday this year!`);
// }

// console.log('hello')


// let but=document.getElementById('button');
// let result=document.getElementById('label')



// but.addEventListener('click',checkRandom)

// function checkRandom() {
//     let inp=document.getElementById('input').value;
//     let random=Math.floor(Math.random()*2);
//     console.log(inp);
//     if(random===inp){
//         result.textContent="yes correct"
//     }else{
//         result.textContent=" try again"
//     }
// }

// let inp=Number(prompt('enter number only'))
// let random=Math.floor(Math.random()*3);
// if(inp===random){
//     document.write('correct')
// }else{
//     document.write('not correct')
// }
// let currentDay=new Date()
// let christmas=new Date(0,11,24)
// let countChri=currentDay-christmas
// console.log(countChri.toString()/86400)


// // Get the current date
// today = new Date();
// console.log(today.getTime())

// // Create a Date object for Christmas of the current year
// var cmas = new Date(today.getFullYear(), 11, 25);
// console.log(cmas.toString())
// // Check if the current date is after December 25th
// if (today.getMonth() == 11 && today.getDate() > 25) {
//     // If true, set Christmas for the next year
//     cmas.setFullYear(cmas.getFullYear() + 1);
// }  

// // Calculate the difference in days between today and Christmas
// var one_day = 1000 * 60 * 60 * 24;
// console.log(cmas.getTime()- today.getTime())
// // Log the number of days left until Christmas to the console
// console.log(Math.ceil((cmas.getTime() - today.getTime()) / (one_day)) +
//     " days left until Christmas!"); 


// let jan=new Date()
// console.log(jan.getHours())
// let jan1=new Date(2023,11,28)
// console.log(jan1.getHours())
// // console.log(((jan1.getTime()-jan.getTime())/86400000))

// let d=new Date()
// let currentHour=d.getHours()
// let currentMinute=d.getMinutes()
// let currentSecond=d.getSeconds()

// let getTime=function(){
//     document.write(`${currentHour} ${currentMinute} ${currentSecond}`)
// }

// setTimeout(1000, getTime);

// getTime();

// let a='m adi kesavulu'
// console.log(a[0])
// let result=a.charAt(0).toUpperCase()+a.substring(1)
// console.log(result)


// d=new Date()
// console.log(d)
// r=Date.now()//get time in seconds
// console.log(r)
// console.log(d/r)
// x=Intl.DateTimeFormat('en-US').format(d)
// x=Array.from('adi')
// x=new Array()
// document.write(x)
// console.log(x)

// const firstName='adi'
// const lastName='kesavulu'
// const email='m.adi@gmailcom'

// const person={
//     firstName,
//     lastName,
//     email
// }

// console.log(person.email)

// const todo = {
//     id: 1,
//     name: 'adik',
//     skills: {
//         1: 'js',
//         2: 'python',
//         3: 'css',
//         4: 'html',
//     },
// };

// const { id, skills: skillsObject } = todo;

// console.log(skillsObject);
// let arr=[1,12,3,3,444]
// const [a,b,...rest]=arr
// console.log(rest[0])


// const Obj={
//     id:1,
//     name:'adikesavulu',
//     age:23,
//     mobile:9704153130,
// }
// console.log(Obj)

// let json=JSON.stringify(Obj)

// console.log(json)
// let toObj=JSON.parse(json)
// console.log(toObj)
// document.addEventListener('DOMContentLoaded', function () {
//     const appContainer = document.getElementById('app-container');

//     appContainer.addEventListener('click', function () {
//         // Toggle the 'black-and-white' class on click
//         appContainer.classList.toggle('black-and-white');
//     });
// });


let button = document.querySelector('.add');
let buttonmul = document.querySelector('.multiply');

let result= document.querySelector('.Result')

button.addEventListener('click', function () {
    let num1=parseInt(document.querySelector('.num1').value);
console.log(num1);
let num2=parseInt(document.querySelector('.num2').value);
    r=num1+num2;
    result.textContent=r;
})
buttonmul.addEventListener('click', function () {
    let num1=parseInt(document.querySelector('.num1').value);
console.log(num1);
let num2=parseInt(document.querySelector('.num2').value);
    r=num1*num2;
    result.textContent=r;
})


