'use strict';

function get_intersection(collection_a, collection_b) {
  return collection_b.filter(function (b) {
    return collection_a.find(function (a) {
      return b===a;
    })
  })
}

module.exports = get_intersection;
