
function showSection(sectionName) {
    const sections = ['article', 'videos', 'others'];

    // Hide all sections
    sections.forEach(function (section) {
        document.getElementById(section).style.display = 'none';
    });
    
    // Show the selected section
    document.getElementById(sectionName).style.display = 'block';
    
}
function closePopup(sectionName) {
    const sections = ['article', 'videos', 'others'];

    // Hide all sections
    sections.forEach(function (section) {
        document.getElementById(section).style.transition = '1s';
        document.getElementById(section).style.display = 'none';
    });

    // Show the selected section
   
}
const videos = document.querySelectorAll('video');

    videos.forEach(video => {
      video.addEventListener('click', () => {
        // Pause all videos
        videos.forEach(vid => {
          if (vid !== video) {
            vid.pause();
          }
        });
        // Play the clicked video
        if (video.paused) {
          video.play();
        } else {
          video.pause();
        }
      });
    });


// Show the default section (e.g., 'article' by default)


// script.js
const readMoreButton1 = document.getElementById('readMoreButton1');
const readMoreButton2 = document.getElementById('readMoreButton2');
const readMoreButton3 = document.getElementById('readMoreButton3');
const hiddenContent1 = document.getElementById('hiddenContent1');
const hiddenContent2 = document.getElementById('hiddenContent2');
const hiddenContent3 = document.getElementById('hiddenContent3');


readMoreButton1.addEventListener('click', function () {
    if (hiddenContent1.style.display === 'none' || hiddenContent1.style.display === '') {
        hiddenContent1.style.transition = '2s';
        hiddenContent1.style.display = 'block';
        readMoreButton1.textContent = 'Read Less';
        
    } else {
      hiddenContent1.style.transition = '2s';
        hiddenContent1.style.display = 'none';
        readMoreButton1.textContent = 'Read More';
        
    }
});
readMoreButton2.addEventListener('click', function () {
  if (hiddenContent2.style.display === 'none' || hiddenContent2.style.display === '') {
      hiddenContent2.style.display = 'block';
      readMoreButton2.textContent = 'Read Less';
      
  } else {
      hiddenContent2.style.display = 'none';
      readMoreButton2.textContent = 'Read More';
      
  }
});
readMoreButton3.addEventListener('click', function () {
  if (hiddenContent3.style.display === 'none' || hiddenContent3.style.display === '') {
      hiddenContent3.style.display = 'block';
      readMoreButton3.textContent = 'Read Less';
      
  } else {
      hiddenContent3.style.display = 'none';
      readMoreButton3.textContent = 'Read More';
      
  }
});
