(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{10:function(e,t,a){e.exports={ava:"users_ava__1Ce0_",list:"users_list__1_T-C",item:"users_item__1_m1M",left:"users_left__31utI",right:"users_right__15Jbi"}},12:function(e,t,a){e.exports={content:"Dialogs_content__3xYFt",dialogs:"Dialogs_dialogs__1ldWw",dialogItmes:"Dialogs_dialogItmes__2wJne",item:"Dialogs_item__2S0YD",active:"Dialogs_active__2L36t",messagesItem:"Dialogs_messagesItem__6zCzC",messages:"Dialogs_messages__l3TAG",h3title:"Dialogs_h3title__TKXRv"}},17:function(e,t,a){e.exports={nav:"Sidebar_nav__332if",item:"Sidebar_item__1W3V_",last:"Sidebar_last__-3VlP"}},20:function(e,t,a){e.exports={avaDesc:"ProfileInfo_avaDesc__2LCNW",ava:"ProfileInfo_ava___uTDi",desc:"ProfileInfo_desc__1F0-c"}},21:function(e,t,a){e.exports={postList:"MyPosts_postList__n1uGL",inputWrapper:"MyPosts_inputWrapper__2KEeJ"}},23:function(e,t,a){e.exports={content:"Content_content__1Xl23",ava:"Content_ava__1EzJZ",avaDesc:"Content_avaDesc__3obY3",desc:"Content_desc__1FEMl",myPost:"Content_myPost__3qVDH"}},24:function(e,t,a){e.exports={post:"Post_post__1iWm9",postList:"Post_postList__wH8F3",like:"Post_like__u8w68"}},38:function(e,t,a){e.exports={footer:"Footer_footer__2Pwx8"}},39:function(e,t,a){e.exports=a.p+"static/media/my-ava.614321fe.png"},44:function(e,t,a){e.exports=a.p+"static/media/def-ava.e11b93a0.png"},47:function(e,t,a){e.exports=a(78)},52:function(e,t,a){},53:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},54:function(e,t,a){},59:function(e,t,a){e.exports={header:"Header_header__2E6cA"}},78:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),r=a(18),o=a.n(r),i=(a(52),a(53),a(54),a(38)),c=a.n(i),l=function(){return s.a.createElement("div",{className:c.a.footer})},u=a(23),m=a.n(u),d=a(20),p=a.n(d),f=a(39),g=a.n(f),E=function(){return s.a.createElement("div",{className:p.a.avaDesc},s.a.createElement("div",{className:p.a.ava},s.a.createElement("img",{src:g.a,alt:""})),s.a.createElement("div",{className:p.a.desc},s.a.createElement("p",null,"Due to existing experience in developing and releasing stable sites and online stores for the business, I would like to continue improving my skills in the field of front-end development. My goal is to take part in projects, where I can apply all my knowledge and experience into developing quality products and participating in defining project objectives and their implementation.")))},_=a(11),v=a(2),b={posts:[{id:1,message:"Lorem ipsum dolor sit amet, consectetur adipiscing elit!",likeCounts:2},{id:2,message:"Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",likeCounts:5},{id:3,message:"Version 10.0.17134.765",likeCounts:0}],newPostText:""},w=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD-POST":var a={id:5,message:e.newPostText,likeCounts:0};return Object(v.a)(Object(v.a)({},e),{},{posts:[].concat(Object(_.a)(e.posts),[a]),newPostText:""});case"UPDATE-NEW-POST-TEXT":return Object(v.a)(Object(v.a)({},e),{},{newPostText:t.newText});case"ADD-LIKE-TO-POST":return Object(v.a)(Object(v.a)({},e),{},{posts:e.posts.map((function(e){if(e.id===t.postId){var a=e.likeCounts+1;return Object(v.a)(Object(v.a)({},e),{},{likeCounts:a})}return e}))});default:return e}},h=a(21),O=a.n(h),N=a(24),P=a.n(N),T=function(e){return s.a.createElement("li",{className:P.a.post},s.a.createElement("div",null,s.a.createElement("p",null,e.message)),s.a.createElement("div",{className:P.a.like},s.a.createElement("button",{onClick:function(){var t=e.id;e.likeIncrement(t)}},"Like!"),s.a.createElement("span",null,e.likeCounts)))},x=a(9),D=Object(x.b)((function(e){return{posts:e.profilePage.posts}}),(function(e){return{likeIncrement:function(t){e(function(e){return{type:"ADD-LIKE-TO-POST",postId:e}}(t))}}}))(T),j=function(e){var t=e.posts.map((function(e){return s.a.createElement(D,{message:e.message,id:e.id,key:e.id,likeCounts:e.likeCounts})})),a=s.a.createRef();return s.a.createElement("div",{className:O.a.postsWrapper},s.a.createElement("div",{className:O.a.inputWrapper},s.a.createElement("textarea",{placeholder:"anything new?",onChange:function(){var t=a.current.value;e.updateNewPostText(t)},ref:a,value:e.newPostText}),s.a.createElement("button",{onClick:function(){e.addPost()}},"Add post")),s.a.createElement("ul",{className:O.a.postList},t))},y=Object(x.b)((function(e){return{posts:e.profilePage.posts,newPostText:e.profilePage.newPostText}}),(function(e){return{updateNewPostText:function(t){var a=function(e){return{type:"UPDATE-NEW-POST-TEXT",newText:e}}(t);e(a)},addPost:function(){e({type:"ADD-POST"})}}}))(j),k=function(e){return s.a.createElement("div",{className:m.a.content},s.a.createElement(E,null),s.a.createElement("div",{className:m.a.myPost},s.a.createElement(y,null)))},C=(a(59),function(){return s.a.createElement("header",{className:"header"},s.a.createElement("img",{src:"https://www.freelogodesign.org/Content/img/logo-ex-2.png",alt:"logo"}))}),S=a(17),I=a.n(S),M=function(){return s.a.createElement("nav",{className:I.a.nav},s.a.createElement("div",{className:I.a.item},s.a.createElement("a",{href:"/profile"},"Profile")),s.a.createElement("div",{className:I.a.item},s.a.createElement("a",{href:"/dialog"},"Messages")),s.a.createElement("div",{className:I.a.item},s.a.createElement("a",{href:"/users"},"Users")))},L={dialogsData:[{id:1,name:"User-bot"},{id:2,name:"Petya"},{id:3,name:"Kotovskiy"},{id:4,name:"Anka"}],messagesData:[{id:1,message:"Hi"},{id:2,message:"Microsoft Corporation"},{id:3,message:"Version 10.0.17134.765"}],newMessText:"type your message here"},A=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD-MESSAGE":return Object(v.a)(Object(v.a)({},e),{},{messagesData:[].concat(Object(_.a)(e.messagesData),[{id:5,message:e.newMessText}]),dialogsData:Object(_.a)(e.dialogsData),newMessText:""});case"UPDATE-NEW-MESSAGE-TEXT":return Object(v.a)(Object(v.a)({},e),{},{newMessText:t.newText});default:return e}},W=a(12),U=a.n(W),F=a(14),G=function(e){var t="/dialog/"+e.id;return s.a.createElement("div",{className:U.a.item+" "+U.a.active},s.a.createElement(F.b,{to:t},e.name))},J=function(e){return s.a.createElement("div",{className:U.a.messagesItem},e.message)},X=function(e){var t=e.messagesPage,a=t.dialogsData.map((function(e){return s.a.createElement(G,{name:e.name,id:e.id})})),n=t.messagesData.map((function(e){return s.a.createElement(J,{message:e.message})})),r=s.a.createRef();return s.a.createElement("div",{className:U.a.dialogs},s.a.createElement("div",{className:U.a.dialogItmes},s.a.createElement("h3",{className:U.a.h3title},"Friends"),a),s.a.createElement("div",{className:U.a.messages},n,s.a.createElement("textarea",{ref:r,value:t.newMessText,onChange:function(){var t=r.current.value;e.updateNewMessage(t)}}),s.a.createElement("button",{onClick:function(){e.addMessage()}},"send")))},q=Object(x.b)((function(e){return{messagesPage:e.messagesPage}}),(function(e){return{updateNewMessage:function(t){e(function(e){return{type:"UPDATE-NEW-MESSAGE-TEXT",newText:e}}(t))},addMessage:function(){e({type:"ADD-MESSAGE"})}}}))(X),K=a(3),R=a(41),V=a(42),H=a(46),z=a(45),Y=a(10),B=a.n(Y),Z=a(43),$=a(44),Q=a.n($),ee=function(e){Object(H.a)(a,e);var t=Object(z.a)(a);function a(){return Object(R.a)(this,a),t.apply(this,arguments)}return Object(V.a)(a,[{key:"componentDidMount",value:function(){var e=this;Z.get("https://social-network.samuraijs.com/api/1.0/users").then((function(t){e.props.setUsers(t.data.items)}))}},{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:B.a.list},this.props.users.map((function(t){return s.a.createElement("div",{className:B.a.item,key:t.id},s.a.createElement("div",{className:B.a.left},s.a.createElement("div",{className:B.a.ava},s.a.createElement("img",{src:null!=t.photos.small?t.photos.small:Q.a,alt:""})),s.a.createElement("div",null,t.followed?s.a.createElement("button",{onClick:function(){e.props.unfollow(t.id)}},"Unfollow"):s.a.createElement("button",{onClick:function(){e.props.follow(t.id)}},"Follow"))),s.a.createElement("div",{className:B.a.right},s.a.createElement("div",{className:"top"},s.a.createElement("p",{className:B.a.userName},t.name),s.a.createElement("p",{className:B.a.userStatus},"id: ",t.id)),s.a.createElement("div",{className:"bottom"},s.a.createElement("p",{className:B.a.userCountry},"u.location.country"),s.a.createElement("p",{className:B.a.userCity},"u.location.city"))))})))}}]),a}(s.a.Component),te={users:[],newPostText:"samurai-way"},ae=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:te,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FOLLOW":return Object(v.a)(Object(v.a)({},e),{},{users:e.users.map((function(e){return e.id===t.userId?Object(v.a)(Object(v.a)({},e),{},{followed:!0}):e}))});case"UNFOLLOW":return Object(v.a)(Object(v.a)({},e),{},{users:e.users.map((function(e){return e.id===t.userId?Object(v.a)(Object(v.a)({},e),{},{followed:!1}):e}))});case"SET_USERS":return Object(v.a)(Object(v.a)({},e),{},{users:[].concat(Object(_.a)(e.users),Object(_.a)(t.users))});default:return e}},ne=Object(x.b)((function(e){return{users:e.usersPage.users}}),(function(e){return{follow:function(t){e(function(e){return{type:"FOLLOW",userId:e}}(t))},unfollow:function(t){e(function(e){return{type:"UNFOLLOW",userId:e}}(t))},setUsers:function(t){e(function(e){return{type:"SET_USERS",users:e}}(t))}}}))(ee),se=function(e){return s.a.createElement("div",{className:"app-wrapper"},s.a.createElement(C,null),s.a.createElement(M,null),s.a.createElement("div",{className:"app-wrapper-content"},s.a.createElement(K.a,{path:"/dialog",render:function(){return s.a.createElement(q,null)}}),s.a.createElement(K.a,{path:"/profile",render:function(){return s.a.createElement(k,null)}}),s.a.createElement(K.a,{path:"/users",render:function(){return s.a.createElement(ne,null)}})),s.a.createElement(l,null))},re=a(16),oe=Object(re.b)({profilePage:w,messagesPage:A,usersPage:ae}),ie=Object(re.c)(oe);window.store=ie;var ce=ie;Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(s.a.createElement(F.a,null,s.a.createElement(x.a,{store:ce},s.a.createElement(se,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[47,1,2]]]);
//# sourceMappingURL=main.70fe6dbf.chunk.js.map