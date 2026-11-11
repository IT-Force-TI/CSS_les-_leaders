// ============================================================================
//  PROFIL DE L'ÉTABLISSEMENT
//  C'est le fichier à adapter pour décliner le site pour une autre école :
//  identité, coordonnées, tarifs par défaut, textes de l'accueil, cycles, FAQ…
//  Les images référencées se trouvent dans le dossier public/.
//
//  En mode API, les coordonnées et les tarifs (bloc `settings`) sont ensuite
//  remplacés par ceux enregistrés dans l'administration (GET /api/public/settings).
// ============================================================================
import type { Settings } from '../models'

export interface CycleProfile {
  /** Nom du cycle. Doit correspondre aux cycles acceptés par le backend (utils/schemas.js). */
  name: string
  /** Segment d'URL de la page d'admission : /admissions/<slug>. */
  slug: string
  age: string
  text: string
  /** Classes proposées. Doivent correspondre aux classes acceptées par le backend. */
  classes: string[]
  skills: string[]
  programs: { icon: string; title: string; text: string }[]
}

export interface SchoolProfile {
  /** Identifiant technique (sert aussi de clé de stockage des fake data). */
  id: string
  logo: string
  /** Valeurs par défaut des paramètres (affichées avant chargement et utilisées par les fake data). */
  settings: Settings
  footerText: string
  hero: { eyebrow: string; titleLines: string[]; highlight: string; intro: string; images: string[] }
  founder: {
    photo: string
    photoAlt: string
    eyebrow: string
    titleLines: string[]
    greeting: string
    paragraphs: string[]
    signature: string
  }
  history: { title: string; paragraphs: string[]; stats: { value: string; label: string }[] }
  values: { icon: string; title: string; text: string }[]
  faq: { q: string; a: string; link?: { to: string; label: string } }[]
  cycles: CycleProfile[]
  admissions: { documents: string[] }
}

export const school: SchoolProfile = {
  id: 'css-les-leaders-dapaong',
  logo: '/logo-css-les-leaders.png',
  settings: {
    name: 'CSS LES LEADERS',
    shortName: 'CSS LES LEADERS',
    slogan: 'L’EXCELLENCE POUR AMBITION',
    address: 'Secteur de Kounkoaré — Dapaong, Togo',
    email: 'contact@css-lesleaders.tg',
    phone: '+228 91 98 37 52',
    phone2: '+228 99 92 99 25',
    hours: 'Lundi – Vendredi : 7h00 – 17h00',
    annualFee: 70000,
    canteenFee: 400,
    badgeFee: 1000,
    uniformFee: 3500,
    apeFee: 2000,
  },
  footerText:
    'Un établissement d’enseignement secondaire à Kounkoaré (Dapaong), qui accompagne chaque élève avec rigueur vers la réussite à ses examens.',
  hero: {
    eyebrow: 'RIGUEUR - TRAVAIL - RÉUSSITE',
    titleLines: ['Complexe Scolaire', 'Secondaire'],
    highlight: 'LES LEADERS',
    intro:
      'Bienvenue sur le site officiel du CSS LES LEADERS, à Kounkoaré (Dapaong) : un cadre d’apprentissage sérieux et exigeant, où chaque élève est accompagné vers la réussite et préparé à devenir un leader de demain.',
    images: ['/hero/hero-1.jpg', '/hero/hero-2.jpg', '/hero/hero-3.jpg'],
  },
  founder: {
    photo: '/directeur-general.jpg',
    photoAlt: 'La direction du CSS LES LEADERS',
    eyebrow: 'UN MOT DU DIRECTEUR',
    titleLines: ['Exigence et confiance,', 'pour réussir ensemble.'],
    greeting: 'Chers parents, chers élèves,',
    paragraphs: [
      'Au CSS LES LEADERS, nous croyons que chaque élève peut révéler le meilleur de lui-même. Notre ambition est de lui offrir un cadre d’apprentissage rigoureux, motivant et bienveillant, qui développe ses connaissances comme son sens des responsabilités.',
      'Notre équipe éducative accompagne les élèves avec exigence et attention, en lien étroit avec les familles de Kounkoaré et de toute la ville de Dapaong, pour qu’ils réussissent leurs examens et construisent un avenir dont ils seront fiers.',
    ],
    signature: 'DJALIGUI Anate — Directeur',
  },
  history: {
    title: 'Notre Histoire',
    paragraphs: [
      'Le CSS LES LEADERS est implanté dans le secteur de Kounkoaré, à Dapaong, chef-lieu de la région des Savanes. Il est né de la volonté d’offrir aux familles de ce secteur un établissement secondaire de qualité, proche de chez elles.',
      'Conscients des attentes des familles dans leur recherche d’un établissement scolaire de qualité, nous avons bâti une école qui allie excellence académique et épanouissement personnel, en offrant un cadre d’apprentissage stimulant, sécurisé et adapté aux besoins de chaque élève.',
      'Le CSS LES LEADERS suit les programmes officiels togolais et prépare ses élèves au BEPC. Il met l’accent sur la discipline, le travail personnel et le sens des responsabilités, afin de former les leaders de demain.',
    ],
    stats: [
      { value: 'Un suivi attentif', label: 'Chaque élève est suivi avec attention.' },
      { value: 'Un cadre sûr', label: 'Pour apprendre dans de bonnes conditions.' },
      { value: 'Pour bien réussir', label: 'Notre engagement pour chaque enfant.' },
    ],
  },
  values: [
    { icon: 'graduation', title: 'Excellence académique', text: 'Des enseignements exigeants et une préparation sérieuse aux examens.' },
    { icon: 'heart', title: 'Leadership', text: 'Former des jeunes responsables, confiants et engagés.' },
    { icon: 'idea', title: 'Discipline et travail', text: 'Le goût de l’effort et la rigueur au quotidien.' },
    { icon: 'users', title: 'Communauté', text: 'Une communauté éducative unie avec les familles de Dapaong.' },
  ],
  faq: [
    {
      q: 'Où se trouve l’établissement ?',
      a: 'Le CSS LES LEADERS se trouve dans le secteur de Kounkoaré, à Dapaong. Contactez le secrétariat pour connaître l’emplacement exact et organiser une visite.',
    },
    {
      q: 'Avez-vous un bus scolaire ?',
      a: 'Contactez le secrétariat pour connaître les possibilités de transport et les quartiers de Dapaong desservis.',
    },
    {
      q: 'Les frais de scolarité au CSS LES LEADERS s’élèvent à combien ?',
      a: 'La scolarité annuelle et les frais annexes sont détaillés sur la page Tarifs et scolarité.',
      link: { to: '/tarifs', label: 'Voir les tarifs' },
    },
    {
      q: 'Quelles sont les échéances de paiement ?',
      a: 'Le paiement de la scolarité peut être effectué en trois tranches. Le calendrier est communiqué lors de l’inscription.',
    },
    {
      q: 'Vous semblez avoir un programme bien défini que vous leur léguez ?',
      a: 'Nos programmes conjuguent apprentissages fondamentaux, développement personnel et ouverture sur le monde. Découvrez le détail dans la rubrique Nos cycles.',
      link: { to: '/cycles', label: 'Voir nos cycles' },
    },
  ],
  cycles: [
    {
      name: 'Collège',
      slug: 'college',
      age: '12 à 16 ans',
      text: 'Le collège prépare les élèves à poursuivre leurs études avec confiance. Les enseignements approfondissent les connaissances, les méthodes de travail et l’esprit critique.',
      classes: ['6e', '5e', '4e', '3e'],
      skills: [
        'Enseignements généraux approfondis',
        'Méthodologie et autonomie',
        'Accompagnement et suivi des progrès',
        'Préparation aux examens et à l’orientation',
      ],
      programs: [
        {
          icon: 'graduation',
          title: 'Excellence académique',
          text: 'Des enseignements exigeants et un suivi régulier.',
        },
        {
          icon: 'book',
          title: 'Langues et culture',
          text: 'S’exprimer et s’ouvrir à de nouveaux horizons.',
        },
        {
          icon: 'shield',
          title: 'Préparer l’avenir',
          text: 'Construire son projet et développer ses compétences.',
        },
      ],
    },
  ],
  admissions: {
    documents: [
      'Une (1) copie légalisée de l’acte de naissance ou un jugement supplétif légalisé (dossier scolaire pour tout le cycle)',
      'Un (1) certificat de scolarité',
      'Les bulletins de notes de l’année écoulée (et le CEPD pour l’entrée en 6e)',
      'Un carnet de correspondance (pour la réinscription)',
      'Une (1) chemise dossier à rabat',
      'Un (1) carnet de santé',
    ],
  },
}

/** Classes par cycle, dérivées du profil (formulaires, filtres, fake data). */
export const classesByCycle: Record<string, string[]> = Object.fromEntries(
  school.cycles.map((c) => [c.name, c.classes]),
)
