    //https://github.com/FreeCodeCamp/FreeCodeCamp/wiki/Algorithm-Sum-All-Odd-Fibonacci-Numbers
    //��������С�ڴ�����ֵ��쳲����������е�����֮�ͣ�����������ֵ��쳲�����������ô��ҲӦ�ò�����͡�
    //쳲����������е�ǰ���������� 1��1��2��3��5 �� 8������ÿһ�����ֶ���ǰ��������֮�͡�
    //���磬�� function ���� 4 Ӧ�÷��� 5����Ϊ쳲���������������С�� 4 �������� 1��1��3��
    //�ҵķ���
    function sumFibs(num) {
        var result = 1;
        var prefi = 1;
        var nextfi = 1;
        var temp;
        while(nextfi <= num){
            temp = nextfi;
            nextfi  = prefi + nextfi;
            prefi = temp;
            if(prefi % 2==1){
                result += prefi;
            }
        }
        return result;
    }


    //�ٷ���basic����
    function sumFibs(num) {
        var prevNumber = 0;
        var currNumber = 1;
        var result = 0;
        while (currNumber <= num) {
            if (currNumber % 2 !== 0) {
                result += currNumber;
            }

            currNumber += prevNumber;
            prevNumber = currNumber - prevNumber;
        }

        return result;
    }

    //�ٷ���intermediate����
    function sumFibs(num) {
        // create an array of fib numbers till num
        var arrFib = [1];
        for (var i = 1; i <=num;) {
            arrFib.push(i);
            i = arrFib[arrFib.length - 1] + arrFib[arrFib.length - 2];
        }

        // return the sum of odd numbers from the array
        var res = arrFib.reduce(function(prev, curr) {
            if (curr%2 !== 0) return prev + curr;
            else return prev;
        });

        return res;
    }


    sumFibs(4);
