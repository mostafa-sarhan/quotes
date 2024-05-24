var demo = document.querySelector(".demo");

var btn = document.querySelector("button");

var quotes =[

    "<p>“Be yourself; everyone else is already taken.”</p>",
    "<p>“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”</p>",
    "<p>“So many books, so little time.”</p>",
    "<p>“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”</p>",
    "<P>“A room without books is like a body without a soul.</P>",
    "<P>“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”</P>",
    "<p>“You only live once, but if you do it right, once is enough.”</p>",
    "<p>“If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals.”</p>",
    "<P>Robert Frost“In three words I can sum up everything I've learned about life: it goes on.”</P>",
    "<P>“A friend is someone who knows all about you and still loves you.”</P>",



]



btn.addEventListener("click" , function(){
    var x = Math.floor(Math.random()*quotes.length) ;
    demo.innerHTML = quotes[x]

})




