function myFunction() {
    var x = document.getElementById("homeb");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }

var whatsappNumber = '+2347088078775';

// Function to open WhatsApp link
function openWhatsApp() {
    // Construct the WhatsApp API URL
    var whatsappUrl = 'https://wa.me/' + whatsappNumber;

    // Open the link in a new tab
    window.open(whatsappUrl, '_blank');
}

document.getElementById('whatsappIcon').onclick = openWhatsApp;



// Function to open GitHub link
function openGitHubProfile() {
    var githubUrl = 'https://github.com/bakare mopelola';

    window.open(githubUrl, '_blank');
}

document.getElementById('githubIcon').onclick = openGitHubProfile;




// Function to open LinkedIn link
function openLinkedInProfile() {
    var linkedInUrl = 'https://www.linkedin.com/in/bakare mopelola';

    window.open(linkedInUrl, '_blank');
}

document.getElementById('linkedinIcon').onclick = openLinkedInProfile;


// Function to open Facebook link
function openFacebookProfile() {
    var facebookUrl = 'https://www.facebook.com/mopelola bakare ';

    // Open the link in a new tab
    window.open(facebookUrl, '_blank');
}

// Function to open Instagram link
function openInstagramProfile() {
    var instagramUrl = 'https://www.instagram.com/ummumukthar';

    // Open the link in a new tab
    window.open(instagramUrl, '_blank');
}

document.getElementById('facebookIcon').onclick = openFacebookProfile;
document.getElementById('instagramIcon').onclick = openInstagramProfile;




// Function to open the 'work' page
function openWorkPage() {
    window.location.href = 'work.html';
}

// Function to open the 'resume' page
function openResumePage() {
    window.location.href = 'resume.html';
}


document.getElementById('homebb').onclick = openWorkPage;
document.getElementById('py').onclick = openResumePage;
