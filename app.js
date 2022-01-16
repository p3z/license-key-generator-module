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

            if (i % delimiter_step === 0 && i !== length){

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