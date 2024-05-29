
// Variables
// console.log('hello World');

// let name="Abdulah"
// console.log("name");
// name="rafique";
// console.log(name);

//  let nmbr =12
//   console.log(nmbr, typeof nmbr);

// let n="22";
// console.log(n,typeof n);

// let floatn=3.14;
// console.log(floatn,typeof floatn);

// let speed=3e8;
// console.log(speed,typeof speed);

// Boolean

// let game=true;
// console.log(game,typeof game);

//character

// let character='c';
// console.log(character,typeof character);



//       conditions if & else-if 

// let nn='asad';
// if(/*condition  */ nn=='saad' ){
// console.log('true');
// }

// //print false

// else{
//     console.log('false');
// }

// let age=9;
// if(/*condition  */ age>=18 ){
// console.log('you are 18 or 18 above');
// }

// else if(age<18 && age >=10){
//     console.log('you are less than 18 ');
// }
// else{
//     console.log('you are less than 10');
// }

// let grade='c';
// if(/*condition  */ grade=='A' ){
// console.log('your grade is A');
// }

// else if(grade=='B'){
//     console.log('your grade is B ');
// }
// else{
//     console.log('you are just pass');
// }

//           cases


// let cas='morning';
// switch(cas){
//     case 'morning':
//         console.log('morning');
//         break;
//     case 'afternoon':
//         console.log('afternoon');
//         break;

//     default:
//         console.log('night');
//         break;

// }

//                Arrays

// let arr=["Asad" ,45 ,3.14];
// console.log(arr,typeof arr);
// console.log("At array index 0 is ",arr[0],);
// console.log("At array index 1 is ",arr[1]);
// console.log("At array index 2 is ",arr[2]);

//      structures /object 

// let struc ={
//     name:"Abdullah",
//     //not start with zero they shows change value
// phone:123456,
// phonenm:"0345-2346567",
// email:"kjjkh@j.com",

// }

// console.log(struc,typeof struc); // they show object
// console.log(struc.name,typeof struc.name);  //they show string
// console.log(struc.phonenm,typeof struc.phonenm);
// console.log(struc.email,typeof struc.email);

// struc.age=19;    if want to add in object
// console.log(struc,typeof struc); // they show object

// struc.name='asad';  if want to update in anything





//           operators

// let na='Abdullah';  // called assignment operators 

           // Arithmatic opertors

// let n ,b,c,d;
// n=5,b=6,c=8,d=3;
// let sum,mul,divi,sub,power, modulus;

// sum=n+b;
// sub=c-n;
// divi=c/d;
// mul=n*d;
// power=d**d;
// modulus=c%d;
// console.log("Sum of n and b is ",sum, typeof sum);
// console.log("Sub of c and n is ",sub, typeof sub);
// console.log("Mul of n and d is ",mul, typeof mul);
// console.log("Divi of c and d is ",divi, typeof divi);
// console.log("power of d and d is ",power, typeof power); //27
// console.log("Modulus of b and d is ",modulus, typeof modulus);  
// //remainder of 8 & 3 is 2
// console.log(`power : ${power}`); //27  use left comma in esc 


          // Answers

// Sum of n and b is  11 number
// Sub of c and n is  3 number
// Mul of n and d is  15 number
// Divi of b and d is  2 number

// answers of 8/3 is
//Divi of c and d is  2.6666666666666665 number




//          Uniary operators

// let num1=4;
 
// console.log(num1); //print 4
// console.log(++num1); //print 5 bcuz first +then print
// console.log(num1++);  //print 5 bcuz first print then plus
// console.log(num1);  //print 6 last number 

// let num2=8;
 
// console.log(num2); //print 8
// console.log(--num2); //print 7 bcuz first - then print
// console.log(num2--);  //print 7 bcuz first print then sub
// console.log(num2);  //print 6 last number 



//          Assignment operators


// let num=9;
// num+=3;    //=  12 is same as num=num=+3
// console.log(num);

// num-=3;    //=  9 bcuz last nmbr is now 12 is same as num=num=-3
// console.log(num);

// num*=3;    //=  27 is same as num=num=*3
// console.log(num);

// num/=3;    //=  9 is same as num=num=/3
// console.log(num);



// let a='ASAD'
// let b=34
// console.log(a+b ,typeof a+b)
//        ASAD34 string34



//          comparison operators

// comparision operators are ==  ,  <= , !=  
 //  logical operatps are  &&   ,  !   ,||
// let num1=12 ,num2=20;

// if(num1<=num2){
//     console.log('passed')
// }
// console.log(num1<=num2)  //true
//    passed

let percentage=80;
let shortattendence=false;

//console.log(shortattendence===false && percentage<=80)
//console.log(shortattendence==false && percentage<=80)

// if(shortattendence===false && percentage<=80){
//     console.log('Eligible')
// }
// else{
//     console.log('Not Eligible')
// }

// false
// Not Eligible
//true
//Eligible


// if(!shortattendence && percentage<=80){
//     console.log('Eligible')
// }
// else{
//     console.log('Not Eligible')
// }



//            loops


// for(let i=0;i<5 ;i++ ){
//     console.log(i);
// }


// let oddnumbers=[1,3,5,7,9]

// for(let i=0;i<5;i++){
//     console.log(oddnumbers[i])
// }

//    //         forin loop
   
// let evennumbers=[2,4,6,8,10]

// for(let i in evennumbers){
//     console.log(evennumbers[i])
// }


 //         forof loop
   
//  let evennumbers=[2,4,6,8,10]

//  for(let i of evennumbers){
//      console.log(i)
//  }


//           //     forin loop in objects/ structures

// let person={
// name:'asad',
// email:'asas@gmail',
// phonenumber:123456,
// }

// for (let i in person){
//     console.log(person[i])
// }


 //     forof loop in objects/ structures

//  let person={
//     name:'asad',
//     email:'asas@gmail',
//     phonenumber:123456,
//     }
    
//     for (let i of person){
//         console.log(i)
//     }         object doesn't run on forof loops
    


//  object class

// Object.entries(person);


            // While loop


// let numbers=[1,2,3,4,5];

// let i=0;

// while(i<5){
// console.log('Index',i,numbers[i]);
// i++;
// }


          // DO While

// let number=[2,4,6,8];

// let i=0;

// do{
// console.log(number[i])
// i++;
// }while(i<4);



            // Functions


// function add(){
//     let num1=10;
//     let num2=20;
//     console.log('sum is :',num1+num2);
// }

// add();


// function add(){
//     let num1=10;
//     let num2=20;
//     return  num1+num2;
// }

// console.log('sum  :',add())


       // parameteres
    
// function add(num1,num2){
   
//     return  num1+num2;
// }

// console.log('sum  :',add(10,20))
// console.log('sum  :',add(15,25))
// console.log('sum  :',add(25,35))



//   const add=(num1,num2)=>{
   
//         return  num1+num2;
//     }
    
//     console.log('sum  :',add(10,20))
//     console.log('sum  :',add(15,25))
//     console.log('sum  :',add(25,35))



        // Classes And Methods
    

// class person{
//     constructor(name,birthyear){
//         this.name=name;
//         this.birthyear=birthyear;
//     }


// getCurrentAge(){
// return new Date().getFullYear()-this.birthyear;
// }

// }

// const person1=new person('Abdullah',2003);
// console.log(person1.name);
// console.log(person1.birthyear);
// console.log(person1.getCurrentAge());


// const person2=new person('Asad',2002);
// console.log(person2.name);
// console.log(person2.birthyear);
// console.log(person2.getCurrentAge());


class employee extends person{
    constructor(name,birthyear,salary){
super(name,birthyear);
this.salary=salary;
    }
    getFullSalary(){
        return this.salary + (this.salary*0.2);
    }
}


const emp1=new employee('Abdullah',2003,20000);
console.log(emp1.name);
console.log(emp1.birthyear);
console.log(emp1.salary);
console.log(emp1.getFullSalary());


