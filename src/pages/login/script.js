// --- 1. MEMBUAT TAMPILAN (RENDER HTML) ---
document.querySelector('#app').innerHTML = `
  <!-- NAVBAR -->
  <nav class="bg-white border-b border-gray-200 py-4 px-6 md:px-16 flex justify-between items-center shadow-sm sticky top-0 z-50">
    <div class="font-bold text-2xl text-[#2d3e50] tracking-tight">dicoding</div>
    
    <!-- Menu Links (Tampil di layar besar) -->
    <div class="hidden md:flex items-center gap-8 text-[15px] font-medium text-gray-500">
      <a href="#" class="hover:text-[#2d3e50] transition-colors">Home</a>
      <a href="#" class="hover:text-[#2d3e50] transition-colors">Dashboard</a>
      <a href="#" class="text-blue-700 font-bold border-b-2 border-blue-700 pb-1">Login</a>
      <a href="#" class="hover:text-[#2d3e50] transition-colors">Register</a>
    </div>

    <!-- Avatar Placeholder -->
    <div class="flex gap-2">
      <div class="w-8 h-8 bg-gray-200 rounded-full"></div>
    </div>
  </nav>

  <!-- CONTENT UTAMA (Tengah) -->
  <main class="flex-1 flex items-center justify-center p-4">
    
    <!-- KARTU LOGIN -->
    <div class="bg-white rounded-2xl shadow-xl flex flex-col md:flex-row overflow-hidden max-w-[950px] w-full">

      <!-- BAGIAN KIRI: GAMBAR (Hidden di HP) -->
      <div class="hidden md:flex md:w-1/2 bg-gray-100 items-center justify-center relative bg-[#eef2f5]">
        <!-- Menggunakan gambar placeholder yang mirip jika gambar lokal tidak ada -->
        <img src="https://dicoding-web-img.sgp1.cdn.digitaloceanspaces.com/original/commons/homepage-hero.png" 
             alt="Dicoding Hero" 
             class="w-full h-full object-cover object-center"
             onerror="this.src='https://placehold.co/600x600/e2e8f0/a0aec0?text=Hero+Image'" />
      </div>

      <!-- BAGIAN KANAN: FORM -->
      <div class="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center">

        <div class="mb-8">
          <h2 class="text-gray-500 text-[14px] font-medium mb-2">Selamat Datang di Dicoding</h2>
          <h1 class="text-[26px] md:text-[28px] font-bold text-[#2d3e50] leading-tight">
            Permudah alur belajar dan produktivitasmu
          </h1>
        </div>

        <form id="login-form" class="flex flex-col gap-5">
          
          <!-- Input Email -->
          <div class="flex flex-col">
             <input type="email" placeholder="Email" required
              class="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#2d3e50] focus:border-transparent transition-all placeholder-gray-400">
          </div>

          <!-- Input Password & Toggle -->
          <div class="relative w-full">
            <input type="password" id="password" placeholder="Password" required
              class="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#2d3e50] focus:border-transparent transition-all placeholder-gray-400 pr-12">
            
            <!-- BUTTON TOGGLE PASSWORD -->
            <button type="button" id="togglePassword" 
              class="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 focus:outline-none p-1 cursor-pointer"
              title="Tampilkan/Sembunyikan Password">
              
              <!-- STATE AWAL: PASSWORD SEMBUNYI (...) -> IKON MATA TERBUKA (Klik untuk melihat) -->
              <svg id="icon-show" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>

              <!-- STATE KEDUA: PASSWORD TERLIHAT (teks) -> IKON MATA DICORET (Klik untuk sembunyi) -->
              <svg id="icon-hide" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 hidden">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
              </svg>
            </button>
          </div>

          <!-- Lupa Password -->
          <div class="flex justify-end -mt-1">
            <a href="#" class="text-[13px] font-medium text-gray-500 hover:text-[#2d3e50] transition-colors">Lupa Password?</a>
          </div>

          <!-- Tombol Login -->
          <button type="submit"
            class="bg-[#2d3e50] hover:bg-[#1a2530] text-white rounded-lg py-3 text-[16px] font-semibold mt-2 shadow-md transition-all active:scale-[0.98]">
            Login
          </button>
        </form>

        <!-- Divider / Footer Form -->
        <div class="mt-8 text-center text-[14px] text-gray-600">
          Belum Punya Akun? 
          <a href="#" class="text-[#2d3e50] font-bold hover:underline ml-1">Daftar Sekarang</a>
        </div>

      </div>
    </div>
  </main>
`;

// --- 2. LOGIKA INTERAKSI ---

// A. Handle Login Submit
document.getElementById('login-form').addEventListener('submit', (e) => {
  e.preventDefault();
  alert('Login Berhasil!');
});

// B. Handle Toggle Password (Logika Tombol Aksi)
const toggleBtn = document.getElementById('togglePassword');
const passwordInput = document.getElementById('password');
const iconShow = document.getElementById('icon-show'); // Mata Terbuka
const iconHide = document.getElementById('icon-hide'); // Mata Coret

toggleBtn.addEventListener('click', () => {
  // Cek apakah sekarang password sedang tersembunyi?
  const isCurrentlyPassword = passwordInput.type === 'password';

  // 1. Ubah tipe input
  passwordInput.type = isCurrentlyPassword ? 'text' : 'password';

  // 2. Ubah Ikon
  if (isCurrentlyPassword) {
    // Input berubah jadi TEXT (Terlihat)
    // Tampilkan tombol "Sembunyikan" (Mata Coret)
    iconShow.classList.add('hidden');
    iconHide.classList.remove('hidden');
  } else {
    // Input berubah jadi PASSWORD (Tersembunyi)
    // Tampilkan tombol "Lihat" (Mata Terbuka)
    iconShow.classList.remove('hidden');
    iconHide.classList.add('hidden');
  }
});