# Conversation Slider

## Synopsis

This project uses Google's Web APIs to detect voice from its surrounding. 
Takes keywords from detected speech, and adds it to an array of most recent words.

The program pulls public images from flikr using flikr API and replaces current image.

## Code Example

~~~~
if (!('webkitSpeechRecognition' in window)) {
  upgrade();
}else{
  var recognition = new webkitSpeechRecognition();
  
  //get single words
  recognition.continuous = false;

  recognition.onstart = function(){
    //on start
  }
  recognition.onresult = function (event){
    //do things with event.results (to get words)
  };
  recognition.onerror = function (event){
    console.log(event.error);
  };
  recognition.onend = function (){
    //start recognition again
    recognition.start();
  }
  recognition.lang = 'en-US';
  recognition.start();
}
~~~~

## Motivation

The motivation for this project came from The Ohio State University's OHI/O hackathon.

## Installation

Go to https://cyriacdomini.com/conversationslider
This is hosted on github using the gh-pages branch.

## API Reference

Depending on the size of the project, if it is small and simple enough the reference docs can be added to the README. For medium size to larger projects it is important to at least provide a link to where the API reference docs live.

## License

MIT License

Copyright (c) 2016 Cyriac Domini Thundathil

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
