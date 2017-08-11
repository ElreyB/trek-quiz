$(document).ready(function(){
  $(".quiz").submit(function(event){
  var seasonInput = parseInt($("#season").val());
  var animalInput = parseInt($("#animal").val());
  var foodInput = parseInt($("#food").val());
  var colorInput = parseInt($("#color").val());

  $("#uhura, #scotty, #spock, #kirk, .quiz").hide();

  var result = seasonInput + animalInput + foodInput + colorInput;

    if (result <= 4){
      $("#kirk, .panel").show();
    } else if (result > 4 && result <= 8){
      $("#scotty, .panel").show();
    }else if (result > 8 && result <= 12){
      $("#uhura, .panel").show();
    }else if (result > 12){
      $("#spock, .panel").show();
    }else{
      $("span").show();
    }

    event.preventDefault();
  });

  $("#clear").click(function(event){
    $("#uhura, #scotty, #spock, #kirk").hide();

    event.preventDefault();
  });

  $("#return").click(function(){
    $("#uhura, #scotty, #spock, #kirk, .panel").hide();
    $(".quiz").show();
  });
});
