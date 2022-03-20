//////////////////////////////////////////////////
//
// Shay Lib v1
//
// I find myself repeatedly creating the same or similar functions in personal projects. Going forwads I'm going to collate such potentially universal functions into this one file.
//

//////////////////////////////////////////////////



function dataURLtoFile(dataurl, filename) {

    if(dataurl !== undefined){

        var arr = dataurl.split(','),
        mime = arr[0].match(/:(.*?);/)[1],
        bstr = atob(arr[1]), 
        n = bstr.length, 
        u8arr = new Uint8Array(n);
        
    while(n--){
        u8arr[n] = bstr.charCodeAt(n);
    }
    
    return new File([u8arr], filename, {type:mime});

    } else {
        return "No data url specified";
    }
 

}

//Usage example:
//var file = dataURLtoFile(dataURL,'test.png');
//console.log(file);

 // If we dont want peeps to know what software this is	
function hideSrc(){

    // Prevents right clicks
    document.addEventListener('contextmenu', function(e) {
		e.preventDefault(); 
	  });


    // Prevent them seeing source
    document.onkeydown = function(e) {
        if (e.ctrlKey &&         // ctrl key
            (e.keyCode === 67 || // c (ctrl + c = copy)
             e.keyCode === 86 || // v (ctrl + v = paste)
             e.keyCode === 85 || // u (ctrl + u = src code)
             e.keyCode === 117)) { // f6 (ctrl + f6 go to the next document window)
            alert('not allowed');
            return false;
        } else if (e.keyCode === 123){ // F12 = open devtools
            alert('not allowed');
            return false;
            
        }else {
            return true;
        }
    };
}


function randomQuery(floor, ceil, string = "false"){
    let num = Math.floor(Math.random() * (ceil - floor + 1) + floor);

    if(string){

       // console.log("String mode set to true")
        return num.toString();
    }

    return num;
    
} // end randomQuery


// Depends on randomQuery()
// You should refactor this to be able to take a limited range of characters too
function randomAlpha(lower = "false"){
    const alpha = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

    // Generate a random letter
    var charIndex = randomQuery(0, 25);
    var character = alpha[charIndex].toLowerCase();
   

    return character;


}

// Depends on randomQuery()
function coinFlip(){
    return randomQuery(0, 1);
} // end coinFlip

// Run a function repeatedly 'n' number of times [ Doesn't work if we need to pass arguments to it ]
function repeatFunction(func, n, args = {}){
    for(let i = 0; i < n; i++){
        if (args){
            func(args);
        } else{
            func();
        }
    } // end loop
} // end function


function twoNums(){
    let join = '';

    let dec1 = randomQuery(0,9).toString();
    let dec2 = randomQuery(0,9).toString();

    join += dec1 += dec2;

    return join; // It's a string at this point

}

function setFlashMessage(type, message){
    switch(type){
        case 'success':
            alertBox.classList.add("alert-success");
            alertBox.classList.remove("hide");
            alertBox.textContent = message;
            resetFlashMessage("alert-success");
            break;

        case 'error':
            alertBox.classList.add("alert-danger");
            alertBox.classList.remove("hide");
            alertBox.textContent = message;
            resetFlashMessage("alert-danger");
        break;
    }

} // setFlashMessage

function resetFlashMessage(removeClass){
    
    setTimeout(function(){
        alertBox.classList.remove(removeClass);
        alertBox.classList.add("hide");
        alertBox.textContent = '';
    }, 1000)

} // resetFlashMessage


// Takes a css class, applies it to all elements and removes it from all exceptions (if direction is false, it works in reverse)
function bulkClassToggler(cssClass = '', elements = [], exceptions = [], direction = true){

    // Add classes before taking anyway (needs to be in this order in case of a duplicated entry in an)
    elements.forEach((el)=>{
        
        switch(direction){
            case true: // Default
                el.classList.add(cssClass);
                break;

            case false: // Go in reverse
                el.classList.remove(cssClass);
                break;


        }// end switch
        
        console.log("An element:")
        console.log(el)
        
    }); // end foreach
    
    // Remove class from exceptions
    exceptions.forEach((x)=>{

        switch(direction){
            case true: // Default
                x.classList.remove(cssClass);
                break;

            case false: // Go in reverse
                x.classList.add(cssClass);
                break;


        }// end switch
        
        
        console.log("An exception:")
        console.log(x);
        
    }); // end foreach
                
            
} // end bulkClassToggler

// Creates as many html elements as needed according to args
function htmlFactory(appendTarget, elementToCreate, qty = 1, cssClasses = [], content){

    for(var i = 0; i < qty; i++){

        // Loop through and create as many elements with as many classes as specified in the arguments
        var htmlElement = document.createElement(elementToCreate);

        if(content){
            var contentNode = document.createTextNode(content);
            htmlElement.appendChild(contentNode);
        }

        // Add classes to element
        cssClasses.forEach( (cssClass) => {
            htmlElement.classList.add(cssClass);
        }); 

        // Append new element to all of them
        appendTarget.appendChild(htmlElement);
        

    } // end construction loop

} // end htmlFactory

function htmlBuilder( buildThis ){
    // Deconstruct the object and build everything into arrays
    var elements = Object.keys(buildThis);
    var values = Object.values(buildThis);
    
    // Loop through the details and build them accordingly
    for(var i = 0; i < elements.length; i++){
        // Grab the attributes
        var qty = values[i].qty;
        var cssClass = values[i].class;
        var content = values[i].content;
        var appendTarget = values[i].appendTarget;

        // Default values
        if (qty == undefined){ qty = 1; }
        if (cssClass == undefined){ cssClass = []; }
        if (content == undefined){ content = []; }
        if (appendTarget == undefined){ appendTarget = body; } // Should appendTarget have a setting in consts.js?

        // Now build everything
        
    } // end loop

} // end htmlBuilder

function isUniqueStr(str1, str2){
    
    if (str1 === str2){
        return false;
    } else {
        return true;
    }

}


// Check a single string against an entire array of strings
function is_fresh_input(code, arr){
    
    var code_in_array = arr.includes(code);

    if(code_in_array){
        return false;
    } else{
        return true;
    }

}

// Parse through an array of strings and remove duplicates
// Returns an object containing the number of duplicates removed and the resulting array
function remove_duplicates(catalog){

    var orig_length = catalog.length;

    //(if needed)
    // From here: // https://stackoverflow.com/questions/49215358/checking-for-duplicate-strings-in-javascript-array
    let findDuplicates = arr => arr.filter((item, index) => arr.indexOf(item) != index);
    
    // An array of duplicated keys 
     var duplicates = [...new Set(findDuplicates(catalog))]


    // Loop over the catalog, and this time remove all duplicates from it
    var unique_vals = [...new Set(catalog)];
    var unique_length = unique_vals.length;  

    return {
        num_keys_removed: `${duplicates.length}`,
        duplicates: duplicates,        
        catalog: unique_vals
    }
    
}



// Contains duplicates
let catalog_one = [ "WT7L-CQW0-KCV4-0REK", "0N2E-Y981-S9B5-5STT", "WT7L-CQW0-KCV4-0REK", "TH80-TQ47-S1GO-UTQ6", "F8EM-LG40-2SK1-7N4P", "04ZI-91J5-69Y5-92N2", "WT7L-CQW0-KCV4-0REK", "0N2E-Y981-S9B5-5STT"];

// No duplicates
let catalog_two = [ "WT7L-CQW0-KCV4-0REK", "0N2E-Y981-S9B5-5STT", "TH80-TQ47-S1GO-UTQ6", "F8EM-LG40-2SK1-7N4P", "04ZI-91J5-69Y5-92N2", "7H3G-78M8-NY7R-8U74", "SPVL-CPXO-0445-869H"];

let fruits = ["Banana", "Orange", "Apple", "Mango"];

// console.log(remove_duplicates(catalog_one));
// console.log(remove_duplicates(catalog_two));

console.log(is_fresh_input("04ZI-91J5-69Y5-92N2", catalog_two))


function linux_win(sys, str){
    
    switch(sys){
        case "linux":
            return str.replaceAll('/', '\\');

        case "windows":
            return str.replaceAll('\\', '/');

        default:
            return "One of your file paths has an error using Linux_win";
    }

}