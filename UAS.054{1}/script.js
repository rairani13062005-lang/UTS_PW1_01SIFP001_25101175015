document.addEventListener("DOMContentLoaded", function () {
    
    // --- 1. Logika Navigasi Halaman ---
    const links = document.querySelectorAll(".nav-link");
    const pages = document.querySelectorAll(".page");

    links.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault(); // Mencegah reload halaman

            // Hapus class 'active' dari semua menu navigasi
            links.forEach(l => l.classList.remove("active"));
            // Tambahkan class 'active' ke menu yang diklik
            this.classList.add("active");

            // Sembunyikan semua halaman
            pages.forEach(page => page.classList.remove("active-page"));

            // Tampilkan halaman target berdasarkan atribut data-target
            const targetPageId = this.getAttribute("data-target");
            document.getElementById(targetPageId).classList.add("active-page");
        });
    });

    // --- 2. Logika Hitung Transaksi Kopi ---
    const btnHitung = document.getElementById("btnHitung");
    if (btnHitung) {
        btnHitung.addEventListener("click", function () {
            const hargaKopi = parseInt(document.getElementById("kopiSelect").value);
            const jumlah = parseInt(document.getElementById("jumlah").value);
            
            if (isNaN(jumlah) || jumlah < 1) {
                alert("Silakan masukkan jumlah minimal 1 gelas.");
                return;
            }

            const total = hargaKopi * jumlah;
            
            // Tampilkan hasil dengan format mata uang rupiah
            document.getElementById("totalHarga").innerText = "Rp " + total.toLocaleString("id-ID");
            document.getElementById("hasilTransaksi").style.display = "block";
        });
    }

    // --- 3. Logika Sederhana Form Login ---
    const loginForm = document.getElementById("loginForm");
    if (loginForm) {
        loginForm.addEventListener("submit", function (e) {
            e.preventDefault();
            const username = document.getElementById("username").value;
            const password = document.getElementById("password").value;

               // Menampilkan pesan selamat datang
            alert(`Selamat datang kembali, ${username}!`);
            
            // Berpindah ke halaman beranda setelah tombol OK ditekan
            window.location.href = "beranda.html";
        });
    }
});