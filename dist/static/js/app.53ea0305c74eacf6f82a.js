webpackJsonp([1],{"70t8":function(t,e){},"7hRC":function(t,e){},"C/dv":function(t,e){},MC9l:function(t,e){},NHnr:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("7+uW"),i=a("aozt"),s=a.n(i),r={data:function(){return{comicInfo:"",loading:!1,get:null,error:null}},components:{},created:function(){this.initData()},methods:{initData:function(){var t=this;t.error=t.comicInfo=t.chapterimgs=null,t.loading=!0,s()({method:"get",url:"/api/get_comicInfoAll"}).then(function(e){t.comicInfo=e.data,t.loading=!1}).catch(function(t){console.log(t)})}}},o={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t.loading?a("div",{staticClass:"loading"},[t._v("\n    Loading...\n  ")]):t._e(),t._v(" "),t.error?a("div",{staticClass:"error"},[t._v("\n    "+t._s(t.error)+"\n  ")]):t._e(),t._v(" "),0==t.loading?a("div",{},[a("div",{staticClass:"pannal-board"},[t._m(0),t._v(" "),a("div",[a("Row",{attrs:{type:"flex"}},[t._l(t.comicInfo,function(e){return[a("Col",{attrs:{xs:12,sm:8,md:6,lg:6}},[a("router-link",{attrs:{to:{path:"/comic/chapters",query:{id:e.id}}}},[a("div",{staticStyle:{margin:"1%",width:"98%",padding:"1%"}},[a("div",[t._v("\n                  "+t._s(e.name)+"\n                ")]),t._v(" "),a("img",{attrs:{src:e.posterurl,width:"100%"}})])])],1)]})],2)],1)])]):t._e()])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"title"},[e("h2",[this._v("漫画")])])}]};var c=a("VU/8")(r,o,!1,function(t){a("chwt")},"data-v-46a4f9a7",null).exports,l=a("//Fk"),d=a.n(l),u={data:function(){return{msg:"Welcome to Your Vue.js App",list1:[1,2,3,4,5,6,7,8,9,10]}},methods:{handleReachBottom:function(){var t=this;return new d.a(function(e){setTimeout(function(){for(var a=t.list1[t.list1.length-1],n=1;n<11;n++)t.list1.push(a+n);e()},2e3)})}}},h={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("Scroll",{attrs:{"on-reach-bottom":t.handleReachBottom}},t._l(t.list1,function(e,n){return a("Card",{key:n,staticStyle:{margin:"20px 0"},attrs:{"dis-hover":""}},[t._v("\n      Content "+t._s(e)+"\n    ")])}))],1)},staticRenderFns:[]};var m=a("VU/8")(u,h,!1,function(t){a("MC9l")},"data-v-386e5bca",null).exports,v={name:"messagge",data:function(){return{message_list:"",edittext:"",editauthor:"",editdate:"",ctime:"",cdate:"",value7:"",value8:""}},components:{},created:function(){this.initData()},methods:{initData:function(){var t=this;this.edittext="",s()({method:"get",url:"/api/get_messageList"}).then(function(e){t.message_list=e.data}).catch(function(t){console.log(t)})},zeroPadding:function(t,e){for(var a="",n=0;n<e;n++)a+="0";return(a+t).slice(-e)},tabs:function(){var t=new Date;this.ctime=this.zeroPadding(t.getHours(),2)+":"+this.zeroPadding(t.getMinutes(),2)+":"+this.zeroPadding(t.getSeconds(),2),this.cdate=this.zeroPadding(t.getFullYear(),4)+"-"+this.zeroPadding(t.getMonth()+1,2)+"-"+this.zeroPadding(t.getDate(),2),this.editauthor="游客",this.editdate=this.cdate+" "+this.ctime,s()({method:"post",url:"api/write_message",data:{author:this.editauthor,date:this.editdate,message:this.edittext},timeout:3e3}).then(function(t){"200"==t.status?(self.classFade="",self.errinfo="留言成功！"):(self.classFade="",self.errinfo="留言失敗，未知的錯誤！")}).catch(function(t){console.log(t),self.classFade="",self.errinfo="服務器繁忙，請刷新頁面或者稍後重試!(Error code: 504)"}),this.initData()}}},f={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticStyle:{padding:"2%"}},[a("h1",{staticStyle:{"margin-left":"5%"}},[t._v("留言板")]),t._v(" "),t._l(t.message_list,function(e){return a("div",[a("div",{staticClass:"commonboard"},[a("div",{staticClass:"title"},[a("div",{staticClass:"author"},[t._v(t._s(e.author)+" :")]),t._v(" "),a("div",{staticClass:"date"},[t._v(t._s(e.date))])]),t._v(" "),a("div",[a("Input",{staticClass:"contnt",attrs:{type:"textarea",readonly:"",placeholder:e.message,autosize:{minRows:1,maxRows:20}}}),t._v(" "),a("Button",{staticClass:"request"},[t._v("回复")])],1)])])}),t._v(" "),a("div",{staticClass:"editboard"},[a("h2",{staticStyle:{margin:"1% 3%"}},[t._v("留言区")]),t._v(" "),a("Input",{staticClass:"editarea",attrs:{type:"textarea",autosize:{minRows:9,maxRows:9},placeholder:"请输入留言信息..."},model:{value:t.edittext,callback:function(e){t.edittext=e},expression:"edittext"}}),t._v(" "),a("Button",{staticClass:"submitbutton",attrs:{type:"success"},on:{click:t.tabs}},[t._v("提交留言")])],1)],2)},staticRenderFns:[]};var p=a("VU/8")(v,f,!1,function(t){a("gqJL")},"data-v-dc474770",null).exports,_={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("h1",[e("a",{attrs:{href:"/Port(V3.0).zip",download:"Port(V3.0).zip"}},[this._v("小南瓜串口下载")])])])}]};var g=a("VU/8")({name:"mainother",data:function(){return{msg:"Welcome to Your Vue.js App"}}},_,!1,function(t){a("70t8")},"data-v-48eece46",null).exports,y={name:"myheader",data:function(){return{header_nav_items:[{label:"首页",type:"ios-home",isactive:!1,path:"/",name:"home"},{label:"文章",type:"ios-paper",isactive:!1,path:"/article",name:"article"},{label:"留言",type:"ios-compose",isactive:!1,path:"/message",name:"message"},{label:"其他",type:"ios-crop-strong",isactive:!1,path:"/other",name:"other"}],header_login_items:[{label:"登录",type:"person",isactive:!1,path:"/"},{label:"注册",type:"person-add",isactive:!0,path:"/"}]}},components:{myHome:c,myArticle:m,myMessage:p,myOther:g},created:function(){this.initData()},computed:{},watch:{$route:function(){for(var t in this.header_nav_items)this.$route.name===this.header_nav_items[t].name?this.header_nav_items[t].isactive=!0:this.header_nav_items[t].isactive=!1}},methods:{initData:function(){for(var t=0;t<this.header_nav_items.length;t++)this.$route.name===this.header_nav_items[t].name?this.header_nav_items[t].isactive=!0:this.header_nav_items[t].isactive=!1},toggle:function(t,e){for(var a in t)t[a]==e?t[a].isactive=!0:t[a].isactive=!1}}},C={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"layout-header"},[a("div",{staticClass:"layout-nav",staticStyle:{float:"left","margin-left":"40px"}},[t._l(t.header_nav_items,function(e){return[a("router-link",{attrs:{to:e.path}},[a("div",{staticClass:"header_nav",on:{click:function(a){t.toggle(t.header_nav_items,e)}}},[a("span",{class:{header_nav_active:e.isactive}},[a("Icon",{attrs:{type:e.type}}),t._v(" "+t._s(e.label)+"\n              ")],1)])])]})],2),t._v(" "),a("div",{staticClass:"layout-nav",staticStyle:{float:"right"}},[t._l(t.header_login_items,function(e){return[a("router-link",{attrs:{to:""}},[a("div",{staticClass:"header_nav",on:{click:function(a){t.toggle(t.header_login_items,e)}}},[a("span",{staticStyle:{"font-size":"16px",padding:"0"}},[a("Icon",{attrs:{type:e.type}}),t._v(t._s(e.label)+"\n              ")],1)])])]})],2)])},staticRenderFns:[]};var x=a("VU/8")(y,C,!1,function(t){a("NuVt")},"data-v-b4e614f8",null).exports,D={name:"blogfooter",data:function(){return{msg:"Welcome to Your Vue.js App",xxx:!0}},methods:{isfooter_bottom:function(){return $("body").scrollTop(1),$("body").scrollTop()>0?($("public-footer").removeClass("footer_bottom"),alert("有滚动条"),!1):($("public-footer").addClass("footer_bottom"),alert("无滚动条"),!0)}}},w={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"main-footer"},[this._v("\n  xinzongyan @ 2018\n")])},staticRenderFns:[]};var b=a("VU/8")(D,w,!1,function(t){a("YXCI")},"data-v-45cfcd12",null).exports,I={name:"showvisitnum",data:function(){return{axxx:"",ayyy:""}},components:{},created:function(){this.initData()},methods:{initData:function(){var t=this;s()({method:"get",url:"/api/show_visitnum"}).then(function(e){t.ayyy=e.data[0].yyy}).catch(function(t){console.log(t)})}}},k={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"show"},[e("p",[this._v("访问次数：\n    "),e("span",[this._v(" "+this._s(this.ayyy)+" ")])])])},staticRenderFns:[]};var S={name:"compdate",data:function(){return{currentDay:1,currentMonth:1,currentYear:1970,currentWeek:1,days:[]}},created:function(){this.initData(null)},methods:{initData:function(t){var e=void 0;if(t)e=new Date(t);else{var a=new Date,n=new Date(this.formatDate(a.getFullYear(),a.getMonth(),1));n.setDate(35),e=new Date(this.formatDate(n.getFullYear(),n.getMonth()+1,1))}this.currentDay=e.getDate(),this.currentYear=e.getFullYear(),this.currentMonth=e.getMonth()+1,this.currentWeek=e.getDay(),0==this.currentWeek&&(this.currentWeek=7);var i=this.formatDate(this.currentYear,this.currentMonth,this.currentDay);this.days.length=0;for(var s=this.currentWeek-1;s>=0;s--){var r=new Date(i);r.setDate(r.getDate()-s);var o={};o.day=r,this.days.push(o)}for(var c=1;c<=42-this.currentWeek;c++){var l=new Date(i);l.setDate(l.getDate()+c);var d={};d.day=l,this.days.push(d)}},pickPre:function(t,e){var a=new Date(this.formatDate(t,e,1));a.setDate(0),this.initData(this.formatDate(a.getFullYear(),a.getMonth()+1,1))},pickNext:function(t,e){var a=new Date(this.formatDate(t,e,1));a.setDate(35),this.initData(this.formatDate(a.getFullYear(),a.getMonth()+1,1))},pickYear:function(t,e){alert(t+","+e)},formatDate:function(t,e,a){var n=e;n<10&&(n="0"+n);var i=a;return i<10&&(i="0"+i),t+"-"+n+"-"+i}}},M={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"Calendar"},[a("div",{attrs:{id:"idCalendarPre"},on:{click:function(e){t.pickPre(t.currentYear,t.currentMonth)}}},[t._v("<<")]),t._v(" "),a("div",{attrs:{id:"idCalendarNext"},on:{click:function(e){t.pickNext(t.currentYear,t.currentMonth)}}},[t._v(">>")]),t._v(" "),a("span",{staticClass:"choose-year-month"},[t._v(t._s(t.currentYear)+"年 "+t._s(t.currentMonth)+"月")]),t._v(" "),t._m(0),t._v(" "),a("ul",{staticClass:"days"},t._l(t.days,function(e){return a("li",[e.day.getMonth()+1!=t.currentMonth?a("span",{staticClass:"other-month"},[t._v(t._s(e.day.getDate()))]):a("span",[e.day.getFullYear()==(new Date).getFullYear()&&e.day.getMonth()==(new Date).getMonth()&&e.day.getDate()==(new Date).getDate()?a("span",{staticClass:"active"},[t._v(t._s(e.day.getDate()))]):a("span",[t._v(t._s(e.day.getDate()))])])])}))])])},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ul",{staticClass:"weeks"},[a("li",[t._v("一")]),t._v(" "),a("li",[t._v("二")]),t._v(" "),a("li",[t._v("三")]),t._v(" "),a("li",[t._v("四")]),t._v(" "),a("li",[t._v("五")]),t._v(" "),a("li",{staticStyle:{color:"red"}},[t._v("六")]),t._v(" "),a("li",{staticStyle:{color:"red"}},[t._v("日")])])}]};var E={name:"comptime",data:function(){return{week:["SUN","MON","TUE","WED","THU","FRI","SAT"],timerID:setInterval(this.updateTime,1e3),ctime:"",cdate:""}},created:function(){this.updateTime()},methods:{zeroPadding:function(t,e){for(var a="",n=0;n<e;n++)a+="0";return(a+t).slice(-e)},updateTime:function(){var t=new Date;this.ctime=this.zeroPadding(t.getHours(),2)+":"+this.zeroPadding(t.getMinutes(),2)+":"+this.zeroPadding(t.getSeconds(),2),this.cdate=this.zeroPadding(t.getFullYear(),4)+"-"+this.zeroPadding(t.getMonth()+1,2)+"-"+this.zeroPadding(t.getDate(),2)+" "+this.week[t.getDay()]}}},F={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"myclock"}},[e("p",{staticClass:"mydate"},[this._v(this._s(this.cdate))]),this._v(" "),e("p",{staticClass:"mytime"},[this._v(this._s(this.ctime))])])},staticRenderFns:[]};var R={name:"constsider",data:function(){return{msg:"Welcome to Your Vue.js App"}},components:{myShowvisitnum:a("VU/8")(I,k,!1,function(t){a("TZaW")},"data-v-d533c554",null).exports,myDate:a("VU/8")(S,M,!1,function(t){a("Utvg")},"data-v-6e3cb43e",null).exports,myTime:a("VU/8")(E,F,!1,function(t){a("tyiZ")},"data-v-07612ab9",null).exports}},z={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"navdate"},[e("my-showvisitnum"),this._v(" "),e("my-time"),this._v(" "),e("my-date")],1)},staticRenderFns:[]};var V=a("VU/8")(R,z,!1,function(t){a("jKDa")},"data-v-74389356",null).exports,Y={data:function(){return{isCollapsed:!0}},computed:{rotateIcon:function(){return["menu-icon",this.isCollapsed?"rotate-icon":""]},menuitemClasses:function(){return["menu-item",this.isCollapsed?"collapsed-menu":""]}},methods:{collapsedSider:function(){this.$refs.side1.toggleCollapse()},changepage:function(t){this.$router.push(t),this.collapsedSider()}},components:{myMenu:U}},P={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"menu"},[a("div",{staticClass:"menumainicon"},[a("Icon",{class:t.rotateIcon,attrs:{type:"navicon-round",size:"24"},nativeOn:{click:function(e){t.collapsedSider(e)}}})],1),t._v(" "),a("Sider",{ref:"side1",style:{background:"#fff"},attrs:{"hide-trigger":"",collapsible:"","collapsed-width":0},model:{value:t.isCollapsed,callback:function(e){t.isCollapsed=e},expression:"isCollapsed "}},[!1===t.isCollapsed?a("div",[a("div",{staticClass:"sidebar-overlay active",on:{click:function(e){t.collapsedSider()}}})]):t._e(),t._v(" "),a("Menu",{class:t.menuitemClasses,attrs:{theme:"dark"},on:{"on-select":t.changepage}},[a("MenuItem",{attrs:{name:"/"}},[a("Icon",{attrs:{type:"ios-home"}}),t._v(" "),a("span",[t._v("首页")])],1),t._v(" "),a("MenuItem",{attrs:{name:"/article"}},[a("Icon",{attrs:{type:"ios-paper"}}),t._v(" "),a("span",[t._v("文章")])],1),t._v(" "),a("MenuItem",{attrs:{name:"/message"}},[a("Icon",{attrs:{type:"ios-compose"}}),t._v(" "),a("span",[t._v("留言")])],1),t._v(" "),a("MenuItem",{attrs:{name:"/other"}},[a("Icon",{attrs:{type:"ios-crop-strong"}}),t._v(" "),a("span",[t._v("其他")])],1)],1),t._v(" "),a("div",{staticStyle:{width:"100%",height:"4px",background:"#eee",overflow:"hidden"}}),t._v(" "),a("Menu",{class:t.menuitemClasses,attrs:{theme:"dark"}},[a("MenuItem",{attrs:{name:"5"}},[a("Icon",{attrs:{type:"person"}}),t._v(" "),a("span",[t._v("登录")])],1),t._v(" "),a("MenuItem",{attrs:{name:"6"}},[a("Icon",{attrs:{type:"person-add"}}),t._v(" "),a("span",[t._v("注册")])],1)],1)],1)],1)])},staticRenderFns:[]};var U=a("VU/8")(Y,P,!1,function(t){a("pWxT")},"data-v-415ba85a",null).exports,W={name:"app",data:function(){return{}},components:{myHeader:x,myFooter:b,Constsider:V,myMenu:U}},T={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("my-menu"),this._v(" "),e("div",{staticClass:"layout"},[e("div",{staticClass:"flex-direction-colum"},[e("div",{staticStyle:{height:"48px",overflow:"hidden",background:"#495060","z-index":"8"}},[e("div",{staticStyle:{margin:"0 auto","z-index":"9","max-width":"1000px",overflow:"hidden"}},[e("my-header")],1)]),this._v(" "),e("div",{staticStyle:{width:"100%","max-width":"1000px",margin:"0 auto"}},[e("div",{staticStyle:{"min-height":"100%",background:"rgb(255, 255, 255)"}},[e("router-view")],1)]),this._v(" "),e("Row",{attrs:{type:"flex",justify:"center"}},[e("Col",{attrs:{xs:0,sm:0,md:0,lg:0}},[e("div",{staticStyle:{width:"100%",display:"flex","justify-content":"center"}},[e("div",{staticStyle:{"min-width":"250px","max-width":"250px",flex:"0 0 250px"}},[e("Constsider")],1)])])],1)],1),this._v(" "),this._m(0)])],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"flex-direction-colum"},[e("div",{staticClass:"my-ivu-layout-footer"})])}]};var A=a("VU/8")(W,T,!1,function(t){a("C/dv")},null,null).exports,j=a("/ocq"),q={data:function(){return{msg:"Welcome to Your Vue.js App",comicChapters:"",chapterArr:[],comicInfo:"",comic_id:"",baseurl:"http://www.kuaikanmanhua.com",loading:!1,loading2:!1,get:null,error:null}},created:function(){this.comic_id=this.$route.query.id,this.initData()},methods:{initData:function(){var t=this;t.error=t.comicInfo=t.chapterimgs=null,t.loading=!0,t.loading2=!0,s()({method:"get",url:"/api/get_comicInfoByid?id="+t.comic_id}).then(function(e){t.comicInfo=e.data[0],t.loading=!1}).catch(function(e){t.error=e,console.log(e)}),s()({method:"get",url:"/api/get_comic_chapterInfo?id="+t.comic_id+"&order=0"}).then(function(e){t.comicChapters=e.data;var a=[],n=0,i=0;for(i=0;i<t.comicChapters.length;i++)n++,a.push(t.comicChapters[i]),n%100==0&&(t.chapterArr.push({tabname:n-99+"~"+n,chapternames:a}),a=[]);n%100!=0&&t.chapterArr.push({tabname:n-n%100+1+"~"+n,chapternames:a}),t.loading2=!1}).catch(function(t){console.log(t)})}}},N={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t.loading?a("div",{staticClass:"loading"},[t._v("\n    Loading...\n  ")]):t._e(),t._v(" "),t.error?a("div",{staticClass:"error"},[t._v("\n    "+t._s(t.error)+"\n  ")]):t._e(),t._v(" "),0==t.loading?a("div",{},[a("Row",{attrs:{type:"flex"}},[a("Col",{attrs:{xs:24,sm:12,md:12,lg:12}},[a("div",{staticStyle:{"max-width":"500px",padding:"2%"}},[a("img",{attrs:{src:t.comicInfo.posterurl,width:"100%"}})])]),t._v(" "),a("Col",{attrs:{xs:24,sm:12,md:12,lg:12}},[a("div",{staticStyle:{padding:"2%"}},[a("h2",{staticStyle:{margin:"2% 0"}},[t._v(t._s(t.comicInfo.name))]),t._v(" "),a("div",[t._v("作者："+t._s(t.comicInfo.author))]),t._v(" "),a("div",[t._v("介绍："+t._s(t.comicInfo.introduce))])])])],1),t._v(" "),0==t.loading2?a("div",{staticStyle:{padding:"2%"}},[a("Tabs",{attrs:{type:"card"}},[t._l(t.chapterArr,function(e){return[a("TabPane",{attrs:{label:e.tabname}},[a("Row",{attrs:{type:"flex"}},[t._l(e.chapternames,function(e){return[a("Col",{staticStyle:{border:"1px solid  #f3f3f3"},attrs:{xs:12,sm:8,md:6,lg:6}},[a("router-link",{attrs:{to:{path:"/comic/chapterimgs",query:{id:t.comic_id,num:e.num}}}},[a("div",{staticStyle:{margin:"5px 1px"}},[a("div",{},[t._v("\n                      "+t._s(e.title)+"\n                    ")])])])],1)]})],2)],1)]})],2)],1):t._e()],1):t._e()])},staticRenderFns:[]};var H=a("VU/8")(q,N,!1,function(t){a("yl0w")},"data-v-eb768aac",null).exports,B={data:function(){return{msg:"Welcome to Your Vue.js App",comic_id:"",chapter_num:0,changeChapternum:0,chapterimgs:[],loading:!1,get:null,error:null}},created:function(){this.comic_id=this.$route.query.id,this.chapter_num=parseInt(this.$route.query.num),this.changeChapternum=this.chapter_num;this.initData()},methods:{initData:function(){var t=this;t.error=t.chapterimgs=null,t.loading=!0,s()({method:"get",url:"/api/get_comic_chapter_imgInfo?id="+this.comic_id+"&num="+this.chapter_num}).then(function(e){t.chapterimgs=e.data,t.loading=!1}).catch(function(e){t.error=e,console.log(e)})},tabs:function(){var t=this,e=this;return new d.a(function(a){t.changeChapternum+=1,s()({method:"get",url:"/api/get_comic_chapter_imgInfo?id="+t.comic_id+"&num="+t.changeChapternum}).then(function(t){for(var a=0;a<t.data.length;a++)e.chapterimgs.push(t.data[a])}).catch(function(t){e.error=t,console.log(t)})})}}},L={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t.loading?a("div",{staticClass:"loading"},[t._v("\n    Loading...\n  ")]):t._e(),t._v(" "),t.error?a("div",{staticClass:"error"},[t._v("\n    "+t._s(t.error)+"\n  ")]):t._e(),t._v(" "),t.chapterimgs?a("div",{staticClass:"content"},[t._l(t.chapterimgs,function(t){return[a("img",{attrs:{src:t.url,width:"100%"}})]}),t._v(" "),a("div",[a("Button",{staticClass:"changebutton",attrs:{type:"success"},on:{click:t.tabs}},[t._v(" 点击加载更多")])],1)],2):t._e()])},staticRenderFns:[]};var O=a("VU/8")(B,L,!1,function(t){a("7hRC")},"data-v-169fee2b",null).exports;n.a.use(j.a);var Z=new j.a({mode:"history",routes:[{path:"/",name:"home",component:c,beforeEnter:function(t,e,a){document.title="辛宗彦的主页",a()}},{path:"/article",name:"article",component:m,beforeEnter:function(t,e,a){document.title="文章",a()}},{path:"/message",name:"message",component:p,beforeEnter:function(t,e,a){document.title="消息",a()}},{path:"/other",name:"other",component:g,beforeEnter:function(t,e,a){document.title="其他",a()}},{path:"/comic/chapters",name:"Comicchapters",component:H,beforeEnter:function(t,e,a){document.title="漫画",a()}},{path:"/comic/chapterimgs",name:"Comicchapterimgs",component:O,beforeEnter:function(t,e,a){document.title="漫画",a()}}]}),J=a("UC6W"),K=a.n(J);a("igES");n.a.config.productionTip=!1,n.a.use(K.a),new n.a({el:"#app",router:Z,components:{App:A},template:"<App/>"})},NuVt:function(t,e){},TZaW:function(t,e){},Utvg:function(t,e){},YXCI:function(t,e){},chwt:function(t,e){},gqJL:function(t,e){},igES:function(t,e){},jKDa:function(t,e){},pWxT:function(t,e){},tyiZ:function(t,e){},yl0w:function(t,e){}},["NHnr"]);