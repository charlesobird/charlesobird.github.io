<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get form data
    $name = $_POST["name"];
    $email = $_POST["email"];
    $subject = $_POST["subject"];
    $message = $_POST["message"];

    // Combine name and subject to create the final subject
    $finalSubject = "$name - $subject";

    // Set recipient email address
    $to = "charlesobird@outlook.com";

    // Set additional headers
    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "Content-Type: text/plain;charset=utf-8\r\n";

    // Send the email
    mail($to, $finalSubject, $message, $headers);

    // Optional: Redirect the user to a thank you page
    header("Location: 404.html");
    exit();
}
?>