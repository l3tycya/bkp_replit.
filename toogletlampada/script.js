
const btntrocar = document.getElementById('btn-trocar')

const lampada = document.getElementById('lampada')

let baseURL = "https://b66c443d-2339-41ed-adbc-e84641c6ee14-00- j9pa11mrgn1x.picard.replit.dev/"

btntrocar.addEventListener('click', function() {
  //alert(lampada.src == baseURL + "lampada00.png")
  if(lampada.src = baseURL + "lampada00.png") { 
    lampada.src = "lampada02.png"
  } else {
    lampada.src = "lampada00.png"  
 }
  
})