(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0a5917a8"],{"3bfe":function(e,t,a){},4254:function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"page flex-v"},[s("div",{staticClass:"head flex-v-center flex-justify"},[s("div",{staticClass:"head-title"},[e._v("指引单")]),s("div",{staticClass:"flex"},[s("el-form",{staticClass:"default-form-style",attrs:{size:"small",inline:""}},[s("el-form-item",{staticStyle:{"margin-bottom":"0"},attrs:{label:"体检流水号："}},[s("el-input",{attrs:{placeholder:"请输入",clearable:""},model:{value:e.examUserId,callback:function(t){e.examUserId=t},expression:"examUserId"}})],1),s("el-button",{staticStyle:{margin:"0 30px"},attrs:{icon:"el-icon-search",size:"small",round:""},on:{click:function(t){return e.getGuideSheet(e.examUserId)}}},[e._v("查询")])],1),s("div",{staticClass:"head-btn",on:{click:e.printPage}},[s("img",{attrs:{src:a("5ee8"),alt:"打印"}}),e._v(" "),s("span",[e._v("打印")])])],1)]),s("div",{ref:"print-html-box",staticClass:"container flex-item"},[s("guide-sheet-html",{staticClass:"guide-sheet",attrs:{user:e.user,guideSheetData:e.guideSheetData}})],1)])},i=[],n=a("7dae"),r=a("9ff9"),c={name:"GuideSheet",components:{GuideSheetHtml:r["a"]},data:function(){return{formShow:!0,user:{},guideSheetData:[],examUserId:""}},created:function(){this.initData()},methods:{initData:function(){var e=this;this.$post("/user/examUser/showReportExamList",{pageNum:1,pageSize:1}).then(function(t){var a=t.data;e.getGuideSheet(a.list[0].sysGuid)}).catch(function(t){return e.$message.error(t)})},printPage:function(){Object(n["a"])(this.$refs["print-html-box"],"体检指引单");var e=this.$loading();setTimeout(function(){return e.close()},800)},getGuideSheet:function(e){var t=this;""!==e.trim()&&this.$post("/user/examUser/showReportGuide",{examUserId:e}).then(function(e){var a=e.data,s=a.projectList,i=a.user;t.user=i,t.guideSheetData=s})}}},l=c,d=(a("43b0"),a("2877")),o=Object(d["a"])(l,s,i,!1,null,"1818de82",null);t["default"]=o.exports},"43b0":function(e,t,a){"use strict";var s=a("87d9"),i=a.n(s);i.a},"5ee8":function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAADXqc3KAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAACBFBMVEX/e4f/eoj/eYn/eYj/eon/eYr/eIr/dov/d4z/dY7/do7/dJD/c5D/c5H/cZP/cZL/b5b/bpX/b5X/bJj/bZj/apv/apr/aJ3/Z53/ZaH/ZaD/YqT/Y6P/X6f/YKf/Xan/W63/W6z/Wqz/e4f/e4f/eYj/eoj/eYr/eIr/d4v/d4z/dY7/dY7/dY7/do7/dY3/do7/do7/c5D/c5D/c5D/c5D/cZP/cZP/b5X/b5X/bJj/bZj/apr/apr/apv/apv/apv/apr/apv/apv/Z53/aJ7/aJ3/aJ3/Z57/aJ7/aJ3/Z53/Z57/Z57/ZaH/ZqD/Y6P/Y6T/YKf/YKb/Xan/Xqr/Xar/Xqn/W6z/W6z/Wa//WK//WK//Wa//WbD/Wa//WK//T7z/Trv/Tb3/Tb3/TL//S7//S77/S77/S7//e4f/eon/eoj/eYj/eIr/eYr/d4z/doz/d4v/dY7/c5D/cZL/cZP/b5X/bpX/b5b/bJj/bZj/bJf/apv/a5v/aJ7/aJ3/Z53/Z57/ZaH/ZaD/YqT/Y6T/YqP/Y6P/YKb/YKf/X6f/Xqr/Xar/Xan/Xqn/W6z/W63/WK//Wa//WbD/VrH/VrL/V7L/V7H/VLX/VLT/U7X/Urf/Ubb/Ubf/Urb/ULn/T7n/ULr/Trv/T7v/Trz/TL3/Tb3/TL//S7//S74AAAADFbluAAAAanRSTlMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACTbdX14h3iHeN6IiIjdh3iiAYd4h3iHeIeF+XiiAof5hfx43Xt3d3d7h/l4h3iHdX0k3NwkIiTagnd3d4La7e2QiQaR7pEGtHy19gAAAAFiS0dEq8kBZygAAAAJcEhZcwAACxIAAAsSAdLdfvwAAAAHdElNRQfjAxsJMjkhGI40AAAB1UlEQVQoz02IiV8ScRDFZzMIcqO47E5WzU66tPvQLpUO7T6h0korCEygTWmT3AXdbVkQZSUiShFM/srmx+6nT9+Z9+bNA0Ba2979R1sr6YCi1jTs9gcC/oD/fUCjnaKotWAwGIx7gqFgMKQrGNprNBoNsM5kMu0b/TBKGBurn/1YmcBsNq8/EA4fdLsPuZHDR8Lho9iZoZGm6WORSEcn3g003dkRiRxvxBIsGy2WE9Fo9KMOhpMWBDZZrbZT7CeWZcdRGMbZ01abzQZ2h8N+ZiI2gcQ+x2IknHXY7Q44d55zXuC4rm5nkxPp7vrCXWziLl2GK5PxzVfjX3t6+zwez7W+6z2T8RtbpqZuAi/wW/sFnucFgSeDd2CbIAiQSCa335pOJhN1TRPd3jGTmAFRFHfekSRREsmK0jdJursLf5BTqeZ79xVZkVPpdFpJK8qDh82ynILMbOaRi2FcLhfTQryFYZjHmcwsZOeyT556fV6vz4f+zIc8fzGXnYecqi6o+byaV9WcmsstqAQs4TtSwNG8UCDpB14oavwslYrFXxhKegG//7FIZhHDEskwWF4uayyXK+VKpaI9Q/CyWq2urOjSHXkFr4dH/qyu1sjW0OvURt68/QvyF+m02exa2AAAAABJRU5ErkJggg=="},"6f8c":function(e,t,a){"use strict";var s=a("3bfe"),i=a.n(s);i.a},"87d9":function(e,t,a){},"9ff9":function(e,t,a){"use strict";var s=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"guide-sheet"},[s("div",{staticClass:"head-barcode flex-center"},[s("div",{staticClass:"flex-v-center"},[s("div",{directives:[{name:"show",rawName:"v-show",value:e.user.createOrganizationIdLogo,expression:"user.createOrganizationIdLogo"}],staticClass:"logo flex-center flex-v-center",style:{background:e.user.createOrganizationIdLogo?"#fff":"#eee"}},[s("img",{attrs:{src:e.user.createOrganizationIdLogo,alt:"LOGO"}})]),s("div",{staticClass:"barcode-box"},[s("div",{staticClass:"title"},[e._v(e._s(e.user.createOrganizationName))]),s("svg",{attrs:{id:"barcode"}})])])]),s("div",{staticClass:"userinfo flex-v-center"},[s("div",{staticClass:"avatar flex-center flex-v-center",style:{background:e.user.addOn1?"#fff":"#eee"}},[e.user.addOn1?s("img",{attrs:{src:e.user.addOn1,alt:"图像"}}):[2==e.user.sexType?s("img",{attrs:{src:a("1b66"),alt:"图像"}}):s("img",{attrs:{src:a("9717"),alt:"图像"}})]],2),s("div",{staticClass:"info flex-item"},[s("div",{staticClass:"inline-box",staticStyle:{width:"40%"}},[s("label",[e._v("姓名：")]),s("span",[e._v(e._s(e.user.userName))])]),s("div",{staticClass:"inline-box",staticStyle:{width:"20%"}},[s("label",[e._v("性别：")]),s("span",[e._v(e._s(1==e.user.sexType?"男":2==e.user.sexType?"女":"不详"))])]),s("div",{staticClass:"inline-box",staticStyle:{width:"20%"}},[s("label",[e._v("年龄：")]),s("span",[e._v(e._s(e.user.age))])]),s("div",{staticClass:"inline-box",staticStyle:{width:"20%"}},[s("label",[e._v("体检次数：")]),s("span",[e._v(e._s(e.user.examNum))])]),s("div",{staticClass:"inline-box",staticStyle:{width:"33%"}},[s("label",[e._v("民族：")]),s("span",[e._v(e._s(e._f("emptyData")(e.user.nationCase)))])]),s("div",{staticClass:"inline-box",staticStyle:{width:"34%"}},[s("label",[e._v("开单人员：")]),s("span",[e._v(e._s(e.user.createUserName))])]),s("div",{staticClass:"inline-box",staticStyle:{width:"33%"}},[s("label",[e._v("开单时间：")]),s("span",[e._v(e._s(e._f("formatDate")(e.user.createDate)))])]),s("div",{staticClass:"inline-box",staticStyle:{width:"50%"}},[s("label",[e._v("联系电话：")]),s("span",[e._v(e._s(e.user.contactPhone))])]),s("div",{staticClass:"inline-box",staticStyle:{width:"50%"}},[s("label",[e._v("身份证号：")]),s("span",[e._v(e._s(e.user.idNo))])]),s("div",{staticClass:"inline-box",staticStyle:{"min-width":"50%"}},[s("label",[e._v("现住址：")]),s("span",[e._v(e._s(e.user.liveAddress))])])])]),s("div",{staticClass:"content"},[s("div",{staticClass:"title-item"},[e._v("温馨提示")]),s("ol",{staticClass:"ol-list"},e._l(e.headWaring,function(t){return s("li",{key:t},[e._v(e._s(t))])}),0)]),s("div",{staticClass:"content"},[s("dl",{staticClass:"box-item"},[e._m(0),e._l(e.guideSheetData,function(t,a){return s("dd",{key:a,staticClass:"flex"},[s("div",{staticClass:"flex-item flex-v-center"},[s("span",{staticClass:"box-line"}),s("span",{staticClass:"span-text"},[e._v(e._s(t.pname))])]),e._m(1,!0),s("div",{staticClass:"flex-item"})])})],2),s("ol",{staticClass:"ol-list"},e._l(e.endWaring,function(t){return s("li",{key:t},[e._v(e._s(t))])}),0)]),s("div",{staticClass:"footer"},[e._v("\n    欢迎并感谢您前来体检，祝您身体健康！\n  ")])])},i=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("dt",{staticClass:"flex"},[a("div",{staticClass:"flex-item",staticStyle:{"padding-left":"30px"}},[e._v("项目")]),a("div",{staticClass:"autograph"},[e._v("检查医生")]),a("div",{staticClass:"flex-item"},[e._v("体检地点")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"autograph"},[a("div",{staticStyle:{height:"100%","border-bottom":"1px solid #B2B2B2"}})])}],n=(a("28a5"),a("62c5")),r=a.n(n),c={name:"GuideSheetHtml",props:{user:{type:Object,default:function(){return{}}},guideSheetData:{type:Array,default:function(){return[]}}},mounted:function(){console.log(this.guideSheetData)},computed:{endWaring:function(){var e=this.user.endWaring;return e?e.split("@@"):[]},headWaring:function(){var e=this.user.headWaring;return e?e.split("@@"):[]}},methods:{createBarcode:function(e,t,a){r()("#barcode",e,{width:t,height:a})}},watch:{"user.examUserId":function(e){var t=this;e&&this.$nextTick(function(){t.createBarcode(e,2,36)})}}},l=c,d=(a("6f8c"),a("2877")),o=Object(d["a"])(l,s,i,!1,null,"29eafbc0",null);t["a"]=o.exports}}]);
//# sourceMappingURL=chunk-0a5917a8.4fb119e2.js.map