
// ELEMANLARI SEÇİYORUZ

const inputDiv = document.querySelector(".inputDiv");
const input = document.querySelector("input");
const button = document.querySelector("button");
const contentDiv = document.querySelector(".contentDiv");


// BUTON İÇİN FONKSİYON OLUŞTURDUK 
let calculate = 0;
button.addEventListener("click",go); 
input.addEventListener("keyup",function(e){
    if(e.keyCode == 13){
        go();
    }
})

function go(){
    if(input.value != ""){
        calculate++;
        let paragraf = document.createElement("p");
        let deleteButon = document.createElement("div");
        let finishButon = document.createElement("div");
        finishButon.classList.add("finishButon");
        deleteButon.classList.add("deleteButon");
        deleteButon.innerText = "-";
        finishButon.innerText = "+" ;
        paragraf.innerText = calculate + "-)" + " " + input.value;
        contentDiv.appendChild(paragraf);
        input.value = "";
        paragraf.appendChild(deleteButon);
        paragraf.appendChild(finishButon);

        deleteButon.addEventListener("click",function(){
            calculate --;
            contentDiv.removeChild(paragraf);
        });

        finishButon.addEventListener("click",function(){
            paragraf.classList.toggle("liner")  // 
        })
    }
}