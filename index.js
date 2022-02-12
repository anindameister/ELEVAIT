let noOfDocs=document.getElementById("noOfDocs");
let innerHtmlString=`${noOfDocs.innerHTML}`;
innerHtmlString=innerHtmlString+1;

noOfDocs.innerHTML=innerHtmlString; //putting the value in the innerHTML of the element

let ToBeRepeatedID0=document.getElementById("ToBeRepeated0")

let ToBeRepeatedID=document.getElementsByClassName("ToBeRepeated")

//create another div with same class name
let newDiv=document.createElement("div");
newDiv.className="ToBeRepeated foo";
//the new div should have the style top exactly 10 units more than the previous div, that's the idea
newDiv.style.top=`${parseInt(ToBeRepeatedID[0].style.top)+10}%`;

//append the new div to the div with id: usedToAppend
let usedToAppend=document.getElementById("usedToAppend");

newDiv.innerHTML=`<button class="arrow-right"></button>`;

usedToAppend.appendChild(newDiv);

//div2
let newDiv2=document.createElement("div");
newDiv2.className="ToBeRepeated foo";
//the new div should have the style top exactly 10 units more than the PREVIOUS div, that's the idea
newDiv2.style.top=`${parseInt(ToBeRepeatedID[0].style.top)+20}%`;

//append the new div to the div with id: usedToAppend
let usedToAppend2=document.getElementById("usedToAppend");

newDiv2.innerHTML=`<button class="arrow-right"></button>`;

usedToAppend2.appendChild(newDiv2);





