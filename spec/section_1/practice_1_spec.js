'use strict';

var collect_same_elements = require("../../main/section_1/practice_1/practice.js");

describe('practice-1-1', function() {

  var collection_a = ["a", "e", "h", "t", "f", "c", "g", "b", "d"];
  var collection_b = ["a", "d", "e", "f"];

  it("选出A集合中与B集合中相同的元素", function() {

    var result = collect_same_elements(collection_a, collection_b);

    expect(result).toEqual(["a", "e", "f", "d"]);
  });
});
function collect_same_elements(collection_a, collection_b){
	for(var i = 0;i <= collection_b.length-1 ; i++ ){
  		for (var j = 0; j <= collection_b.length-1 ; j++ ) {
  			if(collection_a[i] == collection_b[j]){
  				var k = 0;
  				var oArray[10];
  				var oArray[k] = collection_a[i];
  				k++;
  			}
  		}
  	}
  	console.log("oArray");

}
	
