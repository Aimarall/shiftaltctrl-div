document.body.addEventListener('mousedown', function(event){
    let y = event.clientY;
    let x = event.clientX;
    let div = document.createElement("div");
    div.style.width = "20px";
    div.style.height = "20px";
    div.style.backgroundColor = "blue";
    div.style.borderRadius = "100%"
    div.style.position = "absolute";
    div.style.top = y + "px";
    div.style.left = x + "px";
    
    if (event.which == 2){
        div.style.backgroundColor = "red";
    }

    if (event.which == 3){
        div.style.backgroundColor = "green";
    }

    if (event.ctrlKey) {
        div.style.borderRadius = "0px";
        div.style.backgroundColor = "yellow";
    }

    if (event.shiftKey) {
        div.style.transform = "rotate(45deg)"
        div.style.borderRadius = "0px";
        div.style.backgroundColor = "purple";
    }

    if (event.altKey) {
        
        div.style.width = "25px";
        div.style.height = "40px";
        div.style.backgroundColor = "gray";
    }
    document.body.append(div);
});


