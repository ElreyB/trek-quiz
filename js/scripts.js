$(document).ready(function(){
  $("#reset").click(function(){
    HTMLFormElement.reset()
    $("uhura").hide();
    $("scotty").hide();
    $("spock").hide();
    $("kirk").hide();
  });
  $(".quiz").submit(function(event){
  var seasonInput = parseInt($("#season").val());
  var animalInput = parseInt($("#animal").val());
  var foodInput = parseInt($("#food").val());
  var colorInput = parseInt($("#color").val());

  var result = seasonInput + animalInput + foodInput + colorInput;

    if (result <= 4){
      $("#kirk").show();
      // $("uhura").hide();
      // $("scotty").hide();
      // $("spock").hide();
    } else if (result > 4 && result <= 8){
      $("#scotty").show();
      // $("uhura").hide();
      // $("kirk").hide();
      // $("spock").hide();
    }else if (result > 8 && result <= 12){
      $("#uhura").show();
      // $("kirk").hide();
      // $("scotty").hide();
      // $("spock").hide();
    }else if (result > 12){
      $("#spock").show();
      // $("uhura").hide();
      // $("scotty").hide();
      // $("kirk").hide();
    }else{
      $("span").show();
    }

    event.preventDefault();
  });
});
