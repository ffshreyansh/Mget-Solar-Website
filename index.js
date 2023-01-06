// Get all dropdown elements
var dropdowns = document.querySelectorAll('.dropdown');

// Add event listeners to each dropdown
dropdowns.forEach(function(dropdown) {
  // Show dropdown menu on hover
  dropdown.addEventListener('mouseenter', function() {
    this.querySelector('.dropdown-menu').style.display = 'block';
  });

  // Hide dropdown menu on hover
  dropdown.addEventListener('mouseleave', function() {
    this.querySelector('.dropdown-menu').style.display = 'none';
  });
});
