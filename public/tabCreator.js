

function createTab(name, review){
    var button = document.createElement('button');
    button.className = 'gamelink'
    button.innerHTML = name;
    document.getElementById('gameTab').appendChild(button);

    
    let div = document.createElement('div');
    div.id = name + "tab";
    div.className = 'tabcontent';
    document.body.appendChild(div);

    
    let scoreheader = document.createElement('h2');
    scoreheader.innerHTML = num.ToString(score);
    div.append(scoreheader);
    
    
    let paragraph = document.createElement('p');
    paragraph.innerHTML = review;
    div.append(paragraph);
    button.onclick = function () { revealInfo(div.id); };
    
}