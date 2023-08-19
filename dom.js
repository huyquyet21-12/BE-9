// console.log(window.document);

//2.1
// const tagH1 = document.getElementById("tagH1");
// //lay ra phan tu theo ID cos ten la tagH1
// console.log(tagH1);
// tagH1.innerHTML = "Quyet Dep Trai";
// //sua content cua the tagH1

// const tagH3 = document.getElementById("theH3");
// //lay ra phan tu theo ID co ten la theH3;
// console.log(tagH3);
// // setTimeout(()=>{
// //     tagH3.innerHTML="";
// //     // sau 1 khoang thoi gian the h3 se duoc xoa di
// // },3000);
// setTimeout(()=>{
//     tagH3.innerHTML = "Huy Quyet dep trai vcl";
// },5000);
// //sau khi 5s

//2.2

// const listTagH2 = document.getElementsByTagName("h2");
// //lay ra the h2 ben html sang JS
// console.log(listTagH2);
// // for (const list of listTagH2) {
// //     console.log(list);
// //     setTimeout(()=>{
// //         list.classList.add("d-none");
// //         //add them 1 class ten la d-none
// //     },3000)
// // }

// // for (const list of listTagH2) {
// //     setTimeout(()=>{
// //         list.classList.remove("d-none");
// //         //sau 5 s no se xoa di class d-none
// //         //=> nghia la sau 2s khi thuc hien add
// //         //d-none thi no se xoa di va an ra
// //     },5000)
    
// // }
// for (const value of listTagH2) {
//     setTimeout(()=>{
//         value.classList.add("d-color1");
//         //sau 3s them 1 class la d-color1
//     },3000)
    
// }
// for (const value of listTagH2) {
//     setTimeout(()=>{
//         value.classList.remove("d-color1");
//         value.classList.add("d-color2");
//     },5000)
    
// }

// //2.3
// const listH2 = document.getElementsByClassName("title2");
// console.log(listH2);
// for (const value of listH2) {
//     console.log(value);
//     //lay ra nhung the co class ten la "title2"
    
// }

// // 2.4
// const menu3 = 
// document.querySelector("#menu li:nth-child(3) a");
// // lay ra phan tu the the 3 theo CSS
// console.log(menu3);


//2.5
// const menu = 
// document.querySelectorAll("#menu li a");
// console.log(menu);//tra ve 1 mang cac phan tu
// for (const value of menu) {
//     console.log(value);
    
// }

//3.1
// const tagH2 = document.querySelector("#tagTH2");
// console.log(tagH2);
// console.log(tagH2.innerHTML);
// tagH2.innerHTML = "Huy Quyet cao 1m74";

// const divAds = document.querySelector("#ads");
// console.log(divAds);

// setTimeout(()=>{
//     divAds.innerHTML = `
//     <a href="https://www.facebook.com/quyet.quachhuy.9" target="blank">
//     <img src="img.jpg" />
//     </a>
//     `;
//     //sau 5 s se hien len anh va khi gi vao se~ mo ra
//     //1 duong link

// },5000)

//3.2
// const buttonProduct = document.querySelectorAll(".product button")
// // console.log(buttonProduct);
// //lay ra cac phan tu co nut button la con cua id = "product"
// for (const value of buttonProduct) {
//     console.log(value);//in ra gia tri cua button
//     value.onclick = () =>{
//         //lam su kien gi vao se tao ra 1 ham
//         const buttonID = value.getAttribute("product-id");
//         //lay ten cua attribute
//         console.log(buttonID);//in ra ten cua attribute
//     }
    
// }
// const attributeH2 = document.querySelector("h2");
// console.log(attributeH2)
// const attributeH21 = attributeH2.getAttribute("product-id");
// console.log(attributeH21);

//3.3
// const buttonChangeMode = document.querySelector("#change-mode");
// //lay ra phan tu co ten class la change-mode

// buttonChangeMode.onclick = ()=>{
// //them su kien cho phan tu html
// //khi click vao se ra 1 su kien
// const myBody = document.querySelector("body");
// //lay ra phan tu co ten la body
// const mode = myBody.getAttribute("class");// lay ra attribute cua no
// console.log(mode);//in ra ten attribute cua no
// if(mode == "dark"){
//     myBody.setAttribute("class","");
   
// }else{
//     myBody.setAttribute("class","dark");
    
// }
// }

//=> Ban dau se lay ra the co class ="change-mode" trong HTMl sang JS
//=>Them su kien khi click vao the HTMl=>function
//=>Lay ra the co ten la body trong HTMl
//=>lay ra ten Attribute cua the body
//=>neu ten Attribute la "dark" = > se xoa di
//=>neu ten Attribute la ""=>se them vao la dark

//Ban dau the body da co class la dark
//=>khi click vao nut button se xoa di class =>xoa di css cua no
//khi click vao nut Sang/Toi


// //3.4 set Attribute va cookie
// function setCookie(cname, cvalue, exdays) {
//     var d = new Date();
//     d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
//     var expires = "expires=" + d.toUTCString();
//     document.cookie = cname + "=" + cvalue + "; " + expires;
// }
// function getCookie(cname) {
//     var name = cname + "=";
//     var ca = document.cookie.split(";");
//     for (var i = 0; i < ca.length; i++) {
//     var c = ca[i];
//     while (c.charAt(0) == " ") {
//     c = c.substring(1);
//     }
//     if (c.indexOf(name) == 0) {
//     return c.substring(name.length, c.length);
//     }
//     }
//     return "";
//     }

//     const currentMode = getCookie("mode");
//     //lay ra bien mode(name) trong cookie
//     const myBody = document.querySelector("body");
//     //lay ra the body trong HTML
//     myBody.setAttribute("class",currentMode);
//     //set ten Attribute cua class = value(cua cookie);
//     console.log(currentMode);

//     const buttonChangeMode = document.querySelector("#change-mode");
//     //lay ra phan tu co ten class la change-mode

//     buttonChangeMode.onclick = ()=>{
//     //them su kien cho phan tu html
//     //khi click vao se ra 1 su kien
//     const myBody = document.querySelector("body");
//     //lay ra phan tu co ten la body
//     const mode = myBody.getAttribute("class");// lay ra attribute cua no
//     console.log(mode);//in ra ten attribute cua no
//     if(mode == "dark"){
//         myBody.setAttribute("class","");
//         setCookie("mode","",365)
//     }else{
//         myBody.setAttribute("class","dark");
//         setCookie("mode","dark",365)
//     }
// }
// //=> Moi lan click vao nut button
// //=>neu ten cua Attribute cua body = dark =>
// //=>set lai Attribute cua body co ten la class=""
// //=>set lai cookie cho name :mode -value :""

// //=>neu ten cua Attribute cua body = ""=>
// //=>set la Attribute cua body co ten la class="dark"
// //=>set lai cookie cho name : mode -value :"dark"


//4 DOM CSS : CSS lai 1 phan tu nao do

const tagH2 = document.querySelector(".tagH2");
tagH2.style.color ="green";
tagH2.style.background ="blue";
tagH2.style.paddingTop ="50px";
tagH2.style.paddingBottom = "50px";
tagH2.style.paddingLeft = "10px";

