    //https://github.com/FreeCodeCamp/FreeCodeCamp/wiki/Algorithm-Everything-Be-True
    //判断谓词（第二个参数）是否对一个集合（第一个参数）的所有元素都成立。
    //我的方法
    function every(collection, pre) {
        // Is everyone being true?
        for(var i=0;i<collection.length;i++){
            if(!collection[i].hasOwnProperty(pre)){
                return false;
            }
            else{
                if(!collection[i][pre]){
                    return false;
                }
            }
        }
        return true;
    }

    //官方的basic方法
    function truthCheck(collection, pre) {
        // Create a counter to check how many are true.
        var counter = 0;
        // Check for each object
        for (var c in collection) {
            // If it is has property and value is truthy
            if (collection[c].hasOwnProperty(pre) && Boolean(collection[c][pre])) {
                counter++;
            }
        }
        // Outside the loop, check to see if we got true for all of them and return true or false
        return counter == collection.length;
    }


    //官方的intermediate方法
    function truthCheck(collection, pre) {
        return collection.every(function (element) {
            return element.hasOwnProperty(pre) && Boolean(element[pre]);
        });
    }

    //官方的advanced方法
    function truthCheck(collection, pre) {
        return collection.reduce(function(acc, next) {
            if (next[pre]) {
                return acc;
            }
            else {
                acc = false;
                return acc;
            }
        },true);
    }


    every([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");