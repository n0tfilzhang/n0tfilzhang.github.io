const splash = document.querySelector('.splash')

document.addEventListener('DOMContentLoaded', (e) =>{
    setTimeout(()=>{
        splash.classList.add('display-none')
    }, 2000);
})

setInterval(createSnowFlake, 50);

function createSnowFlake()
{
    const snowFlake = document.createElement('i');
    snowFlake.classList.add('bi');
    snowFlake.classList.add('bi-snow');
    snowFlake.style.left = Math.random() * window.innerWidth + 'px';
    snowFlake.style.animationDuration = Math.random() * 3 + 2 + 's';
    snowFlake.style.opacity = Math.random();
    snowFlake.style.fontSize = Math.random() * 10 + 10 + 'px';

    document.body.appendChild(snowFlake);

    setTimeout(() => {
        snowFlake.remove();
    }, 5000)
}
