"use strict";(self["webpackChunklierjie"]=self["webpackChunklierjie"]||[]).push([[651],{47651:function(t,e,a){a.r(e),a.d(e,{default:function(){return f}});var n=function(){var t=this,e=t._self._c;return e("div",{staticClass:"app-container"},[e("div",{staticClass:"layout-content"},[t.$route.meta.keepAlive?e("keep-alive",[e("router-view")],1):e("router-view")],1),e("div",{staticClass:"layout-footer"},[e("TabBar",{attrs:{data:t.tabbars},on:{change:t.handleChange}})],1)])},r=[],i=function(){var t=this,e=t._self._c;return e("div",[e("van-tabbar",{attrs:{fixed:"",route:""},on:{change:t.handleChange},model:{value:t.active,callback:function(e){t.active=e},expression:"active"}},t._l(t.data,(function(a,n){return e("van-tabbar-item",{key:n,attrs:{to:a.to,icon:a.icon}},[t._v(" "+t._s(a.title)+" ")])})),1)],1)},o=[],l={name:"TabBar",props:{defaultActive:{type:Number,default:0},data:{type:Array,default:()=>[]}},data(){return{active:this.defaultActive}},methods:{handleChange(t){this.$emit("change",t)}}},u=l,s=a(1001),c=(0,s.Z)(u,i,o,!1,null,"4a454b4a",null),d=c.exports,h={name:"AppLayout",data(){return{tabbars:[{title:"首页",to:{name:"Home"},icon:"home-o"},{title:"关于我",to:{name:"About"},icon:"user-o"}]}},components:{TabBar:d},methods:{handleChange(t){}}},v=h,b=(0,s.Z)(v,n,r,!1,null,null,null),f=b.exports}}]);