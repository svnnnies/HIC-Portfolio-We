// --- Fill the footer year where multiple pages use different ids ---
document.addEventListener('DOMContentLoaded', function() {
  const years = ['year','year2','year3','year4','year5'];
  years.forEach(id => {
    const el = document.getElementById(id);
    if(el) el.textContent = new Date().getFullYear();
  });


  // --- Responsible to the back to top button behavior ---
  const backTop = document.getElementById('backTop');
  if(backTop){
    window.addEventListener('scroll', () => {
      if(window.scrollY > 300) backTop.style.display = 'block';
      else backTop.style.display = 'none';
    });
    backTop.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }


  // --- Contact form validation & feedback ---
  const form = document.getElementById('contactForm');
  const feedback = document.getElementById('formFeedback');
  if(form){
    form.addEventListener('submit', function(e){
      e.preventDefault();
      const name = document.getElementById('name');
      const email = document.getElementById('email');
      const message = document.getElementById('message');
      let valid = true;
      if(!name.value.trim()){  //name has to be required 
        name.classList.add('is-invalid');
        valid = false;
      } else { name.classList.remove('is-invalid'); }
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if(!email.value.trim() || !emailRegex.test(email.value.trim())){
        email.classList.add('is-invalid');
        valid = false;
      } else { email.classList.remove('is-invalid'); }
      if(!message.value.trim()){
        message.classList.add('is-invalid');
        valid = false;
      } else { message.classList.remove('is-invalid'); }
      if (!valid) {
  if (feedback) {
    feedback.textContent = "Please fill out all required fields correctly.";
    feedback.classList.remove("d-none", "alert-success");
    feedback.classList.add("alert-danger");
  }
  return;
}

if (feedback) {
  feedback.textContent = "Thanks! Your message was received.";
  feedback.classList.remove("d-none", "alert-danger");
  feedback.classList.add("alert-success");
}

form.reset();

    });
  }


  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if(target) target.scrollIntoView({ behavior: 'smooth' });
    });
  });
});


