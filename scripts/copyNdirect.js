function copyAndRedirect(text, url) {
  // Copy text to clipboard
  navigator.clipboard
    .writeText(text)
    .then(function () {
      // Redirect to the provided URL
      window.location.href =
        "https://permitlookup.cityoforlando.net/WebPermits/";
    })
    .catch(function (err) {
      console.error("Failed to copy text: ", err);
    });
}

// // Assign the onClick event to the link
// document.querySelector("temp__link").onclick = function () {
//   copyAndRedirect(
//     "example text",
//     "https://permitlookup.cityoforlando.net/WebPermits/"
//   );
// };
