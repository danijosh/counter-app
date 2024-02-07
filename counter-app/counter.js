// document.getElementById("1st").innerText=5
let id=document.getElementById('snd');   //id=<h1 id="snd">
function increment(){
    let n=parseInt(id.innerText)
    n+=1
    id.innerText=n
}
function decrement(){
    if (parseInt(id.innerText)!=0){
    id.innerText-=1
    }
}
function save(){
    console.log(id.innerText)
}