(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2809bbb4"],{1680:function(t,e,a){t.exports=a.p+"img/alert-circle.78e81ce6.svg"},"1f0e":function(t,e,a){t.exports=a.p+"img/settings.5e84a935.svg"},5464:function(t,e,a){"use strict";function n(t){const e=/^(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/;return e.test(String(t.toLowerCase()))}function o(t){const e=/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)/;return e.test(String(t))}function s(t){let e="http",a=t.indexOf(e),n=0;while(-1!==a)n++,a=t.indexOf(e,a+1);return n}function r(t){const e=new Date,a=new Date(t),n=e.getTime()-a.getTime();return parseInt(Math.abs(n/864e5))}a.d(e,"d",(function(){return n})),a.d(e,"c",(function(){return o})),a.d(e,"b",(function(){return s})),a.d(e,"a",(function(){return r}))},"6d1b":function(t,e,a){t.exports=a.p+"img/memo.f8f0067d.svg"},7561:function(t,e,a){"use strict";a.d(e,"a",(function(){return o})),a.d(e,"d",(function(){return r})),a.d(e,"c",(function(){return s})),a.d(e,"b",(function(){return i}));var n=a("365c");function o(t){return n["a"].post("contents/add",t)}function s(t){return n["a"].post("contents/addMultiple",t)}function r(t){return n["a"].post("contents/update",t)}function i(t){return n["a"].patch("contents/favorite/"+t)}},7598:function(t,e,a){"use strict";var n=function(){var t=this,e=t._self._c;return e("div",{staticClass:"modal"},[e("div",{staticClass:"overlay"}),e("div",{staticClass:"modal-card"},[e("div",{staticClass:"modal-card__header"},[e("h1",[t._v(t._s(t.categoryModalTitle))]),e("button",{staticClass:"btn--transparent btn__close",attrs:{type:"button"},on:{click:function(e){return t.$emit("close-modal")}}},[e("img",{attrs:{src:t.closeBtn}})])]),e("div",{staticClass:"modal-card__wrapper"},[e("div",{staticClass:"register-form__wrapper"},[t._m(0),e("div",{staticClass:"flex-container modal-form__wrapper"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.categoryName,expression:"categoryName"}],attrs:{placeholder:"10자 이하 권장"},domProps:{value:t.categoryName},on:{input:function(e){e.target.composing||(t.categoryName=e.target.value)}}})])])]),e("div",{staticClass:"modal-card__category__wrapper"},[e("div",{staticClass:"flex-container-col"},[e("button",{staticClass:"btn--sm btnPrimary",attrs:{disabled:!t.categoryName},on:{click:function(e){return t.categoryEvent()}}},[t._v(" 저장 ")])])]),e("div",{staticClass:"modal-card__category__wrapper"},[e("div",{staticClass:"flex-container"},[e("button",{staticClass:"btn--transparent login-form__link-register",on:{click:function(e){return t.$emit("deleteCategory")}}},[t._v(" "+t._s(t.deleteBtn)+" ")])])])])])},o=[function(){var t=this,e=t._self._c;return e("label",{staticClass:"register-form__label"},[t._v("이름"),e("em",[t._v("*")])])}],s=a("f7ed"),r=a.n(s),i={name:"ModalComponent",data(){return{closeBtn:r.a,categoryName:""}},props:{categoryModalTitle:String,deleteBtn:String},methods:{categoryEvent(){let t=this.categoryName;this.$emit("categoryEvent",t)}}},c=i,l=a("2877"),d=Object(l["a"])(c,n,o,!1,null,null,null);e["a"]=d.exports},"7bb7":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t._self._c;return e("div",{staticClass:"category-view"},[e("h1",{staticClass:"page-header"},[t._v(" 전체 "),e("button",{staticClass:"btn--transparent--img",on:{click:function(e){return t.openCategoryModal()}}},[e("img",{attrs:{src:t.setting}})])]),e("div",[e("div",{staticClass:"category__select-wrapper"},[e("select",{directives:[{name:"model",rawName:"v-model",value:t.categoryFilter,expression:"categoryFilter"}],on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.categoryFilter=e.target.multiple?a:a[0]}}},[e("option",{attrs:{value:"latest"}},[t._v("최신순")]),e("option",{attrs:{value:"favoirtes"}},[t._v("즐겨찾기순")]),e("option",{attrs:{value:"expiry"}},[t._v("읽을기한순")])])]),t._l(t.contentsData,(function(t,a){return e("contents-component",{key:a,attrs:{contentsData:t}})}))],2),e("category-modal-component",{directives:[{name:"show",rawName:"v-show",value:t.isCategoryModalActive,expression:"isCategoryModalActive"}],attrs:{categoryModalTitle:t.categoryModalTitle,categoryName:t.newCategoryName,deleteBtn:t.deleteBtn},on:{"close-modal":function(e){t.isCategoryModalActive=!1},categoryEvent:t.categoryEvent,deleteCategory:t.deleteCategory}})],1)},o=[],s=a("1f0e"),r=a.n(s),i=a("c5d3"),c=a("7598"),l=a("c24f"),d=a("c405"),m={components:{ContentsComponent:i["a"],CategoryModalComponent:c["a"]},data(){return{isCategoryModalActive:!1,categoryModalTitle:"카테고리 수정",categoryFilter:"latest",setting:r.a,categoryId:0,categoryName:"",newCategoryName:"",deleteBtn:"카테고리 삭제",contentsData:{},collectionData:{title:"비즈니스 모델 분석법",lists:["10년차 컨설턴트의 게스티네이션 노하우","KSF모델로 보는 경쟁사 분석","수익모델 분석방법","AARRR분석하기 기초","분석하기 고급"],favorites:!0}}},created(){this.fetchContentsList()},methods:{async fetchContentsList(){try{const t=await Object(l["d"])();this.contentsData=t.data.contents,console.log("콘텐츠 데이터",this.contentsData)}catch(t){console.log(t)}},async fetchCollectionList(){this.categoryId=this.$route.params.id,console.log("카테고리 id",this.categoryId);try{const t=await Object(l["c"])(this.categoryId);this.collectionData=t.data}catch(t){console.log(t)}},openCategoryModal(){this.isCategoryModalActive=!0},async categoryEvent(t){this.newCategoryName=t;try{const t={name:this.newCategoryName,originalName:this.categoryName},e=await Object(d["c"])(t);console.log(e)}catch(e){console.log(e)}},async deleteCategory(){try{const t=await Object(d["b"])(this.categoryId);console.log(t)}catch(t){console.log(t)}}}},u=m,v=a("2877"),p=Object(v["a"])(u,n,o,!1,null,null,null);e["default"]=p.exports},8599:function(t,e,a){t.exports=a.p+"img/star.c60dba1e.svg"},adee:function(t,e,a){"use strict";var n=function(){var t=this,e=t._self._c;return e("div",{staticClass:"modal"},[e("div",{staticClass:"overlay"}),e("div",{staticClass:"modal-card"},[e("div",{staticClass:"modal-card__header"},[e("h1",[t._v("메모")]),e("button",{staticClass:"btn--transparent btn__close",attrs:{type:"button"},on:{click:function(e){return t.$emit("close-modal")}}},[e("img",{attrs:{src:t.closeBtn}})])]),e("div",{staticClass:"modal-card__wrapper"},[e("div",{staticClass:"flex-container modal-form__wrapper"},[e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.memoContents,expression:"memoContents"}],staticClass:"modal-form__textarea",attrs:{placeholder:"",rows:"5"},domProps:{value:t.memoContents},on:{input:function(e){e.target.composing||(t.memoContents=e.target.value)}}})])])])])},o=[],s=a("f7ed"),r=a.n(s),i={name:"ModalComponent",data(){return{closeBtn:r.a,categoryName:""}},props:{categoryModalTitle:String,deleteBtn:String,memoContents:String},methods:{categoryEvent(){let t=this.categoryName;this.$emit("categoryEvent",t)}}},c=i,l=a("2877"),d=Object(l["a"])(c,n,o,!1,null,null,null);e["a"]=d.exports},c405:function(t,e,a){"use strict";a.d(e,"a",(function(){return o})),a.d(e,"c",(function(){return s})),a.d(e,"b",(function(){return r}));var n=a("365c");function o(t){return n["a"].post("category/add",t)}function s(t){return n["a"].post("category/update",t)}function r(t){return n["a"].delete("category/delete/"+t)}},c5d3:function(t,e,a){"use strict";var n=function(){var t=this,e=t._self._c;return e("div",{staticClass:"contents-component"},[e("div",{staticClass:"contents__wrapper-col"},[e("p",{staticClass:"contents__title",on:{click:function(e){return t.toLink(t.contentsData.link)}}},[t._v(" "+t._s(t.filterTitle)+" ")]),e("p",{staticClass:"contents__contents"},[t._v(t._s(t.filterDescript))]),e("div",{staticClass:"contents__inner"},[e("p",{staticClass:"contents__domain"},[t._v(" "+t._s(t.filterDomain)+" | "+t._s(t.contentsData.createdAt.substring(0,10))+" ")]),e("div",{staticClass:"contents__btn-wrapper"},[e("button",{staticClass:"btn--transparent",on:{click:function(e){return t.openMemoModal()}}},[e("img",{attrs:{src:t.memo}})]),e("img",{attrs:{src:t.category_line}}),e("button",{staticClass:"btn--transparent"},[e("img",{directives:[{name:"show",rawName:"v-show",value:t.contentsData.favorite,expression:"contentsData.favorite"}],attrs:{src:t.star}}),e("img",{directives:[{name:"show",rawName:"v-show",value:!t.contentsData.favorite,expression:"!contentsData.favorite"}],attrs:{src:t.star_border}})])])])]),e("div",{staticClass:"contents__wrapper"},[e("div",{staticClass:"contents__img"},[e("div",{staticClass:"contents__expiryDate"},[t._v("D-"+t._s(t.countDday))])]),e("button",{staticClass:"btn--transparent btn__editContents",on:{click:function(e){return t.openEditModal()}}},[e("img",{attrs:{src:t.edit}})])]),t.isModalActive?e("contents-edit-modal-component",{attrs:{contentsData:t.contentsData},on:{"close-modal":function(e){t.isModalActive=!1},"contents-event":function(e){return t.editContents()}}}):t._e(),t.isMemoModalActive?e("memo-modal-component",{attrs:{memoContents:t.memoContents},on:{"close-modal":function(e){t.isMemoModalActive=!1}}}):t._e()],1)},o=[],s=a("6d1b"),r=a.n(s),i=a("8599"),c=a.n(i),l=a("da44"),d=a.n(l),m=a("f232"),u=a.n(m),v=a("e19a"),p=a.n(v),g=a("5464"),_=function(){var t=this,e=t._self._c;return e("div",{staticClass:"modal"},[e("div",{staticClass:"overlay"}),e("div",{staticClass:"contents-modal-card"},[e("div",{staticClass:"modal-card__header"},[e("h1",[t._v("콘텐츠 수정")]),e("button",{staticClass:"btn--transparent btn__close",attrs:{type:"button"},on:{click:function(e){return t.$emit("close-modal")}}},[e("img",{attrs:{src:t.closeBtn}})])]),e("div",{staticClass:"modal-card__wrapper"},[e("div",{staticClass:"register-form__wrapper"},[t._m(0),e("div",{staticClass:"flex-container modal-form__wrapper"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.contentsData.link,expression:"contentsData.link"}],attrs:{placeholder:"URL 입력"},domProps:{value:t.contentsData.link},on:{input:function(e){e.target.composing||t.$set(t.contentsData,"link",e.target.value)}}}),e("button",{staticClass:"btn--transparent btn__favorites",on:{click:function(e){return t.addFavorites()}}},[e("img",{directives:[{name:"show",rawName:"v-show",value:!t.contentsData.favorite,expression:"!contentsData.favorite"}],attrs:{src:t.star_border}}),e("img",{directives:[{name:"show",rawName:"v-show",value:t.contentsData.favorite,expression:"contentsData.favorite"}],attrs:{src:t.star}})])])]),e("div",[e("div",{staticClass:"register-form__wrapper"},[e("label",{staticClass:"register-form__label"},[t._v("이름")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.contentsData.title,expression:"contentsData.title"}],attrs:{placeholder:"30자 이하 권장"},domProps:{value:t.contentsData.title},on:{input:function(e){e.target.composing||t.$set(t.contentsData,"title",e.target.value)}}})]),e("div",{staticClass:"flex-container modal-form__wrapper"},[e("div",{staticClass:"register-form__wrapper"},[e("label",{staticClass:"register-form__label"},[t._v("카테고리")]),e("select",{directives:[{name:"model",rawName:"v-model",value:t.contentsData.categoryName,expression:"contentsData.categoryName"}],staticClass:"contents-modal__select",on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.contentsData,"categoryName",e.target.multiple?a:a[0])}}},[e("option",{attrs:{value:"null",selected:""}},[t._v("미분류")]),t._l(t.myCategories,(function(a,n){return e("option",{key:n},[t._v(" "+t._s(a.name)+" ")])}))],2)]),e("div",{staticClass:"register-form__wrapper"},[e("label",{staticClass:"register-form__label"},[t._v("읽을 기한")]),e("div",{staticClass:"flex-container modal-form__wrapper"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.contentsData.deadline,expression:"contentsData.deadline"}],attrs:{type:"date"},domProps:{value:t.contentsData.deadline},on:{input:function(e){e.target.composing||t.$set(t.contentsData,"deadline",e.target.value)}}}),e("span",{staticClass:"contents-modal__date-description"},[t._v("D-DAY에 알림을 보내드립니다")])])])]),e("div",{staticClass:"register-form__wrapper"},[e("label",{staticClass:"register-form__label"},[t._v("메모")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.contentsData.comment,expression:"contentsData.comment"}],attrs:{placeholder:"500자 이하",maxlength:"500"},domProps:{value:t.contentsData.comment},on:{input:function(e){e.target.composing||t.$set(t.contentsData,"comment",e.target.value)}}})])])]),e("div",{staticClass:"modal-card__collection__wrapper"},[e("span",{staticClass:"modal-card__text"},[e("img",{attrs:{src:t.alert_circle}}),t._v("여러 링크들을 묶어서 저장하고 싶다면?")]),e("button",{staticClass:"btn--transparent btn__collection"},[t._v(" 콜렉션으로 저장하기 >> ")])]),e("div",{staticClass:"flex-container-col"},[e("button",{staticClass:"btn--sm btnPrimary",attrs:{disabled:!t.contentsData.link},on:{click:function(e){return t.editContent()}}},[t._v(" 저장 ")])])])])},f=[function(){var t=this,e=t._self._c;return e("label",{staticClass:"register-form__label"},[t._v("링크"),e("em",[t._v("*")])])}],C=a("f7ed"),h=a.n(C),y=a("1680"),b=a.n(y),D=a("7561"),w=a("c24f"),x={name:"ModalComponent",data(){return{closeBtn:h.a,star_border:d.a,star:c.a,alert_circle:b.a,myCategories:{},link:"",title:"",deadline:"",comment:"",categoryName:-1,favorite:!1,data:{}}},props:{contentsData:Object},mounted(){this.getMyCategory()},computed:{isTextLink(){return""!=this.contentsData.link?Object(g["c"])(this.contentsData.link):null},countLink(){return""!=this.contentsData.link?Object(g["b"])(this.contentsData.link):null}},methods:{addFavorites(){this.contentsData.favorite=!this.contentsData.favorite},async getMyCategory(){try{const t=await Object(w["b"])();console.log("카테고리 목록 조회",t.data.categories),this.myCategories=t.data.categories}catch(t){console.log(t)}},async editContent(){try{if(1==this.countLink){const t={id:this.contentsData.id,link:this.contentsData.link,favorite:this.contentsData.favorite,comment:this.contentsData.comment},e=await Object(D["d"])(t);console.log(e),this.$emit("close-modal")}}catch(t){console.log(t)}}}},k=x,M=a("2877"),N=Object(M["a"])(k,_,f,!1,null,null,null),A=N.exports,O=a("adee"),j={components:{ContentsEditModalComponent:A,MemoModalComponent:O["a"]},data(){return{memo:r.a,star:c.a,edit:u.a,category_line:p.a,star_border:d.a,isModalActive:!1,isMemoModalActive:!1,memoContents:"",link:"",title:"",deadline:"",comment:"",categoryName:"미분류"}},props:{contentsData:Object},created(){console.log("콘텐츠컴포넌트 데이터",this.contentsData),this.memoContents=this.contentsData.comment,console.log("메모",this.memoContents)},computed:{countDday(){return console.log(Object(g["a"])(this.contentsData.deadline)),Object(g["a"])(this.contentsData.deadline)},isTextLink(){return""!=this.contentsData.link?Object(g["c"])(this.contentsData.link):null},countLink(){return""!=this.link?Object(g["b"])(this.contentsData.link):null},filterTitle(){return this.contentsData.title.length>=30?this.contentsData.title.substr(0,30)+"...":this.contentsData.title},filterDescript(){return this.contentsData.description.length>=90?this.contentsData.description.substr(0,90)+"...":this.contentsData.description},filterDomain(){let t,e=this.contentsData.link;if(1==e.includes("www")){let a=e.split(".");a=a[1],t=a}else{let a=e.indexOf("//"),n=e.substring(a+2);t=n.split("."),t=t[0]}return t}},methods:{toLink(t){window.open(t,"_blank")},openEditModal(){this.isModalActive=!0},openMemoModal(){this.isMemoModalActive=!0}}},$=j,B=Object(M["a"])($,n,o,!1,null,null,null);e["a"]=B.exports},da44:function(t,e,a){t.exports=a.p+"img/star_border.026e7381.svg"},e19a:function(t,e,a){t.exports=a.p+"img/category_line.04f539e2.svg"},f232:function(t,e,a){t.exports=a.p+"img/edit.c5b95152.svg"},f7ed:function(t,e,a){t.exports=a.p+"img/closeBtn.a9f6b6a0.svg"}}]);
//# sourceMappingURL=chunk-2809bbb4.c1643a2b.js.map