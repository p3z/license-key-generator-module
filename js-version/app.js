// Requires some dependent code from shay-libs

// Return format looks like this: 0A0M-937M-KS31-PR4V (each character is randomly generated)
(() => {
    
    const key_length = 16; // Entire length of license key required
    const delimiter = "-"; //
    const delimiter_step = 4; // Make sure this is a factor of key_length for symmetrical keys


    // Gets a single character
    function getLicenseCharacter(){
        var character = null;

        switch(coinFlip()){
            case 0: // letter
                character = randomAlpha();
                break;

            case 1: // number
                character = randomQuery(0, 9);
                break;
        }

        // console.log("Before")
        // console.log(character)

        if(character === undefined || character === null){
            character = 0;
        }

        // console.log("After")
        // console.log(character)

        return character;

    }

    function build_license(delimiter, step, length){
        var licenseStr = "";

        for(var i = 1; i < length + 1 ; i++){
         licenseStr += getLicenseCharacter();

            if (i % step === 0 && i !== length){

              licenseStr += delimiter;
            
            }
        }

        return licenseStr;
        
    }


    
    // Really the index file is irrelevant, it just shows the results of one generation
    var display_el = document.getElementsByTagName("h1")[0];

    var btn = document.getElementsByTagName("button")[0];

    btn.addEventListener("click", ()=> {
        display_el.textContent = build_license(delimiter, delimiter_step, key_length);
    })

    display_el.textContent = build_license(delimiter, delimiter_step, key_length);
 

 
   


})()


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