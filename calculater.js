let screen = document.getElementById("screen")
let operate = document.getElementById("operators")
function clearAll(){
    screen.innerText="0"
}
function append(value){
    if(screen.innerText === "0"
    ){
        screen.innerText = value
    }
    else{screen.innerText += value}
}
function equal(){
    try{
    let calculating = eval(screen.innerText)
        screen.innerText = calculating
    }
    catch{
    screen.innerText = "error"
    }
}
