(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r(35)}])},35:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return _}});var o=r(5893),i=r(7294);let n=()=>{let[e,t]=(0,i.useState)([[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0]]),[r,o]=(0,i.useState)([[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0]]),[n,l]=(0,i.useState)({startedTime:0,currentTime:0,timer:1}),a=Math.floor((n.currentTime-n.startedTime)*n.timer/1e3);function d(e){l(e=>({...e,startedTime:Date.now()})),l(e=>({...e,currentTime:Date.now()})),e?(l(e=>({...e,timer:1})),console.log("true"),setInterval(function(){l(function(e){return{...e,currentTime:Date.now()}})},1e3)):(console.log("false"),l(e=>({...e,timer:0})))}let _=[[-1,-1,-1,-1,-1,-1,-1,-1,-1],[-1,-1,-1,-1,-1,-1,-1,-1,-1],[-1,-1,-1,-1,-1,-1,-1,-1,-1],[-1,-1,-1,-1,-1,-1,-1,-1,-1],[-1,-1,-1,-1,-1,-1,-1,-1,-1],[-1,-1,-1,-1,-1,-1,-1,-1,-1],[-1,-1,-1,-1,-1,-1,-1,-1,-1],[-1,-1,-1,-1,-1,-1,-1,-1,-1],[-1,-1,-1,-1,-1,-1,-1,-1,-1]],c=[[-1,-1],[0,-1],[1,-1],[1,0],[1,1],[0,1],[-1,1],[-1,0]],s=()=>{t([[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0]]),o([[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0]]),d(!1)},m=e=>{let t=0,i=[...r];for(;t<10;){let r=Math.floor(9*Math.random()),o=Math.floor(9*Math.random());1!==e[r][o]&&1!==i[r][o]&&(i[r][o]=1,t++)}o(i)},f=(t,o)=>{if(3!==e[t][o]){let i=0;if(1!==r[t][o]){for(let e of c){let n=t+e[0],l=o+e[1];void 0!==r[t+e[0]]&&void 0!==r[t+e[0]][o+e[1]]&&1===r[n][l]&&i++}if(0===i)for(let r of(_[t][o]=0,c))void 0!==_[t+r[0]]&&void 0!==_[t+r[0]][o+r[1]]&&0!==_[t+r[0]][o+r[1]]&&3!==e[t+r[0]][o+r[1]]&&(_[t+r[0]][o+r[1]]=0,f(t+r[0],o+r[1]));0!==i&&(_[t][o]=i)}else for(let e=0;e<9;e++)for(let t=0;t<9;t++)1===r[e][t]&&(_[e][t]=11)}};for(let t=0;t<9;t++)for(let r=0;r<9;r++)3===e[t][r]&&(_[t][r]=10),1===e[t][r]&&f(t,r);let u=(o,i)=>{let n=e.map(e=>e.map(e=>e));if(3!==e[i][o]){1===r[i][o]&&alert("爆発！"),n[i][o]=1;let l=e.some(e=>e.some(e=>1===e));l||(m(n),d(!0)),t(n)}},x=(r,o,i)=>{i&&i.preventDefault();let n=e.map(e=>e.map(e=>e));3===n[o][r]?(n[o][r]=0,t(n)):-1===_[o][r]&&(n[o][r]=3,t(n))};return{board:_,onClick:u,leftClick:x,reset:s,displayTime:a}};var l=r(2729),a=r.n(l);let d=()=>{let{board:e,onClick:t,leftClick:r,reset:i,displayTime:l}=n();return(0,o.jsx)("div",{className:a().container,children:(0,o.jsxs)("div",{className:a().lowboard,children:[(0,o.jsx)("div",{className:a().reset,onClick:i}),(0,o.jsx)("div",{className:a().timer,children:(0,o.jsx)("a",{children:l})}),(0,o.jsx)("div",{className:a().board,children:e.map((e,i)=>e.map((e,n)=>(0,o.jsx)("div",{className:a().cell,style:{borderTopColor:-1===e||10===e?"rgb(255 255 255)":"rgb(74 74 74)",borderRightColor:-1===e||10===e?"rgb(134 134 134)":"rgb(74 74 74)",borderBottomColor:-1===e||10===e?"rgb(134 134 134)":"rgb(74 74 74)",borderLeftColor:-1===e||10===e?"rgb(255 255 255)":"rgb(74 74 74)",borderWidth:-1===e||10===e?"4px":"0.5px"},onClick:()=>t(n,i),onContextMenu:e=>r(n,i,e),children:0!==e&&(0,o.jsx)("div",{className:a().tile,style:{backgroundPosition:"-".concat((e-1)*30,"px"),opacity:-1===e?0:1}})},"".concat(n,"-").concat(i))))})]})})};var _=d},2729:function(e){e.exports={container:"index_container__gnN1f",main:"index_main__kAcUb",footer:"index_footer__qq_p6",title:"index_title__gEapU",description:"index_description__087sm",code:"index_code__VeCgy",grid:"index_grid__FmmIe",card:"index_card__kAxi6",logo:"index_logo__FcDOZ",lowboard:"index_lowboard__V6t7U",board:"index_board__2d6xe",cell:"index_cell__3W8ZQ",tile:"index_tile__BL_fN",reset:"index_reset__pnorU",timer:"index_timer__azvpY"}}},function(e){e.O(0,[774,888,179],function(){return e(e.s=8312)}),_N_E=e.O()}]);