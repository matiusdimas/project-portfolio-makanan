const tombol1 = document.getElementById('tombol-1')
const tombol2 = document.getElementById('tombol-2')
const tombol3 = document.getElementById('tombol-3')
const sections = document.getElementById('section')
const sec = document.getElementById('sec');
const sec2= document.querySelectorAll('.sec')[1];
sections.onscroll = () => {
    (sections.scrollLeft == 0) ? tombol1.classList.add('warna') : tombol1.classList.remove('warna');
    (sections.scrollLeft == sec2.clientWidth ) ? tombol2.classList.add('warna') : tombol2.classList.remove('warna');
    (sections.scrollLeft + sections.clientWidth > sec.clientWidth + sections.offsetWidth) ? tombol3.classList.add('warna') : tombol3.classList.remove('warna');
}

tombol1.addEventListener('click', () => {
    sections.scrollLeft = 0
})
tombol2.addEventListener('click', () => {
    sections.scrollLeft = 1000
})
tombol3.addEventListener('click', () => {
    sections.scrollLeft = sec.clientWidth + sections.offsetWidth;
})
setInterval(function () {
    sections.scrollLeft += 1000; // Menggeser scroll dari kiri ke kanan
    const lastImage = sec.clientWidth + sections.offsetWidth;
    if (sections.scrollLeft + sections.clientWidth > lastImage) {
        sections.scrollLeft = 0
    }

}, 4000); // Kecepatan scroll (dalam milidetik)

