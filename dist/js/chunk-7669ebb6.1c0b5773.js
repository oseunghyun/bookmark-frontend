(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7669ebb6"],{3985:function(t,e,n){"use strict";n.r(e);var s=function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"flex-container-col"},[e("div",{staticClass:"register-wrapper"},[e("form",{on:{submit:function(e){return e.preventDefault(),t.submitForm.apply(null,arguments)}}},[e("div",{staticClass:"register-form__wrapper"},[e("label",{staticClass:"register-form__label",attrs:{for:"sns"}},[t._v("간편로그인")]),e("span",{staticClass:"mypage__email",attrs:{id:"sns"}},[t._v(t._s(this.$store.state.oauthInfo))])]),e("div",{staticClass:"register-form__wrapper"},[e("label",{staticClass:"register-form__label",attrs:{for:"nickname"}},[t._v("닉네임")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.nickname,expression:"nickname"}],attrs:{type:"text",maxlength:"8",id:"nickname",placeholder:"2 ~ 8자"},domProps:{value:t.nickname},on:{input:[function(e){e.target.composing||(t.nickname=e.target.value)},function(e){t.nickname=e.target.value}]}})]),0==t.validateNickname?e("span",{staticClass:"error-msg"},[t._v("2자 ~ 8자로 입력해주세요.")]):t._e(),e("div",{staticClass:"space-33"}),e("button",{staticClass:"btn__register",class:{btnValid:t.isValid},attrs:{disabled:!t.isValid,type:"submit"}},[t._v(" 수정 완료 ")])]),e("button",{staticClass:"btn__deleteuser",on:{click:function(e){t.isModalActive=!0}}},[t._v(" 회원탈퇴 ")])])]),1==t.isModalActive?e("confirm-modal-component",{attrs:{confirmModalContent:t.confirmModalContent,leftBtnMessage:t.leftBtnMessage,rightBtnMessage:t.rightBtnMessage},on:{rightBtn:function(e){t.isModalActive=!1},leftBtn:function(e){return t.deleteMembership()}}}):t._e(),1==t.isAlertModalActive?e("AlertModalComponent",{attrs:{alertModalContent:t.alertModalContent,btnMessage:t.btnMessage},on:{confirmBtn:function(e){t.isAlertModalActive=!1}}}):t._e()],1)},a=[],i=n("c24f"),o=n("3786"),r=n("ad92"),l=n("3bd4"),c={components:{ConfirmModalComponent:r["a"],AlertModalComponent:l["a"]},data(){return{nickname:"",isModalActive:!1,confirmModalContent:"회원탈퇴 시, 저장한 콘텐츠 및 콜렉션을 불러올 수 없습니다. 회원을 탈퇴하시겠습니까?",leftBtnMessage:"네",rightBtnMessage:"아니오",isAlertModalActive:!1,AlertModalContent:"",btnMessage:"네"}},created(){this.$store.dispatch("FETCH_PROFILE"),this.nickname=this.$store.state.nickname},computed:{validateNickname(){return""==this.nickname?null:!(this.nickname.length<2||this.nickname.length>8)},isValid(){return 1==this.validateNickname}},methods:{initForm(){this.nickname="",this.email="",this.pw="",this.oldPw="",this.pwCheck=""},async submitForm(){try{const t={name:this.nickname,password:this.pw,oldPassword:this.oldPw},e=await Object(i["a"])(t);console.log(e),this.$router.push("/login")}catch(t){console.log(t),this.alertModalContent=t.response.data.message,this.isAlertModalActive=!0}},async deleteMembership(){try{this.isModalActive=!1;const t=await Object(o["a"])();console.log(t),this.$store.commit("logoutUser"),this.$router.push("/")}catch(t){console.log(t),this.alertModalContent=t.response.data.message,this.isAlertModalActive=!0}}}},d=c,m=n("2877"),u=Object(m["a"])(d,s,a,!1,null,null,null);e["default"]=u.exports},"3bd4":function(t,e,n){"use strict";var s=function(){var t=this,e=t._self._c;return e("div",{staticClass:"alert-modal"},[e("div",{staticClass:"overlay"}),e("div",{staticClass:"alert-modal-card"},[e("div",{staticClass:"modal-card__header"},[e("p",{domProps:{innerHTML:t._s(t.handleNewLine(this.alertModalContent))}})]),e("div",{staticClass:"modal-card__button-wrapper"},[e("button",{on:{click:function(e){return t.$emit("confirmBtn")}}},[e("p",{domProps:{innerHTML:t._s(t.handleNewLine(this.btnMessage))}})])])])])},a=[],i={name:"AlertModalComponent",props:{alertModalContent:String,btnMessage:String},methods:{handleNewLine(t){return String(t).replace(/(?:\r\n|\r|\n)/g,"</br>")}}},o=i,r=n("2877"),l=Object(r["a"])(o,s,a,!1,null,null,null);e["a"]=l.exports},ad92:function(t,e,n){"use strict";var s=function(){var t=this,e=t._self._c;return e("div",{staticClass:"confirm-modal"},[e("div",{staticClass:"overlay"}),e("div",{staticClass:"confirm-modal-card"},[e("div",{staticClass:"modal-card__header"},[e("p",{domProps:{innerHTML:t._s(t.handleNewLine(this.confirmModalContent))}})]),e("div",{staticClass:"modal-card__button-wrapper"},[e("button",{attrs:{id:"btn__confirm"},on:{click:function(e){return t.$emit("leftBtn")}}},[t._v(" "+t._s(t.leftBtnMessage)+" ")]),e("button",{on:{click:function(e){return t.$emit("rightBtn")}}},[t._v(t._s(t.rightBtnMessage))])])])])},a=[],i={name:"ConfirmModalComponent",props:{confirmModalContent:String,leftBtnMessage:String,rightBtnMessage:String},methods:{handleNewLine(t){return String(t).replace(/(?:\r\n|\r|\n)/g,"</br>")}}},o=i,r=n("2877"),l=Object(r["a"])(o,s,a,!1,null,null,null);e["a"]=l.exports}}]);
//# sourceMappingURL=chunk-7669ebb6.1c0b5773.js.map