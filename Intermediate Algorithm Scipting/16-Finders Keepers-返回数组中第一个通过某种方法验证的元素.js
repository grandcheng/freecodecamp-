    //https://github.com/FreeCodeCamp/FreeCodeCamp/wiki/Algorithm-Finders-Keepers
    //дһ�� function����������飨��һ�������������������е�һ��ͨ��ĳ�ַ������ڶ�����������֤��Ԫ�ء�
    //�ҵķ���
    function find(arr, func) {
        var num = 0;
        for(var i=0;i<arr.length;i++) {
            if(func(arr[i])) {
                return arr[i];
            }
        }
    }

    //�ٷ���basic����
    function findElement(arr, func) {
        // Make num undefined by default
        var num;

        // Loop thorugh the array and use the function to check
        for (var a = 0; a < arr.length; a++) {
            if (func(arr[a])) {
                // Store the first case and break the loop
                num = arr[a];
                return num;
            }
        }

        // otherwise return undefined
        return num;
    }

    findElement([1, 2, 3, 4], function(num) {
        return num % 2 === 0;
    });

    //�ٷ���intermediate����
    function findElement(arr, func) {
        filterArr = arr.filter(func); //filter array with the function provided

        return filterArr[0]; //return the first element that returns true, or undefined if no elements return true
    }

    
    find([1, 2, 3, 4], function(num){ return num % 2 === 0; });