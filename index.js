const myClock = ()=>{
    const date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    
    minutes = myFunc(minutes);
    seconds = myFunc(seconds);
    const ELEMENT = document.getElementById("text");
    ELEMENT.innerHTML = ELEMENT.innerHTML + "<br>" + hours + ":" + minutes + ":" + seconds;
    setTimeout(myClock,1000);
}
const myFunc = (i)=>{
    if(i < 10) {
      i = "0" + i;

    }
    return i;

}

