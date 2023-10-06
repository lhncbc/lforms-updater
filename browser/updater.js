"use strict";(()=>{var c=(e,r)=>()=>(r||e((r={exports:{}}).exports,r),r.exports);var x=c((Y,U)=>{U.exports=["29.0.0","28.0.0","26.0.0","25.0.0","24.0.0","23.0.0","22.0.0"]});var h=c((Z,m)=>{"use strict";var I=/^lformsVersion: (.+)$/;m.exports={isFHIRResource:function(e){return!!e.resourceType},findExtensions:function(e,r){e.extension&&r(e.extension);let i=e.item||e.items;if(i)for(let t of i)this.findExtensions(t,r)},findItemByExtension:function(e,r){e.extension&&r(e);let i=e.item||e.items;if(i)for(let t of i)this.findItemByExtension(t,r)},versionLessThan:function(e,r){let i;if(!e)i=!0;else{let t=e.split("."),o=r.split(".");for(let s=0;s<3&&i===void 0;++s){let l=parseInt(t[s]),n=parseInt(o[s]);l!=n&&(i=l<n)}i===void 0&&(i=!1)}return i},makeVersionTag:function(e){return"lformsVersion: "+e},versionFromTag:function(e){let r=null,t=(e.code||e.display).match(I);return t&&(r=t[1]),r},hasLformsTag(e){if(e.meta&&e.meta.tag){for(let r of e.meta.tag)if(r.code&&r.code.match(I))return!0}return!1}}});var y=c((S,q)=>{"use strict";q.exports=function(e){let r=h();return(!r.isFHIRResource(e)||e.resourceType==="Questionnaire")&&r.findExtensions(e,function(i){for(let t of i)t.url==="http://hl7.org/fhir/StructureDefinition/questionnaire-launchContext"&&(t.url="http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-launchContext")}),e}});var k=c((O,T)=>{"use strict";T.exports=function(e){let r=h();return(!r.isFHIRResource(e)||e.resourceType==="Questionnaire"&&r.hasLformsTag(e))&&r.findExtensions(e,function(i){for(let t of i)if(t.url==="http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-observationLinkPeriod"){i.push({url:"http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-observationExtract",valueBoolean:!0});break}}),e}});var F=c((N,C)=>{"use strict";C.exports=function(e){return h().isFHIRResource(e)||(typeof e.templateOptions=="object"?(e.templateOptions.hideFormControls===void 0&&(e.templateOptions.hideFormControls=!1),e.templateOptions.showFormHeader===void 0&&(e.templateOptions.showFormHeader=!0)):e.templateOptions={hideFormControls:!1,showFormHeader:!0}),e}});var _=c((J,R)=>{"use strict";R.exports=function(e){let r=h();return(!r.isFHIRResource(e)||e.resourceType==="Questionnaire")&&r.findExtensions(e,function(i){for(let t of i)t.url==="http://hl7.org/fhir/StructureDefinition/questionnaire-calculatedExpression"&&(t.url="http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-calculatedExpression")}),e}});var w=c((ee,b)=>{"use strict";var G="/";function X(e){E(e.items,"",e),H(e.items),L(e.items)}function L(e){for(var r=0,i=e.length;r<i;r++){var t=e[r];delete t._parentItem,delete t._codePath,t.items&&t.items.length>0&&L(t.items)}}function E(e,r,i){for(var t=e.length,o=null,s=1,l=0;l<t;l++){var n=e[l],u=n.questionCardinality&&n.questionCardinality.max&&(n.questionCardinality.max==="*"||parseInt(n.questionCardinality.max)>1);u&&o&&o.questionCode===n.questionCode?s+=1:s=1;var f=r+G+n.questionCode;n._parentItem=i,n._codePath=f,n.linkId||(n.linkId=f),o=n,n.items&&n.items.length>0&&E(n.items,f,n)}}function H(e){for(var r=0,i=e.length;r<i;r++){var t=e[r];if(t.skipLogic&&t.skipLogic.conditions)for(var o=0,s=t.skipLogic.conditions.length;o<s;o++){var l=t.skipLogic.conditions[o],n=g(t,l.source);l.source=n.linkId}if(t.dataControl)for(var o=0,s=t.dataControl.length;o<s;o++){var u=t.dataControl[o].source;if(u&&(!u.sourceType||u.sourceType==="INTERNAL")&&u.sourceItemCode){var n=g(t,u.sourceItemCode);if(!n)throw new Error("Data control for item '"+t.question+"' refers to source item '"+u.sourceItemCode+"' which was not found as a sibling, ancestor, or ancestor sibling.");u.sourceLinkId=n.linkId,delete u.sourceItemCode}}if(t.calculationMethod&&t.calculationMethod.value&&Array.isArray(t.calculationMethod.value)){for(var f=[],o=0,s=t.calculationMethod.value.length;o<s;o++){var a=t.calculationMethod.value[o],n=g(t,a);f.push(n.linkId)}t.calculationMethod.value=f}t.items&&t.items.length>0&&H(t.items)}}function g(e,r){var i=null;if(e._parentItem&&Array.isArray(e._parentItem.items)){for(var t=0,o=e._parentItem.items.length;t<o;t++)if(e._parentItem.items[t].questionCode===r){i=e._parentItem.items[t];break}}if(!i)for(var s=e._parentItem;s;){var l=!1;if(s.questionCode===r)i=s,l=!0;else if(s._parentItem&&Array.isArray(s._parentItem.items)){for(var n=s._parentItem.items,t=0,o=n.length;t<o;t++)if(n[t].questionCode===r){i=n[t],l=!0;break}}if(l)break;s=s._parentItem}return i}b.exports=function(e){return!h().isFHIRResource(e)&&e.items&&X(e),e}});var A=c((te,V)=>{"use strict";V.exports=function(e){let r=h(),i=e.meta;if(i){let t=i.tag;if(t){for(let o of t)if(r.versionFromTag(o)){o.display&&!o.code&&(o.code=o.display,delete o.display);break}}}return e.resourceType==="Questionnaire"&&r.findItemByExtension(e,function(t){if(t.extension)for(let o=0;o<t.extension.length;o++)t.extension[o].url==="http://hl7.org/fhir/StructureDefinition/questionnaire-answerRepeats"&&(t.repeats=!0,t.extension.splice(o,1),o=o-1)}),e}});var M=c((re,D)=>{"use strict";D.exports=function(e){let r=h();return(!r.isFHIRResource(e)||e.resourceType==="Questionnaire")&&r.findExtensions(e,function(i){for(let t of i)t.url==="http://hl7.org/fhir/StructureDefinition/questionnaire-observationLinkPeriod"&&(t.url="http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-observationLinkPeriod")}),e}});var P=c((ie,v)=>{v.exports={};v.exports["29.0.0"]=y();v.exports["28.0.0"]=k();v.exports["26.0.0"]=F();v.exports["25.0.0"]=_();v.exports["24.0.0"]=w();v.exports["23.0.0"]=A();v.exports["22.0.0"]=M()});var j=c((oe,B)=>{"use strict";var Q=x(),$=P();B.exports={update:function(e,r){let i=r,t=h();var o=t.isFHIRResource(e),s;if(o){let u=e.meta;if(u){let f=u.tag;if(f)for(let a of f){let d=t.versionFromTag(a);if(d){s=d;break}}}}else s=e.lformsVersion;let l=[];for(let u=0,f=Q.length,a;u<f&&(a=Q[u])&&t.versionLessThan(s,a);++u)(!i||!t.versionLessThan(i,a))&&l.push(a);let n=l[0];for(let u of l.reverse())e=$[u](e);if(l.length)if(o){let u=e.meta;u||(u=e.meta={});let f=u.tag;f||(f=u.tag=[]);let a;for(let p of f)if(t.versionFromTag(p)){a=p;break}let d=t.makeVersionTag(n);a?(a.code=d,delete a.display):f.push({code:d})}else e.lformsVersion=n;return e}}});var z=j();window.lformsUpdater=z;})();
//# sourceMappingURL=updater.js.map
