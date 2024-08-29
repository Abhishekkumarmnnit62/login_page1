// script.js
document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Simple validation
    if (username && password) {
        alert('Logged in with username: ' + username);
        // Implement actual authentication here
    } else {
        alert('Please fill in all fields.');
    }
});

document.getElementById('google-login').addEventListener('click', function() {
    // Redirect to Google SSO (this is a placeholder URL, replace with actual OAuth URL)
    
        window.location.href="https://accounts.google.com/o/oauth2/auth?client_id=${CLIENT_IDS.google}&redirect_uri=${REDIRECT_URI}&response_type=code&scope=email%20profile`";
});

document.getElementById('facebook-login').addEventListener('click', function() {
    // Redirect to Facebook SSO (this is a placeholder URL, replace with actual OAuth URL)
    window.location.href="https://www.facebook.com/login.php?skip_api_login=1&api_key=124024574287414&kid_directed_site=0&app_id=124024574287414&signed_next=1&next=https%3A%2F%2Fwww.facebook.com%2Fdialog%2Foauth%3Fclient_id%3D124024574287414%26locale%3Den_GB%26redirect_uri%3Dhttps%253A%252F%252Fwww.instagram.com%252Faccounts%252Fsignup%252F%26response_type%3Dcode%252Cgranted_scopes%26scope%3Demail%26state%3D%257B%2522fbLoginKey%2522%253A%2522a52ud511zatue1v61mopo8tre71ctmapdewi8d1wljx5811q6i3v%2522%252C%2522fbLoginReturnURL%2522%253A%2522%252Ffxcal%252Fdisclosure%252F%253Fnext%253D%25252F%2522%257D%26ret%3Dlogin%26fbapp_pres%3D0%26logger_id%3Dbd88b361-f625-411f-8703-85684d7bdb64%26tp%3Dunspecified&cancel_url=https%3A%2F%2Fwww.instagram.com%2Faccounts%2Fsignup%2F%3Ferror%3Daccess_denied%26error_code%3D200%26error_description%3DPermissions%2Berror%26error_reason%3Duser_denied%26state%3D%257B%2522fbLoginKey%2522%253A%2522a52ud511zatue1v61mopo8tre71ctmapdewi8d1wljx5811q6i3v%2522%252C%2522fbLoginReturnURL%2522%253A%2522%252Ffxcal%252Fdisclosure%252F%253Fnext%253D%25252F%2522%257D%23_%3D_&display=page&locale=en_GB&pl_dbl=0"
});
