    //https://github.com/FreeCodeCamp/FreeCodeCamp/wiki/Algorithm-Sorted-Union
    //дһ�� function�������������������ϵ����飬����һ���Ը�����ԭʼ��������Ĳ������ظ�ֵ�������顣
    //���仰˵�����������е�����ֵ��Ӧ����ԭʼ˳�򱻰������ڣ����������յ������в������ظ�ֵ��
    //���ظ�������Ӧ��������ԭʼ��˳�����򣬵����յ����鲻Ӧ��������˳������
    //�ҵķ���
    function unite(arr1, arr2, arr3) {
        var result = [];
        for(var i=0;i<arguments.length;i++){
            arguments[i].every(function(val){
                if(result.indexOf(val)==-1){
                    result.push(val);
                }
                return val;
            });
        }
        return result;
    }

    //�ٷ���basic����
    function uniteUnique(arr1, arr2, arr3) {
        // Creates an empty array to store our final result.
        var finalArray = [];

        // Loop through the arguments object to truly made the program work with two or more arrays
        // instead of 3.
        for (var i = 0; i < arguments.length; i++) {
            var arrayArguments = arguments[i];

            // Loops through the array at hand
            for (var j = 0; j < arrayArguments.length; j++) {
                var indexValue = arrayArguments[j];

                // Checks if the value is already on the final array.
                if (finalArray.indexOf(indexValue) < 0) {
                    finalArray.push(indexValue);
                }
            }
        }

        return finalArray;
    }

    //�ٷ���intermediate����
    function uniteUnique(arr1, arr2, arr3) {
        var newArr;
        //Convert the arguments object into an array
        var args = Array.prototype.slice.call(arguments);
        //Use reduce function to flatten the array
        newArr = args.reduce(function(arrA,arrB){
            //Apply filter to remove the duplicate elements in the array
            return arrA.concat(arrB.filter(function(i){
                return arrA.indexOf(i) === -1;
            }));
        });

        return newArr;
    }

    //�ٷ���advanced����
    function uniteUnique() {
        var concatArr = [];
        var i = 0;
        while (arguments[i]){
            concatArr = concatArr.concat(arguments[i]); i++;
        }
        uniqueArray = concatArr.filter(function(item, pos) {
            return concatArr.indexOf(item) == pos;
        });
        return uniqueArray;
    }


    unite([1, 3, 2], [5, 2, 1, 4], [2, 1]);