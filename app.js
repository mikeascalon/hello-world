
{/* <script language="javascript">
    alert("Welcome to Puppy Rescue")
   
</script> */}


function getName(name) {
    let userName = prompt("Your name:", "");

    while (userName === ''){
        userName = prompt('Dont be ashemed, tell us your name');
    }
    
    return userName;    
}

function greetUser(name){
    document.write( 'Welcome ' + name + ' to the Puppy Rescue')
}
                 
function adoptPuppy() {
    let visitorAnswer = prompt("Do you want to adopt a puppy?");
    
    if (visitorAnswer === "yes" || visitorAnswer === "Yes") {
        document.write('We have a lot of puppies that need a home!');
    } else {
        document.write("Just look at those puppy's eyes");
    }
    console.log (visitorAnswer);
}

function howManyPuppiesYouWantToSee(){
    let numOfPuppies = prompt('How many puppies would you like to see?');
  
    for(let i = 0; i < numOfPuppies; i++){
      document.write("<img class='loop-img' src='dog-emoji.jpg' alt='this dog is over it' >")
    }
  }