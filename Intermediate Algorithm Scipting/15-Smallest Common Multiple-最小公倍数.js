    //https://github.com/FreeCodeCamp/FreeCodeCamp/wiki/Algorithm-Smallest-Common-Multiple
    //�ҳ��ܱ�������������������֮�������������������С��������
    //��Χ���������ֹ��ɵ����飬�������ֲ�һ��������˳������
    //����� 1 �� 3 ���� �ҳ��ܱ� 1 �� 3 ������֮������������������С��������
    //�ҵķ���
    function smallestCommons(arr) {
        var temp;
        if(arr[1]<arr[0]){
            temp = arr[0];
            arr[0] = arr[1];
            arr[1] = temp;
        }

        function scm(val){
            for(var i=arr[0];i<=arr[1];i++){
                if(val%i!=0){
                    return false;
                }
            }
            return true;
        }
        for(i=2;;i++){
            temp = arr[0]*i;
            if(scm(temp)){
                return temp;
            }
        }
    }

    //�ٷ���basic����
    function smallestCommons(arr) {
        // Sort array from greater to lowest
        // This line of code was from Adam Doyle (http://github.com/Adoyle2014)
        arr.sort(function(a, b) {
            return b - a;
        });

        // Create new array and add all values from greater to smaller from the
        // original array.
        var newArr = [];
        for (var i = arr[0]; i >= arr[1]; i--) {
            newArr.push(i);
        }

        // Variables needed declared outside the loops.
        var quot = 0;
        var loop = 1;
        var n;

        // Run code while n is not the same as the array length.
        do {
            quot = newArr[0] * loop * newArr[1];
            for (n = 2; n < newArr.length; n++) {
                if (quot % newArr[n] !== 0) {
                    break;
                }
            }

            loop++;
        } while (n !== newArr.length);

        return quot;
    }

    //�ٷ���intermediate����
    function smallestCommons(arr) {
        var range = [];
        for (var i = Math.max(arr[0], arr[1]); i >= Math.min(arr[0], arr[1]); i--) {
            range.push(i);
        }

        // can use reduce() in place of this block
        var lcm = range[0];
        for (i = 1; i < range.length; i++) {
            var GCD = gcd(lcm, range[i]);
            lcm = (lcm * range[i]) / GCD;
        }
        return lcm;

        function gcd(x, y) {    // Implements the Euclidean Algorithm
            if (y === 0)
                return x;
            else
                return gcd(y, x%y);
        }
    }

    //�ٷ���advanced����
    function smallestCommons(arr) {
        var range = [];
        for (var i = Math.max(arr[0], arr[1]); i >= Math.min(arr[0], arr[1]); i--) {
            range.push(i);
        }

        return range.reduce(function(previousValue, currentValue) {
            var gcdPrevCurr = gcd(previousValue, currentValue);
            return (previousValue * currentValue) / gcdPrevCurr;
        });

        function gcd(x, y) {    // Implements The Euclidean Algorithm
            if (y === 0)
                return x;
            else
                return gcd(y, x%y);
        }
    }


    smallestCommons([1,5]);