function dpa_ready(){!function(){"use strict";window.addEventListener("message",function(a){if("dpa"==a.data.sentinel&&document.getElementById(a.data.embed)&&(document.getElementById(a.data.embed).style.height=a.data.height+"px"),void 0!==a.data["datawrapper-height"]){for(var b in a.data["datawrapper-height"])var c=document.getElementById("datawrapper-chart-"+b)||document.querySelector("div[data-app='dpa-datawrapper'] iframe[src*='"+b+"']");c&&(c.style.height=a.data["datawrapper-height"][b]+"px")}})}(),dpa_searchForApps()}function dpa_searchForApps(){function a(){var a=0;d.forEach(function(c){var f=b.createElement("script");f.type="text/javascript",f.src=c,f.onload=function(){++a==d.length&&e.forEach(function(a){"dpa-setup"==a.strApp?b[a.htmlvarsApp.id]=new Setup(a.strId,a.htmlvarsApp):b[a.htmlvarsApp.id]=new Main(a.strId,a.htmlvarsApp),"false"!=a.htmlvarsApp.buildApplication&&b[a.htmlvarsApp.id].constructor()})},b.head.appendChild(f)})}var b=document,c=["dpa","dpa-addons","dpa-setup","dpa-sportslive","dpa-electionslive","dpa-webgrafik","dpa-faktencheck","dpa-eventfeature","dpa-datawrapper"],d=[],e=[],f="",g="";if(c.forEach(function(a){f+="div[data-app='"+a+"']:not([data-registered]),"}),f=f.slice(0,-1),Array.prototype.forEach.call(document.querySelectorAll(f),function(a){strApp=a.getAttribute("data-app");var c=a.getAttribute("data-format"),f=a.getAttribute("data-embed-type");void 0!=f&&""!=f||(f="dom"),"dpa-addons"==strApp&&"pym"==f&&(f="iframe-dyn",a.setAttribute("data-embed-type",f)),f=f.toLowerCase();var h=void 0==a.getAttribute("id")||""==a.getAttribute("id")?"dpa_app-"+(new Date).getTime()+Math.floor(1e5*Math.random()+1):a.getAttribute("id"),i={};i.id=h,i.env="prod",i.path="../../../../../../",i.trackingPixel=!0,"dpa-setup"==strApp&&(i.path="https://dpa-setup.s3-eu-west-1.amazonaws.com/");for(var j=0,k=a.attributes,l=k.length;j<l;j++)if(k[j].nodeName.indexOf("data-")>-1){var m=String(k[j].nodeName).slice(5),n=m.split("-"),o=n[0];n.forEach(function(a,b){b>0&&(o+=a.slice(0,1).toUpperCase()+a.slice(1))}),i[o]=k[j].value,"pathCss"==o&&(i.pathCSS=k[j].value)}if("pym"==f){"../../../../../../"==i.path&&delete i.path;var p=i.src;for(var q in i){var r=i[q];-1==p.indexOf("?")?p+="?"+q+"="+r:p+="&"+q+"="+r}"dpa-datawrapper"==strApp?a.innerHTML="<iframe id='datawrapper-chart-"+i.competitionId+"' src='https://datawrapper.dwcdn.net/"+i.competitionId+"/' scrolling='no' frameborder='0' style='width: "+i.width+"; border: none;' height='"+i.height+"'></iframe>":a.innerHTML="<div data-pym-src='"+p+"' data-pym-allowfullscreen></div>"}else if("iframe-dyn"==f){var p=i.src;for(var q in i){var r=i[q];-1==p.indexOf("?")?p+="?"+q+"="+r:p+="&"+q+"="+r}void 0!=i.width&&""!=i.width||(i.width="100%"),a.innerHTML="<iframe id='"+h+"' src='"+p+"' scrolling='no' marginheight='0' frameborder='0' allowfullscreen='' style='width:100%; max-width: "+i.width+"; border: none;'></iframe>"}else if("dom"==f&&"dpa-addons"==strApp&&"gallery"==c){"../../../../../../"==i.path&&delete i.path;var s=i.src;for(var t in i){var u=i[t];-1==s.indexOf("?")?s+="?"+t+"="+u:s+="&"+t+"="+u}var v=new XMLHttpRequest;v.onload=function(c){a.innerHTML=v.responseText;var d=a.querySelectorAll("meta");try{for(var e=0;e<d.length;e++)a.removeChild(d[e])}catch(a){}try{a.removeChild(a.querySelector("title"))}catch(a){}var f=a.querySelectorAll("body script");if(f.length>0)for(var g=0;g<f.length;g++){var h=b.createElement("script");h.type="text/javascript",f[g].getAttribute("src")&&""!=f[g].getAttribute("src")?h.src=f[g].getAttribute("src"):f[g].innerHTML&&""!=f[g].innerHTML&&(h.innerHTML=f[g].innerHTML),a.removeChild(f[g]),a.appendChild(h)}},v.open("GET",s,!0),v.send()}else{var w=window.location.href,x=w.slice(w.indexOf("?")+1).split("#")[0].split("&");x.forEach(function(a){i[a.split("=")[0]]=a.split("=")[1]}),"dpa-sportslive"==strApp||"dpa-electionslive"==strApp?("dev"==i.env&&(i.path=i.path+"../"+i.competitionId+"/"),""!=i.pathSrc&&void 0!=i.pathSrc||(i.pathSrc=i.path+"src/"),i.pathFeed=i.path+"feed/","dpa-sportslive"==strApp?i.pathImage=i.path+"images/":i.pathImage=i.path+"img/","dev"==i.env&&(i.pathSrc=i.path+"../src/"),""==g&&"dev"!=i.env&&-1==location.hostname.indexOf("localhost")&&-1==location.hostname.indexOf("dpa-dev")&&-1==location.hostname.indexOf("sportslive.dev")&&(g=i.path+"assets/")):"dpa-eventfeature"==strApp?(i.pathSrc=i.path+"items/"+i.eventId+"/src/",i.pathFeed=i.path+"items/"+i.eventId+"/feed/",i.pathImage=i.path+"items/"+i.eventId+"/img/",("localhost"===location.hostname||location.hostname.indexOf("dpa-dev")>=0||location.hostname.indexOf("sportslive.dev")>=0)&&(i.pathSrc=i.path+"src/")):(i.pathSrc=i.path+"src/",location.href.indexOf("items-preview")>=0?(i.pathFeed=i.path+"items-preview/"+i.format+"/"+i.competitionId+"/feed/",i.pathImage=i.path+"items-preview/"+i.format+"/"+i.competitionId+"/img/"):(i.pathFeed=i.path+"items/"+i.format+"/"+i.competitionId+"/feed/",i.pathImage=i.path+"items/"+i.format+"/"+i.competitionId+"/img/")),void 0==i.pathCSS&&void 0!=i.pathConfig&&""!=i.pathConfig&&(i.pathCSS=i.pathConfig),a.innerHTML="<div id='"+h+"' class='dpa_app'></div>";try{a.removeAttribute("id")}catch(a){}var y="";if(String(i.pathSrc).indexOf("http://")>-1||String(i.pathSrc).indexOf("https://")>-1)y=i.pathSrc+"Main.js";else{var z=window.location.href.split("#/")[0];y=String(y).substr(0,String(z).split("?")[0].lastIndexOf("/"))+i.pathSrc+"Main.js"}-1==d.indexOf(y)&&d.push(y),e.push({htmlvarsApp:i,strId:h,strApp:strApp})}a.setAttribute("data-registered","true")}),b.querySelectorAll("div[data-app]:not([data-embed-type='pym'])").length>0&&d.length>0)if(window.jQuery)a();else{var h=b.querySelectorAll('div[data-app][data-use-require="true"]'),i=""!=g?g+"js/jquery-3.1.1.min.js":"https://d2c0cdjj8gf5hk.cloudfront.net/js/jquery-3.1.1.min.js",j=b.createElement("script");if(j.type="text/javascript",h.length>0){var k=h[0].getAttribute("data-require-name");void 0!=k&&null!=k&&""!=k||(k="require"),j.innerHTML=k+"(['"+i+"'], dpa_searchForApps);"}else j.src=i,j.onload=a;b.head.appendChild(j)}if(b.querySelectorAll("div[data-app][data-embed-type='pym']").length>0){var h=b.querySelectorAll('div[data-app][data-use-require="true"]'),l=""!=g?g+"js/pym.min.js":"https://d2c0cdjj8gf5hk.cloudfront.net/js/pym.min.js",j=b.createElement("script");if(j.type="text/javascript",h.length>0){var k=h[0].getAttribute("data-require-name");void 0!=k&&null!=k&&""!=k||(k="require"),j.innerHTML=k+"(['"+l+"']);"}else j.src=l;b.head.appendChild(j)}}/comp|inter|loaded/.test(document.readyState)?dpa_ready():document.addEventListener("DOMContentLoaded",document.addEventListener("DOMContentLoaded",dpa_ready),!1);