export const locales = ["en", "fr", "de"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

export const localeLabels: Record<Locale, string> = {
  en: "English",
  fr: "Français",
  de: "Deutsch",
};

const LINKS = {
  research: "https://research.ecello.net",
  researchTeam: "https://research.ecello.net/#portfolios",
  researchBlog: "https://research.ecello.net/blog",
  notebooks: "https://notebooks.ecello.net",
  secrets: "https://secrets.ecello.net",
} as const;

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export const messages = {
  en: {
    metadata: {
      title: "Ecello Labs | Your vision, built and shipped",
      description:
        "Ecello Labs builds AI automation, software, and product development that take real work off your team's plate. A remote AI & software studio based in Bremerhaven, Germany.",
    },
    header: {
      homeLabel: "Ecello Labs home",
      openMenu: "Open menu",
      closeMenu: "Close menu",
      backMenu: "Back",
      cta: "Get in touch",
        nav: [
        { href: "#about", label: "Who we are", menu: null },
        {
          href: LINKS.research,
          label: "Research",
          menu: {
            featured: {
              eyebrow: "Ecello Research",
              title: "The work we do in the open.",
              body: "Experiments, write-ups, and the thinking behind the tools we ship.",
              cta: "Go to research",
              href: LINKS.research,
            },
            columns: [
              {
                title: "Start here",
                links: [
                  {
                    label: "Overview",
                    desc: "What we're working on and why it matters.",
                    href: LINKS.research,
                    soon: false,
                  },
                  {
                    label: "Meet the team",
                    desc: "The people behind the research.",
                    href: LINKS.researchTeam,
                    soon: false,
                  },
                ],
              },
              {
                title: "Go deeper",
                links: [
                  {
                    label: "Blog",
                    desc: "Thinking, experiments, findings, and lessons learned.",
                    href: LINKS.researchBlog,
                    soon: false,
                  },
                ],
              },
            ],
          },
        },
        {
          href: LINKS.notebooks,
          label: "Services",
          menu: {
            featured: {
              eyebrow: "Ecello Services",
              title: "Tools we run, ready to use.",
              body: "Products we built for ourselves, opened up for teams that need the same thing.",
              cta: "View services",
              href: "/services",
            },
            columns: [
              {
                title: "Live now",
                links: [
                  {
                    label: "Notebooks",
                    desc: "A collaborative utility which syncs your Colab notebooks with GCS",
                    href: LINKS.notebooks,
                    soon: false,
                  },
                  {
                    label: "Secrets",
                    desc: "Simplified, secure sharing of credentials and keys.",
                    href: LINKS.secrets,
                    soon: false,
                  },
                ],
              },
              {
                title: "In the works",
                links: [
                  {
                    label: "More coming",
                    desc: "New tools land here as we release them.",
                    href: "/contact",
                    soon: true,
                  },
                ],
              },
            ],
          },
        },
        { href: "#process", label: "Process", menu: null },
        { href: "#trust", label: "Reviews", menu: null },
      ],
    },
    footer: {
      intro: "AI automation, software, and product development that take real work off your team's plate.",
      studio: "Studio",
      reach: "Reach us",
      rights: "© 2026 Ecello Labs. All rights reserved.",
      note: "Made where the work flows out to sea.",
      newsletter: {
        title: "Newsletter",
        description:
          "Follow our newsletter for updates on what we've shipped, learned, and built. No spam, just the good stuff.",
        placeholder: "you@company.com",
        cta: "Subscribe",
        unsubscribe: "Unsubscribe anytime.",
        success: "Thanks — you're on the list.",
      },
      studioLinks: [
        { href: "#about", label: "Who we are" },
        { href: "#process", label: "Our process" },
        { href: "#trust", label: "Reviews" },
        { href: LINKS.research, label: "Research" },
        { href: "/services", label: "Services" },
        { href: "/contact", label: "Get in touch" },
      ],
      reachLinks: [
        { href: "mailto:talal@ecello.net", label: "talal@ecello.net" },
        { href: "#top", label: "Bremerhaven, Germany" },
        { href: "#top", label: "Remote-first · Europe" },
      ],
    },
    cookie: {
      title: "Cookies, but only the useful ones",
      body: "We use cookies to keep the website working and to understand what helps visitors. You can accept or reject non-essential cookies or customize your preferences.",
      accept: "Accept all",
      reject: "Reject non-essential",
      customize: "Customize",
    },
    home: {
      hero: {
        titleTop: "Your vision,",
        titleBottom: "built and shipped.",
        body: "We build digital tools, assistants, and software that take real work off your team's plate. Quality you can trust and results you can see!",
        primaryCta: "Get in touch",
        secondaryCta: "Who we are",
        scrollLabel: "Scroll down to who we are",
        backToTopLabel: "Back to top",
      },
      stats: [
        { value: 10, suffix: "+", label: "Years of combined team experience" },
        { value: 30, suffix: "+", label: "Products designed & delivered" },
        { value: 100, suffix: "%", label: "Code ownership handed to you" },
      ],
      about: {
        eyebrow: "Who we are",
        title: "An expert studio that ships real things.",
        body: [
          "Ecello Labs is a remote AI & software studio based in Bremerhaven, Germany, working with teams across Europe and beyond. We're a tight group of engineers and designers who'd rather build something that works than sell you a slide deck.",
          "We take the repetitive, time-draining parts of your business and turn them into tools, assistants, and automations your team can actually rely on. Plain language, fair pricing, and full ownership handed back to you - always.",
        ],
        bullets: ["Plain language, always", "You own everything we build", "Fair, upfront pricing"],
        imageAlt: "The Ecello Labs team at work",
      },
      process: {
        eyebrow: "The process",
        title: "We Talk. We Build. We Deliver.",
        body: "A short process with honest updates, so you always know exactly where things stand.",
        steps: [
          {
            no: "01",
            title: "We Talk",
            desc: "A quick, no-cost call to understand what's slowing you down - and a straight answer on whether we can actually help.",
          },
          {
            no: "02",
            title: "We Build",
            desc: "We design and build the smallest thing that solves it, keeping you in the loop with plain-language updates the whole way.",
          },
          {
            no: "03",
            title: "We Deliver",
            desc: "We launch it, hand it over cleanly, and stay close to keep it running smoothly as your business grows.",
          },
        ],
      },
      trust: {
        eyebrow: "Why trust us",
        title: "Teams that stopped guessing.",
        previous: "Previous review",
        next: "Next review",
        goToPage: "Go to page",
        testimonials: [
          {
            quote:
              "We have been in logistics for over 35 years but never had a proper online presence. Ecello designed and developed our entire website from the ground up and set up SEO so we actually show up when people search for transport services.",
            name: "MRE Logistics",
            role: "Logistics & Transport",
          },
          {
            quote:
              "Ecello developed our website and software exactly according to our wishes—on time and without any issues. Alex and Moeez were a pleasure to work with and really listened. I would recommend them to anyone.",
            name: "Sabrina Neumann",
            role: "Consultant & Speaker",
          },
          {
            quote:
              "They took a process that ate two days a week and automated it end to end. We got the time back and the reporting is finally something we trust.",
            name: "Sarah Lindqvist",
            role: "Nordwind Logistics",
          },
        ],
      },
      cta: {
        title: "Have something worth automating?",
        body: "Tell us what's eating your team's time. We'll tell you honestly whether AI, software, or product development can help, and if it can't, we'll say so.",
        button: "Get in touch",
      },
    },
    booking: {
      metadata: {
        title: "Get in touch - Ecello Labs",
        description:
          "Grab 30 minutes on our calendar to talk through what's slowing your team down and whether AI, software, or product development can help.",
      },
      eyebrow: "Get in touch",
      title: "Let's find 30 minutes.",
      body: "Pick a time that works for you. No pitch deck, just a straight conversation about what's slowing your team down and whether we can help.",
    },
    contact: {
      metadata: {
        title: "Contact - Ecello Labs",
        description:
          "Tell us what's eating your team's time. We'll reply within one business day with a straight answer on whether AI, software, or product development can help.",
      },
      eyebrow: "Get in touch",
      title: "Tell us what's slowing you down.",
      intro:
        "Fill this in and we'll come back with a straight answer - whether we can help, and what it would take.",
      optional: "optional",
      fields: {
        name: { label: "Your name", placeholder: "Alex Meyer" },
        email: { label: "Email", placeholder: "you@company.com" },
        company: { label: "Company", placeholder: "Where you work" },
        message: {
          label: "Type your message here",
          placeholder: "A couple of sentences is plenty.",
        },
      },
      honeypotLabel: "Leave this field empty",
      errors: {
        name: "Please tell us your name.",
        email: "Please enter your email address.",
        emailInvalid: "That doesn't look like a valid email address.",
        message: "Tell us a little about what you need.",
      },
      submit: "Send message",
      pending: "Sending…",
      success: {
        title: "Message sent.",
        body: "Thanks for your message. We'll get back to you as soon as possible.",
      },
      failure: {
        body: "That didn't send. Email us directly and we'll pick it up:",
        email: "talal@ecello.net",
      },
      recaptcha: {
        notice: "Protected by reCAPTCHA. The Google {privacy} and {terms} apply.",
        privacy: "Privacy Policy",
        terms: "Terms of Service",
        failed: "We couldn't run the spam check. Please try again, or email us directly.",
      },
    },
    services: {
      metadata: {
        title: "Services - Ecello Labs",
        description:
          "Ecello Labs builds software end to end, with a focus on AI, machine learning, augmented reality and commercial-scale apps.",
      },
      eyebrow: "Our services",
      title: "We build it all. We go deepest on four.",
      intro:
        "From a first website to the software that runs your whole business, we cover the full build. These are the areas where we bring the most experience.",
      focusEyebrow: "Where we focus",
      focus: [
        {
          key: "ai",
          title: "Artificial Intelligence",
          desc: "Assistants, agents and automations that take repetitive work off your team, built on the latest language models and wired into the tools you already use.",
          points: ["AI assistants & chatbots", "Document and email automation", "Agents connected to your systems"],
        },
        {
          key: "ml",
          title: "Machine Learning",
          desc: "Models trained on your own data to predict, classify and spot patterns - from the first experiment to a pipeline that runs in production.",
          points: ["Forecasting & prediction", "Computer vision", "Data pipelines & MLOps"],
        },
        {
          key: "ar",
          title: "Augmented Reality",
          desc: "Apps that bring 3D content into the camera view, so people can see products, spaces and information in place before anything is built or bought.",
          points: ["Interactive 3D experiences", "Product & space visualisation", "iOS (ARKit) & Android (ARCore)"],
        },
        {
          key: "apps",
          title: "Commercial-scale apps",
          desc: "Web and mobile products built to carry real customers and real revenue: secure, fast, and ready to grow with you.",
          points: ["Web & mobile apps", "SaaS platforms", "Cloud infrastructure & scaling"],
        },
      ],
      moreEyebrow: "And everything around it",
      moreTitle: "One team for the whole build.",
      moreBody: "You don't need a different agency for every piece. We also handle:",
      more: [
        "Websites & SEO",
        "UI/UX design",
        "Augmented reality",
        "Automation & integrations",
        "Data & dashboards",
        "Cloud & DevOps",
        "Maintenance & support",
      ],
      cta: {
        title: "Have a project in mind?",
        body: "Tell us what you want to build. We'll tell you honestly how we'd approach it, and what it would take.",
        button: "Get in touch",
      },
    },
  },
  fr: {
    metadata: {
      title: "Ecello Labs - Votre vision, conçue et livrée",
      description:
        "Ecello Labs crée des automatisations IA, des logiciels et du développement produit qui retirent du vrai travail des épaules de votre équipe. Un studio IA et logiciel à distance basé à Bremerhaven, en Allemagne.",
    },
    header: {
      homeLabel: "Accueil Ecello Labs",
      openMenu: "Ouvrir le menu",
      closeMenu: "Fermer le menu",
      backMenu: "Retour",
      cta: "Réserver un appel",
           nav: [
        { href: "#about", label: "Qui nous sommes", menu: null },
        {
          href: LINKS.research,
          label: "Recherche",
          menu: {
            featured: {
              eyebrow: "Ecello Research",
              title: "Notre travail, à ciel ouvert.",
              body: "Expérimentations, comptes rendus et la réflexion derrière les outils que nous livrons.",
              cta: "Voir la recherche",
              href: LINKS.research,
            },
            columns: [
              {
                title: "Commencer ici",
                links: [
                  {
                    label: "Aperçu",
                    desc: "Ce sur quoi nous travaillons, et pourquoi c'est important.",
                    href: LINKS.research,
                    soon: false,
                  },
                  {
                    label: "L'équipe",
                    desc: "Les personnes derrière la recherche.",
                    href: LINKS.researchTeam,
                    soon: false,
                  },
                ],
              },
              {
                title: "Aller plus loin",
                links: [
                  {
                    label: "Blog",
                    desc: "Réflexions, expérimentations, résultats et leçons apprises.",
                    href: LINKS.researchBlog,
                    soon: false,
                  },
                ],
              },
            ],
          },
        },
        {
          href: LINKS.notebooks,
          label: "Services",
          menu: {
            featured: {
              eyebrow: "Ecello Services",
              title: "Des outils que nous exploitons, prêts à l'emploi.",
              body: "Des produits conçus pour nous-mêmes, ouverts aux équipes qui en ont besoin.",
              cta: "Voir nos services",
              href: "/services",
            },
            columns: [
              {
                title: "Disponible",
                links: [
                  {
                    label: "Notebooks",
                    desc: "Un utilitaire collaboratif qui synchronise vos notebooks Colab avec GCS",
                    href: LINKS.notebooks,
                    soon: false,
                  },
                  {
                    label: "Secrets",
                    desc: "Partage simplifié et sécurisé des identifiants et des clés.",
                    href: LINKS.secrets,
                    soon: false,
                  },
                ],
              },
              {
                title: "En préparation",
                links: [
                  {
                    label: "Bientôt disponible",
                    desc: "Les nouveaux outils apparaîtront ici à leur sortie.",
                    href: "/contact",
                    soon: true,
                  },
                ],
              },
            ],
          },
        },
        { href: "#process", label: "Processus", menu: null },
        { href: "#trust", label: "Avis", menu: null },
      ],
    },
    footer: {
      intro: "Automatisation IA, logiciels et développement produit qui retirent du vrai travail des épaules de votre équipe.",
      studio: "Studio",
      reach: "Nous joindre",
      rights: "© 2026 Ecello Labs. Tous droits réservés.",
      note: "Créé là où le travail prend le large.",
      newsletter: {
        title: "Quelques nouvelles",
        description:
          "Une newsletter discrète — un ou deux e-mails par an sur ce que nous avons livré, appris ou cassé. Pas de marketing.",
        placeholder: "vous@entreprise.com",
        cta: "S'abonner",
        unsubscribe: "Désabonnement à tout moment.",
        success: "Merci — vous êtes inscrit.",
      },
      studioLinks: [
        { href: "#about", label: "Qui nous sommes" },
        { href: "#process", label: "Notre processus" },
        { href: "#trust", label: "Avis" },
        { href: LINKS.research, label: "Recherche" },
        { href: "/services", label: "Services" },
        { href: "/contact", label: "Contactez-nous" },
      ],
      reachLinks: [
        { href: "mailto:talal@ecello.net", label: "talal@ecello.net" },
        { href: "#top", label: "Bremerhaven, Allemagne" },
        { href: "#top", label: "À distance · Europe" },
      ],
    },
    cookie: {
      title: "Des cookies, mais les utiles seulement",
      body: "Nous utilisons des cookies pour faire fonctionner le site et comprendre ce qui aide nos visiteurs. Vous pouvez accepter ou refuser les cookies non essentiels.",
      accept: "Tout accepter",
      reject: "Refuser le non essentiel",
      customize: "Personnaliser",
    },
    home: {
      hero: {
        titleTop: "Votre vision,",
        titleBottom: "conçue et livrée.",
        body: "Nous créons des outils numériques, des assistants et des logiciels qui retirent du vrai travail des épaules de votre équipe. Une qualité fiable et des résultats visibles.",
        primaryCta: "Contactez-nous",
        secondaryCta: "Qui nous sommes",
        scrollLabel: "Descendre vers qui nous sommes",
        backToTopLabel: "Retour en haut",
      },
      stats: [
        { value: 10, suffix: "+", label: "Années d'expérience cumulée dans l'équipe" },
        { value: 30, suffix: "+", label: "Produits conçus et livrés" },
        { value: 100, suffix: "%", label: "Propriété du code transférée chez vous" },
      ],
      about: {
        eyebrow: "Qui nous sommes",
        title: "Un studio expert qui livre du concret.",
        body: [
          "Ecello Labs est un studio IA et logiciel à distance basé à Bremerhaven, en Allemagne, qui travaille avec des équipes en Europe et au-delà. Nous sommes une petite équipe d'ingénieurs et de designers qui préfère construire quelque chose d'utile plutôt que vendre un diaporama.",
          "Nous transformons les tâches répétitives et chronophages de votre entreprise en outils, assistants et automatisations sur lesquels votre équipe peut vraiment compter. Langage clair, prix honnêtes et propriété complète remise entre vos mains - toujours.",
        ],
        bullets: ["Un langage clair, toujours", "Vous possédez tout ce que nous créons", "Des prix justes et transparents"],
        imageAlt: "L'équipe Ecello Labs au travail",
      },
      process: {
        eyebrow: "Le processus",
        title: "On échange. On construit. On livre.",
        body: "Un processus court avec des nouvelles honnêtes, pour que vous sachiez toujours exactement où en sont les choses.",
        steps: [
          {
            no: "01",
            title: "On échange",
            desc: "Un appel rapide et gratuit pour comprendre ce qui vous ralentit - puis une réponse franche sur notre capacité réelle à aider.",
          },
          {
            no: "02",
            title: "On construit",
            desc: "Nous concevons et construisons la plus petite solution qui résout le problème, avec des nouvelles claires tout au long du projet.",
          },
          {
            no: "03",
            title: "On livre",
            desc: "Nous lançons la solution, la transmettons proprement, puis restons proches pour qu'elle continue à tourner pendant votre croissance.",
          },
        ],
      },
      trust: {
        eyebrow: "Pourquoi nous faire confiance",
        title: "Des équipes qui ont arrêté de deviner.",
        previous: "Avis précédent",
        next: "Avis suivant",
        goToPage: "Aller à la page",
        testimonials: [
          {
            quote:
              "We have been in logistics for over 35 years but never had a proper online presence. Ecello Labs designed and developed our entire website from the ground up and set up SEO so we actually show up when people search for transport services.",
            name: "MRE Logistics",
            role: "Logistique & transport",
          },
          {
            quote:
              "Ecello developed our website and software exactly according to our wishes—on time and without any issues. Alex and Moeez were a pleasure to work with and really listened. I would recommend them to anyone.",
            name: "Sabrina Neumann",
            role: "Cliente",
          },
          {
            quote:
              "Ils ont automatisé de bout en bout un processus qui nous prenait deux jours par semaine. Nous avons récupéré ce temps, et les rapports sont enfin fiables.",
            name: "Sarah Lindqvist",
            role: "Responsable opérations, Nordwind Logistics",
          },
        ],
      },
      cta: {
        title: "Vous avez quelque chose qui mérite d'être automatisé ?",
        body: "Dites-nous ce qui prend trop de temps à votre équipe. Nous vous dirons honnêtement si l'IA, le logiciel ou le développement produit peuvent aider, et si ce n'est pas le cas, nous le dirons aussi.",
        button: "Contactez-nous",
      },
    },
    booking: {
      metadata: {
        title: "Réserver un appel - Ecello Labs",
        description:
          "Réservez 30 minutes pour discuter de ce qui ralentit votre équipe et si l'IA, le logiciel ou le développement produit peuvent vous aider.",
      },
      eyebrow: "Réserver un appel",
      title: "Trouvons 30 minutes.",
      body: "Choisissez un créneau qui vous convient. Pas de slide deck, juste une conversation franche sur ce qui ralentit votre équipe et sur ce que nous pouvons faire.",
    },
    contact: {
      metadata: {
        title: "Contact - Ecello Labs",
        description:
          "Dites-nous ce qui prend le temps de votre équipe. Nous répondons en un jour ouvré, franchement, sur ce que l'IA, le logiciel ou le développement produit peuvent apporter.",
      },
      eyebrow: "Contactez-nous",
      title: "Dites-nous ce qui vous ralentit.",
      intro:
        "Remplissez ce formulaire et nous reviendrons avec une réponse franche : si nous pouvons aider, et ce que cela demanderait.",
      optional: "facultatif",
      fields: {
        name: { label: "Votre nom", placeholder: "Alex Meyer" },
        email: { label: "E-mail", placeholder: "vous@entreprise.com" },
        company: { label: "Entreprise", placeholder: "Où vous travaillez" },
        message: {
          label: "Qu'est-ce qui prend le plus de temps à votre équipe ?",
          placeholder: "Quelques phrases suffisent.",
        },
      },
      honeypotLabel: "Laissez ce champ vide",
      errors: {
        name: "Merci d'indiquer votre nom.",
        email: "Merci d'indiquer votre adresse e-mail.",
        emailInvalid: "Cette adresse e-mail ne semble pas valide.",
        message: "Dites-nous en quelques mots ce dont vous avez besoin.",
      },
      submit: "Envoyer le message",
      pending: "Envoi…",
      success: {
        title: "Message envoyé.",
        body: "Merci — nous vous répondrons dans un jour ouvré.",
      },
      failure: {
        body: "L'envoi a échoué. Écrivez-nous directement, nous prenons le relais :",
        email: "Talal@ecello.net",
      },
      recaptcha: {
        notice:
          "Protégé par reCAPTCHA. La {privacy} et les {terms} de Google s'appliquent.",
        privacy: "politique de confidentialité",
        terms: "conditions d'utilisation",
        failed:
          "Le contrôle anti-spam n'a pas abouti. Réessayez, ou écrivez-nous directement.",
      },
    },
    services: {
      metadata: {
        title: "Services - Ecello Labs",
        description:
          "Ecello Labs développe des logiciels de bout en bout, avec un accent sur l'IA, le machine learning, la réalité augmentée et les applications à grande échelle.",
      },
      eyebrow: "Nos services",
      title: "Nous construisons tout. Nous excellons dans quatre domaines.",
      intro:
        "D'un premier site web au logiciel qui fait tourner toute votre entreprise, nous couvrons l'ensemble du développement. Voici les domaines où notre expérience est la plus forte.",
      focusEyebrow: "Nos domaines clés",
      focus: [
        {
          key: "ai",
          title: "Intelligence artificielle",
          desc: "Des assistants, agents et automatisations qui libèrent votre équipe des tâches répétitives, basés sur les derniers modèles de langage et connectés aux outils que vous utilisez déjà.",
          points: ["Assistants IA & chatbots", "Automatisation des documents et e-mails", "Agents connectés à vos systèmes"],
        },
        {
          key: "ml",
          title: "Machine learning",
          desc: "Des modèles entraînés sur vos propres données pour prédire, classer et détecter des tendances - du premier essai à un pipeline en production.",
          points: ["Prévision & prédiction", "Vision par ordinateur", "Pipelines de données & MLOps"],
        },
        {
          key: "ar",
          title: "Réalité augmentée",
          desc: "Des applications qui intègrent du contenu 3D dans la vue caméra, pour voir produits, espaces et informations en situation avant même qu'ils existent.",
          points: ["Expériences 3D interactives", "Visualisation de produits & d'espaces", "iOS (ARKit) & Android (ARCore)"],
        },
        {
          key: "apps",
          title: "Applications à grande échelle",
          desc: "Des produits web et mobiles conçus pour de vrais clients et un vrai chiffre d'affaires : sécurisés, rapides et prêts à grandir avec vous.",
          points: ["Applications web & mobiles", "Plateformes SaaS", "Infrastructure cloud & montée en charge"],
        },
      ],
      moreEyebrow: "Et tout ce qui va autour",
      moreTitle: "Une seule équipe pour tout le projet.",
      moreBody: "Pas besoin d'une agence différente pour chaque étape. Nous prenons aussi en charge :",
      more: [
        "Sites web & SEO",
        "Design UI/UX",
        "Réalité augmentée",
        "Automatisation & intégrations",
        "Données & tableaux de bord",
        "Cloud & DevOps",
        "Maintenance & support",
      ],
      cta: {
        title: "Un projet en tête ?",
        body: "Dites-nous ce que vous voulez construire. Nous vous dirons honnêtement comment nous l'aborderions, et ce que cela demanderait.",
        button: "Contactez-nous",
      },
    },
  },
  de: {
    metadata: {
      title: "Ecello Labs - Ihre Vision, gebaut und geliefert",
      description:
        "Ecello Labs entwickelt KI-Automatisierung, Software und Produktentwicklung, die Ihrem Team echte Arbeit abnehmen. Ein Remote-Studio für KI und Software mit Sitz in Bremerhaven.",
    },
    header: {
      homeLabel: "Ecello Labs Startseite",
      openMenu: "Menü öffnen",
      closeMenu: "Menü schließen",
      backMenu: "Zurück",
      cta: "Gespräch buchen",
            nav: [
        { href: "#about", label: "Wer wir sind", menu: null },
        {
          href: LINKS.research,
          label: "Forschung",
          menu: {
            featured: {
              eyebrow: "Ecello Research",
              title: "Unsere Arbeit, offen einsehbar.",
              body: "Experimente, Berichte und die Überlegungen hinter den Werkzeugen, die wir bauen.",
              cta: "Zur Forschung",
              href: LINKS.research,
            },
            columns: [
              {
                title: "Hier starten",
                links: [
                  {
                    label: "Überblick",
                    desc: "Woran wir arbeiten — und warum es zählt.",
                    href: LINKS.research,
                    soon: false,
                  },
                  {
                    label: "Das Team",
                    desc: "Die Menschen hinter der Forschung.",
                    href: LINKS.researchTeam,
                    soon: false,
                  },
                ],
              },
              {
                title: "Tiefer einsteigen",
                links: [
                  {
                    label: "Blog",
                    desc: "Gedanken, Experimente, Ergebnisse und gelernte Lektionen.",
                    href: LINKS.researchBlog,
                    soon: false,
                  },
                ],
              },
            ],
          },
        },
        {
          href: LINKS.notebooks,
          label: "Services",
          menu: {
            featured: {
              eyebrow: "Ecello Services",
              title: "Werkzeuge von uns, sofort einsatzbereit.",
              body: "Produkte, die wir für uns selbst gebaut haben — offen für Teams, die dasselbe brauchen.",
              cta: "Leistungen ansehen",
              href: "/services",
            },
            columns: [
              {
                title: "Jetzt verfügbar",
                links: [
                  {
                    label: "Notebooks",
                    desc: "Ein Werkzeug für die Zusammenarbeit, das Ihre Colab-Notebooks mit GCS synchronisiert",
                    href: LINKS.notebooks,
                    soon: false,
                  },
                  {
                    label: "Secrets",
                    desc: "Vereinfachtes, sicheres Teilen von Zugangsdaten und Schlüsseln.",
                    href: LINKS.secrets,
                    soon: false,
                  },
                ],
              },
              {
                title: "In Arbeit",
                links: [
                  {
                    label: "Demnächst mehr",
                    desc: "Neue Werkzeuge erscheinen hier, sobald wir sie veröffentlichen.",
                    href: "/contact",
                    soon: true,
                  },
                ],
              },
            ],
          },
        },
        { href: "#process", label: "Prozess", menu: null },
        { href: "#trust", label: "Stimmen", menu: null },
      ],
    },
    footer: {
      intro: "KI-Automatisierung, Software und Produktentwicklung, die Ihrem Team echte Arbeit abnehmen.",
      studio: "Studio",
      reach: "Kontakt",
      rights: "© 2026 Ecello Labs. Alle Rechte vorbehalten.",
      note: "Gemacht dort, wo Arbeit Richtung Meer fließt.",
      newsletter: {
        title: "Gelegentliche Notizen",
        description:
          "Ein ruhiger Newsletter — ein bis zwei E-Mails im Jahr darüber, was wir gebaut, gelernt oder kaputt gemacht haben. Kein Marketing.",
        placeholder: "sie@firma.de",
        cta: "Abonnieren",
        unsubscribe: "Jederzeit abbestellbar.",
        success: "Danke — Sie sind dabei.",
      },
      studioLinks: [
        { href: "#about", label: "Wer wir sind" },
        { href: "#process", label: "Unser Prozess" },
        { href: "#trust", label: "Stimmen" },
        { href: LINKS.research, label: "Forschung" },
        { href: "/services", label: "Services" },
        { href: "/contact", label: "Kontakt aufnehmen" },
      ],
      reachLinks: [
        { href: "mailto:Talal@ecello.net", label: "Talal@ecello.net" },
        { href: "#top", label: "Bremerhaven, Deutschland" },
        { href: "#top", label: "Remote-first · Europa" },
      ],
    },
    cookie: {
      title: "Cookies, aber nur die sinnvollen",
      body: "Wir verwenden Cookies, damit die Website funktioniert und um zu verstehen, was Besucherinnen und Besuchern hilft. Nicht notwendige Cookies können Sie akzeptieren oder ablehnen.",
      accept: "Alle akzeptieren",
      reject: "Nicht notwendige ablehnen",
      customize: "Anpassen",
    },
    home: {
      hero: {
        titleTop: "Ihre Vision,",
        titleBottom: "gebaut und geliefert.",
        body: "Wir bauen digitale Werkzeuge, Assistenten und Software, die Ihrem Team echte Arbeit abnehmen. Qualität, der Sie vertrauen können, und Ergebnisse, die sichtbar sind.",
        primaryCta: "Gespräch buchen",
        secondaryCta: "Wer wir sind",
        scrollLabel: "Weiter zu wer wir sind",
        backToTopLabel: "Zurück nach oben",
      },
      stats: [
        { value: 10, suffix: "+", label: "Jahre gemeinsame Teamerfahrung" },
        { value: 30, suffix: "+", label: "Produkte konzipiert und geliefert" },
        { value: 100, suffix: "%", label: "Code-Eigentum an Sie übergeben" },
      ],
      about: {
        eyebrow: "Wer wir sind",
        title: "Ein erfahrenes Studio, das echte Dinge liefert.",
        body: [
          "Ecello Labs ist ein Remote-Studio für KI und Software mit Sitz in Bremerhaven. Wir arbeiten mit Teams in ganz Europa und darüber hinaus. Wir sind eine kleine Gruppe aus Ingenieuren und Designern, die lieber etwas Funktionierendes baut, als Ihnen ein Foliendeck zu verkaufen.",
          "Wir verwandeln die wiederkehrenden, zeitraubenden Teile Ihres Geschäfts in Werkzeuge, Assistenten und Automatisierungen, auf die sich Ihr Team wirklich verlassen kann. Klare Sprache, faire Preise und vollständiges Eigentum für Sie - immer.",
        ],
        bullets: ["Klare Sprache, immer", "Sie besitzen alles, was wir bauen", "Faire, transparente Preise"],
        imageAlt: "Das Ecello Labs Team bei der Arbeit",
      },
      process: {
        eyebrow: "Der Prozess",
        title: "Wir sprechen. Wir bauen. Wir liefern.",
        body: "Ein kurzer Prozess mit ehrlichen Updates, damit Sie immer genau wissen, wo die Dinge stehen.",
        steps: [
          {
            no: "01",
            title: "Wir sprechen",
            desc: "Ein kurzes, kostenloses Gespräch, um zu verstehen, was Sie ausbremst - und eine klare Antwort darauf, ob wir wirklich helfen können.",
          },
          {
            no: "02",
            title: "Wir bauen",
            desc: "Wir entwerfen und bauen die kleinste Lösung, die das Problem löst, und halten Sie die ganze Zeit mit klaren Updates auf dem Laufenden.",
          },
          {
            no: "03",
            title: "Wir liefern",
            desc: "Wir starten die Lösung, übergeben sie sauber und bleiben in der Nähe, damit sie mit Ihrem Unternehmen zuverlässig weiterläuft.",
          },
        ],
      },
      trust: {
        eyebrow: "Warum uns vertrauen",
        title: "Teams, die nicht mehr raten.",
        previous: "Vorherige Bewertung",
        next: "Nächste Bewertung",
        goToPage: "Zu Seite",
        testimonials: [
          {
            quote:
              "We have been in logistics for over 35 years but never had a proper online presence. Ecello Labs designed and developed our entire website from the ground up and set up SEO so we actually show up when people search for transport services.",
            name: "MRE Logistics",
            role: "Logistik & Transport",
          },
          {
            quote:
              "Ecello developed our website and software exactly according to our wishes—on time and without any issues. Alex and Moeez were a pleasure to work with and really listened. I would recommend them to anyone.",
            name: "Sabrina Neumann",
            role: "Kundin",
          },
          {
            quote:
              "Sie haben einen Prozess, der uns zwei Tage pro Woche gekostet hat, vollständig automatisiert. Wir haben die Zeit zurück, und dem Reporting vertrauen wir endlich.",
            name: "Sarah Lindqvist",
            role: "Operations Lead, Nordwind Logistics",
          },
        ],
      },
      cta: {
        title: "Haben Sie etwas, das automatisiert werden sollte?",
        body: "Sagen Sie uns, was Ihrem Team Zeit raubt. Wir sagen ehrlich, ob KI, Software oder Produktentwicklung helfen kann, und wenn nicht, sagen wir das auch.",
        button: "Kontakt aufnehmen",
      },
    },
    booking: {
      metadata: {
        title: "Gespräch buchen - Ecello Labs",
        description:
          "Reservieren Sie sich 30 Minuten, um zu besprechen, was Ihr Team ausbremst und ob KI, Software oder Produktentwicklung helfen kann.",
      },
      eyebrow: "Gespräch buchen",
      title: "Lassen Sie uns 30 Minuten finden.",
      body: "Wählen Sie einen passenden Termin. Kein Foliendeck, nur ein ehrliches Gespräch darüber, was Ihr Team ausbremst und ob wir helfen können.",
    },
    contact: {
      metadata: {
        title: "Kontakt - Ecello Labs",
        description:
          "Sagen Sie uns, was Ihrem Team Zeit raubt. Wir antworten innerhalb eines Werktags — ehrlich, ob KI, Software oder Produktentwicklung helfen kann.",
      },
      eyebrow: "Kontakt aufnehmen",
      title: "Sagen Sie uns, was Sie ausbremst.",
      intro:
        "Füllen Sie das Formular aus und wir melden uns mit einer klaren Antwort: ob wir helfen können und was dafür nötig wäre.",
      optional: "optional",
      fields: {
        name: { label: "Ihr Name", placeholder: "Alex Meyer" },
        email: { label: "E-Mail", placeholder: "sie@firma.de" },
        company: { label: "Unternehmen", placeholder: "Wo Sie arbeiten" },
        message: {
          label: "Was raubt Ihrem Team die meiste Zeit?",
          placeholder: "Ein paar Sätze genügen.",
        },
      },
      honeypotLabel: "Dieses Feld leer lassen",
      errors: {
        name: "Bitte nennen Sie uns Ihren Namen.",
        email: "Bitte geben Sie Ihre E-Mail-Adresse an.",
        emailInvalid: "Diese E-Mail-Adresse sieht nicht gültig aus.",
        message: "Sagen Sie uns kurz, was Sie brauchen.",
      },
      submit: "Nachricht senden",
      pending: "Wird gesendet…",
      success: {
        title: "Nachricht gesendet.",
        body: "Danke — wir antworten innerhalb eines Werktags.",
      },
      failure: {
        body: "Das Senden hat nicht funktioniert. Schreiben Sie uns direkt:",
        email: "talal@ecello.net",
      },
      recaptcha: {
        notice:
          "Geschützt durch reCAPTCHA. Es gelten die {privacy} und die {terms} von Google.",
        privacy: "Datenschutzerklärung",
        terms: "Nutzungsbedingungen",
        failed:
          "Die Spam-Prüfung ist fehlgeschlagen. Bitte erneut versuchen oder schreiben Sie uns direkt.",
      },
    },
    services: {
      metadata: {
        title: "Leistungen - Ecello Labs",
        description:
          "Ecello Labs entwickelt Software von Anfang bis Ende, mit Schwerpunkt auf KI, Machine Learning, Augmented Reality und Apps im kommerziellen Maßstab.",
      },
      eyebrow: "Unsere Leistungen",
      title: "Wir bauen alles. Vier Bereiche beherrschen wir besonders.",
      intro:
        "Von der ersten Website bis zur Software, die Ihr ganzes Unternehmen trägt: Wir übernehmen die komplette Entwicklung. In diesen Bereichen bringen wir die meiste Erfahrung mit.",
      focusEyebrow: "Unsere Schwerpunkte",
      focus: [
        {
          key: "ai",
          title: "Künstliche Intelligenz",
          desc: "Assistenten, Agenten und Automatisierungen, die Ihrem Team wiederkehrende Arbeit abnehmen - auf Basis aktueller Sprachmodelle und verbunden mit den Werkzeugen, die Sie bereits nutzen.",
          points: ["KI-Assistenten & Chatbots", "Dokumenten- und E-Mail-Automatisierung", "Agenten, verbunden mit Ihren Systemen"],
        },
        {
          key: "ml",
          title: "Machine Learning",
          desc: "Modelle, trainiert auf Ihren eigenen Daten, die vorhersagen, klassifizieren und Muster erkennen - vom ersten Experiment bis zur Pipeline im Produktivbetrieb.",
          points: ["Prognosen & Vorhersagen", "Computer Vision", "Datenpipelines & MLOps"],
        },
        {
          key: "ar",
          title: "Augmented Reality",
          desc: "Apps, die 3D-Inhalte ins Kamerabild bringen - Produkte, Räume und Informationen lassen sich so im Kontext erleben, bevor es sie überhaupt gibt.",
          points: ["Interaktive 3D-Erlebnisse", "Produkt- & Raumvisualisierung", "iOS (ARKit) & Android (ARCore)"],
        },
        {
          key: "apps",
          title: "Apps im kommerziellen Maßstab",
          desc: "Web- und Mobile-Produkte für echte Kunden und echten Umsatz: sicher, schnell und bereit, mit Ihnen zu wachsen.",
          points: ["Web- & Mobile-Apps", "SaaS-Plattformen", "Cloud-Infrastruktur & Skalierung"],
        },
      ],
      moreEyebrow: "Und alles drumherum",
      moreTitle: "Ein Team für das ganze Projekt.",
      moreBody: "Sie brauchen nicht für jeden Teil eine andere Agentur. Wir übernehmen auch:",
      more: [
        "Websites & SEO",
        "UI/UX-Design",
        "Augmented Reality",
        "Automatisierung & Integrationen",
        "Daten & Dashboards",
        "Cloud & DevOps",
        "Wartung & Support",
      ],
      cta: {
        title: "Haben Sie ein Projekt im Kopf?",
        body: "Erzählen Sie uns, was Sie bauen möchten. Wir sagen Ihnen ehrlich, wie wir es angehen würden und was es braucht.",
        button: "Kontakt aufnehmen",
      },
    },
  },
} as const;

export type Messages = (typeof messages)[Locale];
export type HomeContent = Messages["home"];
export type BookingContent = Messages["booking"];
export type ContactContent = Messages["contact"];
export type ServicesContent = Messages["services"];

export function getMessages(locale: Locale): Messages {
  return messages[locale];
}

export function localizeHref(locale: Locale, href: string): string {
  return href.startsWith("/") || href.startsWith("#") ? `/${locale}${href}` : href;
}
