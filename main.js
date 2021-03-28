{
  const $submit = document.getElementById('submit');
  const $container = document.getElementById('container');
  const $box1 = document.querySelector('.box1');
  const $box2 = document.querySelector('.box2');
  const $box3 = document.querySelector('.box3');
  const $box4 = document.querySelector('.box4');
  
  


  $submit.addEventListener('click',()=>{
    const $display = document.getElementById('display');
    const $display_value = $display.value;
    $container.style.display = $display_value;

    const $width = document.getElementById('width');
    const $width_value = $width.value;
    $box1.style.width = $width_value + "%";
    $box2.style.width = $width_value + "%";
    $box3.style.width = $width_value + "%";
    $box4.style.width = $width_value + "%";

    const $height = document.getElementById('height');
    const $height_value = $height.value;
    $box1.style.height = $height_value + "px";
    $box2.style.height = $height_value + "px";
    $box3.style.height = $height_value + "px";
    $box4.style.height = $height_value + "px";
  })

}