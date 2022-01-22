
const dotsList = document.querySelectorAll('.dot')

// dummy variable to keep track of translated content in carousel---//
let i = 0;

//---Logic for moving the carousel  content to  left ----//
document.querySelector('.left-icon-container').addEventListener('click', (e) => {

    ++i;
    if (i === 4) {
        i = 0;
    }

    document.querySelectorAll('.person').forEach(element => {
        element.style.transform = `translateX(-${i * 100}%)`
    })

    //-------logic for dots------//
    document.querySelectorAll('.dot').forEach(element => element.classList.remove('active'))
    document.querySelector(`.dot-${i}`).classList.add('active')


})

//----Logic for moving carousel content to right----//
document.querySelector('.right-icon-container').addEventListener('click', () => {
    if (i === 0) {
        i = 4
    }
    --i;
    document.querySelectorAll('.person').forEach(element => {
        element.style.transform = `translateX(-${i * 100}%)`
    })

    //------logic for dots to change color----//
    document.querySelectorAll('.dot').forEach(element => element.classList.remove('active'))
    document.querySelector(`.dot-${i}`).classList.add('active')

})


dotsList.forEach(element => {
    element.addEventListener('click', (e) => {
        dotsList.forEach(el => el.classList.remove('active'))
        e.target.classList.add('active')
        const length = e.target.classList[0].length;
        i = e.target.classList[0][length - 1];

        document.querySelectorAll('.person').forEach(element => element.style.transform = `translateX(0%)`)
        document.querySelectorAll('.person').forEach(element => element.style.transform = `translateX(-${i * 100}%)`);



    })
})



