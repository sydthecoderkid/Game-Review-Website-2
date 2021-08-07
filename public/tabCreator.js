

function createTab(name, review){
    var button = document.createElement('button');
    button.className = 'gamelink'
    button.innerHTML = name;
    let div = document.createElement('div');
    div.id = name + "tab";
    div.className = 'tabcontent'
    div.innerText = review;
    document.getElementById('gameTab').appendChild(button);
}