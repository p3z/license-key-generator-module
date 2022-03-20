let general_config = {
    qty: 3, // How many codes to generate
    length: 16,
    delimiter: "-",
    delimiter_step: 4,
    include_nums: true,
    include_alphas: true,
    include_specials: false,
    include_nulls: false, // These are salts
    uppercase: 'all_upper', // A select with several options
    unique_only: true
}




// Takes an object of config settings - uses these to make a number of codes
// These codes can be used to generate license-keys, passwords, serial numbers, etc.
function make_general_code(config_obj) {
    
    let constraints = {
        include_nums: config_obj.include_nums,
        include_alphas: config_obj.include_alphas,
        include_specials: config_obj.include_specials,
        include_nulls: config_obj.include_nulls,
        uppercase: config_obj.uppercase,
        unique_only: config_obj.unique_only
    }
    
    let output = []; 

    new_license_character(constraints) // Not quite right yet, been at this a while though, calling it a day

    

    // Run the code for as many times as the qty specifies
    for(let i = 1; i <= (config_obj.qty); i++){
        



    } // end code creation loop
    
}

















var location_config = {
    qty: 3
}

// These codes will be postcodes, zip codes, geolocation info, etc.
function make_location_code(location_config) {

}

