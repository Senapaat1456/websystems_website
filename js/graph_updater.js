type_selector = document.getElementById('Graph_Type');
graph_box = document.getElementById('Graph');
type_selector.addEventListener('change', () => {

  if(type_selector.value =="smooth"){
    graph_box.src = "images/graphs/smooth_graph.png"
  }
  if(type_selector.value =="point"){
    graph_box.src = "images/graphs/point_graph.jpg"
  }
  if(type_selector.value =="line"){
    graph_box.src = "images/graphs/line_graph.png"
  }
  if(type_selector.value =="step"){
    graph_box.src = "images/graphs/step_graph.png"
  }

});
