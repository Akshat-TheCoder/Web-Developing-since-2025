
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