    //https://github.com/FreeCodeCamp/FreeCodeCamp/wiki/Algorithm-Chunky-Monkey
    //�ҵķ���
    //��һ������arr����ָ���������Сsize�ָ�����ɸ�����顣
    //����:chunk([1,2,3,4],2)=[[1,2],[3,4]];
    //chunk([1,2,3,4,5],2)=[[1,2],[3,4],[5]];
    function chunk(arr, size) {
        // Break it up.
        var narr = new Array();
        for(var i = 0;i<Math.ceil(arr.length/size);i++) {
            narr[i] = arr.slice(i*size,(i+1)*size);
        }
        return narr;
    }

    //�ٷ���basic����
    function chunkArrayInGroups(arr, size) {

        var temp = [];
        var result = [];

        for (var a = 0; a < arr.length; a++) {
            if (a % size !== size - 1)
                temp.push(arr[a]);
            else {
                temp.push(arr[a]);
                result.push(temp);
                temp = [];
            }
        }

        if (temp.length !== 0)
            result.push(temp);
        return result;
    }

    //�ٷ���intermediate����
    function chunkArrayInGroups(arr, size) {
        // Break it up
        // It's already broken :(
        arr = arr.slice();
        var arr2 = [];
        for(var i = 0, len = arr.length; i < len; i+=size) {
            arr2.push(arr.slice(0, size));
            arr = arr.slice(size);
        }
        return arr2;
    }

    //�ٷ���advanced����
    function chunkArrayInGroups(arr, size) {
        // Break it up.
        var newArr = [];
        var i = 0;

        while (i < arr.length) {
            newArr.push(arr.slice(i, i+size));
            i += size;
        }
        return newArr;
    }
    
    chunk(["a", "b", "c", "d"], 2);