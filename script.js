// Obtener los elementos de las opciones y los modales
const desarrolloOption = document.getElementById("desarrollo");
const apoyoOption = document.getElementById("apoyo-psicologico");
const gestionOption = document.getElementById("gestion-institucional");

const modalDesarrollo = document.getElementById("modal-desarrollo");
const modalApoyo = document.getElementById("modal-apoyo");
const modalGestion = document.getElementById("modal-gestion");

const closeDesarrollo = document.getElementById("close-desarrollo");
const closeApoyo = document.getElementById("close-apoyo");
const closeGestion = document.getElementById("close-gestion");

// Funciones para abrir los modales
desarrolloOption.onclick = function () {
  modalDesarrollo.style.display = "block";
};

apoyoOption.onclick = function () {
  modalApoyo.style.display = "block";
};

gestionOption.onclick = function () {
  modalGestion.style.display = "block";
};

// Funciones para cerrar los modales
closeDesarrollo.onclick = function () {
  modalDesarrollo.style.display = "none";
};

closeApoyo.onclick = function () {
  modalApoyo.style.display = "none";
};

closeGestion.onclick = function () {
  modalGestion.style.display = "none";
};

// Cerrar el modal si el usuario hace clic fuera del modal
window.onclick = function (event) {
  if (event.target === modalDesarrollo) {
    modalDesarrollo.style.display = "none";
  }
  if (event.target === modalApoyo) {
    modalApoyo.style.display = "none";
  }
  if (event.target === modalGestion) {
    modalGestion.style.display = "none";
  }
};
