  document.addEventListener('DOMContentLoaded', function() {
            const submitButton = document.getElementById('submitButton');
            const nameInput = document.getElementById('nameInput');
			const emailinput=document.getElementById('emailinput');
			const mobileinput=document.getElementById('mobileinput');
			var e=
			
			
            const displayName = document.getElementById('displayName');
            const displayNumber = document.getElementById('displayNumber');
			const displayemail=document.getElementById('displayemail');
			const displaymobile=document.getElementById('displaymobile');
		

            submitButton.addEventListener('click', function() {
                const name = nameInput.value;
                const number = numberInput.value;
				const email= emailinput.value;
				const mobile= mobileinput.value;

                displayName.textContent = 'Your Name: ' + name;
                displayNumber.textContent = 'Your Number: ' + number;
				displayemail.textContent= 'your email:'+ email;
				displaymobile.textcontent='your mobile'+ mobile;
            });
        });
    
	function deposit()
{
	var b=parseInt(document.getElementById("num2").value);
	var c=parseInt(document.getElementById("num3").value);
	console.log('hoi',b,c);
	var x=20000;
	if(b==123456789 && c>0)
	{
	document.getElementById("result").innerHTML=x+c;
	}
	else
	{
	document.getElementById("result").innerHTML="Error";
	}
}