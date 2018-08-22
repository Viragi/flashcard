$("form").submit(function(e){
  e.preventDefault();
  var fronttext = $(".front").val();
  var backtext = $(".back").val();
  
  // alert(fronttext);
  $(".card").append(`<div class="card_face card__face--front"><div class="text">${fronttext}</div></div>`);
  $(".card").append(`<div class="card_face  card__face--back"><div class="text">${backtext}</div></div>`);
  $(".card__face--back").hide()

 
   $(".card__face--front").on("click" , function(){
   $(".card").toggleClass("is-flipped")
    $(".card__face--front").hide()
    $(".card__face--back").show()
  }
  )
  $(".card__face--back").on("click" , function(){
    $(".card").toggleClass("is-flipped")
    $(".card__face--back").hide()
    $(".card__face--front").show()
    }
   )
})

