const SCENES = [
    {
        img: './images/las_ramblas.png',
        eyebrow: 'Volet 1 — Transformation urbaine',
        title: 'L\'espace public réinventé',
        hotspots: [
            {
                x: 50, y: 32, side: 'right', tag: 'Piétonisation',
                title: 'De la chaussée à la promenade',
                body: 'La transformation de Las Ramblas en axe piétonnier s\'est accélérée dans les années 1990. Sans voitures, l\'avenue est devenue un espace de déambulation idéal — mais aussi un couloir absorbant des millions de visiteurs par an. Les politiques d\'aménagement urbain ont produit l\'effet inverse à leur objectif initial : en libérant l\'espace, elles ont amplifié la pression touristique au lieu de redonner l\'avenue aux habitants. (Source : Mairie de Barcelone, Plan de réhabilitation de Las Ramblas, 2018)'
            },
            {
                x: 18, y: 58, side: 'right', tag: 'Kiosques',
                title: 'Un commerce local en voie de disparition',
                body: 'Les kiosques à fleurs et à journaux sont emblématiques de Las Ramblas depuis le XIXe siècle. Mais depuis les années 2000, leur nombre diminue : les coûts d\'exploitation augmentent tandis que la clientèle locale se raréfie. Ce mouvement illustre un basculement économique profond — l\'espace public se réoriente vers la consommation touristique, marginalisant les usages du quotidien qui faisaient l\'identité de l\'avenue. (Source : allinfo.space, 2017)'
            },
            {
                x: 80, y: 62, side: 'left', tag: 'Organisation spatiale',
                title: 'Un espace conçu pour les flux massifs',
                body: 'Las Ramblas concentre sur 1,2 km une densité piétonne parmi les plus élevées d\'Europe. Terrasses, artistes de rue, kiosques, passages piétons : chaque élément de l\'espace a été progressivement réorganisé pour absorber des flux massifs. Cette logique de gestion des foules révèle comment Barcelone a glissé d\'une ville conçue pour ses habitants à une ville organisée pour ses visiteurs. (Source : Office du Tourisme de Barcelone, 2023)'
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
                body: 'Les boutiques de Las Ramblas vendent les mêmes produits — magnets, maillots du Barça, sangria en bouteille — qu\'à Paris, Rome ou Amsterdam. Cette standardisation n\'est pas qu\'esthétique : elle révèle une substitution économique. Les commerces répondant aux besoins des habitants (épiceries, boulangeries, librairies) sont évincés par des enseignes dont la survie dépend entièrement des touristes. Barcelone risque de perdre sa capacité à fonctionner comme une vraie ville mixte. (Source : Le Monde, juillet 2025)'
            },
            {
                x: 28, y: 58, side: 'right', tag: 'Inflation & exclusion',
                title: 'Quand le tourisme expulse les habitants',
                body: 'Entre 2015 et 2023, les loyers dans les quartiers adjacents à Las Ramblas ont augmenté de plus de 40 %. Cette hausse est directement corrélée à la pression touristique : les propriétaires préfèrent louer en courte durée plutôt qu\'à des résidents. Résultat : les Barcelonais à revenus moyens quittent le centre-ville, creusant une fracture sociale et spatiale que les politiques peinent à enrayer. (Source : Mairie de Barcelone, Rapport surtourisme, 2022)'
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
                title: '200 000 personnes par jour',
                body: 'Las Ramblas accueille jusqu\'à 200 000 visiteurs quotidiens, ce qui en fait l\'une des artères les plus fréquentées d\'Europe. Cette hyperfréquentation génère une pression constante sur les infrastructures et dégrade la qualité de vie des résidents. Elle illustre l\'intégration totale de Barcelone dans la mondialisation touristique — et sa dépendance croissante à cette attractivité pour son économie. (Source : Office du Tourisme de Barcelone, 2023 ; BFM TV, 2017)'
            },
            {
                x: 18, y: 62, side: 'right', tag: 'Mondialisation',
                title: 'Barcelone sur la carte mondiale',
                body: 'Las Ramblas figure dans tous les guides de voyage internationaux et génère des millions de publications sur les réseaux sociaux chaque année. Cette visibilité mondiale est un atout économique majeur, mais elle crée aussi une dépendance : quand le tourisme chute (pandémie Covid, instabilité politique), l\'économie locale est fragilisée. La mondialisation touristique amplifie autant les opportunités que les vulnérabilités. (Source : Euronews, août 2017 ; BFM TV, 2017)'
            },
            {
                x: 78, y: 68, side: 'left', tag: 'Coexistence',
                title: 'Habitants et touristes : une cohabitation tendue',
                body: 'La densité touristique de Las Ramblas génère des nuisances concrètes pour les résidents : bruit nocturne, encombrement des transports, hausse des prix en supermarché. Des mouvements de protestation — comme "Barcelona no està en venda" ("Barcelone n\'est pas à vendre") — ont émergé pour dénoncer le tourisme de masse. La cohabitation entre résidents et visiteurs est devenue l\'un des enjeux politiques centraux de la ville. (Source : Euronews, 2017)'
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
                body: 'Le 17 août 2017, un camion-bélier fonça dans la foule sur Las Ramblas, causant 16 morts et plus de 130 blessés. Le choix de ce lieu n\'est pas un hasard : Las Ramblas est l\'un des endroits les plus photographiés et médiatisés d\'Europe. Frapper ici, c\'est frapper l\'image mondiale de Barcelone. Ce mécanisme — l\'attractivité comme facteur de risque — est le paradoxe central des métropoles touristiques modernes. (Source : TF1 Info, 2017 ; CNEWS, 2017 ; Le Vif, 2017)'
            },
            {
                x: 72, y: 62, side: 'left', tag: 'Sécurisation',
                title: 'Entre protection et transformation de l\'atmosphère',
                body: 'Après l\'attentat, des barrières anti-véhicules-béliers ont été installées aux entrées de l\'avenue et la présence des Mossos d\'Esquadra considérablement renforcée. Ce dispositif sécuritaire est efficace mais transforme durablement l\'ambiance de Las Ramblas : l\'avenue, autrefois symbole de liberté urbaine, ressemble aujourd\'hui à un espace sous surveillance permanente. Sécurité et attractivité entrent en tension. (Source : Euronews, 23 août 2017 ; Le Vif, 2017)'
            },
            {
                x: 18, y: 38, side: 'right', tag: 'Pickpockets',
                title: 'L\'insécurité ordinaire, reflet du surtourisme',
                body: 'Bien avant 2017, Las Ramblas figurait dans les guides comme l\'un des hauts lieux mondiaux du vol à la tire. Ce n\'est pas une coïncidence : la densité de touristes peu familiers de leur environnement, souvent distraits et porteurs de valeur, crée un écosystème favorable aux pickpockets. Cette insécurité structurelle est une conséquence directe du surtourisme — et nuit durablement à la réputation de Barcelone. (Source : Kolda News, 2017 ; TF1 Info, 2017)'
            }
        ]
    },
    {
        img: './images/las_ramblas.png',
        eyebrow: 'Volet 5 — Adaptation durable',
        title: 'Vers un équilibre résidents / tourisme',
        hotspots: [
            {
                x: 18, y: 62, side: 'right', tag: 'Régulation Airbnb',
                title: 'La bataille contre la location courte durée',
                body: 'En 2015, Barcelone a instauré un moratoire total sur les nouvelles licences de location touristique. En 2023, la mairie a annoncé la suppression progressive de 10 000 licences Airbnb d\'ici 2028 — soit la quasi-totalité des appartements en location courte durée. L\'objectif est de redonner des logements abordables aux résidents et de freiner la gentrification accélérée par le tourisme. Ces mesures font de Barcelone un laboratoire mondial de la lutte contre le surtourisme. (Source : Mairie de Barcelone, 2022 ; Le Monde, 2025)'
            },
            {
                x: 50, y: 32, side: 'right', tag: 'Patrimoine naturel',
                title: 'Les platanes centenaires : un bien commun préservé',
                body: 'Les rangées de platanes centenaires de Las Ramblas sont classées et protégées par la mairie. Leur ombre et leur présence constituent l\'un des rares éléments stables au milieu des transformations. Leur préservation illustre qu\'une politique de protection du patrimoine naturel peut fonctionner même dans un contexte de fort surtourisme — à condition d\'une volonté politique claire et d\'un cadre juridique adapté. (Source : Mairie de Barcelone)'
            },
            {
                x: 80, y: 62, side: 'left', tag: 'Diversification',
                title: 'Déconcentrer le tourisme pour mieux le gérer',
                body: 'Barcelone investit dans la valorisation de quartiers alternatifs — Poblenou, Gràcia, Sant Pere — pour déconcentrer les flux touristiques hors de Las Ramblas et du centre historique. Cette stratégie de diversification cherche à répartir les bénéfices économiques du tourisme tout en réduisant la pression sur les zones saturées. Des résultats sont visibles, mais insuffisants face à la croissance continue de la fréquentation. (Source : Euronews, 2017 ; Mairie de Barcelone, 2022)'
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
                title: 'Une avenue conçue pour ses habitants',
                body: 'Au XIXe siècle, Las Ramblas est l\'axe principal de la bourgeoisie barcelonaise : on s\'y promène, on y discute, on lit les journaux. L\'avenue est un espace de sociabilité locale, non un produit touristique. Comprendre cette origine est essentiel pour mesurer l\'ampleur de la transformation : en un siècle, Las Ramblas est passée d\'un espace vécu par ses habitants à un espace consommé par des millions de visiteurs de passage. (Source : allinfo.space, 2017 ; Le Parisien, 2017)'
            },
            {
                x: 68, y: 38, side: 'left', tag: 'Architecture',
                title: 'L\'héritage néoclassique sous pression',
                body: 'Les façades haussmanniennes et les édifices néoclassiques qui bordent Las Ramblas — dont le Gran Teatre del Liceu, l\'une des grandes scènes lyriques d\'Europe — témoignent de l\'ambition culturelle du XIXe siècle. Aujourd\'hui, ces bâtiments cohabitent avec des enseignes de fast-food et des boutiques de souvenirs. La question est posée : comment préserver un héritage architectural et culturel exceptionnel face à la pression économique du tourisme de masse ? (Source : Le Parisien, 2017)'
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

let cur = 0;
const fade = document.getElementById('fade');
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
        const conclusionEl = document.createElement('div');
        conclusionEl.className = 'conclusion-screen';
        conclusionEl.innerHTML = `
            <div class="concl-inner">
                <p class="concl-eyebrow">Conclusion — Réponse à la problématique</p>
                <h2 class="concl-title">Las Ramblas, miroir d'une ville en mutation</h2>
                <div class="concl-rule"></div>
                <p class="concl-body">
                    À travers ses six volets, ce documentaire a montré comment Las Ramblas reflète
                    les grandes transformations de Barcelone : <strong>une ville qui s'est ouverte
                    au monde</strong> au prix d'une dépendance croissante au tourisme de masse.
                </p>
                <p class="concl-body">
                    La <em>transformation urbaine</em> a redessiné l'espace public pour absorber des flux
                    massifs. La <em>mutation économique</em> a substitué le commerce local par une économie
                    standardisée. Le <em>rayonnement international</em> a propulsé Barcelone sur la scène
                    mondiale — mais cette visibilité a aussi créé des <em>vulnérabilités sécuritaires</em>
                    inédites. Face à ces tensions, la ville tente depuis 2015 de réguler les excès du
                    surtourisme, avec des résultats encore mitigés.
                </p>
                <p class="concl-body">
                    Las Ramblas pose ainsi une question universelle : <em>comment une grande ville
                    peut-elle rester vivable et authentique tout en restant attractive ?</em>
                    La réponse de Barcelone — encore incomplète — est observée par d'autres
                    métropoles confrontées au même défi : Venise, Amsterdam, Kyoto.
                </p>
                <div class="concl-sources">
                    <p class="concl-sources-title">Sources</p>
                    <ul>
                        <li>Office du Tourisme de Barcelone — données de fréquentation 2023</li>
                        <li>Mairie de Barcelone — Plan de réhabilitation (2018) ; Rapport surtourisme (2022)</li>
                        <li>Le Monde — Surtourisme et villes d'escale, juillet 2025</li>
                        <li>Euronews — Tourisme et sécurité à Barcelone, 2017</li>
                        <li>BFM TV — Attentat de Barcelone et tourisme international, août 2017</li>
                        <li>TF1 Info — Las Ramblas, artère emblématique, 2017</li>
                        <li>Le Parisien — La Rambla, artère de Barcelone, 2017</li>
                        <li>CNEWS — L'attentat et les Ramblas, 2017</li>
                        <li>Le Vif — Sécurité des sites touristiques espagnols, 2017</li>
                        <li>Kolda News — Sécurité sur les Ramblas, 2017</li>
                        <li>allinfo.space — La Rambla, cœur de Barcelone, 2017</li>
                    </ul>
                </div>
            </div>
        `;
        layer.appendChild(conclusionEl);
    }

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
    const vw = window.innerWidth;
    const vh = window.innerHeight;
    const pw = Math.min(300, vw * 0.88);

    if (h.side === 'right' && rect.left + 26 + pw < vw - 16) {
        panel.style.left = (rect.left + 26) + 'px';
        panel.style.right = 'auto';
    } else {
        panel.style.right = (vw - rect.left + 14) + 'px';
        panel.style.left = 'auto';
    }
    const topVal = Math.max(60, Math.min(rect.top - 16, vh - 230));
    panel.style.top = topVal + 'px';
    panel.classList.add('visible');
}

document.getElementById('panel-close').addEventListener('click', closePanel);
document.getElementById('scene').addEventListener('click', closePanel);
function closePanel() { panel.classList.remove('visible'); }

function activate(i) {
    document.querySelectorAll('.scene-layer').forEach((l, li) => l.classList.toggle('active', li === i));
    document.querySelectorAll('.tb-dot').forEach((d, di) => d.classList.toggle('active', di === i));

    document.getElementById('tb-label').textContent = `Scène ${i + 1} / ${SCENES.length}`;
    document.getElementById('cap-ey').textContent = SCENES[i].isConclusion ? '' : SCENES[i].eyebrow;
    document.getElementById('cap-ti').textContent = SCENES[i].isConclusion ? '' : SCENES[i].title;

    const capHint = document.getElementById('cap-hint');
    if (capHint) capHint.style.display = SCENES[i].isConclusion ? 'none' : '';

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
        cur = i;
        activate(cur);
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

let tx = null;
document.addEventListener('touchstart', e => { tx = e.touches[0].clientX; });
document.addEventListener('touchend', e => {
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