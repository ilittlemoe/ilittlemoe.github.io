var titleTime,OriginTitle=document.title;document.addEventListener("visibilitychange",(function(){document.hidden?($('[rel="icon"]').attr("href","/funny.ico"),document.title="页面崩溃啦 ~",clearTimeout(titleTime)):($('[rel="icon"]').attr("href","/favicon.ico"),document.title="噫又好啦 ~(ฅ>ω<*ฅ) "+OriginTitle,titleTime=setTimeout((function(){document.title=OriginTitle}),2e3))}));