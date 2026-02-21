// ================= Search/Input UI =================

// Get elements
const crossIcon = document.getElementById('cross-icon');
const tuinp = document.getElementById('tuinp');
const pl = document.querySelector('.pl');
const cross = document.querySelector('.cross');
const inpl = document.querySelector('.inpl');
const ctrlItems = document.querySelectorAll('.ctrl-k > div');
const upPlay = document.querySelector('.up-play');
const upPause = document.querySelector('.up-pause');
const upNext = document.querySelector('.up-next');
const upPrev = document.querySelector('.up-prev');
let songs = [];        // array of all song URLs
let currentIndex = 0;  // which song is playing


// Input focus/blur handlers
if (tuinp && pl) {
    // Hide label on focus
    tuinp.addEventListener('focus', () => {
        pl.style.display = 'none';
    });

    // Show label on blur only if input is empty
    tuinp.addEventListener('blur', () => {
        if (tuinp.value.trim() === '') {
            pl.style.display = 'flex';
        }
    });
}

// Define updateCross once
const updateCross = () => {
    if (tuinp && cross) {
        cross.style.display =
            document.activeElement === tuinp && tuinp.value.trim() !== ''
                ? 'unset'
                : 'none';
    }
};

if (tuinp && cross) {
    updateCross();
    tuinp.addEventListener('focus', updateCross);
    tuinp.addEventListener('blur', updateCross);
    tuinp.addEventListener('input', updateCross);
}

// Prevent input blur when clicking cross
if (crossIcon && tuinp && pl) {
    crossIcon.addEventListener('mousedown', (e) => {
        e.preventDefault();
    });

    crossIcon.addEventListener('click', () => {
        // Clear input
        tuinp.value = '';

        // Keep focus
        tuinp.focus();

        // Restore placeholder
        pl.style.display = 'flex';

        // Update cross visibility
        updateCross();
    });
}

// Keyboard shortcut (Ctrl+K)
document.addEventListener('keydown', (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        if (tuinp && pl) {
            tuinp.focus();
            pl.style.display = 'none';
        }
    }
});

// UI interactions for .inpl and .ctrl-k
if (inpl && ctrlItems.length) {
    inpl.addEventListener('mouseenter', () => {
        ctrlItems.forEach(i => i.classList.add('visible'));
    });

    inpl.addEventListener('mouseleave', () => {
        ctrlItems.forEach(i => i.classList.remove('visible'));
    });

    inpl.addEventListener('focusin', () => {
        ctrlItems.forEach(i => i.classList.add('visible'));
    });

    inpl.addEventListener('focusout', () => {
        if (tuinp && tuinp.value.trim() === '') {
            ctrlItems.forEach(i => i.classList.remove('visible'));
        }
    });
}

// ================= Offline / Online =================

let MainContainer = document.querySelector('.main');
let OfflineHTML = `
    <div class="offline-content">
        <div class="offline-svg">
            <svg data-encore-id="icon" role="img" aria-hidden="true"
                class="e-91000-icon e-91000-baseline UWXwiu_HfaYaxdIx" viewBox="0 0 24 24"
                style="--encore-icon-height: var(--encore-graphic-size-decorative-larger-4); --encore-icon-width: var(--encore-graphic-size-decorative-larger-4);">
                <path
                    d="M14.86 1.589a1 1 0 0 1 .366 1.366L4.204 22.045a1 1 0 1 1-1.732-1l1.74-3.013A7 7 0 0 1 7.764 5h3.97l1.758-3.045a1 1 0 0 1 1.367-.366zm-4.28 5.41H7.766A5 5 0 0 0 5.21 16.3L10.58 7zm10.582-5.41a1 1 0 0 1 .366 1.366l-1.74 3.013A7 7 0 0 1 16.236 19h-3.97l-1.758 3.045a1 1 0 1 1-1.733-1l11.022-19.09a1 1 0 0 1 1.366-.366zm-7.743 15.41h2.816a5 5 0 0 0 2.554-9.3z">
                </path>
            </svg>
        </div>
        <h1>You're offline</h1>
        <p>Make sure you're online. Spotify works best with an internet connection.</p>
    </div>`;

window.addEventListener('offline', () => {
    console.log('You are now offline');
    if (MainContainer) {
        MainContainer.innerHTML = OfflineHTML;
    }
});

window.addEventListener('online', () => {
    console.log('You are now online');
    let onlineDiv = document.createElement('div');
    onlineDiv.innerText = 'Back Online';
    onlineDiv.classList = 'online';
    document.body.append(onlineDiv);
    setTimeout(() => {
        document.body.removeChild(onlineDiv);
        location.reload();
    }, 1000);
});

// ================= Albums / Library =================

let cardContainer = document.querySelector('.cards');

async function DisplayAlbums() {
    const base = window.location.origin; // safer base
    let r = await fetch(`${base}/projects/Spotify%20Clone/Songs/`);
    let ru = await r.text();
    let div = document.createElement('div');
    div.innerHTML = ru;

    let lisa = [...div.querySelectorAll('li')]
        .slice(1)                         // skip first li
        .flatMap(li => [...li.querySelectorAll('a')]);  // collect <a> from each li

    lisa.forEach(async e => {
        let Folder = e.href.split("/").slice(-2)[1];

        let r = await fetch(`${base}/projects/Spotify%20Clone/Songs/${Folder}/info.json`);
        let ru = await r.json();

        cardContainer.innerHTML = cardContainer.innerHTML + `
        <div class="card">
        <div class="img-section">
        <img src="./Songs/${Folder}/cover.jpg" alt="">
        <button class="play" data-folder="${Folder}">
        <svg data-encore-id="icon" role="img" aria-hidden="true"
        class="e-91000-icon e-91000-baseline" viewBox="0 0 24 24">
        <path
        d="m7.05 3.606 13.49 7.788a.7.7 0 0 1 0 1.212L7.05 20.394A.7.7 0 0 1 6 19.788V4.212a.7.7 0 0 1 1.05-.606">
        </path>
        </svg>
        </button>
        </div>
        <h2>${ru.PlaylistName}</h2>
        <p>${ru.Artist}</p>
        </div>`;
    });
}

async function GetSongs(folder) {
    const base = window.location.origin;
    let response = await fetch(`${base}/projects/Spotify%20Clone/Songs/${folder}`);
    let htmlText = await response.text();
    let div = document.createElement('div');
    div.innerHTML = htmlText;

    let lis = [...div.querySelectorAll('ul li')];

    let spans = lis
        .map(li => li.querySelector('span.name')?.textContent)
        .filter(Boolean);

    let songs = spans.filter(name => name.toLowerCase().endsWith('.mp3'));

    console.log('Songs (.mp3 only):', songs);
    return songs;
}
let AsideScrollToTopBtn = document.querySelector('.scroll-to-top');
let ListerScrollToTopBtn = document.querySelector('button.scroll-to-top-2');

async function ShowSongsOnLibrary(folder) {
    window.currentFolder = folder;
    songs = await GetSongs(folder);
    currentIndex = 0;

    if (AsideScrollToTopBtn) {
        AsideScrollToTopBtn.style.display = 'unset';
    }
    if (ListerScrollToTopBtn) {
        ListerScrollToTopBtn.style.bottom = '8rem';
    }


    let ul = document.querySelector('ul.library');
    if (!ul) {
        console.error('No ul.library found');
        return;
    }

    ul.innerHTML = '';

    for (let i = 0; i < songs.length; i++) {
        const filename = songs[i];
        const cleanName = filename.substring(0, filename.lastIndexOf('.mp3'));

        let liHTML = `
        <li class="library-song" id="Song-${i}">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
        width="24" height="24" color="currentColor" fill="none"
        stroke="currentColor" stroke-width="1.5"
                     stroke-linecap="round" stroke-linejoin="round">
                    <path d="M4.25276 20.302C5.6554 21.5 7.77027 21.5 12 21.5C16.2297 21.5 18.3446 21.5 19.7472 20.302C19.9464 20.1319 20.1319 19.9464 20.302 19.7472C21.5 18.3446 21.5 16.2297 21.5 12C21.5 7.77027 21.5 5.6554 20.302 4.25276C20.1319 4.05358 19.9464 3.86808 19.7472 3.69797C18.3446 2.5 16.2297 2.5 12 2.5C7.77027 2.5 5.6554 2.5 4.25276 3.69797C4.05358 3.86808 3.86808 4.05358 3.69797 4.25276C2.5 5.6554 2.5 7.77027 2.5 12C2.5 16.2297 2.5 18.3446 3.69797 19.7472C3.86808 19.9464 4.05358 20.1319 4.25276 20.302Z" />
                    <path d="M9.05181 16.0523L7.44711 16.6596C7.17802 16.7615 7 17.0193 7 17.3071C7 17.7968 7.49439 18.1317 7.94888 17.9498L8.87139 17.5806C9.25105 17.4287 9.5 17.0608 9.5 16.6517V9.5M15.5518 14.5517L13.9471 15.159C13.678 15.2608 13.5 15.5186 13.5 15.8064C13.5 16.2961 13.9944 16.631 14.4489 16.4491L15.3714 16.08C15.751 15.928 16 15.5602 16 15.1511V8.20125M9.5 9.5L16 8.20125M9.5 9.5V8.65872M16 8.20125V7.35063M16 7.35063V6.5L9.5 7.81743V8.65872M16 7.35063L9.5 8.65872" />
                </svg>
                <h2>${cleanName}</h2>
                <button class="library-play-btn" data-content="${cleanName}">▶</button>
                <button class="library-pause-btn" data-content="${cleanName}">&#x23F8;</button>
            </li>
        `;

        ul.insertAdjacentHTML('beforeend', liHTML);
    }

    console.log('Library populated:', ul.children.length, 'songs');
}

// Playlist cards click → load that folder’s songs into library
const carContainer = document.querySelector('.cards');

if (carContainer) {
    carContainer.addEventListener('click', async (e) => {
        const btn = e.target.closest('.play');
        if (!btn) return;

        const folder = btn.getAttribute('data-folder');
        if (!folder) return;

        await ShowSongsOnLibrary(folder);

    });
}

// ================= Audio Player =================

var currentAudio = null;
var currentSongURL = null;
var AudioDuration = 0;
const PlaybarCurrent = document.querySelector('.timing-cr');
const playbarPlayback = document.querySelector('.dn');
const Playball = document.querySelector('.playball');
const upControlPlay = document.querySelector('.up-control-song-play');
let PlaybarName = document.querySelector('.up-name');
var currentSongName = null;

function formatTime(secs) {
    const mins = Math.floor(secs / 60);
    const seconds = Math.floor(secs % 60);
    return `${mins}:${seconds.toString().padStart(2, '0')}`;
}

function attachTimeUpdater(audio) {
    if (!PlaybarCurrent) return;

    audio.addEventListener('timeupdate', () => {
        PlaybarCurrent.innerText = formatTime(audio.currentTime);
    });
}

function attachProgressUpdater(audio) {
    if (!playbarPlayback || !Playball) return;

    const barWidth = playbarPlayback.offsetWidth;

    audio.addEventListener('timeupdate', () => {
        if (!audio.duration) return;
        const progress = audio.currentTime / audio.duration; // 0 → 1
        const x = progress * barWidth;

        Playball.style.transform = `translateX(${x}px)`;   // or:
        // Playball.style.left = x + 'px';
    });
}


async function PlaySongs(a) {

    if (currentAudio && currentSongURL === a) {
        currentAudio.play();
        syncPlayerUI();

        if (currentSongName) {
            await PlaybarDetails(currentSongName, currentAudio.duration);
        }

        return {
            audio: currentAudio,
            duration: currentAudio.duration,
            volume: currentAudio.volume
        };
    }

    // If different song → reset
    if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
    }

    currentSongURL = a;

    return new Promise((resolve) => {
        let ad = new Audio(a);
        ad.preload = 'metadata';

        ad.addEventListener('loadedmetadata', () => {
            AudioDuration = ad.duration;
            currentAudio = ad;
            ad.addEventListener('play', syncPlayerUI);
            ad.addEventListener('pause', syncPlayerUI);

            attachTimeUpdater(ad);
            attachAudioUpdater(ad);
            attachVolumeUpdater(ad.volume);

            ad.play();
            syncPlayerUI();

            ad.addEventListener('ended', () => {
                if (!songs.length || !window.currentFolder) return;

                // small delay before switching (e.g. 500ms)
                setTimeout(async () => {
                    currentIndex = (currentIndex + 1) % songs.length;

                    const base = window.location.origin;
                    const url = `${base}/projects/Spotify%20Clone/Songs/${window.currentFolder}/${songs[currentIndex]}`;

                    const result = await PlaySongs(url);
                    if (!result) return;

                    const cleanName = songs[currentIndex].replace('.mp3', '');
                    await PlaybarDetails(cleanName, result.duration);
                    currentSongName = cleanName;
                    syncPlayerUI();
                }, 500); // tweak this value for more/less delay
            });




            resolve({
                audio: ad,
                duration: ad.duration,
                volume: ad.volume
            });
        });

        ad.addEventListener('error', (e) => {
            console.error('Audio load error:', e);
            resolve(null);
        });

        let detailer = document.querySelector('.playing-song-detailer');
        if (detailer) {
            if (detailer.style.display === 'none' || detailer.style.display === '') {
                detailer.style.display = 'block';   // or 'block' / 'flex'
            }
        }

        const lister = document.querySelector('.playlist-list');
        if (lister) {
            if (lister.style.height === 'calc(100% - 16px)' || lister.style.height === '') {
                lister.style.height = 'calc(100% - 120px)';
            }
        }
    });
}


// Playbar details
let PlaybarDuration = document.querySelector('.timing-dura');

async function PlaybarDetails(a, dura) {
    if (!PlaybarName || !PlaybarDuration) return;

    PlaybarName.innerText = a;

    const formatTime = (secs) => {
        const mins = Math.floor(secs / 60);
        const seconds = Math.floor(secs % 60);
        return `${mins}:${seconds.toString().padStart(2, '0')}`;
    };

    PlaybarDuration.innerText = formatTime(dura);
}

let isDragging = false;
function GetRatioFromEvent(e) {
    const rect = playbarPlayback.getBoundingClientRect();
    let x = e.clientX - rect.left;

    if (x < 0) x = 0;
    if (x > rect.width) x = rect.width;

    let ratio = x / rect.width;
    return { x, ratio };
}

Playball.addEventListener('mousedown', (e) => {
    e.preventDefault();
    isDragging = true;
});

window.addEventListener('mouseup', (e) => {
    isDragging = false;
})

window.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    if (!currentAudio || !currentAudio.duration) return;

    const { x, ratio } = GetRatioFromEvent(e);
    Playball.style.transform = `translateX(${x}px)`;
    currentAudio.currentTime = ratio * currentAudio.duration;
});

function attachAudioUpdater(audio) {
    if (!playbarPlayback || !Playball) return;

    const barWidth = playbarPlayback.offsetWidth;
    audio.addEventListener('timeupdate', () => {
        if (isDragging) return;
        if (!audio.duration) return;
        const progress = audio.currentTime / audio.duration;
        let x = progress * barWidth;
        Playball.style.transform = `translateX(${x}px)`;
    })
}

playbarPlayback.addEventListener('click', (e) => {
    if (!currentAudio || !currentAudio.duration) return;

    const { x, ratio } = GetRatioFromEvent(e);
    Playball.style.transform = `translateX(${x}px)`;
    currentAudio.currentTime = ratio * currentAudio.duration;
});
let VolumeRange = document.getElementById('volume-range');

let MuteSvg = document.querySelector('.volume-mute');
let HighSvg = document.querySelector('.volume-high-svg');
let LowSvg = document.querySelector('.volume-low-svg');

MuteSvg.addEventListener('click', () => {
    if (!currentAudio) return;

    currentAudio.volume = 1;
    VolumeRange.value = 1;
    VolumeRange.dispatchEvent(new Event('input'));
});

HighSvg.addEventListener('click', () => {
    if (!currentAudio) return;

    currentAudio.volume = 0.5;
    VolumeRange.value = 0.5;
    VolumeRange.dispatchEvent(new Event('input'));
});

LowSvg.addEventListener('click', () => {
    if (!currentAudio) return;

    currentAudio.volume = 0;
    VolumeRange.value = 0;
    VolumeRange.dispatchEvent(new Event('input'));
});

function attachVolumeUpdater(e) {
    VolumeRange.value = e;                 // set slider
    VolumeRange.dispatchEvent(new Event('input')); // run volume + icons logic
}

VolumeRange.addEventListener('input', (e) => {
    console.log('range value:', e.target.value);
    const vol = Number(e.target.value);
    const v = Math.min(Math.max(vol, 0), 1);
    if (currentAudio) currentAudio.volume = v;

    if (v <= 0.0001) {
        MuteSvg.style.display = 'unset';
        HighSvg.style.display = 'none';
        LowSvg.style.display = 'none';
    } else if (v <= 0.5) {
        MuteSvg.style.display = 'none';
        HighSvg.style.display = 'none';
        LowSvg.style.display = 'unset';
    } else {
        MuteSvg.style.display = 'none';
        HighSvg.style.display = 'unset';
        LowSvg.style.display = 'none';
    }
});

VolumeRange.dispatchEvent(new Event('input'));



document.addEventListener('click', async (e) => {
    const playBtn = e.target.closest('.library-play-btn');
    const pauseBtn = e.target.closest('.library-pause-btn');

    // PLAY
    if (playBtn) {
        const songName = playBtn.getAttribute('data-content');
        currentIndex = songs.findIndex(s => s === songName + '.mp3');
        if (currentIndex === -1) currentIndex = 0;
        if (window.currentFolder && songName) {
            const base = window.location.origin;
            const url = `${base}/projects/Spotify%20Clone/Songs/${window.currentFolder}/${songName}.mp3`;

            const result = await PlaySongs(url);
            if (result) {
                // document.querySelectorAll('.library-play-btn').forEach(btn => {
                //     btn.style.display = 'inline-block';
                // });

                // document.querySelectorAll('.library-pause-btn').forEach(btn => {
                //     btn.style.display = 'none';
                // });
                // playBtn.style.display = 'none';

                await PlaybarDetails(songName, result.duration);
                currentSongName = songName;
                // attachTimeUpdater(result.audio);
                // attachAudioUpdater(result.audio);
                // attachVolumeUpdater(result.volume);

                // PlayButtonTransform(playBtn);   // pass the play button element
            }
        }
    }

    // PAUSE
    else if (pauseBtn && currentAudio) {
        currentAudio.pause();
        syncPlayerUI();
        // also stop any timers if you have them
    }
});



function PlayButtonTransform(playBtn) {
    const li = playBtn.closest('.library-song');
    if (!li) return;

    const pauseBtn = li.querySelector('.library-pause-btn');
    if (!pauseBtn) return;

    pauseBtn.style.display = 'inline-block';
}

const AsideContainer = document.querySelector('.asid-2');

if (AsideContainer && AsideScrollToTopBtn) {
    AsideScrollToTopBtn.addEventListener('click', () => {
        AsideContainer.scroll({
            top: 0,
            behavior: 'smooth',
        });
    });
}

let lister = document.querySelector('.playlist-list');


if (lister && ListerScrollToTopBtn) {
    ListerScrollToTopBtn.addEventListener('click', () => {
        console.log(`Clicked`);
        lister.scroll({
            top: 0,
            behavior: 'smooth',
        });
    });
}

function togglePlay() {
    if (!currentAudio) return;

    if (currentAudio.paused) {
        currentAudio.play();
    } else {
        currentAudio.pause();
    }

    syncPlayerUI(); // ✅ REQUIRED
}

if (upControlPlay) {
    upControlPlay.addEventListener('click', togglePlay);
}

// if (upPlay) {
//     upPlay.addEventListener('click', togglePlay);
// }

// if (upPause) {
//     upPause.addEventListener('click', togglePlay);
// }

if (upPrev) {
    upPrev.addEventListener('click', async () => {
        if (!songs.length || !window.currentFolder) return;

        currentIndex--;

        if (currentIndex < 0) {
            currentIndex = songs.length - 1;
        }

        const base = window.location.origin;
        const url = `${base}/projects/Spotify%20Clone/Songs/${window.currentFolder}/${songs[currentIndex]}`;

        const result = await PlaySongs(url);
        if (!result) return;

        const cleanName = songs[currentIndex].replace('.mp3', '');
        await PlaybarDetails(cleanName, result.duration);
        currentSongName = cleanName;
    });
}

if (upNext) {
    upNext.addEventListener('click', async () => {
        if (!songs.length || !window.currentFolder) return;

        currentIndex++;

        if (currentIndex >= songs.length) {
            currentIndex = 0;
        }

        const base = window.location.origin;
        const url = `${base}/projects/Spotify%20Clone/Songs/${window.currentFolder}/${songs[currentIndex]}`;

        const result = await PlaySongs(url);
        if (!result) return;

        const cleanName = songs[currentIndex].replace('.mp3', '');
        await PlaybarDetails(cleanName, result.duration);
        currentSongName = cleanName;
    });
}

function syncPlayerUI() {
    if (!currentAudio) return;

    const allPlayBtns = document.querySelectorAll('.library-play-btn');
    const allPauseBtns = document.querySelectorAll('.library-pause-btn');

    if (currentAudio.paused) {

        // Top control icons
        if (upPlay && upPause) {
            upPause.classList.add('hidden');
            upPlay.classList.remove('hidden');
        }

        if (upControlPlay) {
            upControlPlay.classList.remove('playing');
        }

        // Library icons
        allPauseBtns.forEach(btn => btn.style.display = 'none');
        allPlayBtns.forEach(btn => btn.style.display = 'inline-block');

    } else {

        if (upPlay && upPause) {
            upPlay.classList.add('hidden');
            upPause.classList.remove('hidden');
        }

        if (upControlPlay) {
            upControlPlay.classList.add('playing');
        }

        // Show pause only for current song
        allPauseBtns.forEach(btn => btn.style.display = 'none');
        allPlayBtns.forEach(btn => btn.style.display = 'inline-block');

        if (currentSongName) {
            const currentPlayBtn = document.querySelector(
                `.library-play-btn[data-content="${currentSongName}"]`
            );

            if (currentPlayBtn) {
                currentPlayBtn.style.display = 'none';

                const li = currentPlayBtn.closest('.library-song');
                const pauseBtn = li.querySelector('.library-pause-btn');
                if (pauseBtn) pauseBtn.style.display = 'inline-block';
            }
        }
    }
}


const NextBtn = document.querySelector('.up-control-song-next');
const PrevBtn = document.querySelector('.up-control-song-previous');

if (NextBtn) {
    NextBtn.addEventListener('click', async () => {
        if (!songs.length || !window.currentFolder) return;
        currentIndex = (currentIndex + 1) % songs.length;
        const base = window.location.origin;
        const url = `${base}/projects/Spotify%20Clone/Songs/${window.currentFolder}/${songs[currentIndex]}`;
        const result = await PlaySongs(url);
        if (result) {
            const cleanName = songs[currentIndex].replace('.mp3', '');
            await PlaybarDetails(cleanName, result.duration);
            currentSongName = cleanName;
            syncPlayerUI();
        }
    });
}

if (PrevBtn) {
    PrevBtn.addEventListener('click', async () => {
        if (!songs.length || !window.currentFolder) return;
        currentIndex = currentIndex === 0 ? songs.length - 1 : currentIndex - 1;
        const base = window.location.origin;
        const url = `${base}/projects/Spotify%20Clone/Songs/${window.currentFolder}/${songs[currentIndex]}`;
        const result = await PlaySongs(url);
        if (result) {
            const cleanName = songs[currentIndex].replace('.mp3', '');
            await PlaybarDetails(cleanName, result.duration);
            currentSongName = cleanName;
            syncPlayerUI();
        }
    });
}


// ================= Main =================

async function Main() {
    await DisplayAlbums();
}

Main();
