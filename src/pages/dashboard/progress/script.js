export function initProgressPage() {
    console.log("Initializing Progress Page Logic...");

    const detailButtons = document.querySelectorAll('.detail-button');
    const sidebarItems = document.querySelectorAll('.sidebar-item');

    // Handle tombol Detail
    detailButtons.forEach(button => {
        // Hapus listener lama (clone node method) untuk mencegah double click event
        const newButton = button.cloneNode(true);
        button.parentNode.replaceChild(newButton, button);

        newButton.addEventListener('click', (e) => {
            // Ambil text dari span saudara sebelumnya
            const classItem = e.target.closest('.class-item');
            const className = classItem.querySelector('span').textContent;
            alert(`Melihat detail kelas: "${className}"`);
        });
    });

    // Handle Sidebar active state (Visual saja, navigasi dihandle main.js)
    sidebarItems.forEach(item => {
        item.addEventListener('click', () => {
            // Hapus active dari semua
            sidebarItems.forEach(i => i.classList.remove('active'));
            // Tambah active ke yang diklik
            item.classList.add('active');
        });
    });
}