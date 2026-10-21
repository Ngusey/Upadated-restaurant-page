
export default function loadMenu() {
  const content = document.querySelector("#content");
  content.replaceChildren();

  const heading = document.createElement("h1");
  heading.textContent = "Our Menu";

  const introduction = document.createElement("p");
  introduction.textContent =
    "Explore some of our favorite dishes, prepared fresh for you.";

  const menuItems = [
    {
      name: "Classic Burger",
      description: "Juicy beef, fresh lettuce, tomato, and our special sauce.",
      price: "350 ETB",
    },
    {
      name: "Fresh Pizza",
      description: "Baked dough topped with cheese, tomato, and fresh herbs.",
      price: "450 ETB",
    },
    {
      name: "Special Pasta",
      description: "Tender pasta served with our rich homemade sauce.",
      price: "300 ETB",
    },
    {
      name: "Garden Salad",
      description: "Crisp seasonal vegetables with a light dressing.",
      price: "220 ETB",
    },
  ];

  const menuList = document.createElement("div");
  menuList.classList.add("menu-list");

  menuItems.forEach((item) => {
    const card = document.createElement("article");
    card.classList.add("menu-card");

    const name = document.createElement("h2");
    name.textContent = item.name;

    const description = document.createElement("p");
    description.textContent = item.description;

    const price = document.createElement("p");
    price.classList.add("menu-price");
    price.textContent = item.price;

    card.append(name, description, price);
    menuList.appendChild(card);
  });

  content.append(heading, introduction, menuList);
}
