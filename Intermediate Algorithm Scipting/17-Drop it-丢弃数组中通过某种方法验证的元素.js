    //https://github.com/FreeCodeCamp/FreeCodeCamp/wiki/Algorithm-Drop-It
    //����������������(arr)��Ԫ�أ�����߿�ʼ��ֱ���ص�����return true��ֹͣ��
    //�ڶ���������func����һ��������������������ĵ�һ��Ԫ�أ��������fasle���ʹ��������׳���Ԫ��(ע�⣺��ʱ�����ѱ��ı�)��������������ĵ�һ��Ԫ�أ��������fasle�������׳���ֱ������true��
    //��󷵻������ʣ�ಿ�֣����û��ʣ�࣬�ͷ���һ�������顣
    //�ҵķ���
    function drop(arr, func) {
        // Drop them elements.
        while(!func(arr[0])){
            arr.shift();
        }
        return arr;
    }

    //�ٷ���basic����
    function dropElements(arr, func) {
        // drop them elements.
        var times = arr.length;
        for (var i = 0; i < times; i++) {
            if (func(arr[0])) {
                break;
            } else {
                arr.shift();
            }
        }
        return arr;
    }


    //�ٷ���intermediate����
    function dropElements(arr, func) {
        return arr.slice(arr.findIndex(func) >= 0 ? arr.findIndex(func): arr.length, arr.length);
    }

    
    //�ٷ���advanced����
    function dropElements(arr, func) {
        while(arr.length > 0 && !func(arr[0])) {
            arr.shift();
        }
        return arr;
    }

    drop([1, 2, 3], function(n) {return n < 3; });