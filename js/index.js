const SCENES = [
    {
        img: './images/las_ramblas.png',
        eyebrow: 'Volet 1 — Transformation urbaine',
        title: 'L\'espace public réinventé',
        hotspots: [
            {
                x: 50, y: 32, side: 'right', tag: 'Piétonisation',
                title: 'De la chaussée à la promenade',
                body: 'La transformation de Las Ramblas en axe piétonnier s\'est accélérée dans les années 1990. Sans voitures, l\'avenue est devenue un espace de déambulation idéal — mais aussi un couloir absorbant des millions de visiteurs par an. Les politiques d\'aménagement urbain ont produit l\'effet inverse à leur objectif initial : en libérant l\'espace, elles ont amplifié la pression touristique au lieu de redonner l\'avenue aux habitants.',
                link: { label: 'Transition Europe — Le modèle touristique de Barcelone (2024)', url: 'https://transition-europe.eu/news/le-modele-touristique-de-barcelone-un-equilibre-repenser-entre-economie-et-qualite-de-vie/' }
            },
            {
                x: 18, y: 58, side: 'right', tag: 'Kiosques',
                title: 'Un commerce local en voie de disparition',
                body: 'Les kiosques à fleurs et à journaux sont emblématiques de Las Ramblas depuis le XIXe siècle. Mais leur nombre diminue régulièrement : les coûts d\'exploitation augmentent tandis que la clientèle locale se raréfie. Ce mouvement illustre un basculement économique profond — l\'espace public se réoriente vers la consommation touristique, marginalisant les usages du quotidien qui faisaient l\'identité de l\'avenue.',
                link: { label: 'La Brèche — Face à la touristification, les habitants cherchent les clefs (2026)', url: 'https://journal-labreche.fr/face-a-la-touristification-les-habitants-cherchent-les-clefs/' }
            },
            {
                x: 80, y: 62, side: 'left', tag: 'Organisation spatiale',
                title: 'Un espace conçu pour les flux massifs',
                body: 'Las Ramblas concentre sur 1,2 km une densité piétonne parmi les plus élevées d\'Europe. Terrasses, artistes de rue, kiosques, passages piétons : chaque élément de l\'espace a été progressivement réorganisé pour absorber des flux massifs. Cette logique révèle comment Barcelone a glissé d\'une ville conçue pour ses habitants à une ville organisée pour ses visiteurs.',
                link: { label: 'Euronews — Comment les Barcelonais ont dit "No" au tourisme de masse (2024)', url: 'https://fr.euronews.com/voyages/2024/12/23/comment-les-barcelonais-ont-dit-no-au-tourisme-de-masse-en-2024' }
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
                title: 'La perte d\'authenticité économique',
                body: 'Les boutiques de Las Ramblas vendent les mêmes produits qu\'à Paris, Rome ou Amsterdam. Cette standardisation révèle une substitution économique profonde : les commerces répondant aux besoins des habitants sont évincés par des enseignes dont la survie dépend entièrement des touristes. Le tourisme représente 14 % de l\'économie de Barcelone — une dépendance qui fragilise l\'identité locale.',
                link: { label: 'SeLoger — Barcelone, les conséquences du surtourisme (2024)', url: 'https://edito.seloger.com/actualites/monde/barcelone-consequences-surtourisme-article-18968.html' }
            },
            {
                x: 28, y: 58, side: 'right', tag: 'Inflation & exclusion',
                title: 'Quand le tourisme expulse les habitants',
                body: 'La pression touristique pousse les propriétaires à privilégier la location courte durée plutôt que les baux résidentiels. Résultat : les Barcelonais à revenus moyens quittent le centre-ville, creusant une fracture sociale et spatiale. Le tourisme représente certes une manne économique, mais sans redistribution équitable il accentue les inégalités.',
                link: { label: 'Transition Europe — Le modèle touristique de Barcelone (2024)', url: 'https://transition-europe.eu/news/le-modele-touristique-de-barcelone-un-equilibre-repenser-entre-economie-et-qualite-de-vie/' }
            }
        ]
    },
    {
        img: './images/la-rambla-barcelona-tourist.jpg',
        eyebrow: 'Volet 3 — Tourisme international',
        title: 'Le flux incessant des visiteurs',
        hotspots: [
            {
                x: 50, y: 38, side: 'right', tag: 'Fréquentation',
                title: 'Plus de 15 millions de touristes par an',
                body: 'Barcelone accueille plus de 15 millions de touristes par an, avec jusqu\'à 170 000 visiteurs par jour en haute saison. Las Ramblas est l\'épicentre de ce flux. Cette hyperfréquentation génère une pression constante sur les infrastructures et dégrade la qualité de vie des résidents, révélant les limites d\'un modèle fondé sur l\'attractivité à tout prix.',
                link: { label: 'Euronews — Comment les Barcelonais ont dit "No" au tourisme de masse (2024)', url: 'https://fr.euronews.com/voyages/2024/12/23/comment-les-barcelonais-ont-dit-no-au-tourisme-de-masse-en-2024' }
            },
            {
                x: 18, y: 62, side: 'right', tag: 'Tensions sociales',
                title: 'Barcelone ne veut plus être à vendre',
                body: 'En juillet 2024, des habitants ont arrosé de pistolets à eau les touristes sur Las Ramblas. Ce geste symbolique exprime une exaspération profonde : nuisances nocturnes, hausse des prix, perte d\'identité. Le mouvement "Barcelona no està en venda" ("Barcelone n\'est pas à vendre") illustre la fracture entre une ville mondialisée et ses propres résidents.',
                link: { label: 'La Brèche — Face à la touristification, les habitants cherchent les clefs (2026)', url: 'https://journal-labreche.fr/face-a-la-touristification-les-habitants-cherchent-les-clefs/' }
            },
            {
                x: 78, y: 68, side: 'left', tag: 'Mondialisation',
                title: 'Une dépendance au tourisme mondial',
                body: 'Las Ramblas figure dans tous les guides de voyage internationaux. Cette visibilité est un atout économique majeur, mais elle crée aussi une vulnérabilité : quand le tourisme chute (pandémie, instabilité politique), l\'économie locale est directement fragilisée. La mondialisation touristique amplifie autant les opportunités que les risques.',
                link: { label: 'Transition Europe — Le modèle touristique de Barcelone (2024)', url: 'https://transition-europe.eu/news/le-modele-touristique-de-barcelone-un-equilibre-repenser-entre-economie-et-qualite-de-vie/' }
            }
        ]
    },
    {
        img: './images/Las-Ramblas-security.jpg',
        eyebrow: 'Volet 4 — Crises & Sécurité',
        title: 'La vulnérabilité des espaces ouverts',
        hotspots: [
            {
                x: 40, y: 48, side: 'right', tag: 'Attentat 2017',
                title: 'Pourquoi Las Ramblas comme cible ?',
                body: 'Le 17 août 2017, un camion-bélier fonça dans la foule sur Las Ramblas, causant 16 morts et plus de 130 blessés. Ce lieu a été choisi précisément pour sa visibilité mondiale : frapper ici, c\'est frapper l\'image de Barcelone. C\'est le paradoxe central des métropoles touristiques — leur attractivité les rend aussi vulnérables.',
                link: { label: 'TF1 Info — Las Ramblas, passage incontournable des touristes (2017)', url: 'https://www.tf1info.fr/international/attaque-terroriste-attentat-a-barcelone-les-ramblas-passage-incontournable-des-touristes-2061621.html' }
            },
            {
                x: 72, y: 62, side: 'left', tag: 'Sécurisation',
                title: 'Surveillance permanente et ambiance transformée',
                body: 'Après l\'attentat, des barrières anti-véhicules-béliers ont été installées et la présence policière considérablement renforcée. Ce dispositif est efficace, mais transforme durablement l\'ambiance de Las Ramblas : l\'avenue, autrefois symbole de liberté urbaine, ressemble aujourd\'hui à un espace sous surveillance permanente. Sécurité et attractivité entrent en tension.',
                link: { label: 'Euronews — Sécurité renforcée sur les sites touristiques (2017)', url: 'https://fr.euronews.com/2017/08/23/securite-renforcee-sur-les-sites-touristiques-a-barcelone' }
            },
            {
                x: 18, y: 38, side: 'right', tag: 'Pickpockets',
                title: 'L\'insécurité ordinaire, reflet du surtourisme',
                body: 'Bien avant 2017, Las Ramblas figurait dans les guides comme haut lieu mondial du vol à la tire. La densité de touristes peu familiers de leur environnement, souvent distraits, crée un écosystème favorable aux pickpockets. Cette insécurité structurelle est une conséquence directe du surtourisme — et nuit durablement à la réputation de la ville.',
                link: { label: 'SeLoger — Barcelone, les conséquences du surtourisme (2024)', url: 'https://edito.seloger.com/actualites/monde/barcelone-consequences-surtourisme-article-18968.html' }
            }
        ]
    },
    {
        img: './images/las_ramblas.png',
        eyebrow: 'Volet 5 — Adaptation durable',
        title: 'Vers un équilibre résidents / tourisme',
        hotspots: [
            {
                x: 18, y: 62, side: 'right', tag: 'Interdiction Airbnb',
                title: 'Supprimer 10 000 logements touristiques d\'ici 2028',
                body: 'En 2028, Barcelone prévoit de supprimer la quasi-totalité de ses licences de location touristique — environ 10 000 appartements Airbnb. C\'est une mesure sans précédent en Europe. L\'objectif est de redonner des logements abordables aux résidents et de freiner la gentrification. Des propriétaires s\'y opposent, révélant les tensions entre économie touristique et droit au logement.',
                link: { label: 'Euronews — Comment les Barcelonais ont dit "No" au tourisme de masse (2024)', url: 'https://fr.euronews.com/voyages/2024/12/23/comment-les-barcelonais-ont-dit-no-au-tourisme-de-masse-en-2024' }
            },
            {
                x: 50, y: 32, side: 'right', tag: 'Coopération régionale',
                title: 'Barcelone et ses voisines unies contre le surtourisme',
                body: 'En 2026, Barcelone et plusieurs villes de sa périphérie ont coordonné leurs politiques anti-surtourisme. Cette approche régionale cherche à éviter que les restrictions de Barcelone ne reportent simplement le problème dans les communes voisines. C\'est une reconnaissance que le surtourisme est un enjeu territorial, pas seulement municipal.',
                link: { label: 'Equinox Magazine — Barcelone et ses villes voisines unies contre le tourisme (2026)', url: 'https://www.equinoxmagazine.fr/2026/03/10/barcelone-et-ses-villes-voisines-unies-contre-le-tourisme/' }
            },
            {
                x: 80, y: 62, side: 'left', tag: 'Impact environnemental',
                title: 'Vers un tourisme plus qualitatif',
                body: 'Barcelone cherche désormais à attirer moins de touristes mais de meilleure qualité — en augmentant la taxe touristique et en limitant les croisières. L\'objectif est de générer les mêmes revenus avec moins d\'impacts environnementaux et sociaux. La ville de Barcelone est devenue un laboratoire mondial de la régulation du surtourisme.',
                link: { label: 'Visiter Barcelone — Surtourisme à Barcelone, réduire notre impact (2025)', url: 'https://visiterbarcelone.com/surtourisme-a-barcelone-reduire-notre-impact/' }
            }
        ]
    },
    {
        img: './images/Las-Ramblas-Barcelona.jpg',
        eyebrow: 'Conclusion',
        title: 'Las Ramblas, miroir d\'une ville en mutation',
        isConclusion: true,
        hotspots: []
    }
];

const SOURCES = [
    { label: 'Euronews — Comment les Barcelonais ont dit "No" au tourisme de masse (déc. 2024)', url: 'https://fr.euronews.com/voyages/2024/12/23/comment-les-barcelonais-ont-dit-no-au-tourisme-de-masse-en-2024' },
    { label: 'Transition Europe — Le modèle touristique de Barcelone (2024)',                     url: 'https://transition-europe.eu/news/le-modele-touristique-de-barcelone-un-equilibre-repenser-entre-economie-et-qualite-de-vie/' },
    { label: 'SeLoger — Barcelone : les conséquences du surtourisme (2024)',                      url: 'https://edito.seloger.com/actualites/monde/barcelone-consequences-surtourisme-article-18968.html' },
    { label: 'La Brèche — Face à la touristification, les habitants cherchent les clefs (2026)',  url: 'https://journal-labreche.fr/face-a-la-touristification-les-habitants-cherchent-les-clefs/' },
    { label: 'TF1 Info — Las Ramblas, passage incontournable des touristes (2017)',               url: 'https://www.tf1info.fr/international/attaque-terroriste-attentat-a-barcelone-les-ramblas-passage-incontournable-des-touristes-2061621.html' },
    { label: 'Euronews — Sécurité renforcée sur les sites touristiques à Barcelone (2017)',       url: 'https://fr.euronews.com/2017/08/23/securite-renforcee-sur-les-sites-touristiques-a-barcelone' },
    { label: 'Le Vif — Sécurité des sites touristiques espagnols (2017)',                         url: 'https://www.levif.be/belgique/attentat-de-barcelone-la-securite-des-sites-touristiques-espagnols-fait-debat/' },
    { label: 'Equinox Magazine — Barcelone et ses villes voisines unies contre le tourisme (2026)', url: 'https://www.equinoxmagazine.fr/2026/03/10/barcelone-et-ses-villes-voisines-unies-contre-le-tourisme/' },
    { label: 'Visiter Barcelone — Surtourisme à Barcelone : réduire notre impact (2025)',          url: 'https://visiterbarcelone.com/surtourisme-a-barcelone-reduire-notre-impact/' },
    { label: 'Euronews — Les attentats ébranlent le débat sur le tourisme de masse (2017)',        url: 'https://fr.euronews.com/2017/08/29/a-barcelone-les-attentats-ebranlent-le-debat-sur-le-tourisme-de-masse' },
];

let cur = 0;
const fade  = document.getElementById('fade');
const panel = document.getElementById('panel');

const dotsEl = document.getElementById('tb-dots');
SCENES.forEach((_, i) => {
    const d = document.createElement('div');
    d.className = 'tb-dot';
    d.addEventListener('click', () => go(i));
    dotsEl.appendChild(d);
});

SCENES.forEach((s) => {
    const layer = document.createElement('div');
    layer.className = 'scene-layer';

    const img = document.createElement('img');
    img.className = 'scene-bg';
    img.src = s.img;
    img.alt = s.title;
    layer.appendChild(img);

    const vig = document.createElement('div');
    vig.className = 'vignette';
    layer.appendChild(vig);

    if (s.isConclusion) {
        const sourcesHTML = SOURCES.map(src =>
            `<li><a href="${src.url}" target="_blank" rel="noopener">${src.label}</a></li>`
        ).join('');

        const conclusionEl = document.createElement('div');
        conclusionEl.className = 'conclusion-screen';
        conclusionEl.innerHTML = `
            <div class="concl-inner">
                <p class="concl-eyebrow">Conclusion — Réponse à la problématique</p>
                <h2 class="concl-title">Las Ramblas, miroir d'une ville en mutation</h2>
                <div class="concl-rule"></div>
                <p class="concl-body">
                    À travers ses cinq volets, ce documentaire a montré comment Las Ramblas reflète
                    les grandes transformations de Barcelone : <strong>une ville qui s'est ouverte
                    au monde</strong> au prix d'une dépendance croissante au tourisme de masse.
                </p>
                <p class="concl-body">
                    La <em>transformation urbaine</em> a redessiné l'espace public pour absorber des flux
                    massifs. La <em>mutation économique</em> a substitué le commerce local par une économie
                    standardisée. Le <em>rayonnement international</em> a propulsé Barcelone sur la scène
                    mondiale — mais cette visibilité a aussi créé des <em>vulnérabilités sécuritaires</em>
                    inédites. Face à ces tensions, la ville tente depuis 2015 de réguler les excès du
                    surtourisme, avec des mesures sans précédent en Europe.
                </p>
                <p class="concl-body">
                    Las Ramblas pose ainsi une question universelle : <em>comment une grande ville
                    peut-elle rester vivable et authentique tout en restant attractive ?</em>
                    La réponse de Barcelone — encore incomplète — est observée par d'autres
                    métropoles confrontées au même défi : Venise, Amsterdam, Kyoto.
                </p>
                <div class="concl-sources">
                    <p class="concl-sources-title">Sources</p>
                    <ul>${sourcesHTML}</ul>
                </div>
            </div>
        `;
        layer.appendChild(conclusionEl);
    }

    s.hotspots.forEach((h, hi) => {
        const hs = document.createElement('div');
        hs.className = 'hotspot';
        hs.style.left = h.x + '%';
        hs.style.top  = h.y + '%';

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
    document.getElementById('p-tag').textContent   = h.tag;
    document.getElementById('p-title').textContent = h.title;

    const linkHTML = h.link
        ? `<a class="panel-source-link" href="${h.link.url}" target="_blank" rel="noopener">↗ ${h.link.label}</a>`
        : '';
    document.getElementById('p-body').innerHTML = `<span class="panel-body-text">${h.body}</span>${linkHTML}`;

    const rect = hsEl.getBoundingClientRect();
    const vw   = window.innerWidth;
    const vh   = window.innerHeight;
    const pw   = Math.min(340, vw * 0.88);

    if (h.side === 'right' && rect.left + 26 + pw < vw - 16) {
        panel.style.left  = (rect.left + 26) + 'px';
        panel.style.right = 'auto';
    } else {
        panel.style.right = (vw - rect.left + 14) + 'px';
        panel.style.left  = 'auto';
    }
    const topVal = Math.max(60, Math.min(rect.top - 16, vh - 280));
    panel.style.top = topVal + 'px';
    panel.classList.add('visible');
}

document.getElementById('panel-close').addEventListener('click', closePanel);
document.getElementById('scene').addEventListener('click', closePanel);
function closePanel() { panel.classList.remove('visible'); }

function activate(i) {
    document.querySelectorAll('.scene-layer').forEach((l, li) => l.classList.toggle('active', li === i));
    document.querySelectorAll('.tb-dot').forEach((d, di)     => d.classList.toggle('active', di === i));

    document.getElementById('tb-label').textContent = `Scène ${i + 1} / ${SCENES.length}`;
    document.getElementById('cap-ey').textContent   = SCENES[i].isConclusion ? '' : SCENES[i].eyebrow;
    document.getElementById('cap-ti').textContent   = SCENES[i].isConclusion ? '' : SCENES[i].title;

    const capHint = document.getElementById('cap-hint');
    if (capHint) capHint.style.display = SCENES[i].isConclusion ? 'none' : '';

    const prev = document.getElementById('nav-prev');
    const next = document.getElementById('nav-next');
    i === 0                 ? prev.setAttribute('data-hidden', '') : prev.removeAttribute('data-hidden');
    i === SCENES.length - 1 ? next.setAttribute('data-hidden', '') : next.removeAttribute('data-hidden');
}

function go(i) {
    if (i === cur) return;
    closePanel();
    fade.classList.add('on');
    setTimeout(() => {
        cur = i;
        activate(cur);
        fade.classList.remove('on');
    }, 320);
}

document.getElementById('nav-prev').addEventListener('click', () => { if (cur > 0) go(cur - 1); });
document.getElementById('nav-next').addEventListener('click', () => { if (cur < SCENES.length - 1) go(cur + 1); });

document.addEventListener('keydown', e => {
    if (e.key === 'ArrowRight' && cur < SCENES.length - 1) go(cur + 1);
    if (e.key === 'ArrowLeft'  && cur > 0)                 go(cur - 1);
    if (e.key === 'Escape')                                 closePanel();
});

let tx = null;
document.addEventListener('touchstart', e => { tx = e.touches[0].clientX; });
document.addEventListener('touchend',   e => {
    if (tx === null) return;
    const dx = e.changedTouches[0].clientX - tx;
    if (Math.abs(dx) > 48) go(dx < 0
        ? Math.min(cur + 1, SCENES.length - 1)
        : Math.max(cur - 1, 0));
    tx = null;
});

document.getElementById('start-btn').addEventListener('click', () => {
    activate(0);
    const intro = document.getElementById('intro');
    intro.classList.add('out');
    setTimeout(() => intro.style.display = 'none', 600);
});