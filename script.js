document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const subject = document.getElementById("subject").value.trim();
    const message = document.getElementById("message").value.trim();

    if (name.length < 3) {
        alert("Name must be at least 3 characters");
        return;
    }

    if (!email.includes("@") || !email.includes(".")) {
        alert("Please enter a valid email");
        return;
    }

    if (phone.length < 10 || isNaN(phone)) {
        alert("Phone must be at least 10 digits");
        return;
    }

    if (subject.length < 5) {
        alert("Subject must be at least 5 characters");
        return;
    }

    if (message.length < 10) {
        alert("Message must be at least 10 characters");
        return;
    }

    alert("Form sent successfully! 🎉");
});