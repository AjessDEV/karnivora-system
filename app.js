function generarImagen() {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");

    const fondo = new Image();
    fondo.src = "img/fondo.png";

    fondo.onload = function () {

        canvas.width = fondo.width;
        canvas.height = fondo.height;


        ctx.drawImage(fondo, 0, 0, canvas.width, canvas.height);


        const id = Math.floor(1000 + Math.random() * 9000);


        document.fonts.load("30px Poppins").then(() => {
            ctx.fillStyle = "black";
            ctx.font = "bold 80px Poppins";
            ctx.textAlign = "center";

            const margenInferior = 30;
            ctx.fillText(`ID: ${id}`, canvas.width / 2, canvas.height - margenInferior);

            const image = canvas.toDataURL("image/png");
            const link = document.createElement("a");
            link.href = image;
            link.download = `imagen_${id}.png`;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        });
    };
}

document.getElementById("btnGenerarImagen").addEventListener("click", generarImagen);

const telefonoInput = document.getElementById("telefono");
const btnWhatsApp = document.getElementById("btnEnviarWhatsapp");

telefonoInput.addEventListener("input", function () {
    const telefono = telefonoInput.value.trim();

    if (telefono.length >= 9 && telefono.length <= 9 && !isNaN(telefono)) {
        btnWhatsApp.classList.add("activo");
        btnWhatsApp.classList.remove("desactivado");
    } else {
        btnWhatsApp.classList.remove("activo");
        btnWhatsApp.classList.add("desactivado");
    }
});

btnWhatsApp.addEventListener("click", function() {
    const telefono = telefonoInput.value.trim();

    if (telefono.length >= 9 && telefono.length <= 9 && !isNaN(telefono)) {
        const url = `https://wa.me/${telefono}`;
        window.location.href = url;
    }
});