function Clear(){
    document.getElementById("islem").childNodes[0].textContent = "";
    
}
function Delete(){
    var string = document.getElementById("islem").childNodes[0].textContent;
    var a = string.split("");
    a.pop();
    document.getElementById("islem").childNodes[0].textContent = a.join(""); 
}
function sayiekle(eleman){
    
    document.getElementById("islem").childNodes[0].textContent  = document.getElementById("islem").childNodes[0].textContent + eleman.childNodes[0].textContent;
    if(localStorage.getItem("sonuc")== "true"){
        document.getElementById("islem").childNodes[0].textContent  = document.getElementById("islem").childNodes[0].textContent ;
        localStorage.setItem("sonuc",false);
    }
}

function formül(xliler){
    if(xliler.childNodes[0].textContent === "1/x" ){
        document.getElementById("islem").childNodes[0].textContent = 1/document.getElementById("islem").childNodes[0].textContent;
    }
    else if(xliler.childNodes[0].textContent === "x²"){
        document.getElementById("islem").childNodes[0].textContent = document.getElementById("islem").childNodes[0].textContent*document.getElementById("islem").childNodes[0].textContent;
    }
    else if(xliler.childNodes[0].textContent === "√x"){
        document.getElementById("islem").childNodes[0].textContent = Math.sqrt(document.getElementById("islem").childNodes[0].textContent);
    }
    else if(xliler.childNodes[0].textContent === "+/-"){
       if (document.getElementById("islem").childNodes[0].textContent.includes("-")){
           document.getElementById("islem").childNodes[0].textContent = document.getElementById("islem").childNodes[0].textContent.substring(1);
           document.getElementById("islem").childNodes[0].textContent = "+" + document.getElementById("islem").childNodes[0].textContent;
       }
       else {
            if(document.getElementById("islem").childNodes[0].textContent.includes("+")){
                document.getElementById("islem").childNodes[0].textContent =  document.getElementById("islem").childNodes[0].textContent.substring(1);
            }
            document.getElementById("islem").childNodes[0].textContent = "-" + document.getElementById("islem").childNodes[0].textContent;
       }
    }
}

function hesapla(){
//    var oncekisonuc = document.getElementById("islem").childNodes[0].textContent ;
    localStorage.setItem("deger",document.getElementById("islem").childNodes[0].textContent);
    localStorage.setItem("sonuc",true); 
    if(localStorage.getItem("toplam")==="true"){
        document.getElementById("islem").childNodes[0].textContent  = eval(localStorage.getItem("deger"));
        
    }
    else if(localStorage.getItem("cikarma")==="true"){
        document.getElementById("islem").childNodes[0].textContent  = eval(localStorage.getItem("deger"));
    }
    else if(localStorage.getItem("bolme")==="true"){
        document.getElementById("islem").childNodes[0].textContent  = eval(localStorage.getItem("deger"));
    }
    else if(localStorage.getItem("carpma")==="true"){
        document.getElementById("islem").childNodes[0].textContent  = eval(localStorage.getItem("deger"));
    }
    else if(localStorage.getItem("mod")==="true"){
        document.getElementById("islem").childNodes[0].textContent  = eval(localStorage.getItem("deger"));
    }
}

function operatör(opteleman){
    if(opteleman.childNodes[0].textContent === "+"  ) {
       
    //     var string = document.getElementById("islem").childNodes[0].textContent;

    // if (string.includes("+")) {
    //     return;
    // }
    // else { 
    //     document.getElementById("islem").childNodes[0].textContent = 
    //     document.getElementById("islem").childNodes[0].textContent + "+";
    document.getElementById("islem").childNodes[0].textContent = document.getElementById("islem").childNodes[0].textContent + "+";
        localStorage.setItem("toplam", true);
        localStorage.setItem("cikarma", false);
        localStorage.setItem("bolme", false);
        localStorage.setItem("carpma", false);
        localStorage.setItem("mod", false);
    //   }
    }
    else if(opteleman.childNodes[0].textContent === "-" ) {
        // var string = document.getElementById("islem").childNodes[0].textContent;
        // if(string.includes("-")) {
        //     return;
        // }
        // else{
        //     document.getElementById("islem").childNodes[0].textContent = 
        // document.getElementById("islem").childNodes[0].textContent + "-";
        
        
        document.getElementById("islem").childNodes[0].textContent = document.getElementById("islem").childNodes[0].textContent + "-";
        localStorage.setItem("cikarma",true);
        localStorage.setItem("toplam",false);
        localStorage.setItem("bolme",false);
        localStorage.setItem("carpma",false);
        localStorage.setItem("mod",false);
    //    }
    }
    else if(opteleman.childNodes[0].textContent === "÷" ) {
        document.getElementById("islem").childNodes[0].textContent = document.getElementById("islem").childNodes[0].textContent + "/";
        localStorage.setItem("cikarma",false);
        localStorage.setItem("toplam",false);
        localStorage.setItem("bolme",true);
        localStorage.setItem("carpma",false);
        localStorage.setItem("mod",false);
    }
    else if(opteleman.childNodes[0].textContent === "x" ) {
        document.getElementById("islem").childNodes[0].textContent = document.getElementById("islem").childNodes[0].textContent + "*";
        localStorage.setItem("cikarma",false);
        localStorage.setItem("toplam",false);
        localStorage.setItem("bolme",false);
        localStorage.setItem("carpma",true);
        localStorage.setItem("mod",false);
    }
    else if(opteleman.childNodes[0].textContent === "%" ) {
        document.getElementById("islem").childNodes[0].textContent = document.getElementById("islem").childNodes[0].textContent + "%";
        localStorage.setItem("cikarma",false);
        localStorage.setItem("toplam",false);
        localStorage.setItem("bolme",false);
        localStorage.setItem("carpma",false);
        localStorage.setItem("mod",true);
    }
    
    
}






