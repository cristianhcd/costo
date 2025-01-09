document.addEventListener("DOMContentLoaded", () => {
    const costoKwOption = document.getElementById("costo-kw-option");
    const siCostoKw = document.getElementById("si-costo-kw");
    const noCostoKw = document.getElementById("no-costo-kw");
    const kwConsumidosBoleta = document.getElementById("kw-consumidos-boleta");
    const kwConsumidos = document.getElementById("kw-consumidos");
    const costoKwCalculado = document.getElementById("costo-kw-calculado");

    const costoAparatoOption = document.getElementById("costo-aparato-option");
    const siCostoAparato = document.getElementById("si-costo-aparato");
    const noCostoAparato = document.getElementById("no-costo-aparato");
    const wEtiqueta = document.getElementById("w-etiqueta");
    const hEtiqueta = document.getElementById("h-etiqueta");
    const vecesEtiqueta = document.getElementById("veces-etiqueta");
    const kwMesCalculado = document.getElementById("kw-mes-calculado");

    const calcularCostoMensualBtn = document.getElementById("calcular-costo-mensual");
    const costoMensualCalculado = document.getElementById("costo-mensual-calculado");

    // Mostrar y ocultar secciones en función de las selecciones
    costoKwOption.addEventListener("change", (event) => {
        if (event.target.value === "si") {
            siCostoKw.style.display = "block";
            noCostoKw.style.display = "none";
        } else if (event.target.value === "no") {
            siCostoKw.style.display = "none";
            noCostoKw.style.display = "block";
        } else {
            siCostoKw.style.display = "none";
            noCostoKw.style.display = "none";
        }
    });

    costoAparatoOption.addEventListener("change", (event) => {
        if (event.target.value === "si") {
            siCostoAparato.style.display = "block";
            noCostoAparato.style.display = "none";
        } else if (event.target.value === "no") {
            siCostoAparato.style.display = "none";
            noCostoAparato.style.display = "block";
        } else {
            siCostoAparato.style.display = "none";
            noCostoAparato.style.display = "none";
        }
    });

    // Calcular COSTO-KW-MES
    [kwConsumidosBoleta, kwConsumidos].forEach((input) => {
        input.addEventListener("input", () => {
            const boleta = parseFloat(kwConsumidosBoleta.value) || 0;
            const costo = parseFloat(kwConsumidos.value) || 0;
            if (boleta > 0) {
                const costoKwMes = costo / boleta;
                costoKwCalculado.textContent = costoKwMes.toFixed(0);
            } else {
                costoKwCalculado.textContent = "0.00";
            }
        });
    });

    // Calcular KW-MES
    [wEtiqueta, hEtiqueta, vecesEtiqueta].forEach((input) => {
        input.addEventListener("input", () => {
            const watts = parseFloat(wEtiqueta.value) || 0;
            const horas = parseFloat(hEtiqueta.value) || 0;
            const veces = parseFloat(vecesEtiqueta.value) || 0;
            const kwMes = (watts * horas * veces * 30 ) / 1000;
            kwMesCalculado.textContent = kwMes.toFixed(0);
        });
    });

    // Calcular costo mensual
    calcularCostoMensualBtn.addEventListener("click", () => {
        const costoKwMes = parseFloat(costoKwCalculado.textContent) || parseFloat(document.getElementById("costo-kw-mes").value) || 0;
        const kwMes = parseFloat(kwMesCalculado.textContent) || parseFloat(document.getElementById("kw-mes").value) || 0;

        if (costoKwMes > 0 && kwMes > 0) {
            const costoMensual = Math.round(costoKwMes * kwMes);
            costoMensualCalculado.textContent = `${costoMensual} pesos`;
        } else {
            costoMensualCalculado.textContent = "0 pesos";
        }
    });
});
