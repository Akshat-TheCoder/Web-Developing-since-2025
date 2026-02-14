
// Get elements
const crossIcon = document.getElementById('cross-icon');
const tuinp = document.getElementById('tuinp');
const pl = document.querySelector('.pl');
const cross = document.querySelector('.cross');
const inpl = document.querySelector('.inpl');
const ctrlItems = document.querySelectorAll('.ctrl-k > div');

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
crossIcon.addEventListener('mousedown', (e) => {
    e.preventDefault();
});

crossIcon.addEventListener('click', () => {
    console.log('Cross clicked!');

    // Clear input
    tuinp.value = '';

    // Keep focus
    tuinp.focus();

    // Restore placeholder
    pl.style.display = 'flex';

    // Update cross visibility
    updateCross();
});


// Keyboard shortcut (Ctrl+K)
document.addEventListener('keydown', (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        tuinp.focus();
        pl.style.display = 'none';
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
        if (tuinp.value.trim() === '') {
            ctrlItems.forEach(i => i.classList.remove('visible'));
        }
    });
}


let MainContainer = document.querySelector('.main');
let OfflineHTML = `            <div class="offline-content">
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
            </div>`


window.addEventListener('offline', () => {
    console.log('You are now offline');
    // Show offline banner, disable play button, cache data
    MainContainer.innerHTML = OfflineHTML;
});

window.addEventListener('online', (listener) => {
    console.log(`you are now online`);
    let onlineDiv = document.createElement('div');
    onlineDiv.innerText = 'Back Online';
    onlineDiv.classList = 'online';
    document.body.append(onlineDiv);
    setTimeout(() => {
        document.body.removeChild(onlineDiv);
        location.reload();
    }, 1000);
})


// // Fetching songs

// async function FetchSongs(params) {
//     let a = await fetch("http://127.0.0.1:5501/projects/Spotify%20Clone/Songs/Dhurandhar/")
//     let response = await a.text();
//     // console.log(response);
//     let div = document.createElement('div');
//     div.innerHTML = response;
//     let tds = div.querySelectorAll('.icon-mp3, icon-default')
//     console.log(tds);

//     let songs = [];
//     for (let index = 0; index < tds.length; index++) {
//         const element = tds[index];
//         if (element.href.endsWith(".mp3")) {
//             songs.push(element.href);
//         }
//     }
//     // console.log(songs);
//     return songs;
// }

// async function GetSongs() {
//     let songs = await FetchSongs();
//     console.log(songs);

//     //play the first song 
//     var ad = new Audio(songs[0]);
//     ad.play();
// }

let cardContainer = document.querySelector('.cards')

async function DisplayAlbums() {
    let r = await fetch('http://127.0.0.1:5501/projects/Spotify%20Clone/Songs/');
    let ru = await r.text();
    let div = document.createElement('div');
    div.innerHTML = ru;

    let lisa = [...div.querySelectorAll('li')]
        .slice(1)                           // skip first li
        .flatMap(li => [...li.querySelectorAll('a')]);  // collect <a> from each li

    Array.from(lisa).forEach(async e => {
        let Folder = e.href.split("/").slice(-2)[1];

        let r = await fetch(`http://127.0.0.1:5501/projects/Spotify%20Clone/Songs/${Folder}/info.json`);
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
    let response = await fetch(`http://127.0.0.1:5501/projects/Spotify%20Clone/Songs/${folder}`);
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

async function ShowSongsOnLibrary(folder) {
    let songs = await GetSongs(folder);

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
            <li class="library-song" id="${i}">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                     width="24" height="24" color="currentColor" fill="none"
                     stroke="currentColor" stroke-width="1.5"
                     stroke-linecap="round" stroke-linejoin="round">
                    <path d="M4.25276 20.302C5.6554 21.5 7.77027 21.5 12 21.5C16.2297 21.5 18.3446 21.5 19.7472 20.302C19.9464 20.1319 20.1319 19.9464 20.302 19.7472C21.5 18.3446 21.5 16.2297 21.5 12C21.5 7.77027 21.5 5.6554 20.302 4.25276C20.1319 4.05358 19.9464 3.86808 19.7472 3.69797C18.3446 2.5 16.2297 2.5 12 2.5C7.77027 2.5 5.6554 2.5 4.25276 3.69797C4.05358 3.86808 3.86808 4.05358 3.69797 4.25276C2.5 5.6554 2.5 7.77027 2.5 12C2.5 16.2297 2.5 18.3446 3.69797 19.7472C3.86808 19.9464 4.05358 20.1319 4.25276 20.302Z" />
                    <path d="M9.05181 16.0523L7.44711 16.6596C7.17802 16.7615 7 17.0193 7 17.3071C7 17.7968 7.49439 18.1317 7.94888 17.9498L8.87139 17.5806C9.25105 17.4287 9.5 17.0608 9.5 16.6517V9.5M15.5518 14.5517L13.9471 15.159C13.678 15.2608 13.5 15.5186 13.5 15.8064C13.5 16.2961 13.9944 16.631 14.4489 16.4491L15.3714 16.08C15.751 15.928 16 15.5602 16 15.1511V8.20125M9.5 9.5L16 8.20125M9.5 9.5V8.65872M16 8.20125V7.35063M16 7.35063V6.5L9.5 7.81743V8.65872M16 7.35063L9.5 8.65872" />
                </svg>
                <h2>${cleanName}</h2>
                <button class="library-play-btn">▶</button>
            </li>
        `;

        ul.insertAdjacentHTML('beforeend', liHTML);
    }

    console.log('Library populated:', ul.children.length, 'songs');
}

/* Playlist cards click → load that folder’s songs into library */
const carContainer = document.querySelector('.cards');

carContainer.addEventListener('click', async (e) => {
    const btn = e.target.closest('.play');
    if (!btn) return;

    const folder = btn.getAttribute('data-folder');
    if (!folder) return;

    await ShowSongsOnLibrary(folder);
});

async function Main() {
    await DisplayAlbums();         // show albums
}

Main();



