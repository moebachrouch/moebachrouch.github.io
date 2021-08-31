/*!
 * Start Bootstrap - Resume v7.0.2 (https://startbootstrap.com/theme/resume)
 * Copyright 2013-2021 Start Bootstrap
 * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-resume/blob/master/LICENSE)
 */
//
// Scripts
//

window.addEventListener("DOMContentLoaded", (event) => {
  // Activate Bootstrap scrollspy on the main nav element
  const sideNav = document.body.querySelector("#sideNav");
  if (sideNav) {
    new bootstrap.ScrollSpy(document.body, {
      target: "#sideNav",
      offset: 74,
    });
  }

  // Collapse responsive navbar when toggler is visible
  const navbarToggler = document.body.querySelector(".navbar-toggler");
  const responsiveNavItems = [].slice.call(
    document.querySelectorAll("#navbarResponsive .nav-link")
  );
  responsiveNavItems.map(function (responsiveNavItem) {
    responsiveNavItem.addEventListener("click", () => {
      if (window.getComputedStyle(navbarToggler).display !== "none") {
        navbarToggler.click();
      }
    });
  });
});

$(document).ready(function () {
  $("#submit-button").click(function (evt) {
    let name = $("#name").val();
    let email = $("#email").val();
    let message = $("#message").val();

    var emailStatus = $("#email-status");
    emailStatus.empty();

    var nameStatus = $("#name-status");
    nameStatus.empty();

    var messageStatus = $("#message-status");
    messageStatus.empty();

    if (!validateName(name)) {
      evt.preventDefault();
      nameStatus.append("<p>Name field required<p>");
    }

    if (!validateEmail(email)) {
      evt.preventDefault();
      if (email.length === 0) {
        emailStatus.append("<p>Email field required<p>");
      } else {
        emailStatus.append("<p>Invalid email</p>");
      }
    }

    if (!validateMessage(message)) {
      evt.preventDefault();
      messageStatus.append("<p>Message field required<p>");
    }
  });
});

validateEmail = function (email) {
  // Check if the email is valid
  var re =
    /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
  return re.test(email);
};

validateName = function (name) {
  return name.length > 0;
};

validateMessage = function (message) {
  return message.length > 0;
};
