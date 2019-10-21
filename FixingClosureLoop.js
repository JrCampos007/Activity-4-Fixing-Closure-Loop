//========================================================================================= 
//Name:				Jose Campos-Munoz
//Student ID: 		        933-630-151
//Date:				10/21/2019
//Class:			CS290: Web Development
//Description:		        Activity 4: Fixing Closure Loop
//			    	Do the activity in the Scope and Context (Links to an external site.)
//                              section. You need to fix bug with a loop and closures. Note you need 
//                              to add a line that actually calls testList(); because there is no 
//                              button like on the site to execute the code.
//File:				FixingClosureLoop.js
//=========================================================================================--> 

function buildList(list) {
    var result = [];
    for (var i = 0; i < list.length; i++) {
        //Adding a function (inside a function) for a different variable other than 'item'.
        var resultItem = function() {
            var item, listElem, resultFunc;
            listElem = list[i];
            //The expected result will print the item and the list element number together(Ex. item1)
            item = 'item' + listElem;
            //In case the code is not running, we can replace the 'alert' function for 'console.log'
            resultFunc = function() {alert(item + ' ' + listElem)};
            return resultFunc;
        };
        result.push(resultItem(i));
        //result.push(resultItem(i)); calls the function immediately.
    }
    return result;
}

function testList() {
    var fnlist = buildList([1,2,3]);
    //Using j only to help prevent confusion - could use i
    //Infinity loop
    for (var j = 0; j < fnlist.length; j++) {
        fnlist[j]();
    }
}

testList();
