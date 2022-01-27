<?php

$key_length = 16;
$delimiter = "-";
$delimiter_step = 4;

function randomQuery($floor, $ceil, $string = false){
    $num = rand($floor, $ceil);

    if($string){

       //("String mode set to true")
        return strval($num);
    }

    return $num;
    
} // end randomQuery

function coinFlip(){
	return randomQuery(0, 1);
}

function randomAlpha($lower = "false"){
    $alpha = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

    // Generate a random letter
    $charIndex = randomQuery(0, 25);
    $character = $alpha[$charIndex];
	
   

    return $character;


}

function getLicenseCharacter(){
    
        $character = null;

        switch(coinFlip()){
            case 0: // letter
                $character = randomAlpha();
                break;

            case 1: // number
               $character = randomQuery(0, 9);
                break;
        }

        // console.log("Before")
        // console.log(character)

        if( !isset($character) || is_null($character) ){
            $character = 0;
        }

        // console.log("After")
        // console.log(character)

        return $character;

    }

	

  function build_license($delimiter, $step, $length){
	  
        $licenseStr = "";

        for($i = 1; $i < $length + 1 ; $i++){
			
         $licenseStr .= getLicenseCharacter();
			
			
            if ($i % $step === 0 && $i !== $length){

				//return $licenseStr;
              $licenseStr .= $delimiter;
            
            }
        }

        return $licenseStr;
	  
        
    }


    function bulk_license_builder($qty){
		
	//	$key_length = 16;
	//	$delimiter = "-";
	//	$delimiter_step = 4;	
		$licenses = [];
		
		for($i = 1; $i <= $qty; $i++){
			array_push($licenses, build_license($delimiter, $delimiter_step, $key_length));
		}
		
		return $licenses;
	}
?>