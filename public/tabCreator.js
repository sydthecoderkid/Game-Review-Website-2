

function createTab(name, review, score, hours){
    var button = document.createElement('button');
    button.className = 'gamelink'
    button.innerHTML = name;
    document.getElementById('gameTab').appendChild(button);

    
    let div = document.createElement('div');
    div.id = name + "tab";
    div.className = 'tabcontent';
    document.body.appendChild(div);


    var backbutton = document.createElement('button');
    backbutton.innerHTML = "Back";
    document.body.appendChild(backbutton);
    backbutton.onclick = function(){
        revealInfo('gameTab');
    }
    backbutton.id = "BackButton";
    div.append(backbutton);
     
    let scoreheader = document.createElement('h2');
    scoreheader.innerHTML = score + '/10';
    div.append(scoreheader);

    let hoursplayed = document.createElement('h2');
    hoursplayed.innerHTML = hours + ' Hours played';
    div.append(hoursplayed);
    
    
    let paragraph = document.createElement('p');
    paragraph.id = "reviewID";
    paragraph.innerHTML = review;
    div.append(paragraph);
    button.onclick = function () { revealInfo(div.id); };

    document.getElementById('loadingtext').style.visibility = 'hidden';
  
    
}