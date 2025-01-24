// !document.getElementById("");

// let element = document.getElementById("demo");
// element.innerText = "DOM";
// console.log(element);

// let div = document.getElementById("test");
// // div.innerText = "<h1>Header</h1>"
// div.innerHTML = "<h1>Header</h1>"
// console.log(div);

// ! document.getElementsByClassName
// let ele = document.getElementsByClassName("test");
// // console.log(ele);
// // console.log(Array.isArray(ele));
// ele[0].style.backgroundColor="yellow"
// // ! spread operator :- it is used to takeout each and every value from the original array and store it in one more new Array(pure array).
// //! synatx :-   [...variable]
// let x = [...ele];
// console.log(x  , Array.isArray(x));
// x.map((element)=>{
//     // console.log(element);
//     element.style.backgroundColor="teal";
// })

// ! document.getElementsByTagName()

// let ele = document.getElementsByTagName("div");
// console.log(ele);

// ! document.getElementsByName()

// let ele = document.getElementsByName("username");
// console.log(ele);
// [...ele].map(element=>{
//     // console.log(element);
//     element.style.backgroundColor="aqua"
// })

//!

// let ele = document.querySelector("#demo");
// console.log(ele);

// let ele = document.querySelector(".test");
// console.log(ele);


// let ele=  document.querySelectorAll(".test");
// // console.log(ele);
// [...ele].map(element=>{
//     console.log(element.innerText);
// })

// ! events
// let btn = document.getElementById("btn");
// // btn.addEventListener("events" , callbackfn)
// btn.addEventListener("click",()=>{
//     console.log("button clicked");
//     document.body.style.background="dodgerblue"
// })

// let btn = document.getElementById("btn");
// btn.addEventListener("dblclick",()=>{
//     console.log("button is clicked 2 times");
// })

// let btn = document.getElementById("btn");
// btn.addEventListener("mouseover" , ()=>{
//     // alert("mouse over done")
//     document.body.style.background="teal"
// })

// btn.addEventListener("mouseleave" , ()=>{
//     // alert("mouse leave done")
//     document.body.style.background="tomato"
// })


// let inp = document.querySelector("#inp");
// inp.addEventListener("keydown",()=>{
//     console.log("key down");
// })

// inp.addEventListener("keyup",()=>{
//     console.log("key up");
// })