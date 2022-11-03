// Satu
const teks = 'Teks ini Sudah Diubah memakai DOM';
const inpSatu = document.getElementById('inpSatu');
const pSatu = document.getElementById('pSatu');
inpSatu.value = teks;
pSatu.innerHTML = teks;

// Dua
const row = '<tr><td>Nama</td><td>Jl Ryacudu</td></tr>';
const tbodyDua = document.getElementById('tbodyDua');
tbodyDua.innerHTML += row;


// Tiga
const btnTiga = document.getElementById('btnTiga');
btnTiga.addEventListener('click', function (e) {
  window.location = 'dua.html';
});
p3.onclick = Color;