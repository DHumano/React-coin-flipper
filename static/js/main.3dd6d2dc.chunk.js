(this["webpackJsonpcoin-flipper"]=this["webpackJsonpcoin-flipper"]||[]).push([[0],[,,,,,,,,function(e,t,n){e.exports=n(16)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),r=n(7),o=n.n(r),s=(n(13),n(14),n(1)),c=n(2),l=n(3),u=n(5),h=n(4),p=(n(15),function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){return i.a.createElement("div",{className:"Coin"},i.a.createElement("img",{src:this.props.info.imgSrc,alt:this.props.info.side}))}}]),n}(a.Component));var d=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).state={currCoin:null,nFlips:0,nHeads:0,nTails:0},a.handleClick=a.handleClick.bind(Object(l.a)(a)),a}return Object(c.a)(n,[{key:"handleClick",value:function(e){this.flipCoin()}},{key:"flipCoin",value:function(e){var t,n=(t=this.props.coins)[Math.floor(Math.random()*t.length)];this.setState((function(e){return{currCoin:n,nFlips:e.nFlips+1,nHeads:e.nHeads+("heads"===n.side?1:0),nTails:e.nTails+("tails"===n.side?1:0)}}))}},{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("h2",null,"Let's flip a coin!"),this.state.currCoin&&i.a.createElement(p,{info:this.state.currCoin}),i.a.createElement("button",{onClick:this.handleClick},"Flip Me!"),i.a.createElement("p",null,"Out of ",this.state.nFlips," flips, there have been ",this.state.nHeads," ","heads and ",this.state.nTails," tails"))}}]),n}(a.Component);d.defaultProps={coins:[{side:"heads",imgSrc:"https://tinyurl.com/react-coin-heads-jpg"},{side:"tails",imgSrc:"https://tinyurl.com/react-coin-tails-jpg"}]};var f=d;var m=function(){return i.a.createElement("div",{className:"App"},i.a.createElement(f,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(m,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[8,1,2]]]);
//# sourceMappingURL=main.3dd6d2dc.chunk.js.map