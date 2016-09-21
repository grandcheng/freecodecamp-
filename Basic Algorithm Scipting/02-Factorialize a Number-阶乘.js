    //https://github.com/FreeCodeCamp/FreeCodeCamp/wiki/Algorithm-Factorialize-A-Number
    function factorialize(num) {
        var result = 1;
        while(num>0){
            result*=num;
            num--;
        }
        return result;
        //自己的方法

        //官方的方法
        if (num === 0) { return 1; }
        return num * factorialize(num-1);
    }
    factorialize(10);