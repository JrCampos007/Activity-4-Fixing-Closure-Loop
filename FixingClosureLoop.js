function buildList(list) {
    var result = [];
    for (var i = 0; i < list.length; i++) {
        var resultItem = function() {
            var item, listElem, resultFunc;
            listElem = list[i];
            item = 'item' + listElem;
            resultFunc = function() {alert(item + ' ' + listElem)};
            return resultFunc;
        };
        result.push(resultItem(i));
    }
    return result;
}

function testList() {
    var fnlist = buildList([1,2,3]);
    // using j only to help prevent confusion - could use i
    for (var j = 0; j < fnlist.length; j++) {
        fnlist[j]();
    }
}

testList();
