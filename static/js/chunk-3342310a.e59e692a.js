(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3342310a"],{"1e02":function(e,t,n){"use strict";var s=n("87dd"),i=n.n(s);i.a},"87dd":function(e,t,n){},a8aa:function(e,t,n){"use strict";n.r(t);var s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"page flex-v"},[n("div",{staticClass:"head flex-v-center flex-justify"},[n("el-breadcrumb",{staticClass:"my-breadcrumb",attrs:{"separator-class":"el-icon-arrow-right"}},[n("el-breadcrumb-item",{attrs:{to:{name:"RoleList"}}},[e._v("角色管理")]),n("el-breadcrumb-item",[e._v("关联权限")])],1)],1),n("div",{staticClass:"all-checkbox flex-v-center"},[n("span",{staticClass:"iconfont bj-suiji"}),n("span",{staticClass:"role-name"},[e._v(e._s(e.roleName))]),n("el-checkbox",{staticClass:"green",on:{change:e.handleAllSelect},model:{value:e.isAllSelect,callback:function(t){e.isAllSelect=t},expression:"isAllSelect"}},[e._v("全选")])],1),n("div",{staticClass:"container flex-item"},[n("el-tree",{ref:"tree",staticClass:"tree",attrs:{data:e.allMenuList,props:e.defaultProps,"show-checkbox":"","node-key":"menuId"},on:{check:e.onCheckbox}}),n("div",{staticClass:"btns-box"},[n("el-button",{staticClass:"btn-hollowing",on:{click:function(t){return e.$router.back()}}},[e._v("取消")]),n("el-button",{staticClass:"btn-info",attrs:{loading:e.submitLoading},on:{click:e.onSubmit}},[e._v("保存")])],1)],1)])},i=[],l=(n("6b54"),n("ac6a"),{name:"AssignPermissions",props:{roleId:{type:String,required:!0},roleName:{type:String,required:!0}},data:function(){return{allMenuList:[],roleMenuList:[],defaultProps:{label:"menuName"},allSelectIds:[],isAllSelect:!1,submitLoading:!1}},created:function(){},mounted:function(){this.getMenuById()},methods:{getMenuById:function(){var e=this;this.$post("/role/getMenuByRole",{roleId:this.roleId}).then(function(t){var n=t.data;e.allMenuList=n.menuListByAccout,e.initSelectStatus(n.resultByRole)}).catch(function(t){return e.$message.error(t)})},initSelectStatus:function(e){var t=this;if(e.length){var n=[];(function e(t){t.forEach(function(t){if(t.children)return e(t.children);n.push(t.menuId)})})(e);var s=this.$refs.tree;s.setCheckedKeys(n),this.$nextTick(function(){var e=s.getCheckedKeys(),n=t.allMenuList.filter(function(t){return~e.indexOf(t.menuId)});t.isAllSelect=n.length===t.allMenuList.length})}},getSelectMenuIds:function(){var e=this.$refs.tree;return e.getCheckedKeys().concat(e.getHalfCheckedKeys())},handleAllSelect:function(e){var t=this.$refs.tree;e?t.setCheckedKeys(this.allMenuList.map(function(e){return e.menuId})):t.setCheckedKeys([])},onCheckbox:function(e,t){var n=t.checkedKeys,s=this.allMenuList.filter(function(e){return~n.indexOf(e.menuId)});this.isAllSelect=s.length===this.allMenuList.length},onSubmit:function(){var e=this,t=this.getSelectMenuIds();if(!t.length)return this.$message.warning("至少选择一项");this.submitLoading=!0,this.$post("/role/AddMenuByRole",{roleId:this.roleId,menus:t.toString()}).then(function(t){e.submitLoading=!1,e.$router.back(),e.$message.success("保存成功")}).catch(function(t){e.submitLoading=!1,e.$message.error(t)})}}}),a=l,c=(n("1e02"),n("2877")),r=Object(c["a"])(a,s,i,!1,null,"4a87cdc2",null);t["default"]=r.exports}}]);
//# sourceMappingURL=chunk-3342310a.e59e692a.js.map