{
  const $submit = document.getElementById("submit");
  const $container = document.getElementById("container");
  const $box1 = document.querySelector(".box1");
  const $box2 = document.querySelector(".box2");
  const $box3 = document.querySelector(".box3");
  const $box4 = document.querySelector(".box4");
  const $not_grid = document.getElementById("not_grid");
  let $width = document.getElementById("width");
  let $height = document.getElementById("height");

  $submit.addEventListener("click", () => {
    let $display = document.getElementById("display");
    let $display_value = $display.value;
    $container.style.display = $display_value;

    if ($container.style.display === "grid") {
      $not_grid.style.display = "none";
    } 
    else if($container.style.display === "flex") {
      let $flex = document.getElementById('flex');
      $flex.style.display = "inline";
      let $flex_direction = document.getElementById('flex-direction');
      let $flex_direction_value = $flex_direction.value;
      $container.style.flexDirection = $flex_direction_value;


      $not_grid.style.display = "inline";
      let $width = document.getElementById("width");
      let $width_value = $width.value;

      $box1.style.width = $width_value + "%";
      $box2.style.width = $width_value + "%";
      $box3.style.width = $width_value + "%";
      $box4.style.width = $width_value + "%";

      let $height = document.getElementById("height");
      let $height_value = $height.value;

      $box1.style.height = $height_value + "px";
      $box2.style.height = $height_value + "px";
      $box3.style.height = $height_value + "px";
      $box4.style.height = $height_value + "px";
    }

    
  });
}
