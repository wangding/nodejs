require(["gitbook","jQuery"],function(e,i){function c(e){var t=document.createRange(),e=(t.selectNodeContents(e),window.getSelection());e.removeAllRanges(),e.addRange(t)}e.events.bind("page.change",function(){i("pre").each(function(){i(this).css("position","relative");var e=i("<button class='copy-code-button'>Copy</button>");e.css({position:"absolute",top:"5px",right:"5px",padding:"3px","background-color":"#313E4E",color:"white","border-radius":"5px","-moz-border-radius":"5px","-webkit-border-radius":"5px",border:"2px solid #CCCCCC"}),e.click(function(){var e,t,o,n=i(this).siblings("code");n&&(c(n.get(0)),o="",window.getSelection?o=window.getSelection():document.getSelection?o=document.getSelection():document.selection&&(o=document.selection.createRange().text),e="",e=1==function(e){if(window.clipboardData&&window.clipboardData.setData)return clipboardData.setData("Text",e);if(document.queryCommandSupported&&document.queryCommandSupported("copy")){var t=document.createElement("textarea");t.textContent=e,t.style.position="fixed",document.body.appendChild(t),t.select();try{return document.execCommand("copy")}catch(e){return console.warn("Copy to clipboard failed.",e),!1}finally{document.body.removeChild(t)}}}(o)?"Copied":"Unable to copy",c(n.get(0)),i(this).text(e),t=this,setTimeout(function(){i(t).text("Copy")},2e3))}),i(this).append(e)})})});