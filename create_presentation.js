import pptxgen from 'pptxgenjs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const pptx = new pptxgen();

// Presentation setup
pptx.layout = 'LAYOUT_16x9';
pptx.author = 'DevPulse Team';
pptx.company = 'DevPulse Inc.';
pptx.subject = 'Présentation Plateforme DevPulse';
pptx.title = 'DevPulse - Plateforme de Services de Développement';

// Theme Colors
const C_DARK_BG = '0B0F19';    // Slate 950
const C_CARD_BG = '161F30';    // Slate 900
const C_CARD_BORDER = '2D3748';
const C_INDIGO = '4F46E5';     // Primary Indigo
const C_INDIGO_LIGHT = '818CF8';
const C_BLUE = '2563EB';       // Blue 600
const C_EMERALD = '10B981';    // Emerald 500
const C_TEXT_WHITE = 'FFFFFF';
const C_TEXT_MUTED = '94A3B8'; // Slate 400
const C_TEXT_SUB = 'CBD5E1';   // Slate 300
const C_ROSE = 'F43F5E';

function applySlideDefaults(slide, title, category) {
  // Background
  slide.background = { color: C_DARK_BG };

  // Top header bar
  if (category) {
    slide.addText(category.toUpperCase(), {
      x: 0.8,
      y: 0.4,
      w: 8.0,
      h: 0.3,
      fontSize: 10,
      fontFace: 'Arial',
      bold: true,
      color: C_INDIGO_LIGHT,
      letterSpacing: 2
    });
  }

  if (title) {
    slide.addText(title, {
      x: 0.8,
      y: 0.65,
      w: 11.5,
      h: 0.8,
      fontSize: 24,
      fontFace: 'Arial',
      bold: true,
      color: C_TEXT_WHITE
    });
  }

  // Footer branding
  slide.addText('DevPulse — Plateforme SaaS de Développement', {
    x: 0.8,
    y: 7.0,
    w: 6.0,
    h: 0.3,
    fontSize: 9,
    fontFace: 'Arial',
    color: '64748B'
  });

  slide.addText('http://localhost:5173', {
    x: 9.5,
    y: 7.0,
    w: 3.0,
    h: 0.3,
    fontSize: 9,
    fontFace: 'Arial',
    align: 'right',
    color: C_INDIGO_LIGHT
  });
}

// ----------------------------------------------------
// SLIDE 1: Title & Pitch
// ----------------------------------------------------
{
  const slide = pptx.addSlide();
  slide.background = { color: C_DARK_BG };

  // Tag
  slide.addShape(pptx.shapes.ROUNDED_RECTANGLE, {
    x: 0.8, y: 1.2, w: 3.2, h: 0.45,
    fill: { color: '1E1B4B' },
    line: { color: C_INDIGO, width: 1 },
    rectRadius: 0.2
  });
  slide.addText('SOUTENANCE & PITCH PRODUIT', {
    x: 0.8, y: 1.2, w: 3.2, h: 0.45,
    fontSize: 11, fontFace: 'Arial', bold: true, color: C_INDIGO_LIGHT, align: 'center'
  });

  // Main Title
  slide.addText('DevPulse', {
    x: 0.8, y: 1.9, w: 11.5, h: 1.1,
    fontSize: 46, fontFace: 'Arial', bold: true, color: C_TEXT_WHITE
  });
  slide.addText('La Plateforme Web Moderne pour Services de Développement', {
    x: 0.8, y: 2.9, w: 11.5, h: 0.6,
    fontSize: 22, fontFace: 'Arial', bold: true, color: C_INDIGO_LIGHT
  });

  // Pitch Paragraph
  slide.addText(
    'Une solution SaaS complète connectant les Clients porteurs de projets aux meilleurs Développeurs Freelances qualifiés avec publication instantanée, calendrier de réservation de cadrage et support bilingue.',
    {
      x: 0.8, y: 3.6, w: 11.0, h: 0.9,
      fontSize: 14, fontFace: 'Arial', color: C_TEXT_SUB, lineSpacing: 22
    }
  );

  // 3 Feature Cards at bottom
  const cards = [
    { title: 'Double Espace', desc: 'Tableau de bord dédié pour Clients & Freelancers', color: C_INDIGO },
    { title: 'Zéro Friction', desc: 'Demande en 3 min & Prise de RDV en visio directe', color: C_BLUE },
    { title: 'Stack Moderne', desc: 'React 18 + Vite + Tailwind + Bilingue FR / EN', color: C_EMERALD }
  ];

  cards.forEach((c, idx) => {
    const xPos = 0.8 + idx * 4.0;
    slide.addShape(pptx.shapes.ROUNDED_RECTANGLE, {
      x: xPos, y: 4.8, w: 3.7, h: 1.7,
      fill: { color: C_CARD_BG },
      line: { color: C_CARD_BORDER, width: 1 },
      rectRadius: 0.15
    });
    slide.addText(c.title, {
      x: xPos + 0.3, y: 5.0, w: 3.1, h: 0.4,
      fontSize: 15, fontFace: 'Arial', bold: true, color: c.color
    });
    slide.addText(c.desc, {
      x: xPos + 0.3, y: 5.45, w: 3.1, h: 0.8,
      fontSize: 11, fontFace: 'Arial', color: C_TEXT_MUTED, lineSpacing: 16
    });
  });
}

// ----------------------------------------------------
// SLIDE 2: Problématique vs Solution
// ----------------------------------------------------
{
  const slide = pptx.addSlide();
  applySlideDefaults(slide, 'Pourquoi DevPulse ? Problématique vs Solution', 'Contexte & Valeur Ajoutée');

  // Left Card: The Problem
  slide.addShape(pptx.shapes.ROUNDED_RECTANGLE, {
    x: 0.8, y: 1.6, w: 5.7, h: 5.0,
    fill: { color: '1A1215' },
    line: { color: '4C1D24', width: 1.5 },
    rectRadius: 0.15
  });
  slide.addText('❌ Les Défis Actuels du Marché', {
    x: 1.1, y: 1.8, w: 5.1, h: 0.5,
    fontSize: 16, fontFace: 'Arial', bold: true, color: C_ROSE
  });
  const problems = [
    'Difficulté pour les clients de formaliser leur besoin sans expertise technique.',
    'Allers-retours interminables par email pour caler un simple rendez-vous de cadrage.',
    'Manque de visibilité des freelances sur les projets sérieux avec budgets réels.',
    'Plateformes traditionnelles lentes, complexes et prélevant de lourdes commissions.'
  ];
  problems.forEach((p, idx) => {
    slide.addText(`• ${p}`, {
      x: 1.1, y: 2.5 + idx * 0.95, w: 5.1, h: 0.85,
      fontSize: 11, fontFace: 'Arial', color: C_TEXT_SUB, lineSpacing: 16
    });
  });

  // Right Card: The Solution
  slide.addShape(pptx.shapes.ROUNDED_RECTANGLE, {
    x: 6.8, y: 1.6, w: 5.7, h: 5.0,
    fill: { color: '0F1F18' },
    line: { color: '134E34', width: 1.5 },
    rectRadius: 0.15
  });
  slide.addText('✅ La Solution Apportée par DevPulse', {
    x: 7.1, y: 1.8, w: 5.1, h: 0.5,
    fontSize: 16, fontFace: 'Arial', bold: true, color: C_EMERALD
  });
  const solutions = [
    'Formulaire guidé en 3 étapes avec budget, deadline et technologies clés.',
    'Calendrier interactif avec créneaux live et lien Google Meet automatique.',
    'Synchronisation temps réel : un projet publié côté Client apparaît en direct côté Freelance.',
    'Interface SaaS épurée, responsive, sans intermédiaire inutile et bilingue FR/EN.'
  ];
  solutions.forEach((s, idx) => {
    slide.addText(`✔ ${s}`, {
      x: 7.1, y: 2.5 + idx * 0.95, w: 5.1, h: 0.85,
      fontSize: 11, fontFace: 'Arial', color: C_TEXT_SUB, lineSpacing: 16
    });
  });
}

// ----------------------------------------------------
// SLIDE 3: Dual User Space
// ----------------------------------------------------
{
  const slide = pptx.addSlide();
  applySlideDefaults(slide, 'Deux Espaces Dédiés & Rôles Complémentaires', 'Architecture Métier');

  // Left: Client Space
  slide.addShape(pptx.shapes.ROUNDED_RECTANGLE, {
    x: 0.8, y: 1.6, w: 5.7, h: 5.0,
    fill: { color: C_CARD_BG },
    line: { color: C_INDIGO, width: 1.5 },
    rectRadius: 0.15
  });
  slide.addText('ESPACE CLIENT (Porteur de Projet)', {
    x: 1.1, y: 1.85, w: 5.1, h: 0.35,
    fontSize: 11, fontFace: 'Arial', bold: true, color: C_INDIGO_LIGHT
  });
  slide.addText('Concevoir, Budgétiser & Planifier', {
    x: 1.1, y: 2.2, w: 5.1, h: 0.5,
    fontSize: 18, fontFace: 'Arial', bold: true, color: C_TEXT_WHITE
  });
  slide.addText('Dédié aux startups, PME et porteurs d\'idées qui cherchent des compétences pointues :', {
    x: 1.1, y: 2.8, w: 5.1, h: 0.6,
    fontSize: 11, fontFace: 'Arial', color: C_TEXT_MUTED
  });

  const clientFeatures = [
    'Action 1 : "Demander un service" (Web, Mobile, IA, Cloud...)',
    'Action 2 : "Prendre rendez-vous" (Calendrier mensuel visio)',
    'Tableau de bord de suivi des demandes et devis reçus',
    'Confirmation instantanée avec lien visioconférence'
  ];
  clientFeatures.forEach((f, idx) => {
    slide.addText(`👉 ${f}`, {
      x: 1.1, y: 3.5 + idx * 0.7, w: 5.1, h: 0.6,
      fontSize: 11, fontFace: 'Arial', color: C_TEXT_SUB, bold: idx < 2
    });
  });

  // Right: Freelancer Space
  slide.addShape(pptx.shapes.ROUNDED_RECTANGLE, {
    x: 6.8, y: 1.6, w: 5.7, h: 5.0,
    fill: { color: C_CARD_BG },
    line: { color: C_BLUE, width: 1.5 },
    rectRadius: 0.15
  });
  slide.addText('ESPACE FREELANCER (Développeur)', {
    x: 7.1, y: 1.85, w: 5.1, h: 0.35,
    fontSize: 11, fontFace: 'Arial', bold: true, color: '60A5FA'
  });
  slide.addText('Explorer, Postuler & Développer', {
    x: 7.1, y: 2.2, w: 5.1, h: 0.5,
    fontSize: 18, fontFace: 'Arial', bold: true, color: C_TEXT_WHITE
  });
  slide.addText('Dédié aux développeurs freelances et consultants cherchant des missions qualifiées :', {
    x: 7.1, y: 2.8, w: 5.1, h: 0.6,
    fontSize: 11, fontFace: 'Arial', color: C_TEXT_MUTED
  });

  const freelanceFeatures = [
    'Explorateur de projets avec filtres de compétences & catégories',
    'Cartes détaillées avec budgets et délais transparents',
    'Fiche complète du cahier des charges et livrables',
    'Bouton "Postuler au projet" avec devis & note technique'
  ];
  freelanceFeatures.forEach((f, idx) => {
    slide.addText(`👉 ${f}`, {
      x: 7.1, y: 3.5 + idx * 0.7, w: 5.1, h: 0.6,
      fontSize: 11, fontFace: 'Arial', color: C_TEXT_SUB, bold: idx === 3
    });
  });
}

// ----------------------------------------------------
// SLIDE 4: Client Space Deep Dive
// ----------------------------------------------------
{
  const slide = pptx.addSlide();
  applySlideDefaults(slide, 'Espace Client : Les Deux Actions Majeures', 'Parcours Client');

  // Action 1 Card
  slide.addShape(pptx.shapes.ROUNDED_RECTANGLE, {
    x: 0.8, y: 1.6, w: 5.7, h: 5.0,
    fill: { color: C_CARD_BG },
    line: { color: C_CARD_BORDER, width: 1 },
    rectRadius: 0.15
  });
  slide.addText('1. DEMANDER UN SERVICE', {
    x: 1.1, y: 1.85, w: 5.1, h: 0.4,
    fontSize: 15, fontFace: 'Arial', bold: true, color: C_INDIGO_LIGHT
  });
  slide.addText('Formulaire structuré pour exprimer son besoin :', {
    x: 1.1, y: 2.3, w: 5.1, h: 0.4,
    fontSize: 11, fontFace: 'Arial', color: C_TEXT_MUTED
  });

  const fields = [
    'Nom du projet : Intitulé clair de l\'application',
    'Type de service : Web, Mobile, IA, DevOps, UI/UX, API',
    'Description complète : Spécifications & périmètre',
    'Budget prévisionnel : Montant libre ou présélection (€)',
    'Date limite (Deadline) : Sélecteur de date cible',
    'Bouton d\'action officiel : "Publier la demande"'
  ];
  fields.forEach((f, idx) => {
    slide.addText(`• ${f}`, {
      x: 1.1, y: 2.8 + idx * 0.55, w: 5.1, h: 0.5,
      fontSize: 10.5, fontFace: 'Arial', color: C_TEXT_SUB
    });
  });

  // Action 2 Card
  slide.addShape(pptx.shapes.ROUNDED_RECTANGLE, {
    x: 6.8, y: 1.6, w: 5.7, h: 5.0,
    fill: { color: C_CARD_BG },
    line: { color: C_CARD_BORDER, width: 1 },
    rectRadius: 0.15
  });
  slide.addText('2. PRENDRE RENDEZ-VOUS', {
    x: 7.1, y: 1.85, w: 5.1, h: 0.4,
    fontSize: 15, fontFace: 'Arial', bold: true, color: '60A5FA'
  });
  slide.addText('Interface calendrier interactive en 3 étapes :', {
    x: 7.1, y: 2.3, w: 5.1, h: 0.4,
    fontSize: 11, fontFace: 'Arial', color: C_TEXT_MUTED
  });

  const rdvSteps = [
    'Format : Cadrage (30m), Audit (45m), Sprint (30m), MVP (60m)',
    'Date : Calendrier mensuel interactif (jours ouvrés)',
    'Créneau horaire : 09:00, 10:00, 11:15, 14:00, 15:00, 16:30...',
    'Écran de confirmation détaillé comprenant :',
    '  - Récapitulatif date, heure et durée',
    '  - Lien visio Google Meet automatique',
    '  - Bouton d\'export vers Google Calendar'
  ];
  rdvSteps.forEach((s, idx) => {
    slide.addText(`• ${s}`, {
      x: 7.1, y: 2.8 + idx * 0.55, w: 5.1, h: 0.5,
      fontSize: 10.5, fontFace: 'Arial', color: C_TEXT_SUB, bold: idx === 3
    });
  });
}

// ----------------------------------------------------
// SLIDE 5: Freelancer Space Deep Dive
// ----------------------------------------------------
{
  const slide = pptx.addSlide();
  applySlideDefaults(slide, 'Espace Freelance : Exploration & Candidature', 'Parcours Freelancer');

  const steps = [
    {
      num: 'A',
      title: 'Moteur de Recherche & Filtres',
      color: C_BLUE,
      items: [
        'Recherche plein texte par mot-clé (React, Flutter, Python, AWS...)',
        'Filtres instantanés par catégories de services',
        'Badges "Nouveau !" synchronisés en direct depuis l\'Espace Client'
      ]
    },
    {
      num: 'B',
      title: 'Cartes de Projet & Fiche Détails',
      color: C_INDIGO,
      items: [
        'Titre, nom du client vérifié, description courte',
        'Budget alloué & Deadline de livraison bien en vue',
        'Bouton "Voir le projet" vers le cahier des charges intégral'
      ]
    },
    {
      num: 'C',
      title: 'Postuler au Projet',
      color: C_EMERALD,
      items: [
        'Bouton officiel : "Postuler au projet"',
        'Modal de proposition : tarif (forfait/TJM), délai et note technique',
        'Onglet "Mes candidatures" pour suivre l\'état d\'examen par le client'
      ]
    }
  ];

  steps.forEach((st, idx) => {
    const xPos = 0.8 + idx * 4.0;
    slide.addShape(pptx.shapes.ROUNDED_RECTANGLE, {
      x: xPos, y: 1.6, w: 3.7, h: 5.0,
      fill: { color: C_CARD_BG },
      line: { color: C_CARD_BORDER, width: 1 },
      rectRadius: 0.15
    });

    slide.addShape(pptx.shapes.ROUNDED_RECTANGLE, {
      x: xPos + 0.3, y: 1.9, w: 0.6, h: 0.6,
      fill: { color: st.color },
      rectRadius: 0.1
    });
    slide.addText(st.num, {
      x: xPos + 0.3, y: 1.9, w: 0.6, h: 0.6,
      fontSize: 14, fontFace: 'Arial', bold: true, color: C_TEXT_WHITE, align: 'center'
    });

    slide.addText(st.title, {
      x: xPos + 1.05, y: 1.95, w: 2.35, h: 0.6,
      fontSize: 13, fontFace: 'Arial', bold: true, color: C_TEXT_WHITE
    });

    st.items.forEach((item, itemIdx) => {
      slide.addText(`✔ ${item}`, {
        x: xPos + 0.3, y: 2.8 + itemIdx * 1.1, w: 3.1, h: 0.95,
        fontSize: 10.5, fontFace: 'Arial', color: C_TEXT_SUB, lineSpacing: 15
      });
    });
  });
}

// ----------------------------------------------------
// SLIDE 6: Multilingual System
// ----------------------------------------------------
{
  const slide = pptx.addSlide();
  applySlideDefaults(slide, 'Support Multilingue : Français 🇫🇷 & English 🇬🇧', 'Internationalisation (i18n)');

  slide.addShape(pptx.shapes.ROUNDED_RECTANGLE, {
    x: 0.8, y: 1.6, w: 11.7, h: 5.0,
    fill: { color: C_CARD_BG },
    line: { color: C_CARD_BORDER, width: 1 },
    rectRadius: 0.15
  });

  slide.addText('Une plateforme entièrement bilingue en un clic', {
    x: 1.2, y: 1.9, w: 10.5, h: 0.4,
    fontSize: 18, fontFace: 'Arial', bold: true, color: C_TEXT_WHITE
  });
  slide.addText('Tous les écrans, boutons, formulaires et notifications sont traduits instantanément sans recharger la page.', {
    x: 1.2, y: 2.35, w: 10.5, h: 0.4,
    fontSize: 12, fontFace: 'Arial', color: C_TEXT_MUTED
  });

  const columns = [
    {
      flag: '🇫🇷 Français',
      items: [
        '"Je suis Client" / "Je suis Freelancer"',
        '"Demander un service" & "Publier la demande"',
        '"Prendre rendez-vous" & Confirmation',
        '"Voir le projet" & "Postuler au projet"'
      ]
    },
    {
      flag: '🇬🇧 English',
      items: [
        '"I am a Client" / "I am a Freelancer"',
        '"Request a service" & "Publish request"',
        '"Schedule a meeting" & Confirmation',
        '"View project" & "Apply to project"'
      ]
    }
  ];

  columns.forEach((col, idx) => {
    const xPos = 1.2 + idx * 5.5;
    slide.addShape(pptx.shapes.ROUNDED_RECTANGLE, {
      x: xPos, y: 3.0, w: 5.1, h: 3.1,
      fill: { color: C_DARK_BG },
      line: { color: C_CARD_BORDER, width: 1 },
      rectRadius: 0.1
    });
    slide.addText(col.flag, {
      x: xPos + 0.3, y: 3.2, w: 4.5, h: 0.4,
      fontSize: 14, fontFace: 'Arial', bold: true, color: C_INDIGO_LIGHT
    });
    col.items.forEach((it, iIdx) => {
      slide.addText(`• ${it}`, {
        x: xPos + 0.3, y: 3.7 + iIdx * 0.55, w: 4.5, h: 0.45,
        fontSize: 11, fontFace: 'Arial', color: C_TEXT_SUB
      });
    });
  });
}

// ----------------------------------------------------
// SLIDE 7: Technical Stack & Architecture
// ----------------------------------------------------
{
  const slide = pptx.addSlide();
  applySlideDefaults(slide, 'Architecture Technique & Choix Technologiques', 'Stack & Performance');

  const techs = [
    { name: 'React 18', role: 'Frontend & UI', desc: 'Architecture par composants réutilisables, hooks modernes et Context API centralisé.' },
    { name: 'Vite 6', role: 'Bundler & Tooling', desc: 'Build de production en 10 secondes et rechargement à chaud (HMR) instantané.' },
    { name: 'Tailwind CSS', role: 'Styling & Design', desc: 'Design SaaS moderne, responsive mobile-first et palette de couleurs équilibrée.' },
    { name: 'Lucide Icons', role: 'Iconographie', desc: 'Bibliothèque de plus de 40 icônes vectorielles légères et cohérentes.' }
  ];

  techs.forEach((t, idx) => {
    const xPos = 0.8 + idx * 3.0;
    slide.addShape(pptx.shapes.ROUNDED_RECTANGLE, {
      x: xPos, y: 1.6, w: 2.8, h: 3.0,
      fill: { color: C_CARD_BG },
      line: { color: C_CARD_BORDER, width: 1 },
      rectRadius: 0.15
    });
    slide.addText(t.name, {
      x: xPos + 0.2, y: 1.85, w: 2.4, h: 0.4,
      fontSize: 16, fontFace: 'Arial', bold: true, color: C_INDIGO_LIGHT, align: 'center'
    });
    slide.addText(t.role, {
      x: xPos + 0.2, y: 2.25, w: 2.4, h: 0.3,
      fontSize: 10, fontFace: 'Arial', bold: true, color: C_EMERALD, align: 'center'
    });
    slide.addText(t.desc, {
      x: xPos + 0.2, y: 2.7, w: 2.4, h: 1.6,
      fontSize: 10, fontFace: 'Arial', color: C_TEXT_SUB, align: 'center', lineSpacing: 15
    });
  });

  // State Management Box at bottom
  slide.addShape(pptx.shapes.ROUNDED_RECTANGLE, {
    x: 0.8, y: 4.9, w: 11.7, h: 1.7,
    fill: { color: '1A1D2B' },
    line: { color: C_INDIGO, width: 1 },
    rectRadius: 0.15
  });
  slide.addText('Gestion d\'État & Persistance des Données (Reactive State + LocalStorage)', {
    x: 1.1, y: 5.1, w: 11.0, h: 0.35,
    fontSize: 13, fontFace: 'Arial', bold: true, color: C_TEXT_WHITE
  });
  slide.addText(
    'Le PlatformContext maintient l\'état en temps réel : dès qu\'un client publie un projet ou réserve un créneau, l\'état React se met à jour et se synchronise avec le localStorage. Toute modification est immédiatement répercutée sur les autres vues sans rechargement de page.',
    {
      x: 1.1, y: 5.5, w: 11.0, h: 0.8,
      fontSize: 11, fontFace: 'Arial', color: C_TEXT_SUB, lineSpacing: 17
    }
  );
}

// ----------------------------------------------------
// SLIDE 8: Live Demo & Conclusion
// ----------------------------------------------------
{
  const slide = pptx.addSlide();
  applySlideDefaults(slide, 'Scénario de Démonstration en 3 Minutes & Roadmap', 'Démonstration & Futur');

  // Demo Steps Card
  slide.addShape(pptx.shapes.ROUNDED_RECTANGLE, {
    x: 0.8, y: 1.6, w: 7.2, h: 5.0,
    fill: { color: C_CARD_BG },
    line: { color: C_CARD_BORDER, width: 1 },
    rectRadius: 0.15
  });
  slide.addText('Déroulement de la Démo en Direct (3 Minutes)', {
    x: 1.1, y: 1.85, w: 6.6, h: 0.35,
    fontSize: 14, fontFace: 'Arial', bold: true, color: C_INDIGO_LIGHT
  });

  const demoSteps = [
    { step: '1. Accueil & Multilingue (30s)', desc: 'Présenter la landing page, permuter la langue (FR ↔ EN) et montrer les deux CTAs.' },
    { step: '2. Publication Client (1 min)', desc: 'Créer un projet via "Demander un service", cliquer sur "Publier la demande".' },
    { step: '3. Réservation Visio (30s)', desc: 'Choisir date/heure dans le calendrier et afficher la confirmation avec lien Google Meet.' },
    { step: '4. Effet Synchro Freelance (1 min)', desc: 'Montrer le nouveau projet en tête de liste, ouvrir la fiche et cliquer sur "Postuler au projet".' }
  ];

  demoSteps.forEach((ds, idx) => {
    slide.addText(ds.step, {
      x: 1.1, y: 2.3 + idx * 1.05, w: 6.6, h: 0.3,
      fontSize: 11.5, fontFace: 'Arial', bold: true, color: C_TEXT_WHITE
    });
    slide.addText(ds.desc, {
      x: 1.1, y: 2.65 + idx * 1.05, w: 6.6, h: 0.55,
      fontSize: 10, fontFace: 'Arial', color: C_TEXT_MUTED
    });
  });

  // Right Card: Roadmap & Conclusion
  slide.addShape(pptx.shapes.ROUNDED_RECTANGLE, {
    x: 8.3, y: 1.6, w: 4.2, h: 5.0,
    fill: { color: C_CARD_BG },
    line: { color: C_EMERALD, width: 1 },
    rectRadius: 0.15
  });
  slide.addText('Roadmap & Perspectives v2', {
    x: 8.6, y: 1.85, w: 3.6, h: 0.35,
    fontSize: 14, fontFace: 'Arial', bold: true, color: C_EMERALD
  });

  const roadmap = [
    'Paiement Escrow Stripe (séquestre bancaire réel)',
    'Chat temps réel WebSocket entre client et freelance',
    'Génération de cahier des charges assistée par IA',
    'Système de notation et badges de compétences'
  ];
  roadmap.forEach((r, idx) => {
    slide.addText(`🚀 ${r}`, {
      x: 8.6, y: 2.4 + idx * 0.7, w: 3.6, h: 0.6,
      fontSize: 10.5, fontFace: 'Arial', color: C_TEXT_SUB
    });
  });

  slide.addShape(pptx.shapes.ROUNDED_RECTANGLE, {
    x: 8.6, y: 5.3, w: 3.6, h: 1.0,
    fill: { color: '1E1B4B' },
    line: { color: C_INDIGO, width: 1 },
    rectRadius: 0.1
  });
  slide.addText('Serveur actif :\nhttp://localhost:5173', {
    x: 8.6, y: 5.4, w: 3.6, h: 0.8,
    fontSize: 11, fontFace: 'Arial', bold: true, color: C_TEXT_WHITE, align: 'center'
  });
}

// Save Presentation
const outputPath = path.resolve(__dirname, 'DevPulse_Presentation.pptx');
pptx.writeFile({ fileName: outputPath })
  .then((fileName) => {
    console.log(`SUCCESS: PowerPoint generated at ${fileName}`);
  })
  .catch((err) => {
    console.error('ERROR:', err);
  });
