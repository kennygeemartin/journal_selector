# Journal Compass

Interactive journal selector for manuscript planning. The catalogue contains 72 journals spanning technology, computer science, engineering and health.

The default eligibility rule is **Scopus OR SCIE OR ESCI**: one evidenced index qualifies a journal. Individual collection filters, both Scopus AND SCIE, both Scopus AND ESCI, SCIE OR ESCI, and an explicit all-three AND check are available. SCIE and ESCI are distinct collections; no catalogue entry passes all-three AND. “All entries” includes unconfirmed candidates. Legacy both-index preferences migrate to OR. There are 62 unique eligible entries; overlapping index lists are never added together.

The hosted app is available at [Journal Compass](https://journal-compass-private-research.hellodestinet.chatgpt.site/). Topics, filter choices and shortlists are saved in the browser.

## Run locally

Use Node.js 22.13 or newer.

```sh
npm ci
npm run dev
```

Open the local address printed by the development server.

## Nigerian and African coverage

Twelve journals have a documented African owning or managing institution: three in Nigeria, six in South Africa and three in Egypt. Eleven meet the OR evidence rule. Egyptian Informatics Journal remains an unconfirmed candidate outside the default eligible set. Institutional base is independent of the international publishing platform. Unclassified journals are not presumed to have no African affiliation.

The prominent publishing-route filter offers any route, OA available, closed/subscription, fully OA only and hybrid choice. Index and route choices persist in the browser and remain selected during regional browsing. Under an OA route, cost priority uses optional hybrid OA fees rather than the subscription proxy.

Regional and country filters, comparison rows, profiles and shortlist exports preserve this evidence. Nigerian journals have explicit Scopus statements; exact SCIE and ESCI coverage is not inferred. SAIEE has a dated ESCI announcement and conflicting Scopus evidence, which is disclosed.

## Evidence and fees

Snapshot: 10 November 2026. Index flags reflect dated publisher or journal-platform statements, not live database-registry queries. Each record links its evidence and official registries for a current coverage check. Numerical USD fee quotes exist for 18 journals, including one documented zero. Author affiliation and membership can determine the fee tier. Known mandatory submission charges and expressly priced tax are included in the USD budget basis. NGN, ZAR and CHF schedules are displayed without currency conversion; unknown fees are never zero.

Scope scores are transparent keyword screening aids, not acceptance probabilities. Article-type restrictions and documented exclusions override a match. First-decision metrics are not publication times. Manuscript topics and saved lists stay in browser local storage.

## Validation

Run `node --experimental-strip-types --test tests/selector.test.mjs`. Type check with `node node_modules/typescript/bin/tsc --noEmit`. Generate the evidence audit using `node --experimental-strip-types scripts/catalogue-audit.mjs`. Build through the Sites build helper. Desktop and 390px mobile browser checks cover OR eligibility, regional and country filters, fees, evidence and comparison.

The 21 new entries add MDPI, Wiley/IET and Taylor & Francis breadth. MDPI APCs retain verified CHF pricing; optional hybrid USD APCs apply only when OA is chosen.
