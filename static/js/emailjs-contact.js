(function () {
  const form = document.querySelector("#contact-form[data-emailjs-enabled='true']");

  if (!form || !window.emailjs) {
    return;
  }

  const status = form.querySelector(".contact__form-status");
  const submitButton = form.querySelector("button[type='submit']");
  const serviceId = form.dataset.emailjsServiceId;
  const templateId = form.dataset.emailjsTemplateId;
  const publicKey = form.dataset.emailjsPublicKey;

  if (!serviceId || !templateId || !publicKey) {
    return;
  }

  window.emailjs.init({ publicKey: publicKey });

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    submitButton.disabled = true;
    status.textContent = "Nachricht wird gesendet...";

    window.emailjs.sendForm(serviceId, templateId, form).then(
      function () {
        form.reset();
        status.textContent = "Vielen Dank. Deine Nachricht wurde gesendet.";
        submitButton.disabled = false;
      },
      function () {
        status.textContent = "Die Nachricht konnte nicht gesendet werden. Bitte versuche es später erneut.";
        submitButton.disabled = false;
      }
    );
  });
})();
