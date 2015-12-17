var final_result = [];
var keywords = ['landscape','landscape','landscape','landscape','landscape'];

function onstartfun(event){
  console.log("Recognition Started");
}

function onendfun(event){
  console.log("Done");
}

if (!('webkitSpeechRecognition' in window)) {
  upgrade();
}
else {
  word = [];
  flickrapi = '527930f5d74133eb0157444931f3c21e';
  console.log("Not here");
  var recognition = new webkitSpeechRecognition();
  recognition.continuous = false;

  recognition.onstart = function(){
    console.log("START");
  }
  recognition.onresult = function (event){
    console.log("result");
    var contains = true;
    for (var i = event.resultIndex; i < event.results.length; ++i) {
      if (event.results[i].isFinal) {
        word = event.results[i][0].transcript.split(" ");
        for(var c = 0; c<word.length;c++){
          if(word[c].length>4){

            for(d=0;d<5;d++){
              // keywor
              if(keywords[d].localeCompare(word[c])==0){
                contains = true;
                break;
              }
            }
            if(contains){
              keywords.splice(0,1);
              keywords.push(word[c]);
              console.log("instate2 for" + word[c]);
              contains = false;
            }
          }
        }
      }else{
        console.log("not final transcript");
      }
    }
  };

  recognition.onerror = function (event){
    console.log(event.error);
  };
  recognition.onend = function (){
    console.log("ended");
    recognition.start();
  }
  recognition.lang = 'en-US';
  recognition.start();
}

window.onload = function (){
  slide();
}

function slide(){
  window.setInterval( function(){
    console.log("TEST");

    console.log(keywords);
    randWord = Math.floor((Math.random()*5));
    keyword = keywords[randWord];
    console.log("Keyword:"+keyword);
    var url = 'https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=af7514ef8caf7e6f8b7de3f2c714f885&tags='+keyword+'&sort=relevance&safe_search=1&format=json&nojsoncallback=1';
    console.log(url);
    g=0;
    $.getJSON(url,
    function(data){
        if(data.stat != 'fail') {
          randomImage = Math.floor((Math.random()*24));
          image = data.photos.photo[randomImage];
          imageurl = "https://farm4.staticflickr.com/"+image.server+"/"+image.id+"_"+image.secret+".jpg"
          document.getElementById('image').src = imageurl;
        }
        console.log("flickr response"+data.stat);
    });

  }, 3000);
}
