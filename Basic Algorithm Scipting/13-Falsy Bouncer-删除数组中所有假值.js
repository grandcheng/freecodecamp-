    //https://github.com/FreeCodeCamp/FreeCodeCamp/wiki/Algorithm-Falsy-Bouncer
    //ɾ�������е����м�ֵ��
    //��JavaScript�У���ֵ��false��null��0��""��undefined �� NaN��

    //�ҵķ���
    function bouncer(arr) {
        // Don't show a false ID to this bouncer.
        var result = arr.filter(function(value){
            if(value){
                return true;
            }
            if (value === false || value === null || value === 0 || value === "" || value === undefined || isNaN(value)) {
                return false;
            }else{
                return true;
            }
        });
        return result;
    }

    //�ٷ�����
    function bouncer(arr) {
        return arr.filter(Boolean);
    }

    bouncer([7, "ate", "", false, 9]);