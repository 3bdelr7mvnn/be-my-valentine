const overlayBox = document.querySelector(".overlayBox")

const border = document.querySelector(".border")
const box = document.querySelector(".box")
const yes = document.querySelector(".yesBtn")
const no= document.querySelector(".noBtn")
const btnsDiv = document.querySelector(".btns")
const line1 = document.querySelector(".line1")
const line2 = document.querySelector(".line2")
const noCountP = document.getElementById("bestNo")
const noScoreP = document.getElementById("noScore")
const all = document.querySelector(".all")
const clickMetxt = document.querySelector("#clickmeBtn")
const opened = document.querySelector(".opened")


let clickTime = 0


if(clickTime === 0){

}
const screenWidth = window.innerWidth



box.addEventListener("click" ,function(){
    if(screenWidth>910){
        overlayBox.style.transform="TranslateY(1128px)"
                    opened.style.transform="TranslateY(800px)"
                    box.style.zIndex= "0"
        }else if(screenWidth<910){
            overlayBox.style.transform="TranslateY(1059px)"
                    opened.style.transform="TranslateY(800px)"
                    box.style.zIndex= "0"
        }
           
           
       
        setTimeout(() => {
            overlayBox.style.display="none" 
            overlayBox.style.display="none" 
            box.style.transform="TranslateY(00px)"   
        }, 1000);
    })
overlayBox.addEventListener("click", function(){

opened.style.display="block"
    if(clickTime === 0){
        setTimeout(() => {
            clickTime++
            overlayBox.style.transition="0s"
            border.style.borderColor="transparent rgb(16, 7, 7) rgb(16, 7, 7) rgb(16, 7, 7)"
           
        }, 1);
        setTimeout(() => {
                  overlayBox.style.transition="3s"
                  opened.style.transition="3s"
                // overlayBox.style.transform="TranslateY(100px)"

                 box.style.transform="TranslateY(-100px)"
        
        opened.style.zIndex="-100"
        box.style.zIndex="0"
        overlayBox.style.zIndex="1"
        
        line1.style.display="none"
        line2.style.display="none"
        clickMetxt.style.display="none"
        }, 2); 
    }else if(clickTime===1){
        

        if(screenWidth>910){
        overlayBox.style.transform="TranslateY(1128px)"
                    opened.style.transform="TranslateY(800px)"
                    box.style.zIndex= "0"
        }else if(screenWidth<910){
            overlayBox.style.transform="TranslateY(1059px)"
                    opened.style.transform="TranslateY(800px)"
                    box.style.zIndex= "0"
        }
           
           
       
        setTimeout(() => {
            overlayBox.style.display="none" 
            overlayBox.style.display="none" 
            box.style.transform="TranslateY(00px)"   
        }, 1000);
    }

    
})


function creatNewNo(left , top){

  
    const noo = document.createElement("button")
    noo.textContent = "Yes"
    noo.style.position="absolute"
     noo.style.left=`${left}%`
     noo.style.top=`${top}%`
     noo.style.zIndex="-1"
    noo.classList.add("yesBtn")
    noo.classList.add("yesFKBtn")
     btnsDiv.appendChild(noo)

noo.addEventListener("click",function(){
    all.classList.add("bgimg");
    box.innerHTML=`
    
        <div class="yesPage">
          <h2>Knt mt2aked</h2>
          <a href="https://www.instagram.com/3bdelr7mvnn/" target="_blank"> <i class="fa-brands fa-instagram"></i></a>
        </div>`
    })

} 

let numOfNO = 1




// let bestNO =Number(localStorage.getItem("bestNo"))
// noCountP.textContent=`Best No Score: ${localStorage.getItem("bestNo")}`



//  let noCount = 0
no.addEventListener("click",function(){
//     console.log(noCount)
//     console.log(localStorage.getItem("bestNo"))
//     noCount++

//    noScoreP.textContent=`NO Score: ${noCount}`

//     if(noCount > bestNO){
//      bestNO = noCount
//     localStorage.setItem("bestNo" , bestNO)
//     noCountP.textContent=`Best No Count: ${localStorage.getItem("bestNo")}`
   
//  }
  


    

  for (let i = 0; i < numOfNO ; i++) {
    let left =Math.floor((Math.random()*80) +1)
    let top =Math.floor((Math.random()*80) +1)
   creatNewNo(left , top)
}
 numOfNO++
  
})

yes.addEventListener("click",function(){

    all.classList.add("bgimg");
box.innerHTML=`
    <div class="yesPage">
      <h2>Knt mt2aked</h2>
      <a href="https://www.instagram.com/3bdelr7mvnn/" target="_blank"> <i class="fa-brands fa-instagram"></i></a>
    </div>`
})

