var counter=0;

function increment(){
    counter++;
    document.getElementById("count").innerHTML=counter;
}

function decrement() {
    if(counter>0){
        counter--;
        document.getElementById("count").innerHTML=counter;
    }
    else
    alert("negative value not allowed");
}

function reset(){
    document.getElementById("count").innerHTML=0;
    counter=0;
}