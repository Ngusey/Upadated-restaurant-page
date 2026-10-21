
import burgerImage from "./images/burger.jpg";

export default function loadHome() {
  const content = document.querySelector("#content");
  content.replaceChildren();

  const heading = document.createElement("h1");
  heading.textContent = "Welcome to Ngusey's Restaurant";

  const description = document.createElement("p");
  description.textContent =
    "Discover delicious food, fresh ingredients, and a warm dining experience.";

  const image = document.createElement("img");
  image.src = burgerImage;
  image.alt = "Delicious burger served at our restaurant";
  image.classList.add("restaurant-image");

  const tagline = document.createElement("p");
  tagline.classList.add("tagline");
  tagline.textContent = "Fresh ingredients. Wonderful flavors. Every day.";

  content.append(heading, description, image, tagline);
}
