/*
Filename: 
Student Name: Ashrut Sharma
Student ID: 301107609 
Date: 14th February, 2021
*/

//Outputs the message"App started..." on the console when app starts
(function(){

    function Start() {
        console.log("App started .. . ");
        let deleteButtons = document.querySelectorAll('.btn-danger');
        for(button of deleteButtons)
        {
            button.addEventListener('click', (event)=>{
                if(!confirm("Are you sure?"))
                {
                    event.preventDefault();
                    window.location.assign('/business-list');
                }
            });
        }
    }
    window.addEventListener("load",Start);
})();