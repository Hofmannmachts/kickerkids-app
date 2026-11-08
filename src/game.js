const WORDS = [
 {word:'Ball',icon:'⚽',syllables:1,parts:'Ball'},
 {word:'Sonne',icon:'☀️',syllables:2,parts:'Son-ne'},
 {word:'Banane',icon:'🍌',syllables:3,parts:'Ba-na-ne'},
 {word:'Blume',icon:'🌷',syllables:2,parts:'Blu-me'},
 {word:'Hut',icon:'🎩',syllables:1,parts:'Hut'},
 {word:'Tomate',icon:'🍅',syllables:3,parts:'To-ma-te'},
 {word:'Krone',icon:'👑',syllables:2,parts:'Kro-ne'}
];
export function shuffle(values,rng=Math.random){const a=[...values];for(let i=a.length-1;i>0;i--){const j=Math.floor(rng()*(i+1));[a[i],a[j]]=[a[j],a[i]];}return a;}
export function numericOptions(answer,max,rng=Math.random){const pool=Array.from({length:max+1},(_,i)=>i).filter(n=>n!==answer);pool.sort((a,b)=>Math.abs(a-answer)-Math.abs(b-answer));return shuffle([answer,...pool.slice(0,2)],rng);}
export function createRound(type,stage,index,rng=Math.random){
 const school=stage==='school';
 if(type==='count'){const amount=(school?[6,8,10,12,15]:[2,3,4,5,6])[index%5];return {type,answer:amount,amount,options:numericOptions(amount,school?20:10,rng),prompt:'Wie viele siehst du?',hint:'Tippe jedes Teil einmal an. Das letzte Zahlwort sagt dir, wie viele es sind.'};}
 if(type==='sum'){const [a,b]=(school?[[3,2],[5,3],[6,4],[10,3],[10,7]]:[[1,1],[1,2],[2,2],[3,1],[2,3]])[index%5];return {type,a,b,answer:a+b,options:numericOptions(a+b,school?20:5,rng),prompt:`Wie viel ist ${a} plus ${b}?`,hint:'Zähle zuerst die linke Gruppe. Zähle dann mit der rechten Gruppe weiter.'};}
 if(type==='pattern'){const shapes=['●','◆','▲'];const sequence=school&&index>1?['●','◆','▲','●','◆']:index%2===0?['●','◆','●','◆','●']:['▲','●','▲','●','▲'];const answer=school&&index>1?'▲':sequence[1];return {type,sequence,answer,options:shuffle(shapes,rng),prompt:'Was kommt als Nächstes?',hint:school&&index>1?'Die Regel ist: Kreis, Raute, Dreieck. Dann beginnt es wieder.':'Sprich die Formen der Reihe nach. Welche zwei Formen wechseln sich ab?'};}
 if(type==='syllable'){const item=WORDS[(index+(school?2:0))%WORDS.length];return {type,...item,answer:item.syllables,options:shuffle([1,2,3],rng),prompt:`Klatsche das Wort ${item.word}. Wie viele Silben hörst du?`,hint:`Sprich langsam: ${item.parts}. Klatsche zu jeder Sprechsilbe einmal.`};}
 throw new Error('Unbekanntes Spiel');
}
export function initialProgress(){return {sessions:0,stars:0,completed:{}};}
export function completeGame(progress,type){return {...progress,sessions:progress.sessions+1,stars:progress.stars+1,completed:{...progress.completed,[type]:(progress.completed[type]||0)+1}};}
