(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b81201f2"],{"297b":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"page flex-v"},[a("div",{staticClass:"head flex-v-center flex-justify"},[a("el-breadcrumb",{staticClass:"my-breadcrumb",attrs:{"separator-class":"el-icon-arrow-right"}},[a("el-breadcrumb-item",{attrs:{to:{name:"SetMealList"}}},[t._v("套餐维护")]),a("el-breadcrumb-item",[t._v("查看")])],1)],1),a("div",{staticClass:"container"},[a("el-form",{staticClass:"default-form-style",attrs:{inline:"",size:"small"}},[a("el-row",[a("el-col",{attrs:{span:6}},[a("el-form-item",{attrs:{label:"套餐名称："}},[t._v("\n            "+t._s(t.dataInfo.packName)+"\n          ")])],1),a("el-col",{attrs:{span:6}},[a("el-form-item",{attrs:{label:"套餐编号："}},[t._v("\n            "+t._s(t.dataInfo.sysGuid)+"\n          ")])],1),a("el-col",{attrs:{span:6}},[a("el-form-item",{attrs:{label:"套餐顺序："}},[t._v("\n            "+t._s(t.dataInfo.sortNum)+"\n          ")])],1),a("el-col",{attrs:{span:6}},[a("el-form-item",{attrs:{label:"拼音简码："}},[t._v("\n            "+t._s(t.dataInfo.pySimpleCode)+"\n          ")])],1),a("el-col",{attrs:{span:6}},[a("el-form-item",{attrs:{label:"五笔简码："}},[t._v("\n            "+t._s(t.dataInfo.wbSimpleCode||"-")+"\n          ")])],1),a("el-col",{attrs:{span:6}},[a("el-form-item",{attrs:{label:"是否启用："}},[t._v("\n            "+t._s(1==t.dataInfo.enabled?"是":"否")+"\n          ")])],1)],1)],1),a("div",{staticClass:"table-box"},[a("h4",[t._v("已选项目")]),a("el-table",{attrs:{data:t.projectList,"header-cell-class-name":"custom-table-cell"}},[a("el-table-column",{attrs:{label:"项目名称",prop:"pname",align:"center"}}),a("el-table-column",{attrs:{label:"小项名称",prop:"smallProjects","min-width":"240px","show-overflow-tooltip":"",align:"center"}})],1)],1),t.hasUpdate?a("div",{attrs:{"data-btn-id":"106007002"}},[a("el-button",{staticClass:"btn-info",on:{click:function(e){return t.$router.push({name:"SetMealForm",params:{id:t.id}})}}},[t._v("修改")])],1):t._e()],1)])},n=[],r={name:"SetMealSee",props:{id:{type:String,required:!0}},data:function(){return{dataInfo:{},projectList:[]}},computed:{hasUpdate:function(){return~this.$store.state.btnAuthorityIds.indexOf("106007002")}},created:function(){this.getSetMealById(this.id)},methods:{getSetMealById:function(t){var e=this;this.$post("/sys/projectPackage/getBySysGuid",{sysGuid:t}).then(function(t){var a=t.data;e.dataInfo=a.packBasic;var s=a.thisOrgAllProjects,n=a.packChoice.map(function(t){return t.projectId});e.projectList=s.filter(function(t){return t.smallProjects.some(function(t){return~n.indexOf(t.sysGuid)})}).map(function(t){var e=t.smallProjects.filter(function(t){return~n.indexOf(t.sysGuid)}).map(function(t){return t.pname}),a={pname:t.pname,smallProjects:e.join("、")};return a})}).catch(function(t){return t})}}},l=r,i=(a("7e65"),a("2877")),o=Object(i["a"])(l,s,n,!1,null,"5d91fc22",null);e["default"]=o.exports},"6e5c":function(t,e,a){},"7e65":function(t,e,a){"use strict";var s=a("6e5c"),n=a.n(s);n.a}}]);
//# sourceMappingURL=chunk-b81201f2.4b763313.js.map