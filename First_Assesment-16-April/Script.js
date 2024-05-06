    
    // THIS IS FOR POP UP ALERT

    // function clickBtn() 
    // {
    //     var choice = confirm("Which app would you like to open: Instagram or WhatsApp?");
    //     if (choice) {
    //         window.open("https://www.instagram.com/", "_blank");

    //     } else {
    //         window.open("https://web.whatsapp.com/", "_blank");
    //     }
    // }


    // THIS IS FOR POP-UP TO SHOW WHATSAPP AND INSTAGRAM AFTER CLICK SHARE BTN 
    function openAppPopup() {
        document.getElementById("popup").style.display = "block";
    }
    
    function closePopup() {
        document.getElementById("popup").style.display = "none";
    }
    
    function openInstagram() {
        window.open("https://www.instagram.com/", "_blank");
        closePopup();
    }
    
    function openWhatsApp() {
        window.open("https://web.whatsapp.com/", "_blank");
        closePopup();
    }
    
