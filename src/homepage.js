import footerDisplay from "./footer.js";
import historyDisplay from "./history.js";
import productsDisplay from "./products.js";
import headerDisplay from "./header.js";


export default function homePageDisplay() {    
    let content =               document.querySelector('#content');
    let homepageModule =        document.createElement('div');


// HOME VIDEO
    // Append homepageModule to CONTENT
    content.appendChild(homepageModule);
    homepageModule.className = 'homepageModule';


        // Set up video div
        let homeVideo =         document.createElement('div');
        let backVideo =         document.createElement('video');
        let sourceBackVideo =   document.createElement('source');

        // Append homeVideo to homepageModule
        homepageModule.appendChild(homeVideo);
        homeVideo.className = 'homeVideo';

            // Append video to homeVideo
            homeVideo.appendChild(backVideo);
            backVideo.className = 'backVideo';
            backVideo.autoplay = true;
            backVideo.muted = true;
            backVideo.loop = true;

            // Append source to backVideo
            backVideo.appendChild(sourceBackVideo);
            sourceBackVideo.src  = '../src/img/merveilleuxVid.mp4'
            sourceBackVideo.type  = 'video/mp4'





// PRODUCT BLOCK INFO
        // Set up products block info div
        let blockInfo1 =         document.createElement('div');
        let productsTitle1 =     document.createElement('div');
        let productsText1 =      document.createElement('div');
        let productsPic1 =       document.createElement('div');

        // Append blockInfo to homepageModule
        homepageModule.appendChild(blockInfo1);
        blockInfo1.className = 'blockInfo products';

        // Append product info to product block
        blockInfo1.appendChild(productsTitle1);
        productsTitle1.className = 'productsTitle titleField';
        productsTitle1.innerHTML = 'Our products';

        blockInfo1.appendChild(productsText1);
        productsText1.className = 'productsText textField';
        productsText1.innerHTML = ' Our products are made daily ';

        blockInfo1.appendChild(productsPic1);
        productsPic1.className = 'productsPic';

            // Add products pictures
            let merveilleuxPic1 = document.createElement('img');
            let merveilleuxPic2 = document.createElement('img');
            let merveilleuxPic3 = document.createElement('img');
            let merveilleuxPic4 = document.createElement('img');

            merveilleuxPic1.src  = '../src/img/merveilleux.png'
            productsPic1.appendChild(merveilleuxPic1);
            merveilleuxPic1.className = 'merveilleuxPic';

            merveilleuxPic2.src  = '../src/img/incroyable.png'
            productsPic1.appendChild(merveilleuxPic2);
            merveilleuxPic2.className = 'merveilleuxPic';

            merveilleuxPic3.src  = '../src/img/merveilleux.png'
            productsPic1.appendChild(merveilleuxPic3);
            merveilleuxPic3.className = 'merveilleuxPic';

            merveilleuxPic4.src  = '../src/img/incroyable.png'
            productsPic1.appendChild(merveilleuxPic4);
            merveilleuxPic4.className = 'merveilleuxPic';


        // Create product button
        let productBtn = document.createElement('button');

        blockInfo1.appendChild(productBtn);
        productBtn.className = 'productsButton buttonField';
        productBtn.innerHTML = 'Our products';
        productBtn.onclick = function() {
            // Remove all DOM children elements
            content.replaceChildren();

            headerDisplay();
            productsDisplay();
            footerDisplay();
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
    };




// INTER-IMAGE
        let interImg1 = document.createElement('div');

        // Append blockInfo to homepageModule
        homepageModule.appendChild(interImg1);
        interImg1.className = 'interImg1';



// ARTISAN BLOCK
        // Set up products block info div
        let blockInfo2 =        document.createElement('div');
        let artisanTitle =      document.createElement('div');
        let artisanText =       document.createElement('div');
        let bold =              document.createElement('span');
        let artisanButton =     document.createElement('button');


        // Append blockInfo2 to homepageModule
        homepageModule.appendChild(blockInfo2);
        blockInfo2.className = 'blockInfo artisan';

        // Append title info to product block
        blockInfo2.appendChild(artisanTitle);
        artisanTitle.className = 'artisanTitle titleField';
        artisanTitle.innerHTML = 'Artisan';

        blockInfo2.appendChild(artisanText);
        artisanText.className = 'artisanText textField';
        artisanText.innerHTML = "Our company showcases traditional specialties from Flanders, one of which is The Merveilleux. Our products are made in each store using traditional methods in front of our customers. Our company showcases traditional specialties from Flanders, one of which is The Merveilleux. Our products are made in each store using traditional methods in front of our customers. Our company showcases traditional specialties from Flanders, one of which is The Merveilleux. Our products are made in each store using traditional methods in front of our customers. Our company showcases traditional specialties from Flanders, one of which is The Merveilleux. Our products are made in each store using traditional methods in front of our customers. Our company showcases traditional specialties from Flanders, one of which is The Merveilleux. Our products are made in each store using traditional methods in front of our customers. Le Merveilleux by Frédéric Vaucamps is a must-have dessert made by our establishment. Its secret? An inimitable meringue";

        blockInfo2.appendChild(bold);
        bold.className = 'bold';
        bold.innerHTML = ' Discover our history ';


        blockInfo2.appendChild(artisanButton);
        artisanButton.className = 'artisanButton buttonField';
        artisanButton.innerHTML = 'About Us';
        artisanButton.onclick = function() {
            // Remove all DOM children elements
            content.replaceChildren();

            headerDisplay();
            historyDisplay();
            footerDisplay();
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
    };




// INTER-IMAGE2
        let interImg2 = document.createElement('div');

        // Append blockInfo to homepageModule
        homepageModule.appendChild(interImg2);
        interImg2.className = 'interImg2';

        // Add info pictures
        let savoirFaire1 = document.createElement('img');
        let savoirFaire2 = document.createElement('img');
        let savoirFaire3 = document.createElement('img');

        savoirFaire1.src  = '../src/img/savoirfaireimg1.png'
        interImg2.appendChild(savoirFaire1);
        savoirFaire1.className = 'savoirFaire';

        savoirFaire2.src  = '../src/img/savoirfaireimg2.png'
        interImg2.appendChild(savoirFaire2);
        savoirFaire2.className = 'savoirFaire';

        savoirFaire3.src  = '../src/img/savoirfaireimg3.png'
        interImg2.appendChild(savoirFaire3);
        savoirFaire3.className = 'savoirFaire';




// FREDERIC BLOCK
        // Set up frederic block info div
        let blockInfo3 =        document.createElement('div');
        let fredericTitle =     document.createElement('div');
        let fredericText =      document.createElement('div');


        // Append blockInfo3 to homepageModule
        homepageModule.appendChild(blockInfo3);
        blockInfo3.className = 'frederic blockInfo';

        // Append title info to product block
        blockInfo3.appendChild(fredericTitle);
        fredericTitle.className = 'fredericTitle titleField';
        fredericTitle.innerHTML = 'Frederic';

        blockInfo3.appendChild(fredericText);
        fredericText.className = 'fredericText textField';
        fredericText.innerHTML = "Frédéric Vaucamps is a pastry chef from the North of France. During the 1980s, his career in pastry took him back to a cake dear to his heart: The Merveilleux.";



// INTER-IMAGE
        let interImg3 = document.createElement('div');

        // Append blockInfo to homepageModule
        homepageModule.appendChild(interImg3);
        interImg3.className = 'interImg1';



// QUALITY BLOCK
        // Set up frederic block info div
        let blockWhite =        document.createElement('div');
        let workTitle =         document.createElement('div');
        let workText =          document.createElement('div');
        let separatorBlock =    document.createElement('div');
        let iconSeparator =     document.createElement('img');
        let allQualityBlock =   document.createElement('div');

        // Append blockInfoWhite to homepageModule
        homepageModule.appendChild(blockWhite);
        blockWhite.className = 'ourWork blockInfoWhite';

        // Append general infos on blockInfo to homepageModule
        blockWhite.appendChild(workTitle);
        workTitle.className = 'ourWorkTitle titleField';
        workTitle.innerHTML = 'Our work';

        blockWhite.appendChild(workText);
        workText.className = 'ourWorkText textField';
        workText.innerHTML = 'We are proud to offer you fresh products daily close to your place.';

        blockWhite.appendChild(separatorBlock);
        separatorBlock.className = 'separatorBlock';

        separatorBlock.appendChild(iconSeparator);
        iconSeparator.className = 'iconSeparator';
        iconSeparator.src  = '../src/img/separator.png'


        // Append allQualityBlock to blockWhite
        blockWhite.appendChild(allQualityBlock);
        allQualityBlock.className = 'allQualityBlocks';

            let qualityBlock1 =     document.createElement('div');
            let qualityBlock2 =     document.createElement('div');
            let qualityBlock3 =     document.createElement('div');
            let qualityBlock4 =     document.createElement('div');

            let iconQuality1 =      document.createElement('img');
            let iconQuality2 =      document.createElement('img');
            let iconQuality3 =      document.createElement('img');
            let iconQuality4 =      document.createElement('img');

            let qualityTitle1 =     document.createElement('div');
            let qualityTitle2 =     document.createElement('div');
            let qualityTitle3 =     document.createElement('div');
            let qualityTitle4 =     document.createElement('div');

            let qualityText1 =      document.createElement('div');
            let qualityText2 =      document.createElement('div');
            let qualityText3 =      document.createElement('div');
            let qualityText4 =      document.createElement('div');


            // Quality Block Artisanat
            allQualityBlock.appendChild(qualityBlock1);
            qualityBlock1.className = 'qualityBlock';

                qualityBlock1.appendChild(iconQuality1);
                iconQuality1.className = 'iconQuality';
                iconQuality1.src  = '../src/img/artisan.svg'

                qualityBlock1.appendChild(qualityTitle1);
                qualityTitle1.className = 'qualityTitle';
                qualityTitle1.innerHTML = 'Artisanat';


                qualityBlock1.appendChild(qualityText1);
                qualityText1.className = 'qualityText';
                qualityText1.innerHTML = 'Everything is handmade, traditionaly.';


            // Quality Block Disponible
            allQualityBlock.appendChild(qualityBlock2);
            qualityBlock2.className = 'qualityBlock';

                qualityBlock2.appendChild(iconQuality2);
                iconQuality2.className = 'iconQuality';
                iconQuality2.src  = '../src/img/available.webp'

                qualityBlock2.appendChild(qualityTitle2);
                qualityTitle2.className = 'qualityTitle';
                qualityTitle2.innerHTML = 'Disponible';


                qualityBlock2.appendChild(qualityText2);
                qualityText2.className = 'qualityText';
                qualityText2.innerHTML = 'Everything close to your place.';



            // Quality Block Gourmand
            allQualityBlock.appendChild(qualityBlock3);
            qualityBlock3.className = 'qualityBlock';
            
                qualityBlock3.appendChild(iconQuality3);
                iconQuality3.className = 'iconQuality';
                iconQuality3.src  = '../src/img/gourmand.svg'

                qualityBlock3.appendChild(qualityTitle3);
                qualityTitle3.className = 'qualityTitle';
                qualityTitle3.innerHTML = 'Gourmand';

                qualityBlock3.appendChild(qualityText3);
                qualityText3.className = 'qualityText';
                qualityText3.innerHTML = 'A delicious and unique taste.';



            // Quality Block Local
            allQualityBlock.appendChild(qualityBlock4);
            qualityBlock4.className = 'qualityBlock';
                            
                qualityBlock4.appendChild(iconQuality4);
                iconQuality4.className = 'iconQuality';
                iconQuality4.src  = '../src/img/local.svg'

                qualityBlock4.appendChild(qualityTitle4);
                qualityTitle4.className = 'qualityTitle';
                qualityTitle4.innerHTML = 'Local';


                qualityBlock4.appendChild(qualityText4);
                qualityText4.className = 'qualityText';
                qualityText4.innerHTML = 'Everything is made on the spot.';

};