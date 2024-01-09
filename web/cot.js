document.addEventListener("DOMContentLoaded", function () {
  const nombre = document.getElementById("myname");
 // const apellidos = document.getElementById("surname");
 // const celular = document.getElementById("mobile");
 // const contrasenia = document.getElementById("password");
  const correo = document.getElementById("email");
  const direccion = document.getElementById("address");
  const ruc = document.getElementById("ruc");
  const terminosYcondiciones = document.getElementById("termsAndConditions");
  const form = document.getElementById("form");
  const listInputs = document.querySelectorAll(".form-input");
  const menuOptions = document.querySelector(".menu-options");
  const opcionSeleccionada = document.getElementById("opcionSeleccionada");
  
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    let condicion = validacionForm();
    if (condicion) {
      const mensajeWhatsapp = construirMensajeWhatsapp();
      enviarFormulario(mensajeWhatsapp);
      limpiarFormulario();
    }
  });

  const menuTrigger = document.querySelector(".menu-trigger");
  let menuOpen = false;
  menuTrigger.addEventListener("click", function () {
    toggleMenu();
  });
  menuOptions.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
      opcionSeleccionada.textContent = e.target.textContent;
      toggleMenu();
    }
  });

  function validacionForm() {
    form.lastElementChild.innerHTML = "";
    let condicion = true;
    listInputs.forEach((element) => {
      element.lastElementChild.innerHTML = "";
    });

    if (nombre.value.length < 1 || nombre.value.trim() == "") {
      mostrarMensajeError("myname", "Nombre no válido*");
      condicion = false;
    }

    if (correo.value.length < 1 || correo.value.trim() == "") {
      mostrarMensajeError("email", "Correo no válido*");
      condicion = false;
    }

    if (direccion.value.length < 1 || direccion.value.trim() == "") {
      mostrarMensajeError("address", "Dirección no válido*");
      condicion = false;
    }

    if (ruc.value.length !== 11 || isNaN(ruc.value)) {
      mostrarMensajeError("ruc", "Ruc no válido*");
      condicion = false;
    }

 /*if (apellidos.value.length < 1 || apellidos.value.trim() == "") {
      mostrarMensajeError("surname", "Apellido no válido*");
      condicion = false;
    }

  if (
      celular.value.length !== 9 ||
      celular.value.trim() == "" ||
      isNaN(celular.value)
    ) {
      mostrarMensajeError("mobile", "Celular no válido*");
      condicion = false;
    }

     if (contrasenia.value.length < 1 || contrasenia.value.trim() == "") {
      mostrarMensajeError("password", "Contraseña no válida*");
      condicion = false;
    }*/

    if (!terminosYcondiciones.checked) {
      mostrarMensajeError(
        "termsAndConditions",
        "Acepta los términos y condiciones*"
      );
      condicion = false;
    }

    const opcionSeleccionadaTexto = opcionSeleccionada.textContent.trim();
    if (opcionSeleccionadaTexto !== "WhatsApp Web HP") {
      mostrarMensajeError("opcionSeleccionada", "Selecciona una opción válida*");
      condicion = false;
    }

    return condicion;
  }

  function mostrarMensajeError(claseInput, mensaje) {
    let elemento = document.querySelector(`.${claseInput}`);
    elemento.lastElementChild.innerHTML = mensaje;
  }

  function construirMensajeWhatsapp() {
    const mensaje =
      `Hola, soy ${nombre.value}. ` +
      `Mi correo es ${correo.value}, mi RUC es ${ruc.value} y mi dirección es ${direccion.value}.` +
      ` Estoy interesado/a en obtener más información. ¡Gracias!`;
    return encodeURIComponent(mensaje);
  }

  function toggleMenu() {
    if (menuOptions.style.display === "block") {
      menuOptions.style.display = "none";
    } else {
      menuOptions.style.display = "block";
    }
    menuOpen = !menuOpen;
  }

  function enviarFormulario(mensajeWhatsapp) {
    const urlVentas1 = `https://api.whatsapp.com/send/?phone=51996569759&text=${mensajeWhatsapp}&type=phone_number&app_absent=0`;
    window.location.href = urlVentas1;
  }

  function limpiarFormulario() {
    form.reset();
  }
});
