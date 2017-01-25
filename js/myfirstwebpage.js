$(document).ready(function(){
  $('.form').mouseenter(function(){
    $('.form').fadeTo('slow', 0.3);
  $('.form').mouseleave(function(){
    $('.form').fadeTo('slow', 1);
    });
  });
  $('#home').mouseenter(function(){
    $('#home').css("color", "#b82f2f");
  $('#home').mouseleave(function(){
    $('#home').css("color", "#ccc");
    });
  });
  $('#login').mouseenter(function(){
    $('#login').css("color", "#b82f2f");
  $('#login').mouseleave(function(){
    $('#login').css("color", "#ccc");
    });
  });
  $('#about').mouseenter(function(){
    $('#about').css("color", "#b82f2f");
  $('#about').mouseleave(function(){
    $('#about').css("color", "#ccc");
    });
  });
  $('#contact').mouseenter(function(){
    $('#contact').css("color", "#b82f2f");
  $('#contact').mouseleave(function(){
    $('#contact').css("color", "#ccc");
    });
  });
  $('#social').mouseenter(function(){
    $('#social').css("color", "#b82f2f");
  $('#social').mouseleave(function(){
    $('#social').css("color", "#ccc");
    });
  });
  var $click_count = 0
  $('#banner').click(function(){
    console.log($click_count)
    $message0 = "My name is Trunks. This is going to sound really strange, but I\'m not from this time. I traveled here in a time machine twenty years from the future."
    $message1 = "Vegeta was right. Only he, yourself, and Gohan have Saiyan blood. And I got mine from him. He\'s my father."
    $message2 = "In three years on the morning of May twelfth at ten A.M., a horribly destructive duo will show up on an island southwest of South City."
    $message3 = "They have dreadful power, even by our standards. They\'re monsters, Goku. That\'s the best way I know to describe them, they\'re monsters."
    $message4 = "Once this pair surfaces, the Earth and everything you know will be gone for good."
    $message5 = "These androids are ruthless, they delight in causing pain and chaos. Living on Earth in my time is like living in a nightmare. Always running and hiding and looking for a way out."
    $message6 = "I\'m all that's left, I\'m doing the best I can!"
    $message7 = "I agreed with my mother that I should travel back in time, but I had my own reasons for wanting to go. I had hoped that in the past, with Goku\'s help, I would find the androids had some weakness."
    $message8 = "That way I could go back to the future. And even though I still wouldn\'t be able to bring back all those already gone, I might be able to save the people who are left."
    $message9 = "I don\'t remember my dad, so it\'s really great to get to meet him. He\'s a cranky guy, but he\'s impressive."
    $message10 = "Well look, I better be off My mom\'s worried sick about me. She needs to know that everything went OK."
    $message11 = "Father, you\'re so tough and proud, hard and cold like a rock. But still, deep down, your heart beats like mine does."
    $message12 = "I know you feel. I\'m your son and I will always love you. I\'m glad I got to see you, Dad."
    if ($click_count == 0) {
      showText('#introParagraph p', $message0, 0, 40);
      $click_count += 1;
      console.log($click_count)
    } else if ($click_count == 1) {
      jQuery('#introParagraph p').html('');
      showText('#introParagraph p', $message1, 0, 40);
       $click_count += 1
       console.log($click_count)
    } else if ($click_count == 2) {
       jQuery('#introParagraph p').html('');
       showText('#introParagraph p', $message2, 0, 40);
        $click_count += 1
        console.log($click_count)
    } else if ($click_count == 3) {
        jQuery('#introParagraph p').html('');
        showText('#introParagraph p', $message3, 0, 40);
         $click_count += 1
         console.log($click_count)
    } else if ($click_count == 4) {
         jQuery('#introParagraph p').html('');
         showText('#introParagraph p', $message4, 0, 40);
          $click_count += 1
          console.log($click_count)
    } else if ($click_count == 5) {
          jQuery('#introParagraph p').html('');
          showText('#introParagraph p', $message5, 0, 40);
           $click_count += 1
           console.log($click_count)
    } else if ($click_count == 6) {
           jQuery('#introParagraph p').html('');
           showText('#introParagraph p', $message6, 0, 40);
            $click_count += 1
            console.log($click_count)
    } else if ($click_count == 7) {
            jQuery('#introParagraph p').html('');
            showText('#introParagraph p', $message7, 0, 40);
             $click_count += 1
             console.log($click_count)
    } else if ($click_count == 8) {
             jQuery('#introParagraph p').html('');
             showText('#introParagraph p', $message8, 0, 40);
              $click_count += 1
              console.log($click_count)
    } else if ($click_count == 9) {
              jQuery('#introParagraph p').html('');
              showText('#introParagraph p', $message9, 0, 40);
               $click_count += 1
               console.log($click_count)
    } else if ($click_count == 10) {
              jQuery('#introParagraph p').html('');
              showText('#introParagraph p', $message10, 0, 40);
              $click_count += 1
              console.log($click_count)
    } else if ($click_count == 11) {
              jQuery('#introParagraph p').html('');
              showText('#introParagraph p', $message11, 0, 40);
              $click_count += 1
              console.log($click_count)
    } else if ($click_count == 12) {
              jQuery('#introParagraph p').html('');
              showText('#introParagraph p', $message12, 0, 40);
              $click_count += 1
              console.log($click_count)
    } else if ($click_count == 13) {
              jQuery('#introParagraph p').html('');
              jQuery('#introParagraph p').html('<img src="https://media2.giphy.com/media/N9x3LJ3ZV17A4/200.gif#3" height="300px" width="400px"/>');
              $click_count += 1
              console.log($click_count)
    } else if ($click_count > 13) {
              jQuery('#introParagraph p').html('');
              $click_count += 1
              console.log($click_count)

    }
  });
  var audio = document.getElementById('audio');
  document.getElementById('mute').addEventListener('click', function(e) {
    e = e || window.event;
    audio.muted = !audio.muted;
    e.preventDefault();
  }, false);
});
