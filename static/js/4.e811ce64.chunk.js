(this["webpackJsonpmy-react-app1"]=this["webpackJsonpmy-react-app1"]||[]).push([[4],{126:function(e,t,n){e.exports={main:"Friends_main__k6ikg",item:"Friends_item__223bd",avatar:"Friends_avatar__3Xb2s",name:"Friends_name__2_ZVq",pages:"Friends_pages__OAD-p"}},148:function(e,t,n){"use strict";n.r(t);var s=n(20),a=n(21),i=n(23),r=n(22),c=n(8),o=n(53),l=n(1),d=n.n(l),p=n(126),u=n.n(p),j=n(33),h=n(7),g=n(146),b=n(149),f=n(0),O=function(e){var t=Math.ceil(e.totalUsersCount/e.pageSize);return Object(f.jsxs)("div",{children:[Object(f.jsx)(b.a,{children:Object(f.jsx)(g.a,{className:u.a.pages,count:t,variant:"outlined",color:"primary",size:"small",onChange:function(t,n){e.onPageChanged(n)}})}),e.friendsData.map((function(t){return Object(f.jsxs)("div",{className:u.a.main,children:[Object(f.jsxs)("div",{className:u.a.avatar,children:[Object(f.jsx)("div",{children:Object(f.jsx)(h.b,{to:"/main/"+t.id,children:Object(f.jsx)("img",{src:null!==t.photos.small?t.photos.small:j.a,alt:"111"})})}),Object(f.jsx)("div",{children:t.followed?Object(f.jsx)("button",{onClick:function(){e.unfollow(t.id)},children:"Unfollow"}):Object(f.jsx)("button",{onClick:function(){e.follow(t.id)},children:"Follow"})})]}),Object(f.jsxs)("div",{className:u.a.item,children:[Object(f.jsxs)("div",{children:[Object(f.jsx)("div",{className:u.a.name,children:t.name}),Object(f.jsx)("div",{children:t.status})]}),Object(f.jsxs)("div",{children:[Object(f.jsx)("div",{children:"user.location.country"}),Object(f.jsx)("div",{children:"user.location.city"})]})]})]},t.id)}))]})},m=n(34),v=n(11),x=n(32),P=function(e){Object(i.a)(n,e);var t=Object(r.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,i=new Array(a),r=0;r<a;r++)i[r]=arguments[r];return(e=t.call.apply(t,[this].concat(i))).onPageChanged=function(t){e.props.getUsers(t,e.props.pageSize),e.props.setCurrentPage(t)},e}return Object(a.a)(n,[{key:"componentDidMount",value:function(){this.props.getUsers(this.props.currentPage,this.props.pageSize)}},{key:"render",value:function(){return Object(f.jsxs)(f.Fragment,{children:[this.props.isFetching?Object(f.jsx)(m.a,{}):null,Object(f.jsx)(O,{onPageChanged:this.onPageChanged,totalUsersCount:this.props.totalUsersCount,pageSize:this.props.pageSize,currentPage:this.props.currentPage,friendsData:this.props.friendsData,follow:this.props.follow,unfollow:this.props.unfollow})]})}}]),n}(d.a.Component);t.default=Object(v.c)(Object(c.b)((function(e){return{friendsData:e.friendsPage.friendsData,pageSize:e.friendsPage.pageSize,totalUsersCount:e.friendsPage.totalUsersCount,currentPage:e.friendsPage.currentPage,isFetching:e.friendsPage.isFetching}}),{follow:o.b,unfollow:o.e,setCurrentPage:o.d,getUsers:o.c}),x.a)(P)}}]);
//# sourceMappingURL=4.e811ce64.chunk.js.map