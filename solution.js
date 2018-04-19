process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();    
});

function readLine() {
    return input_stdin_array[input_currentline++];
}

/////////////// ignore above this line ////////////////////

function main() {
    var a = readLine();
    var b = readLine();

    console.log(annagrammer(a, b));
}

function annagrammer(a, b) {  
    // Tough one for me, utilized http://brianflove.com/2016/12/03/hackerrank-making-anagrams/ for assistance
    let outer = [ ],
        inner = [ ],
        innerIndex = 0,
        outerIndex = 0;
        
    if (a.length > b.length) {
        outer = a.split("");
        inner = b.split("");
    } else {
        outer = b.split("");
        inner = a.split("");
    }
    
    outerIndex = outer.length - 1; // Set the index to the end of the array
    while (inner.length > 0 && outer.length > 0 && outerIndex >= 0) {
        // As long as we've still got some array left...
        innerIndex = inner.indexOf(outer[outerIndex]);
        
        if (innerIndex !== -1) {
            // We found a match, so remove it from both arrays
            outer.splice(outerIndex, 1);
            inner.splice(innerIndex, 1);            
        }
        
        // Move left to the next index
        --outerIndex;
    }
    
    // Return the length of the remaining arrays
    return outer.length + inner.length;       
}