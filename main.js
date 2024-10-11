var buttons = document.querySelectorAll(".rate_num");
let selectedValue = " ";

for (let i = 0; i < buttons.length; i++) {
  let btn = buttons[i];

  btn.addEventListener("click", function() {
    // Clear all button highlights
    for (let i = 0; i < buttons.length; i++) {
      buttons[i].style.backgroundColor = "";
    }

    if ( this.style.backgroundColor = "hsl(25, 97%, 53%)") {
  
    // Get selected value from clicked button's data-set attribute 
    selectedValue = this.getAttribute("data-set");
    // alert(selectedValue);

    // Update numid if needed (optional)
    document.getElementById("numid").innerHTML = selectedValue;
    }
    // // Highlight clicked button
    this.style.backgroundColor = "hsl(25, 97%, 53%)";

  });
}
var sumBtn = document.getElementById("submitBtn");
sumBtn.addEventListener("click", function() {
  var content= document.querySelector(".content");
  content.style.display="flex";
  var content1= document.querySelector(".content1");
  content1.style.display="none";
  
  
  })
