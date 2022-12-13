// BMI updated 11.01.2022 - KAM



function logSubmit(event) {
    // log.textContent = `Form Submitted! Time stamp: ${event.timeStamp}  height: ${bmi_height}`;

  console.log(event);
  // console.log(log)

  let bmi_height = document.getElementById('bmi_height').value;
  console.log(bmi_height);
  let bmi_weight = document.getElementById('bmi_weight').value;
  console.log(bmi_weight);
  log.textContent = `Form Submitted! Time stamp: ${event.timeStamp}  BMI: ${703*(bmi_weight/(bmi_height*bmi_height))}`;
  
    event.preventDefault();
  }
  
  const form = document.getElementById('form');
  const log = document.getElementById('log');
  form.addEventListener('submit', logSubmit);

  console.log(form);
  console.log(log)

  let bmi_height = document.getElementById('bmi_height').value;
  console.log(bmi_height);
  let bmi_weight = document.getElementById('bmi_weight').value;
  console.log(bmi_weight);

  