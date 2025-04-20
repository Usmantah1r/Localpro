function previewImage(event, targetId) {
    const input = event.target;
    const preview = document.getElementById(targetId);
    const file = input.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function(e) {
        preview.src = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  }


// for cnic

  function previewImage(event, targetId) {
    const reader = new FileReader();
    reader.onload = function(){
      const output = document.getElementById(targetId);
      output.src = reader.result;
    };
    reader.readAsDataURL(event.target.files[0]);
  }