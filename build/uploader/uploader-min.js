YUI.add("uploader",function(E){var B=E.Event,C=E.Node;var A="assets/uploader.swf";function D(F){D.superclass.constructor.apply(this,arguments);if(F.hasOwnProperty("boundingBox")){this.set("boundingBox",F.boundingBox);}if(F.hasOwnProperty("buttonSkin")){this.set("buttonSkin",F.buttonSkin);}if(F.hasOwnProperty("transparent")){this.set("transparent",F.transparent);}if(F.hasOwnProperty("swfURL")){this.set("swfURL",F.swfURL);}}E.extend(D,E.Base,{uploaderswf:null,_id:"",initializer:function(){this._id=E.guid("uploader");var F=C.one(this.get("boundingBox"));var I={version:"10.0.45",fixedAttributes:{allowScriptAccess:"always",allowNetworking:"all",scale:"noscale"},flashVars:{}};if(this.get("buttonSkin")!=""){I.flashVars["buttonSkin"]=this.get("buttonSkin");}if(this.get("transparent")){I.fixedAttributes["wmode"]="transparent";}this.uploaderswf=new E.SWF(F,this.get("swfURL"),I);var H=this.uploaderswf;var G=E.bind(this._relayEvent,this);H.on("swfReady",E.bind(this._initializeUploader,this));H.on("click",G);H.on("fileselect",G);H.on("mousedown",G);H.on("mouseup",G);H.on("mouseleave",G);H.on("mouseenter",G);H.on("uploadcancel",G);H.on("uploadcomplete",G);H.on("uploadcompletedata",G);H.on("uploaderror",G);H.on("uploadprogress",G);H.on("uploadstart",G);},removeFile:function(F){return this.uploaderswf.callSWF("removeFile",[F]);},clearFileList:function(){return this.uploaderswf.callSWF("clearFileList",[]);},upload:function(F,H,J,G,I){if(E.Lang.isArray(F)){return this.uploaderswf.callSWF("uploadThese",[F,H,J,G,I]);}else{if(E.Lang.isString(F)){return this.uploaderswf.callSWF("upload",[F,H,J,G,I]);}}},uploadThese:function(H,G,J,F,I){return this.uploaderswf.callSWF("uploadThese",[H,G,J,F,I]);},uploadAll:function(G,I,F,H){return this.uploaderswf.callSWF("uploadAll",[G,I,F,H]);},cancel:function(F){return this.uploaderswf.callSWF("cancel",[F]);},setAllowLogging:function(F){this.uploaderswf.callSWF("setAllowLogging",[F]);},setAllowMultipleFiles:function(F){this.uploaderswf.callSWF("setAllowMultipleFiles",[F]);},setSimUploadLimit:function(F){this.uploaderswf.callSWF("setSimUploadLimit",[F]);},setFileFilters:function(F){this.uploaderswf.callSWF("setFileFilters",[F]);},enable:function(){this.uploaderswf.callSWF("enable");},disable:function(){this.uploaderswf.callSWF("disable");},_initializeUploader:function(F){this.publish("uploaderReady",{fireOnce:true});this.fire("uploaderReady",{});},_relayEvent:function(F){this.fire(F.type,F);},toString:function(){return"Uploader "+this._id;}},{ATTRS:{log:{value:false,setter:"setAllowLogging"},multiFiles:{value:false,setter:"setAllowMultipleFiles"},simLimit:{value:2,setter:"setSimUploadLimit"},fileFilters:{value:[],setter:"setFileFilters"},boundingBox:{value:null,writeOnce:"initOnly"},buttonSkin:{value:null,writeOnce:"initOnly"},transparent:{value:true,writeOnce:"initOnly"},swfURL:{value:A,writeOnce:"initOnly"}}});E.Uploader=D;},"@VERSION@",{requires:["swf","base","node","event"]});