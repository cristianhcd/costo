document.addEventListener("DOMContentLoaded", () => {
    // Elementos del DOM
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

    // Funciones auxiliares
    const toggleVisibility = (element, condition) => {
        element.style.display = condition ? "block" : "none";
    };

    const calcularCostoKwMes = () => {
        const boleta = parseFloat(kwConsumidosBoleta.value) || 0;
        const costo = parseFloat(kwConsumidos.value) || 0;
        const costoKwMes = boleta > 0 ? (costo / boleta).toFixed(0) : "0.00";
        costoKwCalculado.textContent = costoKwMes;
    };

    const calcularKwMes = () => {
        const watts = parseFloat(wEtiqueta.value) || 0;
        const horas = parseFloat(hEtiqueta.value) || 0;
        const veces = parseFloat(vecesEtiqueta.value) || 0;
        const kwMes = ((watts * horas * veces * 30) / 1000).toFixed(0);
        kwMesCalculado.textContent = kwMes;
    };

    const calcularCostoMensual = () => {
        const costoKwMes = parseFloat(costoKwCalculado.textContent) || parseFloat(document.getElementById("costo-kw-mes").value) || 0;
        const kwMes = parseFloat(kwMesCalculado.textContent) || parseFloat(document.getElementById("kw-mes").value) || 0;
        const costoMensual = costoKwMes > 0 && kwMes > 0 ? Math.round(costoKwMes * kwMes) : 0;
        costoMensualCalculado.textContent = `${costoMensual} pesos`;
    };

    // Eventos
    costoKwOption.addEventListener("change", (event) => {
        const isSiSelected = event.target.value === "si";
        toggleVisibility(siCostoKw, isSiSelected);
        toggleVisibility(noCostoKw, !isSiSelected);
    });

    costoAparatoOption.addEventListener("change", (event) => {
        const isSiSelected = event.target.value === "si";
        toggleVisibility(siCostoAparato, isSiSelected);
        toggleVisibility(noCostoAparato, !isSiSelected);
    });

    [kwConsumidosBoleta, kwConsumidos].forEach(input => input.addEventListener("input", calcularCostoKwMes));
    [wEtiqueta, hEtiqueta, vecesEtiqueta].forEach(input => input.addEventListener("input", calcularKwMes));
    calcularCostoMensualBtn.addEventListener("click", calcularCostoMensual);
});
