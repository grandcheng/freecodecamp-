    //https://github.com/FreeCodeCamp/FreeCodeCamp/wiki/Algorithm-Truncate-A-String
    //����ַ����ĳ��ȱ�ָ���Ĳ���num������Ѷ���Ĳ�����...����ʾ��
    //�мǣ����뵽�ַ���β�����������Ҳ������ַ����ĳ��ȡ�
    //���ǣ����ָ���Ĳ���numС�ڻ����3������ӵ�������Ų�������ַ����ĳ��ȡ�
    //�ҵķ���
    function truncate(str, num) {

        // Clear out that junk in your trunk
        if(str.length>num&&num>3) {
            str = str.slice(0, num-3) + '...';
            return str;
        }
        if(str.length>num&&num<=3){
            str=str.slice(0,num)+'...';
        }

        return str;
    }

    //�ٷ���basic����
    function truncateString(str, num) {
        // Clear out that junk in your trunk
        if (str.length > num && num > 3) {
            return str.slice(0, (num - 3)) + '...';
        } else if (str.length > num && num <= 3) {
            return str.slice(0, num) + '...';
        } else {
            return str;
        }

    }

    //�ٷ���advanced����
    function truncateString(str, num) {
        if (str.length <= num) {
            return str;
        } else {
            return str.slice(0, num > 3 ? num - 3 : num) + '...';
        }
    }


    truncate("A-tisket a-tasket A green and yellow basket", 11);