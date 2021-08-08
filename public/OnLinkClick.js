function revealInfo( thisID) {
    // Declare all variables
    var i, tabcontent;
  
    document.getElementById("BackButton").style.visibility = "visible";
    // Get all elements with class="tabcontent" and hide them
    
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
       
  
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(thisID).style.display = "block"
  }