
// ========================================
// HAPPY BIRTHDAY ANARAA
// JAVASCRIPT
// ========================================


// OPENING + MUSIC

function startSurprise() {

    const music = document.getElementById('birthdayMusic');

    document.getElementById('content').classList.remove('hidden');

    document.getElementById('home').style.display = 'none';

    window.scrollTo(0, 0);

    // PLAY BIRTHDAY MUSIC
    if (music) {
        music.volume = 0.5;

        music.play().catch(error => {
            console.log('Musik gagal diputar:', error);
        });
    }

}


// MINI GAME 1: PICK A GIFT

const gifts = [
    [
        'A wish for you ✨',
        'May this new chapter bring you calm days, exciting adventures, genuine happiness, and beautiful surprises.'
    ],
    [
        'A little reminder 🌷',
        'You are appreciated more than you know. Keep being your lovely self, and never stop believing in the things you dream of.'
    ],
    [
        'A birthday promise 💌',
        'Here is to more laughter, more stories, and more memories after that first hello at MPLS. Cheers to you!'
    ]
];

/** @param {number} i */
function openGift(i) {

    document.getElementById('giftTitle').textContent = gifts[i][0];

    document.getElementById('giftText').textContent = gifts[i][1];

    document.getElementById('giftResult').classList.remove('hidden');

    document.getElementById('giftResult').scrollIntoView({
        behavior: 'smooth',
        block: 'center'
    });

    confetti(18);

}


function resetGift() {

    document.getElementById('giftResult').classList.add('hidden');

}


// MINI GAME 2: BIRTHDAY QUIZ

const qs = [
    {
        q: 'What is the best birthday ingredient?',
        a: [
            'A little laughter',
            'A mountain of homework',
            'A rainy Monday'
        ],
        correct: 0,
        why: 'Exactly! A day feels brighter with laughter.'
    },
    {
        q: 'Which wish should always come true?',
        a: [
            'More sleep only',
            'Happiness and good health',
            'More deadlines'
        ],
        correct: 1,
        why: 'A lovely answer. Wishing you both, always!'
    },
    {
        q: 'What can make an ordinary day special?',
        a: [
            'Kind people & little moments',
            'A broken alarm',
            'An empty snack jar'
        ],
        correct: 0,
        why: 'That is the magic of little moments. ♡'
    }
];


let qi = 0;
let answered = false;


function renderQ() {

    answered = false;

    const q = qs[qi];

    document.getElementById('questionCount').textContent =
        `QUESTION ${qi + 1} OF ${qs.length}`;

    document.getElementById('question').textContent = q.q;

    document.getElementById('quizResult').textContent = '';

    document.getElementById('nextQuestion').classList.add('hidden');

    const box = document.getElementById('options');

    box.innerHTML = '';

    q.a.forEach((a, i) => {

        const b = document.createElement('button');

        b.textContent = '✧  ' + a;

        b.onclick = () => answer(i);

        box.appendChild(b);

    });

}


/** @param {number} i */
function answer(i) {

    if (answered) return;

    answered = true;

    const q = qs[qi];

    document.getElementById('quizResult').textContent =
        (i === q.correct ? 'Correct! ' : 'Good try! ') + q.why;

    [...document.querySelectorAll('#options button')].forEach(b => {

        b.disabled = true;

    });

    const n = document.getElementById('nextQuestion');

    n.textContent = qi === qs.length - 1
        ? 'See you at the surprise ✦'
        : 'Next question →';

    n.classList.remove('hidden');

}


function nextQ() {

    if (qi < qs.length - 1) {

        qi++;

        renderQ();

    } else {

        document.getElementById('questionCount').textContent =
            'QUIZ COMPLETE';

        document.getElementById('question').textContent =
            'You did it, Anaraa!';

        document.getElementById('options').innerHTML = '';

        document.getElementById('quizResult').textContent =
            'A little game, a lot of birthday wishes. ♡';

        document.getElementById('nextQuestion').classList.add('hidden');

        confetti(35);

    }

}


// FINAL SURPRISE: BIRTHDAY WISH

function makeWish() {

    document.getElementById('wishBtn').classList.add('hidden');

    document.getElementById('wishMessage').classList.remove('hidden');

    confetti(75);

}


// CONFETTI ANIMATION

/** @param {number} n */
function confetti(n) {

    const chars = ['✦', '✧', '❀', '♡', '·'];

    for (let i = 0; i < n; i++) {

        let e = document.createElement('span');

        e.className = 'confetti';

        e.textContent = chars[
            Math.floor(Math.random() * chars.length)
        ];

        e.style.left = Math.random() * 100 + 'vw';

        e.style.color = [
            '#b99a62',
            '#c98f96',
            '#d9b7a8',
            '#a77a7d'
        ][i % 4];

        e.style.fontSize = (12 + Math.random() * 15) + 'px';

        e.style.animationDuration = (2.5 + Math.random() * 3) + 's';

        document.body.appendChild(e);

        setTimeout(() => e.remove(), 6000);

    }

}


// INITIALIZE QUIZ

renderQ();

