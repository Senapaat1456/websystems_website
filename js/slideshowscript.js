var i = 0;
var images = [];
var images_desc = [];
var pause_time = 3000;

images[0] = 'images/slideshow/image1.jpg';
images_desc[0] = 'A team photo from MinniMUDAC 2019';
images[1] = 'images/slideshow/image5.jpg';
images_desc[1] = 'Data Presentation at MUDAC 2019';
images[2] = 'images/slideshow/image3.jpg';
images_desc[2] = 'A team photo from MinniMUDAC 2019';
images[3] = 'images/slideshow/image4.jpg';
images_desc[3] = 'A full group photo from MinniMUDAC 2019';
images[4] = 'images/slideshow/image2.jpg';
images_desc[4] = 'A team photo from MinniMUDAC 2019';
images[5] = 'images/slideshow/image6.jpg';
images_desc[5] = 'Winning UWEC team at MUDAC 2019';


slideshow_contianer = document.getElementById('slideshow_container');
left_photo = document.getElementById('left_image');
center_photo = document.getElementById('center_image');
right_photo = document.getElementById('right_image');

left_photo.src = images[i];
left_photo.alt = images_desc[i];
center_photo.src = images[i+1];
center_photo.alt = images_desc[i+1];
right_photo.src = images[i+2];
right_photo.alt = images_desc[i+2];

var timer = setInterval(switch_image,pause_time);

function switch_image(){

  i = (i+1)%images.length
  left_photo.src = images[i];
  left_photo.alt = images_desc[i];
  center_photo.src = images[(i+1)%images.length];
  center_photo.alt = images_desc[(i+1)%images.length];
  right_photo.src = images[(i+2)%images.length];
  right_photo.alt = images_desc[(i+2)%images.length];

}
