// http://mathworld.wolfram.com/AdditivePersistence.html

exports.Asessment = {
  isPersistedRecursive : function(num,step) {
    num_string = num.toString();
    var sum = 0;
    for(var i=0; i < num_string.length; i++){
      sum += Number(num_string[i])
    }

    console.log('step = ' + step);
    console.log('num = '  + num);
    console.log('sum = '  + sum);

    if (sum < 10) {
      console.log('======================');
      return step
    } else {
      console.log('-------------------');
      return this.isPersistedRecursive(sum, step+1)
    }
  },

  isPersisted : function(num) {
    return this.isPersistedRecursive(num,1)
  }
}