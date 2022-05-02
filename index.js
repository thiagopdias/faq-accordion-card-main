let sobeFlecha = document.querySelectorAll('.image-arrow')
let title = document.querySelectorAll('.question-title')
let awnser = document.querySelectorAll('.awnser')

for(let i = 0; i < title.length; i++) {
    title[i].addEventListener('click', function() {
        sobeFlecha[i].classList.toggle("active-arrow")
        title[i].classList.toggle('active-title')
        awnser[i].classList.toggle('active-awnser')
    })
}