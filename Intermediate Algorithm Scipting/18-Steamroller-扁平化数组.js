    //https://github.com/FreeCodeCamp/FreeCodeCamp/wiki/Algorithm-Steamroller
    //��Ƕ�׵�������б�ƽ����������뿼�ǵ���ͬ�㼶��Ƕ�ס�

    //�ٷ���basic����
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


    //�ٷ���intermediate����
    function steamrollArray(arr) {
        return arr.reduce(function (flat, toFlatten) {
            return flat.concat(Array.isArray(toFlatten) ? steamrollArray(toFlatten) : toFlatten);
        }, []);
    }

    
    steamrollArray([1, [2], [3, [[4]]]]);