(function loadScripts(){var c=0,a=[
{src:"//ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js",wait:true,add:true},
{src:"/js/utils.js?201410081725",wait:false,add:true},
{src:"/js/video.ga.js?201410081725",wait:false,add:document.getElementById("video-blocker")},
{src:"//maxcdn.bootstrapcdn.com/bootstrap/3.3.1/js/bootstrap.min.js",wait:false,add:true},
{src:"/js/downloads.js?201412031612",wait:false,add:/^downloads/.test(document.body.className)}
];function b(){var e;function d(){c++;b()}if(c>=a.length){return}if(!a[c].add){c++;b();return}e=document.createElement("script");if(a[c].wait){e.onload=d;if(window.attachEvent&&!window.addEventListener){e.onreadystatechange=function(){if(e.readyState==="complete"){document.body.appendChild(e);e.onreadystatechange=null;d();return}var f=e.readyState;try{e.children}catch(g){}if(f==="loaded"&&e.readyState==="loading"){e.onreadystatechange=null}}}e.src=a[c].src}else{e.src=a[c].src;document.body.appendChild(e)}if(a[c].wait){return}c++;b()}b()}());
