function revealInfo( thisID) {
    // Declare all variables
    var i, tabcontent;
  
    // Get all elements with class="tabcontent" and hide them
    document.getElementById("BackButton").style.visibility = 'visible';
    
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
       
  
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(thisID).style.display = "block"
  }