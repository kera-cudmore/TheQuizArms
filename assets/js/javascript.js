// MODAL - Open and Close
// Modal created using tutorial - https://www.youtube.com/watch?v=XH5OW46yO8I

const openModal = document.getElementById("open-modal");
const closeModal = document.getElementById("close-modal");
const modalContainer = document.getElementById("modal-container");


openModal.addEventListener("click", () => {
    modalContainer.classList.add("show");
});

closeModal.addEventListener("click", () => {
    modalContainer.classList.remove("show");
});