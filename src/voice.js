import { VOICE_CLIPS } from './voice-clips.js';
let activeAudio=null,utterance=null;
export function stopVoice(){if(activeAudio){activeAudio.pause();activeAudio=null;}window.speechSynthesis?.cancel();utterance=null;}
export function voiceInfo(){return Object.keys(VOICE_CLIPS).length?'Produzierte Sprachaufnahmen verfügbar':'Nele · natürliche HeyGen-Gruppenanleitungen. Einzelaufgaben: optionale Gerätestimme';}
export async function playVoice(text,{enabled=false,explicit=false}={}){
 if(!enabled&&!explicit)return;
 stopVoice();
 const file=VOICE_CLIPS[text];
 if(file){activeAudio=new Audio(file);await new Promise(resolve=>{activeAudio.addEventListener('ended',resolve,{once:true});activeAudio.addEventListener('error',resolve,{once:true});activeAudio.play().catch(resolve);});return;}
 if(!window.speechSynthesis)return;
 const voices=window.speechSynthesis.getVoices().filter(v=>v.lang.startsWith('de'));
 const preferred=voices.find(v=>/natural|premium|neural|enhanced|katja|anna|petra/i.test(v.name))||voices.find(v=>v.lang==='de-DE')||voices[0];
 utterance=new SpeechSynthesisUtterance(text);utterance.lang='de-DE';if(preferred)utterance.voice=preferred;utterance.rate=.96;utterance.pitch=1.02;window.speechSynthesis.speak(utterance);
}
