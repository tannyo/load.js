# load.js

My version of a script loader.

## Usage

<script src="path/to/load.js"></script>

Edit the array of script location objects in load.js. Include load.js at the bottom of your html.

## Settings

**Script Object**
```
{
  src: string,
  wait: boolean,
  add: boolean
}
```

### src
String. URL of script file.

### wait
Boolean. true, wait for script to load before loading other scripts. false, continue loading script files.

### add
Boolean. true, load script file. false, skip loading script file.

## Example
Wait until jQuery is loaded from a CDN, then load the rest of the files asynchronously. Don't add video.ga.js unless there is a video to play. Don't add downloads.js unless the user is on the downloads page.

```
scripts = [
  {src: '//ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js', wait: true, add: true},
  {src: '/js/utils.js?201410081725', wait: false, add: true},
  {src: '/js/video.ga.js?201410081725', wait: false, add: document.getElementById("video-blocker")},
  {src: '//maxcdn.bootstrapcdn.com/bootstrap/3.3.1/js/bootstrap.min.js', wait: false, add: true},
  {src: '/js/downloads.js?201412031612', wait: false, add: /^downloads/.test(document.body.className)}
];
```

## Notes
If you do not need to support IE browsers less than IE 9, use load-modern.js as it deletes the approximately 30 lines of code that supports IE versions less than 9. There is a minified version of each version of load.js.

The minified versions do not minify the scripts array so that you can easily edit the array of scripts.

## Issues

Have a bug? Please create an [issue](https://github.com/tannyo/load.js/issues) here on GitHub!

## Contributing

Want to contribute? Great! Just fork the project, make your changes and open a [pull request](https://github.com/tannyo/load.js/pulls).

## Changelog
* v0.10 2014-07-01 TKO Created by Tanny O'Haley.

## License

The MIT License (MIT)

Copyright (c) 2015 [Tanny O'Haley](http://tanny.ica.com)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
