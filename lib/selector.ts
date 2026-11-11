import type { Journal } from './journals';
export const dimensions = [
 {id:'medical',label:'Healthcare',weight:1.8,test:/\b(medic\w*|health\w*|clinical|cardi\w*|diagnos\w*|disease\w*|patient\w*|biomedic\w*|cancer|tumou?r\w*|retinopathy|depression|eeg|ecg)\b/i},
 {id:'imaging',label:'Image & video analysis',weight:3,test:/\b(imag\w*|computer vision|video|visual recognition|object detection|segmentation|ultrasound|mri|magnetic resonance|ct|radiolog\w*|fundus|retina\w*|radiomic\w*|x-ray|pathology)\b/i},
 {id:'ai',label:'Artificial intelligence',weight:2,test:/\b(ai|ml|artificial intelligence|machine learning|deep learning|neural\w*|cnn|lstm|tcn|gru|transformer\w*|foundation model\w*|pruning|explainab\w*|mobilenet\w*|xgboost|random forest|llm\w*)\b/i},
 {id:'signals',label:'Signal processing',weight:3,test:/\b(signal processing|dsp|audio|speech|eeg|ecg|emg|ppg|electroencephal\w*|electrocard\w*|physiological signal\w*|biomedical signal\w*|brain.computer)\b/i},
 {id:'informatics',label:'Health informatics',weight:3,test:/\b(informatic\w*|electronic health|ehealth|e-health|telehealth|clinical decision|health information|healthcare system\w*|digital health|hospital system\w*)\b/i},
 {id:'tropical',label:'Infectious diseases',weight:3,test:/\b(tropical|buruli|ebola|infectious|malaria|parasite\w*|vector.borne|outbreak\w*|tuberculosis|neglected tropical)\b/i},
 {id:'cyber',label:'Cybersecurity',weight:3,test:/\b(cyber\w*|intrusion\w*|security|honeypot\w*|ids|ransomware|malware|blockchain|cryptograph\w*|threat\w*|ics)\b/i},
 {id:'energy',label:'Power & energy',weight:3,test:/\b(energ\w*|power system\w*|renewable\w*|grid\w*|solar|wind|upfc|load.flow|voltage\w*|transmission|electrical|330\s?kv)\b/i},
 {id:'software',label:'Software engineering',weight:3,test:/\b(software|requirements|devops|program analysis|programming|source code|code analysis|code generation|code review|defect prediction|software testing|cost estimation|effort estimation|formal verification)\b/i},
 {id:'networks',label:'Networks & communications',weight:3,test:/\b((?:computer|communication|wireless|mobile|sensor) networks?|networking|network management|network traffic|network intrusion|network security|software.defined networks?|network protocols?|telecommunicat\w*|communicat\w*|wireless|5g|6g|mimo|beamform\w*|routing|iot|iiot|internet of things|sensor network\w*)\b/i},
 {id:'cloud',label:'Cloud & distributed computing',weight:3,test:/\b(cloud|fog|edge computing|distributed|parallel|hpc|supercomput\w*|serverless|virtuali[sz]ation|cluster computing|high.performance computing)\b/i},
 {id:'data',label:'Data science & mining',weight:3,test:/\b(data science|data mining|big data|knowledge discovery|knowledge graph\w*|database\w*|data analytics|information retrieval|recommender\w*|recommendation system\w*)\b/i},
 {id:'control',label:'Robotics & control',weight:3,test:/\b(robot\w*|control\w*|automation|autonomous|unmanned|uav|pid|upfc|system identification|reinforcement learning)\b/i},
 {id:'computing',label:'General computing',weight:2.5,test:/\b(comput\w*|algorithm\w*|quantum|complexity|theoretical|automata|compiler\w*)\b/i},
 {id:'innovation',label:'Innovation & development',weight:3,test:/\b(innovation|technology transfer|research and development|industrialisation|industrialization|science policy|technology policy)\b/i},
 {id:'africa',label:'African context',weight:1.3,test:/\b(africa\w*|nigeria\w*|ghana\w*|cameroon\w*|west africa|central africa)\b/i},
 {id:'reliability',label:'Reliability & validation',weight:1.1,test:/\b(reliab\w*|robust\w*|uncertainty|calibrat\w*|validation|generalis\w*|generaliz\w*|interpret\w*|explainab\w*|trustworth\w*)\b/i},
 {id:'deployment',label:'Deployment & translation',weight:1.1,test:/\b(deploy\w*|implement\w*|real.time|readiness|referral|clinical practice|translation\w*|lightweight|embedded|mobile|adaptive control)\b/i}
];
export type Priority='balanced'|'cost'|'open'|'speed';
export type ArticleType='research'|'review'|'systematic';
export type Result={journal:Journal;scope:number;score:number;matched:string[];blocked:string|null;coverage:string;subscriptionRoute:boolean};
export const usdFee=(j:Journal):number|null=>j.knownUsdTotal??j.apc;
export const detect = (topic:string) => dimensions.filter(d=>d.test.test(topic));
export function evaluate(journal:Journal, topic:string, type:ArticleType, priority:Priority,accessRoute='all'):Result {
 const dims=detect(topic); const total=dims.reduce((a,d)=>a+d.weight,0);
 let scope=total ? Math.round(dims.reduce((a,d)=>a+d.weight*(journal.affinities[d.id]||0),0)/total*100) : 0;
 if(!dims.some(d=>!['deployment','reliability','africa'].includes(d.id)))scope=0;
 const core=dims.filter(d=>['medical','imaging','signals','informatics','tropical','cyber','energy','software','networks','cloud','data','control','computing','innovation'].includes(d.id));
 if(core.length && !core.some(d=>(journal.affinities[d.id]||0)>=.5))scope=Math.min(scope,24);
 let blocked:string|null=null;
 if(journal.id==='cose'&&dims.some(d=>d.id==='ai'))blocked='AI/ML moratorium: significant AI/ML contributions are excluded.';
 if(journal.id==='cose'&&/blockchain|cryptograph|steganograph|watermark/i.test(topic))blocked='Cryptology and principal blockchain contributions are excluded.';
 if(journal.review==='invitation'&&type!=='research')blocked='Review articles require an editorial invitation.';
 if(journal.review==='systematic'&&type==='review')blocked='Narrative reviews are not listed; consider a systematic review or another journal.';
 if(journal.id==='jnsps'&&dims.some(d=>['medical','tropical','energy','control'].includes(d.id)))blocked='The journal excludes engineering, medical and biological applications; physical or computer science scope must be established.';
 if(journal.id==='jesa'&&/nigeria/i.test(topic)&&!/(southern africa|south africa|botswana|lesotho|namibia|eswatini|swaziland|zimbabwe|zambia|mozambique|malawi|angola)/i.test(topic))blocked='The journal requires relevance to southern Africa. A Nigeria-only energy study needs a clear southern African contribution.';
 const subscriptionRoute=journal.access==='hybrid'&&!['open','fully'].includes(accessRoute);
 const affordability=subscriptionRoute?75:usdFee(journal)===null?0:Math.max(0,100-usdFee(journal)!/40);
 let score=scope;
 if(priority==='cost')score=Math.round(scope*.8+affordability*.2);
 if(priority==='open')score=Math.round(scope*.8+(journal.access==='open'?100:70)*.2);
 if(priority==='speed')score=Math.round(scope*.9+(journal.days?Math.max(0,100-journal.days*2):0)*.1);
 if(blocked)score=0;
 return {journal,scope,score,blocked,subscriptionRoute,matched:dims.filter(d=>(journal.affinities[d.id]||0)>=.65).map(d=>d.label),coverage:journal.id==='sci-af'?'Partial evidence':usdFee(journal)!==null?'USD fee documented':journal.feeDisplay?'Non-USD fee documented':'Fees to verify'};
}
export function reason(r:Result,priority:Priority):string {
 if(r.blocked)return r.blocked;
 if(r.scope<50)return 'Limited overlap with the detected topic. Check the full scope before considering this candidate.';
 const overlap=r.matched.slice(0,3).join(', ').toLowerCase();
 const extra=priority==='cost'?(r.subscriptionRoute?' A subscription route may help avoid an OA APC; other charges remain to be checked.':usdFee(r.journal)!==null?' Check the quoted author tier and mandatory charges against your budget.':r.journal.feeDisplay?' A local-currency fee is documented; no USD conversion is assumed.':' Current author fees are unknown, so affordability is not established.'):
 priority==='open'?(r.journal.access==='open'?' Fully open access aligns with your access priority.':' Optional open access is available; check its current terms.'):
 priority==='speed'?(r.journal.days?` The publisher reports a ${r.journal.days}-day median first decision, not a publication timeline.`:' A current first-decision metric has not been verified.'):
 (r.journal.access==='hybrid'?' Offers a subscription route alongside open access options.':' Publishes fully open access.');
 return `Scope overlaps with ${overlap || 'the detected subject'}.${extra}`;
}
export function affordable(r:Result,budget:string,unknown:boolean,access:string):boolean{
 if(budget==='')return true;
 const max=Number(budget); if(!Number.isFinite(max)||max<0)return false;
 // A subscription route has no mandatory OA APC. This does not imply zero total charges.
 if(r.journal.access==='hybrid'&&access!=='open')return true;
 const fee=usdFee(r.journal);return fee===null?unknown:fee<=max;
}
