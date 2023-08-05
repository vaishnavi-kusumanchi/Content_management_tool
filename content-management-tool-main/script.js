function submitForm() {
    var title = document.getElementById('title').value;
    var content = document.getElementById('content').value;
    var image = document.getElementById('image').files[0];
    var video = document.getElementById('video').files[0];

    var dataSection = document.getElementById('dataSection');

    var newData = "<div class='card1'>" +
      "<div class='card-header1'>" +
      "<h3 class='card-title1'><b>Title: </b>" + title + "</h3>" +
      "</div>" +
      "<div class='card-body1'>" +
      "<h3><b>Content</b><br> " + content + "</h3>";

    if (image) {
      var imagePreview = document.createElement('img');
      imagePreview.src = URL.createObjectURL(image);
      imagePreview.style.maxWidth = '100%';
      imagePreview.style.height = '100%';
      imagePreview.style.marginTop = '10px';
      newData += "<br><h3 class='card-header1'><b>Image</b></h3><br>";
      newData += "<div class='card-body-image1'>" +
        "<img class='preview1' src='" + imagePreview.src + "' alt='Selected Image'>" +
        "</div><br>";
    }
    
    if (video) {
      var videoPreview = document.createElement('video');
      videoPreview.src = URL.createObjectURL(video);
      videoPreview.controls = true;
      videoPreview.autoplay = true;
      videoPreview.style.maxWidth = '100%';
      videoPreview.style.height = 'auto';
      videoPreview.style.marginTop = '20px';
      newData += "<h3 class='card-header1'><b>Video</b></h3><br>";
      newData += "<div class='card-body-video1'>" +
        "<video class='video-preview1' src='" + videoPreview.src + "' controls autoplay></video>" +
        "</div>";
    }

    newData += "</div></div>";

    dataSection.innerHTML += newData;

    document.getElementById('title').value = '';
    document.getElementById('content').value = '';
    document.getElementById('image').value = '';
    document.getElementById('video').value = '';
  }