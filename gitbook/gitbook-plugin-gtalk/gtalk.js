module.exports=function(t,i){t=t.config.get("pluginsConfig").gtalk,t.id="/"+i.path.slice(0,i.path.length-2)+"html",t='\n\n<div id="gitalk-container"></div><script src="https://cdn.jsdelivr.net/npm/gitalk@1/dist/gitalk.min.js"><\/script><script>window.onload = function() {gitbook.events.on("page.change", function() {var gitalk = new Gitalk('+JSON.stringify(t)+');gitalk.render("gitalk-container");});};var gitalk = new Gitalk('+JSON.stringify(t)+');gitalk.render("gitalk-container");<\/script>';return i.content+=t,i};