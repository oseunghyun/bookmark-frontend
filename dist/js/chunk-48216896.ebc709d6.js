(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-48216896"],{"09e9":function(t,e,a){t.exports=a.p+"img/topBtn.8e24ba9c.svg"},1680:function(t,e,a){t.exports=a.p+"img/alert-circle.78e81ce6.svg"},"2a7a":function(t,e,a){t.exports=a.p+"img/plusBtn.79284c99.svg"},3711:function(t,e,a){t.exports=a.p+"img/web.39c02fe0.svg"},"3bd4":function(t,e,a){"use strict";var s=function(){var t=this,e=t._self._c;return e("div",{staticClass:"alert-modal"},[e("div",{staticClass:"overlay"}),e("div",{staticClass:"alert-modal-card"},[e("div",{staticClass:"modal-card__header"},[e("p",{domProps:{innerHTML:t._s(t.handleNewLine(this.alertModalContent))}})]),e("div",{staticClass:"modal-card__button-wrapper"},[e("button",{on:{click:function(e){return t.$emit("confirmBtn")}}},[e("p",{domProps:{innerHTML:t._s(t.handleNewLine(this.btnMessage))}})])])])])},n=[],o={name:"AlertModalComponent",props:{alertModalContent:String,btnMessage:String},methods:{handleNewLine(t){return String(t).replace(/(?:\r\n|\r|\n)/g,"</br>")}}},i=o,r=a("2877"),c=Object(r["a"])(i,s,n,!1,null,null,null);e["a"]=c.exports},"427d":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t._self._c;return e("div",{staticClass:"main"},[e("main-component")],1)},n=[],o=function(){var t=this,e=t._self._c;return e("div",[e("category-list-favorite",{on:{toCategoryPage:function(e){return t.toFavoriteCategoryPage()}}}),e("div",{staticClass:"contents__wrapper-wrap"},[e("category-list-all",{attrs:{categoryTitle:t.categoryAll},on:{toCategoryPage:function(e){return t.toCategoryPage()}}}),t._l(t.myCategories,(function(t,a){return e("category-list",{key:a,attrs:{categoryTitle:t.name,categoryId:t.id}})})),e("button",{staticClass:"btn__addCategory",on:{click:t.openCategoryModal}},[t._v(" + Add category ")])],2),e("category-modal-component",{directives:[{name:"show",rawName:"v-show",value:t.isCategoryModalActive,expression:"isCategoryModalActive"}],attrs:{categoryModalTitle:t.categoryModalTitle,categoryName:t.categoryName},on:{"close-modal":function(e){t.isCategoryModalActive=!1},categoryEvent:t.categoryEvent}}),e("div",{staticClass:"main-btn__wrapper-col"},[e("button",{staticClass:"btn--transparent btn__top",on:{click:function(e){return t.backToTop()}}},[e("img",{attrs:{src:t.topBtn}})]),e("button",{staticClass:"btn__addContents",on:{click:function(e){t.isModalActive=!0}}},[e("img",{attrs:{src:t.plusBtn}})])]),t.isModalActive?e("contents-modal-component",{attrs:{linkList:t.linkList},on:{"close-modal":function(e){t.isModalActive=!1},isLinkNotSingle:t.isLinkNotSingle,openCollectionModal:t.openCollectionModal}}):t._e(),t.isConfirmModalActive?e("confirm-modal-component",{attrs:{confirmModalContent:t.confirmModalContent,leftBtnMessage:t.leftBtnMessage,rightBtnMessage:t.rightBtnMessage,linkList:t.linkList},on:{rightBtn:function(e){return t.addMultipleContents()},leftBtn:function(e){return t.openCollectionModal(t.linkList)}}}):t._e(),t.isAlertModalActive?e("alert-modal-component",{attrs:{alertModalContent:t.alertModalContent,btnMessage:t.btnMessage},on:{confirmBtn:function(e){t.isAlertModalActive=!1}}}):t._e(),t.isCollectionModalActive?e("collection-modal-component",{attrs:{collectionData:t.collectionData},on:{"close-modal":function(e){t.isCollectionModalActive=!1}}}):t._e()],1)},i=[],r=function(){var t=this,e=t._self._c;return e("div",{staticClass:"favorite-content"},[e("header",[e("div",{staticClass:"favorite-content__header-wrapper",on:{click:function(e){return t.toCategoryPage()}}},[e("h3",[t._v("즐겨찾기")]),e("img",{attrs:{src:t.star}})]),e("button",{on:{click:function(e){return t.showContent()}}},[t.contentState?t._e():e("img",{attrs:{src:t.plus}}),t.contentState?e("img",{attrs:{src:t.minus}}):t._e()])]),t.newArr.length>0?e("div",{staticClass:"favorite-lists",class:[t.contentState?"favoriteExtend":"favoriteDefault"]},t._l(t.newArr,(function(a,s){return e("div",{key:s},[a.contents?t._e():e("div",{staticClass:"favorite-list"},[e("div",{staticClass:"favorite-list__wrapper"},[e("div",{staticClass:"favorite-list__img-wrapper"},[e("div",{staticClass:"favorite-list__img"},[a.coverImg.length>0?e("img",{attrs:{src:a.coverImg,onerror:"this.style.display='none'"}}):e("img",{staticClass:"defaultImg",attrs:{src:t.defaultImg}}),a.deadline?e("span",{staticClass:"favorite-list__expiry"},[t._v("D-"+t._s(t.countDday(a.deadline)))]):t._e()]),e("div",{staticClass:"favorite-list__btn-wrapper"},[e("button",{staticClass:"btn--transparent",on:{click:function(e){return t.openMemoModal(s)}}},[e("img",{attrs:{src:t.memo}})]),e("img",{attrs:{src:t.line_white}}),e("button",{staticClass:"btn--transparent",on:{click:function(e){return t.createFavorites(s)}}},[a.favorite?e("img",{attrs:{src:t.star}}):t._e(),a.favorite?t._e():e("img",{attrs:{src:t.star_gray}})])])])]),e("div",{staticClass:"favorite-list__wrapper-text"},[e("p",{staticClass:"favorite-list__title",on:{click:function(e){return t.toLink(a.link)}}},[t._v(" "+t._s(t.filterTitle(a.title))+" ")]),e("div",{staticClass:"favorite-list__inner"},[a.link?e("span",{staticClass:"favorite-list__domain"},[t._v(t._s(t.filterDomain(a.link)))]):t._e(),e("img",{attrs:{src:t.line}}),e("span",{staticClass:"favorite-list__date"},[t._v(t._s(a.createdAt.substr(0,10)))])])])]),a.contents?e("div",{staticClass:"favorite-list"},[a.contents?e("div",{staticClass:"favorite-list__wrapper"},[e("div",{staticClass:"favorite-list__img-wrapper"},[t.newArr[s].contents?e("div",{staticClass:"favorite-list__img"},[a.contents[0].coverImg.length>0?e("img",{attrs:{src:a.contents[0].coverImg,onerror:"this.style.display='none'"}}):e("img",{attrs:{src:t.defaultImg}})]):t._e(),e("div",{staticClass:"favorite-list__btn-wrapper"},[e("img",{attrs:{src:t.line_white}}),e("button",{staticClass:"btn--transparent",on:{click:function(e){return t.createFavorites(s)}}},[a.favorite?e("img",{attrs:{src:t.star}}):t._e(),a.favorite?t._e():e("img",{attrs:{src:t.star_gray}})])])])]):t._e(),e("div",{staticClass:"favorite-list__wrapper-text"},[e("p",{staticClass:"favorite-list__title",on:{click:function(e){return t.toDetail(a.id)}}},[t._v(" "+t._s(t.filterTitle(a.title))+" ")]),e("div",{staticClass:"favorite-list__inner"},[e("span",{staticClass:"favorite-list__domain"},[t._v("Collection")]),e("img",{attrs:{src:t.line}}),e("span",{staticClass:"favorite-list__date"},[t._v(t._s(a.createdAt.substr(0,10)))])])])]):t._e()])})),0):t._e(),t.isMemoModalActive?e("memo-modal-component",{attrs:{memoContents:t.memoContents,contentsId:t.contentsId},on:{"close-modal":function(e){t.isMemoModalActive=!1}}}):t._e()],1)},c=[],l=a("871b"),d=a.n(l),m=a("7e44"),u=a.n(m),v=a("79a5"),g=a.n(v),p=a("7b82"),_=a.n(p),f=a("6d1b"),h=a.n(f),C=a("8599"),b=a.n(C),y=a("7ec9"),w=a.n(y),M=a("adee"),A=a("7561"),k=a("5464"),L=a("ee87"),D=a.n(L),x={components:{MemoModalComponent:M["a"]},data(){return{plus:d.a,minus:u.a,line:g.a,line_white:_.a,memo:h.a,defaultImg:D.a,star:b.a,star_gray:w.a,contentState:!1,isMemoModalActive:!1,isFavoriteListUpdated:0,data:1,newArr:[]}},async created(){await this.$store.dispatch("GET_FAVORITES"),this.newArr=this.$store.getters.getLatestSortedFavorite},watch:{isFavoriteListUpdated:function(){this.$store.dispatch("GET_FAVORITES"),this.newArr=this.$store.getters.getLatestSortedFavorite}},methods:{async showContent(){this.contentState=!this.contentState,await this.$store.dispatch("GET_FAVORITES"),this.newArr=this.$store.getters.getLatestSortedFavorite},async createFavorites(t){console.log("인덱스",t),this.newArr[t].favorite=!this.newArr[t].favorite;try{const e=this.newArr[t].id,a=await Object(A["b"])(e);console.log(a),this.$store.dispatch("GET_FAVORITES"),this.newArr=this.$store.getters.getLatestSortedFavorite}catch(e){console.log(e)}},async openMemoModal(t){await this.$store.dispatch("GET_FAVORITES"),this.newArr=this.$store.getters.getLatestSortedFavorite,this.memoContents=this.newArr[t].comment,this.contentsId=this.newArr[t].id,this.isMemoModalActive=!0},filterTitle(t){return t.length>=20?t.substr(0,20)+"...":t},toLink(t){window.open(t,"_blank")},toDetail(t){this.$router.push("/collection/"+t)},filterDomain(t){let e;if(1==t.includes("www")){let a=t.split(".");a=a[1],e=a}else{let a=t.indexOf("//"),s=t.substring(a+2);e=s.split("."),e=e[0]}return e},countDday(t){return Object(k["a"])(t)},toCategoryPage(){this.$emit("toCategoryPage")}}},S=x,T=a("2877"),$=Object(T["a"])(S,r,c,!1,null,null,null),N=$.exports,O=function(){var t=this,e=t._self._c;return e("div",{staticClass:"all-content"},[e("header",[e("div",{staticClass:"content__header",on:{click:function(e){return t.toCategoryPage()}}},[e("h3",[t._v(t._s(t.categoryTitle))])]),e("button",{on:{click:function(e){return t.showContent()}}},[t.contentState?t._e():e("img",{attrs:{src:t.plus}}),t.contentState?e("img",{attrs:{src:t.minus}}):t._e()])]),t.contentState&&t.newArr.length>0?e("div",{staticClass:"contents-lists"},t._l(t.newArr,(function(a,s){return e("div",{key:s},[a.contents?t._e():e("div",{staticClass:"contents-list"},[e("div",{staticClass:"contents-list__wrapper"},[e("button",{staticClass:"btn--transparent--img",on:{click:function(e){return t.toLink(a.link)}}},[e("span",{staticClass:"contents-list__icon"},[e("img",{attrs:{src:t.web}})]),e("span",{staticClass:"contents-list__title"},[t._v(" "+t._s(t.filterTitle(a.title))+" ")])])]),e("div",{staticClass:"contents-list__wrapper"},[e("img",{attrs:{src:t.line}}),a.deadline?e("span",{staticClass:"contents-list__expiry"},[t._v("D-"+t._s(t.countDday(a.deadline)))]):t._e(),e("button",{staticClass:"btn--transparent",on:{click:function(e){return t.openMemoModal(s)}}},[e("img",{attrs:{src:t.memo}})]),e("button",{staticClass:"btn--transparent",on:{click:function(e){return t.createFavorites(s)}}},[a.favorite?e("img",{attrs:{src:t.star}}):t._e(),a.favorite?t._e():e("img",{attrs:{src:t.star_gray}})])])]),a.contents?e("div",[e("div",{staticClass:"contents-list"},[e("div",{staticClass:"contents-list__wrapper"},[e("button",{staticClass:"btn--transparent--img",on:{click:function(e){return t.toDetail(a.id)}}},[e("span",{staticClass:"contents-list__icon"},[e("img",{attrs:{src:t.web}})]),e("span",{staticClass:"contents-list__title"},[t._v(" "+t._s(t.filterTitle(a.title))+" ")])])]),e("div",{staticClass:"contents-list__wrapper"},[e("img",{attrs:{src:t.line}}),e("button",{staticClass:"btn--transparent",on:{click:function(e){return t.createFavoriteCollection(s)}}},[a.favorite?e("img",{attrs:{src:t.star}}):t._e(),a.favorite?t._e():e("img",{attrs:{src:t.star_gray}})])])])]):t._e()])})),0):t._e(),t.isMemoModalActive?e("memo-modal-component",{attrs:{memoContents:t.memoContents,contentsId:t.contentsId},on:{"close-modal":function(e){t.isMemoModalActive=!1}}}):t._e()],1)},I=[],B=a("3711"),F=a.n(B),E=a("4431"),j=a("56d7"),P={components:{MemoModalComponent:M["a"]},data(){return{plus:d.a,minus:u.a,line:g.a,memo:h.a,star:b.a,star_gray:w.a,web:F.a,contentState:!1,isMemoModalActive:!1,data:1,isFavoriteListUpdated:0,contentsData:[],collectionsData:[],newArr:[]}},props:{categoryTitle:String,categoryId:Number},async created(){j["eventBus"].$on("fetchFavoritesList",t=>{this.isFavoriteListUpdated+=t,console.log("CategoryList에 이벤트 버스 도착",this.isFavoriteListUpdated)})},watch:{isFavoriteListUpdated(){this.$store.dispatch("GET_CONTENTS"),this.$store.dispatch("GET_COLLECTIONS")}},methods:{async showContent(){await this.$store.dispatch("SORT_DATA"),this.newArr=this.$store.getters.getLatestSortedData,this.contentState=!this.contentState},async createFavorites(t){this.newArr[t].favorite=!this.newArr[t].favorite;try{const e=this.newArr[t].id,a=await Object(A["b"])(e);console.log(a)}catch(e){console.log(e)}},async createFavoriteCollection(t){this.newArr[t].favorite=!this.newArr[t].favorite;try{const e=this.newArr[t].id,a=await Object(E["b"])(e);console.log(a)}catch(e){console.log(e)}},toCategoryPage(){this.$router.push("/category/all")},async openMemoModal(t){await this.$store.dispatch("SORT_DATA"),this.newArr=this.$store.getters.getLatestSortedData,this.memoContents=this.newArr[t].comment,this.contentsId=this.newArr[t].id,this.isMemoModalActive=!0},filterTitle(t){return t.length>=30?t.substr(0,30)+"...":t},toDetail(t){this.$router.push("/collection/"+t)},countDday(t){return Object(k["a"])(t)},toLink(t){window.open(t,"_blank")}}},G=P,R=Object(T["a"])(G,O,I,!1,null,null,null),U=R.exports,z=function(){var t=this,e=t._self._c;return e("div",{staticClass:"all-content"},[e("header",[e("div",{staticClass:"content__header",on:{click:function(e){return t.toCategoryPage()}}},[e("h3",[t._v(t._s(t.filterCategoryTitle(t.categoryTitle)))])]),e("button",{on:{click:function(e){return t.showContent()}}},[t.contentState?t._e():e("img",{attrs:{src:t.plus}}),t.contentState?e("img",{attrs:{src:t.minus}}):t._e()])]),t.contentState&&t.newArr.length>0?e("div",{staticClass:"contents-lists"},t._l(t.newArr,(function(a,s){return e("div",{key:s},[e("div",{staticClass:"contents-list"},[e("div",{staticClass:"contents-list__wrapper"},[e("button",{staticClass:"btn--transparent--img",on:{click:function(e){return t.toLink(a.link)}}},[e("span",{staticClass:"contents-list__icon"},[e("img",{attrs:{src:t.web}})]),e("span",{staticClass:"contents-list__title"},[t._v(" "+t._s(t.filterTitle(a.title))+" ")])])]),e("div",{staticClass:"contents-list__wrapper"},[e("img",{attrs:{src:t.line}}),a.deadline?e("span",{staticClass:"contents-list__expiry"},[t._v("D-"+t._s(t.countDday(a.deadline)))]):t._e(),e("button",{staticClass:"btn--transparent",on:{click:function(e){return t.openMemoModal(s)}}},[e("img",{attrs:{src:t.memo}})]),e("button",{staticClass:"btn--transparent",on:{click:function(e){return t.createFavorites(s)}}},[a.favorite?e("img",{attrs:{src:t.star}}):t._e(),a.favorite?t._e():e("img",{attrs:{src:t.star_gray}})])])]),e("div",[a.contents?e("div",{staticClass:"contents-list"},[e("div",{staticClass:"contents-list__wrapper"},[e("button",{staticClass:"btn--transparent--img",on:{click:function(e){return t.toDetail(a.id)}}},[e("span",{staticClass:"contents-list__icon"},[e("img",{attrs:{src:t.web}})]),e("span",{staticClass:"contents-list__title"},[t._v(" "+t._s(t.filterTitle(a.title))+" ")])])]),e("div",{staticClass:"contents-list__wrapper"},[e("img",{attrs:{src:t.line}}),e("button",{staticClass:"btn--transparent",on:{click:function(e){return t.createFavoriteCollection(s)}}},[a.favorite?e("img",{attrs:{src:t.star}}):t._e(),a.favorite?t._e():e("img",{attrs:{src:t.star_gray}})])])]):t._e()])])})),0):t._e(),t.isMemoModalActive?e("memo-modal-component",{attrs:{contentsId:t.contentsId,memoContents:t.memoContents},on:{"close-modal":function(e){t.isMemoModalActive=!1}}}):t._e()],1)},V=[],K={components:{MemoModalComponent:M["a"]},data(){return{plus:d.a,minus:u.a,line:g.a,memo:h.a,star:b.a,star_gray:w.a,web:F.a,contentState:!1,isMemoModalActive:!1,data:1,isFavoriteListUpdated:0,newArr:[],memoContents:"",contentsId:0}},props:{categoryTitle:String,categoryId:Number},async created(){},watch:{},methods:{async showContent(){await this.$store.dispatch("SORT_DATA",this.categoryId),this.newArr=this.$store.getters.getLatestSortedData,this.contentState=!this.contentState},async createFavorites(t){this.newArr[t].favorite=!this.newArr[t].favorite;try{const e=this.newArr[t].id,a=await Object(A["b"])(e);console.log(a)}catch(e){console.log(e)}},async createFavoriteCollection(t){this.newArr[t].favorite=!this.$store.getters.getCollections[t].favorite;try{const e=this.newArr[t].id,a=await Object(E["b"])(e);console.log(a)}catch(e){console.log(e)}},toCategoryPage(){this.$router.push("/category/"+this.categoryId)},async openMemoModal(t){await this.$store.dispatch("SORT_DATA",this.categoryId),this.newArr=this.$store.getters.getLatestSortedData,this.memoContents=this.newArr[t].comment,this.contentsId=this.newArr[t].id,this.isMemoModalActive=!0},filterTitle(t){return t.length>=30?t.substr(0,30)+"...":t},countDday(t){return Object(k["a"])(t)},toLink(t){window.open(t,"_blank")},toDetail(t){this.$router.push("/collection/"+t)},filterCategoryTitle(t){return t.length>=10?t.substr(0,10)+"...":t}}},Z=K,H=Object(T["a"])(Z,z,V,!1,null,null,null),q=H.exports,J=a("7598"),Y=a("2a7a"),Q=a.n(Y),W=a("09e9"),X=a.n(W),tt=function(){var t=this,e=t._self._c;return e("div",{staticClass:"modal"},[e("div",{staticClass:"overlay"}),e("div",{staticClass:"contents-modal-card"},[e("div",{staticClass:"modal-card__header"},[e("h1",[t._v("콘텐츠 추가")]),e("button",{staticClass:"btn--transparent btn__close",attrs:{type:"button"},on:{click:function(e){return t.$emit("close-modal")}}},[e("img",{attrs:{src:t.closeBtn}})])]),e("div",{staticClass:"modal-card__wrapper"},[e("div",{staticClass:"register-form__wrapper"},[t._m(0),e("div",{staticClass:"flex-container modal-form__wrapper"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.link,expression:"link"}],attrs:{placeholder:"URL 입력",oninput:"this.value = this.value.replace(/ +/g, ' ')"},domProps:{value:t.link},on:{input:function(e){e.target.composing||(t.link=e.target.value)}}}),e("button",{staticClass:"btn--transparent btn__favorites",on:{click:function(e){return t.addFavorites()}}},[e("img",{directives:[{name:"show",rawName:"v-show",value:!t.favorite,expression:"!favorite"}],attrs:{src:t.star_border}}),e("img",{directives:[{name:"show",rawName:"v-show",value:t.favorite,expression:"favorite"}],attrs:{src:t.star}})])])]),e("div",{staticClass:"flex-container-col"},[e("button",{directives:[{name:"show",rawName:"v-show",value:!t.isDetailSettingActive,expression:"!isDetailSettingActive"}],staticClass:"btn__deleteuser",on:{click:t.setDetail}},[t._v(" 세부 설정 ")])]),e("div",{directives:[{name:"show",rawName:"v-show",value:t.isDetailSettingActive,expression:"isDetailSettingActive"}]},[e("div",{staticClass:"register-form__wrapper"},[e("label",{staticClass:"register-form__label"},[t._v("이름")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"title"}],attrs:{placeholder:"30자 이하 권장"},domProps:{value:t.title},on:{input:function(e){e.target.composing||(t.title=e.target.value)}}})]),e("div",{staticClass:"flex-container modal-form__wrapper"},[e("div",{staticClass:"register-form__wrapper"},[e("label",{staticClass:"register-form__label"},[t._v("카테고리")]),e("select",{directives:[{name:"model",rawName:"v-model",value:t.categoryName,expression:"categoryName"}],staticClass:"contents-modal__select",on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.categoryName=e.target.multiple?a:a[0]}}},[e("option",{attrs:{value:"",selected:""}},[t._v("카테고리 선택")]),t._l(t.myCategories,(function(a,s){return e("option",{key:s},[t._v(" "+t._s(a.name)+" ")])}))],2)]),e("div",{staticClass:"register-form__wrapper"},[e("label",{staticClass:"register-form__label"},[t._v("읽을 기한")]),e("div",{staticClass:"flex-container modal-form__wrapper"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.deadline,expression:"deadline"}],attrs:{type:"date"},domProps:{value:t.deadline},on:{input:function(e){e.target.composing||(t.deadline=e.target.value)}}}),e("span",{staticClass:"contents-modal__date-description"},[t._v("D-DAY에 알림을 보내드립니다")])])])]),e("div",{staticClass:"register-form__wrapper"},[e("label",{staticClass:"register-form__label"},[t._v("메모")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.comment,expression:"comment"}],attrs:{placeholder:"500자 이하",maxlength:"500"},domProps:{value:t.comment},on:{input:function(e){e.target.composing||(t.comment=e.target.value)}}})])])]),e("div",{staticClass:"modal-card__collection__wrapper"},[e("span",{staticClass:"modal-card__text"},[e("img",{attrs:{src:t.alert_circle}}),t._v("여러 링크들을 묶어서 저장하고 싶다면?")]),e("button",{staticClass:"btn--transparent btn__collection",on:{click:function(e){return t.openCollectionModal()}}},[t._v(" 콜렉션으로 저장하기 >> ")])]),e("div",{staticClass:"flex-container-col"},[e("button",{staticClass:"btn--sm btnPrimary",attrs:{disabled:!t.link},on:{click:function(e){return t.createContent()}}},[t._v(" 저장 ")])])]),1==t.isAlertModalActive?e("AlertModalComponent",{attrs:{alertModalContent:t.alertModalContent,btnMessage:t.btnMessage},on:{confirmBtn:function(e){t.isAlertModalActive=!1}}}):t._e()],1)},et=[function(){var t=this,e=t._self._c;return e("label",{staticClass:"register-form__label"},[t._v("링크"),e("em",[t._v("*")])])}],at=a("f7ed"),st=a.n(at),nt=a("da44"),ot=a.n(nt),it=a("1680"),rt=a.n(it),ct=a("c24f"),lt=a("3bd4"),dt={components:{AlertModalComponent:lt["a"]},data(){return{closeBtn:st.a,star_border:ot.a,star:b.a,alert_circle:rt.a,isDetailSettingActive:!1,myCategories:{},link:"",title:"",deadline:"",comment:"",categoryName:"",favorite:!1,data:{},linkList:[],isAlertModalActive:!1,AlertModalContent:"",btnMessage:"네"}},mounted(){this.getMyCategory()},props:{contentsData:Object},watch:{link:function(){this.linkList=Object(k["b"])(this.link)}},computed:{isTextLink(){return""!=this.link?Object(k["d"])(this.link):null},countLink(){return""!=this.link?Object(k["c"])(this.link):null}},methods:{setDetail(){this.isDetailSettingActive=!0},addFavorites(){this.favorite=!this.favorite},async getMyCategory(){try{const t=await Object(ct["b"])();this.myCategories=t.data.categories}catch(t){console.log(t)}},async createContent(){if(1==this.countLink){const e={link:this.link,favorite:this.favorite,comment:this.comment,deadline:this.deadline,categoryName:this.categoryName,title:this.title};Object.keys(e).forEach(t=>(""==e[t]||void 0==e[t])&&delete e[t]),console.log(e);try{const t=await Object(A["a"])(e);console.log(t),this.$emit("close-modal")}catch(t){console.log(t),this.alertModalContent=t.response.data.message,this.isAlertModalActive=!0}}else if(this.countLink>=2){const t=this.linkList;this.$emit("isLinkNotSingle",t)}},openCollectionModal(){const t=this.linkList;this.$emit("openCollectionModal",t)}}},mt=dt,ut=Object(T["a"])(mt,tt,et,!1,null,null,null),vt=ut.exports,gt=a("ad92"),pt=a("c405"),_t=function(){var t=this,e=t._self._c;return e("div",{staticClass:"modal"},[e("div",{staticClass:"overlay"}),e("div",{staticClass:"collection-modal-card"},[e("div",{staticClass:"modal-card__header"},[e("h1",[t._v("콜렉션 추가")]),e("button",{staticClass:"btn--transparent btn__close",attrs:{type:"button"},on:{click:function(e){return t.$emit("close-modal")}}},[e("img",{attrs:{src:t.closeBtn}})])]),e("div",{staticClass:"modal-card__wrapper"},[e("div",{staticClass:"flex-container modal-form__wrapper"},[e("div",{staticClass:"register-form__wrapper"},[t._m(0),e("input",{directives:[{name:"model",rawName:"v-model",value:t.collectionData.title,expression:"collectionData.title"}],attrs:{placeholder:"10자 이하 권장"},domProps:{value:t.collectionData.title},on:{input:function(e){e.target.composing||t.$set(t.collectionData,"title",e.target.value)}}})]),e("div",{staticClass:"register-form__wrapper category__wrapper"},[e("label",{staticClass:"register-form__label"},[t._v("카테고리")]),e("select",{directives:[{name:"model",rawName:"v-model",value:t.categoryName,expression:"categoryName"}],staticClass:"contents-modal__select",on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.categoryName=e.target.multiple?a:a[0]}}},[e("option",{attrs:{value:""}},[t._v("카테고리 선택")]),t._l(t.myCategories,(function(a,s){return e("option",{key:s},[t._v(" "+t._s(a.name)+" ")])}))],2)]),e("div",{staticClass:"flex-container favorite__wrapper"},[e("button",{staticClass:"btn--transparent btn__favorites",on:{click:function(e){return t.addFavorites()}}},[e("img",{directives:[{name:"show",rawName:"v-show",value:!t.collectionData.favorite,expression:"!collectionData.favorite"}],attrs:{src:t.star_border}}),e("img",{directives:[{name:"show",rawName:"v-show",value:t.collectionData.favorite,expression:"collectionData.favorite"}],attrs:{src:t.star}})])])]),e("div",{staticClass:"register-form__wrapper"},[e("label",{staticClass:"register-form__label"},[t._v("콜렉션 설명")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.collectionData.comment,expression:"collectionData.comment"}],attrs:{placeholder:"100자 이하",maxlength:"100"},domProps:{value:t.collectionData.comment},on:{input:function(e){e.target.composing||t.$set(t.collectionData,"comment",e.target.value)}}})]),e("div",{staticClass:"register-form__wrapper"},[t._m(1),e("div",{staticClass:"link__wrapper"},t._l(this.collectionData.contentLinkList,(function(a,s){return e("div",{key:s,staticClass:"link__wrapper-inner"},[e("div",{staticClass:"link__index"},[t._v(t._s(s+1))]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.collectionData.contentLinkList[s],expression:"collectionData.contentLinkList[index]"}],attrs:{placeholder:"URL 입력"},domProps:{value:t.collectionData.contentLinkList[s]},on:{input:function(e){e.target.composing||t.$set(t.collectionData.contentLinkList,s,e.target.value)}}}),1!=t.collectionData.contentLinkList.length?e("button",{staticClass:"btn--transparent btn__deleteLink",on:{click:function(e){return t.deleteInput(s)}}},[e("img",{attrs:{src:t.minus}})]):t._e()])})),0),e("div",{staticClass:"flex-container-col modal-card__btn__wrapper"},[e("button",{staticClass:"btn--transparent btn--plus",on:{click:function(e){return t.createInput()}}},[e("img",{attrs:{src:t.add_link}})])])])]),e("div",{staticClass:"flex-container-col modal-card__btn__wrapper"},[e("button",{staticClass:"btn--sm btnPrimary",attrs:{disabled:""==t.collectionData.contentLinkList||!t.collectionData.title},on:{click:function(e){return t.createCollection()}}},[t._v(" 저장 ")])])]),1==t.isAlertModalActive?e("AlertModalComponent",{attrs:{alertModalContent:t.alertModalContent,btnMessage:t.btnMessage},on:{confirmBtn:function(e){t.isAlertModalActive=!1}}}):t._e()],1)},ft=[function(){var t=this,e=t._self._c;return e("label",{staticClass:"register-form__label"},[t._v("콜렉션 이름"),e("em",[t._v("*")])])},function(){var t=this,e=t._self._c;return e("label",{staticClass:"register-form__label"},[t._v("링크"),e("em",[t._v("*")])])}],ht=a("7f97"),Ct=a.n(ht),bt={components:{AlertModalComponent:lt["a"]},data(){return{closeBtn:st.a,star_border:ot.a,star:b.a,alert_circle:rt.a,add_link:Ct.a,isDetailSettingActive:!1,minus:u.a,myCategories:{},isAlertModalActive:!1,alertModalContent:"",btnMessage:"네",isDeleteModalActive:!1,deleteModalContent:"해당 콜렉션을 \n삭제하시겠습니까?",categoryName:""}},props:{collectionData:{type:Object,default:()=>({contentLinkList:["1","2"]})}},created(){this.getMyCategory(),this.collectionData.contentLinkList[0]=""},methods:{addFavorites(){this.collectionData.favorite=!this.collectionData.favorite},async getMyCategory(){try{const t=await Object(ct["b"])();this.myCategories=t.data.categories}catch(t){console.log(t)}},createInput(){this.collectionData.contentLinkList.push("")},deleteInput(t){this.collectionData.contentLinkList.splice(t,1)},async createCollection(){const t={title:this.collectionData.title,comment:this.collectionData.comment,categoryName:this.categoryName,contentLinkList:this.collectionData.contentLinkList.filter((function(t){return null!==t&&void 0!==t&&""!==t})),favorite:this.collectionData.favorite};Object.keys(t).forEach(e=>(""==t[e]||void 0==t[e])&&delete t[e]);try{const e=await Object(E["a"])(t);console.log(e),this.$emit("close-modal")}catch(e){console.log(e),this.alertModalContent=e.response.data.message,this.isAlertModalActive=!0}finally{this.collectionData.title="",this.collectionData.comment="",this.collectionData.contentsLinkList="",this.collectionData.categoryName="",this.collectionData.favorite=!1}}}},yt=bt,wt=Object(T["a"])(yt,_t,ft,!1,null,null,null),Mt=wt.exports,At={components:{CategoryListFavorite:N,CategoryListAll:U,CategoryList:q,ContentsModalComponent:vt,CategoryModalComponent:J["a"],ConfirmModalComponent:gt["a"],AlertModalComponent:lt["a"],CollectionModalComponent:Mt},data(){return{isCategoryModalActive:!1,plusBtn:Q.a,isModalActive:!1,isConfirmModalActive:!1,isAlertModalActive:!1,isCollectionModalActive:!1,topBtn:X.a,confirmModalContent:"URL이 2개 이상이네요! \n 저장방식을 선택해주세요",leftBtnMessage:"콜렉션으로 저장",rightBtnMessage:"각각 콘텐츠로 저장",alertModalContent:"같은 카테고리에 동일 링크가 \n 이미 저장되었습니다.",btnMessage:"네",contentsLinks:[],categoryModalTitle:"카테고리 추가",categoryName:"",myCategories:{},categoryAll:"전체",linkList:[],collectionData:{contentLinkList:[],favorite:!1},collectionModalTitle:"콜렉션 추가"}},async created(){const t=this.$route.path,e=t.slice(6);console.log(t),console.log(e),"google/redirect"==e&&"google"!==localStorage.getItem("oauthInfo")?(console.log("구글 로그인 시도"),await this.getGoogleLogin(),localStorage.removeItem("oauthInfo"),localStorage.setItem("oauthInfo","google"),await this.$store.dispatch("GET_CATEGORIES"),this.myCategories=this.$store.getters.getCategories):"kakao/redirect"==e&&"kakao"!==localStorage.getItem("oauthInfo")?(console.log("카카오 로그인 시도"),await this.getKakaoLogin(),localStorage.removeItem("oauthInfo"),localStorage.setItem("oauthInfo","kakao"),await this.$store.dispatch("GET_CATEGORIES"),this.myCategories=this.$store.getters.getCategories):(await this.$store.dispatch("GET_CATEGORIES"),this.myCategories=this.$store.getters.getCategories)},computed:{isUserLogin(){return this.$store.getters.isLogin}},methods:{async getKakaoLogin(){try{const t=this.$route.query.code;await this.$store.dispatch("KAKAO_LOGIN",t)}catch(t){console.log(t),this.alertModalContent=t.response.data.message,this.isAlertModalActive=!0}},async getGoogleLogin(){try{const t=this.$route.query.code;await this.$store.dispatch("GOOGLE_LOGIN",t)}catch(t){console.log(t),this.alertModalContent=t.response.data.message,this.isAlertModalActive=!0}},openCategoryModal(){this.isCategoryModalActive=!0},async categoryEvent(t){this.categoryName=t,this.isCategoryModalActive=!1;try{const t={categoryName:this.categoryName},e=await Object(pt["a"])(t);this.getMyCategory(),console.log(e)}catch(e){console.log(e),this.alertModalContent=e.response.data.message,this.isAlertModalActive=!0}},addContents(){this.isModalActive=!0},backToTop(){window.scrollTo(0,0)},isLinkNotSingle(t){this.linkList=t,this.isModalActive=!1,this.isConfirmModalActive=!0,console.log("메인컴포넌트",this.linkList)},async addMultipleContents(){this.isConfirmModalActive=!1;const t={contentLinks:this.linkList};try{const e=await Object(A["c"])(t);console.log(e)}catch(e){console.log(e),this.alertModalContent=e.response.data.message,this.isAlertModalActive=!0}},toCategoryPage(t){this.$router.push("/category/"+t)},toFavoriteCategoryPage(){this.$router.push("/category/favorite")},openCollectionModal(t){this.collectionData.contentLinkList=t,this.isConfirmModalActive=!1,this.isModalActive=!1,this.isCollectionModalActive=!0}}},kt=At,Lt=Object(T["a"])(kt,o,i,!1,null,null,null),Dt=Lt.exports,xt={components:{MainComponent:Dt}},St=xt,Tt=Object(T["a"])(St,s,n,!1,null,null,null);e["default"]=Tt.exports},4431:function(t,e,a){"use strict";a.d(e,"a",(function(){return n})),a.d(e,"d",(function(){return o})),a.d(e,"c",(function(){return i})),a.d(e,"b",(function(){return r}));var s=a("365c");function n(t){return s["a"].post("collections/add",t)}function o(t){return s["a"].post("collections/update",t)}function i(t){return s["a"].delete("collections/delete/?collectionId="+t)}function r(t){return s["a"].patch("collections/favorite/"+t)}},5464:function(t,e,a){"use strict";function s(t){const e=/^(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/;return e.test(String(t.toLowerCase()))}function n(t){const e=/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)/;return e.test(String(t))}function o(t){let e="http",a=t.indexOf(e),s=0;while(-1!==a)s++,a=t.indexOf(e,a+1);return s}function i(t){let e=t.split(" ");return e}function r(t){const e=new Date,a=new Date(t),s=e.getTime()-a.getTime();return parseInt(Math.abs(s/864e5)+1)}a.d(e,"e",(function(){return s})),a.d(e,"d",(function(){return n})),a.d(e,"c",(function(){return o})),a.d(e,"a",(function(){return r})),a.d(e,"b",(function(){return i}))},"6d1b":function(t,e,a){t.exports=a.p+"img/memo.f8f0067d.svg"},7561:function(t,e,a){"use strict";a.d(e,"a",(function(){return n})),a.d(e,"g",(function(){return i})),a.d(e,"d",(function(){return r})),a.d(e,"c",(function(){return o})),a.d(e,"b",(function(){return c})),a.d(e,"e",(function(){return l})),a.d(e,"f",(function(){return d}));var s=a("365c");function n(t){return s["a"].post("contents/add",t)}function o(t){return s["a"].post("contents/addMultiple",t)}function i(t){return s["a"].post("contents/update",t)}function r(t){return s["a"].delete("contents/delete/"+t)}function c(t){return s["a"].patch("contents/favorite/"+t)}function l(t){return s["a"].patch("contents/read/"+t)}function d(t){return s["a"].get("contents/summarize/"+t)}},7598:function(t,e,a){"use strict";var s=function(){var t=this,e=t._self._c;return e("div",{staticClass:"modal"},[e("div",{staticClass:"overlay"}),e("div",{staticClass:"modal-card"},[e("div",{staticClass:"modal-card__header"},[e("h1",[t._v(t._s(t.categoryModalTitle))]),e("button",{staticClass:"btn--transparent btn__close",attrs:{type:"button"},on:{click:function(e){return t.$emit("close-modal")}}},[e("img",{attrs:{src:t.closeBtn}})])]),e("div",{staticClass:"modal-card__wrapper"},[e("div",{staticClass:"register-form__wrapper"},[t._m(0),e("div",{staticClass:"flex-container modal-form__wrapper"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.categoryName,expression:"categoryName"}],attrs:{placeholder:"10자 이하 권장"},domProps:{value:t.categoryName},on:{input:function(e){e.target.composing||(t.categoryName=e.target.value)}}})])])]),e("div",{staticClass:"modal-card__category__wrapper"},[e("div",{staticClass:"flex-container-col"},[e("button",{staticClass:"btn--sm btnPrimary",attrs:{disabled:!t.categoryName},on:{click:function(e){return t.categoryEvent()}}},[t._v(" 저장 ")])])]),e("div",{staticClass:"modal-card__category__wrapper"},[e("div",{staticClass:"flex-container"},[e("button",{staticClass:"btn--transparent login-form__link-register",on:{click:function(e){return t.$emit("deleteCategory")}}},[t._v(" "+t._s(t.deleteBtn)+" ")])])])])])},n=[function(){var t=this,e=t._self._c;return e("label",{staticClass:"register-form__label"},[t._v("이름"),e("em",[t._v("*")])])}],o=a("f7ed"),i=a.n(o),r={name:"ModalComponent",data(){return{closeBtn:i.a,categoryName:""}},props:{categoryModalTitle:String,deleteBtn:String},methods:{categoryEvent(){let t=this.categoryName;this.$emit("categoryEvent",t)}}},c=r,l=a("2877"),d=Object(l["a"])(c,s,n,!1,null,null,null);e["a"]=d.exports},"79a5":function(t,e,a){t.exports=a.p+"img/line.293009b2.svg"},"7b82":function(t,e,a){t.exports=a.p+"img/line_white.90c13f63.svg"},"7e44":function(t,e,a){t.exports=a.p+"img/minus.8e7c1397.svg"},"7ec9":function(t,e,a){t.exports=a.p+"img/star_gray.5a8620c4.svg"},"7f97":function(t,e,a){t.exports=a.p+"img/addLink.edbf2541.svg"},8599:function(t,e,a){t.exports=a.p+"img/star.c60dba1e.svg"},"871b":function(t,e,a){t.exports=a.p+"img/plus.56b0c6ab.svg"},ad92:function(t,e,a){"use strict";var s=function(){var t=this,e=t._self._c;return e("div",{staticClass:"confirm-modal"},[e("div",{staticClass:"overlay"}),e("div",{staticClass:"confirm-modal-card"},[e("div",{staticClass:"modal-card__header"},[e("p",{domProps:{innerHTML:t._s(t.handleNewLine(this.confirmModalContent))}})]),e("div",{staticClass:"modal-card__button-wrapper"},[e("button",{attrs:{id:"btn__confirm"},on:{click:function(e){return t.$emit("leftBtn")}}},[t._v(" "+t._s(t.leftBtnMessage)+" ")]),e("button",{on:{click:function(e){return t.$emit("rightBtn")}}},[t._v(t._s(t.rightBtnMessage))])])])])},n=[],o={name:"ConfirmModalComponent",props:{confirmModalContent:String,leftBtnMessage:String,rightBtnMessage:String},methods:{handleNewLine(t){return String(t).replace(/(?:\r\n|\r|\n)/g,"</br>")}}},i=o,r=a("2877"),c=Object(r["a"])(i,s,n,!1,null,null,null);e["a"]=c.exports},adee:function(t,e,a){"use strict";var s=function(){var t=this,e=t._self._c;return e("div",{staticClass:"modal"},[e("div",{staticClass:"overlay"}),e("div",{staticClass:"modal-card"},[e("div",{staticClass:"modal-card__header"},[e("h1",[t._v("메모")]),e("button",{staticClass:"btn--transparent btn__close",attrs:{type:"button"},on:{click:function(e){return t.editMemo()}}},[e("img",{attrs:{src:t.closeBtn}})])]),e("div",{staticClass:"modal-card__wrapper"},[e("div",{staticClass:"flex-container modal-form__wrapper"},[e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.comment,expression:"comment"}],staticClass:"modal-form__textarea",attrs:{placeholder:"",rows:"5",maxlength:"500"},domProps:{value:t.comment},on:{input:function(e){e.target.composing||(t.comment=e.target.value)}}})])])])])},n=[],o=a("f7ed"),i=a.n(o),r=a("7561"),c=a("56d7"),l={name:"MemoModalComponent",data(){return{closeBtn:i.a,comment:"",data:1}},props:{memoContents:String,contentsId:Number},created(){this.comment=this.memoContents,this.id=this.contentsId},methods:{async editMemo(){try{const t={id:this.id,comment:this.comment};Object.keys(t).forEach(e=>(""==t[e]||void 0==t[e])&&delete t[e]);const e=await Object(r["g"])(t);console.log(e),this.$emit("close-modal"),"/main"!=this.$route.fullpath&&c["eventBus"].$emit("memoEvent",this.data)}catch(t){console.log(t)}}}},d=l,m=a("2877"),u=Object(m["a"])(d,s,n,!1,null,null,null);e["a"]=u.exports},c405:function(t,e,a){"use strict";a.d(e,"a",(function(){return n})),a.d(e,"c",(function(){return o})),a.d(e,"b",(function(){return i}));var s=a("365c");function n(t){return s["a"].post("category/add",t)}function o(t){return s["a"].post("category/update",t)}function i(t){return s["a"].delete("category/delete/"+t)}},da44:function(t,e,a){t.exports=a.p+"img/star_border.026e7381.svg"},ee87:function(t,e,a){t.exports=a.p+"img/default.802a9fbe.png"},f7ed:function(t,e,a){t.exports=a.p+"img/closeBtn.a9f6b6a0.svg"}}]);
//# sourceMappingURL=chunk-48216896.ebc709d6.js.map