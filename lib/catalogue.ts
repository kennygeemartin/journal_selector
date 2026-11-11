import {journals as originalJournals, CHECKED, type Journal} from './journals.ts';
import {technologyJournals,technologyRecords,ieeeAccess} from './technology-journals.ts';
import {africanRecords} from './african-journals.ts';
import {additionalRecords} from './additional-journals.ts';
export {CHECKED};
export type {Journal};
export type IndexFilter='all'|'any'|'scopus'|'scie'|'esci'|'scopus-scie'|'scopus-esci'|'wos'|'three'|'unconfirmed';
export const INDEX_OPTIONS:{value:IndexFilter;label:string;description:string}[]=[
 {value:'any',label:'All of the above — any index (OR)',description:'A journal qualifies with evidence for Scopus OR SCIE OR ESCI. Overlapping journals appear once.'},
 {value:'scopus',label:'Scopus indexed',description:'Requires explicit Scopus evidence. Journals may also be in another index.'},
 {value:'scie',label:'SCIE indexed',description:'Requires explicit Science Citation Index Expanded evidence. ESCI does not substitute for SCIE.'},
 {value:'esci',label:'ESCI indexed',description:'Requires explicit Emerging Sources Citation Index evidence. Scopus coverage is optional.'},
 {value:'scopus-scie',label:'Both Scopus AND SCIE',description:'Requires explicit evidence for both Scopus and SCIE on the same journal.'},
 {value:'scopus-esci',label:'Both Scopus AND ESCI',description:'Requires explicit evidence for both Scopus and ESCI on the same journal.'},
 {value:'wos',label:'SCIE OR ESCI',description:'Requires either of these two Web of Science collections. Scopus coverage is optional.'},
 {value:'three',label:'All three required (AND)',description:'No current catalogue record is in all three. SCIE and ESCI are distinct Web of Science collections; choose any index (OR) to cover both.'},
 {value:'all',label:'All entries, including unconfirmed',description:'Shows every indexing status, including candidates with missing evidence. This does not establish indexing.'},
 {value:'unconfirmed',label:'Indexing needs confirmation',description:'Shows records with incomplete index evidence, including journals with one established index and another unknown.'}
];
export const normalizeIndexFilter=(value:unknown):IndexFilter=>INDEX_OPTIONS.some(o=>o.value===value)?value as IndexFilter:'any';
export type AccessFilter='all'|'open'|'closed'|'fully'|'hybrid';
export const ACCESS_OPTIONS:{value:AccessFilter;label:string;description:string}[]=[
 {value:'all',label:'Any publishing route',description:'Includes fully open access journals and hybrid journals offering a subscription route.'},
 {value:'open',label:'Open access available',description:'Includes fully open access and optional open access in hybrid journals. OA charges may apply.'},
 {value:'closed',label:'Closed / subscription route',description:'Shows journals where you can choose subscription publication. An optional OA APC can be avoided; other author charges still need checking.'},
 {value:'fully',label:'Fully open access only',description:'Shows journals that publish all articles open access, with no subscription publishing option.'},
 {value:'hybrid',label:'Hybrid — open or closed choice',description:'Shows journals offering both optional open access and subscription publication.'}
];
export const normalizeAccessFilter=(value:unknown):AccessFilter=>ACCESS_OPTIONS.some(o=>o.value===value)?value as AccessFilter:'all';
export function matchesAccess(j:Journal,filter:AccessFilter){return filter==='closed'||filter==='hybrid'?j.access==='hybrid':filter==='fully'?j.access==='open':true;}
export type Indexing={scopus:boolean|null;scie:boolean|null;wos:'SCIE'|'ESCI'|'Unconfirmed';source:string|null;note:string;checked:string};
export const REGISTRIES={scopus:'https://www.scopus.com/sources',clarivate:'https://mjl.clarivate.com/home'};
const categoryMap:Record<string,string>={cmig:'Health & biomedicine',aim:'Health & biomedicine',cmpb:'Health & biomedicine',bspc:'Health & biomedicine',ijmi:'Health & biomedicine',air:'Artificial intelligence',bmc:'Health & biomedicine',acta:'Health & biomedicine','sci-af':'Multidisciplinary research',cose:'Cybersecurity',epsr:'Power & energy',plos:'Multidisciplinary research'};
const indexMap:Record<string,Indexing>={};
for(const r of technologyRecords) indexMap[r.id]={scopus:true,scie:r.scie?true:r.esci?false:null,wos:r.scie?'SCIE':r.esci?'ESCI':'Unconfirmed',source:`https://link.springer.com/journal/${r.code}`,note:r.scie?'The publisher explicitly lists Scopus and Science Citation Index Expanded. Direct current-coverage checks in the two database registries were not completed; confirm by exact title or ISSN before submission.':r.esci?'The publisher explicitly lists Scopus and Emerging Sources Citation Index (ESCI). ESCI is distinct from SCIE; this record is excluded by the SCIE filter.':'Scopus is explicit in the retrieved publisher list. SCIE was not established by that evidence; absence here is not a claim of delisting. Check the Clarivate Master Journal List.',checked:CHECKED};
for(const [id,code] of [['air',10462],['bmc',12911]] as const)indexMap[id]={scopus:true,scie:true,wos:'SCIE',source:`https://link.springer.com/journal/${code}`,note:'The publisher explicitly lists Scopus and Science Citation Index Expanded. Reconfirm current coverage in Scopus Sources and the Clarivate Master Journal List before submission.',checked:CHECKED};
indexMap['ieee-access']={scopus:true,scie:true,wos:'SCIE',source:'https://ieeeaccess.ieee.org/about/bibliometrics/',note:'IEEE explicitly lists Scopus and Science Citation Index Expanded. This is a publisher statement, not a live database-registry query.',checked:CHECKED};
indexMap.plos={scopus:true,scie:null,wos:'Unconfirmed',source:'https://journals.plos.org/plosone/s/journal-information',note:'The publisher lists Scopus and generic Web of Science coverage. A generic Web of Science statement does not by itself establish the exact SCIE collection; recheck Clarivate.',checked:CHECKED};
for(const record of [...africanRecords,...additionalRecords])indexMap[record.journal.id]=record.index;
export const getIndexing=(j:Journal):Indexing=>indexMap[j.id]??{scopus:null,scie:null,wos:'Unconfirmed',source:null,note:'Current Scopus, SCIE and ESCI coverage has not been established from a captured primary indexing statement in this catalogue. Unconfirmed does not mean unindexed. Recheck the official registries by title or ISSN.',checked:CHECKED};
export function matchesIndex(j:Journal,filter:IndexFilter){const ix=getIndexing(j);switch(filter){case 'all':return true;case 'any':return ix.scopus===true||ix.scie===true||ix.wos==='ESCI';case 'scopus-scie':return ix.scopus===true&&ix.scie===true;case 'scopus-esci':return ix.scopus===true&&ix.wos==='ESCI';case 'wos':return ix.scie===true||ix.wos==='ESCI';case 'three':return ix.scopus===true&&ix.scie===true&&ix.wos==='ESCI';case 'scopus':return ix.scopus===true;case 'scie':return ix.scie===true;case 'esci':return ix.wos==='ESCI';case 'unconfirmed':return ix.scopus===null||ix.scie===null;default:return false;}}
export type RegionFilter='all'|'africa'|'nigeria'|'other-africa'|'unclassified';
export function matchesGeography(j:Journal,region:RegionFilter,country='all'){const base=j.geography;return (country==='all'||base?.country===country)&&(region==='all'||region==='africa'&&base?.region==='Africa'||region==='nigeria'&&base?.country==='Nigeria'||region==='other-africa'&&base?.region==='Africa'&&base.country!=='Nigeria'||region==='unclassified'&&!base);}
export const journals:Journal[]=[...originalJournals,...technologyJournals,ieeeAccess,...africanRecords.map(r=>r.journal),...additionalRecords.map(r=>r.journal)].map(j=>({...j,category:j.category??categoryMap[j.id]??'Multidisciplinary research',issn:j.issn??(j.id==='air'?'1573-7462':j.id==='bmc'?'1472-6947':undefined)}));
export const categories=Array.from(new Set(journals.map(j=>j.category!))).sort();
export const publishers=Array.from(new Set(journals.map(j=>j.publisher))).sort();
export const countries=Array.from(new Set(journals.flatMap(j=>j.geography?[j.geography.country]:[]))).sort();
export const catalogueStats={total:journals.length,any:journals.filter(j=>matchesIndex(j,'any')).length,both:journals.filter(j=>getIndexing(j).scopus===true&&getIndexing(j).scie===true).length,scopus:journals.filter(j=>matchesIndex(j,'scopus')).length,scie:journals.filter(j=>matchesIndex(j,'scie')).length,esci:journals.filter(j=>matchesIndex(j,'esci')).length,africa:journals.filter(j=>matchesGeography(j,'africa')).length,nigeria:journals.filter(j=>matchesGeography(j,'nigeria')).length,africanEligible:journals.filter(j=>matchesGeography(j,'africa')&&matchesIndex(j,'any')).length,apcs:journals.filter(j=>j.apc!==null).length,decisionTimes:journals.filter(j=>j.days!==undefined).length,publishers:publishers.length};
