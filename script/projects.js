(function () {
  // Create preview element
  var preview = document.createElement('div');
  preview.className = 'project-preview';
  var img = document.createElement('img');
  preview.appendChild(img);
  document.body.appendChild(preview);

  var table = document.querySelector('.projects-table');
  if (!table) return;

  var rows = table.querySelectorAll('tbody tr');
  rows.forEach(function (row) {
    if (row.classList.contains('separator') || row.classList.contains('projects-header')) return;
    var imgSrc = row.getAttribute('data-img');
    var link = row.getAttribute('data-link');

    row.addEventListener('mouseenter', function (e) {
      row.classList.add('active-row');
      if (imgSrc) {
        img.src = imgSrc;
        preview.classList.add('show');
        positionPreview(e);
      }
    });

    row.addEventListener('mousemove', function (e) {
      positionPreview(e);
    });

    row.addEventListener('mouseleave', function () {
      row.classList.remove('active-row');
      preview.classList.remove('show');
    });

    row.addEventListener('click', function () {
      if (link) {
        try { window.open(link, '_blank'); } catch (err) { window.location.href = link; }
      }
    });
  });

  function positionPreview(e) {
    var offsetX = 24; // distance right from cursor
    var offsetY = -20; // up from cursor
    var px = e.clientX + offsetX;
    var py = e.clientY + offsetY;
    // ensure preview doesn't go off-screen horizontally
    var previewRect = preview.getBoundingClientRect();
    var maxX = window.innerWidth - previewRect.width - 12;
    var maxY = window.innerHeight - previewRect.height - 12;
    if (px > maxX) px = e.clientX - previewRect.width - 12;
    if (py < 12) py = 12;
    if (py > maxY) py = maxY;
    preview.style.left = px + 'px';
    preview.style.top = py + 'px';
  }
})();
