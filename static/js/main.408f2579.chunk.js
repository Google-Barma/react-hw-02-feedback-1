(this["webpackJsonpreact-hw-02-feedback"]=this["webpackJsonpreact-hw-02-feedback"]||[]).push([[0],[,function(e,t,a){e.exports={btn:"FeedbackButton_btn__2D3gI",stripedShadow:"FeedbackButton_stripedShadow__DLo_c",white:"FeedbackButton_white__2yw6J"}},,,,,,,,,function(e,t,a){e.exports=a(20)},,,,,function(e,t,a){},function(e,t,a){},,,function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(4),l=a.n(r),c=(a(15),a(5)),i=a(6),u=a(7),s=a(9),d=a(8),m=(a(16),a(1)),p=a.n(m),f=a(2),v=a.n(f);Notification.propTypes={onClick:v.a.func.isRequired,type:v.a.string.isRequired},Notification.defaultProps={onClick:function(){},type:"Button"};var b=function(e){var t=e.onClick,a=e.type;return o.a.createElement("button",{type:"button",onClick:t,className:"".concat(p.a.btn," ").concat(p.a.stripedShadow," ").concat(p.a.white)},o.a.createElement("span",null,a))},E=function(e){var t=e.onLeaveFeedback;return o.a.createElement("div",null,o.a.createElement(b,{type:"Good",onClick:function(){return t("good")}}),o.a.createElement(b,{type:"Neutral",onClick:function(){return t("neutral")}}),o.a.createElement(b,{type:"Bad",onClick:function(){return t("bad")}}))},h=function(e){var t=e.title,a=e.children;return o.a.createElement("section",null,o.a.createElement("h2",null,t),a)};h.defaultProps={title:"title"};var k=h,g=(a(19),function(e){var t=e.good,a=e.neutral,n=e.bad,r=e.total,l=e.positivePercentage;return o.a.createElement("ul",null,o.a.createElement("li",null,o.a.createElement("p",null,"Good: ",t)),o.a.createElement("li",null,o.a.createElement("p",null,"Neutral: ",a)),o.a.createElement("li",null,o.a.createElement("p",null,"Bad: ",n)),o.a.createElement("li",null,o.a.createElement("p",null,"Total: ",r)),o.a.createElement("li",null,o.a.createElement("p",null,"Positive feedback: ",l,"%")))});g.defaultProps={good:0,neutral:0,bad:0,total:0,positivePercentage:0};var w=g,y=function(e){var t=e.message;return o.a.createElement("p",null,t)};y.defaultProps={message:"Notification"};var B=y,_=function(e){Object(s.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={good:0,neutral:0,bad:0},e.onLeaveFeedback=function(t){e.setState((function(e){return Object(c.a)({},t,e[t]+1)}))},e.totalFeedBack=function(){var t=e.state;return t.good+t.neutral+t.bad},e}return Object(u.a)(a,[{key:"render",value:function(){var e=this.state,t=e.good,a=e.neutral,n=e.bad,r=this.totalFeedBack(),l=r>0?Math.floor(t/r*100):0;return o.a.createElement("div",{className:"App"},o.a.createElement(k,{title:"Please leave feedback"},o.a.createElement(E,{onLeaveFeedback:this.onLeaveFeedback})),o.a.createElement(k,{title:"Statistics"},r>0?o.a.createElement(w,{good:t,neutral:a,bad:n,total:r,positivePercentage:l}):o.a.createElement(B,{message:"No feedback given"})))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(_,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[10,1,2]]]);
//# sourceMappingURL=main.408f2579.chunk.js.map