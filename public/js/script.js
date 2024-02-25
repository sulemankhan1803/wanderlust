(() => {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }
  
        form.classList.add('was-validated')
      }, false)
    })
  })()

  // Index
  // Display total after taxes
  let taxSwitch = document.getElementById("flexSwitchCheckDefault");

  taxSwitch.addEventListener("click", () => {
    let taxInfo = document.getElementsByClassName("tax-info");
    for (info of taxInfo) {
      if (info.style.display != "inline") {
        info.style.display = "inline";
      } else {
        info.style.display = "none";
      }
    }
  });

// To scroll icons
  document.querySelector('.fa-chevron-left').addEventListener('click', function () {
    const iconsContainer = document.querySelector('.icons');
    iconsContainer.scrollBy({ left: -100, behavior: 'smooth' });
  });

  document.querySelector('.fa-chevron-right').addEventListener('click', function () {
    const iconsContainer = document.querySelector('.icons');
    iconsContainer.scrollBy({ left: 100, behavior: 'smooth' });
  });

