(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{1208:function(e,t,i){"use strict";i.r(t);var s=i(784),a=i(883),n=i(10),o=i(710),l=i(724),r=i(716),u={mounted:function(){var e=this;this.$nextTick((function(){e.$bus.$emit("modal-show","modal-newsletter")}))},beforeDestroy:function(){this.$off("validation-error")},methods:{onSuccesfulSubmission:function(e){e&&this.$store.dispatch("notification/spawnNotification",{type:"success",message:n.a.t("You have been successfully subscribed to our newsletter!"),action1:{label:n.a.t("OK")}}),this.$bus.$emit("modal-hide","modal-newsletter")}},components:{ButtonFull:o.a,Modal:l.a,BaseInput:r.a},mixins:[s.a,a.a]},c=i(170),d=Object(c.a)(u,(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("modal",{attrs:{name:"modal-newsletter",width:450}},[i("p",{attrs:{slot:"header"},slot:"header"},[e._v("\n    "+e._s(e.$t("Newsletter"))+"\n  ")]),e._v(" "),i("div",{attrs:{slot:"content"},slot:"content"},[i("form",{attrs:{novalidate:""},on:{submit:function(t){return t.preventDefault(),e.subscribe(e.onSuccesfulSubmission)}}},[i("div",{staticClass:"mb10"},[i("p",{staticClass:"h4"},[e._v("\n          "+e._s(e.$t("Sign up to our newsletter and receive a coupon for 10% off!"))+"\n        ")]),e._v(" "),i("base-input",{attrs:{focus:"",type:"email",name:"email",autocomplete:"email",placeholder:e.$t("E-mail address *"),validations:[{condition:e.$v.email.$error&&!e.$v.email.required,text:e.$t("Field is required.")},{condition:!e.$v.email.email&&e.$v.email.$error,text:e.$t("Please provide valid e-mail address.")}]},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}})],1),e._v(" "),i("button-full",{staticClass:"mb35",attrs:{type:"submit",disabled:this.$v.$invalid},nativeOn:{click:function(t){return e.$v.email.$touch(t)}}},[e._v("\n        "+e._s(e.$t("Subscribe"))+"\n      ")])],1)])])}),[],!1,null,null,null);t.default=d.exports},883:function(e,t,i){"use strict";var s=i(711);t.a={name:"NewsletterSubscribe",data:function(){return{email:""}},validations:{email:{required:s.required,email:s.email}},methods:{subscribe:function(e,t){if(!this.$v.$invalid)return this.$store.dispatch("newsletter/subscribe",this.email).then((function(t){e&&e(t)})).catch((function(e){t&&t(e)}))}}}}}]);
//# sourceMappingURL=vsf-newsletter-modal.e74e1e8301c84cd3b76e.js.map