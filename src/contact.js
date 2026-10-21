
export default function loadContact() {
  const content = document.querySelector("#content");
  content.replaceChildren();

  const heading = document.createElement("h1");
  heading.textContent = "Contact Us";

  const introduction = document.createElement("p");
  introduction.textContent =
    "We would love to hear from you. Contact us or visit our restaurant.";

  const details = document.createElement("div");
  details.classList.add("contact-details");

  const address = document.createElement("p");
  address.textContent = "Address: Add your restaurant address";

  const phone = document.createElement("p");
  phone.textContent = "Phone: Add your restaurant phone number";

  const hours = document.createElement("p");
  hours.textContent = "Opening hours: Add your opening hours";

  details.append(address, phone, hours);
  content.append(heading, introduction, details);
}
