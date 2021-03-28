{
  const $submit = document.getElementById('submit');
  const $container = document.getElementById('container');
  const $box = document.querySelector('.box');
  
  


  $submit.addEventListener('click',()=>{
    const $display = document.getElementById('display');
    const $display_value = $display.value;
    $container.style.display = $display_value;

    const $width = document.getElementById('width');
    const $width_value = $width.value;
    $box.style.width = $width_value + "%";

    const $height = document.getElementById('height');
    const $height_value = $height.value;
    $box.style.height = $height_value + "px";
  })

}