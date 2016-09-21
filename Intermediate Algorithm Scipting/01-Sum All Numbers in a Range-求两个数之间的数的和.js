    //https://github.com/FreeCodeCamp/FreeCodeCamp/wiki/Algorithm-Sum-All-Numbers-In-A-Range
    //���ǻᴫ�ݸ���һ�������������ֵ����顣�������������ֺ�����֮���������ֵĺ͡�
    //��С�����ֲ���������ǰ�档
    //�ҵķ���
    function sumAll(arr) {
        return (arr[0]+arr[1])*(Math.abs(arr[0]-arr[1])+1)/2;
    }


    //�ٷ���basic����
    function sumAll(arr) {
        var max = Math.max(arr[0], arr[1]);
        var min = Math.min(arr[0], arr[1]);
        var temp = 0;
        for (var i=min; i <= max; i++){
            temp += i;
        }
        return(temp);
    }

    //�ٷ���intermediate����
    function sumAll(arr) {
        // Buckle up everything to one!

        // Using ES6 arrow function (one-liner)
        var sortedArr = arr.sort((a,b) => a-b);
        var firstNum = arr[0];
        var lastNum = arr[1];
        // Using Arithmetic Progression summing formula

        var sum = (lastNum - firstNum + 1) * (firstNum + lastNum) / 2;
        return sum;
    }


    //�ٷ���advanced����
    function sumAll(arr) {
        var sum = 0;
        for (var i = Math.min(...arr); i <= Math.max(...arr); i++){
            sum += i;
        }
        return sum;
    }

    sumAll([1, 4]);

