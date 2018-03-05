// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {

  if (obj===undefined || typeof(obj) === 'function') {
      return;
    }
  
  //base case simple values (NAObject) return value but string

  if (typeof(obj) !== 'object' || obj===null) {
    if (typeof(obj) === 'string'){
      return '"'+obj+'"';
    }
    return ''+obj;
  }
  //Check if array if so return 

  if (Array.isArray(obj)) {
    var newArray = _.map(obj, function(item) {
      return stringifyJSON(item);
   });

    return "["+newArray.join(',')+"]";

  }

  
  //if object "{"
  var innerString ="";
  for (key in obj){
    
    if (obj[key] !==undefined && typeof(obj[key]) !== 'function'){
      innerString = innerString + stringifyJSON(key) + ':'+ stringifyJSON(obj[key]) +',';
    
    }
  }
  if (innerString[innerString.length-1] === ','){
    innerString= innerString.slice(0,-1);
  } 
  return '{'+innerString+'}';
        

};
