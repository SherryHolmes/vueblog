webpackJsonp([1],{"/EIG":function(t,e){},"469Y":function(t,e){},"BN+a":function(t,e){},D2BS:function(t,e){},If7o:function(t,e){},MC9l:function(t,e){},NHnr:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("7+uW"),i=a("aozt"),s=a.n(i),r={data:function(){return{comicInfo:""}},components:{},created:function(){this.initData()},methods:{initData:function(){var t=this;s()({method:"get",url:"/api/get_comicInfoAll"}).then(function(e){t.comicInfo=e.data}).catch(function(t){console.log(t)})}}},o={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"pannal-board"},[t._m(0),t._v(" "),a("div",[a("Row",{attrs:{type:"flex"}},[t._l(t.comicInfo,function(e){return[a("Col",{attrs:{xs:12,sm:8,md:6,lg:6}},[a("router-link",{attrs:{to:{path:"/comic/chapters",query:{id:e.id}}}},[a("div",{staticStyle:{margin:"1%",width:"98%",padding:"1%"}},[a("div",[t._v("\n                "+t._s(e.name)+"\n              ")]),t._v(" "),a("img",{attrs:{src:e.posterurl,width:"100%"}})])])],1)]})],2)],1)])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"title"},[e("h2",[this._v("漫画")])])}]};var c=a("VU/8")(r,o,!1,function(t){a("If7o")},"data-v-68dafacc",null).exports,l=a("//Fk"),u=a.n(l),d={data:function(){return{msg:"Welcome to Your Vue.js App",list1:[1,2,3,4,5,6,7,8,9,10]}},methods:{handleReachBottom:function(){var t=this;return new u.a(function(e){setTimeout(function(){for(var a=t.list1[t.list1.length-1],n=1;n<11;n++)t.list1.push(a+n);e()},2e3)})}}},m={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("Scroll",{attrs:{"on-reach-bottom":t.handleReachBottom}},t._l(t.list1,function(e,n){return a("Card",{key:n,staticStyle:{margin:"20px 0"},attrs:{"dis-hover":""}},[t._v("\n      Content "+t._s(e)+"\n    ")])}))],1)},staticRenderFns:[]};var h=a("VU/8")(d,m,!1,function(t){a("MC9l")},"data-v-386e5bca",null).exports,v={name:"messagge",data:function(){return{message_list:"",edittext:"",editauthor:"",editdate:"",ctime:"",cdate:"",value7:"",value8:""}},components:{},created:function(){this.initData()},methods:{initData:function(){var t=this;this.edittext="",s()({method:"get",url:"/api/get_messageList"}).then(function(e){t.message_list=e.data}).catch(function(t){console.log(t)})},zeroPadding:function(t,e){for(var a="",n=0;n<e;n++)a+="0";return(a+t).slice(-e)},tabs:function(){var t=new Date;this.ctime=this.zeroPadding(t.getHours(),2)+":"+this.zeroPadding(t.getMinutes(),2)+":"+this.zeroPadding(t.getSeconds(),2),this.cdate=this.zeroPadding(t.getFullYear(),4)+"-"+this.zeroPadding(t.getMonth()+1,2)+"-"+this.zeroPadding(t.getDate(),2),this.editauthor="游客",this.editdate=this.cdate+" "+this.ctime,s()({method:"post",url:"api/write_message",data:{author:this.editauthor,date:this.editdate,message:this.edittext},timeout:3e3}).then(function(t){"200"==t.status?(self.classFade="",self.errinfo="留言成功！"):(self.classFade="",self.errinfo="留言失敗，未知的錯誤！")}).catch(function(t){console.log(t),self.classFade="",self.errinfo="服務器繁忙，請刷新頁面或者稍後重試!(Error code: 504)"}),this.initData()}}},f={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h1",{staticStyle:{"margin-left":"5%"}},[t._v("留言板")]),t._v(" "),t._l(t.message_list,function(e){return a("div",[a("div",{staticClass:"commonboard"},[a("div",{staticClass:"title"},[a("div",{staticClass:"author"},[t._v(t._s(e.author)+" :")]),t._v(" "),a("div",{staticClass:"date"},[t._v(t._s(e.date))])]),t._v(" "),a("div",[a("Input",{staticClass:"contnt",attrs:{type:"textarea",readonly:"",placeholder:e.message,autosize:{minRows:1,maxRows:20}}}),t._v(" "),a("Button",{staticClass:"request"},[t._v("回复")])],1)])])}),t._v(" "),a("div",{staticClass:"editboard"},[a("h2",{staticStyle:{margin:"1% 3%"}},[t._v("留言区")]),t._v(" "),a("Input",{staticClass:"editarea",attrs:{type:"textarea",autosize:{minRows:9,maxRows:9},placeholder:"请输入留言信息..."},model:{value:t.edittext,callback:function(e){t.edittext=e},expression:"edittext"}}),t._v(" "),a("Button",{staticClass:"submitbutton",attrs:{type:"success"},on:{click:t.tabs}},[t._v("提交留言")])],1)],2)},staticRenderFns:[]};var _=a("VU/8")(v,f,!1,function(t){a("BN+a")},"data-v-4b13a54a",null).exports,p={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("h1",[e("a",{attrs:{href:"/Port(V3.0).zip",download:"Port(V3.0).zip"}},[this._v("小南瓜串口下载")])])])}]};var g=a("VU/8")({name:"mainother",data:function(){return{msg:"Welcome to Your Vue.js App"}}},p,!1,function(t){a("469Y")},"data-v-60286f45",null).exports,y={name:"myheader",data:function(){return{header_nav_items:[{label:"首页",type:"ios-home",isactive:!1,path:"/",name:"home"},{label:"文章",type:"ios-paper",isactive:!1,path:"/article",name:"article"},{label:"留言",type:"ios-compose",isactive:!1,path:"/message",name:"message"},{label:"其他",type:"ios-crop-strong",isactive:!1,path:"/other",name:"other"}],header_login_items:[{label:"登录",type:"person",isactive:!1,path:"/"},{label:"注册",type:"person-add",isactive:!0,path:"/"}]}},components:{myHome:c,myArticle:h,myMessage:_,myOther:g},created:function(){this.initData()},computed:{},watch:{$route:function(){for(var t in this.header_nav_items[0].isactive=!0,this.header_nav_items)this.$route.name===this.header_nav_items[t].name?this.header_nav_items[t].isactive=!0:this.header_nav_items[t].isactive=!1}},methods:{initData:function(){for(var t=0;t<this.header_nav_items.length;t++)this.$route.name===this.header_nav_items[t].name?this.header_nav_items[t].isactive=!0:this.header_nav_items[t].isactive=!1},toggle:function(t,e){for(var a in t)t[a]==e?t[a].isactive=!0:t[a].isactive=!1}}},x={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"layout-header"},[a("div",{staticStyle:{"margin-top":"2px",background:"transparent","font-size":"14px"}},[a("Row",{attrs:{type:"flex",justify:"center"}},[a("Col",{attrs:{xs:3,sm:1,md:0,lg:0}}),t._v(" "),a("Col",{staticStyle:{display:"flex","justify-content":"center"},attrs:{xs:3,sm:3,md:4,lg:3}},[a("div",{staticClass:"layout-logo"},[a("a",{attrs:{href:"/"}},[a("p",[a("span",[t._v("Zy")]),t._v("xin")])])])]),t._v(" "),a("Col",{attrs:{xs:1,sm:0,md:0,lg:0}}),t._v(" "),a("Col",{attrs:{xs:17,sm:12,md:7,lg:8}},[a("div",{staticClass:"layout-nav",staticStyle:{width:"100%"}},[a("Row",{attrs:{type:"flex",justify:"center"}},[t._l(t.header_nav_items,function(e){return[a("Col",{staticStyle:{display:"flex","justify-content":"center"},attrs:{xs:6,sm:6,md:6,lg:6}},[a("router-link",{staticStyle:{padding:"0"},attrs:{to:e.path}},[a("div",{staticClass:"header_nav",on:{click:function(a){t.toggle(t.header_nav_items,e)}}},[a("span",{class:{header_nav_active:e.isactive}},[a("Icon",{attrs:{type:e.type}}),t._v(" "+t._s(e.label)+"\n                  ")],1)])])],1)]})],2)],1)]),t._v(" "),a("Col",{attrs:{xs:0,sm:8,md:13,lg:13}},[a("div",{staticClass:"layout-nav",staticStyle:{float:"right"}},[t._l(t.header_login_items,function(e){return[a("router-link",{staticStyle:{padding:"0 15px"},attrs:{to:e.path}},[a("div",{staticClass:"header_nav",on:{click:function(a){t.toggle(t.header_login_items,e)}}},[a("span",{staticStyle:{"font-size":"16px",padding:"0"}},[a("Icon",{attrs:{type:e.type}}),t._v(t._s(e.label)+"\n                ")],1)])])]})],2)]),t._v(" "),a("Col",{attrs:{xs:0,sm:0,md:0,lg:0}})],1)],1)])},staticRenderFns:[]};var C=a("VU/8")(y,x,!1,function(t){a("PScV")},"data-v-4ca0185b",null).exports,D={name:"blogfooter",data:function(){return{msg:"Welcome to Your Vue.js App",xxx:!0}},methods:{isfooter_bottom:function(){return $("body").scrollTop(1),$("body").scrollTop()>0?($("public-footer").removeClass("footer_bottom"),alert("有滚动条"),!1):($("public-footer").addClass("footer_bottom"),alert("无滚动条"),!0)}}},w={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"main-footer"},[this._v("\n  xinzongyan @ 2018\n")])},staticRenderFns:[]};var b=a("VU/8")(D,w,!1,function(t){a("YXCI")},"data-v-45cfcd12",null).exports,S={name:"showvisitnum",data:function(){return{axxx:"",ayyy:""}},components:{},created:function(){this.initData()},methods:{initData:function(){var t=this;s()({method:"get",url:"/api/show_visitnum"}).then(function(e){t.ayyy=e.data[0].yyy}).catch(function(t){console.log(t)})}}},I={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"show"},[e("p",[this._v("访问次数：\n    "),e("span",[this._v(" "+this._s(this.ayyy)+" ")])])])},staticRenderFns:[]};var k={name:"compdate",data:function(){return{currentDay:1,currentMonth:1,currentYear:1970,currentWeek:1,days:[]}},created:function(){this.initData(null)},methods:{initData:function(t){var e=void 0;if(t)e=new Date(t);else{var a=new Date,n=new Date(this.formatDate(a.getFullYear(),a.getMonth(),1));n.setDate(35),e=new Date(this.formatDate(n.getFullYear(),n.getMonth()+1,1))}this.currentDay=e.getDate(),this.currentYear=e.getFullYear(),this.currentMonth=e.getMonth()+1,this.currentWeek=e.getDay(),0==this.currentWeek&&(this.currentWeek=7);var i=this.formatDate(this.currentYear,this.currentMonth,this.currentDay);this.days.length=0;for(var s=this.currentWeek-1;s>=0;s--){var r=new Date(i);r.setDate(r.getDate()-s);var o={};o.day=r,this.days.push(o)}for(var c=1;c<=42-this.currentWeek;c++){var l=new Date(i);l.setDate(l.getDate()+c);var u={};u.day=l,this.days.push(u)}},pickPre:function(t,e){var a=new Date(this.formatDate(t,e,1));a.setDate(0),this.initData(this.formatDate(a.getFullYear(),a.getMonth()+1,1))},pickNext:function(t,e){var a=new Date(this.formatDate(t,e,1));a.setDate(35),this.initData(this.formatDate(a.getFullYear(),a.getMonth()+1,1))},pickYear:function(t,e){alert(t+","+e)},formatDate:function(t,e,a){var n=e;n<10&&(n="0"+n);var i=a;return i<10&&(i="0"+i),t+"-"+n+"-"+i}}},M={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"Calendar"},[a("div",{attrs:{id:"idCalendarPre"},on:{click:function(e){t.pickPre(t.currentYear,t.currentMonth)}}},[t._v("<<")]),t._v(" "),a("div",{attrs:{id:"idCalendarNext"},on:{click:function(e){t.pickNext(t.currentYear,t.currentMonth)}}},[t._v(">>")]),t._v(" "),a("span",{staticClass:"choose-year-month"},[t._v(t._s(t.currentYear)+"年 "+t._s(t.currentMonth)+"月")]),t._v(" "),t._m(0),t._v(" "),a("ul",{staticClass:"days"},t._l(t.days,function(e){return a("li",[e.day.getMonth()+1!=t.currentMonth?a("span",{staticClass:"other-month"},[t._v(t._s(e.day.getDate()))]):a("span",[e.day.getFullYear()==(new Date).getFullYear()&&e.day.getMonth()==(new Date).getMonth()&&e.day.getDate()==(new Date).getDate()?a("span",{staticClass:"active"},[t._v(t._s(e.day.getDate()))]):a("span",[t._v(t._s(e.day.getDate()))])])])}))])])},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ul",{staticClass:"weeks"},[a("li",[t._v("一")]),t._v(" "),a("li",[t._v("二")]),t._v(" "),a("li",[t._v("三")]),t._v(" "),a("li",[t._v("四")]),t._v(" "),a("li",[t._v("五")]),t._v(" "),a("li",{staticStyle:{color:"red"}},[t._v("六")]),t._v(" "),a("li",{staticStyle:{color:"red"}},[t._v("日")])])}]};var F={name:"comptime",data:function(){return{week:["SUN","MON","TUE","WED","THU","FRI","SAT"],timerID:setInterval(this.updateTime,1e3),ctime:"",cdate:""}},created:function(){this.updateTime()},methods:{zeroPadding:function(t,e){for(var a="",n=0;n<e;n++)a+="0";return(a+t).slice(-e)},updateTime:function(){var t=new Date;this.ctime=this.zeroPadding(t.getHours(),2)+":"+this.zeroPadding(t.getMinutes(),2)+":"+this.zeroPadding(t.getSeconds(),2),this.cdate=this.zeroPadding(t.getFullYear(),4)+"-"+this.zeroPadding(t.getMonth()+1,2)+"-"+this.zeroPadding(t.getDate(),2)+" "+this.week[t.getDay()]}}},E={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"myclock"}},[e("p",{staticClass:"mydate"},[this._v(this._s(this.cdate))]),this._v(" "),e("p",{staticClass:"mytime"},[this._v(this._s(this.ctime))])])},staticRenderFns:[]};var R={name:"constsider",data:function(){return{msg:"Welcome to Your Vue.js App"}},components:{myShowvisitnum:a("VU/8")(S,I,!1,function(t){a("TZaW")},"data-v-d533c554",null).exports,myDate:a("VU/8")(k,M,!1,function(t){a("Utvg")},"data-v-6e3cb43e",null).exports,myTime:a("VU/8")(F,E,!1,function(t){a("tyiZ")},"data-v-07612ab9",null).exports}},Y={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"navdate"},[e("my-showvisitnum"),this._v(" "),e("my-time"),this._v(" "),e("my-date")],1)},staticRenderFns:[]};var z=a("VU/8")(R,Y,!1,function(t){a("jKDa")},"data-v-74389356",null).exports,V={data:function(){return{isCollapsed:!0}},computed:{rotateIcon:function(){return["menu-icon",this.isCollapsed?"rotate-icon":""]}},methods:{collapsedSider:function(){this.$refs.side1.toggleCollapse()}},components:{myMenu:U}},P={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"menu"},[a("div",{staticClass:"menumainicon"},[a("Icon",{class:t.rotateIcon,style:{margin:"20px 10px",color:"#fff"},attrs:{type:"navicon-round",size:"24"},nativeOn:{click:function(e){t.collapsedSider(e)}}})],1),t._v(" "),a("Sider",{ref:"side1",style:{background:"#fff"},attrs:{"hide-trigger":"",collapsible:"","collapsed-width":0},model:{value:t.isCollapsed,callback:function(e){t.isCollapsed=e},expression:"isCollapsed "}},[!1===t.isCollapsed?a("div",[a("div",{staticClass:"sidebar-overlay active",on:{click:function(e){t.collapsedSider()}}})]):t._e(),t._v(" "),a("Menu",{attrs:{theme:"light",width:"auto",accordion:""}},[a("Submenu",{attrs:{name:"1"}},[a("template",{slot:"title"},[a("Icon",{attrs:{type:"ios-navigate"}}),t._v("\n            看漫画\n          ")],1),t._v(" "),a("MenuItem",{attrs:{name:"1-1"}},[t._v("犬夜叉")]),t._v(" "),a("MenuItem",{attrs:{name:"1-2"}},[t._v("名侦探柯南")]),t._v(" "),a("Submenu",{attrs:{name:"1-3"}},[a("template",{slot:"title"},[t._v("火影忍者")]),t._v(" "),a("Submenu",{attrs:{name:"1-3-1"}},[a("template",{slot:"title"},[t._v("第一部")]),t._v(" "),a("MenuItem",{attrs:{name:"1-3-1-1"}},[t._v("第一画")]),t._v(" "),a("MenuItem",{attrs:{name:"1-3-1-2"}},[t._v("第二画")])],2),t._v(" "),a("Submenu",{attrs:{name:"1-3-2"}},[a("template",{slot:"title"},[t._v("第二部")]),t._v(" "),a("MenuItem",{attrs:{name:"1-3-2-1"}},[t._v("第一画")]),t._v(" "),a("MenuItem",{attrs:{name:"1-3-2-2"}},[t._v("第二画")])],2),t._v(" "),a("MenuItem",{attrs:{name:"3-2"}},[t._v("第二画")])],2)],2),t._v(" "),a("Submenu",{attrs:{name:"2"}},[a("template",{slot:"title"},[a("Icon",{attrs:{type:"ios-keypad"}}),t._v("\n            看小说\n          ")],1),t._v(" "),a("MenuItem",{attrs:{name:"2-1"}},[t._v("超魔杀帝国")]),t._v(" "),a("MenuItem",{attrs:{name:"2-2"}},[t._v("幻城")])],2),t._v(" "),a("Submenu",{attrs:{name:"3"}},[a("template",{slot:"title"},[a("Icon",{attrs:{type:"ios-analytics"}}),t._v("\n            看视频\n          ")],1),t._v(" "),a("MenuItem",{attrs:{name:"3-1"}},[t._v("最新视频")]),t._v(" "),a("MenuItem",{attrs:{name:"3-2"}},[t._v("最热视频")])],2)],1)],1)],1)])},staticRenderFns:[]};var U=a("VU/8")(V,P,!1,function(t){a("p+wf")},"data-v-30c2c7ff",null).exports,W={name:"app",data:function(){return{}},components:{myHeader:C,myFooter:b,Constsider:z,myMenu:U}},j={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("div",{staticClass:"layout"},[e("div",{staticClass:"flex-direction-colum"},[e("div",{staticStyle:{height:"64px",overflow:"hidden",background:"#495060","z-index":"8"}},[e("div",{staticStyle:{margin:"0 auto","z-index":"9","max-width":"1000px"}},[e("my-header")],1)]),this._v(" "),e("div",{staticStyle:{width:"100%","max-width":"1000px",margin:"0 auto"}},[e("div",{staticStyle:{flex:"auto",padding:"2%","min-height":"100%",background:"rgb(255, 255, 255)"}},[e("router-view")],1)]),this._v(" "),e("Row",{attrs:{type:"flex",justify:"center"}},[e("Col",{attrs:{xs:0,sm:0,md:0,lg:0}},[e("div",{staticStyle:{width:"100%",display:"flex","justify-content":"center"}},[e("div",{staticStyle:{"min-width":"250px","max-width":"250px",flex:"0 0 250px"}},[e("Constsider")],1)])])],1)],1),this._v(" "),e("div",{staticClass:"flex-direction-colum"},[e("div",{staticClass:"my-ivu-layout-footer"},[e("my-footer")],1)])])])},staticRenderFns:[]};var T=a("VU/8")(W,j,!1,function(t){a("D2BS")},null,null).exports,A=a("/ocq"),B={data:function(){return{msg:"Welcome to Your Vue.js App",comicChapters:"",comicInfo:"",comic_id:"",baseurl:"http://www.kuaikanmanhua.com"}},created:function(){this.comic_id=this.$route.query.id,this.initData()},methods:{initData:function(){var t=this;s()({method:"get",url:"/api/get_comicInfoByid?id="+t.comic_id}).then(function(e){t.comicInfo=e.data[0]}).catch(function(t){console.log(t)}),s()({method:"get",url:"/api/get_comic_chapterInfo?id="+t.comic_id}).then(function(e){t.comicChapters=e.data}).catch(function(t){console.log(t)})}}},N={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",[t._v(t._s(t.comicInfo.name))]),t._v(" "),a("div",[t._v("作者："+t._s(t.comicInfo.author))]),t._v(" "),a("div",[t._v("介绍："+t._s(t.comicInfo.introduce))]),t._v(" "),a("div",[a("img",{attrs:{src:t.comicInfo.posterurl,width:"100%"}})]),t._v(" "),t._l(t.comicChapters,function(e){return[a("router-link",{attrs:{to:{path:"/comic/chapterimgs",query:{id:t.comic_id,num:e.num}}}},[a("div",{staticStyle:{margin:"10px 0",height:"100px",clear:"float"}},[a("div",{staticStyle:{height:"100%",float:"left"}},[a("img",{attrs:{src:e.imgurl,height:"100%"}})]),t._v(" "),a("div",{staticStyle:{float:"left"}},[t._v("\n          "+t._s(e.title)+"\n        ")])])])]})],2)},staticRenderFns:[]};var q=a("VU/8")(B,N,!1,function(t){a("/EIG")},"data-v-8875b516",null).exports,H={data:function(){return{msg:"Welcome to Your Vue.js App",comic_id:"",chapter_num:"",chapterimgs:""}},created:function(){this.comic_id=this.$route.query.id,this.chapter_num=this.$route.query.num;this.initData()},methods:{initData:function(){var t=this;s()({method:"get",url:"/api/get_comic_chapter_imgInfo?id="+this.comic_id+"&num="+this.chapter_num}).then(function(e){t.chapterimgs=e.data}).catch(function(t){console.log(t)})},handleReachBottom:function(){var t=this,e="";return new u.a(function(a){s()({method:"get",url:"/api/get_comic_chapter_imgInfo?id="+t.comic_id+"&num=905"}).then(function(t){e=t.data}).catch(function(t){console.log(t)}),setTimeout(function(){for(var n=0;n<e.length;n++)t.chapterimgs.push(e[n]);a()},5e3)})}}},Z={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[this._l(this.chapterimgs,function(t){return[e("img",{attrs:{src:t.url,width:"100%"}})]})],2)},staticRenderFns:[]};var O=a("VU/8")(H,Z,!1,function(t){a("kg1i")},"data-v-78e46a40",null).exports;n.a.use(A.a);var G=new A.a({mode:"history",routes:[{path:"/",name:"home",component:c,beforeEnter:function(t,e,a){document.title="辛宗彦-首页",a()}},{path:"/article",name:"article",component:h,beforeEnter:function(t,e,a){document.title="辛宗彦-文章",a()}},{path:"/message",name:"message",component:_,beforeEnter:function(t,e,a){document.title="辛宗彦-消息",a()}},{path:"/other",name:"other",component:g,beforeEnter:function(t,e,a){document.title="辛宗彦-其他",a()}},{path:"/comic/chapters",name:"Comicchapters",component:q},{path:"/comic/chapterimgs",name:"Comicchapterimgs",component:O}]}),K=a("UC6W"),X=a.n(K);a("igES");n.a.config.productionTip=!1,n.a.use(X.a),new n.a({el:"#app",router:G,components:{App:T},template:"<App/>"})},PScV:function(t,e){},TZaW:function(t,e){},Utvg:function(t,e){},YXCI:function(t,e){},igES:function(t,e){},jKDa:function(t,e){},kg1i:function(t,e){},"p+wf":function(t,e){},tyiZ:function(t,e){}},["NHnr"]);