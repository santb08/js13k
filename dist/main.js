(()=>{"use strict";var t={};t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}();const s=class{constructor(t){this.objectId=Date.now().toString(16),this.transform=t}get x(){return this.transform.x}get y(){return this.transform.y}paint(){throw Error("Not implemented")}setPosition(t){this.transform=t}},o=[[255,255,255],[255,4080,255],[255,255,255]],e=class extends s{constructor(){super({x:0,y:0})}paint(){return o}},n=new class extends class{constructor(){this.canvas=document.createElement("canvas",{id:"game-canvas"}),this.canvas.width=1280,this.canvas.height=720,this.context=this.canvas.getContext("2d"),this.objects=new Map,this.start(),this.context.fillRect(0,0,this.canvas.width,this.canvas.height),document.body.appendChild(this.canvas),this.loopInterval=setInterval(this.loop.bind(this),1e3/60)}add(t){if(!(t instanceof s))throw Error("Not object");console.log("added",t.transform),this.objects.set(t.objectId,t)}loop(){this.objects.forEach((t=>{t.paint(this.context)}))}start(){throw Error("Not implemented")}stop(){clearInterval(this.loopInterval)}}{start(){const t=new e;this.add(t)}loop(){super.loop()}};t.g.game=n})();