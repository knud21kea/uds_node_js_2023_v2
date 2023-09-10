'use strict';

const myConstant = "Hello World"; // myConstant was not defined

eval("let x = 2"); // never use eval anyway, can result in running malicious code
let x = 3; // in strict mode cannot create local variable in the surrounding scope

var publicVariable = "public variable"; // public is a reserved keyword

const defaultValue = null; // declarations must be initialized

var message = ""; // needs to be global scope if to be used in logMessage()

let myConsole = "Output"; // console is a reserved keyword in JS. "Output" does not have a log method

delete globalThis.myConsole; // 'delete' cannot be called on an identifier in strict mode.

delete globalThis.arguments;  // same. gives reference error if accessed again

const myArguments = [1, 2, 3]; // arguments is a strict mode reserved keyword

function alerting() {
    message = console; // this message only has scope in the fuction which is not called
}

delete // this keyword deletes the function searchingForTrouble, which is anyway not called


    function searchingForTrouble() {
        trouble = true;
    }

function logMessage(guard = "") {
    message = "Everything is fine."; // could also just define local variable here if no var above
    if (!guard) {
        // The task is to print "Everything is fine." here.
        console.log(message);
    }
}

logMessage();

everythingIsFine(true); // no function defined

function everythingIsFine(b) {
}

/* reserved keywords in strict mode
implements
interface
let
package
private
protected
public
static
yield */
