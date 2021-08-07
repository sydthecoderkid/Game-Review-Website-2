

function createTab(name, review, score){
    var button = document.createElement('button');
    button.className = 'gamelink'
    button.innerHTML = name;
    document.getElementById('gameTab').appendChild(button);

    
    let div = document.createElement('div');
    div.id = name + "tab";
    div.className = 'tabcontent';
    document.body.appendChild(div);


    var backbutton = document.createElement('button');
    backbutton.innerHTML = "back";
    document.body.appendChild(backbutton);
    div.append(backbutton);
    //backbutton.style.visibility = 'hidden';
    
    let scoreheader = document.createElement('h2');
    scoreheader.innerHTML = score + '/10';
    div.append(scoreheader);
    
    
    let paragraph = document.createElement('p');
    paragraph.innerHTML = review;
    div.append(paragraph);
    button.onclick = function () { revealInfo(div.id); };

  
    
}