'use strict';
var rank_asc = require('../../main/map/rank_asc.js');

describe('rank by asc', function() {
  var collection_a = [3, 2, 4, 5, 6];
  var collection_b = [6, 5, 4, 3, 2];

  it('从大到小排序', function() {
    var result = rank_asc(collection_a);
    expect(result).toEqual(collection_b);
  });
}); 
var collection_a[10],collection_b[10];
 for ( var i=0;i<collection_a.length-1;i++){       
      for (var j=0;j<collection_a.length-1-i;j++) {     
            if (collection_a[j] > collection_a[j + 1]) {           
                 var temp = collection_a[i];            
                     collection_a[j] = collection_a[j + 1];      
                               collection_a[j + 1] = temp;        
                                   }     
                               }  
                   }
                   if(var o = 0 ; o <= collection_a.length-1 ; o++){
                   	collection_a[o]=collection_b[o];
                   }
                   console.log(collection_b);
