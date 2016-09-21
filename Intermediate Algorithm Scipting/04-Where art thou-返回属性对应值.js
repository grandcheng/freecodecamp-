    //https://github.com/FreeCodeCamp/FreeCodeCamp/wiki/Algorithm-Wherefore-Art-Thou
    //写一个 function，它遍历一个对象数组（第一个参数）并返回一个包含相匹配的属性-值对（第二个参数）的所有对象的数组。如果返回的数组中包含 source 对象的属性-值对，那么此对象的每一个属性-值对都必须存在于 collection 的对象中。
    //例如，如果第一个参数是 [{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }]，第二个参数是 { last: "Capulet" }，那么你必须从数组（第一个参数）返回其中的第三个对象，因为它包含了作为第二个参数传递的属性-值对。

    //官方的basic方法
    function whatIsInAName(collection, source) {
        // "What's in a name? that which we call a rose
        // By any other name would smell as sweet.”
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


    //官方的intermediate方法
    function whatIsInAName(collection, source) {
        // "What's in a name? that which we call a rose
        // By any other name would smell as sweet.”
        // -- by William Shakespeare, Romeo and Juliet
        var srcKeys = Object.keys(source);

        return collection.filter(function (obj) {
            return srcKeys.every(function (key) {
                return obj.hasOwnProperty(key) && obj[key] === source[key];
            });
        });
    }

    //官方的advanced方法
    function whatIsInAName(collection, source) {
        // "What's in a name? that which we call a rose
        // By any other name would smell as sweet.”
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
