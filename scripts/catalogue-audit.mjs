import {writeFile} from 'node:fs/promises';
import {journals,getIndexing,catalogueStats,CHECKED} from '../lib/catalogue.ts';
const records=journals.map(j=>({id:j.id,title:j.name,publisher:j.publisher,subject:j.category,issn:j.issn??null,geography:j.geography??null,indexing:getIndexing(j),access:j.access,usdListAPC:j.apc,feeDisplay:j.feeDisplay??null,knownUsdTotal:j.knownUsdTotal??j.apc,firstDecisionMedianDays:j.days??null,evidence:j.evidence}));
await writeFile(new URL('../docs/catalogue-audit.json',import.meta.url),JSON.stringify({checked:CHECKED,stats:catalogueStats,basis:'Scopus OR SCIE OR ESCI eligibility from dated publisher or journal-platform statements; not direct live registry checks. Regional bases use owning or managing institutional evidence.',records},null,2)+'\n');
process.stdout.write(`Audited ${records.length} journal records.\n`);
