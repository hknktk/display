{
  const $submit = document.getElementById("submit");
  const $container = document.getElementById("container");
  const $box1 = document.querySelector(".box1");
  const $box2 = document.querySelector(".box2");
  const $box3 = document.querySelector(".box3");
  const $box4 = document.querySelector(".box4");
  const $not_grid = document.getElementById("not_grid");
  const $grid = document.getElementById("grid");
  const $flex = document.getElementById("flex");

  let $width = document.getElementById("width");
  let $height = document.getElementById("height");

  $submit.addEventListener("click", () => {
    let $display = document.getElementById("display");
    let $display_value = $display.value;
    $container.style.display = $display_value;

    if ($container.style.display === "grid") {
      $container.style.flexDirection = "unset";
      $container.style.justifyContent = "unset";
      $container.style.alignItems = "unset";

      $not_grid.style.display = "none";
      $flex.style.display = "none";
      $grid.style.display = "inline";

      let $grid_template_columns = document.getElementById(
        "grid-template-columns"
      );
      let $grid_template_columns_value = $grid_template_columns.value;
      $container.style.gridTemplateColumns = $grid_template_columns_value;

      let $grid_template_rows = document.getElementById("grid-template-rows");
      let $grid_template_rows_value = $grid_template_rows.value;
      $container.style.gridTemplateRows = $grid_template_rows_value;

      let $grid_column1 = document.getElementById("b1_grid-column");
      let $grid_column1_value = $grid_column1.value;
      $box1.style.gridColumn = $grid_column1_value;

      let $grid_column2 = document.getElementById("b2_grid-column");
      let $grid_column2_value = $grid_column2.value;
      $box2.style.gridColumn = $grid_column2_value;

      let $grid_column3 = document.getElementById("b3_grid-column");
      let $grid_column3_value = $grid_column3.value;
      $box3.style.gridColumn = $grid_column3_value;

      let $grid_column4 = document.getElementById("b4_grid-column");
      let $grid_column4_value = $grid_column4.value;
      $box4.style.gridColumn = $grid_column4_value;

      let $grid_row1 = document.getElementById("b1_grid-row");
      let $grid_row1_value = $grid_row1.value;
      $box1.style.gridRow = $grid_row1_value;

      let $grid_row2 = document.getElementById("b2_grid-row");
      let $grid_row2_value = $grid_row2.value;
      $box2.style.gridRow = $grid_row2_value;

      let $grid_row3 = document.getElementById("b3_grid-row");
      let $grid_row3_value = $grid_row3.value;
      $box3.style.gridRow = $grid_row3_value;

      let $grid_row4 = document.getElementById("b4_grid-row");
      let $grid_row4_value = $grid_row4.value;
      $box4.style.gridRow = $grid_row4_value;
    } else if ($container.style.display === "flex") {
      $flex.style.display = "inline";
      $grid.style.display = "none";
      let $flex_direction = document.getElementById("flex-direction");
      let $flex_direction_value = $flex_direction.value;
      $container.style.flexDirection = $flex_direction_value;

      let $justify_content = document.getElementById("justify-content");
      let $justify_content_value = $justify_content.value;
      $container.style.justifyContent = $justify_content_value;

      let $align_items = document.getElementById("align-items");
      let $align_items_value = $align_items.value;
      $container.style.alignItems = $align_items_value;

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
    } else {
      $flex.style.display = "none";
      $grid.style.display = "none";

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
