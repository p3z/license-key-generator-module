// Gets a single character (v1)
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

// Outputs a single character that conforms to the rules of selection
function new_license_character(modes = []){

 //   console.log(modes)

    let mode_names = Object.keys(modes);
    let mode_vals = Object.values(modes);

    // Pass through each mode, and add a possible choise to possibility_arr
    let possibility_arr = [];
    // When complete, arbitrarily select value from possibility_array

    mode_names.forEach((current_mode, i) => {
        switch(current_mode){
            case 'include_nums' :
            
                if(mode_vals[i]){
                    possibility_arr.push(randomQuery(0, 9));
                }
                
                break;

            case 'include_alphas':
                if(mode_vals[i]){
                    possibility_arr.push(randomAlpha());
                }
                
                break;

            case 'include_specials':
            case 'include_nulls':
            case 'uppercase':
            case 'unique_only':
        }

        let possibility_size = possibility_arr.length;

        let selection = randomQuery(0, possibility_size);

       // console.log(possibility_arr[selection])
        return possibility_arr[selection];
    });



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

