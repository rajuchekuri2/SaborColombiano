const menuData = {
  breakfast: [
    { name: "Desayuno de la Casa", description: "Scrambled eggs with tomatoes and onions, served with white rice, beans, grilled top round steak, pork crackling, sausage, and an arepita (small)", price: "22.99" },
    { name: "Calentado con Huevos", description: "A mix of beans and rice with tomatoes and onions, served with white rice, and your choice of grilled steak, sausage, or pork crackling", price: "16.99" },
    { name: "Carne Asada con Arepa", description: "Grilled top round steak served with an arepa and cheese", price: "13.50" },
    { name: "Huevos Revueltos", description: "Scrambled eggs with tomatoes and onions, served with an arepa and cheese", price: "11.50" }
  ],
  soups: [
    { name: "Monday - Caldo de Gallina", description: "Traditional hen broth", price: "18.99" },
    { name: "Tuesday - Ajiaco", description: "Traditional chicken and potato soup", price: "18.99" },
    { name: "Wednesday - Sancocho de Costilla", description: "Beef rib stew", price: "18.99" },
    { name: "Thursday - Sopa de Mondongo", description: "Beef tripe soup", price: "18.99" },
    { name: "Friday - Consome de Pollo", description: "Light, savory chicken broth", price: "18.99" },
    { name: "Saturday - Sancocho de Cola", description: "Oxtail stew", price: "18.99" },
    { name: "Sunday - Sancocho de Gallina", description: "Hen stew", price: "18.99" }
  ],
  appetizers: [
    { name: "Empanadas", description: "Beef, chicken, Hawaiian, or cheese", price: "2.25" },
    { name: "Patacones Rellenos", description: "Shredded beef, guacamole, pico de gallo", price: "16.99" },
    { name: "Patacones con Hogao", description: "Tomato & onion sauce", price: "15.50" }
  ],
  typicalColombianMeats: [
    { name: "Bandeja Paisa", description: "Grilled top round steak or ground beef, served with white rice, sweet plantains, eggs, pork crackling, sausage, corn cake, and avocado", price: "24.99" },
    { name: "Carne Asada", description: "Grilled top round steak served with white rice, beans, sweet plantains, and salad", price: "21.99" },
    { name: "Carne Encebollada", description: "Sautéed onion round steak served with white rice, sweet plantains, and salad", price: "21.99" },
    { name: "Chuleta de Cerdo Apanada", description: "Breaded pork chop served with white rice, beans, sweet plantains, and salad", price: "21.99" },
    { name: "Frijoles con Pezuña", description: "Beans with pork skin, white rice, sweet plantains, avocado, pork crackling, and arepa", price: "21.99" },
    { name: "Cazuela de Frijoles", description: "Beans with pork skin, white rice, sweet plantains, avocado, pork crackling, and arepa", price: "25.99" },
    { name: "Hígado a la Plancha", description: "Grilled beef liver with sautéed onions, white rice, beans, sweet plantains, and salad", price: "20.99" },
    { name: "Bistec a Caballo", description: "Steak and eggs with red Creole sauce, served with white rice, beans, and salad", price: "23.99" },
    { name: "Lomo a la Plancha", description: "Grilled pork loin served with white rice, beans, sweet plantains, and salad", price: "20.99" },
    { name: "Churrasco", description: "Grilled sirloin steak served with white rice, beans, boiled potato, and salad", price: "30.99" }
  ],
  chicken: [
    { name: "Pechuga a la Plancha", description: "Grilled chicken breast served with white rice, beans, sweet plantains, and salad", price: "21.99" },
    { name: "Pechuga Apanada", description: "Breaded chicken breast served with white rice, beans, sweet plantains, and salad", price: "22.99" },
    { name: "Arroz con Pollo", description: "Shredded chicken with yellow rice and vegetables, served with sweet plantains and salad", price: "21.99" },
    { name: "Pollo Loco", description: "Breaded chicken breast with marinara sauce and mozzarella cheese, served with white rice and French fries", price: "22.99" },
    { name: "La Parrillada", description: "Grilled top round steak, grilled chicken breast, pork loin, shrimp, sausage, blood sausage, potato, cassava, white rice, and beans", price: "51.99" }
  ],
  seafood: [
    { name: "Pargo Rojo", description: "Whole red snapper served with white rice, fried green plantains, and salad", price: "32.99" },
    { name: "Mojarra Frita", description: "Whole fried mojarra served with white rice, fried green plantains, and salad", price: "26.99" },
    { name: "Camarones en Crema", description: "Grilled shrimp in cream sauce served with rice, French fries, and salad", price: "25.99" },
    { name: "Arroz con Camarones", description: "Seasoned rice with shrimp, served with French fries and salad", price: "22.99" }
  ],
  chefsSpecials: [
    { name: "Pasta del Mar", description: "A mix of shrimp, calamari, mussels, and oysters tossed with pasta of your choice (linguine or bowtie), in a creamy homemade garlic sauce. Served with salad and garlic bread.", price: "32.99" },
    { name: "Sudado de Sobrebarriga", description: "Slow-cooked flank steak in rich tomato and onion sauce, served with boiled potato, white rice, and a fresh avocado salad.", price: "30.99" }
  ],
  burgersHotDogs: [
    { name: "La Rústica", description: "Our house burger with melted mozzarella, lettuce, tomato, onions, potato chips, and our in-house honey mustard and mayo sauce", price: "16.99" },
    { name: "La Montañera", description: "Shredded Carne Asada and grilled chicken breast with melted mozzarella, bacon, tomato, our homemade pineapple sauce, garlic cilantro, and honey mustard", price: "18.99" },
    { name: "La Chismosa", description: "Breaded chicken sandwich with mozzarella, lettuce, tomato, onion, and our house sauces", price: "18.99" },
    { name: "Perro Callejero", description: "Colombian-style hot dog with mozzarella, potato chips, bacon, and a mix of garlic cilantro sauce and our mayo-ketchup spread", price: "13.50" },
    { name: "Salchipapas", description: "Fried sausage and French fries served with house sauces", price: "13.50" },
    { name: "Salchipapas de la Casa", description: "Fried sausage and French fries with grilled chicken, corn, melted cheese, boiled egg, and house sauces", price: "20.99" }
  ],
  salads: [
    { name: "Ensalada con Carne Asada", description: "Sirloin steak over a bed of mixed greens", price: "20.99" },
    { name: "Ensalada de Aguacate", description: "Mixed greens topped with fresh avocado", price: "12.59" }
  ],
  sides: [
    { name: "Chicharron", price: "8.99" },
    { name: "Guacamole", price: "8.99" },
    { name: "Sopa del Dia", description: "Cup of soup of the day", price: "8.99" },
    { name: "Camarones", price: "6.25" },
    { name: "Chorizo", price: "6.25" },
    { name: "Yuca Frita", price: "6.25" },
    { name: "French Fries", price: "5.25" },
    { name: "White Rice", price: "6.25" },
    { name: "Yellow Rice", price: "6.25" },
    { name: "Arepa con Queso", price: "6.25" },
    { name: "Frijoles", price: "6.25" },
    { name: "Patacones", price: "6.25" },
    { name: "Avocado", price: "6.25" },
    { name: "Shredded Chicken", price: "6.25" },
    { name: "Hogao", price: "5.25" },
    { name: "Maduros", price: "4.25" },
    { name: "Queso Fundido", price: "4.25" },
    { name: "Arepitas", price: "4.25" }
  ],
  sodasBeverages: [
    { name: "Manzana", description: "Apple soda", price: "3.75" },
    { name: "Uva", description: "Grape soda", price: "3.75" },
    { name: "Colombiana", description: "Cola Champagne", price: "3.75" },
    { name: "Naranjada", description: "Orange soda", price: "3.75" },
    { name: "Bretaña", description: "Club soda", price: "3.75" },
    { name: "Coca Cola", price: "3.75" },
    { name: "Diet Coke", price: "3.75" },
    { name: "Sprite", price: "3.75" },
    { name: "Canada Dry", price: "3.75" },
    { name: "Pony Malta", price: "3.75" },
    { name: "Cafe Tinto", price: "3.25" },
    { name: "Cafe en Leche", price: "3.75" },
    { name: "Milo frio o caliente", price: "5.25" }
  ],
  naturalJuices: [
    { name: "Maracuya", description: "Passionfruit", price: "7.99" },
    { name: "Mango", price: "7.99" },
    { name: "Mora", description: "Blackberry", price: "7.99" },
    { name: "Fresa", description: "Strawberry", price: "7.99" },
    { name: "Lulo", description: "Naranjilla", price: "7.99" },
    { name: "Piña", description: "Pineapple", price: "7.99" },
    { name: "Guayaba", description: "Guava", price: "7.99" },
    { name: "Papaya", price: "7.99" },
    { name: "Guanabana", description: "Soursop", price: "7.99" },
    { name: "Limonada Natural", description: "Fresh Lemonade", price: "12.50" },
    { name: "Limonada de Coco", description: "Coconut Lemonade", price: "12.50" },
    { name: "Aguapanela", description: "Sugar Cane Juice", price: "5.25" }
  ],
  beer: [
    { name: "Corona", price: "7.25" },
    { name: "Modelo Especial", price: "7.25" },
    { name: "Club Colombia Dorada", price: "7.25" },
    { name: "Aguila", price: "7.25" },
    { name: "Poker", price: "7.25" }
  ],
  winesSangria: [
    { name: "Cabernet Sauvignon", price: "10.50" },
    { name: "Pinot Noir", price: "10.50" },
    { name: "Merlot", price: "10.50" },
    { name: "Pinot Grigio", price: "10.50" },
    { name: "Chardonnay", price: "10.50" },
    { name: "Sangria", price: "14.50" },
    { name: "Mimosa", price: "10.50" }
  ],
  dessert: [
    { name: "Tres Leches", price: "7.25" },
    { name: "Tiramisu", price: "7.25" },
    { name: "Key Lime Pie", price: "7.25" },
    { name: "Oreo Pie", price: "7.25" },
    { name: "Passion Fruit Pie", price: "7.25" },
    { name: "Cholao", description: "Colombian shaved ice", price: "12.50" },
    { name: "Cholao with Ice Cream", price: "15.50" }
  ],
  kidsMenu: [
    { name: "Deditos de Pollo", description: "Breaded chicken tenders served with French fries", price: "14.50" },
    { name: "Alitas de Pollo", description: "Breaded chicken wings served with French fries", price: "13.50" }
  ]
};

const menuSections = [
  { key: "breakfast", labelKey: "menu.breakfast", noteKey: "menu.breakfastNote" },
  { key: "soups", labelKey: "menu.soups", noteKey: "menu.soupsNote" },
  { key: "appetizers", labelKey: "menu.appetizers" },
  { key: "typicalColombianMeats", labelKey: "menu.typicalColombianMeats" },
  { key: "chicken", labelKey: "menu.chicken" },
  { key: "seafood", labelKey: "menu.seafood" },
  { key: "chefsSpecials", labelKey: "menu.chefsSpecials" },
  { key: "burgersHotDogs", labelKey: "menu.burgersHotDogs", noteKey: "menu.burgersHotDogsNote" },
  { key: "salads", labelKey: "menu.salads" },
  { key: "sides", labelKey: "menu.sides" },
  { key: "sodasBeverages", labelKey: "menu.sodasBeverages" },
  { key: "naturalJuices", labelKey: "menu.naturalJuices", suffix: true },
  { key: "beer", labelKey: "menu.beer" },
  { key: "winesSangria", labelKey: "menu.winesSangria" },
  { key: "dessert", labelKey: "menu.dessert" },
  { key: "kidsMenu", labelKey: "menu.kidsMenu" }
];

function buildMenuAccordion() {
  const container = document.getElementById("menu-accordion");
  if (!container) return;
  container.innerHTML = "";

  menuSections.forEach(section => {
    let label = t(section.labelKey);
    if (section.suffix) {
      label += " (" + t("menu.withWaterOrMilk") + ")";
    }
    const note = section.noteKey ? t(section.noteKey) : "";
    const items = menuData[section.key];

    let itemsHtml = items.map(item =>
      `<div class="flex items-baseline justify-between gap-2 py-2.5 px-3 rounded-lg hover:bg-amber-50 transition-colors">
        <div class="flex-1 min-w-0">
          <span class="text-amber-950 font-medium">${item.name}</span>
          ${item.description ? `<span class="text-amber-600 text-sm ml-2">(${item.description})</span>` : ""}
        </div>
        <div class="flex items-baseline gap-1 shrink-0">
          <span class="text-amber-300 text-xs">. . . . .</span>
          <span class="text-amber-900 font-semibold">$${item.price}</span>
        </div>
      </div>`
    ).join("");

    const sectionHtml = `
      <div class="border border-amber-200 rounded-xl overflow-hidden animate-on-scroll">
        <button data-accordion-toggle="accordion-${section.key}" class="w-full flex items-center justify-between gap-4 px-6 py-5 hover:bg-amber-50 transition-colors">
          <div class="text-left">
            <h2 class="font-serif text-xl sm:text-2xl font-bold text-amber-900">${label}</h2>
            ${note ? `<p class="text-amber-600 text-sm mt-1">${note}</p>` : ""}
          </div>
          <svg data-chevron class="w-6 h-6 text-amber-700 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
        </button>
        <div id="accordion-${section.key}" class="hidden">
          <div class="px-6 pb-5 space-y-1 border-t border-amber-100">
            ${itemsHtml}
          </div>
        </div>
      </div>`;

    container.insertAdjacentHTML("beforeend", sectionHtml);
  });

  initMenuAccordions();
  initAnimations();
}

const origUpdate = updateAllTranslations;
updateAllTranslations = function() {
  origUpdate();
  buildMenuAccordion();
};
