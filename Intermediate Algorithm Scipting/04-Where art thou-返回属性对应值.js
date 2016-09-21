    //https://github.com/FreeCodeCamp/FreeCodeCamp/wiki/Algorithm-Wherefore-Art-Thou
    //дһ�� function��������һ���������飨��һ��������������һ��������ƥ�������-ֵ�ԣ��ڶ��������������ж�������顣������ص������а��� source ���������-ֵ�ԣ���ô�˶����ÿһ������-ֵ�Զ���������� collection �Ķ����С�
    //���磬�����һ�������� [{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }]���ڶ��������� { last: "Capulet" }����ô���������飨��һ���������������еĵ�����������Ϊ����������Ϊ�ڶ����������ݵ�����-ֵ�ԡ�

    //�ٷ���basic����
    function whatIsInAName(collection, source) {
        // "What's in a name? that which we call a rose
        // By any other name would smell as sweet.��
        // -- by William Shakespeare, Romeo and Juliet
        var srcKeys = Object.keys(source);

        // filter the collection
        return collection.filter(function (obj) {
            for(var i = 0; i < srcKeys.length; i++) {
                if(!obj.hasOwnProperty(srcKeys[i]) || obj[srcKeys[i]] !== source[srcKeys[i]]) {
                    return false;
                }
            }
            return true;
        });
    }


    //�ٷ���intermediate����
    function whatIsInAName(collection, source) {
        // "What's in a name? that which we call a rose
        // By any other name would smell as sweet.��
        // -- by William Shakespeare, Romeo and Juliet
        var srcKeys = Object.keys(source);

        return collection.filter(function (obj) {
            return srcKeys.every(function (key) {
                return obj.hasOwnProperty(key) && obj[key] === source[key];
            });
        });
    }

    //�ٷ���advanced����
    function whatIsInAName(collection, source) {
        // "What's in a name? that which we call a rose
        // By any other name would smell as sweet.��
        // -- by William Shakespeare, Romeo and Juliet
        var srcKeys = Object.keys(source);

        // filter the collection
        return collection.filter(function (obj) {
            return srcKeys.reduce(function (res, key) {
                return obj.hasOwnProperty(key) && obj[key] === source[key];
            }, false);
        });
    }


    where([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });
