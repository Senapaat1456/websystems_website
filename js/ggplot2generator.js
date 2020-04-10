const generate_button = document.getElementById('generator_button');
const output_box = document.getElementById('Output_Box');
generate_button.addEventListener('click', () => {
  var output = "ggplot(data = " + document.getElementById('Data_Set_Input').value + ", aes(x = " + document.getElementById('X_Axis_Input').value + "))";
  var dependent_variables_array = document.getElementById('Y_Axis_Input').value.split(',');
  var color_array = document.getElementById('Color_Input').value.split(',');

  for(let ii = 0; ii < dependent_variables_array.length; ii++){
    output += " + geom_" + document.getElementById('Graph_Type').value + "(aes(y = " + dependent_variables_array[ii] + "), color = \"" + color_array[ii] + "\")"
  }

  output += " + xlab(\"" + document.getElementById('X_Axis_Label').value + "\") + ylab(\"" + document.getElementById('Y_Axis_Label').value + "\")"; 

  output_box.innerHTML = output;
});
