const SCENES = [
    {
        img: './images/la-rambla-barcelona-tourist.jpg',
        eyebrow: 'Volet 3 — Tourisme international',
        title: 'Le flux incessant des visiteurs',
        hotspots: [
            {
                x: 50, y: 38, side: 'right', tag: 'Fréquentation',
                title: '200 000 personnes par jour',
                body: 'Las Ramblas est l\'une des artères les plus fréquentées d\'Europe. Ce flux massif illustre l\'intégration totale de Barcelone dans la mondialisation touristique — et les tensions que cela engendre pour les résidents.'
            },
            {
                x: 18, y: 62, side: 'right', tag: 'Kiosques & commerces',
                title: 'L\'économie de rue',
                body: 'Fleuristes, journaux, souvenirs — ces kiosques sont un vestige du commerce local. Progressivement, les boutiques traditionnelles cèdent la place à des enseignes standardisées tournées vers les touristes.'
            },
            {
                x: 78, y: 68, side: 'left', tag: 'Piétonisation',
                title: 'Une avenue repensée',
                body: 'La transformation en espace piétonnier a radicalement changé l\'usage de l\'avenue. Ce qui était une rue animée par les Barcelonais est devenu un espace conçu pour absorber des millions de visiteurs annuels.'
            }
        ]
    },
    {
        img: './images/La-Ramblas-transaction.jpg',
        eyebrow: 'Volet 2 — Mutation économique',
        title: 'Une économie dominée par le tourisme',
        hotspots: [
            {
                x: 65, y: 42, side: 'left', tag: 'Souvenirs standardisés',
                title: 'La perte d\'authenticité',
                body: 'Les boutiques de souvenirs proposent des produits identiques d\'une ville à l\'autre. Cette standardisation symbolise la dépendance croissante de Barcelone au tourisme de masse, au détriment de son identité locale.'
            },
            {
                x: 28, y: 58, side: 'right', tag: 'Inflation & exclusion',
                title: 'La pression sur les habitants',
                body: 'L\'explosion touristique entraîne une hausse des prix qui affecte directement les résidents. Logements, restaurants, commerces — tout s\'adapte au pouvoir d\'achat des visiteurs, excluant progressivement les Barcelonais.'
            }
        ]
    },
    {
        img: './images/Las-Ramblas-security.jpg',
        eyebrow: 'Volet 4 — Crises & Sécurité',
        title: 'La vulnérabilité des espaces ouverts',
        hotspots: [
            {
                x: 40, y: 48, side: 'right', tag: 'Présence policière',
                title: 'Surveillance post-2017',
                body: 'Après l\'attentat du 17 août 2017 qui fit 16 morts, la présence des forces de l\'ordre a été considérablement renforcée. Les Mossos d\'Esquadra patrouillent en permanence, transformant l\'ambiance de l\'avenue.'
            },
            {
                x: 72, y: 62, side: 'left', tag: 'Attentat 2017',
                title: 'Une cible symbolique',
                body: 'Las Ramblas a été choisie pour sa visibilité mondiale. Un espace attractif devient aussi une cible : c\'est le paradoxe sécuritaire des grandes métropoles touristiques modernes.'
            },
            {
                x: 18, y: 38, side: 'right', tag: 'Pickpockets',
                title: 'L\'insécurité ordinaire',
                body: 'Bien avant 2017, Las Ramblas était réputée pour ses pickpockets. La densité de touristes peu vigilants en fait un terrain de choix. Cette insécurité quotidienne nuit durablement à l\'image de la ville.'
            }
        ]
    },
    {
        img: './images/Las-Ramblas-old.jpg',
        eyebrow: 'Contexte historique — XIXe siècle',
        title: 'Las Ramblas avant la mondialisation',
        hotspots: [
            {
                x: 28, y: 58, side: 'right', tag: 'Usage local',
                title: 'Une avenue bourgeoise',
                body: 'Au XIXe siècle, Las Ramblas est le cœur de la vie barcelonaise. Tramways hippomobiles, promeneurs locaux, théâtres — l\'avenue est d\'abord conçue pour et par ses habitants, non pour les touristes.'
            },
            {
                x: 68, y: 38, side: 'left', tag: 'Architecture',
                title: 'L\'héritage néoclassique',
                body: 'Les façades qui bordent Las Ramblas témoignent de l\'ambition urbaine du XIXe siècle. Cet héritage continue de donner à l\'avenue son caractère distinctif, même si les usages ont radicalement évolué.'
            }
        ]
    },
    {
        img: './images/las_ramblas.png',
        eyebrow: 'Volet 5 — Adaptation durable',
        title: 'Vers un équilibre résidents / tourisme',
        hotspots: [
            {
                x: 18, y: 58, side: 'right', tag: 'Terrasses',
                title: 'L\'économie de l\'hospitalité',
                body: 'Les terrasses génèrent des emplois mais participent aussi à la hausse des loyers et à la pression sur les commerces de proximité essentiels aux habitants du quartier.'
            },
            {
                x: 50, y: 32, side: 'right', tag: 'Platanes centenaires',
                title: 'Un bien commun préservé',
                body: 'Les arbres de Las Ramblas sont protégés. Leur ombre constitue un bien commun qui bénéficie autant aux résidents qu\'aux visiteurs — un rare élément stable au milieu des transformations.'
            },
            {
                x: 80, y: 62, side: 'left', tag: 'Régulation',
                title: 'Les mesures de Barcelone',
                body: 'Depuis 2015, moratoire sur les nouvelles licences touristiques, limitation des Airbnb, investissement dans des quartiers alternatifs. L\'objectif : rééquilibrer attractivité et qualité de vie des habitants.'
            }
        ]
    },
    {
        img: './images/las_ramblas.png',
        eyebrow: 'Conclusion',
        title: 'Une ville entre attractivité et équilibre',
        hotspots: [
            {
                x: 50, y: 50, side: 'right',
                tag: 'Synthèse',
                title: 'Une transformation complète',
                body: 'Las Ramblas reflète les grandes transformations de Barcelone : adaptation urbaine, économie touristique, attractivité mondiale, nouveaux risques et politiques de régulation.'
            },
            {
                x: 30, y: 70, side: 'right',
                tag: 'Réponse',
                title: 'Réponse à la problématique',
                body: 'Las Ramblas montre comment une ville moderne évolue sous l’effet du tourisme de masse, entre opportunités économiques et tensions sociales.'
            },
            {
                x: 70, y: 30, side: 'left',
                tag: 'Ouverture',
                title: 'Un enjeu global',
                body: 'Le cas de Barcelone pose une question plus large : comment les grandes villes peuvent-elles rester vivables tout en restant attractives à l’échelle mondiale ?'
            }
        ]
    }
];

let cur = 0;
const fade = document.getElementById('fade');
const panel = document.getElementById('panel');

// Build dots
const dotsEl = document.getElementById('tb-dots');
SCENES.forEach((_, i) => {
    const d = document.createElement('div');
    d.className = 'tb-dot';
    d.addEventListener('click', () => go(i));
    dotsEl.appendChild(d);
});

// Build scenes
SCENES.forEach((s, si) => {
    const layer = document.createElement('div');
    layer.className = 'scene-layer';

    const img = document.createElement('img');
    img.className = 'scene-bg';
    img.src = s.img; img.alt = s.title;
    layer.appendChild(img);

    const vig = document.createElement('div');
    vig.className = 'vignette';
    layer.appendChild(vig);

    s.hotspots.forEach((h, hi) => {
        const hs = document.createElement('div');
        hs.className = 'hotspot';
        hs.style.left = h.x + '%';
        hs.style.top = h.y + '%';

        const core = document.createElement('div');
        core.className = 'hs-core';
        core.style.animationDelay = (hi * 0.8) + 's';

        const lbl = document.createElement('span');
        lbl.className = 'hs-label';
        lbl.textContent = h.tag;

        hs.appendChild(core);
        hs.appendChild(lbl);
        hs.addEventListener('click', e => { e.stopPropagation(); showPanel(h, hs); });
        layer.appendChild(hs);
    });

    document.getElementById('scene').appendChild(layer);
});

function showPanel(h, hsEl) {
    document.getElementById('p-tag').textContent = h.tag;
    document.getElementById('p-title').textContent = h.title;
    document.getElementById('p-body').textContent = h.body;

    const rect = hsEl.getBoundingClientRect();
    const vw = window.innerWidth, vh = window.innerHeight;
    const pw = Math.min(300, vw * 0.88);

    // Horizontal
    if (h.side === 'right' && rect.left + 26 + pw < vw - 16) {
        panel.style.left = (rect.left + 26) + 'px';
        panel.style.right = 'auto';
    } else {
        panel.style.right = (vw - rect.left + 14) + 'px';
        panel.style.left = 'auto';
    }
    // Vertical
    const topVal = Math.max(60, Math.min(rect.top - 16, vh - 230));
    panel.style.top = topVal + 'px';

    panel.classList.add('visible');
}

document.getElementById('panel-close').addEventListener('click', closePanel);
document.getElementById('scene').addEventListener('click', closePanel);

function closePanel() { panel.classList.remove('visible'); }

function activate(i) {
    const layers = document.querySelectorAll('.scene-layer');
    layers.forEach((l, li) => l.classList.toggle('active', li === i));
    document.querySelectorAll('.tb-dot').forEach((d, di) => d.classList.toggle('active', di === i));
    document.getElementById('tb-label').textContent = `Scène ${i + 1} / ${SCENES.length}`;
    document.getElementById('cap-ey').textContent = SCENES[i].eyebrow;
    document.getElementById('cap-ti').textContent = SCENES[i].title;
    const prev = document.getElementById('nav-prev');
    const next = document.getElementById('nav-next');
    i === 0 ? prev.setAttribute('data-hidden', '') : prev.removeAttribute('data-hidden');
    i === SCENES.length - 1 ? next.setAttribute('data-hidden', '') : next.removeAttribute('data-hidden');
}

function go(i) {
    if (i === cur) return;
    closePanel();
    fade.classList.add('on');
    setTimeout(() => {
        cur = i; activate(cur);
        fade.classList.remove('on');
    }, 320);
}

document.getElementById('nav-prev').addEventListener('click', () => { if (cur > 0) go(cur - 1); });
document.getElementById('nav-next').addEventListener('click', () => { if (cur < SCENES.length - 1) go(cur + 1); });

document.addEventListener('keydown', e => {
    if (e.key === 'ArrowRight' && cur < SCENES.length - 1) go(cur + 1);
    if (e.key === 'ArrowLeft' && cur > 0) go(cur - 1);
    if (e.key === 'Escape') closePanel();
});

// Touch swipe
let tx = null;
document.addEventListener('touchstart', e => tx = e.touches[0].clientX);
document.addEventListener('touchend', e => {
    if (tx === null) return;
    const dx = e.changedTouches[0].clientX - tx;
    if (Math.abs(dx) > 48) go(dx < 0 ? Math.min(cur + 1, SCENES.length - 1) : Math.max(cur - 1, 0));
    tx = null;
});

// Start
document.getElementById('start-btn').addEventListener('click', () => {
    activate(0);
    const intro = document.getElementById('intro');
    intro.classList.add('out');
    setTimeout(() => intro.style.display = 'none', 600);
});