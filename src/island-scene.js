import * as T from './vendor/three.module.js';
import {SVGRenderer} from './vendor/SVGRenderer.js';
export function mountIsland(host,{world='football',avatar={},growth=0,decor='flowers'}={}){
 let renderer,soft=false;try{renderer=new T.WebGLRenderer({alpha:true,antialias:true,powerPreference:'low-power'});}catch{renderer=new SVGRenderer();soft=true;}renderer.setPixelRatio(Math.min(devicePixelRatio,1.5));host.replaceChildren(renderer.domElement);renderer.domElement.setAttribute('role','img');renderer.domElement.setAttribute('aria-label','Dreidimensionale Abenteuerinsel mit Zuhause, Kugelbahn und Picknickgarten');host.dataset.renderer=soft?'svg3d':'webgl';
 const scene=new T.Scene(),cam=new T.OrthographicCamera(-7,7,8,-8,.1,60);cam.position.set(10,14,17);cam.lookAt(0,0,0);scene.add(new T.AmbientLight('#ffffff',soft?.65:2));const sun=new T.DirectionalLight('#fff3d4',soft?.45:3);sun.position.set(-5,12,8);scene.add(sun);
 const magical=world==='castle',root=new T.Group();scene.add(root);const mats=new Map();function mat(c){if(!mats.has(c))mats.set(c,new T.MeshStandardMaterial({color:c,roughness:.8}));return mats.get(c);}
 function mesh(g,c,x,y,z,parent=root){const o=new T.Mesh(g,mat(c));o.position.set(x,y,z);parent.add(o);return o;}
 const ball=(x,y,z,r,c,s=[1,1,1],parent=root)=>{const o=mesh(new T.SphereGeometry(r,soft?10:20,soft?7:14),c,x,y,z,parent);o.scale.set(...s);return o;};
 const box=(x,y,z,w,h,d,c,parent=root)=>mesh(new T.BoxGeometry(w,h,d),c,x,y,z,parent);
 const cyl=(x,y,z,r,h,c,r2=r)=>mesh(new T.CylinderGeometry(r2,r,h,soft?24:48),c,x,y,z);
 cyl(0,-.6,0,5.1,1.1,magical?'#9a79bf':'#a47c51',4.8).renderOrder=-30;const grass=mesh(new T.RingGeometry(0,4.85,48,12),magical?'#a5d5bb':'#a8d280',0,.13,0);grass.rotation.x=-Math.PI/2;grass.renderOrder=-20;cyl(0,-1.3,0,3.8,.5,'#718e99',4.4).renderOrder=-40;
 // Winding stepping stones join all three places.
 for(let i=0;i<19;i++){let t=i/18*Math.PI*1.6; cyl(Math.sin(t)*2.8,.17,Math.cos(t)*2.6,.26,.08,'#ffe4ac');}
 // A toy house with a warm rounded doorway and oversized roof.
 box(-1.8,.8,-1.6,1.9,1.5,1.65,magical?'#ffdbd8':'#ffe5b4');const roof=mesh(new T.ConeGeometry(1.65,1.2,4),magical?'#b187e2':'#ef9470',-1.8,2.1,-1.6);roof.rotation.y=Math.PI/4;
 box(-1.8,.6,-.75,.55,1,.06,'#527b8a');for(const x of [-2.42,-1.18])box(x,1.05,-.75,.38,.42,.07,'#b8f3f0');
 if(magical){for(const x of [-3,-.7]){cyl(x,1,-1.8,.32,2,'#fce0d2');mesh(new T.ConeGeometry(.5,.9,12),'#a98be4',x,2.4,-1.8);}}else{box(-1.8,1.95,-1.05,1.25,.15,.08,'#fff4dd');}
 // Kugelbahn station with visibly raised ramps.
 box(2,.35,-1.3,2.2,.4,1.8,'#739cc3');for(let i=0;i<3;i++){const ramp=box(1.3+i*.6,.7+i*.2,-1.3,.45,.2,1.5,['#ffd26f','#eeaa81','#b5a2df'][i]);ramp.rotation.x=.22;}ball(2.5,1.5,-1.7,.23,magical?'#ebbeff':'#fff4dc');
 if(!magical){box(-1.5,.18,1.6,1.5,.05,1.1,'#7ba987');box(-1.5,.23,1.6,.025,.03,1.1,'#fff5dc');for(const z of [1.05,2.15])box(-1.5,.23,z,1.5,.03,.025,'#fff5dc');}
 // Picnic blanket and smiling resident.
 box(.8,.2,2.25,2.1,.08,1.6,magical?'#d8b3e5':'#efa58c');for(let i=0;i<3;i++)cyl(.2+i*.6,.29,2.3,.22,.06,'#fff2d5');
 const pet=new T.Group();pet.position.set(-.8,.2,1.75);root.add(pet);ball(0,.4,0,.47,'#7db8ab',[1,1.1,1],pet);for(const x of [-.18,.18]){ball(x,.56,.4,.12,'#fff8e7',[1,1,1],pet);ball(x,.57,.5,.05,'#294658',[1,1,1],pet);}ball(0,.25,.43,.09,'#e88989',[1,.4,.5],pet);if(magical){for(const x of [-.28,.28])mesh(new T.ConeGeometry(.12,.4,8),'#ffe0a3',x,.96,0,pet);}else{box(0,.99,0,.05,.4,.05,'#b8c8d8',pet);ball(0,1.2,0,.13,'#ffcf7d',[1,1,1],pet);}
 // A miniature of the selected player lives on the island too.
 const hero=new T.Group();hero.position.set(-2.3,.25,.4);root.add(hero);const skin=avatar.skin||'#dfa77a',shirt=avatar.color||'#327ad6';ball(0,.65,0,.27,shirt,[1,1.3,.7],hero);ball(0,1.24,0,.35,skin,[1,1.1,1],hero);ball(0,1.48,-.03,.35,avatar.hairColor||'#684638',[1,.5,1],hero);for(const x of [-.13,.13]){box(x,.2,0,.14,.4,.18,'#405666',hero);ball(x,1.25,.31,.045,'#314350',[1,1.3,1],hero);ball(x*2.5,.65,0,.09,skin,[1,2,1],hero);}if(magical)mesh(new T.ConeGeometry(.36,.52,12),shirt,0,.44,0,hero);if(avatar.headgear==='cap')box(0,1.5,.26,.6,.06,.4,shirt,hero);if(avatar.headgear==='crown'||avatar.headgear==='unicorn')mesh(new T.ConeGeometry(.12,.35,8),'#f5d47d',0,1.84,0,hero);
 // Trees, clouds and decorations, all actual geometry.
 for(const [x,z] of [[-3.6,.4],[3.6,.5],[-2.8,2.6],[.3,-3.8],[2.7,-3]]){cyl(x,.55,z,.12,.9,'#9a7556');ball(x,1.25,z,.7,magical?'#b7a4e1':'#71ad8b',[1,1.3,1]);ball(x+.3,1.4,z,.4,magical?'#d5b4e8':'#98cba1');}
 for(let i=0;i<Math.min(12,3+growth);i++){const t=i*2.4,x=Math.sin(t)*4,z=Math.cos(t)*3.5;if(decor==='crystals')mesh(new T.OctahedronGeometry(.25),'#b6ddf8',x,.5,z);else if(decor==='flags'){box(x,.6,z,.04,1,.04,'#fff1d5');box(x+.17,1,z,.35,.25,.04,'#edab70');}else{cyl(x,.3,z,.025,.3,'#598a6c');ball(x,.55,z,.15,i%2?'#f8d585':'#f4b3c7');}}
 for(const [x,z] of [[-5,-3],[4,-4],[-4,4]])for(let i=0;i<3;i++)ball(x+i*.45,-1.5,z,.6,'#ffffff',[1.4,.65,1]);
 let frame=0,alive=true,dirty=true,quack=0;const joke=()=>{quack=performance.now()+1800;dirty=true;};host.addEventListener("island-joke",joke);const reduced=matchMedia('(prefers-reduced-motion: reduce)').matches;function resize(){const w=host.clientWidth,h=host.clientHeight;renderer.setSize(w,h);const scale=6.1;cam.left=-scale;cam.right=scale;cam.top=scale*h/w;cam.bottom=-scale*h/w;cam.updateProjectionMatrix();dirty=true;}const ro=new ResizeObserver(resize);ro.observe(host);resize();function draw(t){if(!alive)return;frame=requestAnimationFrame(draw);if(document.hidden||soft&&!dirty&&t>quack)return;pet.position.y=.2+(t<quack&&!reduced?Math.abs(Math.sin(t*.012))*.55:0);if(!reduced&&!soft)pet.rotation.y=Math.sin(t*.001)*.15;renderer.render(scene,cam);if(soft)renderer.domElement.style.background='transparent';dirty=false;}frame=requestAnimationFrame(draw);
 return ()=>{alive=false;host.removeEventListener("island-joke",joke);cancelAnimationFrame(frame);ro.disconnect();scene.traverse(o=>o.geometry?.dispose());mats.forEach(m=>m.dispose());renderer.dispose?.();renderer.forceContextLoss?.();};
}
