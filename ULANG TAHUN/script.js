// ==========================================
// LOGIKA UNTUK HALAMAN 1 (index.html)
// ==========================================
const btnOpen = document.getElementById('btn-open');
const btnNo = document.getElementById('btn-no');

// Jika tombol "Open it" dan "No" ada di halaman ini
if (btnOpen && btnNo) {
    btnOpen.addEventListener('click', function() {
        window.location.href = 'pertanyaan.html';
    });

    btnNo.addEventListener('click', function() {
        alert('Parah jahat banget! 😢');
    });
}

// ==========================================
// LOGIKA UNTUK HALAMAN 2 (pertanyaan.html)
// ==========================================
const btnJawab = document.getElementById('btn-jawab');
const inputJawaban = document.getElementById('jawaban');

// Jika tombol "Jawab" dan kolom input ada di halaman ini
if (btnJawab && inputJawaban) {
    btnJawab.addEventListener('click', function() {
        const jawaban = inputJawaban.value.toLowerCase().trim();
        
        if (jawaban === 'naya') {
            window.location.href = 'video-page.html';
        } else {
            alert('Tetotttt! Salah ihh jawabannya 😜');
            inputJawaban.value = ''; // Kosongin isian
        }
    });
}

// ==========================================
// LOGIKA UNTUK HALAMAN 3 (video-page.html)
// ==========================================
const videoPlayer = document.getElementById('video-surprise');
const btnLanjut = document.getElementById('btn-lanjut');

// Jika video dan tombol "Lanjut" ada di halaman ini
if (videoPlayer && btnLanjut) {
    // Saat video selesai diputar sampai akhir
    videoPlayer.addEventListener('ended', function() {
        btnLanjut.classList.remove('sembunyi'); // Munculkan tombol
    });

    // Saat tombol lanjut diklik
    btnLanjut.addEventListener('click', function() {
        window.location.href = 'ucapan.html';
    });
}

// ==========================================
// LOGIKA UNTUK HALAMAN 4 (ucapan.html)
// ==========================================
const btnMulaiPesan = document.getElementById('btn-mulai-pesan');
const tempatNgetik = document.getElementById('tempat-ngetik');
const laguBgm = document.getElementById('lagu-bgm');
const btnHapus = document.getElementById('btn-hapus'); // Ambil elemen tombol hapus

if (btnMulaiPesan && tempatNgetik) {
    const pesan = "Mungkin sampai sekarang kamu masih anggep aku orang yang sama kayak dulu! yang bakal ninggalin kamu atau nggak bisa dipercaya. Aku sadar, mau apa pun yang aku lakuin, pandangan kamu ke aku nggak bakal berubah. \n\n Website ini hadiah ulang tahun buat kamu, sekaligus usaha terakhir aku.\n\n Habis ini, aku bakal berhenti. Aku bakal hapus semuanya entah itu foto, video, dan semua kenangan tentang kita. Aku nggak mau ganggu kamu lagi dengan bayang-bayang masa lalu aku yang buruk di pikiran kamu. \n\n Makasih buat semuanya, dan semoga kamu bahagia.\n\n I love you so much! ❤️";
    let indexHuruf = 0;

    btnMulaiPesan.addEventListener('click', function() {
        btnMulaiPesan.classList.add('sembunyi');
        
        if(laguBgm) {
            laguBgm.play();
        }

        confetti({
            particleCount: 150,
            spread: 70,
            origin: { y: 0.6 }
        });

        function ngetik() {
            if (indexHuruf < pesan.length) {
                if(pesan.charAt(indexHuruf) === '\n') {
                    tempatNgetik.innerHTML += '<br>';
                } else {
                    tempatNgetik.innerHTML += pesan.charAt(indexHuruf);
                }
                indexHuruf++;
                setTimeout(ngetik, 50); 
            } else {
                // --- KETIKA TEKS SELESAI DIKETIK ---
                // Beri jeda 1 detik sebelum tombol "Hapus Kenangan" muncul biar dramatis
                setTimeout(() => {
                    btnHapus.classList.remove('sembunyi');
                }, 1000);
            }
        }
        ngetik();
    });
}

// Logika buat tombol Hapus Kenangan pindah ke halaman bunga
if (btnHapus) {
    btnHapus.addEventListener('click', function() {
        // Ini bakal pindah ke file bunga.html yang akan kamu buat nanti
        window.location.href = 'bunga.html';
    });
}