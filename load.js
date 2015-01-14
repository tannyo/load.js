/*
 * load.js
 * A simple script loader.
 *
 * Edit the scripts array of objects and add this to the bottom of your html page.
 * Documentation and license information at https://github.com/tannyo/load.js.
 */

/*jslint browser: true, devel: true, plusplus: true, indent: 2 */
/*global debug */
(function loadScripts() {
  'use strict';

  var i = 0,
    scripts = [
      {src: '//ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js', wait: true, add: true},
      {src: '/js/utils.js?201410081725', wait: false, add: true},
      {src: '/js/video.ga.js?201410081725', wait: false, add: document.getElementById("video-blocker")},
      {src: '//maxcdn.bootstrapcdn.com/bootstrap/3.3.1/js/bootstrap.min.js', wait: false, add: true},
      {src: '/js/downloads.js?201412031612', wait: false, add: /^downloads/.test(document.body.className)}
    ];

  function addScript() {
    var script;

    function scriptLoaded() {
      i++;
      addScript();
    }

    if (i >= scripts.length) {
      return;
    }

    // Should we skip this script?
    if (!scripts[i].add) {
      i++;
      addScript();
      return;
    }

    // Create a new script element.
    script = document.createElement('script');

    // Should we wait to load the next script after this script has loaded?
    if (scripts[i].wait) {
      script.onload = scriptLoaded;

      // Support script load errors in IE < 9, if you don't need this support,
      // delete this section.
      if (window.attachEvent && !window.addEventListener) {
        // Support errors in readyState. http://stackoverflow.com/a/18840568
        script.onreadystatechange = function () {
          if (script.readyState === "complete") {
            // Add the script to the page to run the script.
            document.body.appendChild(script);
            script.onreadystatechange = null;
            scriptLoaded();
            return;
          }

          var firstState = script.readyState;

          // hack: calling 'children' property changes node's readyState from
          // 'loaded' to complete (if script was loaded normally) or to 'loading'
          // - if error detected. This will throw an error if the script loaded
          // successfully and not if there is an error.
          try {
            script.children;
          } catch (ignore) {
            // Ignore
          }
          if (firstState === "loaded" && script.readyState === "loading") {
            // Error loading required script. Usually an error function would be
            // called, but since we are not detecting errors, no error function
            // is called.
            script.onreadystatechange = null;
          }
        };
      } else {
        // Not IE, load the script.
        document.body.appendChild(script);
      }

      // Add the script src.
      script.src = scripts[i].src;
      // Wait until the script has loaded before adding it to the DOM.
    } else {
      // Add the script src.
      script.src = scripts[i].src;

      // Append the script to the body to allow multiple scripts to load at the
      // same time.
      document.body.appendChild(script);

    }

    if (debug) {
      console.log("loading: %c%s %c%s", "color:blue", script.src, "color:darkred", (scripts[i].wait ? "synchronous" : "asynchronous"));
    }

    // Should we load the next script now?
    if (scripts[i].wait) {
      return;
    }

    i++;
    addScript();
  }

  // Start loading scripts.
  addScript();
}());
