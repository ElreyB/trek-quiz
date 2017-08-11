$(document).ready(function(){
  $(".quiz").submit(function(event){
  var seasonInput = parseInt($("#season").val());
  var animalInput = parseInt($("#animal").val());
  var foodInput = parseInt($("#food").val());
  var colorInput = parseInt($("#color").val());

  $("#uhura, #scotty, #spock, #kirk").hide();
  
  var result = seasonInput + animalInput + foodInput + colorInput;

    if (result <= 4){
      $("#kirk").show();
    } else if (result > 4 && result <= 8){
      $("#scotty").show();
    }else if (result > 8 && result <= 12){
      $("#uhura").show();
    }else if (result > 12){
      $("#spock").show();
    }else{
      $("span").show();
    }

    event.preventDefault();
  });
});
