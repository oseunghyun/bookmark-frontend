(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2561aaa4"],{"1f0e":function(t,e,a){t.exports=a.p+"img/settings.5e84a935.svg"},4431:function(t,e,a){"use strict";a.d(e,"a",(function(){return n})),a.d(e,"d",(function(){return l})),a.d(e,"c",(function(){return c})),a.d(e,"b",(function(){return i}));var o=a("365c");function n(t){return o["a"].post("collections/add",t)}function l(t){return o["a"].post("collections/update",t)}function c(t){return o["a"].delete("collections/delete/"+t)}function i(t){return o["a"].patch("collections/favorite/"+t)}},"6ae1":function(t,e,a){"use strict";var o=function(){var t=this,e=t._self._c;return t.collectionData?e("div",{staticClass:"collection-component"},[e("div",{staticClass:"collection__wrapper-col"},[e("span",{staticClass:"collection-tag"},[t._v("Collection")]),t.collectionData.title?e("p",{staticClass:"collection__title"},[t._v(" "+t._s(t.filterTitle(t.collectionData.title))+" ")]):t._e(),e("div",{staticClass:"collection__lists-wrapper"},[t.collectionData.contents?e("div",[e("ul",{staticClass:"collection__lists"},t._l(t.collectionData.contents,(function(a,o){return e("li",{key:o,staticClass:"collection__list"},[a.title?e("span",[t._v(t._s(t.filterTitle(a.title)))]):t._e()])})),0)]):t._e(),t.collectionData.contents?e("div",t._l(t.collectionData.contents,(function(a,o){return e("div",{key:o,staticClass:"collection__list-num"},[4==o?e("span",[t._v(" 외 "+t._s(a.length-o)+"개")]):t._e()])})),0):t._e()]),t.collectionData.createdAt?e("div",{staticClass:"collection__inner"},[e("p",{staticClass:"collection__createdAt"},[t._v(" "+t._s(t.collectionData.createdAt.substring(0,10))+" ")]),e("div",{staticClass:"collection__btn-wrapper"},[e("button",{staticClass:"btn--transparent",on:{click:function(e){return t.openMemoModal()}}},[e("img",{attrs:{src:t.memo}})]),e("img",{attrs:{src:t.category_line}}),e("button",{staticClass:"btn--transparent",on:{click:function(e){return t.createFavorites()}}},[e("img",{directives:[{name:"show",rawName:"v-show",value:t.collectionData.favorite,expression:"collectionData.favorite"}],attrs:{src:t.star}}),e("img",{directives:[{name:"show",rawName:"v-show",value:!t.collectionData.favorite,expression:"!collectionData.favorite"}],attrs:{src:t.star_border}})])])]):t._e()]),e("div",{staticClass:"collection__wrapper"},[t.collectionData.contents?e("div",{staticClass:"collection__img"},[e("img",{attrs:{src:t.collectionData.contents[0].coverImg,onerror:"this.style.display='none'"}}),t.collectionData.contents?e("div",{staticClass:"collection__num"},[t._v(" +"+t._s(t.collectionData.contents.length)+" ")]):t._e()]):t._e(),e("button",{staticClass:"btn--transparent",on:{click:function(e){return t.openEditModal()}}},[e("img",{attrs:{src:t.edit}})])]),t.isMemoModalActive?e("memo-modal-component",{attrs:{memoContents:t.memoContents},on:{"close-modal":function(e){t.isMemoModalActive=!1}}}):t._e(),t.isCollectionModalActive?e("collection-edit-modal-component",{attrs:{collectionData:t.collectionData},on:{"close-modal":function(e){t.isCollectionModalActive=!1}}}):t._e(),1==t.isAlertModalActive?e("alert-modal-component",{attrs:{alertModalContent:t.alertModalContent,btnMessage:t.btnMessage},on:{confirmBtn:function(e){t.isAlertModalActive=!1}}}):t._e()],1):t._e()},n=[],l=a("6d1b"),c=a.n(l),i=a("8599"),s=a.n(i),r=a("da44"),d=a.n(r),m=a("f232"),v=a.n(m),u=a("e19a"),_=a.n(u),p=a("adee"),g=a("4431"),f=function(){var t=this,e=t._self._c;return e("div",{staticClass:"modal"},[e("div",{staticClass:"overlay"}),e("div",{staticClass:"collection-modal-card"},[e("div",{staticClass:"modal-card__header"},[e("h1",[t._v("콜렉션 수정")]),e("button",{staticClass:"btn--transparent btn__close",attrs:{type:"button"},on:{click:function(e){return t.$emit("close-modal")}}},[e("img",{attrs:{src:t.closeBtn}})])]),e("div",{staticClass:"modal-card__wrapper"},[e("div",{staticClass:"flex-container modal-form__wrapper"},[e("div",{staticClass:"register-form__wrapper"},[t._m(0),e("input",{directives:[{name:"model",rawName:"v-model",value:t.collectionData.title,expression:"collectionData.title"}],attrs:{placeholder:"10자 이하 권장"},domProps:{value:t.collectionData.title},on:{input:function(e){e.target.composing||t.$set(t.collectionData,"title",e.target.value)}}})]),e("div",{staticClass:"register-form__wrapper category__wrapper"},[e("label",{staticClass:"register-form__label"},[t._v("카테고리")]),null==t.collectionData.category?e("select",{directives:[{name:"model",rawName:"v-model",value:t.categoryName,expression:"categoryName"}],staticClass:"contents-modal__select",on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.categoryName=e.target.multiple?a:a[0]}}},[e("option",{attrs:{value:""}},[t._v("미분류")]),t._l(t.myCategories,(function(a,o){return e("option",{key:o},[t._v(" "+t._s(a.name)+" ")])}))],2):t._e(),t.collectionData.category?e("select",{directives:[{name:"model",rawName:"v-model",value:t.collectionData.category.name,expression:"collectionData.category.name"}],staticClass:"contents-modal__select",on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.collectionData.category,"name",e.target.multiple?a:a[0])}}},[e("option",{attrs:{value:""}},[t._v("미분류")]),t._l(t.myCategories,(function(a,o){return e("option",{key:o},[t._v(" "+t._s(a.name)+" ")])}))],2):t._e()]),e("div",{staticClass:"flex-container favorite__wrapper"},[e("button",{staticClass:"btn--transparent btn__favorites",on:{click:function(e){return t.addFavorites()}}},[e("img",{directives:[{name:"show",rawName:"v-show",value:!t.collectionData.favorite,expression:"!collectionData.favorite"}],attrs:{src:t.star_border}}),e("img",{directives:[{name:"show",rawName:"v-show",value:t.collectionData.favorite,expression:"collectionData.favorite"}],attrs:{src:t.star}})])])]),e("div",{staticClass:"register-form__wrapper"},[e("label",{staticClass:"register-form__label"},[t._v("콜렉션 설명")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.collectionData.comment,expression:"collectionData.comment"}],attrs:{placeholder:"100자 이하",maxlength:"100"},domProps:{value:t.collectionData.comment},on:{input:function(e){e.target.composing||t.$set(t.collectionData,"comment",e.target.value)}}})]),e("div",{staticClass:"register-form__wrapper"},[t._m(1),e("div",{staticClass:"link__wrapper"},t._l(this.collectionData.contents,(function(a,o){return e("div",{key:o,staticClass:"link__wrapper-inner"},[e("div",{staticClass:"link__index"},[t._v(t._s(o+1))]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.collectionData.contents[o].link,expression:"collectionData.contents[index].link"}],attrs:{placeholder:"URL 입력"},domProps:{value:t.collectionData.contents[o].link},on:{input:function(e){e.target.composing||t.$set(t.collectionData.contents[o],"link",e.target.value)}}}),o>0?e("button",{staticClass:"btn--transparent btn__deleteLink",on:{click:function(e){return t.deleteInput(o)}}},[e("img",{attrs:{src:t.minus}})]):t._e()])})),0),t.collectionData.contents[0].link?e("div",{staticClass:"flex-container-col modal-card__btn__wrapper"},[e("button",{staticClass:"btn--transparent btn--plus",on:{click:function(e){return t.createInput(t.collectionData.contents.length)}}},[e("img",{attrs:{src:t.add_link}})])]):t._e()])]),e("div",{staticClass:"modal-card__btn__wrapper"},[e("div",{staticClass:"flex-container"},[e("button",{staticClass:"btn--transparent login-form__link-register",on:{click:function(e){t.isDeleteModalActive=!0}}},[t._v(" 콘텐츠 삭제 ")])])]),e("div",{staticClass:"flex-container-col modal-card__btn__wrapper"},[e("button",{staticClass:"btn--sm btnPrimary",attrs:{disabled:""==t.collectionData.contents.link||!t.collectionData.title},on:{click:function(e){return t.editCollection()}}},[t._v(" 저장 ")])])]),1==t.isDeleteModalActive?e("AlertModalComponent",{attrs:{alertModalContent:t.deleteModalContent,btnMessage:t.btnMessage},on:{confirmBtn:function(e){return t.deleteCollection()}}}):t._e(),1==t.isAlertModalActive?e("AlertModalComponent",{attrs:{alertModalContent:t.alertModalContent,btnMessage:t.btnMessage},on:{confirmBtn:function(e){t.isAlertModalActive=!1}}}):t._e()],1)},C=[function(){var t=this,e=t._self._c;return e("label",{staticClass:"register-form__label"},[t._v("콜렉션 이름"),e("em",[t._v("*")])])},function(){var t=this,e=t._self._c;return e("label",{staticClass:"register-form__label"},[t._v("링크"),e("em",[t._v("*")])])}],h=a("f7ed"),y=a.n(h),b=a("1680"),M=a.n(b),D=a("7f97"),w=a.n(D),A=a("7e44"),k=a.n(A),N=a("c24f"),x=a("3bd4"),j={components:{AlertModalComponent:x["a"]},data(){return{closeBtn:y.a,star_border:d.a,star:s.a,alert_circle:M.a,add_link:w.a,isDetailSettingActive:!1,minus:k.a,myCategories:{},isAlertModalActive:!1,alertModalContent:"",btnMessage:"네",isDeleteModalActive:!1,deleteModalContent:"해당 콜렉션을 \n삭제하시겠습니까?",categoryName:""}},props:{collectionData:[]},created(){this.getMyCategory()},methods:{addFavorites(){this.collectionData.favorite=!this.collectionData.favorite,console.log("즐찾",this.collectionData.favorite)},async getMyCategory(){try{const t=await Object(N["b"])();console.log("카테고리 목록 조회",t.data.categories),this.myCategories=t.data.categories}catch(t){console.log(t)}},createInput(t){const e={link:""};this.collectionData.contents.push(e),console.log(t)},deleteInput(t){this.collectionData.contents.splice(t,1)},async editCollection(){const t=this.collectionData.contents,e=t.map(t=>t.link);console.log(e),console.log("콜렉션 수정 - 링크 목록");const a={title:this.collectionData.title,comment:this.collectionData.comment,categoryName:this.categoryName||this.collectionData.category.name,contentLinkList:e,collectionId:this.collectionData.id,favorite:this.collectionData.favorite};Object.keys(a).forEach(t=>(""==a[t]||void 0==a[t])&&delete a[t]),console.log("콜렉션 모달",a),this.$emit("collectionEdit",a);try{const t=await Object(g["d"])(a);console.log(t),this.$emit("close-modal"),console.log(" 최종 보낼 값",a)}catch(o){console.log(o),this.alertModalContent=o.response.data.message,this.isAlertModalActive=!0}},async deleteCollection(){this.isDeleteModalActive=!1;try{const t=await Object(g["c"])(this.collectionData.collectionId);console.log(t),this.$emit("close-modal")}catch(t){console.log(t),this.alertModalContent=t.response.data.message,this.isAlertModalActive=!0}}}},O=j,B=a("2877"),E=Object(B["a"])(O,f,C,!1,null,null,null),$=E.exports,F={components:{MemoModalComponent:p["a"],CollectionEditModalComponent:$,AlertModalComponent:x["a"]},data(){return{memo:c.a,star:s.a,edit:v.a,star_border:d.a,category_line:_.a,isMemoModalActive:!1,memoContents:"",isCollectionModalActive:!1,collectionModalTitle:"콜렉션 수정",alertModalContent:"",btnMessage:"네",isAlertModalActive:!1}},props:{collectionData:{type:Object}},methods:{openMemoModal(){this.isMemoModalActive=!0,this.memoContents=this.collectionData.comment},async createFavorites(){this.collectionData.favorite=!this.collectionData.favorite;try{const t=this.collectionData.id,e=await Object(g["b"])(t);console.log(e)}catch(t){console.log(t)}},openEditModal(){this.isCollectionModalActive=!0},filterTitle(t){return t.length>=30?t.substr(0,30)+"...":t}}},I=F,L=Object(B["a"])(I,o,n,!1,null,null,null);e["a"]=L.exports},7598:function(t,e,a){"use strict";var o=function(){var t=this,e=t._self._c;return e("div",{staticClass:"modal"},[e("div",{staticClass:"overlay"}),e("div",{staticClass:"modal-card"},[e("div",{staticClass:"modal-card__header"},[e("h1",[t._v(t._s(t.categoryModalTitle))]),e("button",{staticClass:"btn--transparent btn__close",attrs:{type:"button"},on:{click:function(e){return t.$emit("close-modal")}}},[e("img",{attrs:{src:t.closeBtn}})])]),e("div",{staticClass:"modal-card__wrapper"},[e("div",{staticClass:"register-form__wrapper"},[t._m(0),e("div",{staticClass:"flex-container modal-form__wrapper"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.categoryName,expression:"categoryName"}],attrs:{placeholder:"10자 이하 권장"},domProps:{value:t.categoryName},on:{input:function(e){e.target.composing||(t.categoryName=e.target.value)}}})])])]),e("div",{staticClass:"modal-card__category__wrapper"},[e("div",{staticClass:"flex-container-col"},[e("button",{staticClass:"btn--sm btnPrimary",attrs:{disabled:!t.categoryName},on:{click:function(e){return t.categoryEvent()}}},[t._v(" 저장 ")])])]),e("div",{staticClass:"modal-card__category__wrapper"},[e("div",{staticClass:"flex-container"},[e("button",{staticClass:"btn--transparent login-form__link-register",on:{click:function(e){return t.$emit("deleteCategory")}}},[t._v(" "+t._s(t.deleteBtn)+" ")])])])])])},n=[function(){var t=this,e=t._self._c;return e("label",{staticClass:"register-form__label"},[t._v("이름"),e("em",[t._v("*")])])}],l=a("f7ed"),c=a.n(l),i={name:"ModalComponent",data(){return{closeBtn:c.a,categoryName:""}},props:{categoryModalTitle:String,deleteBtn:String},methods:{categoryEvent(){let t=this.categoryName;this.$emit("categoryEvent",t)}}},s=i,r=a("2877"),d=Object(r["a"])(s,o,n,!1,null,null,null);e["a"]=d.exports},"7bb7":function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t._self._c;return e("div",{staticClass:"category-view"},[e("h1",{staticClass:"page-header"},[t._v("전체")]),e("div",[e("div",{staticClass:"category__select-wrapper"},[e("select",{directives:[{name:"model",rawName:"v-model",value:t.categoryFilter,expression:"categoryFilter"}],on:{change:[function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.categoryFilter=e.target.multiple?a:a[0]},function(e){return t.sortData(t.categoryFilter)}]}},[e("option",{attrs:{value:"latest"}},[t._v("최신순")]),e("option",{attrs:{value:"favorites"}},[t._v("즐겨찾기순")]),e("option",{attrs:{value:"expiry"}},[t._v("읽을기한순")])])]),t._l(t.newArr,(function(a,o){return e("div",{key:o},[t.newArr[o].contents?t._e():e("contents-component",{attrs:{contentsData:a}}),t.newArr[o].deadline?t._e():e("collection-component",{attrs:{collectionData:a}})],1)}))],2),e("category-modal-component",{directives:[{name:"show",rawName:"v-show",value:t.isCategoryModalActive,expression:"isCategoryModalActive"}],attrs:{categoryModalTitle:t.categoryModalTitle,categoryName:t.newCategoryName,deleteBtn:t.deleteBtn},on:{"close-modal":function(e){t.isCategoryModalActive=!1},categoryEvent:t.categoryEvent,deleteCategory:t.deleteCategory}}),1==t.isAlertModalActive?e("AlertModalComponent",{attrs:{alertModalContent:t.alertModalContent,btnMessage:t.btnMessage},on:{confirmBtn:function(e){t.isAlertModalActive=!1}}}):t._e()],1)},n=[],l=a("1f0e"),c=a.n(l),i=a("f816"),s=a("6ae1"),r=a("7598"),d=a("c24f"),m=a("c405"),v=a("dbd1"),u=a("3bd4"),_={components:{ContentsComponent:i["a"],CollectionComponent:s["a"],CategoryModalComponent:r["a"],AlertModalComponent:u["a"]},data(){return{isCategoryModalActive:!1,categoryModalTitle:"카테고리 수정",categoryFilter:"latest",setting:c.a,categoryId:0,categoryName:"",newCategoryName:"",deleteBtn:"카테고리 삭제",contentsData:[],collectionData:[],newContentsArr:[],newCollectionArr:[],newArr:[],isAlertModalActive:!1,AlertModalContent:"",btnMessage:"네"}},async created(){await this.fetchContentsList(),await this.fetchCollectionList(),this.newArr=Object(v["c"])(this.contentsData,this.collectionData),console.log("newArr",this.newArr)},methods:{async fetchContentsList(){try{const t=await Object(d["d"])();this.contentsData=t.data.contents,console.log("콘텐츠 데이터",this.contentsData)}catch(t){console.log(t)}},async fetchCollectionList(){try{const t=await Object(d["c"])();this.collectionData=t.data.collections,console.log("콜렉션 데이터",this.collectionData)}catch(t){console.log(t)}},openCategoryModal(){this.isCategoryModalActive=!0},async categoryEvent(t){this.newCategoryName=t;try{const t={name:this.newCategoryName,originalName:this.categoryName},e=await Object(m["c"])(t);console.log(e)}catch(e){console.log(e),this.alertModalContent=e.response.data.message,this.isAlertModalActive=!0}},async deleteCategory(){try{const t=await Object(m["b"])(this.categoryId);console.log(t)}catch(t){console.log(t),this.alertModalContent=t.response.data.message,this.isAlertModalActive=!0}},sortData(t){console.log("정렬 메소드"),"favorites"==t?(console.log("즐겨찾기 순으로 정렬한다."),this.newArr=Object(v["b"])(this.contentsData,this.collectionData)):"latest"==t?(console.log("최신 순으로 정렬한다."),this.newArr=Object(v["c"])(this.contentsData,this.collectionData)):"expiry"==t&&(console.log("만기 순으로 정렬한다."),this.newArr=Object(v["a"])(this.contentsData,this.collectionData),console.log(this.newArr))}}},p=_,g=a("2877"),f=Object(g["a"])(p,o,n,!1,null,null,null);e["default"]=f.exports},"7e44":function(t,e,a){t.exports=a.p+"img/minus.8e7c1397.svg"},"7f97":function(t,e,a){t.exports=a.p+"img/addLink.edbf2541.svg"},c405:function(t,e,a){"use strict";a.d(e,"a",(function(){return n})),a.d(e,"c",(function(){return l})),a.d(e,"b",(function(){return c}));var o=a("365c");function n(t){return o["a"].post("category/add",t)}function l(t){return o["a"].post("category/update",t)}function c(t){return o["a"].delete("category/delete/"+t)}}}]);
//# sourceMappingURL=chunk-2561aaa4.a36f4fdd.js.map