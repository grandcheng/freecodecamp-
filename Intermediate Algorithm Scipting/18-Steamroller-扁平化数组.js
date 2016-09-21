    //https://github.com/FreeCodeCamp/FreeCodeCamp/wiki/Algorithm-Steamroller
    //对嵌套的数组进行扁平化处理。你必须考虑到不同层级的嵌套。

    //官方的basic方法
    function steamrollArray(arr) {
        var flattenedArray = [];

        // Create function that adds an element if it is not an array.
        // If it is an array, then loops through it and uses recursion on that array.
        var flatten = function(arg) {
            if (!Array.isArray(arg)) {
                flattenedArray.push(arg);
            } else {
                for (var a in arg) {
                    flatten(arg[a]);
                }
            }
        };

        // Call the function for each element in the array
        arr.forEach(flatten);
        return flattenedArray;
    }


    //官方的intermediate方法
    function steamrollArray(arr) {
        return arr.reduce(function (flat, toFlatten) {
            return flat.concat(Array.isArray(toFlatten) ? steamrollArray(toFlatten) : toFlatten);
        }, []);
    }

    
    steamrollArray([1, [2], [3, [[4]]]]);