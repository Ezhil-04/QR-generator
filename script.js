

let inputtext=document.getElementById("inputtext")
let qrcontainer=document.getElementById("qrcontainer")
let qrimg=document.getElementById("qrimg")

function getcode(){
    let imgsrc=qrimg.getAttribute("src");


        let inputval=inputtext.value;
        if(inputval){
            if(imgsrc){
                qrimg.src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="+inputval;
                qrimg.onload = ()=>{ qrcontainer.classList.add("newqr");
                setTimeout(()=>{
                    qrcontainer.classList.remove("newqr");
                },300)}
               
               
            }
            else{
            qrimg.src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="+inputval;

        setTimeout(()=>{qrcontainer.classList.add("openqr");},1000)
            }
     
        }
        else{
            inputtext.classList.add("shake");
           
            setTimeout(()=>{
                inputtext.classList.remove("shake");
            },300)
        }

    }
    

   

