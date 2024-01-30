let age = 21;

  if (age >= 18 ) {
    let choice = 'a';
  
    switch (choice){
       case 'a' :
            let x = 0;
            let nums = [10,11,12,13,14,15,16,17,18,19,20];
            let eve = [];
            for (let i = 0; i<nums.length; i++ ){
                if (nums[i] % 2 == 0){
                    eve.push(nums[i])
                }
            }
          console.log(`Here are the even numbers within 10 to 20 that you can pick ${eve}`)
            break;
      case 'b' :
            console.log ('b is your choice');
            break;
      default:
            console.log('pag nirun at lumabas to mali ');
    }
  }
  else {
    console.log("You must be 18 above just because")
  }
