'use strict';

function get_union(collection_a, collection_b) {

  let result =collection_a.concat(collection_b);
  let array=[];
  for(let i=0;i<result.length;i++)
  {
    let exist=array.find(function (item) {
      return item===result[i];
    });
    if(!exist)
    {
      array.push(result[i]);
    }
  }
  return array;
}

module.exports = get_union;

