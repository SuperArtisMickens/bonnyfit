// BFI updated 11.01.2022 - KAM

// import "react-widgets/styles.css";

function logSubmit(event) {
    // log.textContent = `Form Submitted! Time stamp: ${event.timeStamp}`;
    
    let bfi_height = document.getElementById('bfi_height').value;
    console.log(bfi_height);
    let bfi_weight = document.getElementById('bfi_weight').value;
    console.log(bfi_weight);
    log.textContent = `Form Submitted! BFI: ${(703*(bfi_weight/(bfi_height*bfi_height))*1.2)+((0.23*25)-5.4)} `;
    
    event.preventDefault();
    
    
    // event.preventDefault();
  }
  
  
  const form = document.getElementById('form');
  const log = document.getElementById('log');
  form.addEventListener('submit', logSubmit);


  console.log(form);
  console.log(log)

  let bfi_height = document.getElementById('bfi_height').value;
  console.log(bfi_height);
  let bfi_weight = document.getElementById('bfi_weight').value;
  console.log(bfi_weight);

  


  