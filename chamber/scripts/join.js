window.addEventListener('DOMContentLoaded', function() {
    var form = document.getElementById('membershipForm');
    var submissionTimeField = document.getElementById('submissionTime');
  
    submissionTimeField.value = new Date().toISOString().slice(0, 19).replace('T', ' ');
  
    form.addEventListener('submit', function(event) {
      event.preventDefault();
      form.submit();
    });
  });
  