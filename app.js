
{/* <script language="javascript">
    alert("Welcome to Puppy Rescue")
   
</script> */}


function getName(name) {
    let userName = prompt("Your name:", "");

    if (userName === ''){
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
}