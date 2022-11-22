let userinput=document.getElementById("userinput");
let button=document.getElementById("button");
button.addEventListener("click",()=>{
    if(userinput.value.length>0){
       let ul= document.querySelector("ul");
       let li = document.createElement("li");
       let delbutton = document.createElement("button");
       let text = document.createTextNode("delete");
       delbutton.appendChild(text);

       li.appendChild(document.createTextNode(userinput.value));
    
       li.appendChild(delbutton);
       ul.appendChild(li);
       userinput.value="";

       delbutton.addEventListener("click",()=>{
        delbutton.parentElement.remove();

       });


    }
});
userinput.addEventListener("keypress",(event)=>{
    if(userinput.value.length>0 && event.code==="Enter"){
        let ul= document.querySelector("ul");
        let li = document.createElement("li");
        let delbutton = document.createElement("button");
        let text = document.createTextNode("delete");
        delbutton.appendChild(text);
 
        li.appendChild(document.createTextNode(userinput.value));
     
        li.appendChild(delbutton);
        ul.appendChild(li);
        userinput.value="";
 
        delbutton.addEventListener("click",()=>{
         delbutton.parentElement.remove();
 
        });
 
 
     }

});