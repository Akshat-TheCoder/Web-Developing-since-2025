// const btn = document.getElementById("xd");
// const box = document.getElementById("saab");
// const svgg = document.getElementsByClassName("svgg");
// btn.addEventListener("click", function () {
//     saab.classList.toggle('high');
// });
// const saab = document.getElementById("saab");

// saab.addEventListener("click", function () {
//     saab.classList.toggle("saab-transition");
// });

const boxes = document.querySelectorAll('.box1');

boxes.forEach(box => {
    const btn = box.querySelector('.faq-btn');
    const answer = box.querySelector('.sab');
    const fh = box.querySelector('.svgg')

    btn.addEventListener('click', () => {
        answer.classList.toggle('high');
        fh.classList.toggle('gh');
    });
});

const toxes = document.querySelector('.axsd');
const taxes = document.querySelector('.pa');

toxes.addEventListener('click', () => {
    taxes.classList.toggle('px');
    toxes.classList.toggle('nh');
});