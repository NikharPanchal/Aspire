let btn_more = document.querySelector('.more_btn');

const section1 = document.querySelector('.header');

btn_more = document.addEventListener('click', function (event) {
    const s1cords = section1.getBoundingClientRect();
    console.log(s1cords);
});