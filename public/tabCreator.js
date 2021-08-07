

function createTab(name){
    var button = document.createElement('button');
    button.className = 'tablink'
    button.innerHTML = name;
    button.onclick = function(){
      alert('here be dragons');return false;
    };
    document.getElementById('gameTab').appendChild(button);
}