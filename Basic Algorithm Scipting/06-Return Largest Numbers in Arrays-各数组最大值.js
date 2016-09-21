    //https://github.com/FreeCodeCamp/FreeCodeCamp/wiki/Algorithm-Return-Largest-Numbers-In-Arrays
    //�ұߴ������а�����4��С���飬�ֱ��ҵ�ÿ��С�����е����ֵ��Ȼ������Ǵ����������γ�һ�������顣
    //�Լ��ķ���
    function largestOfFour(arr) {
        var max = new Array();
        for(var i=0;i<arr.length;i++){
            max[i]=0;
            for(var j=0;j<arr[i].length;j++){
                if(arr[i][j]>max[i]){
                    max[i] = arr[i][j];
                }
            }
        }
        // You can do this!
        return max;
    }

    //�ٷ���basic����
    function largestOfFour(arr) {
        var results = [];
        for (var n = 0; n < arr.length; n++) {
            var largestNumber = 0;
            for (var sb = 0; sb < arr[n].length; sb++) {
                if (arr[n][sb] > largestNumber) {
                    largestNumber = arr[n][sb];
                }
            }

            results[n] = largestNumber;
        }

        return results;
    }

    //�ٷ���intermediate����
    function largestOfFour(arr) {
        return arr.map(function(group){
            return group.reduce(function(prev, current) {
                return (current > prev) ? current : prev;
            }, 0);
        });
    }

    //�ٷ���advanced����
    function largestOfFour(arr) {
        return arr.map(Function.apply.bind(Math.max, null));
    }
    
    largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
