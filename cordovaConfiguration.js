window.onload = function() {
    console.log("**** INSIDE ONLOAD FUNCTION *****");
    document.addEventListener("deviceready", onDeviceReady, false); 
    document.addEventListener("shake", shakeEventDidOccur, false);
}

// device APIs are available
//
function onDeviceReady() {
    // Empty
    alert("YOLO");
}

// alert dialog dismissed
function alertDismissed() {
        // do something
}

    // Show a custom alertDismissed
    //
function showAlert() {
    navigator.notification.alert(
            'Smartphone is on the way.',  // message
            alertDismissed,               // callback
            'Shipped',                    // title
            'Done'                        // buttonName
        );
    }

function shakeEventDidOccur () {
        alert("shake");
}