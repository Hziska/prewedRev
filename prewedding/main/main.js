const barMenu = document.querySelector('.bar-menu')
const navMenu = document.querySelector('.nav-menu')
const open = document.querySelector('.buka')
const song = document.getElementById('song')

barMenu.addEventListener('click',function(){
    navMenu.classList.toggle('menu-active')
    barMenu.classList.toggle('toggle')
})
simplyCountdown('.simply-countdown',{
    year: 2024, // required
        month: 8, // required
        day: 17, // required
        hours: 8, // Default is 0 [0-23] integer
        words: { //words displayed into the countdown
            days: { singular: 'hari', plural: 'hari' },
            hours: { singular: 'jam', plural: 'jam' },
            minutes: { singular: 'menit', plural: 'menit' },
            seconds: { singular: 'detik', plural: 'detik' }
        },
});

open.addEventListener('click', function(){
    song.play()
})
