(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-36df20b0"],{dcad:function(e,t,a){},e19d:function(e,t,a){"use strict";a.r(t);var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"page trialpreson flex-v trialdoctor"},[a("div",{staticClass:"headertitle flex"},[a("el-breadcrumb",{staticClass:"my-breadcrumb ",attrs:{"separator-class":"el-icon-arrow-right"}},[a("el-breadcrumb-item",{attrs:{to:{name:"totalcheckdoctor"}}},[e._v("总检医生工作量")]),a("el-breadcrumb-item",[e._v("更多")])],1)],1),a("div",{staticClass:"table-box flex-item",staticStyle:{"padding-top":"20px"}},[a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],ref:"multipleTable",attrs:{stripe:"",data:e.tableData,"tooltip-effect":"dark",height:"100%","header-cell-class-name":"custom-table-cell"}},[a("el-table-column",{attrs:{type:"index",width:"50",label:"序号"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n          "+e._s(t.$index+(e.pageNum-1)*e.pageSize+1)+"\n        ")]}}])}),a("el-table-column",{attrs:{align:"center",prop:"sysGuid",label:"个人登记流水号"}}),a("el-table-column",{attrs:{align:"center",prop:"userName",label:"姓名"}}),a("el-table-column",{attrs:{align:"center",label:"性别"},scopedSlots:e._u([{key:"default",fn:function(t){return[1==t.row.sexType?a("div",[e._v("男")]):e._e(),2==t.row.sexType?a("div",[e._v("女")]):e._e(),0==t.row.sexType?a("div",[e._v("-")]):e._e()]}}])}),a("el-table-column",{attrs:{align:"center",label:"年龄"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(e._f("emptyData")(t.row.age)))]}}])}),a("el-table-column",{attrs:{align:"center",prop:"examNum",label:"体检次数"}}),a("el-table-column",{attrs:{align:"center",label:"联系电话"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(e._f("emptyData")(t.row.contactPhone)))]}}])})],1)],1),a("div",{staticClass:"footer"},[a("bj-pagination",{ref:"paginationEvent",attrs:{"query-obj":e.$route.query,"query-url":"/charts/base/findDoctorCheckPerson"},on:{listResult:e.getListResult,controlLoading:function(t){e.loading=t}}})],1)])},n=[],r={name:"totaldoctormore",data:function(){return{loading:!1,pageNum:1,pageSize:10,tableData:[]}},methods:{getListResult:function(e){var t=e.list,a=e.pageNum,l=e.pageSize;this.tableData=t,this.pageNum=a,this.pageSize=l}}},o=r,s=(a("e6c6"),a("2877")),i=Object(s["a"])(o,l,n,!1,null,"1bfae47a",null);t["default"]=i.exports},e6c6:function(e,t,a){"use strict";var l=a("dcad"),n=a.n(l);n.a}}]);
//# sourceMappingURL=chunk-36df20b0.41d19ab7.js.map