    //https://github.com/FreeCodeCamp/FreeCodeCamp/wiki/Algorithm-Confirm-The-Ending
    //���һ���ַ���(str)�Ƿ���ָ�����ַ���(target)��β��
    //�Լ��ķ���
    function confirmEnding(str, target) {
        // "Never give up and good luck will find you."
        // -- Falcor
        var length1 = str.length;
        var length2 = target.length;
        str = str.substr(length1-length2,length2);
        if(str==target){
            return true;
        }
        else{
            return false;
        }
    }

    //�ٷ��ķ���
    function confirmEnding(str, target) {
        return str.substr(-target.length) === target;
    }

    confirmEnding("Bastian", "n");