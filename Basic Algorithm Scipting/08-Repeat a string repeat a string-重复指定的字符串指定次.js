    //https://github.com/FreeCodeCamp/FreeCodeCamp/wiki/Algorithm-Repeat-A-String-Repeat-A-String
    //�ظ�һ��ָ�����ַ��� num�Σ����num��һ�������򷵻�һ�����ַ�����
    //�Լ��ķ���
    function repeat(str, num) {
        // repeat after me
        if(num<0){
            return "";
        }
        var nstr = str;
        for(var i=0;i<num-1;i++){
            nstr =  nstr.concat(str);
        }
        return nstr;
    }

    //�ٷ���basic����
    function repeatStringNumTimes(str, num) {
        var accumulatedStr = '';

        while (num > 0) {
            accumulatedStr += str;
            num--;
        }

        return accumulatedStr;
    }

    //�ٷ���intermediate����
    function repeatStringNumTimes(str, num) {
        if(num < 0)
            return "";
        if(num === 1)
            return str;
        else
            return str + repeatStringNumTimes(str, num - 1);
    }

    //�ٷ���advanced����
    function repeatStringNumTimes(str, num) {
        return num > 0 ? str.repeat(num) : '';
    }


    repeat("abc", 3);