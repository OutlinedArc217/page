(function(t){function e(e){for(var s,n,r=e[0],l=e[1],c=e[2],u=0,v=[];u<r.length;u++)n=r[u],Object.prototype.hasOwnProperty.call(i,n)&&i[n]&&v.push(i[n][0]),i[n]=0;for(s in l)Object.prototype.hasOwnProperty.call(l,s)&&(t[s]=l[s]);d&&d(e);while(v.length)v.shift()();return o.push.apply(o,c||[]),a()}function a(){for(var t,e=0;e<o.length;e++){for(var a=o[e],s=!0,r=1;r<a.length;r++){var l=a[r];0!==i[l]&&(s=!1)}s&&(o.splice(e--,1),t=n(n.s=a[0]))}return t}var s={},i={app:0},o=[];function n(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=t,n.c=s,n.d=function(t,e,a){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)n.d(a,s,function(e){return t[e]}.bind(null,s));return a},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],l=r.push.bind(r);r.push=e,r=r.slice();for(var c=0;c<r.length;c++)e(r[c]);var d=l;o.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"28ac":function(t){t.exports=JSON.parse('{"title":"FlyingSky\'s Home","icon":{"darkmode":"brightness-4"}}')},"3b3f":function(t){t.exports=JSON.parse('{"data":[{"href":"https://blog.fsky7.com","key":"Blog","value":"FlyingSky\'s Blog","color":"#2EA9DF"},{"href":"https://space.bilibili.com/32792271","key":"Bilibili","value":"FlyingSky_","color":"#F596AA"},{"href":"https://github.com/FlyingSky-CN","key":"GitHub","value":"@FlyingSky-CN","color":"#787D7B"},{"href":"https://bcom.moe/@flyingsky","key":"Mastodon","value":"@flyingsky@bcom.moe","color":"#2B90D9"}]}')},"54cf":function(t,e,a){"use strict";a("f483")},"56d7":function(t,e,a){"use strict";a.r(e);var s=a("2b0e"),i=a("7496"),o=a("40dc"),n=a("5bc1"),r=a("8336"),l=a("a523"),c=a("132d"),d=a("f6c4"),u=a("f774"),v=a("2fa4"),b=a("2a7f"),f=function(){var t=this,e=t._self._c;return e(i["a"],{class:t.dark?"f-dark":""},[e(o["a"],{staticStyle:{transition:"0s ease background-color, 280ms cubic-bezier(0.4, 0, 0.2, 1) box-shadow"},attrs:{app:"","elevate-on-scroll":"","clipped-left":"",dark:t.dark,color:t.dark?"#121212":"#fff"}},[e(n["a"],{on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}}),e(b["a"],[t._v(t._s(t.header.title))]),e(v["a"]),e(r["a"],{attrs:{icon:""},on:{click:function(e){e.stopPropagation(),t.dark?t.offDarkMode():t.onDarkMode()}}},[e(c["a"],[t._v("mdi-"+t._s(t.header.icon.darkmode))])],1)],1),e(u["a"],{attrs:{floating:"",app:"",clipped:"",dark:t.dark},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[e("f-navbar-list")],1),e(d["a"],{attrs:{dark:t.dark}},[e("f-main-title"),e(l["a"],{staticClass:"f-container"},[e("f-main-about",{attrs:{dark:t.dark}}),e("f-main-chips",{attrs:{dark:t.dark}}),e("f-contact",{attrs:{dark:t.dark}}),e("f-main-site",{attrs:{dark:t.dark}}),e("f-donate",{attrs:{dark:t.dark}}),e("f-footer",{attrs:{dark:t.dark}})],1)],1)],1)},m=[],p=function(t){const e=()=>{console.log("[Dark mode]",!0),t.dark=!0,document.cookie="dark=1;path=/;";var e=document.getElementsByTagName("meta");e["theme-color"].setAttribute("content","#272727")},a=()=>{console.log("[Dark mode]",!1),t.dark=!1,document.cookie="dark=0;path=/;";var e=document.getElementsByTagName("meta");e["theme-color"].setAttribute("content","#f5f5f5")},s=t=>{if(!0===t)e();else{if(!1!==t)return;a()}},i=()=>!!window.matchMedia("(prefers-color-scheme: dark)").matches,o=()=>{var t=document.cookie.replace(/(?:(?:^|.*;\s*)dark\s*=\s*([^;]*).*$)|^.*$/,"$1");return"0"!==t&&("1"===t||null)};window.addEventListener("beforeprint",(function(){t.dark=!1})),window.addEventListener("afterprint",(function(){n()}));const n=()=>{var t=i(),e=o();s(t===e||null===e?t:e)};document.addEventListener("visibilitychange",(function(){n()})),t.onDarkMode=e,t.offDarkMode=a,n()},y=a("8860"),_=a("1baa"),k=function(){var t=this,e=t._self._c;return e(y["a"],{attrs:{shaped:""}},[e(_["a"],{attrs:{color:"primary"},model:{value:t.item,callback:function(e){t.item=e},expression:"item"}},t._l(t.items,(function(t,a){return e("f-navbar-item",{key:a,attrs:{item:t}})})),1)],1)},h=[],x=a("56b0"),g=a("da13"),C=a("1800"),S=a("5d23"),F=function(){var t=this,e=t._self._c;return null===t.item.data?e(g["a"],{attrs:{href:t.item.link}},[e(C["a"],[e(c["a"],{attrs:{color:t.item.color}},[t._v("mdi-"+t._s(t.item.icon))])],1),e(S["a"],[e(S["c"],[t._v(t._s(t.item.text))])],1)],1):e(x["a"],{attrs:{value:"true"},scopedSlots:t._u([{key:"activator",fn:function(){return[e(C["a"],[e(c["a"],{attrs:{color:t.item.color}},[t._v("mdi-"+t._s(t.item.icon))])],1),e(S["a"],[e(S["c"],[t._v(t._s(t.item.text))])],1)]},proxy:!0}])},t._l(t.item.data,(function(a,s){return e(g["a"],{key:s,attrs:{href:a.href,dense:""}},[e(C["a"],[e(c["a"],[t._v("mdi-"+t._s(a.icon))])],1),e(S["a"],[e(S["c"],[t._v(t._s(a.text))])],1)],1)})),1)},w=[],O={props:{item:{type:Object,required:!0}}},P=O,j=a("2877"),M=Object(j["a"])(P,F,w,!1,null,null,null),D=M.exports,N={data:()=>({item:0,items:a("adb4")}),components:{FNavbarItem:D}},B=N,I=Object(j["a"])(B,k,h,!1,null,null,null),T=I.exports,J=function(){var t=this,e=t._self._c;return e(l["a"],{staticClass:"f-home align-center mt-n16",staticStyle:{height:"100vh"}},[e("div",{staticClass:"d-sm-none text-center f-title",staticStyle:{width:"100%"}},[e("div",{staticClass:"f-icon-center"},[e(c["a"],[t._v("mdi-"+t._s(t.icon))])],1),e("div",{staticClass:"text-h3"},[t._v(t._s(t.name))]),e("br"),e("div",{staticClass:"test-subtitle-1"},[t._v(t._s(t.slogan))])]),e("div",{staticClass:"d-none d-sm-block f-title"},[e("div",{staticClass:"text-h3"},[t._v(t._s(t.name))]),e("br"),e("div",{staticClass:"test-subtitle-1"},[t._v(t._s(t.slogan))])]),e("div",{staticClass:"d-none d-sm-block f-icon"},[e(c["a"],[t._v("mdi-"+t._s(t.icon))])],1)])},E=[],q={data(){return a("fd5d")}},L=q,A=(a("91d3"),Object(j["a"])(L,J,E,!1,null,null,null)),H=A.exports,G=a("b0af"),W=a("99d9"),$=function(){var t=this,e=t._self._c;return e(G["a"],{staticClass:"pt-4",staticStyle:{background:"none"},attrs:{dark:t.dark,elevation:"0"}},[e(g["a"],[e(S["a"],[e(S["c"],{staticClass:"headline"},[t._v("关于我")]),e(S["b"],[t._v("About ME")])],1)],1),e(W["c"],{staticClass:"f-text",staticStyle:{"max-width":"400px"}},[t._v(" 这里是 FlyingSky (飞天) "),e("br"),t._v("坐标地球 // 中学生 // 喵呜 "),e("br"),e("br"),t._v(" 喜欢各种折腾，会敲代码，会剪视频，偶尔试着做些音乐。 虽然没有好的设备，但还是喜欢玩摄影。 仰望各界大佬。 认识一下？ 希望能和你一起，理解这世界。 ")])],1)},U=[],K={props:{dark:{type:Boolean,required:!0}}},z=K,R=Object(j["a"])(z,$,U,!1,null,null,null),V=R.exports,Y=a("8212"),Q=a("cc20"),X=function(){var t=this,e=t._self._c;return e("div",{staticClass:"f-chips mx-2"},[t._l(t.shuffle(t.tag),(function(a,s){return e(Q["a"],{key:s,staticClass:"ma-1",attrs:{dark:t.dark}},[e(Y["a"],{attrs:{left:""}},[e(c["a"],[t._v("mdi-"+t._s(a.icon))])],1),t._v(" "+t._s(a.text)+" ")],1)})),t._l(t.shuffle(t.language),(function(a,s){return e(Q["a"],{key:s+t.tag.length,staticClass:"ma-1",attrs:{dark:t.dark}},[e(Y["a"],{style:"background: "+a.color,attrs:{left:""}}),t._v(" "+t._s(a.name)+" ")],1)}))],2)},Z=[],tt={data(){return{tag:a("7988"),language:[]}},methods:{shuffle:function(t){for(var e=t.length,a=0;a<e-1;a++){var s=parseInt(Math.random()*(e-a)),i=t[s];t[s]=t[e-a-1],t[e-a-1]=i}return t}},props:{dark:{type:Boolean,required:!0}}},et=tt,at=(a("54cf"),Object(j["a"])(et,X,Z,!1,null,null,null)),st=at.exports,it=a("62ad"),ot=a("0fd9"),nt=function(){var t=this,e=t._self._c;return e(G["a"],{staticClass:"pt-4 mb-4",staticStyle:{background:"none"},attrs:{dark:t.dark,elevation:"0"}},[e(g["a"],[e(S["a"],[e(S["c"],{staticClass:"headline"},[t._v(t._s(t.title))]),e(S["b"],[t._v(t._s(t.subtitle))])],1)],1),e("div",{staticClass:"px-2 pb-2"},[e(ot["a"],{attrs:{"no-gutters":""}},t._l(t.data,(function(a,s){return e(it["a"],{key:s,staticClass:"px-2",attrs:{cols:"6"}},[e(G["a"],{staticStyle:{background:"none",opacity:".8"},attrs:{outlined:"",elevation:"0",dark:t.dark,href:a.href}},[e(W["d"],{staticClass:"headline",domProps:{textContent:t._s(a.key)}}),e(W["b"],{domProps:{textContent:t._s(a.value)}})],1)],1)})),1)],1)],1)},rt=[],lt={data:()=>a("f9a1"),props:{dark:{type:Boolean,required:!0}}},ct=lt,dt=Object(j["a"])(ct,nt,rt,!1,null,null,null),ut=dt.exports,vt=a("3a2f"),bt=function(){var t=this,e=t._self._c;return e(ot["a"],{staticClass:"mx-2 mt-n2",staticStyle:{opacity:"0.9"},attrs:{"no-gutters":""}},t._l(t.data,(function(a,s){return e(it["a"],{key:s,attrs:{cols:"6",md:"3"}},[e(vt["a"],{attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function({on:s,attrs:i}){return[e(G["a"],t._g(t._b({staticClass:"mx-2 mb-4",style:"background:"+a.color,attrs:{elevation:"0",dark:"",href:a.href,rel:"Mastodon"==a.key?"me":""}},"v-card",i,!1),s),[e(W["d"],[e("span",{staticClass:"title font-weight-light",domProps:{textContent:t._s(a.key)}})])],1)]}}],null,!0)},[e("span",{domProps:{textContent:t._s(a.value)}})])],1)})),1)},ft=[],mt={data:()=>a("3b3f"),props:{dark:{type:Boolean,required:!0}}},pt=mt,yt=Object(j["a"])(pt,bt,ft,!1,null,null,null),_t=yt.exports,kt=function(){var t=this,e=t._self._c;return e(G["a"],{staticClass:"pt-4",staticStyle:{background:"none"},attrs:{dark:t.dark,elevation:"0"}},[e(g["a"],[e(S["a"],[e(S["c"],{staticClass:"headline"},[t._v("赞助我")]),e(S["b"],[t._v("Donate")])],1)],1),e(W["c"],[t._v(" 我目前参与的都是些非盈利项目，你可以选择赞助我，你的支持是我最大的动力。 "),e("br"),t._v("除了下方给出的赞助方式，你也可以直接联系我。 ")]),e(W["a"],[e(r["a"],{staticClass:"ma-2",style:"background: "+t.color+"; color: white;",attrs:{elevation:"0",href:t.link},domProps:{textContent:t._s(t.text)}})],1)],1)},ht=[],xt={data:()=>({color:"#7d61cd",link:"https://afdian.net/@flyingsky",text:"爱发电"}),props:{dark:{type:Boolean,required:!0}}},gt=xt,Ct=Object(j["a"])(gt,kt,ht,!1,null,null,null),St=Ct.exports,Ft=a("169a"),wt=function(){var t=this,e=t._self._c;return e("div",{staticClass:"my-12 px-4 text-caption",staticStyle:{opacity:"0.75"}},[e("b",[t._v("FlyingSky's Website")]),e("br"),t._v("Created by FlyingSky with ♥ since 2017. "),e("br"),e("br"),t._v("© 2017-"+t._s(t.year())+" FlyingSky. "),e(Ft["a"],{attrs:{"max-width":"768px",dark:t.dark},scopedSlots:t._u([{key:"activator",fn:function({on:a,attrs:s}){return[e("a",t._g(t._b({},"a",s,!1),a),[t._v(" 隐私政策 Privacy Policy. ")])]}}]),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[e(G["a"],{attrs:{dark:t.dark}},[e("f-privacy-policy"),e(W["a"],[e(v["a"]),e(r["a"],{attrs:{color:"primary",text:""},on:{click:function(e){t.dialog=!1}}},[t._v(" I accept ")])],1)],1)],1)],1)},Ot=[],Pt=function(){var t=this,e=t._self._c;return e("div",[e(W["d"],{staticClass:"headline lighten-2 pt-5"},[t._v(" 隐私政策 / Privacy Policy ")]),e(W["c"],{staticClass:"pb-0 mb-n2"},[e("div",{staticClass:"text-h6 mb-2"},[t._v("总则")]),e("div",{staticClass:"text-body-2 mb-2"},[t._v("感谢您访问 "),e("a",{staticStyle:{"text-decoration":"none"},attrs:{href:"https://fsky7.com"}},[t._v("FlyingSky's Website")]),t._v("（以下简称「本站」）。尽管我们在您浏览的过程中可能会收集信息以改善应用程序和服务质量，但是我们非常重视您的隐私保护和个人信息保护。为了更好的保护您的隐私，我们提供了本隐私政策声明，描述我们收集、处理、存储和使用您的个人信息的方式。 ")]),e("div",{staticClass:"text-h6 mb-2"},[t._v("关于修订")]),e("div",{staticClass:"text-body-2 mb-2 px-4"},[t._v("最后更新日期：2021 年 02 月 10 日")]),e("div",{staticClass:"text-body-2 mb-2"},[t._v(" 对于本隐私政策，我们保留在任何时间修改，修订或更新本政策的权利。因此您应该定期访问此网页，检查本政策的任何修改。最后更新日期的变化表示该政策已被更新或编辑，更新或编辑的版本在发布后立即取代先前任何版本。 ")]),e("div",{staticClass:"text-body-2 mb-2"},[t._v("您的浏览器和运营商等内容分发提供商可能会出于节省带宽的或其他因素缓存我们的页面，在这种情况下倘若导致了您看到的页面内容和实际不符，所以，我们规定以该项目的 "),e("a",{staticStyle:{"text-decoration":"none"},attrs:{href:"https://github.com/FlyingSky-CN/FSky7.Home"}},[t._v("GitHub repository")]),t._v(" 中的更改为准，你也可以在其中检索该条款修改记录。")]),e("div",{staticClass:"text-h6 mb-2"},[t._v("名词定义")]),e("div",{staticClass:"text-body-2 mb-2"},[t._v("出于叙述方便的需要，我们在这里对政策中可能涉及到的名词进行定义。")]),e("div",{staticClass:"text-subtitle-1 mb-2"},[t._v("个人信息 (Personal Information)")]),e("div",{staticClass:"text-body-2 mb-2"},[t._v(" 个人信息，指以电子形式或其他形式记录的、可用于识别或联系特定个人的数据。如果仅通过某一项信息（或加以简单的辅助）就可以确定数件行为的主体为同一人，那么这项信息就是个人信息，反之则不是个人信息。")]),e("div",{staticClass:"text-subtitle-1 mb-2"},[t._v("个人身份信息 (Personal Identifiable Information)")]),e("div",{staticClass:"text-body-2 mb-2"},[t._v(" 个人身份信息是个人信息的一种。如果仅通过某一项信息（不加以任何辅助）就可以直接辨识、联系或准确找到相应的单一特定自然人，那么这项信息就是个人身份信息，反之则不是个人身份信息。")]),e("div",{staticClass:"text-body-2 mb-2"},[t._v(" 个人身份信息包括但不限于真实姓名，出生日期，身份证号码或社会保障号码，生物识别信息（如照片，指纹，掌纹，虹膜，皮下毛细血管分布等），生活地址，电话号码，车牌号码，精确的 GPS 经纬度坐标等可以用于追踪您的信息。")]),e("div",{staticClass:"text-subtitle-1 mb-2"},[t._v("非个人信息 (Non-personal Information)")]),e("div",{staticClass:"text-body-2 mb-2"},[t._v(" 非个人信息，指以任何形式记录的，但是其本身无法与任何特定自然人建立直接联系的数据。通常情况下，这些数据会被归类和汇总，因此，几乎不可能通过这些数据来还原出有关特定个人的任何相关信息。")]),e("div",{staticClass:"text-body-2 mb-2"},[t._v("请注意，将非个人信息与个人信息结合使用时，此类信息会被我们视为个人信息。")]),e("div",{staticClass:"text-body-1 mb-2"},[t._v("唯一标识符 (Unique Identifier)")]),e("div",{staticClass:"text-body-2 mb-2"},[t._v("唯一设备标识符（专属 ID 或 UUID）是指一串字符，可用于以独有方式标识相应设备。通常情况下由设备制造者编入用户的设备，或由服务器发送到浏览器，用于分辨设备或用户。")]),e("div",{staticClass:"text-body-1 mb-2"},[t._v("浏览器元数据 (Cookies)")]),e("div",{staticClass:"text-body-2 mb-2"},[t._v("Cookies 是服务器发送到用户浏览器并保存在本地的一小块数据，可能包含匿名的唯一标识符，它会在浏览器下次向同一服务器再发起请求时被携带并发送到服务器上。通常，它用于告知服务端两个请求是否来自同一浏览器或用户，如用于保持用户的登录状态。 ")]),e("div",{staticClass:"text-subtitle-1 mb-2"},[t._v("我们提供的服务")]),e("div",{staticClass:"text-body-2 mb-2"},[t._v("我们提供的服务包括但不限于归属于本站的网站，在线服务，公共接口，交互式应用程序，电子邮件等。")]),e("div",{staticClass:"text-h6 mb-2"},[t._v("我们对于个人身份信息的收集和使用")]),e("div",{staticClass:"text-body-2 mb-2"},[t._v("我们"),e("b",[t._v("不会主动")]),t._v("通过我们提供的服务来收集"),e("b",[t._v("任何个人身份信息")]),t._v("。永远不会。")]),e("div",{staticClass:"text-body-2 mb-2"},[t._v("而您在使用我们提供的服务时被我们收集的 IP 地址等敏感信息，在我们收集、归类和汇总时会被经过去敏和模糊化处理，且这些数据会在 7 天内被移除，因此我们将其视为个人信息而非个人身份信息。")]),e("div",{staticClass:"text-h6 mb-2"},[t._v("我们对于 Cookies 和其他技术的使用")]),e("div",{staticClass:"text-body-2 mb-2"},[t._v("我们提供的服务可能会使用 Cookies 和其他技术以对您进行区分，如浏览器信标、HTML5 指纹、TLS 握手指纹等。这些技术帮助我们更好地了解用户的行为（如用户浏览了我们网站的哪些部分），以及区分自然人和自动化程序。")]),e("div",{staticClass:"text-body-2 mb-2"},[t._v("请注意，我们也可能使用 Cookies 储存 Session 信息，这些信息中包含您的「登录状态」以对您进行区分。我们将通过 Cookies 和其他技术收集的信息视为非个人信息，因为他人无法使用这些信息还原出您的任何个人相关数据。")]),e("div",{staticClass:"text-body-2 mb-2"},[t._v("我们不会使用 Cookies 等技术向任何第三方披露、或辅助第三方收集任何可以追踪到您的个人信息。")]),e("div",{staticClass:"text-h6 mb-2"},[t._v("我们收集的信息及其用途")]),e("div",{staticClass:"text-body-2 mb-2"},[t._v(" 通常情况下，我们将收集的信息用于审计、分析、研究等内部目的；为用户提供信息服务；保护我们的服务不被入侵；管理网站；了解网站上的用户行为；了解和分析趋势；收集用户群的整体受众特征信息；创建、开发和改善我们提供的服务。 ")]),e("div",{staticClass:"text-body-2 mb-2"},[t._v("请注意，我们"),e("b",[t._v("不会将收集到的信息用于任何商业内容和广告宣传")]),t._v("。")]),e("div",{staticClass:"text-subtitle-1 mb-2"},[t._v("使用情况统计")]),e("div",{staticClass:"text-body-2 mb-2"},[t._v("我们会主动收集网站和应用程序的性能和使用情况统计信息。「性能和使用情况统计信息」包括：")]),e("ul",{staticClass:"text-body-2 mb-2"},[e("li",[t._v("引荐来源、访问的频率、访问日期和时间、行为流、花费的时间、使用的浏览器")]),e("li",[t._v("设备品牌、供应商、型号、屏幕尺寸和操作系统")]),e("li",[t._v("网络运营商和"),e("b",[t._v("仅精确到大洲或省级的地理位置")])]),e("li",[t._v("应用程序和网站的启动、加载速度，关键的运行计时")]),e("li",[t._v("不同的内容分发网络服务提供商在您所在的网络环境下的性能数据")]),e("li",[e("b",[t._v("不包含个人信息的")]),t._v("应用程序与网站的严重错误和相关错误信息")])]),e("div",{staticClass:"text-subtitle-1 mb-2"},[t._v("评论")]),e("div",{staticClass:"text-body-2 mb-2"},[t._v("当访客留下评论时，我们会收集评论表单所显示的数据，和如上的数据来协助我们检查垃圾评论。")]),e("div",{staticClass:"text-body-2 mb-2"},[t._v("在您进行评论后，由您的电子邮件地址所生成的匿名化字符串（又称为哈希）可能会被提供给 Gravatar 服务确认您是否有使用该服务。在您的评论获批准后，您的资料图片将在您的评论旁公开展示。请在此检视 Gravatar 服务的隐私政策："),e("a",{staticStyle:{"text-decoration":"none"},attrs:{href:"https://automattic.com/privacy/"}},[t._v("https://automattic.com/privacy/")])]),e("div",{staticClass:"text-h6 mb-2"},[t._v("我们如何传输、处理、存储和保护收集的信息")]),e("div",{staticClass:"text-body-2 mb-2"},[t._v("我们提供的在线服务会使用加密技术，如传输层安全协议 (TLS) ，在传输过程中保护我们收集到的信息不被中间人获取。我们收集的分析信息将被归类和汇总，以便用于在前述条款中描述的用途。任何非分析信息和任何其它非审核和研究用途所需的信息（如完整的、未经过去敏和模糊化的 IP 地址）将在汇总阶段被删除。")]),e("div",{staticClass:"text-body-2 mb-2"},[t._v("分析用途的信息将被存储在具有有限的，需要授权的访问权限的计算机系统中，这些系统受到数学算法加密和（或）物理安全措施的保护，在我们使用第三方提供的存储服务时也是如此。这些措施在现代计算机系统中不可能在短时间内被破解。")]),e("div",{staticClass:"text-body-2 mb-2"},[t._v("我们将会在实现本隐私策略所述目的的的期间内保留收集到的信息。通常这些信息会在首次上传后 30 天之内被删除，除非法律或法规要求储存更长的时间。")]),e("div",{staticClass:"text-h6 mb-2"},[t._v("关于第三方网站和服务")]),e("div",{staticClass:"text-body-2 mb-2"},[t._v("我们提供的服务可能会包含第三方的产品和服务，或包含通往它们的链接。例如，我们使用 Cloudflare 和 jsDelivr 的内容分发网络服务，第三方社会化分享评论系统等。我们也可能通过第三方获取由他们收集的您的信息。我们对这些信息的获取和使用将不受本隐私政策限制。然而，第三方能够向我们披露的信息依然会受到他们的隐私政策的限制。")]),e("div",{staticClass:"text-body-2 mb-2"},[t._v("第三方收集的、其中可能含有位置数据或联系方式等个人信息，须遵守第三方关于隐私权的规定。我们希望您能了解这些第三方的隐私权规定。我们对第三方的隐私政策概不负责。再次强调，我们"),e("b",[t._v("不会出于任何内容、营销用途和广告宣传的目的与第三方共享任何信息")]),t._v("。")]),e("div",{staticClass:"text-h6 mb-2"},[t._v("关于政府请求")]),e("div",{staticClass:"text-body-2 mb-2"},[t._v("我们从未在我们提供的服务中植入任何「后门」或者任何其它访问方式。我们不会主动向任何政府透露任何信息。永远不会。假如我们接受了强制的数据披露请求，会通过各种渠道（包括但不限于此处）进行公布。")])])],1)},jt=[],Mt={props:{dark:{type:Boolean,required:!0}}},Dt=Mt,Nt=Object(j["a"])(Dt,Pt,jt,!1,null,null,null),Bt=Nt.exports,It={components:{FPrivacyPolicy:Bt},data:()=>({dialog:!1}),props:{dark:{type:Boolean,required:!0}},methods:{year(){return(new Date).getFullYear()}}},Tt=It,Jt=Object(j["a"])(Tt,wt,Ot,!1,null,null,null),Et=Jt.exports,qt={name:"App",metaInfo:a("8f9d"),components:{FNavbarList:T,FMainTitle:H,FMainAbout:V,FMainChips:st,FMainSite:_t,FContact:ut,FDonate:St,FFooter:Et},data:()=>({onDarkMode(){},offDarkMode(){},header:a("28ac"),dark:!1,drawer:null}),mounted(){p(this)}},Lt=qt,At=(a("e1cc"),Object(j["a"])(Lt,f,m,!1,null,null,null)),Ht=At.exports,Gt=a("f309"),Wt=a("fcf4");a("5363");s["a"].use(Gt["a"]);var $t=new Gt["a"]({icons:{iconfont:"mdi"},theme:{themes:{light:{primary:Wt["a"].blue},dark:{primary:Wt["a"].light_blue}}}}),Ut=a("2570"),Kt=a.n(Ut);s["a"].use(Kt.a),s["a"].config.productionTip=!1,new s["a"]({vuetify:$t,render:t=>t(Ht),mounted(){document.dispatchEvent(new Event("render-event"))}}).$mount("#app")},7988:function(t){t.exports=JSON.parse('[{"icon":"account-circle-outline","text":"INFP"},{"icon":"chart-timeline-variant","text":"拾光者"},{"icon":"all-inclusive","text":"白夜梦想家"},{"icon":"thought-bubble-outline","text":"JK & DK"},{"icon":"atom","text":"解谜"},{"icon":"hexagon-multiple-outline","text":"Ingress Res"},{"icon":"code-tags","text":"PHP"},{"icon":"code-tags","text":"Python"},{"icon":"code-braces","text":"Vue"},{"icon":"code-braces","text":"JavaScript"},{"icon":"shape-outline","text":"喵~"},{"icon":"music-note-outline","text":"音游人"},{"icon":"source-branch","text":"Open Source"}]')},"8f9d":function(t){t.exports=JSON.parse('{"title":"FlyingSky\'s Home - 回忆化成一场长的梦","meta":[{"name":"keywords","content":"FlyingSky, FlyingSky-CN, 飞天, 个人网站, Developer, Web"},{"name":"description","content":"这里是 FlyingSky (飞天) // 坐标地球 / 中学生 / 喵呜 // 喜欢各种折腾，会敲代码，会剪视频，偶尔试着做些音乐。虽然没有好的设备，但还是喜欢玩摄影。仰望各界大佬。认识一下？希望能和你一起，理解这世界。"}]}')},"91d3":function(t,e,a){"use strict";a("cd74")},adb4:function(t){t.exports=JSON.parse('[{"text":"Home","data":null,"icon":"gesture","link":"https://fsky7.com/","color":"blue"},{"text":"Blog","data":null,"icon":"earth","link":"https://blog.fsky7.com/","color":"green"},{"text":"Laboratory","data":null,"icon":"hammer-wrench","link":"https://lab.fsky7.com/","color":"deep-orange"},{"text":"Projects","data":[{"href":"https://github.com/FlyingSky-CN/MDr","text":"Typecho theme | MDr"},{"href":"https://github.com/FlyingSky-CN/initial-fly","text":"Typecho theme | initial-fly"},{"href":"https://paperclip.wiki","text":"回形针 PaperClip Fans"},{"href":"https://space.bilibili.com/32792271/channel/detail?cid=170055","text":"BiliOB 用户排名观察"},{"href":"https://for1833.fsky7.com","text":"For 1833 - 框女"},{"href":"https://space.bilibili.com/32792271/channel/detail?cid=170056","text":"逐星原 / Minecraft"},{"href":"https://fsky7.com","text":"FlyingSky\'s Website"}],"icon":"package-variant-closed","link":null,"color":"deep-purple"},{"text":"Links","data":null,"icon":"link-variant","link":"https://blog.fsky7.com/links","color":"grey"}]')},b161:function(t,e,a){},cd74:function(t,e,a){},e1cc:function(t,e,a){"use strict";a("b161")},f483:function(t,e,a){},f9a1:function(t){t.exports=JSON.parse('{"title":"联系我","subtitle":"Contact","data":[{"href":"mailto:me@fsky7.com","key":"E-mail","value":"me@fsky7.com"},{"href":"https://t.me/FlyingSky233","key":"Telegram","value":"@FlyingSky233"}]}')},fd5d:function(t){t.exports=JSON.parse('{"name":"FlyingSky","slogan":"回忆化成一场长的梦。","icon":"gesture"}')}});