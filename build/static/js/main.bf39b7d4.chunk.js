(this.webpackJsonpblog_linup_game_demo=this.webpackJsonpblog_linup_game_demo||[]).push([[0],{13:function(e,t,a){e.exports=a.p+"static/media/map-1.df33bcfe.png"},14:function(e,t,a){e.exports=a.p+"static/media/map-2.e5f72aad.png"},15:function(e,t,a){e.exports=a.p+"static/media/map-3.3ce7a3b4.png"},16:function(e,t,a){e.exports=a(37)},36:function(e,t,a){},37:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),o=a(12),r=a.n(o),i=a(1),l=a(5),c=a(3),d=a(2),m=a(4),u=a(8),p=a.n(u),b=a(7),g=a.n(b),f=function(e){function t(){return Object(i.a)(this,t),Object(c.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.styles,t=parseInt(e.transform.replace("rotate(","").replace("deg)",""),10)-180,a={left:e.left+55,top:e.top+46,transform:e.transform},n={left:e.left+58,top:e.top+46,transform:"rotate("+t+"deg)"};return s.a.createElement("div",{id:"boat-layer"},s.a.createElement("div",{id:"boat",style:e}),s.a.createElement("div",{id:"shooter-1",className:"shooter",style:a}),s.a.createElement("div",{id:"shooter-1-twin",className:"shooter",style:n}))}}]),t}(n.Component),h=a(6),y=a.n(h),v=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(c.a)(this,Object(d.a)(t).call(this,e))).debounceAction=y()(a._handleClick,500),a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"_handleClick",value:function(){this.props.onClick&&this.props.onClick()}},{key:"render",value:function(){var e=this,t=this.props,a=t.classes,n=t.disabled,o=t.id,r=t.label,i=t.styles;return s.a.createElement("button",{className:"button-"+r.replace(/[^a-zA-Z0-9]/g,"").toLowerCase()+(a?" "+a:""),disabled:n||!1,id:o||"button-"+r.replace(/[^a-zA-Z0-9]/g,"").toLowerCase(),onClick:function(){return e.debounceAction()},style:i||null},r)}}]),t}(n.Component),E=a(9),k=a.n(E),x=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(c.a)(this,Object(d.a)(t).call(this,e))).debounceAction=y()(a._handleAction,50),k.a.config({left:function(){"aim"===a.props.ready?a.debounceAction("keypress","left"):!0!==a.props.disabled.w&&a.debounceAction("click","w")},right:function(){"aim"===a.props.ready?a.debounceAction("keypress","right"):!0!==a.props.disabled.e&&a.debounceAction("click","e")},up:function(){"aim"===a.props.ready?a.debounceAction("click","fire"):!0!==a.props.disabled.n&&a.debounceAction("click","n")},down:function(){"aim"!==a.props.ready&&!0!==a.props.disabled.s&&a.debounceAction("click","s")}}),a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"_handleAction",value:function(e,t){"click"!==e?"keypress"!==e?"rotate"===e&&this.props.handleRotate(t):this.props.handleKeyPress(t):this.props.onClick(t)}},{key:"render",value:function(){var e=this,t=this.props,a=t.disabled,n=t.map,o=t.ready,r=t.stage;return s.a.createElement("div",Object.assign({id:"controls"},k.a.events),s.a.createElement("div",{className:"label"},"Move"),s.a.createElement("div",{id:"dpad",className:"stage-".concat(r," ").concat(1===n&&1===r?" start":" ")},s.a.createElement("div",{className:"blank"},"\xa0"),s.a.createElement(v,{classes:"up",disabled:!0===a.n?"disabled":null,label:2===r?"forward":"up",onClick:function(){return e.debounceAction("click","n")}}),s.a.createElement("div",{className:"blank"},"\xa0"),s.a.createElement(v,{classes:"left",disabled:2===r||!0===a.w?"disabled":null,label:"left",onClick:function(){return e.debounceAction("click","w")}}),s.a.createElement("div",{className:"blank center"},"Move"),s.a.createElement(v,{classes:"right",disabled:2===r||!0===a.e?"disabled":null,label:"right",onClick:function(){return e.debounceAction("click","e")}}),s.a.createElement("div",{className:"blank"},"\xa0"),s.a.createElement(v,{classes:"down",disabled:!0===a.s?"disabled":null,label:2===r?"back":"down",onClick:function(){return e.debounceAction("click","s")}}),s.a.createElement("div",{className:"blank"},"\xa0")),s.a.createElement("div",{className:"label"},"Turn"),s.a.createElement("div",{id:"turn"},s.a.createElement(v,{classes:"rotate left",label:"Rotate Left",onClick:function(){return e.debounceAction("rotate","left")}}),s.a.createElement(v,{classes:"rotate right",label:"Rotate Right",onClick:function(){return e.debounceAction("rotate","right")}})),s.a.createElement(v,{classes:"fire-button "+o,id:"fire-button",label:"Found It",onClick:function(){return e.debounceAction("click","fire")}}))}}]),t}(n.Component),w=function(e){function t(){return Object(i.a)(this,t),Object(c.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=null;return e=2===parseInt(this.props.stage,10)&&1===parseInt(this.props.current,10)?{display:"none"}:{display:"block"},s.a.createElement("div",{id:this.props.name,className:"target target-stage-".concat(this.props.stage," target-").concat(this.props.name),style:e},"X")}}]),t}(n.Component),A=a(13),_=a.n(A),C=a(14),I=a.n(C),O=a(15),M=a.n(O),B=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(c.a)(this,Object(d.a)(t).call(this,e))).componentDidMount=function(){a._loadImage(),document.addEventListener("keypress",a._keyboardPress)},a.componentDidUpdate=function(e){if(e.map!==a.props.map){var t=document.getElementById("shooter-1"),n=document.getElementById("shooter-1-twin"),s=document.getElementById("shooter-2"),o=document.getElementById("shooter-2-twin");a._loadImage(),s.parentNode.removeChild(t),o.parentNode.removeChild(n),s.style.width=0,o.style.width=0,s.setAttribute("class","shooter"),o.setAttribute("class","shooter"),s.setAttribute("id","shooter-1"),o.setAttribute("id","shooter-1-twin"),a._resetMapState()}},a._doItForMe=function(){var e,t,n,s,o,r;switch(a.props.map){case 1:e=420,t=650,n="rotate(101deg)";break;case 2:e=340,t=460,n="rotate(133deg)";break;case 3:e=320,t=668,n="rotate(121deg)"}e&&t&&n&&(a._onClickMessage(),a.setState({boat:{top:e,left:t,transform:n}}),setTimeout((function(){a._onClickDPad("fire-auto")}),1500),setTimeout((function(){switch(a._onClickMessage(),a.props.map){case 1:s=343,o=662,r="rotate(20.5deg)";break;case 2:s=340,o=460,r="rotate(223.5deg)";break;case 3:s=423,o=606,r="rotate(33.5deg)"}a.setState({boat:{top:s,left:o,transform:r}})}),3800),setTimeout((function(){a._onClickDPad("fire-auto")}),5300))},a._getCorrectRotation=function(e){var t=e-360*parseInt(e/360,10);return t>0?t>180?t-180-180:t:t<-180?t+180+180:t},a._getDegrees=function(){var e=0;try{e=parseInt(a.state.boat.transform.substring(a.state.boat.transform.indexOf("(")+1,a.state.boat.transform.indexOf("deg")),10)}catch(t){e=0}return e},a._getDirection=function(e){return 0===(e=a._getCorrectRotation(e))?"w":e>0&&e<90?"nw":90===e?"n":e>90&&e<180?"ne":180===e?"e":e>-180&&e<-90?"se":-90===e?"s":e>-90&&e<0?"sw":void 0},a._getPixel=function(e,t){var a=document.getElementById("map-layer").getContext("2d").getImageData(e-1,t-1,1,1).data;return("000000"+(a[0]<<16|a[1]<<8|a[2]).toString(16)).slice(-6)},a._handleKeyPress=function(e){var t=document.getElementById("boat").getAttribute("style"),n=g()(a.state),s=parseInt(t.substring(t.indexOf("(")+1,t.indexOf("deg")),10);if(a.message.getAttribute("class").indexOf("active")<0){switch(e){case"left":s-=a.multiplier/4;break;case"right":s+=a.multiplier/4}document.getElementById("boat").setAttribute("class","moving"),setTimeout((function(){document.getElementById("boat")&&document.getElementById("boat").removeAttribute("class")}),2e3),n.boat.transform="rotate("+s+"deg)",a.setState(n)}},a._handleRotate=function(e){a._handleKeyPress(e)},a._isLandCollision=function(e,t){return 2===a.state.stage&&(e=parseInt(e,10),t=parseInt(t,10)),"ffffff"!==a._getPixel(e,t)},a._keyboardPress=function(e){"l"===e.key?a._handleRotate("left"):"r"===e.key?a._handleRotate("right"):"Enter"===e.key&&a._onClickDPad("fire")},a._loadImage=function(){var e=new Image,t=a.canvas.getContext("2d");t.clearRect(0,0,a.canvasWidth,a.canvasHeight),e.onload=function(){t.drawImage(e,0,0,a.canvasWidth,a.canvasHeight)},e.src=1===a.props.map?_.a:2===a.props.map?I.a:M.a,e.width=a.canvasWidth,e.height=a.canvasHeight},a._moveBoat=function(e){var t=document.getElementById("boat").getBoundingClientRect(),n=g()(a.state);document.getElementById("boat").setAttribute("class","moving"),setTimeout((function(){document.getElementById("boat")&&document.getElementById("boat").removeAttribute("class")}),2e3);var s,o,r,i,l,c,d,m=n.boat.top,u=n.boat.left,p=a.multiplier;1===a.state.stage&&(p=a.multiplier+10);var b={n:{x:u+t.width/4,y:m-p},e:{x:u+p+t.width/4,y:m+t.height/4},s:{x:u+t.width/4,y:m+p+t.height/2},w:{x:u-p,y:m+t.height/4}};if(2===a.state.stage&&("n"===e||"s"===e)){var f=document.getElementById("shooter-1").getAttribute("style");r=parseInt(f.substring(f.indexOf("(")+1,f.indexOf("deg")),10),c=a._getDirection(r),d=r>=0?a._getDirection(-180+r):a._getDirection(180+r),o=Math.abs(r)>=90?180-Math.abs(r):Math.abs(r),l=Math.abs(o)*(Math.PI/180),i=Math.sin(l)*p,s=Math.cos(l)*p,e="n"===e?a._getDirection(r):r>=0?a._getDirection(-180+r):a._getDirection(180+r)}switch(e){case"n":m-=p;break;case"s":m+=p;break;case"w":u-=p;break;case"e":u+=p;break;case"ne":m-=i,u+=s;break;case"nw":m-=i,u-=s;break;case"se":m+=i,u+=s;break;case"sw":m+=i,u-=s}2===a.state.stage&&(b.ne={x:u+s,y:m-i},b.nw={x:u-s,y:m-i},b.se={x:u+s,y:m+i},b.sw={x:u-s,y:m+i}),n.boat.top=m,n.boat.left=u,1===a.state.stage?(n.disabled.n=m<=a.minY||a._isLandCollision(b.n.x,b.n.y,"n"),n.disabled.e=u>=a.maxX||a._isLandCollision(b.e.x,b.e.y,"e"),n.disabled.s=m>=a.maxY||a._isLandCollision(b.s.x,b.s.y,"s"),n.disabled.w=u<=a.minX||a._isLandCollision(b.w.x,b.w.y,"w")):(n.disabled.n=a._isLandCollision(b[c].x,b[c].y),n.disabled.e=!0,n.disabled.w=!0,n.disabled.s=a._isLandCollision(b[d].x,b[d].y)),!0===n.disabled.n&&!0===n.disabled.s&&!0===n.disabled.w&&!0===n.disabled.e&&(n=a.props.mapState),a.setState(n)},a._onClickDPad=function(e){var t=document.getElementById("boat"),n=document.getElementById("shooter-"+a.state.stage),s=document.getElementById("shooter-"+a.state.stage+"-twin");if(document.getElementById("dpad")&&(document.getElementById("dpad").setAttribute("class","stage-"+a.state.stage),a.message.getAttribute("class").indexOf("active")<0))switch(e){case"fire":case"fire-auto":n.style.top=parseInt(t.style.top,10)+46+"px",n.style.left=parseInt(t.style.left,10)+55+"px",s.style.top=parseInt(t.style.top,10)+46+"px",s.style.left=parseInt(t.style.left,10)+58+"px",n.setAttribute("class","shooter fire"),a.audioFire.audioEl.play(),a._onFire(a.state.stage,e);break;default:a._moveBoat(e)}},a._onClickMessage=function(){if(a.message){var e=a.message.getElementsByTagName("p");a.message.setAttribute("class","message active fadeOut animated"),setTimeout((function(){a.message&&(e[0].innerText=null,a.message.setAttribute("class","message"))}),750)}},a._onFire=function(e,t){var n=g()(a.state),s=document.getElementById("boat-layer"),o=document.getElementById("map-layer").getBoundingClientRect(),r=document.getElementById("shooter-"+a.state.stage),i=document.getElementById("shooter-"+a.state.stage+"-twin"),l=document.getElementsByClassName("target-stage-"+e),c=a.message.getElementsByTagName("p"),d=parseInt(n.boat.transform.replace("rotate(","").replace("deg)",""),10),m=a._getDirection(d);if(a.message.getAttribute("class").indexOf("active")>=0||s.getAttribute("class"))return!1;s.setAttribute("class","shooting"),c[0].innerText=null;var u=0,p=[],b={},f=setInterval((function(){u+=6,r.style.width=u+"px",i.style.width=u+"px";var g=i.getBoundingClientRect(),h=r.getBoundingClientRect();switch(m){case"w":case"nw":case"n":b={y1:g.top-o.top,x1:g.left,y2:h.bottom-o.top,x2:h.right};break;case"e":case"se":case"s":b={y1:g.bottom-o.top,x1:g.right,y2:h.top-o.top,x2:h.left};break;case"ne":case"sw":b={y1:g.top-o.top,x1:g.right,y2:h.bottom-o.top,x2:h.left}}for(var y=0;y<l.length;y++){var v=l[y].getBoundingClientRect(),E={y:v.top-o.top+v.height/2,x:v.left+v.width/2},k=v.width;!0===(E.y>=b.y1-k&&E.y<=b.y1+k&&E.x>=b.x1-k&&E.x<=b.x1+k||E.y>=b.y2-k&&E.y<=b.y2+k&&E.x>=b.x2-k&&E.x<=b.x2+k)&&-1===p.indexOf(l[y])&&p.push(l[y])}if(b.y1>o.bottom&&b.y2<0||b.y2>o.bottom&&b.y1<0||b.x1<0&&b.x2>o.right||b.x2<0&&b.x1>o.right||u>1333)if(clearInterval(f),p.length===l.length&&0!==p.length){if(1===e){c[0].innerText="You are in sight of the first location. Now line up with the other two landmarks!",a.message&&a.message.setAttribute("class","message active success stage-"+e+" "+t+" fadeIn animated"),n.stage=2,n.disabled.n=!1,n.disabled.e=!0,n.disabled.w=!0,n.disabled.s=!1;var x=s.getElementsByClassName("shooter")[0].cloneNode(!0),w=s.getElementsByClassName("shooter")[1].cloneNode(!0);r.setAttribute("id","shooter-2"),r.setAttribute("class","shooter"),r.setAttribute("style","width: 0px; transform: rotate("+d+"deg); bottom: "+a.state.boat.bottom+"px; right:"+a.state.boat.right+"px"),i.setAttribute("id","shooter-2-twin"),i.setAttribute("class","shooter"),i.setAttribute("style","width: 0px; transform: rotate("+d+"deg); bottom: "+a.state.boat.bottom+"px; right:"+a.state.boat.right+"px"),s.appendChild(x),s.appendChild(w)}else c[0].innerText="You found it! Drop your line, it\u2019s time to fish.",a.message&&document.getElementById("boat")&&(a.message.setAttribute("class","message active success stage-"+e+"a map-"+a.props.map+" fadeIn animated"),document.getElementById("boat").setAttribute("class","boat found"),setTimeout((function(){document.getElementById("boat")&&document.getElementById("boat").setAttribute("class","boat found"),c[0].innerText=a.props.map<=2?"Would you like to try the next map?":"You've found all the \xe9et. Thanks for playing!",a.message&&a.message.setAttribute("class","message active success stage-"+e+" map-"+a.props.map+" fadeIn animated")}),4e3));a.setState(n),s.removeAttribute("class")}else{if(c[0].innerText="Oops! You missed. Keep trying.",a.message&&r&&i){a.message.setAttribute("class","message active fail stage-"+e+" fadeIn animated"),r.style.width=0,i.style.width=0,r.setAttribute("class","shooter"),i.setAttribute("class","shooter");for(var A=0;A<l.length;A++)l[A].setAttribute("style","")}s.removeAttribute("class")}}),.001)},a._resetMapState=function(){a.setState(a.props.mapState)},a.render=function(){var e=a._getDegrees();return s.a.createElement("div",{className:"wrapper-game"},s.a.createElement(x,{handleKeyPress:a._handleKeyPress,handleRotate:a._handleRotate,onClick:a._onClickDPad,disabled:a.state.disabled,ready:a.state.ready,rotation:a.state.boat.transform,stage:a.state.stage,map:a.props.map}),s.a.createElement("canvas",{ref:function(e){a.canvas=e},id:"map-layer",width:a.canvasWidth,height:a.canvasHeight}),s.a.createElement("div",{id:"map",className:"activity-content animated map-".concat(a.props.map)},s.a.createElement(w,{name:"clue1",stage:"1",current:a.state.stage}),s.a.createElement(w,{name:"clue2",stage:"1",current:a.state.stage}),s.a.createElement(w,{name:"clue3",stage:"2",current:a.state.stage}),s.a.createElement(w,{name:"clue4",stage:"2",current:a.state.stage}),s.a.createElement(f,{styles:a.state.boat,stage:a.state.stage,degrees:a._getCorrectRotation(e)}),s.a.createElement("div",{id:"air-layer"}),s.a.createElement("div",{ref:function(e){a.message=e},className:"message"},s.a.createElement("p",null),s.a.createElement(v,{label:"Ok",onClick:function(){a._onClickMessage()}}),s.a.createElement(v,{label:"Do It For Me",onClick:function(){return a._doItForMe()}}),s.a.createElement(v,{label:"Next Map",onClick:function(){a.props.updateMap(a.props.map+1)}}),s.a.createElement(v,{label:"Restart",onClick:function(){return a.props.updateMap(1)}}))),s.a.createElement(p.a,{src:"/assets/audio/lineup-water.mp3",autoPlay:!0,controls:!1,loop:!0,volume:.3}),s.a.createElement(p.a,{ref:function(e){a.audioFire=e},src:"/assets/audio/lineup-fire.mp3",autoPlay:!1,controls:!1,controlsList:"nodownload"}))},a.canvasWidth=900,a.canvasHeight=680,a.minX=20,a.maxX=800,a.minY=20,a.maxY=580,a.multiplier=30,a.state=a.props.mapState,a}return Object(m.a)(t,e),t}(n.Component),j=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(c.a)(this,Object(d.a)(t).call(this,e))).debounceAction=y()(a._handleClick,500),a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"_handleClick",value:function(e){"info"===e&&this.props.infoClick()}},{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:"header"},s.a.createElement("h1",null,this.props.title),s.a.createElement("em",null,"A game developed for"," ",s.a.createElement("a",{href:"https://www.sealaskaheritage.org/",target:"_blank",rel:"noopener noreferrer"},"The Sealaska Heritage Institute")," ","by"," ",s.a.createElement("a",{href:"https://interactiveknowledge.com",target:"_blank",rel:"noopener noreferrer"},"Interactive Knowledge"),". All rights reserved."),s.a.createElement("div",{className:"info",onClick:function(){return e.debounceAction("info")}},"How to Play"))}}]),t}(n.Component),N=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(c.a)(this,Object(d.a)(t).call(this,e)))._handleClick=function(e){"close"===e&&a.props.close()},a.debounceAction=y()(a._handleClick,500),a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return s.a.createElement("div",{id:"modal",className:"modal"},s.a.createElement("div",{id:"modal-foreground",className:"modal-foreground"},s.a.createElement("div",{className:"close",onClick:function(){return e.debounceAction("close")}},"Close"),s.a.createElement("div",{id:"modal-inner",className:"modal-inner"},s.a.createElement("h1",null,"How To Play This Game"),s.a.createElement("div",{className:"text"},s.a.createElement("p",null,"Drive your boat with the \u201c",s.a.createElement("strong",null,"MOVE"),"\u201d control or use the arrow keys."),s.a.createElement("p",null,"Rotate your boat with the \u201c",s.a.createElement("strong",null,"TURN"),"\u201d control or \u201c",s.a.createElement("strong",null,"L"),"\u201d and \u201c",s.a.createElement("strong",null,"R"),"\u201d keys."," "),s.a.createElement("p",null,"When you are positioned for the line-up, press the \u201c",s.a.createElement("strong",null,"FOUND IT"),"\u201d or \u201c",s.a.createElement("strong",null,"ENTER"),"\u201d key.")),s.a.createElement(v,{label:"Ok",onClick:function(){e.debounceAction("close")}}))))}}]),t}(n.Component),T={maps:[{boat:{top:580,left:800,transform:"rotate(45deg)"},disabled:{n:!1,e:!0,s:!0,w:!1},ready:"ready",stage:1},{boat:{top:580,left:220,transform:"rotate(135deg)"},disabled:{n:!1,e:!1,s:!0,w:!0},ready:"ready",stage:1},{boat:{top:580,left:800,transform:"rotate(0deg)"},disabled:{n:!1,e:!0,s:!0,w:!1},ready:"ready",stage:1}]},D=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,s=new Array(n),o=0;o<n;o++)s[o]=arguments[o];return(a=Object(c.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(s)))).state={map:1,mapState:T.maps[0]},a.componentDidMount=function(){a._updateMap(1)},a._closeModal=function(){var e=document.getElementById("modal");e.setAttribute("class","fadeOut animated modal"),setTimeout((function(){e&&e.setAttribute("style","display:none;")}),1e3)},a._loadSky=function(){var e=document.getElementById("air-layer"),t=Math.floor(3*Math.random())+1,n=Math.floor(2*Math.random())+1;if(e){e.innerText=null;for(var s=function(t){var a=document.createElement("div"),n=Math.floor(780*Math.random()),s=Math.floor(900*Math.random()),o=Math.floor(21*Math.random()+40),r=Math.floor(Math.random()*(1e3-n+1)+n);a.setAttribute("class","cloud cloud-"+(Math.floor(3*Math.random())+1)),a.setAttribute("style","top: "+n+"px; left: "+s+"px; transition: all "+o+"s linear;"),e.appendChild(a),setTimeout((function(){a&&a.setAttribute("style","top: "+r+"px; left: 1900px; transition: all "+o+"s linear;")}))},o=0;o<t;o++)s();for(var r=function(t){var a=document.createElement("div"),n=Math.floor(780*Math.random()),s=Math.floor(900*Math.random()),o=Math.floor(21*Math.random()+40),r=Math.random()<.51?-200:1e3,i=Math.random()<.51?-200:1e3,l=null;n<100&&(n=200),r>0&&i>0?l=-145:r>0&&i<0?l=-45:r<0&&i>0?l=145:r<0&&i<0&&(l=45),a.setAttribute("class","bird bird-"+(Math.floor(3*Math.random())+1)),a.setAttribute("style","top: "+n+"px; left: "+s+"px; transform: rotate("+l+"deg);"),e.appendChild(a),setTimeout((function(){a&&a.setAttribute("style","top: "+r+"px; left: "+i+"px; transform: rotate("+l+"deg); transition: all "+o+"s linear;")}),500)},i=0;i<n;i++)r()}else setTimeout((function(){document.getElementById("air-layer")&&a._loadSky()}),500)},a._getModal=function(){var e=document.getElementById("modal");e.setAttribute("style","display:block;"),e.setAttribute("class","fadeIn animated modal")},a._updateMap=function(e){a.setState({started:!0,map:e,mapState:T.maps[e-1]});var t=document.getElementsByClassName("message");t.length>0&&(t[0].setAttribute("class","message active fadeOut animated"),setTimeout((function(){t&&t[0].setAttribute("class","message")}),750)),document.getElementById("boat").setAttribute("class",""),a._loadSky()},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:"lineup-game"},s.a.createElement("div",{className:"activity-content animated activity-lineup activity-map-"+this.state.map},s.a.createElement(j,{title:"Find a Line-Up",infoClick:function(){return e._getModal(0,!1)}}),this.state.mapState&&s.a.createElement(B,{map:this.state.map,updateMap:this._updateMap,mapState:this.state.mapState}),s.a.createElement(N,{close:function(){e._closeModal()}})))}}]),t}(n.Component);a(36);var R=document.getElementById("root");r.a.render(s.a.createElement((function(){return s.a.createElement("div",{className:"App"},s.a.createElement(D,null))}),null),R)}},[[16,1,2]]]);
//# sourceMappingURL=main.bf39b7d4.chunk.js.map