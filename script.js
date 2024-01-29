function showOverlay1() {
  document.getElementById('overlay2').classList.add('hidden');
  document.getElementById('overlay1').classList.remove('hidden');
}

function showOverlay2() {
  document.getElementById('overlay1').classList.add('hidden');
  document.getElementById('overlay2').classList.remove('hidden');
  document.getElementById('overlay3').classList.add('hidden');  // Change this line to show overlay3
}

function showOverlay3() {
  document.getElementById('overlay3').classList.add('hidden');
  document.getElementById('overlay4').classList.remove('hidden');
  document.getElementById('main').classList.add('hidden');
}

function showOverlay4() {
  document.getElementById('overlay4').classList.add('hidden');
  document.getElementById('overlay3').classList.remove('hidden');
}

    function showOverlay5() {
        document.getElementById('overlay4').classList.add('hidden');
        document.getElementById('overlay5').classList.remove('hidden');
    }

    function showMain() {
        document.getElementById('overlay2').classList.add('hidden');
        document.getElementById('main').classList.remove('hidden');
    }
</script>

// Other functions...



function takePhoto() {
  // Implement the photo-taking logic here
  // Show the preview and buttons
  document.getElementById('photoPreview').classList.remove('hidden');
  document.getElementById('retakeBtn').classList.remove('hidden');
  document.getElementById('downloadBtn').classList.remove('hidden');
}

function retakePhoto() {
  // Implement logic to reset photo preview
  document.getElementById('photoPreview').classList.add('hidden');
  document.getElementById('retakeBtn').classList.add('hidden');
  document.getElementById('downloadBtn').classList.add('hidden');
}

function downloadPhoto() {
  // Implement the download logic here
  // Save data as JSON and download the photo
}

function returnToOverlay() {
  document.getElementById('main').classList.add('hidden');
  // Add logic to reset any necessary state or data
  showOverlay3(); // Change this to the overlay you want to return to
}



function saveInputsToJson() {
  // Get user inputs
  const userName = document.getElementById("userName").value.trim();
  const age = document.getElementById("age").value;
  const sex = document.getElementById("sex").value;
  const height = document.getElementById("height").value;
  const weight = document.getElementById("weight").value;
  const conditions = Array.from(document.getElementsByName("conditions")).filter(checkbox => checkbox.checked).map(checkbox => checkbox.value);
  
  // Create JSON object
  const userData = {
    name: userName,
    age: age,
    sex: sex,
    height: height,
    weight: weight,
    conditions: conditions
  };

  // Save JSON object to local storage
  
  localStorage.setItem("userData", JSON.stringify(userData));
  console.log("User Data:", userData);
}
