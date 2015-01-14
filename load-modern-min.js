(function loadScripts(){var c=0,a=[
{src:"//ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js",wait:true,add:true},
{src:"/js/utils.js?201410081725",wait:false,add:true},
{src:"/js/video.ga.js?201410081725",wait:false,add:document.getElementById("video-blocker")},
{src:"//maxcdn.bootstrapcdn.com/bootstrap/3.3.1/js/bootstrap.min.js",wait:false,add:true},
{src:"/js/downloads.js?201412031612",wait:false,add:/^downloads/.test(document.body.className)}
];function b(){var e;function d(){c++;b()}if(c>=a.length){return}if(!a[c].add){c++;b();return}e=document.createElement("script");if(a[c].wait){e.onload=d}e.src=a[c].src;document.body.appendChild(e);if(typeof debug!="undefined"&&debug){console.log("loading: %c%s %c%s","color:blue",e.src,"color:darkred",(a[c].wait?"synchronous":"asynchronous"))}if(a[c].wait){return}c++;b()}b()}());
