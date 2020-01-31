var extensionOn = true;

/*function toggle(e) {
  if(e.target.id = "word_changing"){
	  if(e.target.checked){
		  extensionOn = true;
	  } else if(!e.target.checked){
		  extensionOn = false;
	  } else {
		  alert("Error.");
	  }
  }
}*/

//document.addEventListener('DOMContentLoaded', function () {
//  var divs = document.querySelectorAll('div');
//  for (var i = 0; i < divs.length; i++) {
//    divs[i].addEventListener('click', toggle);
//  }
//});

function wordChanging(){
	var slider = document.getElementById("word_changing");
	
	if(slider.checked){
		alert("Checked!");
		extensionOn = true;
	} else if(!slider.checked){
		alert("Unchecked!");
		extensionOn = false;
	} else {
		alert("Error.\nQuantum computing?");
	}
}

document.addEventListener('DOMContentLoaded', function () {
    var wordChanging = document.getElementById("word_changing");
    var colourChanging = document.getElementById("colour_changing");
    var thirteenColonies = document.getElementById("thirteen_colonies");

	//Send message to event.js (background script) telling it to disable the extension.

    chrome.extension.sendMessage({cmd: "setOnOffState", data: {value: isExtensionOn}});

    chrome.extension.sendMessage({cmd: "getOnOffState"}, function (response) {
        if (response !== undefined) {
            if (response) {
                disableButton.innerHTML = "Disable";
                disableButton.className = "button button3";
                disableButton.style.display = "";
                br1.style.display = "";
                br2.style.display = "";
            }
            else {
                disableButton.innerHTML = "Enable";
                disableButton.className = "button button1";
                disableButton.style.display = "";
                br1.style.display = "";
                br2.style.display = "";
            }
        }
    });
});