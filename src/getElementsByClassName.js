// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };
// You should use document.body, element.childNodes, and element.classList
// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  var initNode = document.body;
  return getElementsInternal(initNode);

  function getElementsInternal(node){
    var classArray = [];

    if (node.classList && Array.prototype.includes.call(node.classList, className)) {
      classArray.push(node);
    }

    if (node.childNodes.length > 0) {
      
      for (var i=0; i< node.childNodes.length; i++) {
              
        classArray = classArray.concat(getElementsInternal(node.childNodes[i])); 
      }
      
    
    }

      return classArray;

  }
  //base case: if it doesn't have a child node and has the class name, add it to the array
 
  
  //check if it has child nodes, 
  //if it matches the classname, return it
  //if so, for each of its childnodes, getelementsbyclassname

  
};
