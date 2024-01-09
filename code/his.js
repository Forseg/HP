document.addEventListener('DOMContentLoaded', function () {
    const realizarPedidoBtn = document.getElementById('realizarPedidoBtn');
    const invoiceForm = document.getElementById('invoice-form');
    realizarPedidoBtn.addEventListener('click', function (e) {
        e.preventDefault();
        const name = document.getElementById('name').value;
        const last_name = document.getElementById('last_name').value;
        const razon_social = document.getElementById('razon_social').value;
        const country = document.getElementById('country').value;
        const address = document.getElementById('address').value;
        const city = document.getElementById('city').value;
        const region = document.getElementById('region').value;
        const postalcode = document.getElementById('postalcode').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const date = document.getElementById('date').value;
        const ruc = document.getElementById('ruc').value; 
        const ventaSelect = document.getElementById('ventaSelect');
        const selectedVenta = ventaSelect.value;
        let hayCamposVacios = false;

        function mostrarMensajeError(fieldId, mensaje = 'Rellena este campo') {
            const mensajeError = document.querySelector(`#${fieldId} + .campo-vacio`);
            mensajeError.textContent = mensaje;
            mensajeError.style.display = 'inline'; 
        }

        function ocultarMensajeError(fieldId) {
            const mensajeError = document.querySelector(`#${fieldId} + .campo-vacio`);
            mensajeError.style.display = 'none'; 
        }

        if (!name) {
            mostrarMensajeError('name');
            hayCamposVacios = true;
        } else {
            ocultarMensajeError('name');
        }
        if (!last_name) {
            mostrarMensajeError('last_name');
            hayCamposVacios = true;
        } else {
            ocultarMensajeError('last_name');
        }
        if (!razon_social) {
            mostrarMensajeError('razon_social');
            hayCamposVacios = true;
        } else {
            ocultarMensajeError('razon_social');
        }
        if (country === "") {
            mostrarMensajeError('country', 'Selecciona un país/región');
            hayCamposVacios = true;
        } else {
            ocultarMensajeError('country');
        }
        if (!address) {
            mostrarMensajeError('address');
            hayCamposVacios = true;
        } else {
            ocultarMensajeError('address');
        }
        if (!city) {
            mostrarMensajeError('city');
            hayCamposVacios = true;
        } else {
            ocultarMensajeError('city');
        }
        if (region === "") {
            mostrarMensajeError('region', 'Selecciona una región/provincia');
            hayCamposVacios = true;
        } else {
            ocultarMensajeError('region');
        }
        if (!postalcode) {
            mostrarMensajeError('postalcode');
            hayCamposVacios = true;
        } else {
            ocultarMensajeError('postalcode');
        }
        if (!email) {
            mostrarMensajeError('email');
            hayCamposVacios = true;
        } else {
            ocultarMensajeError('email');
        }
        if (phone.length !== 9) {
            mostrarMensajeError('phone', 'El teléfono debe tener 9 dígitos');
            hayCamposVacios = true;
        } else {
            ocultarMensajeError('phone');
        }
        if (!date) {
            mostrarMensajeError('date');
            hayCamposVacios = true;
        } else {
            ocultarMensajeError('date');
        }
        if (ruc.length !== 11) {
            mostrarMensajeError('ruc', 'El RUC debe tener 11 dígitos');
            hayCamposVacios = true;
        } else {
            ocultarMensajeError('ruc');
        }
        if (!selectedVenta) {
            mostrarMensajeError('ventaSelect', 'Selecciona una venta');
            hayCamposVacios = true;
        } else {
            ocultarMensajeError('ventaSelect');
        }
        if (hayCamposVacios) {
            // alert('Por favor, completa todos los campos antes de realizar el pedido.');
        } else {
            // window.open(selectedVenta, '_blank');
        }
    });
});