function calculate() {   
  let height = parseFloat(document.getElementById("height").value); 
  let ankle = parseFloat(document.getElementById("ankle").value);
  let wrist = parseFloat(document.getElementById("wrist").value);
  let bodyfat = parseFloat(document.getElementById("bodyfat").value);
 
  const inche = 0.3937007874 
  const cm = 2.54
  const lb = 0.45359237
 
  let maxLeanBodyMass = Math.pow((height * inche), 1.5) * [(Math.sqrt(wrist * inche) / 22.6670) + (Math.sqrt(ankle * inche) / 17.0104)] * ((bodyfat * 0.01 / 224) + 1);
  let chest = (1.625 * (wrist * inche)) + (1.3682 * (ankle * inche)) + (.3562 * (height * inche));
  let upperArm = (1.1709 * (wrist * inche)) + (.1350 * (height * inche));
  let neck = (1.1875 * (wrist * inche)) + (.1301 * (height * inche));
  let forearm = (.950 * (wrist * inche)) + (.1041 * (height * inche));
  let thigh = (1.4737 * (ankle * inche)) + (.1918 * (height * inche));
  let calf = (.9812 * (ankle * inche)) + (.1250 * (height * inche));

    document.getElementById("result-bmass").innerHTML = "Maximum Lean Body Mass: " + (maxLeanBodyMass * lb).toFixed(2) + " Kg" + "<br>";
    document.getElementById("result-chest").innerHTML = "Chest: " + (chest * cm).toFixed(2) + " cm" + "<br>";
    document.getElementById("result-upper").innerHTML = "Upper Arm: " + (upperArm * cm).toFixed(2) + " cm" + "<br>";
    document.getElementById("result-neck").innerHTML = "Neck: " + (neck * cm).toFixed(2) + " cm" + "<br>";
    document.getElementById("result-farm").innerHTML = "Forearm: " + (forearm * cm).toFixed(2) + " cm" + "<br>";
    document.getElementById("result-thigh").innerHTML = "Thigh: " + (thigh * cm).toFixed(2) + " cm" + "<br>";
    document.getElementById("result-calf").innerHTML = "Calf: " + (calf * cm).toFixed(2) + " cm";
}

function clearFields() {
  // Clear input fields
  document.getElementById("height").value = "";
  document.getElementById("ankle").value = "";
  document.getElementById("wrist").value = "";
  document.getElementById("bodyfat").value = "";

  // Clear result fields
  document.getElementById("result-bmass").innerHTML = "";
  document.getElementById("result-chest").innerHTML = "";
  document.getElementById("result-upper").innerHTML = "";
  document.getElementById("result-neck").innerHTML = "";
  document.getElementById("result-farm").innerHTML = "";
  document.getElementById("result-thigh").innerHTML = "";
  document.getElementById("result-calf").innerHTML = "";
}
  
  







// Get references to the click-to-show text and the hidden content
const clickToShow = document.getElementById("clickToShow");
const hiddenContent = document.getElementById("hiddenContent");

// Add a click event listener to the click-to-show text
clickToShow.addEventListener("click", function () {
  // Toggle the visibility of the hidden content
  if (hiddenContent.style.display === "none" || hiddenContent.style.display === "") {
    hiddenContent.style.display = "block"; // Show the hidden content
  } else {
    hiddenContent.style.display = "none"; // Hide the hidden content
  }
});


function toggleHiddenContent() {
  const hiddenContentContainer = document.getElementById("hiddenContentContainer");
  hiddenContentContainer.classList.toggle("active");
}
