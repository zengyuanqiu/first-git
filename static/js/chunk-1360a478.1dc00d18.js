(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1360a478"],{"1d89":function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAYAAADE6YVjAAADL0lEQVRIiZ2VP6idRRDFf4e7795CUBCUF2KE50sRBAWFoAGtBEEMNnYWYikSG0sLK4tUQYgiWIiVBEQtnhAbC0EiGItXv8JOFBFCilxQzB6L2T/zXVP5Nffu7uycmTNnZnVw8u79wFXgVeA+/t/3D3ATeAs43j0seHUV8boNiF8xf0lx6B1jtT0ZrG4hgDOYCxLXDWeBO91GQKmsLoJAvAIc0S7b3W0HMHWs+3mzEQ+Db9g6BD+L9F0EYwwUe+9B8J9CRzny7kRqGdkYgdqvTWQsMH8YLgMvCm7ZAVAVuRezB/Y20+Mg5gzoKdubTtOgakQiPFe3gS+AQ8Mh6LbhB8y2mAL5YgC8DVwBygBXc6qZ5oJRL+toCap/Ay4Wez1AGjWPyL4CKlYUVsNpGMxKBZ7suDyF0NFOAR+V6r0eZi/2k8YlAlYvc05nEbEgBGGn05yezkcmy5w1oha4aVtEtHYorUMYY0W2FS2ybN+q1AHSUu4RSVAboqD2yofTr7G/BSHxns3p7rEumisCLNWbIVM1RzU4IKsKZhPK/AT+BItqLqEA0X/9g6GYzeiJIUcHqgeLnmt3iYe9IKJSE52S98Z+sde9L3bUqNGx7KyVSlyTz355eovNctcb4B7UzADBvgY6rpOM7xM1H2AeSkS9YTi3qIkbiAew57oOlR2BP8/dF38N1qfLUarnEefAwVwUfh0zrmagltkU3HSRa1XDMI+abi+3/pEpZg2VVZUacnjvXLe994F3ZtH9IeazZn0txntvaJ3FboGE9kutm7uIU5jHjH/pRQvVtElqDiQOBk32fpu+gB8HnuhiGB2f0i+VvZ9lPWP4UXDZcJLEOQdfqteiIxaDcd7LPVPw+s0K14F90AvGJ+rjo5MtDSdToqNK88VkSryO4opSWR9jDoHnDFvggR70aC73kdAP9BrwdJvSj84W6U2b7A0qN2/tJMfLwDeTBOUBnr5EzT1YzLmFuvKTJ/09jPKUGe+IEjRMkhrK4t02wLZUr4bPhnND5nek/TywYhr0UZ5UlHNKthrzz18WXBaPmeEO8BLmY8R5YJWbMVV5Xup3lcvGFvgKuPQv8WHfKjqAI4QAAAAASUVORK5CYII="},"20fd":function(e,t,a){"use strict";var s=a("d9f6"),o=a("aebd");e.exports=function(e,t,a){t in e?s.f(e,t,o(0,a)):e[t]=a}},"4c15":function(e,t,a){},"4d9e":function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"page flex-v"},[s("div",{staticClass:"head flex-v-center flex-justify"},[s("div",{staticClass:"head-title"},[e._v("角色维护")]),e.btns.hasInsert?s("div",{staticClass:"head-btn",attrs:{"data-btn-id":"106003001"},on:{click:function(t){return e.openDialog("insert")}}},[s("img",{attrs:{src:a("1d89"),alt:"登记"}}),e._v(" "),s("span",[e._v("新增")])]):e._e()]),s("div",{staticClass:"query-form"},[s("el-form",{staticClass:"default-form-style",attrs:{inline:"",size:"small"}},[s("el-form-item",{attrs:{label:"角色："}},[s("el-input",{attrs:{placeholder:"请输入",clearable:""},model:{value:e.querys.roleName,callback:function(t){e.$set(e.querys,"roleName",t)},expression:"querys.roleName"}})],1),s("el-form-item",{attrs:{label:"所属机构名称："}},[s("el-select",{attrs:{clearable:""},model:{value:e.querys.createOrganizationId,callback:function(t){e.$set(e.querys,"createOrganizationId",t)},expression:"querys.createOrganizationId"}},e._l(e.orgList,function(e){return s("el-option",{key:e.sysGuid,attrs:{value:e.sysGuid,label:e.oname}})}),1)],1),s("el-form-item",[s("el-button",{attrs:{icon:"el-icon-search",round:""},on:{click:function(t){return e.$refs.pagination.initPageList(1)}}},[e._v("查询")])],1)],1)],1),s("div",{staticClass:"table-box flex-item"},[s("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],attrs:{data:e.tableData,height:"100%","header-cell-class-name":"custom-table-cell",stripe:""}},[s("el-table-column",{attrs:{label:"序号",type:"index"},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.$index;return[e._v("\n          "+e._s(a+(e.pageNum-1)*e.pageSize+1)+"\n        ")]}}])}),s("el-table-column",{attrs:{label:"机构名称",prop:"orgName","show-overflow-tooltip":""}}),s("el-table-column",{attrs:{label:"角色",prop:"roleName"}}),s("el-table-column",{attrs:{label:"角色状态",prop:"status"},scopedSlots:e._u([{key:"default",fn:function(e){var t=e.row;return[s("span",{class:[1==t.status?"status-enable":"status-disable"]})]}}])}),s("el-table-column",{attrs:{label:"权限"},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.row;return[s("a",{staticClass:"link",on:{click:function(t){return e.jumpAssign(a)}}},[e._v("关联权限")])]}}])}),s("el-table-column",{attrs:{label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.row;return[s("i",{staticClass:"iconfont bj-search",on:{click:function(t){return e.openDialog("see",a)}}}),e.btns.hasUpdate&&1==a.status?s("i",{staticClass:"iconfont bj-edit",attrs:{"data-btn-id":"106003002"},on:{click:function(t){return e.openDialog("update",a)}}}):e._e()]}}])})],1)],1),s("div",{staticClass:"foot"},[s("bj-pagination",{ref:"pagination",attrs:{queryUrl:"/role/getRoleByCondition",queryObj:e.querys},on:{listResult:e.getListResult,controlLoading:function(t){e.loading=t}}})],1),s("el-dialog",{staticClass:"flex",attrs:{visible:e.dialogIsShow,"custom-class":"my-dialog",width:"500px",title:e.dialogTitles[e.dialogType],"close-on-click-modal":!1,center:""},on:{"update:visible":function(t){e.dialogIsShow=t}}},["see"===e.dialogType?[s("div",{staticClass:"flex"},[s("el-form",{staticClass:"see-style",attrs:{size:"small","label-width":"auto"}},[s("el-form-item",{attrs:{label:"角色名称："}},[e._v("\n            "+e._s(e.dataInfo.roleName)+"\n          ")]),s("el-form-item",{attrs:{label:"是否启用："}},[e._v("\n            "+e._s(1==e.dataInfo.status?"是":"否")+"\n          ")]),s("el-form-item",{attrs:{label:"备注："}},[e._v("\n            "+e._s(e._f("emptyData")(e.dataInfo.remark))+"\n          ")])],1)],1),e.btns.hasUpdate?s("div",{attrs:{slot:"footer","data-btn-id":"106003002"},slot:"footer"},[s("el-button",{staticClass:"btn-info",on:{click:function(t){return e.openDialog("update")}}},[e._v("修改")])],1):e._e()]:[s("el-form",{ref:"form",attrs:{size:"small","label-width":"auto",model:e.formFields,rules:e.rules}},[s("el-form-item",{attrs:{label:"角色名称：",prop:"roleName"}},[s("el-input",{attrs:{placeholder:"请输入角色名称",maxlength:"11"},model:{value:e.formFields.roleName,callback:function(t){e.$set(e.formFields,"roleName",t)},expression:"formFields.roleName"}})],1),s("el-form-item",{attrs:{label:"是否启用：",prop:"status"}},[s("el-select",{staticClass:"block",attrs:{placeholder:"启用"},model:{value:e.formFields.status,callback:function(t){e.$set(e.formFields,"status",t)},expression:"formFields.status"}},[s("el-option",{attrs:{value:"1",label:"启用"}}),s("el-option",{attrs:{value:"2",label:"禁用"}})],1)],1),s("el-form-item",{attrs:{label:"备注：",prop:"remark"}},[s("el-input",{attrs:{type:"textarea",rows:"4",resize:"none",maxlength:"201"},model:{value:e.formFields.remark,callback:function(t){e.$set(e.formFields,"remark",t)},expression:"formFields.remark"}})],1)],1),s("div",{attrs:{slot:"footer"},slot:"footer"},[s("el-button",{staticClass:"btn-hollowing",on:{click:function(t){e.dialogIsShow=!1}}},[e._v("取消")]),s("el-button",{staticClass:"btn-info",attrs:{loading:e.submitLoading},on:{click:e.onSubmit}},[e._v("保存")])],1)]],2)],1)},o=[],i=a("cebc"),r=(a("456d"),a("ac6a"),a("75fc")),l=a("b279"),n=a("2f62"),c={name:"RoleList",data:function(){var e=this.$store.getters.o_userinfo.orgGuid;return{tableData:[],querys:{roleName:"",createOrganizationId:e},pageNum:1,pageSize:10,formFields:{roleId:"",roleName:"",status:"1",remark:""},rules:{roleName:[{required:!0,message:"请输入角色名称",trigger:"blur",whitespace:!0}].concat(Object(r["a"])(Object(l["i"])(10))),status:{required:!0,message:"请选择是否启用"},remark:{max:200,message:"最多输入200个字符"}},dataInfo:{},dialogIsShow:!1,dialogType:"",loading:!0,submitLoading:!1}},created:function(){this.dialogTitles={insert:"新增",update:"修改",see:"查看"}},methods:{getListResult:function(e){var t=e.list,a=e.pageNum,s=e.pageSize;this.tableData=t,this.pageNum=a,this.pageSize=s},openDialog:function(e,t){var a=this;this.dialogIsShow=!0,this.dialogType=e,t?(this.dataInfo=t,Object.keys(this.formFields).forEach(function(e){a.formFields[e]=t[e]}),this.formFields.roleId=t["roleId"]):"insert"===e&&(Object.keys(this.formFields).forEach(function(e){a.formFields[e]="","roleId"===e&&delete a.formFields[e]}),this.formFields.status="1"),"see"!==this.dialogType&&this.$nextTick(function(){return a.$refs.form.clearValidate()})},onSubmit:function(){var e=this;this.$refs.form.validate(function(t){if(t){e.submitLoading=!0;var a="/role/".concat(e.dialogType,"OneRole"),s=e.dialogTitles[e.dialogType];e.$post(a,e.formFields).then(function(t){e.submitLoading=!1,e.dialogIsShow=!1,e.$refs.pagination.initPageList(),e.$message.success("".concat(s,"成功"))}).catch(function(t){e.submitLoading=!1,e.$message.error(t)})}})},jumpAssign:function(e){var t=e.roleId,a=e.roleName;this.$router.push({name:"AssignPermissions",params:{roleId:t,roleName:a}})}},computed:Object(i["a"])({btns:function(){var e=this.$store.state.btnAuthorityIds;return{hasInsert:~e.indexOf("106003001"),hasUpdate:~e.indexOf("106003002"),hasDel:~e.indexOf("106003003")}}},Object(n["c"])(["orgList"]))},u=c,d=(a("d99e"),a("2877")),f=Object(d["a"])(u,s,o,!1,null,"e6002138",null);t["default"]=f.exports},"549b":function(e,t,a){"use strict";var s=a("d864"),o=a("63b6"),i=a("241e"),r=a("b0dc"),l=a("3702"),n=a("b447"),c=a("20fd"),u=a("7cd6");o(o.S+o.F*!a("4ee1")(function(e){Array.from(e)}),"Array",{from:function(e){var t,a,o,d,f=i(e),m="function"==typeof this?this:Array,b=arguments.length,g=b>1?arguments[1]:void 0,p=void 0!==g,v=0,h=u(f);if(p&&(g=s(g,b>2?arguments[2]:void 0,2)),void 0==h||m==Array&&l(h))for(t=n(f.length),a=new m(t);t>v;v++)c(a,v,p?g(f[v],v):f[v]);else for(d=h.call(f),a=new m;!(o=d.next()).done;v++)c(a,v,p?r(d,g,[o.value,v],!0):o.value);return a.length=v,a}})},"54a1":function(e,t,a){a("6c1c"),a("1654"),e.exports=a("95d5")},"75fc":function(e,t,a){"use strict";var s=a("a745"),o=a.n(s);function i(e){if(o()(e)){for(var t=0,a=new Array(e.length);t<e.length;t++)a[t]=e[t];return a}}var r=a("774e"),l=a.n(r),n=a("c8bb"),c=a.n(n);function u(e){if(c()(Object(e))||"[object Arguments]"===Object.prototype.toString.call(e))return l()(e)}function d(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function f(e){return i(e)||u(e)||d()}a.d(t,"a",function(){return f})},"774e":function(e,t,a){e.exports=a("d2d5")},"95d5":function(e,t,a){var s=a("40c3"),o=a("5168")("iterator"),i=a("481b");e.exports=a("584a").isIterable=function(e){var t=Object(e);return void 0!==t[o]||"@@iterator"in t||i.hasOwnProperty(s(t))}},c8bb:function(e,t,a){e.exports=a("54a1")},d2d5:function(e,t,a){a("1654"),a("549b"),e.exports=a("584a").Array.from},d99e:function(e,t,a){"use strict";var s=a("4c15"),o=a.n(s);o.a}}]);
//# sourceMappingURL=chunk-1360a478.1dc00d18.js.map