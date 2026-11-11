/**
 * Journalist-focused copy for the "Dirigido a / Who it is for" section.
 * Shared by /, /ca/ and /en/ through AudienceIntro.astro.
 */
export interface AudienceCopy {
  title: string;
  paragraphs: string[];
  bullets: {lead: string; text: string}[];
}

export const audienceCopy: Record<'es'|'ca'|'en', AudienceCopy> = {
  es: {
    title: 'Investigación digital para tu trabajo periodístico.',
    paragraphs: [
      'Aprende a verificar, contrastar y documentar información pública y añade a tu trabajo una competencia muy demandada en las redacciones. Incorpora una metodología de investigación en fuentes abiertas que te ayude a interpretar los datos que publican empresas, personas e instituciones en internet.',
      'Una formación 100 % online dirigida a periodistas y profesionales de la información que quieren reforzar el rigor editorial de sus reportajes. Combina el estudio a tu ritmo con <strong>4 clases prácticas con un profesor</strong> para aplicar las técnicas de investigación digital a situaciones reales.',
      'Trabaja con documentos, registros públicos, sitios corporativos, prensa y otras fuentes abiertas. Aprende a evaluar la fiabilidad de la información, distinguir indicios de conclusiones y organizar tus hallazgos en informes claros, identificando sus fuentes y contexto.'
    ],
    bullets: [
      {lead: 'Reporteros y redacciones:', text: 'refuerza la verificación y el fact-checking de tus piezas con fuentes abiertas documentadas y trazables.'},
      {lead: 'Periodismo de datos e investigación:', text: 'aplica la búsqueda avanzada, la investigación de personas y empresas y el análisis de redes sociales a tus investigaciones.'},
      {lead: 'Documentación de evidencias:', text: 'localiza fuentes fiables, contrasta su procedencia y presenta tu información con criterio y trazabilidad.'},
      {lead: 'Perfiles de comunicación, ciberseguridad y verificación:', text: 'incorpora técnicas de investigación en fuentes abiertas a tu conjunto de habilidades profesionales.'},
      {lead: 'Profesionales que cuidan su identidad digital:', text: 'comprende qué información pública hay sobre ti, cómo se interpreta y cómo gestionarla con respeto a la privacidad.'}
    ]
  },
  ca: {
    title: 'Investigació digital per a la teva feina periodística.',
    paragraphs: [
      "Aprèn a verificar, contrastar i documentar informació pública i afegeix a la teva feina una competència molt demandada a les redaccions. Incorpora una metodologia d'investigació en fonts obertes que t'ajudi a interpretar les dades que publiquen empreses, persones i institucions a internet.",
      'Una formació 100 % en línia adreçada a periodistes i professionals de la informació que volen reforçar el rigor editorial dels seus reportatges. Combina l\u2019estudi al teu ritme amb <strong>4 classes pràctiques amb un professor</strong> per aplicar les tècniques d\u2019investigació digital a situacions reals.',
      'Treballa amb documents, registres públics, llocs corporatius, premsa i altres fonts obertes. Aprèn a avaluar la fiabilitat de la informació, distingir indicis de conclusions i organitzar els teus resultats en informes clars, identificant-ne les fonts i el context.'
    ],
    bullets: [
      {lead: 'Reporters i redaccions:', text: 'reforça la verificació i el fact-checking de les teves peces amb fonts obertes documentades i traçables.'},
      {lead: 'Periodisme de dades i investigació:', text: 'aplica la cerca avançada, la investigació de persones i empreses i l’anàlisi de xarxes socials a les teves investigacions.'},
      {lead: 'Documentació d’evidències:', text: 'localitza fonts fiables, contrasta-ne la procedència i presenta la informació amb criteri i traçabilitat.'},
      {lead: 'Perfils de comunicació, ciberseguretat i verificació:', text: 'incorpora tècniques d\u2019investigació en fonts obertes al teu conjunt d\u2019habilitats professionals.'},
      {lead: 'Professionals que cuiden la seva identitat digital:', text: 'comprèn quina informació pública hi ha sobre tu, com s\u2019interpreta i com gestionar-la respectant la privacitat.'}
    ]
  },
  en: {
    title: 'Digital investigation for your journalistic work.',
    paragraphs: [
      'Learn to verify, cross-check and document public information and add a skill in high demand in newsrooms to your work. Incorporate an open-source investigation methodology that helps you interpret the data published on the internet by companies, individuals and institutions.',
      'A 100 % online programme for journalists and information professionals who want to strengthen the editorial rigour of their reporting. Combine self-paced study with <strong>4 practical classes with a teacher</strong> to apply digital research techniques to real situations.',
      'Work with documents, public records, corporate sites, press and other open sources. Learn to assess the reliability of information, tell clues apart from conclusions and organise your findings into clear reports, identifying their sources and context.'
    ],
    bullets: [
      {lead: 'Reporters and newsrooms:', text: 'strengthen the verification and fact-checking of your pieces with documented, traceable open sources.'},
      {lead: 'Data journalism and investigations:', text: 'apply advanced search, people and company research and social media analysis to your investigations.'},
      {lead: 'Documenting evidence:', text: 'find reliable sources, verify their provenance and present your information with judgement and traceability.'},
      {lead: 'Communication, cybersecurity and verification profiles:', text: 'add open-source investigation techniques to your professional skill set.'},
      {lead: 'Professionals looking after their digital identity:', text: 'understand what public information there is about you, how it is interpreted and how to manage it respecting privacy.'}
    ]
  }
};
