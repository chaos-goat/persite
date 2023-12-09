document.addEventListener('DOMContentLoaded', function() {
  var thumbnails = document.querySelectorAll('.thumbnail');
  var lightbox = document.querySelector('#lightbox');

  // Lightbox listener
  lightbox.addEventListener('click', function() {
     lightbox.innerHTML = null;
     lightbox.style.display = 'none';
  }, false);

  // Thumbnail listener
  for(var i = 0, len = thumbnails.length | 0; i < len; i++) {
     thumbnails[i].addEventListener('click', function(e) {
        e.preventDefault();
        lightbox.innerHTML = '<img src="' + this.href + '">';
        lightbox.style.display = 'flex';
     }.bind({href: thumbnails[i].href}), false);
  }
});