    //https://github.com/FreeCodeCamp/FreeCodeCamp/wiki/Algorithm-Where-Do-I-Belong
    //�ȸ���������Ȼ���ҵ�ָ����ֵ�������λ�ã���󷵻�λ�ö�Ӧ��������
    //������where([1,2,3,4], 1.5) Ӧ�÷��� 1����Ϊ1.5���뵽����[1,2,3,4]����[1,1.5,2,3,4]����1.5��Ӧ������ֵ����1��
    //ͬ��where([20,3,5], 19) Ӧ�÷��� 2����Ϊ�����������Ϊ [3,5,20]��19���뵽����[3,5,20]����[3,5,19,20]����19��Ӧ������ֵ����2��
    //�ҵķ���
    function where(arr, num) {
        // Find my place in this sorted array.
        arr.push(num);
        arr.sort(function(a,b){
            return a-b;
        });
        return arr.indexOf(num);
    }

    //�ٷ���basic����
    function getIndexToIns(arr, num) {
        arr.sort(function(a, b) {
            return a - b;
        });
        for (var a = 0; a < arr.length; a++) {
            if (arr[a] >= num)
                return parseInt(a);
        }
        return arr.length;
    }

    //�ٷ���intermediate����
    function getIndexToIns(arr, num) {
        // sort and find right index
        var index = arr.sort((curr, next) => curr > next)
    .findIndex((currNum)=> num <= currNum);
        // Returns proper answer
        return index === -1 ? arr.length : index;
    }
    
    where([40, 60], 50);