  var testOne = document.getElementById("buttonA");

function answersNumber() {

     var testOne =   Number(testOne);
      if(isNaN(testOne))
      { document.getElementById("invaildInput").classList.remove("hidden-message");
      document.getElementById("invaildInput").classList.add("shown-message");
      document.getElementById("invaildInput").innerHTML="Answer must be a number";
      document.getElementById("invaildInput").classList.add("has-error");
  }
 else {
  setCookie("answerOne", testOne);


}

}
function nextPromblem(){
  var newLink = document.getElementById("next");
  newLink.link("Test2.html");
}
//courtesy of w3schools, from: http://www.w3schools.com/js/js_cookies.asp
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
//courtesy of w3schools, from: http://www.w3schools.com/js/js_cookies.asp
function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
