    //https://github.com/FreeCodeCamp/FreeCodeCamp/wiki/Algorithm-Slasher-Flick
    //����һ�����鱻�ض�n��Ԫ�غ�ʣ���Ԫ�أ��ضϴ�����0��ʼ��
    //�ҵķ���&�ٷ���basic����
    function slasher(arr, howMany) {
        // it doesn't always pay to be first
        arr.splice(0,howMany);
        return arr;
    }

    //�ٷ���intermediate����
    function slasher(arr, howMany) {
        // Return string after the amount chopped off.
        return arr.slice(howMany);
    }

    slasher([1, 2, 3], 2);