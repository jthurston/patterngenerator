var dotSize = 50; //in pixels(px) e.g. 10px
var dotMargin = 15; //distance between each dot
var offSet = true;
var offset = true;
var shape = "circle"; //circle, square, diamond, more to Chrome
var dotQuantity = getScreenHeight(); //number of dotSize
var dotQuantityW = getScreenWidth();
var borderWidth = 2;
var borderColor = "white";
var dotColor = "hotpink"; //user standard colors or hex numbers
var bg = "black"; //user standard colors or hex numbers
var shadow = false;

$("body").css("background-color",bg);

drawDots();

function drawDots(){

  for (x = 0; x < dotQuantityW; x++){
    $("#sheet").append("<div id='vert" + x +"'></div>");
    for (i = 0; i < dotQuantity; i++){
      $("#vert"+x).append("<div class='shape'></div></div>");
    };

    if (offset == true){
      console.log("changing offset to " + offSet)
      if (offSet == true && x % 2){
        $("#vert"+x).css("top",calcVertOffSet());
      }else{
        $("#vert"+x).css("top","0px");
      }
    }

    var nextColumn = (dotSize + borderWidth + borderWidth + dotMargin) * x;
    $("#vert"+x).css("position","absolute");
    $("#vert"+x).css("left",nextColumn+"px");
  }

  $(".shape").css("margin",dotMargin + "px"); //set distance around the dot
  $(".shape").css("background",dotColor); //set color of polka dot
  $(".shape").css("width",dotSize + "px"); //set width of polka dot
  $(".shape").css("height",dotSize + "px"); //set heigh of polka dot
  $(".shape").css({"border-color": borderColor,
             "border-width":borderWidth,
             "border-style":"solid"});

  if(shape == "circle"){
    $(".shape").css("border-radius",dotSize + "px"); //set radius of polks dot
  }

  if(shape == "diamond"){
    $(".shape").css("transform", "rotate(45deg)");
    $(".shape").css("margin",((dotMargin) + "px")); //set distance around the dot
  }

  if(shadow == true){
    $(".shape").css("box-shadow", "5px 5px 5px grey");
  }

  $("div#vert0").css("z-index","-9999");
  $("div#vert1").css("z-index","-9999");
}

function getScreenHeight(){
  var sh = $(window).height();
  console.log (sh);
  var dotsVertical = sh / (dotSize + dotMargin);
  console.log (dotsVertical);
  return dotsVertical;
}

function getScreenWidth(){
  var sw = $(window).width();
  var dotsHorizontal = sw / (dotSize + dotMargin);
  return dotsHorizontal;
}

function calcVertOffSet(){
  var vo = (dotSize + dotMargin)/2;
  return -vo + "px";
}

//$(window).resize(function(){location.reload();});
$(window).resize(function(){
  $("#sheet").empty();
  console.log("redrawing!");
  drawDots();
})

function closeMenu(){
  $( "#menuContainer" ).animate({
      left: "-=170"
    }, 500 );
  $("#menuTabContent").text("🔼Settings");
  //$("#menu").css("top","-150px");//
  //$("#menuTab").css("top","0px");//
  $('#menuTab').attr('onclick', '');
  $('#menuTab').attr('onclick','openMenu()');
}

function openMenu(){
  $( "#menuContainer" ).animate({
      left: "+=170"
    }, 500 );
  $("#menuTabContent").text("🔽Close");
  $("#menu").css("left","0px");
  $('#menuTab').attr('onclick', '');
  $('#menuTab').attr('onclick','closeMenu()');
}

function changeShape(theShape){
  if(theShape == "square"){
    $(".shape").css("transform", "rotate(0deg)");
    $(".shape").css("border-radius","0px"); //set radius of polks dot
  }

  if(theShape == "circle"){
    $(".shape").css("border-radius",dotSize + "px"); //set radius of polks dot
  }

  if(theShape == "diamond"){
    $(".shape").css("border-radius","0px"); //set radius of polks dot
    $(".shape").css("transform", "rotate(45deg)");
    $(".shape").css("margin",((dotMargin) + "px")); //set distance around the dot
  }
  shape = theShape;
}

function changeBorderSize(theBorderSize){
  console.log("Changing border size to: " + theBorderSize);
  $(".shape").css("border-width",theBorderSize); //set color of polka dot
  borderWidth = theBorderSize;  
}

function changeOffSet(theOffSet){
  console.log("Changing the offset to: " + theOffSet);
  if (theOffSet == true){
    offSet = true;
    offSet = true;
    drawDots();
  } else {
    offSet = false;
    offSet = false;
    drawDots();
  }
}

function changeSize(theSize){
  console.log("Changing size to: " + theSize);
  $(".shape").css("width",theSize + "px"); //set width of polka dot
  $(".shape").css("height",theSize + "px"); //set heigh of polka dot
  if(shape == "circle"){
    $(".shape").css("border-radius",theSize + "px"); //set heigh of polka dot
  }
  dotSize = theSize;
}
