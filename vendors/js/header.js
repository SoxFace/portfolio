$(function(){

        $("#typed").typed({
            strings: ["Hi there, I'm <strong>Sox</strong>.", "I <em>love</em> to learn.", "Recently, I learned to code.", "KEYWORDS: Ruby, Rails, Javascript, TDD!"],
            typeSpeed: 30,
            backDelay: 500,
            loop: false,
            contentType: 'html', // or text
            // defaults to false for infinite loop
            loopCount: false,
            callback: function(){ foo(); },
            resetCallback: function() { newTyped(); }
        });

        $(".reset").click(function(){
            $("#typed").typed('reset');
        });

    });

    function newTyped(){ /* A new typed object */ }

    function foo(){ console.log("Header Loaded"); }