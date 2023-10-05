// Panggil fungsi untuk menampilkan pop-up saat window dimuat
window.onload = function() {
    showPopup();
};

// Fungsi untuk menampilkan pop-up
function showPopup() {
    const popupContainer = document.getElementById('popup-container');
    const popupBackground = document.createElement('div');
    popupBackground.classList.add('popup-background');

    // Tambahkan elemen latar belakang ke body
    document.body.appendChild(popupBackground);

    // Tambahkan efek blur ke body
    document.body.style.backdropFilter = 'blur(5px)';

    popupContainer.style.display = 'block';
}

function closePopup() {
    const popupContainer = document.getElementById('popup-container');
    const popupBackground = document.querySelector('.popup-background');

    // Hapus elemen latar belakang
    if (popupBackground) {
        popupBackground.remove();
    }

    // Hapus efek blur
    document.body.style.backdropFilter = 'none';

    popupContainer.style.display = 'none';
}
