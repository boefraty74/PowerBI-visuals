var powerbi;!function(e){!function(e){!function(e){!function(e){!function(e){function t(e,t,n){void 0===e&&(e=[]);var r=e;return i(r),t&&(r.identityFields=t),n&&(r.source=n),r}function i(e,t){e.grouped=t?function(){return t}:function(){return n(e)}}function n(e){for(var t,i=[],n=0,r=e.length;n<r;n++){var a=e[n];if(!t||t.identity!==a.identity){if(t={values:[]},a.identity){t.identity=a.identity;var s=a.source;void 0!==s.groupName?t.name=s.groupName:s.displayName&&(t.name=s.displayName)}i.push(t)}t.values.push(a)}return i}e.createValueColumns=t,e.setGrouped=i,e.groupValues=n}(e.DataViewTransform||(e.DataViewTransform={}))}(e.dataview||(e.dataview={}))}(e.utils||(e.utils={}))}(e.extensibility||(e.extensibility={}))}(powerbi||(powerbi={}));var powerbi;!function(e){!function(e){!function(e){!function(e){!function(e){function t(e,t){if(!e||!e.length)return-1;var i=e[0];if(i.values&&i.values.length>0)for(var r=0,a=i.values.length;r<a;++r){var s=i.values[r];if(s&&s.source&&n(s.source,t))return r}return-1}function i(e,t){if(e&&e.length)for(var i=0,r=e.length;i<r;i++)if(n(e[i].source,t))return i;return-1}function n(e,t){var i=e.roles;return i&&i[t]}function r(e,t){return null!=e&&null!=e.metadata&&e.metadata.columns&&e.metadata.columns.some(function(e){return e.roles&&void 0!==e.roles[t]})}function a(e,t){return e&&e.source&&e.source.roles&&!0===e.source.roles[t]}e.getMeasureIndexOfRole=t,e.getCategoryIndexOfRole=i,e.hasRole=n,e.hasRoleInDataView=r,e.hasRoleInValueColumn=a}(e.DataRoleHelper||(e.DataRoleHelper={}))}(e.dataview||(e.dataview={}))}(e.utils||(e.utils={}))}(e.extensibility||(e.extensibility={}))}(powerbi||(powerbi={}));var powerbi;!function(e){!function(e){!function(e){!function(e){!function(e){function t(e,t,i){if(!e)return i;var n=e[t];return void 0===n?i:n}function i(e,i,n){var r=t(e,i);return r&&r.solid?r.solid.color:n}e.getValue=t,e.getFillColorByPropertyName=i}(e.DataViewObject||(e.DataViewObject={}))}(e.dataview||(e.dataview={}))}(e.utils||(e.utils={}))}(e.extensibility||(e.extensibility={}))}(powerbi||(powerbi={}));var powerbi;!function(e){!function(e){!function(e){!function(e){!function(t){function i(t,i,n){return t?e.DataViewObject.getValue(t[i.objectName],i.propertyName,n):n}function n(e,t,i){return e&&e[t]?e[t]:i}function r(e,t,n){var r=i(e,t);return r&&r.solid?r.solid.color:n}function a(e,t,n){var r=i(e,t,n);return r&&r.solid?r.solid.color:void 0===r||null===r||"object"==typeof r&&!r.solid?n:r}t.getValue=i,t.getObject=n,t.getFillColor=r,t.getCommonValue=a}(e.DataViewObjects||(e.DataViewObjects={}))}(e.dataview||(e.dataview={}))}(e.utils||(e.utils={}))}(e.extensibility||(e.extensibility={}))}(powerbi||(powerbi={}));var powerbi;!function(e){!function(t){!function(t){!function(t){var i=e.extensibility.utils.dataview.DataRoleHelper;!function(e){function t(e,t,n){if(e.categories&&e.categories.length>0){var r=e.categories[0];return r.source&&i.hasRole(r.source,t)&&i.hasRole(r.source,n)}return!1}function n(e){return void 0!==e.groupName?e.groupName:e.queryName}function r(e){var t=s(e);return null!=t&&!0===t.imageUrl}function a(e){var t=s(e);return null!=t&&!0===t.webUrl}function s(e){return e&&e.type&&e.type.misc}function o(e){return!!(e&&e.metadata&&e.metadata.columns&&e.metadata.columns.length)&&e.metadata.columns.some(function(e){return!0===r(e)})}e.categoryIsAlsoSeriesRole=t,e.getSeriesName=n,e.isImageUrlColumn=r,e.isWebUrlColumn=a,e.getMiscellaneousTypeDescriptor=s,e.hasImageUrlColumn=o}(t.converterHelper||(t.converterHelper={}))}(t.dataview||(t.dataview={}))}(t.utils||(t.utils={}))}(e.extensibility||(e.extensibility={}))}(powerbi||(powerbi={}));var powerbi;!function(e){!function(e){!function(e){!function(e){var t=function(){function t(){}return t.getDefault=function(){return new this},t.createPropertyIdentifier=function(e,t){return{objectName:e,propertyName:t}},t.parse=function(t){var i,n=this.getDefault();if(!t||!t.metadata||!t.metadata.objects)return n;i=n.getProperties();for(var r in i)for(var a in i[r]){var s=n[r][a];n[r][a]=e.DataViewObjects.getCommonValue(t.metadata.objects,i[r][a],s)}return n},t.isPropertyEnumerable=function(e){return!t.InnumerablePropertyPrefix.test(e)},t.enumerateObjectInstances=function(e,t){var i=e&&e[t.objectName];if(!i)return[];var n={objectName:t.objectName,selector:null,properties:{}};for(var r in i)i.hasOwnProperty(r)&&(n.properties[r]=i[r]);return{instances:[n]}},t.prototype.getProperties=function(){var e=this,i={};return Object.keys(this).forEach(function(n){if(t.isPropertyEnumerable(n)){var r=Object.keys(e[n]);i[n]={},r.forEach(function(e){t.isPropertyEnumerable(n)&&(i[n][e]=t.createPropertyIdentifier(n,e))})}}),i},t}();t.InnumerablePropertyPrefix=/^_/,e.DataViewObjectsParser=t}(e.dataview||(e.dataview={}))}(e.utils||(e.utils={}))}(e.extensibility||(e.extensibility={}))}(powerbi||(powerbi={}));var __extends=this&&this.__extends||function(e,t){function i(){this.constructor=e}for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n]);e.prototype=null===t?Object.create(t):(i.prototype=t.prototype,new i)},powerbi;!function(e){!function(e){!function(e){!function(e){"use strict";function t(){s=0}function i(){return 0===s}function n(e,t){var i=[];if(e&&e.hasChildNodes()){for(var n=e.children,a=0;a<n.length;a++){var s=void 0;s="script"===n.item(a).nodeName.toLowerCase()?r(n.item(a)):n.item(a).cloneNode(!0),t.appendChild(s),i.push(s)}return i}}function r(e){for(var t=document.createElement("script"),i=e.attributes,n=0;n<i.length;n++)t.setAttribute(i[n].name,i[n].textContent),"src"===i[n].name.toLowerCase()&&(s++,t.onload=function(){s--});return t.innerHTML=e.innerHTML,t}function a(){var e=window.setInterval(function(){i()&&(window.clearInterval(e),window.hasOwnProperty("HTMLWidgets")&&window.HTMLWidgets.staticRender&&window.HTMLWidgets.staticRender())},100)}var s=0;e.ResetInjector=t,e.injectorReady=i,e.ParseElement=n,e.RunHTMLWidgetRenderer=a}(e.funnelRHTMLvisual9FCD730882AE47E5BBE685FC051BBB11||(e.funnelRHTMLvisual9FCD730882AE47E5BBE685FC051BBB11={}))}(e.visual||(e.visual={}))}(e.extensibility||(e.extensibility={}))}(powerbi||(powerbi={}));var powerbi;!function(e){!function(t){!function(t){!function(t){"use strict";var i=e.extensibility.utils.dataview.DataViewObjectsParser,n=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.rcv_script=new r,t}return __extends(t,e),t}(i);t.VisualSettings=n;var r=function(){function e(){}return e}();t.rcv_scriptSettings=r}(t.funnelRHTMLvisual9FCD730882AE47E5BBE685FC051BBB11||(t.funnelRHTMLvisual9FCD730882AE47E5BBE685FC051BBB11={}))}(t.visual||(t.visual={}))}(e.extensibility||(e.extensibility={}))}(powerbi||(powerbi={}));var powerbi;!function(e){!function(t){!function(t){!function(t){"use strict";var i=e.extensibility.utils.dataview.DataViewObject,n=[e.VisualUpdateType.Resize,e.VisualUpdateType.ResizeEnd,e.VisualUpdateType.Resize+e.VisualUpdateType.ResizeEnd],r=function(){function e(e){e&&e.element&&(this.rootElement=e.element),this.headNodes=[],this.bodyNodes=[],this.settings_funnel={lineColor:"blue",conf1:"0.95",conf2:"0.999"},this.settings_scatter={pointColor:"orange",weight:10,percentile:40,sparsify:!0},this.settings_axes={colLabel:"gray",textSize:12,scaleXformat:"comma",scaleYformat:"none",sizeTicks:"8",axisXisPercentage:!0}}return e.prototype.update=function(t){if(t&&t.type&&t.viewport&&t.dataViews&&0!==t.dataViews.length&&t.dataViews[0]){var i=t.dataViews[0];this.settings=e.parseSettings(i),this.updateObjects(i.metadata.objects);var r=null;i.scriptResult&&i.scriptResult.payloadBase64&&(r=i.scriptResult.payloadBase64),-1===n.indexOf(t.type)?r&&this.injectCodeFromPayload(r):this.onResizing(t.viewport)}},e.prototype.onResizing=function(e){},e.prototype.injectCodeFromPayload=function(e){if(t.ResetInjector(),e){var i=document.createElement("html");try{i.innerHTML=window.atob(e)}catch(e){return}if(0===this.headNodes.length){for(;this.headNodes.length>0;){var n=this.headNodes.pop();document.head.removeChild(n)}var r=i.getElementsByTagName("head");if(r&&r.length>0){var a=r[0];this.headNodes=t.ParseElement(a,document.head)}}for(;this.bodyNodes.length>0;){var n=this.bodyNodes.pop();this.rootElement.removeChild(n)}var s=i.getElementsByTagName("body");if(s&&s.length>0){var o=s[0];this.bodyNodes=t.ParseElement(o,this.rootElement)}t.RunHTMLWidgetRenderer()}},e.parseSettings=function(e){return t.VisualSettings.parse(e)},e.prototype.updateObjects=function(e){this.settings_funnel={lineColor:i.getValue(e,"lineColor","blue"),conf1:i.getValue(e,"conf1","0.95"),conf2:i.getValue(e,"conf2","0.999")},this.settings_scatter={pointColor:i.getValue(e,"pointColor","orange"),weight:i.getValue(e,"weight",10),percentile:i.getValue(e,"percentile",40),sparsify:i.getValue(e,"sparsify",!0)},this.settings_axes={colLabel:i.getValue(e,"colLabel","gray"),textSize:i.getValue(e,"textSize",12),scaleXformat:i.getValue(e,"scaleXformat","comma"),scaleYformat:i.getValue(e,"scaleYformat","none"),sizeTicks:i.getValue(e,"sizeTicks","8"),axisXisPercentage:i.getValue(e,"axisXisPercentage",!0)}},e.prototype.enumerateObjectInstances=function(e){var i=e.objectName,n=[];switch(i){case"settings_funnel_params":n.push({objectName:i,properties:{lineColor:this.settings_funnel.lineColor,conf1:this.settings_funnel.conf1,conf2:this.settings_funnel.conf2},selector:null});break;case"settings_scatter_params":n.push({objectName:i,properties:{pointColor:this.settings_scatter.pointColor,weight:this.settings_scatter.weight,percentile:this.settings_scatter.percentile,sparsify:this.settings_scatter.sparsify},selector:null});break;case"settings_axes_params":n.push({objectName:i,properties:{colLabel:this.settings_axes.colLabel,textSize:this.settings_axes.textSize,sizeTicks:this.settings_axes.sizeTicks,scaleXformat:this.settings_axes.scaleXformat,axisXisPercentage:this.settings_axes.axisXisPercentage,scaleYformat:this.settings_axes.scaleYformat},selector:null})}return t.VisualSettings.enumerateObjectInstances(this.settings||t.VisualSettings.getDefault(),e)},e}();t.Visual=r}(t.funnelRHTMLvisual9FCD730882AE47E5BBE685FC051BBB11||(t.funnelRHTMLvisual9FCD730882AE47E5BBE685FC051BBB11={}))}(t.visual||(t.visual={}))}(e.extensibility||(e.extensibility={}))}(powerbi||(powerbi={}));var powerbi;!function(e){!function(t){!function(t){t.funnelRHTMLvisual9FCD730882AE47E5BBE685FC051BBB11={name:"funnelRHTMLvisual9FCD730882AE47E5BBE685FC051BBB11",displayName:"funnelRHTMLvisual",class:"Visual",version:"1.0.1",apiVersion:"1.7.0",create:function(t){return new e.extensibility.visual.funnelRHTMLvisual9FCD730882AE47E5BBE685FC051BBB11.Visual(t)},custom:!0}}(t.plugins||(t.plugins={}))}(e.visuals||(e.visuals={}))}(powerbi||(powerbi={}));