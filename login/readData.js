(
function(){
    var ctrls = {}
    ctrls.firstName = document.getElementById("txtfirstname");
    ctrls.lastName = document.getElementById("txtlastname");
    ctrls.countries = document.getElementById("ddlCountry");
    ctrls.Gender = document.getElementById("c1");
    ctrls.gndr = document.getElementById("c2");
    ctrls.registerButton = document.getElementById("btnRegister");
    
    function readData(){
        var profile = {};
        profile.firstName = ctrls.firstName.Value;
        profile.lastName = ctrls.lastName.value;
        profile.country = ctrls.countries.value;
        profile.gender = ctrls.Gender.value;
        profile.gnder = ctrls.gndr.value;
    }
    
   /* function alphabetsOnly(evt) {
            console.log(evt);
            if ((evt.keyCode >= 65 && evt.keyCode <= 90) ||
                (evt.keyCode >= 97 && evt.keyCode <= 122)
            ) {
                console.log("Valid");
            } else {
                console.log("Invalid");
                evt.preventDefault();
            }

        }*/
    function bindEvents(){
        ctrls.firstName.addEventListener("keypress",alphabetsOnly);
        ctrls.lastName.addEventListener("keypress",alphabetsOnly);
        
    }
    bindEvents();
});