import type {Journal} from './journals.ts';
import type {Indexing} from './catalogue.ts';
// Primary publisher evidence captured 10 November 2026. Fees retain their quoted currencies.
export const additionalRecords:{journal:Journal;index:Indexing}[]=[
  {
    "journal": {
      "id": "mdpi-algorithms",
      "name": "Algorithms",
      "short": "ALGO",
      "publisher": "MDPI",
      "category": "General computer science",
      "field": "General computer science",
      "color": "#6a8281",
      "access": "open",
      "issn": "1999-4893",
      "apc": null,
      "feeNote": "CHF 1,800 APC after peer review and acceptance, plus applicable VAT or sales tax. Discounts depend on eligibility. No automatic waiver or conversion to USD is assumed.",
      "scope": "Algorithms and applications across computer science, computational mathematics, AI, automation, data systems and software engineering.",
      "watch": "The contribution should centre on algorithms or their substantive analysis and application. ESCI is distinct from SCIE.",
      "affinities": {
        "computing": 1,
        "ai": 0.85,
        "software": 0.8,
        "data": 0.8,
        "control": 0.65,
        "cloud": 0.65,
        "networks": 0.6,
        "reliability": 0.7,
        "deployment": 0.6
      },
      "review": "check",
      "feeDisplay": "CHF 1,800 + applicable tax",
      "evidence": [
        {
          "label": "Publisher scope & access model",
          "url": "https://www.mdpi.com/journal/algorithms/about",
          "note": "The official journal description supplies the scope and fully open access publishing model.",
          "kind": "Publisher"
        },
        {
          "label": "Exact publisher indexing statement",
          "url": "https://www.mdpi.com/journal/algorithms/indexing",
          "note": "The publisher explicitly lists Scopus and Emerging Sources Citation Index (ESCI), distinct from SCIE. This is a dated source statement, not a live registry query.",
          "kind": "Publisher"
        },
        {
          "label": "Verified CHF APC & tax terms",
          "url": "https://www.mdpi.com/journal/algorithms/apc",
          "note": "The publisher quotes CHF 1,800 after acceptance, with applicable local tax additional. Conditional discounts are not assumed. No USD conversion is made.",
          "kind": "Publisher"
        }
      ]
    },
    "index": {
      "scopus": true,
      "scie": false,
      "wos": "ESCI",
      "source": "https://www.mdpi.com/journal/algorithms/indexing",
      "checked": "10 November 2026",
      "note": "The publisher explicitly reports Scopus and Emerging Sources Citation Index; ESCI is distinct from SCIE. Confirm current coverage by exact title or ISSN in the official registries before submission."
    }
  },
  {
    "journal": {
      "id": "mdpi-computers",
      "name": "Computers",
      "short": "COMP",
      "publisher": "MDPI",
      "category": "General computer science",
      "field": "General computer science",
      "color": "#6a8281",
      "access": "open",
      "issn": "2073-431X",
      "apc": null,
      "feeNote": "CHF 1,800 APC after peer review and acceptance, plus applicable VAT or sales tax. Discounts depend on eligibility. No automatic waiver or conversion to USD is assumed.",
      "scope": "Computer science, including computer and network architecture and human–computer interaction.",
      "watch": "Establish a computer-science contribution and suitable technical evaluation. No subscription publishing route.",
      "affinities": {
        "computing": 1,
        "software": 0.85,
        "cloud": 0.85,
        "networks": 0.8,
        "cyber": 0.7,
        "ai": 0.7,
        "data": 0.7,
        "reliability": 0.65,
        "deployment": 0.8
      },
      "review": "check",
      "feeDisplay": "CHF 1,800 + applicable tax",
      "evidence": [
        {
          "label": "Publisher scope & access model",
          "url": "https://www.mdpi.com/journal/computers/about",
          "note": "The official journal description supplies the scope and fully open access publishing model.",
          "kind": "Publisher"
        },
        {
          "label": "Exact publisher indexing statement",
          "url": "https://www.mdpi.com/journal/computers/indexing",
          "note": "The publisher explicitly lists Scopus and Emerging Sources Citation Index (ESCI), distinct from SCIE. This is a dated source statement, not a live registry query.",
          "kind": "Publisher"
        },
        {
          "label": "Verified CHF APC & tax terms",
          "url": "https://www.mdpi.com/journal/computers/apc",
          "note": "The publisher quotes CHF 1,800 after acceptance, with applicable local tax additional. Conditional discounts are not assumed. No USD conversion is made.",
          "kind": "Publisher"
        }
      ]
    },
    "index": {
      "scopus": true,
      "scie": false,
      "wos": "ESCI",
      "source": "https://www.mdpi.com/journal/computers/indexing",
      "checked": "10 November 2026",
      "note": "The publisher explicitly reports Scopus and Emerging Sources Citation Index; ESCI is distinct from SCIE. Confirm current coverage by exact title or ISSN in the official registries before submission."
    }
  },
  {
    "journal": {
      "id": "mdpi-informatics",
      "name": "Informatics",
      "short": "INFO",
      "publisher": "MDPI",
      "category": "General computer science",
      "field": "General computer science",
      "color": "#6a8281",
      "access": "open",
      "issn": "2227-9709",
      "apc": null,
      "feeNote": "CHF 1,800 APC after peer review and acceptance, plus applicable VAT or sales tax. Discounts depend on eligibility. No automatic waiver or conversion to USD is assumed.",
      "scope": "Information and communication technologies, human–computer interaction and social informatics.",
      "watch": "The scope is broader than clinical informatics alone; connect the manuscript to information technology, interaction or social informatics.",
      "affinities": {
        "computing": 0.8,
        "software": 0.65,
        "data": 0.8,
        "informatics": 0.65,
        "medical": 0.35,
        "ai": 0.65,
        "networks": 0.65,
        "cloud": 0.6,
        "reliability": 0.65,
        "deployment": 0.8
      },
      "review": "check",
      "feeDisplay": "CHF 1,800 + applicable tax",
      "evidence": [
        {
          "label": "Publisher scope & access model",
          "url": "https://www.mdpi.com/journal/informatics",
          "note": "The official journal description supplies the scope and fully open access publishing model.",
          "kind": "Publisher"
        },
        {
          "label": "Exact publisher indexing statement",
          "url": "https://www.mdpi.com/journal/informatics/indexing",
          "note": "The publisher explicitly lists Scopus and Emerging Sources Citation Index (ESCI), distinct from SCIE. This is a dated source statement, not a live registry query.",
          "kind": "Publisher"
        },
        {
          "label": "Verified CHF APC & tax terms",
          "url": "https://www.mdpi.com/journal/informatics/apc",
          "note": "The publisher quotes CHF 1,800 after acceptance, with applicable local tax additional. Conditional discounts are not assumed. No USD conversion is made.",
          "kind": "Publisher"
        }
      ]
    },
    "index": {
      "scopus": true,
      "scie": false,
      "wos": "ESCI",
      "source": "https://www.mdpi.com/journal/informatics/indexing",
      "checked": "10 November 2026",
      "note": "The publisher explicitly reports Scopus and Emerging Sources Citation Index; ESCI is distinct from SCIE. Confirm current coverage by exact title or ISSN in the official registries before submission."
    }
  },
  {
    "journal": {
      "id": "mdpi-robotics",
      "name": "Robotics",
      "short": "ROBO",
      "publisher": "MDPI",
      "category": "Robotics & control",
      "field": "Robotics & control",
      "color": "#6a8281",
      "access": "open",
      "issn": "2218-6581",
      "apc": null,
      "feeNote": "CHF 1,800 APC after peer review and acceptance, plus applicable VAT or sales tax. Discounts depend on eligibility. No automatic waiver or conversion to USD is assumed.",
      "scope": "Robotic systems, including theory, design and applications.",
      "watch": "Demonstrate a robotic-systems contribution. The publisher explicitly reports ESCI, not SCIE.",
      "affinities": {
        "control": 1,
        "ai": 0.8,
        "imaging": 0.6,
        "signals": 0.65,
        "computing": 0.6,
        "software": 0.6,
        "reliability": 0.8,
        "deployment": 0.9
      },
      "review": "check",
      "feeDisplay": "CHF 1,800 + applicable tax",
      "evidence": [
        {
          "label": "Publisher scope & access model",
          "url": "https://www.mdpi.com/journal/robotics",
          "note": "The official journal description supplies the scope and fully open access publishing model.",
          "kind": "Publisher"
        },
        {
          "label": "Exact publisher indexing statement",
          "url": "https://www.mdpi.com/journal/robotics/indexing",
          "note": "The publisher explicitly lists Scopus and Emerging Sources Citation Index (ESCI), distinct from SCIE. This is a dated source statement, not a live registry query.",
          "kind": "Publisher"
        },
        {
          "label": "Verified CHF APC & tax terms",
          "url": "https://www.mdpi.com/journal/robotics/apc",
          "note": "The publisher quotes CHF 1,800 after acceptance, with applicable local tax additional. Conditional discounts are not assumed. No USD conversion is made.",
          "kind": "Publisher"
        }
      ]
    },
    "index": {
      "scopus": true,
      "scie": false,
      "wos": "ESCI",
      "source": "https://www.mdpi.com/journal/robotics/indexing",
      "checked": "10 November 2026",
      "note": "The publisher explicitly reports Scopus and Emerging Sources Citation Index; ESCI is distinct from SCIE. Confirm current coverage by exact title or ISSN in the official registries before submission."
    }
  },
  {
    "journal": {
      "id": "mdpi-information",
      "name": "Information",
      "short": "INFM",
      "publisher": "MDPI",
      "category": "Data science & knowledge systems",
      "field": "Data science & knowledge systems",
      "color": "#6a8281",
      "access": "open",
      "issn": "2078-2489",
      "apc": null,
      "feeNote": "CHF 1,800 APC after peer review and acceptance, plus applicable VAT or sales tax. Discounts depend on eligibility. No automatic waiver or conversion to USD is assumed.",
      "scope": "Information science and technology, data, knowledge and communication; research, reviews and short communications.",
      "watch": "Explain the information, knowledge or communication contribution and provide reproducible experimental or theoretical detail.",
      "affinities": {
        "data": 1,
        "computing": 0.9,
        "ai": 0.85,
        "software": 0.6,
        "networks": 0.7,
        "cyber": 0.65,
        "imaging": 0.5,
        "reliability": 0.75,
        "deployment": 0.6
      },
      "review": "yes",
      "feeDisplay": "CHF 1,800 + applicable tax",
      "evidence": [
        {
          "label": "Publisher scope & access model",
          "url": "https://www.mdpi.com/journal/information/about",
          "note": "The official journal description supplies the scope and fully open access publishing model.",
          "kind": "Publisher"
        },
        {
          "label": "Exact publisher indexing statement",
          "url": "https://www.mdpi.com/journal/information/indexing",
          "note": "The publisher explicitly lists Scopus and Emerging Sources Citation Index (ESCI), distinct from SCIE. This is a dated source statement, not a live registry query.",
          "kind": "Publisher"
        },
        {
          "label": "Verified CHF APC & tax terms",
          "url": "https://www.mdpi.com/journal/information/apc",
          "note": "The publisher quotes CHF 1,800 after acceptance, with applicable local tax additional. Conditional discounts are not assumed. No USD conversion is made.",
          "kind": "Publisher"
        }
      ]
    },
    "index": {
      "scopus": true,
      "scie": false,
      "wos": "ESCI",
      "source": "https://www.mdpi.com/journal/information/indexing",
      "checked": "10 November 2026",
      "note": "The publisher explicitly reports Scopus and Emerging Sources Citation Index; ESCI is distinct from SCIE. Confirm current coverage by exact title or ISSN in the official registries before submission."
    }
  },
  {
    "journal": {
      "id": "mdpi-sensors",
      "name": "Sensors",
      "short": "SENS",
      "publisher": "MDPI",
      "category": "Networks & communications",
      "field": "Networks & communications",
      "color": "#6a8281",
      "access": "open",
      "issn": "1424-8220",
      "apc": null,
      "feeNote": "CHF 2,600 APC after peer review and acceptance, plus applicable VAT or sales tax. Discounts depend on eligibility. No automatic waiver or conversion to USD is assumed.",
      "scope": "Sensor science and technology, including physical, chemical, biomedical and remote sensing and sensor networks.",
      "watch": "Establish the sensing, instrumentation or sensor-network contribution; a generic model benchmark may not establish fit.",
      "affinities": {
        "signals": 1,
        "networks": 0.95,
        "imaging": 0.85,
        "control": 0.8,
        "computing": 0.65,
        "ai": 0.8,
        "medical": 0.7,
        "energy": 0.55,
        "reliability": 0.8,
        "deployment": 0.9
      },
      "review": "check",
      "feeDisplay": "CHF 2,600 + applicable tax",
      "evidence": [
        {
          "label": "Publisher scope & access model",
          "url": "https://www.mdpi.com/journal/sensors",
          "note": "The official journal description supplies the scope and fully open access publishing model.",
          "kind": "Publisher"
        },
        {
          "label": "Exact publisher indexing statement",
          "url": "https://www.mdpi.com/journal/sensors",
          "note": "The publisher explicitly lists Scopus and Science Citation Index Expanded (SCIE). This is a dated source statement, not a live registry query.",
          "kind": "Publisher"
        },
        {
          "label": "Verified CHF APC & tax terms",
          "url": "https://www.mdpi.com/journal/sensors/apc",
          "note": "The publisher quotes CHF 2,600 after acceptance, with applicable local tax additional. Conditional discounts are not assumed. No USD conversion is made.",
          "kind": "Publisher"
        }
      ]
    },
    "index": {
      "scopus": true,
      "scie": true,
      "wos": "SCIE",
      "source": "https://www.mdpi.com/journal/sensors",
      "checked": "10 November 2026",
      "note": "The publisher explicitly reports Scopus and Science Citation Index Expanded. Confirm current coverage by exact title or ISSN in the official registries before submission."
    }
  },
  {
    "journal": {
      "id": "mdpi-electronics",
      "name": "Electronics",
      "short": "ELEC",
      "publisher": "MDPI",
      "category": "Engineering & applied sciences",
      "field": "Engineering & applied sciences",
      "color": "#6a8281",
      "access": "open",
      "issn": "2079-9292",
      "apc": null,
      "feeNote": "CHF 2,400 APC after peer review and acceptance, plus applicable VAT or sales tax. Discounts depend on eligibility. No automatic waiver or conversion to USD is assumed.",
      "scope": "Electronics and applications, including computer engineering, networks, AI, signal processing, power electronics and control systems.",
      "watch": "Connect the manuscript to electronics, computing or relevant systems engineering and provide sufficient method and evaluation detail.",
      "affinities": {
        "computing": 0.85,
        "networks": 0.9,
        "signals": 1,
        "control": 0.9,
        "energy": 0.85,
        "ai": 0.8,
        "software": 0.65,
        "cloud": 0.65,
        "imaging": 0.65,
        "reliability": 0.75,
        "deployment": 0.85
      },
      "review": "yes",
      "feeDisplay": "CHF 2,400 + applicable tax",
      "evidence": [
        {
          "label": "Publisher scope & access model",
          "url": "https://www.mdpi.com/journal/electronics/about",
          "note": "The official journal description supplies the scope and fully open access publishing model.",
          "kind": "Publisher"
        },
        {
          "label": "Exact publisher indexing statement",
          "url": "https://www.mdpi.com/journal/electronics/indexing",
          "note": "The publisher explicitly lists Scopus and Science Citation Index Expanded (SCIE). This is a dated source statement, not a live registry query.",
          "kind": "Publisher"
        },
        {
          "label": "Verified CHF APC & tax terms",
          "url": "https://www.mdpi.com/journal/electronics/apc",
          "note": "The publisher quotes CHF 2,400 after acceptance, with applicable local tax additional. Conditional discounts are not assumed. No USD conversion is made.",
          "kind": "Publisher"
        }
      ]
    },
    "index": {
      "scopus": true,
      "scie": true,
      "wos": "SCIE",
      "source": "https://www.mdpi.com/journal/electronics/indexing",
      "checked": "10 November 2026",
      "note": "The publisher explicitly reports Scopus and Science Citation Index Expanded. Confirm current coverage by exact title or ISSN in the official registries before submission."
    }
  },
  {
    "journal": {
      "id": "mdpi-applied-sciences",
      "name": "Applied Sciences",
      "short": "APPS",
      "publisher": "MDPI",
      "category": "Engineering & applied sciences",
      "field": "Engineering & applied sciences",
      "color": "#6a8281",
      "access": "open",
      "issn": "2076-3417",
      "apc": null,
      "feeNote": "CHF 2,400 APC after peer review and acceptance, plus applicable VAT or sales tax. Discounts depend on eligibility. No automatic waiver or conversion to USD is assumed.",
      "scope": "Applied natural sciences and engineering, including computer science, electrical engineering and energy technologies.",
      "watch": "Match the contribution to the appropriate applied-science section; broad journal coverage alone does not establish manuscript fit.",
      "affinities": {
        "computing": 0.7,
        "ai": 0.7,
        "energy": 0.85,
        "control": 0.8,
        "signals": 0.8,
        "imaging": 0.7,
        "data": 0.65,
        "software": 0.6,
        "reliability": 0.7,
        "deployment": 0.85
      },
      "review": "check",
      "feeDisplay": "CHF 2,400 + applicable tax",
      "evidence": [
        {
          "label": "Publisher scope & access model",
          "url": "https://www.mdpi.com/journal/applsci",
          "note": "The official journal description supplies the scope and fully open access publishing model.",
          "kind": "Publisher"
        },
        {
          "label": "Exact publisher indexing statement",
          "url": "https://www.mdpi.com/journal/applsci",
          "note": "The publisher explicitly lists Scopus and Science Citation Index Expanded (SCIE). This is a dated source statement, not a live registry query.",
          "kind": "Publisher"
        },
        {
          "label": "Verified CHF APC & tax terms",
          "url": "https://www.mdpi.com/journal/applsci/apc",
          "note": "The publisher quotes CHF 2,400 after acceptance, with applicable local tax additional. Conditional discounts are not assumed. No USD conversion is made.",
          "kind": "Publisher"
        }
      ]
    },
    "index": {
      "scopus": true,
      "scie": true,
      "wos": "SCIE",
      "source": "https://www.mdpi.com/journal/applsci",
      "checked": "10 November 2026",
      "note": "The publisher explicitly reports Scopus and Science Citation Index Expanded. Confirm current coverage by exact title or ISSN in the official registries before submission."
    }
  },
  {
    "journal": {
      "id": "mdpi-energies",
      "name": "Energies",
      "short": "ENRG",
      "publisher": "MDPI",
      "category": "Power & energy",
      "field": "Power & energy",
      "color": "#6a8281",
      "access": "open",
      "issn": "1996-1073",
      "apc": null,
      "feeNote": "CHF 2,600 APC after peer review and acceptance, plus applicable VAT or sales tax. Discounts depend on eligibility. No automatic waiver or conversion to USD is assumed.",
      "scope": "Energy research, technology, engineering, policy and management, spanning energy supply, conversion, dispatch and use.",
      "watch": "Show an energy-system, technology or policy contribution and evaluate energy outcomes rather than only generic algorithm accuracy.",
      "affinities": {
        "energy": 1,
        "control": 0.65,
        "ai": 0.45,
        "computing": 0.3,
        "reliability": 0.75,
        "deployment": 0.9,
        "africa": 0.35
      },
      "review": "check",
      "feeDisplay": "CHF 2,600 + applicable tax",
      "evidence": [
        {
          "label": "Publisher scope & access model",
          "url": "https://www.mdpi.com/journal/energies",
          "note": "The official journal description supplies the scope and fully open access publishing model.",
          "kind": "Publisher"
        },
        {
          "label": "Exact publisher indexing statement",
          "url": "https://www.mdpi.com/journal/energies/indexing",
          "note": "The publisher explicitly lists Scopus and Science Citation Index Expanded (SCIE). This is a dated source statement, not a live registry query.",
          "kind": "Publisher"
        },
        {
          "label": "Verified CHF APC & tax terms",
          "url": "https://www.mdpi.com/journal/energies/apc",
          "note": "The publisher quotes CHF 2,600 after acceptance, with applicable local tax additional. Conditional discounts are not assumed. No USD conversion is made.",
          "kind": "Publisher"
        }
      ]
    },
    "index": {
      "scopus": true,
      "scie": true,
      "wos": "SCIE",
      "source": "https://www.mdpi.com/journal/energies/indexing",
      "checked": "10 November 2026",
      "note": "The publisher explicitly reports Scopus and Science Citation Index Expanded. Confirm current coverage by exact title or ISSN in the official registries before submission."
    }
  },
  {
    "journal": {
      "id": "mdpi-entropy",
      "name": "Entropy",
      "short": "ENTR",
      "publisher": "MDPI",
      "category": "Data science & knowledge systems",
      "field": "Data science & knowledge systems",
      "color": "#6a8281",
      "access": "open",
      "issn": "1099-4300",
      "apc": null,
      "feeNote": "CHF 2,600 APC after peer review and acceptance, plus applicable VAT or sales tax. Discounts depend on eligibility. No automatic waiver or conversion to USD is assumed.",
      "scope": "Interdisciplinary entropy and information studies.",
      "watch": "Establish a substantive entropy, information-theoretic or closely related methodological contribution.",
      "affinities": {
        "data": 0.85,
        "computing": 0.75,
        "ai": 0.65,
        "signals": 0.65,
        "reliability": 0.65,
        "imaging": 0.4,
        "software": 0.3,
        "deployment": 0.3
      },
      "review": "check",
      "feeDisplay": "CHF 2,600 + applicable tax",
      "evidence": [
        {
          "label": "Publisher scope & access model",
          "url": "https://www.mdpi.com/journal/Entropy",
          "note": "The official journal description supplies the scope and fully open access publishing model.",
          "kind": "Publisher"
        },
        {
          "label": "Exact publisher indexing statement",
          "url": "https://www.mdpi.com/journal/Entropy",
          "note": "The publisher explicitly lists Scopus and Science Citation Index Expanded (SCIE). This is a dated source statement, not a live registry query.",
          "kind": "Publisher"
        },
        {
          "label": "Verified CHF APC & tax terms",
          "url": "https://www.mdpi.com/journal/entropy/apc",
          "note": "The publisher quotes CHF 2,600 after acceptance, with applicable local tax additional. Conditional discounts are not assumed. No USD conversion is made.",
          "kind": "Publisher"
        }
      ]
    },
    "index": {
      "scopus": true,
      "scie": true,
      "wos": "SCIE",
      "source": "https://www.mdpi.com/journal/Entropy",
      "checked": "10 November 2026",
      "note": "The publisher explicitly reports Scopus and Science Citation Index Expanded. Confirm current coverage by exact title or ISSN in the official registries before submission."
    }
  },
  {
    "journal": {
      "id": "ajstid",
      "name": "African Journal of Science, Technology, Innovation and Development",
      "short": "AJST",
      "publisher": "Taylor & Francis",
      "category": "Engineering & applied sciences",
      "field": "Engineering & applied sciences",
      "color": "#90785d",
      "access": "hybrid",
      "issn": "2042-1346",
      "apc": null,
      "feeNote": "A verified current numerical optional open-access fee was not captured. Open Select offers optional OA; confirm subscription-route charges and current OA pricing directly.",
      "scope": "Science, engineering and technology with a focus on innovation and development, particularly in Africa and other developing economies.",
      "watch": "The contribution needs an innovation/development connection; a standalone classifier or algorithm benchmark may have weak scope fit. Exact publisher coverage is Scopus and ESCI.",
      "affinities": {
        "innovation": 1,
        "africa": 1,
        "energy": 0.55,
        "computing": 0.25,
        "software": 0.2,
        "ai": 0.25,
        "data": 0.3,
        "control": 0.2,
        "deployment": 0.75,
        "reliability": 0.35
      },
      "review": "check",
      "geography": {
        "country": "South Africa",
        "region": "Africa",
        "institution": "Tshwane University of Technology",
        "source": "https://www.tandfonline.com/RAJS",
        "note": "The publisher identifies publication on behalf of Tshwane University of Technology."
      },
      "evidence": [
        {
          "label": "Publisher scope & access model",
          "url": "https://www.tandfonline.com/RAJS",
          "note": "The official journal description supplies the scope and Open Select option and owning institution.",
          "kind": "Publisher"
        },
        {
          "label": "Exact publisher indexing statement",
          "url": "https://www.tandfonline.com/action/journalInformation?journalCode=rajs20&show=instructions",
          "note": "The publisher explicitly lists Scopus and Emerging Sources Citation Index (ESCI), distinct from SCIE. This is a dated source statement, not a live registry query.",
          "kind": "Publisher"
        },
        {
          "label": "Copublisher journal identity",
          "url": "https://www.nisc.com/products/20/journals/african-journal-of-science-technology-innovation-and-development",
          "note": "The copublisher lists the exact journal title and online ISSN. Current optional OA fees remain unverified.",
          "kind": "Copublisher"
        }
      ]
    },
    "index": {
      "scopus": true,
      "scie": false,
      "wos": "ESCI",
      "source": "https://www.tandfonline.com/action/journalInformation?journalCode=rajs20&show=instructions",
      "checked": "10 November 2026",
      "note": "The publisher explicitly reports Scopus and Emerging Sources Citation Index; ESCI is distinct from SCIE. Confirm current coverage by exact title or ISSN in the official registries before submission."
    }
  },
  {
    "journal": {
      "id": "wiley-spe",
      "name": "Software: Practice and Experience",
      "short": "SPE",
      "publisher": "Wiley",
      "category": "Software engineering",
      "field": "Software engineering",
      "color": "#736e8d",
      "access": "hybrid",
      "issn": "1097-024X",
      "apc": 5120,
      "feeNote": "USD 5,120. Optional open access APC; a subscription route remains available. Excludes VAT, GST and other applicable taxes. Institutional support is conditional, not an automatic waiver. Other author charges were not established.",
      "scope": "Practical software design and implementation, software tools, programming, distributed computing, cloud, fog and edge systems.",
      "watch": "Requires a novel contribution useful to software designers or implementers. General software processes, project management, requirements engineering and verification are outside its stated scope.",
      "affinities": {
        "software": 1,
        "computing": 0.95,
        "cloud": 0.85,
        "networks": 0.55,
        "ai": 0.6,
        "data": 0.55,
        "reliability": 0.7,
        "deployment": 1
      },
      "review": "yes",
      "evidence": [
        {
          "label": "Publisher scope and exact indexing list",
          "url": "https://onlinelibrary.wiley.com/page/journal/1097024x/homepage/productinformation.html",
          "note": "Explicit Scopus and Science Citation Index Expanded; describes design and implementation scope and exclusions.",
          "kind": "Publisher"
        },
        {
          "label": "Verified optional OA fee and subscription route",
          "url": "https://onlinelibrary.wiley.com/page/journal/1097024x/homepage/fundedaccess.html",
          "note": "USD 5,120 before tax for optional OA. The page explicitly discusses a subscription article licence.",
          "kind": "Publisher"
        },
        {
          "label": "Journal identity and first-decision metric",
          "url": "https://onlinelibrary.wiley.com/journal/1097024X",
          "note": "Online ISSN 1097-024X and 14-day median first decision; this is not time to publication.",
          "kind": "Publisher"
        }
      ],
      "days": 14
    },
    "index": {
      "scopus": true,
      "scie": true,
      "wos": "SCIE",
      "source": "https://onlinelibrary.wiley.com/page/journal/1097024x/homepage/productinformation.html",
      "checked": "10 November 2026",
      "note": "The publisher explicitly reports Scopus and Science Citation Index Expanded. Current database-registry coverage must be reconfirmed before submission."
    }
  },
  {
    "journal": {
      "id": "wiley-stvr",
      "name": "Software Testing, Verification and Reliability",
      "short": "STVR",
      "publisher": "Wiley",
      "category": "Software engineering",
      "field": "Software engineering",
      "color": "#736e8d",
      "access": "hybrid",
      "issn": "1099-1689",
      "apc": 2880,
      "feeNote": "USD 2,880. Optional hybrid open access APC, excluding applicable taxes. A standard subscription article route is available; this is not a zero-total-fee claim.",
      "scope": "Theory, practical methods and empirical evaluation for software testing, formal verification, reliability, security testing and automated test generation.",
      "watch": "Keep the contribution centred on testing, verification or reliability and assess software or tools convincingly. Survey papers are explicitly included.",
      "affinities": {
        "software": 1,
        "computing": 0.8,
        "cyber": 0.75,
        "ai": 0.55,
        "reliability": 1,
        "deployment": 0.75
      },
      "review": "yes",
      "evidence": [
        {
          "label": "Publisher scope, surveys and exact indexes",
          "url": "https://onlinelibrary.wiley.com/page/journal/10991689/homepage/productinformation.html",
          "note": "Explicit Scopus and Science Citation Index Expanded; covers research and survey papers.",
          "kind": "Publisher"
        },
        {
          "label": "Hybrid publishing option",
          "url": "https://onlinelibrary.wiley.com/page/journal/10991689/homepage/forauthors.html",
          "note": "Author guidelines explicitly describe Hybrid Open Access as a choice carrying a fee.",
          "kind": "Publisher"
        },
        {
          "label": "Verified optional OA fee",
          "url": "https://onlinelibrary.wiley.com/page/journal/10991689/homepage/fundedaccess.html",
          "note": "Quotes USD 2,880 excluding applicable taxes and mentions the subscription article licence.",
          "kind": "Publisher"
        },
        {
          "label": "Identity and first-decision metric",
          "url": "https://onlinelibrary.wiley.com/journal/10991689",
          "note": "Online ISSN 1099-1689; 26-day median first decision, not publication duration.",
          "kind": "Publisher"
        }
      ],
      "days": 26
    },
    "index": {
      "scopus": true,
      "scie": true,
      "wos": "SCIE",
      "source": "https://onlinelibrary.wiley.com/page/journal/10991689/homepage/productinformation.html",
      "checked": "10 November 2026",
      "note": "The publisher explicitly reports Scopus and Science Citation Index Expanded. Current database-registry coverage must be reconfirmed before submission."
    }
  },
  {
    "journal": {
      "id": "wiley-ccpe",
      "name": "Concurrency and Computation: Practice and Experience",
      "short": "CCPE",
      "publisher": "Wiley",
      "category": "Cloud & distributed computing",
      "field": "Cloud & distributed computing",
      "color": "#736e8d",
      "access": "hybrid",
      "issn": "1532-0634",
      "apc": null,
      "feeNote": "Hybrid Open Access is optional. The current numerical APC was not verified from an accessible primary price page; confirm it and any other author charges. Do not use secondary-directory prices as a verified fee.",
      "scope": "Parallel and distributed computing, high-performance computing, cloud, edge and fog systems, data-intensive applications, AI, security and quantum computing.",
      "watch": "Significant concurrency or computational issues and practical systems evidence should be central. The journal limits original research submissions per author per year; check current guidance.",
      "affinities": {
        "cloud": 1,
        "computing": 1,
        "software": 0.8,
        "networks": 0.75,
        "data": 0.8,
        "ai": 0.65,
        "cyber": 0.6,
        "reliability": 0.8,
        "deployment": 0.9
      },
      "review": "yes",
      "evidence": [
        {
          "label": "Publisher scope and exact indexing list",
          "url": "https://onlinelibrary.wiley.com/page/journal/15320634/homepage/productinformation.html",
          "note": "Explicit Scopus and Science Citation Index Expanded; research and authoritative reviews on practical parallel/distributed computation.",
          "kind": "Publisher"
        },
        {
          "label": "Verified hybrid publishing choice",
          "url": "https://onlinelibrary.wiley.com/page/journal/15320634/homepage/forauthors.html",
          "note": "Author guidelines explicitly describe optional Hybrid Open Access and standard copyright transfer when OA is not selected.",
          "kind": "Publisher"
        },
        {
          "label": "Identity and first-decision metric",
          "url": "https://onlinelibrary.wiley.com/journal/15320634",
          "note": "Online ISSN 1532-0634; four-day median first decision, not time to publication.",
          "kind": "Publisher"
        }
      ],
      "days": 4
    },
    "index": {
      "scopus": true,
      "scie": true,
      "wos": "SCIE",
      "source": "https://onlinelibrary.wiley.com/page/journal/15320634/homepage/productinformation.html",
      "checked": "10 November 2026",
      "note": "The publisher explicitly reports Scopus and Science Citation Index Expanded. Current database-registry coverage must be reconfirmed before submission."
    }
  },
  {
    "journal": {
      "id": "wiley-expert-systems",
      "name": "Expert Systems",
      "short": "EXSY",
      "publisher": "Wiley",
      "category": "Artificial intelligence",
      "field": "Artificial intelligence",
      "color": "#736e8d",
      "access": "hybrid",
      "issn": "1468-0394",
      "apc": 3600,
      "feeNote": "USD 3,600. Optional open access APC, excluding VAT, GST and other applicable taxes. A subscription licence option is explicitly available. Institutional funding depends on eligibility.",
      "scope": "Knowledge engineering and AI for complex real-world systems, including explainable AI, computer vision, machine perception and intelligent healthcare computing.",
      "watch": "Demonstrate a strong knowledge-engineering or AI systems contribution. Case studies and experimental evaluations are encouraged to seek editorial approval before submission.",
      "affinities": {
        "ai": 1,
        "data": 0.85,
        "computing": 0.8,
        "imaging": 0.75,
        "medical": 0.6,
        "software": 0.6,
        "control": 0.6,
        "reliability": 0.9,
        "deployment": 0.85
      },
      "review": "yes",
      "evidence": [
        {
          "label": "Publisher scope and exact indexing list",
          "url": "https://onlinelibrary.wiley.com/page/journal/14680394/homepage/productinformation.html",
          "note": "Explicit Scopus and Science Citation Index Expanded; accepts research, reviews and surveys within four AI and knowledge-engineering tracks.",
          "kind": "Publisher"
        },
        {
          "label": "Verified optional OA fee and subscription route",
          "url": "https://onlinelibrary.wiley.com/page/journal/14680394/homepage/fundedaccess.html",
          "note": "USD 3,600 before tax if OA is selected; explicitly mentions subscription licensing.",
          "kind": "Publisher"
        },
        {
          "label": "Identity and first-decision metric",
          "url": "https://onlinelibrary.wiley.com/journal/14680394",
          "note": "Online ISSN 1468-0394; three-day median first decision, not publication time.",
          "kind": "Publisher"
        }
      ],
      "days": 3
    },
    "index": {
      "scopus": true,
      "scie": true,
      "wos": "SCIE",
      "source": "https://onlinelibrary.wiley.com/page/journal/14680394/homepage/productinformation.html",
      "checked": "10 November 2026",
      "note": "The publisher explicitly reports Scopus and Science Citation Index Expanded. Current database-registry coverage must be reconfirmed before submission."
    }
  },
  {
    "journal": {
      "id": "iet-control",
      "name": "IET Control Theory & Applications",
      "short": "IETC",
      "publisher": "Wiley / IET",
      "category": "Robotics & control",
      "field": "Robotics & control",
      "color": "#64818c",
      "access": "open",
      "issn": "1751-8652",
      "apc": null,
      "feeNote": "Fully open access; a current numerical primary APC was not captured. Confirm the fee, country pricing and funding eligibility. No waiver or free publishing is assumed.",
      "scope": "Control systems theory and applications, including new control methods, AI, machine learning and robotics.",
      "watch": "Establish the control-system contribution and evaluate dynamics, robustness, stability or implementation as appropriate. Fully OA: no subscription publishing route.",
      "affinities": {
        "control": 1,
        "ai": 0.7,
        "energy": 0.8,
        "signals": 0.65,
        "computing": 0.55,
        "reliability": 0.95,
        "deployment": 0.9
      },
      "review": "yes",
      "evidence": [
        {
          "label": "Publisher control scope and exact indexes",
          "url": "https://ietresearch.onlinelibrary.wiley.com/hub/journal/17518652/homepage/productinformation.html",
          "note": "Current publisher search excerpt explicitly lists Science Citation Index Expanded and SCOPUS. Direct opening timed out, so reconfirm the page and registries.",
          "kind": "Publisher"
        },
        {
          "label": "Fully OA, identity and article types",
          "url": "https://ietresearch.onlinelibrary.wiley.com/journal/17518652",
          "note": "Publisher identifies online ISSN 1751-8652, fully OA route and subject reviews, theoretical papers and tutorials.",
          "kind": "Publisher"
        }
      ]
    },
    "index": {
      "scopus": true,
      "scie": true,
      "wos": "SCIE",
      "source": "https://ietresearch.onlinelibrary.wiley.com/hub/journal/17518652/homepage/productinformation.html",
      "checked": "10 November 2026",
      "note": "The publisher explicitly reports Scopus and Science Citation Index Expanded. Current database-registry coverage must be reconfirmed before submission. Indexing was captured in an official search excerpt; direct opening timed out."
    }
  },
  {
    "journal": {
      "id": "iet-gtd",
      "name": "IET Generation, Transmission & Distribution",
      "short": "GTD",
      "publisher": "Wiley / IET",
      "category": "Power & energy",
      "field": "Power & energy",
      "color": "#64818c",
      "access": "open",
      "issn": "1751-8695",
      "apc": null,
      "feeNote": "Fully open access. A current numerical primary APC was not captured; check author charges and eligibility for support before submission.",
      "scope": "Electric power generation, transmission and distribution, including grid design, power-system operation, protection, control, modelling and computational intelligence.",
      "watch": "Connect the contribution to practical power-system design or operation. Fully OA, with current charges and review article policy to be confirmed.",
      "affinities": {
        "energy": 1,
        "control": 0.9,
        "ai": 0.55,
        "signals": 0.5,
        "reliability": 0.95,
        "deployment": 0.9
      },
      "review": "check",
      "evidence": [
        {
          "label": "Publisher power scope and exact indexes",
          "url": "https://ietresearch.onlinelibrary.wiley.com/hub/journal/17518695/homepage/productinformation.html",
          "note": "Explicit Scopus and Science Citation Index Expanded; includes power control, modelling and computational intelligence.",
          "kind": "Publisher"
        },
        {
          "label": "Fully OA route and identity",
          "url": "https://ietresearch.onlinelibrary.wiley.com/journal/17518695",
          "note": "Publisher states fully open access and online ISSN 1751-8695.",
          "kind": "Publisher"
        }
      ]
    },
    "index": {
      "scopus": true,
      "scie": true,
      "wos": "SCIE",
      "source": "https://ietresearch.onlinelibrary.wiley.com/hub/journal/17518695/homepage/productinformation.html",
      "checked": "10 November 2026",
      "note": "The publisher explicitly reports Scopus and Science Citation Index Expanded. Current database-registry coverage must be reconfirmed before submission."
    }
  },
  {
    "journal": {
      "id": "iet-signal",
      "name": "IET Signal Processing",
      "short": "IETSP",
      "publisher": "Wiley / IET",
      "category": "Engineering & applied sciences",
      "field": "Signal processing & machine learning",
      "color": "#64818c",
      "access": "open",
      "issn": "1751-9683",
      "apc": null,
      "feeNote": "Gold open access; no current numerical primary APC was verified. Confirm fee and support eligibility without assuming a waiver.",
      "scope": "Signal processing and machine learning for detection, estimation, inference and classification, including filters, sensor arrays, biomedical signals and communications.",
      "watch": "Make the signal-processing contribution explicit. Fully OA; current author charges need checking. First-decision metrics are not publication promises.",
      "affinities": {
        "signals": 1,
        "imaging": 0.7,
        "medical": 0.65,
        "networks": 0.8,
        "ai": 0.8,
        "computing": 0.65,
        "control": 0.55,
        "reliability": 0.8,
        "deployment": 0.8
      },
      "review": "yes",
      "evidence": [
        {
          "label": "Publisher scope, ISSN and exact indexes",
          "url": "https://ietresearch.onlinelibrary.wiley.com/page/journal/ietsp/homepage/productinformation.html",
          "note": "Explicit Scopus and Science Citation Index Expanded; research and review articles; online ISSN 1751-9683.",
          "kind": "Publisher"
        },
        {
          "label": "Gold OA route and first-decision metric",
          "url": "https://ietresearch.onlinelibrary.wiley.com/journal/17519683",
          "note": "Gold OA; 63-day median first decision, not publication time.",
          "kind": "Publisher"
        }
      ],
      "days": 63
    },
    "index": {
      "scopus": true,
      "scie": true,
      "wos": "SCIE",
      "source": "https://ietresearch.onlinelibrary.wiley.com/page/journal/ietsp/homepage/productinformation.html",
      "checked": "10 November 2026",
      "note": "The publisher explicitly reports Scopus and Science Citation Index Expanded. Current database-registry coverage must be reconfirmed before submission."
    }
  },
  {
    "journal": {
      "id": "iet-networks",
      "name": "IET Networks",
      "short": "IETN",
      "publisher": "Wiley / IET",
      "category": "Networks & communications",
      "field": "Networks & communications",
      "color": "#64818c",
      "access": "open",
      "issn": "2047-4962",
      "apc": null,
      "feeNote": "Gold open access. A current numerical primary APC was not captured; check charges, funding and waiver eligibility directly.",
      "scope": "Fundamental and applied computer networking, protocols, routing, architecture, resilience, network operation and modelling across wired, wireless, sensor and IoT networks.",
      "watch": "Keep the contribution centred on networking. The publisher explicitly reports ESCI, which is distinct from SCIE. Fully OA with fees to confirm.",
      "affinities": {
        "networks": 1,
        "cloud": 0.85,
        "cyber": 0.8,
        "computing": 0.7,
        "software": 0.55,
        "ai": 0.6,
        "reliability": 0.9,
        "deployment": 0.9
      },
      "review": "check",
      "evidence": [
        {
          "label": "Publisher network scope, gold OA and exact indexes",
          "url": "https://ietresearch.onlinelibrary.wiley.com/hub/journal/20474962/homepage/productinformation.html",
          "note": "Explicit Scopus and Emerging Sources Citation Index, with gold OA status.",
          "kind": "Publisher"
        },
        {
          "label": "Identity and first-decision metric",
          "url": "https://ietresearch.onlinelibrary.wiley.com/journal/20474962",
          "note": "Online ISSN 2047-4962; fully OA and 54-day median first decision, not time to publication.",
          "kind": "Publisher"
        }
      ],
      "days": 54
    },
    "index": {
      "scopus": true,
      "scie": false,
      "wos": "ESCI",
      "source": "https://ietresearch.onlinelibrary.wiley.com/hub/journal/20474962/homepage/productinformation.html",
      "checked": "10 November 2026",
      "note": "The publisher explicitly reports Scopus and Emerging Sources Citation Index, distinct from SCIE. Current database-registry coverage must be reconfirmed before submission."
    }
  },
  {
    "journal": {
      "id": "iet-smart-cities",
      "name": "IET Smart Cities",
      "short": "IETSC",
      "publisher": "Wiley / IET",
      "category": "Networks & communications",
      "field": "Smart cities & urban computing",
      "color": "#64818c",
      "access": "open",
      "issn": "2631-7680",
      "apc": null,
      "feeNote": "Gold open access. A current numerical primary APC was not captured; confirm author fees and any funding arrangement before relying on affordability.",
      "scope": "Smart-city technologies, systems, governance and deployment, including urban computing, IoT, cloud and edge systems, AI, smart energy, transport and health.",
      "watch": "Demonstrate a clear smart-city or urban-systems contribution. The publisher explicitly identifies ESCI rather than SCIE. Current APC remains unverified.",
      "affinities": {
        "networks": 0.9,
        "cloud": 0.9,
        "energy": 0.75,
        "control": 0.65,
        "ai": 0.8,
        "data": 0.8,
        "computing": 0.7,
        "informatics": 0.55,
        "medical": 0.4,
        "innovation": 0.7,
        "reliability": 0.7,
        "deployment": 1
      },
      "review": "check",
      "evidence": [
        {
          "label": "Publisher scope, gold OA and exact indexes",
          "url": "https://ietresearch.onlinelibrary.wiley.com/hub/journal/26317680/homepage/productinformation.html",
          "note": "Explicit gold OA, ESCI and Scopus; scope includes city ICT, software, IoT, AI and energy.",
          "kind": "Publisher"
        },
        {
          "label": "Publisher identity and fully OA route",
          "url": "https://www.wiley.com/en-us/journals/IET%2BSmart%2BCities-p-26317680",
          "note": "Online ISSN 2631-7680 and fully OA publishing model.",
          "kind": "Publisher"
        }
      ]
    },
    "index": {
      "scopus": true,
      "scie": false,
      "wos": "ESCI",
      "source": "https://ietresearch.onlinelibrary.wiley.com/hub/journal/26317680/homepage/productinformation.html",
      "checked": "10 November 2026",
      "note": "The publisher explicitly reports Scopus and Emerging Sources Citation Index, distinct from SCIE. Current database-registry coverage must be reconfirmed before submission."
    }
  },
  {
    "journal": {
      "id": "iet-renewable",
      "name": "IET Renewable Power Generation",
      "short": "IETR",
      "publisher": "Wiley / IET",
      "category": "Power & energy",
      "field": "Power & energy",
      "color": "#64818c",
      "access": "open",
      "issn": "1752-1424",
      "apc": null,
      "feeNote": "Fully open access; a current numerical primary APC was not captured. Confirm author fees and institutional or country support directly; no automatic waiver is assumed.",
      "scope": "Renewable power generation, storage, grid integration, control, power conversion and techno-economic studies across renewable energy technologies.",
      "watch": "Focus on power generation or renewable integration and validate models against real-world behaviour where possible. Critical reviews are mentioned, but confirm editorial requirements.",
      "affinities": {
        "energy": 1,
        "control": 0.8,
        "ai": 0.45,
        "reliability": 0.85,
        "deployment": 0.9
      },
      "review": "check",
      "evidence": [
        {
          "label": "Publisher renewable-energy scope and exact indexes",
          "url": "https://ietresearch.onlinelibrary.wiley.com/hub/journal/17521424/homepage/productinformation.html",
          "note": "Explicit Scopus and Science Citation Index Expanded; fully OA; includes integration, storage, control and techno-economic research.",
          "kind": "Publisher"
        },
        {
          "label": "Publisher identity and fully OA route",
          "url": "https://www.wiley.com/en-us/iet-renewable-power-generation-p-17521424",
          "note": "Online ISSN 1752-1424 and fully OA publishing model.",
          "kind": "Publisher"
        }
      ]
    },
    "index": {
      "scopus": true,
      "scie": true,
      "wos": "SCIE",
      "source": "https://ietresearch.onlinelibrary.wiley.com/hub/journal/17521424/homepage/productinformation.html",
      "checked": "10 November 2026",
      "note": "The publisher explicitly reports Scopus and Science Citation Index Expanded. Current database-registry coverage must be reconfirmed before submission."
    }
  }
];
