//Toggle Class active
const navbarNav = document.querySelector('.navbar-nav');

// Ketika hamburger menu di klik
document.querySelector('#hamburger-menu'). onclick = () => {
    navbarNav.classList.toggle('active');
};

// klik di luar sidebar untuk menghilangkan nav
const hamburger = document.querySelector('#hamburger-menu');

document.addEventListener('click', function(e) {
    if(!hamburger.contains(e.target) && !navbarNav.contains(e.taget)) {
        navbarNav.classList.remove('active');
    }
});


// --- WhatsApp Order Functionality ---
const orderButtons = document.querySelectorAll('.order-now-btn');
const whatsappNumber = '6285813136729'; // Replace with your WhatsApp number (e.g., 6281234567890 for Indonesia)

orderButtons.forEach(button => {
    button.addEventListener('click', function(e) {
        e.preventDefault(); // Prevent the default link behavior

        const menuCard = this.closest('.menu-card'); // Get the parent menu card
        const itemName = menuCard.querySelector('.menu-card-title').innerText.replace(/-/g, '').trim(); // Get item name, clean up extra hyphens
        const itemPrice = menuCard.querySelector('.menu-card-price').innerText.trim(); // Get item price

        const message = encodeURIComponent(`Halo, saya ingin pesan undangan web: ${itemName} (${itemPrice}). Mohon info selanjutnya.`);
        const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;

        window.open(whatsappUrl, '_blank'); // Open WhatsApp in a new tab/window
    });
});


// Dapatkan elemen form kontak
const contactForm = document.getElementById('contactForm');

// Tambahkan event listener untuk pengiriman form
contactForm.addEventListener('submit', function(event) {
    // Cegah perilaku default pengiriman form
    event.preventDefault();

    // Dapatkan nilai input
    const name = document.getElementById('nameInput').value;
    const email = document.getElementById('emailInput').value;
    const phone = document.getElementById('phoneInput').value;

    // Definisikan nomor WhatsApp 
    const whatsappNumber = '6282123056411'; //  nomor WhatsApp 

    // Buat pesan 
    const message = `Halo kak! kelihatanya menarik tuh, saya boleh pesan, dengan nama ${name} Email: ${email} No. HP: ${phone} Terima kasih!`;

    // Encode pesan untuk URL
    const encodedMessage = encodeURIComponent(message);

    // Buat tautan WhatsApp
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

    // Buka WhatsApp di tab baru
    window.open(whatsappLink, '_blank');

    // Opsional: kosongkan kolom form setelah pengiriman
    contactForm.reset();
});