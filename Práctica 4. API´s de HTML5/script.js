const reproductordelvideo = document.getElementById('reproductordelvideo');
const play = document.getElementById('play');
const pause = document.getElementById('pause');
const up = document.getElementById('up');
const down = document.getElementById('down');
const cargadelvideo = document.getElementById('cargadelvideo');


play.addEventListener('click', () => {
    reproductordelvideo.play();
});

pause.addEventListener('click', () => {
    reproductordelvideo.pause();
});


up.addEventListener('click', () => {
    reproductordelvideo.volume += 0.1;
});

down.addEventListener('click', () => {
    reproductordelvideo.volume -= 0.1;
});

reproductordelvideo.addEventListener('cargadelvideo', () => {
    cargadelvideo.style.display ='none';
})

reproductordelvideo.addEventListener('error', () => {
    alert ('Este vídeo no se puede reproducir');
});


function handleFileSelect (file) {
    if (!file.type.match('video/mp4')) {
        alert('El formato del video no es correcto.');
        return;
    } 

    const fileUrl = URL.createObjectURL(file);
    reproductordelvideo.src = fileUrl;
    cargadelvideo.style.display ='block';

    reproductordelvideo.addEventListener('puedeplay', () => {
        cargadelvideo.style.display = 'none';
        reproductordelvideo.play();
    }, {once: true});
}