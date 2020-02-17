$(function() {
  $(".typed").typed({
    strings: [
      "stat meg.human<br/>" +
      "><span class='caret'>$</span> skills: software development in python, java, &amp; C <br/> ^100" +
      "><span class='caret'>$</span> job: student &amp; scientist at <a href='http://www.wm.edu/'>William &amp; Mary</a><br/> ^100" +
      "><span class='caret'>$</span> hobbies: baking, board games, pilot-in-training<br/> ^300" +
      "><span class='caret'>$</span> alias: megretson <br/>" +
      "><span class='caret'>$</span> highlight:  <a href='https://github.com/WM-CSCI-435-F19/ds4se'>check out my current project: data science for software engineering</a><br/>"/*
      "><span class='caret'>$</span> <a href='/timeline'>timeline</a> <a href='http://www.github.com/crearo/'>github</a> <a href='http://in.linkedin.com/in/bhardwajrish/'>linkedin</a> <a href='http://bhardwajrish.blogspot.com/'>blog</a><br/>"*/
    ],
    showCursor: true,
    cursorChar: '_',
    autoInsertCss: true,
    typeSpeed: 0.001,
    startDelay: 50,
    loop: false,
    showCursor: false,
    onStart: $('.message form').hide(),
    onStop: $('.message form').show(),
    onTypingResumed: $('.message form').hide(),
    onTypingPaused: $('.message form').show(),
    onComplete: $('.message form').show(),
    onStringTyped: function(pos, self) {$('.message form').show();},
  });
  $('.message form').hide()
});
