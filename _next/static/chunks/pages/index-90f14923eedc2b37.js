(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(e,t,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return o(85)}])},85:function(e,t,o){"use strict";o.r(t);var r=o(5893),i=o(7294),n=o(2729),l=o.n(n);let a=()=>{let[e,t]=(0,i.useState)([[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0]]),[o,n]=(0,i.useState)([[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0]]),[a,d]=(0,i.useState)({startedTime:0,currentTime:0,timer:1}),_=Math.floor((a.currentTime-a.startedTime)*a.timer/1e3);function c(e){d(e=>({...e,startedTime:Date.now()})),d(e=>({...e,currentTime:Date.now()})),e?(d(e=>({...e,timer:1})),console.log("true"),setInterval(function(){d(function(e){return{...e,currentTime:Date.now()}})},1e3)):(console.log("false"),d(e=>({...e,timer:0})))}let s=[[-1,-1,-1,-1,-1,-1,-1,-1,-1],[-1,-1,-1,-1,-1,-1,-1,-1,-1],[-1,-1,-1,-1,-1,-1,-1,-1,-1],[-1,-1,-1,-1,-1,-1,-1,-1,-1],[-1,-1,-1,-1,-1,-1,-1,-1,-1],[-1,-1,-1,-1,-1,-1,-1,-1,-1],[-1,-1,-1,-1,-1,-1,-1,-1,-1],[-1,-1,-1,-1,-1,-1,-1,-1,-1],[-1,-1,-1,-1,-1,-1,-1,-1,-1]],m=[[-1,-1],[0,-1],[1,-1],[1,0],[1,1],[0,1],[-1,1],[-1,0]],f=()=>{t([[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0]]),n([[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0]]),c(!1)},u=e=>{let t=0,r=[...o];for(;t<10;){let o=Math.floor(9*Math.random()),i=Math.floor(9*Math.random());1!==e[o][i]&&1!==r[o][i]&&(r[o][i]=1,t++)}n(r)},x=(t,r)=>{if(3!==e[t][r]){let i=0;if(1!==o[t][r]){for(let e of m){let n=t+e[0],l=r+e[1];void 0!==o[t+e[0]]&&void 0!==o[t+e[0]][r+e[1]]&&1===o[n][l]&&i++}if(0===i)for(let o of(s[t][r]=0,m))void 0!==s[t+o[0]]&&void 0!==s[t+o[0]][r+o[1]]&&0!==s[t+o[0]][r+o[1]]&&3!==e[t+o[0]][r+o[1]]&&(s[t+o[0]][r+o[1]]=0,x(t+o[0],r+o[1]));0!==i&&(s[t][r]=i)}else for(let e=0;e<9;e++)for(let t=0;t<9;t++)1===o[e][t]&&(s[e][t]=11)}};for(let t=0;t<9;t++)for(let o=0;o<9;o++)3===e[t][o]&&(s[t][o]=10),1===e[t][o]&&x(t,o);let b=(r,i)=>{let n=e.map(e=>e.map(e=>e));if(3!==e[i][r]){1===o[i][r]&&alert("爆発！"),n[i][r]=1;let l=e.some(e=>e.some(e=>1===e));l||(u(n),c(!0)),t(n)}},p=(o,r,i)=>{i&&i.preventDefault();let n=e.map(e=>e.map(e=>e));3===n[r][o]?(n[r][o]=0,t(n)):-1===s[r][o]&&(n[r][o]=3,t(n))};return(0,r.jsx)("div",{className:l().container,children:(0,r.jsxs)("div",{className:l().lowboard,children:[(0,r.jsx)("div",{className:l().reset,onClick:f}),(0,r.jsx)("div",{className:l().timer,children:(0,r.jsx)("a",{children:_})}),(0,r.jsx)("div",{className:l().board,children:s.map((e,t)=>e.map((e,o)=>(0,r.jsx)("div",{className:l().cell,style:{borderTopColor:-1===e||10===e?"rgb(255 255 255)":"rgb(74 74 74)",borderRightColor:-1===e||10===e?"rgb(134 134 134)":"rgb(74 74 74)",borderBottomColor:-1===e||10===e?"rgb(134 134 134)":"rgb(74 74 74)",borderLeftColor:-1===e||10===e?"rgb(255 255 255)":"rgb(74 74 74)",borderWidth:-1===e||10===e?"4px":"0.5px"},onClick:()=>b(o,t),onContextMenu:e=>p(o,t,e),children:0!==e&&(0,r.jsx)("div",{className:l().tile,style:{backgroundPosition:"-".concat((e-1)*30,"px"),opacity:-1===e?0:1}})},"".concat(o,"-").concat(t))))})]})})};t.default=a},2729:function(e){e.exports={container:"index_container__gnN1f",main:"index_main__kAcUb",footer:"index_footer__qq_p6",title:"index_title__gEapU",description:"index_description__087sm",code:"index_code__VeCgy",grid:"index_grid__FmmIe",card:"index_card__kAxi6",logo:"index_logo__FcDOZ",lowboard:"index_lowboard__V6t7U",board:"index_board__2d6xe",cell:"index_cell__3W8ZQ",tile:"index_tile__BL_fN",reset:"index_reset__pnorU",timer:"index_timer__azvpY"}}},function(e){e.O(0,[774,888,179],function(){return e(e.s=8312)}),_N_E=e.O()}]);