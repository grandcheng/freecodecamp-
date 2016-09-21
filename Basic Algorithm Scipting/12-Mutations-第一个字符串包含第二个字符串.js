    //https://github.com/FreeCodeCamp/FreeCodeCamp/wiki/Algorithm-Mutations
    //��������һ���ַ���Ԫ�ذ����˵ڶ����ַ���Ԫ�ص������ַ�����������true��
    //������["hello", "Hello"]Ӧ�÷���true����Ϊ�ں��Դ�Сд������£��ڶ����ַ����������ַ��������ڵ�һ���ַ����ҵ���
    //["hello", "hey"]Ӧ�÷���false����Ϊ�ַ���"hello"���������ַ�"y"��
    //["Alien", "line"]Ӧ�÷���true����Ϊ"line"�������ַ���������"Alien"�ҵ���
    //�ҵķ���&�ٷ���basic����
    function mutation(arr) {
        arr[0] = arr[0].toLowerCase();
        arr[1] = arr[1].toLowerCase();
        for(var i=0;i<arr[1].length;i++){
            if(arr[0].indexOf(arr[1][i])==-1){
                return false;
            }
        }
        return true;
    }

    //�ٷ���intermediate����
    function mutation(arr) {
        return arr[1].toLowerCase()
            .split('')
            .every(function(letter) {
                return arr[0].toLowerCase()
                        .indexOf(letter) != -1;
            });
    }

    mutation(["hello", "hey"]);