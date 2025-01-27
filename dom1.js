// let x=document.createElement("h1");
// x.innerHTML="hello JS";
// // x.id="demo"
// x.setAttribute("id","demo");
// document.body.appendChild(x);
// console.log(x);

// let image=document.createElement("img");
// image.src="./images/burger1.png";
// console.log(image);

// document.body.appendChild(image);

// let form = document.querySelector("form");
// let name = document.getElementById("uName");
// let mail = document.getElementById("uEmail");
// let psw = document.getElementById("uPsw");

// form.addEventListener("submit",(event)=>{
//     event.preventDefault();
        // console.log(event);
        // console.log("form submitted");
        // console.log(name.value);

//     let username = name.value;
//     let email = mail.value;
//     let password = psw.value;
//     let userDetails={
//         username:username,
//         email:email,
//         password:password
//     }
//     console.log(userDetails);
//     localStorage.setItem("userData" , JSON.stringify(userDetails))
// })

// localStorage.clear()

//!assignment dynamic html of js
// const mainBlock = document.createElement("div");
// mainBlock.className = "mainBlock";

// const topBlock = document.createElement("div");
// topBlock.className = "topBlock";

// const img = document.createElement("img");
// img.src = "./images/burger1.png"; 
// img.width="300"
// img.height="300"
// topBlock.appendChild(img);

// const bottomBlock = document.createElement("div");
// bottomBlock.className = "bottomBlock";

// const heading = document.createElement("h1");
// heading.textContent = "Heading";
// bottomBlock.appendChild(heading);

// const button = document.createElement("button");
// button.textContent = "View More";
// bottomBlock.appendChild(button);

// mainBlock.appendChild(topBlock);
// mainBlock.appendChild(bottomBlock);
// document.body.appendChild(mainBlock);

let form=document.querySelector("form");
let username=document.getElementById("uName");
let password =document.getElementById("uPass");
let gen=document.getElementById("gender");
form.addEventListener("submit", event=>{
        event.preventDefault();
        let un = username.value;
        let up = password.value;
        let gender ="";

        for(let i=0;i<=gen.length-1;i++){
                if(gen[i].checked == true){
                        gender += gen[i].value;
                }
        }
        let userDetails={
                un,up,gender
        };
        console.log(userDetails);
})

 