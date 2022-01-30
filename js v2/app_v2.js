let general_config = {
    qty: 3,
    length: 16,
    delimiter: "-",
    delimiter_step: 4,
    include_nums: true,
    include_alphas: true,
    include_specials: false,
    include_nulls: false, // These are salts
    uppercase: true,
    unique_only: true
}

let test_obj = {
    test: "test",
    qty: 7
}


// Takes an object of config settings - uses these to make a number of codes
// These codes can be used to generate license-keys, passwords, serial numbers, etc.
function make_general_code(config_obj) {
    

    let default_config = {

        // Structure
        qty: 3,
        length: 16,
        delimiter: "-",
        delimiter_step: 4,

        // Limitations
        include_nums: true, // 0
        include_alphas: true, // 1
        include_specials: false, // 2
        include_nulls: false, // 3 // These are salts

        // Modes
        uppercase: true,
        unique_only: true
    }


    let config = config_obj ?? default_config; // Needed to prevent errors in case nothing passed in, yet we still need to specify the individual properties in case passed in object is missing them
    
    let output = []; 

    new_license_character([config]) // Not quite right yet, been at this a while though, calling it a day

    // Run the code for as many times as the qty specifies
    for(let i = 1; i <= (config.qty ?? default_config.qty); i++){
        



    } // end code creation loop
    
}

make_general_code(test_obj)
console.log("End of function")

















var location_config = {
    qty: 3
}

// These codes will be postcodes, zip codes, geolocation info, etc.
function make_location_code(location_config) {

}

