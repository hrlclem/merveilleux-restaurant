export default function productsDisplay() {   

    // Merveilleux
    let merveilleux =       {category: "merveilleux", title: "Le Merveilleux", picture: "../src/img/mini-merveilleux.jpg", description: "Mini", ingredients: "Meringue, chocolate cream, chocolate", conservation: "❄️ 24h in fridge", allergenes: "🌾 Eggs, cream, soy"};
    let incroyable =        {category: "merveilleux", title: "L'Incroyable", picture: "../src/img/mini-incroyable.jpg", description: "Mini", ingredients: "Meringue, speculoos cream, white chocolate", conservation: "❄️ 24h in fridge", allergenes: "🌾 Eggs, cream, soy"};
    let excentrique =       {category: "merveilleux", title: "L'Excentrique", picture: "../src/img/mini-excentrique.jpg", description: "Mini", ingredients: "Meringue, cherry cream, cherry meringue bits", conservation: "❄️ 24h in fridge", allergenes: "E🌾 ggs, cream, soy"};
    let impensable =        {category: "merveilleux", title: "L'Impensable", picture: "../src/img/mini-impensable.jpg", description: "Mini", ingredients: "Meringue, coffee cream, coffee meringue bits", conservation: "❄️ 24h in fridge", allergenes: "🌾 Eggs, cream, soy"};
    let magnifique =        {category: "merveilleux", title: "Le Magnifique", picture: "../src/img/mini-magnifique.jpg", description: "Mini", ingredients: "Meringue, hazelnut cream, bits of hazelnuts", conservation: "❄️ 24h in fridge", allergenes: "🌾 Eggs, cream, soy"};
    let sansCulotte =       {category: "merveilleux", title: "Le Sans-Culotte", picture: "../src/img/mini-sans-culotte.jpg", description: "Mini", ingredients: "Meringue, caramel cream, meringue bits", conservation: "❄️ 24h in fridge", allergenes: "🌾 Eggs, cream, soy"};

    // Cramiques
    let cramiquePlain =     {category: "cramique", title: "La Cramique Nature", picture: "../src/img/cramique-nature.jpg", description: "Perfect for your breakfast", ingredients: "Wheat, milk, butter, eggs, sugar", conservation: "To eat the same day", allergenes: "🌾 Gluten, eggs, milk, soy"};
    let cramiqueSugar =     {category: "cramique", title: "La Cramique Sucre", picture: "../src/img/cramique-sucre.jpg", description: "Perfect for your breakfast", ingredients: "Wheat, milk, butter, eggs, sugar", conservation: "To eat the same day", allergenes: "🌾 Gluten, eggs, milk, soy"};
    let cramiqueChoco =     {category: "cramique", title: "La Cramique Chocolat", picture: "../src/img/cramique-chocolat.jpg", description: "Perfect for your breakfast", ingredients: "Wheat, milk, butter, eggs, sugar", conservation: "To eat the same day", allergenes: "🌾 Gluten, eggs, milk, soy"};
    let cramiqueRaisin =    {category: "cramique", title: "La Cramique Raisin", picture: "../src/img/cramique-raisin.jpg", description: "Perfect for your breakfast", ingredients: "Wheat, milk, butter, eggs, sugar", conservation: "To eat the same day", allergenes: "🌾 Gluten, eggs, milk, soy"};

    // Gateaux
    let gateauMerveilleux = {category: "gateau", title: "Le Gateau Merveilleux", picture: "../src/img/gateau-merveilleux.jpg", description: "To share in 4 to 6 slices", ingredients: "Meringue, chocolate cream, chocolate", conservation: "❄️ 24h in fridge", allergenes: "🌾 Eggs, cream, soy"}; 
    let gateauIncroyable =  {category: "gateau", title: "Le Gateau Incroyable", picture: "../src/img/gateau-incroyable.jpg", description: "To share in 4 to 6 slices", ingredients: "Meringue, speculoos cream, white chocolate", conservation: "❄️ 24h in fridge", allergenes: "🌾 Eggs, cream, soy"};  

    // Autres
    let gauffreVanille =    {category: "other", title: "La Gauffre Vanille", picture: "../src/img/gaufre-vanille.jpg", description: "Thin and melty gauffres", ingredients: "Wheat, milk, butter, eggs, sugar, rhum, salt", conservation: "24h in fridge", allergenes: "🌾 Eggs, cream, soy"}; 
    let gauffreVergeoise =  {category: "other", title: "La Gauffre Vergeoise", picture: "../src/img/gaufre-vanille.jpg", description: "Thin and melty gauffres", ingredients: "Wheat, milk, butter, eggs, sugar, salt", conservation: "24h in fridge", allergenes: "🌾 Eggs, cream, soy"}; 
    let painChocolat =      {category: "other", title: "Le Pain au Chocolat", picture: "../src/img/pain-au-chocolat.jpg", description: "A tasty delight", ingredients: "Wheat, milk, butter, eggs, sugar, chocolate, salt", conservation: "To eat the same day", allergenes: "🌾 Eggs, cream, soy"}; 
    let croissant =         {category: "other", title: "Le Croissant", picture: "../src/img/croissant.jpg", description: "A tasty delight", ingredients: "Wheat, milk, butter, eggs, sugar, salt", conservation: "To eat the same day", allergenes: "🌾 Eggs, cream, soy"}; 

    // PRODUCT MENU
    let productMenu = [
        merveilleux,
        incroyable,
        excentrique,
        impensable,
        magnifique,
        sansCulotte,
        cramiqueChoco,
        cramiquePlain,
        cramiqueRaisin,
        cramiqueSugar,
        gateauIncroyable,
        gateauMerveilleux,
        gauffreVanille,
        gauffreVergeoise,
        painChocolat,
        croissant
    ];


    // Display products per group
    function displayAllProducts() {
        for (let i = 0; i < productMenu.length; i++) {
            let productEntity =         document.createElement('div');
            let productPicture =        document.createElement('img');
            let productInfo =           document.createElement('div');
            let productName =           document.createElement('div');
            let productDescription =    document.createElement('div');
            let productIngredients =    document.createElement('div');
            let productConservation =   document.createElement('div');
            let productAllergenes =  document.createElement('div');

            // Create productEntity
            productDisplay.appendChild(productEntity);
            productEntity.className = 'productEntity';

                // Add picture in productEntity 
                productEntity.appendChild(productPicture);
                productPicture.className = 'productPicture';
                productPicture.src = productMenu[i].picture;

                // Add infoDiv in productEntity 
                productEntity.appendChild(productInfo);
                productInfo.className = 'productInfo';

                    // Add Title in productInfo 
                    productInfo.appendChild(productName);
                    productName.className = 'productName';
                    productName.textContent = productMenu[i].title;

                    // Add Description in productInfo 
                    productInfo.appendChild(productDescription);
                    productDescription.className = 'productDescription';
                    productDescription.textContent = productMenu[i].description;

                    // Add Conservation in productInfo 
                    productInfo.appendChild(productConservation);
                    productConservation.className = 'productConservation';
                    productConservation.textContent = productMenu[i].conservation;

                    // Add Ingredient in productInfo 
                    productInfo.appendChild(productIngredients);
                    productIngredients.className = 'productIngredients';
                    productIngredients.textContent = productMenu[i].ingredients;

                    // Add Allergenes in productInfo 
                    productInfo.appendChild(productAllergenes);
                    productAllergenes.className = 'productAllergenes';
                    productAllergenes.textContent = productMenu[i].allergenes;
        };
    };


    // Display products per group
    function displayGroupProduct(category) {
        for (let i = 0; i < productMenu.length; i++) {
            let productEntity =         document.createElement('div');
            let productPicture =        document.createElement('img');
            let productInfo =           document.createElement('div');
            let productName =           document.createElement('div');
            let productDescription =    document.createElement('div');
            let productIngredients =    document.createElement('div');
            let productConservation =   document.createElement('div');
            let productAllergenes =  document.createElement('div');

            if(productMenu[i].category == category){
                // Create productEntity
                productDisplay.appendChild(productEntity);
                productEntity.className = 'productEntity';

                    // Add picture in productEntity 
                    productEntity.appendChild(productPicture);
                    productPicture.className = 'productPicture';
                    productPicture.src = productMenu[i].picture;

                    // Add infoDiv in productEntity 
                    productEntity.appendChild(productInfo);
                    productInfo.className = 'productInfo';

                        // Add Title in productInfo 
                        productInfo.appendChild(productName);
                        productName.className = 'productName';
                        productName.textContent = productMenu[i].title;

                        // Add Description in productInfo 
                        productInfo.appendChild(productDescription);
                        productDescription.className = 'productDescription';
                        productDescription.textContent = productMenu[i].description;


                        // Add Conservation in productInfo 
                        productInfo.appendChild(productConservation);
                        productConservation.className = 'productConservation';
                        productConservation.textContent = productMenu[i].conservation;

                        // Add Ingredient in productInfo 
                        productInfo.appendChild(productIngredients);
                        productIngredients.className = 'productIngredients';
                        productIngredients.textContent = productMenu[i].ingredients;

                        // Add Allergenes in productInfo 
                        productInfo.appendChild(productAllergenes);
                        productAllergenes.className = 'productAllergenes';
                        productAllergenes.textContent = productMenu[i].allergenes;
            }
        };
    };




    let content =           document.querySelector('#content');
    let productModule =     document.createElement('div');
    let productBanner =     document.createElement('div');
    let productTitle =      document.createElement('div');


    // Append productModule to CONTENT
    content.appendChild(productModule);
    productModule.className = 'productModule';

    // Product banner
    productModule.appendChild(productBanner);
    productBanner.className = 'productBanner';
    productBanner.innerHTML = 'Our Pastries';

    // Product title 
    productModule.appendChild(productTitle);
    productTitle.className = 'productTitle';
    productTitle.innerHTML = 'Check our Pastries';



    // Product category selection
    let productDiv =        document.createElement('div');
    let productTabs =       document.createElement('div');
    let merveilleuxBtn =    document.createElement('btn');
    let cramiqueBtn =       document.createElement('btn');
    let cakeBtn =           document.createElement('btn');
    let otherBtn =          document.createElement('btn');

    // Product Div
    productModule.appendChild(productDiv);
    productDiv.className = 'productDiv';

    productDiv.appendChild(productTabs);
    productTabs.className = 'productTabs';

        // Merveilleux btn
        productTabs.appendChild(merveilleuxBtn);
        merveilleuxBtn.className = 'merveilleuxBtn productBtn';
        merveilleuxBtn.innerHTML = 'Nos Merveilleux';

        // Cramique btn
        productTabs.appendChild(cramiqueBtn);
        cramiqueBtn.className = 'cramiqueBtn productBtn';
        cramiqueBtn.innerHTML = 'Nos Cramiques';

        // Cake btn
        productTabs.appendChild(cakeBtn);
        cakeBtn.className = 'cakeBtn productBtn';
        cakeBtn.innerHTML = 'Nos Gateaux';

        // Otther btn
        productTabs.appendChild(otherBtn);
        otherBtn.className = 'otherBtn productBtn';
        otherBtn.innerHTML = 'Les Autres';




    // Product display
    let productDisplay =    document.createElement('div');
    productDiv.appendChild(productDisplay);
    productDisplay.className = 'productDisplay';

    displayAllProducts();

        // On MerveilleuxBtn click
        merveilleuxBtn.onclick = function() {
            // Remove all DOM children elements
            productDisplay.replaceChildren();
            displayGroupProduct("merveilleux");
        };

        // On CramiqueBtn click
        cramiqueBtn.onclick = function() {
            // Remove all DOM children elements
            productDisplay.replaceChildren();
            displayGroupProduct("cramique");
        };

        // On cakeBtn click
        cakeBtn.onclick = function() {
            // Remove all DOM children elements
            productDisplay.replaceChildren();
            displayGroupProduct("gateau");
        };

        // On otherBtn click
        otherBtn.onclick = function() {
            // Remove all DOM children elements
            productDisplay.replaceChildren();
            displayGroupProduct("other");
        };
};