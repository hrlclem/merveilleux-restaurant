export default function historyDisplay() {   

    let content =               document.querySelector('#content');
    let historyModule =         document.createElement('div');
    let blockInfoWhite =        document.createElement('div');
    let gridBlockHistory =      document.createElement('div');

    let historyBanner1 =        document.createElement('div');
    let historyBanner2 =        document.createElement('div');
    let historyBanner3 =        document.createElement('div');

    let historyText1 =          document.createElement('div');
    let historyText2 =          document.createElement('div');
    let historyText3 =          document.createElement('div');

    let fredericHistoryTitle1 = document.createElement('div');
    let fredericHistoryTitle2 = document.createElement('div');
    let fredericHistoryTitle3 = document.createElement('div');

    let fredericHistoryText1 =  document.createElement('div');
    let fredericHistoryText2 =  document.createElement('div');
    let fredericHistoryText3 =  document.createElement('div');

    let imageBanner1 =          document.createElement('div');
    let imageBanner2 =          document.createElement('div');
    let imageBanner3 =          document.createElement('div');

    let historyImg1 =           document.createElement('img');
    let historyImg2 =           document.createElement('img');
    let historyImg3 =           document.createElement('img');




    // Append historyMoule to CONTENT
    content.appendChild(historyModule);
    historyModule.className = 'historyModule';

        // Set up blockInfoWhite
        historyModule.appendChild(blockInfoWhite);
        blockInfoWhite.className = 'ourWork blockInfoWhite';

        // Set up gridBlockHistory
        blockInfoWhite.appendChild(gridBlockHistory);
        gridBlockHistory.className = 'gridBlockHistory';


        // History banner 1
        gridBlockHistory.appendChild(historyBanner1);
        historyBanner1.className = 'fredericHistory historyBanner';

            historyBanner1.appendChild(historyText1);
            historyText1.className = 'historyText';

            historyText1.appendChild(fredericHistoryTitle1);
            fredericHistoryTitle1.className = 'fredericHistoryTitle';        
            fredericHistoryTitle1.innerHTML = 'Frédéric Vaucamps'; 

            historyText1.appendChild(fredericHistoryText1);
            fredericHistoryText1.className = 'fredericHistoryText';
            fredericHistoryText1.innerHTML = 'Frédéric Vaucamps est un pâtissier originaire du nord de la France. Dans les années 80, il revisite dans sa pâtisserie, un gâteau qui lui est cher : le Merveilleux. Il s’approprie la recette en y apportant de la légèreté. En 1997, il décide de donner le nom de son gâteau phare à sa boutique de Lille, « Aux Merveilleux de Fred » est né. Sa version du Merveilleux est vite devenue un incontournable, tout comme les cramiques et les gaufres flamandes.<br><br>Frédéric allie, à la fois, savoir-faire et tradition afin de proposer des produits de qualité dans des boutiques incarnant l’élégance à la française.';

            historyBanner1.appendChild(imageBanner1);
            imageBanner1.className = 'imageBanner';

                imageBanner1.appendChild(historyImg1);
                historyImg1.src  = '../src/img/savoirfaireimg1.png';
                historyImg1.className = 'historyImg';



        // History banner 2
        gridBlockHistory.appendChild(historyBanner2);
        historyBanner2.className = 'savoirFaireHistory historyBanner';

            historyBanner2.appendChild(imageBanner2);
            imageBanner2.className = 'imageBanner';

                imageBanner2.appendChild(historyImg2);
                historyImg2.src  = '../src/img/merveilleuxMaking.png';
                historyImg2.className = 'historyImg';

            historyBanner2.appendChild(historyText2);
            historyText2.className = 'historyText';

            historyText2.appendChild(fredericHistoryTitle2);
            fredericHistoryTitle2.className = 'fredericHistoryTitle';        
            fredericHistoryTitle2.innerHTML = 'Savoir Faire'; 

            historyText2.appendChild(fredericHistoryText2);
            fredericHistoryText2.className = 'fredericHistoryText';
            fredericHistoryText2.innerHTML = 'Frédéric Vaucamps est un pâtissier originaire du nord de la France. Dans les années 80, il revisite dans sa pâtisserie, un gâteau qui lui est cher : le Merveilleux. Il s’approprie la recette en y apportant de la légèreté. En 1997, il décide de donner le nom de son gâteau phare à sa boutique de Lille, « Aux Merveilleux de Fred » est né. Sa version du Merveilleux est vite devenue un incontournable, tout comme les cramiques et les gaufres flamandes.<br><br>Frédéric allie, à la fois, savoir-faire et tradition afin de proposer des produits de qualité dans des boutiques incarnant l’élégance à la française.';

        // History banner 3
        gridBlockHistory.appendChild(historyBanner3);
        historyBanner3.className = 'merveilleuxHistory historyBanner';

            historyBanner3.appendChild(historyText3);
            historyText3.className = 'historyText';

            historyText3.appendChild(fredericHistoryTitle3);
            fredericHistoryTitle3.className = 'fredericHistoryTitle';        
            fredericHistoryTitle3.innerHTML = 'Les merveilleuses et les incroyables'; 

            historyText3.appendChild(fredericHistoryText3);
            fredericHistoryText3.className = 'fredericHistoryText';
            fredericHistoryText3.innerHTML = 'Ces petites et délicates gourmandises meringuées évoquent une certaine période de l’histoire de France, celles de la vie mondaine sous le Directoire. Les Incroyables et les Merveilleuses, personnages de l’époque, se rendaient dans des salons pour parler politique, économie mais y venaient surtout pour voir et être vu, pour boire du thé et déguster des pâtisseries.<br><br>Les boutiques « Aux Merveilleux de Fred » au décor baroque et raffiné, parée de nombreux miroirs et de dorures, s’inspirent de cette période historique.<br><br>Fred transmet dans ses pâtisseries sa passion pour l’art de vivre à la française : celle de prendre le temps, d’apprécier les belles et les bonnes choses.';

            historyBanner3.appendChild(imageBanner3);
            imageBanner3.className = 'imageBanner';

                imageBanner3.appendChild(historyImg3);
                historyImg3.src  = '../src/img/historyMerveilleux.png';
                historyImg3.className = 'historyImg';



        // Opening to Everybody banner
        let everybodyBanner =      document.createElement('div');
        let openingtoEverybody =   document.createElement('div');
        let openingTitle =      document.createElement('div');
        let openingText =      document.createElement('div');

        blockInfoWhite.appendChild(everybodyBanner);
        everybodyBanner.className = 'banner';

        everybodyBanner.appendChild(openingtoEverybody);
        openingtoEverybody.className = 'openingtoEverybody';

        openingtoEverybody.appendChild(openingTitle);
        openingTitle.className = 'openingTitle';
        openingTitle.innerHTML = 'Opening to Everybody';

        openingtoEverybody.appendChild(openingText);
        openingText.className = 'openingText';
        openingText.innerHTML = "C’est par amour du goût que Frédéric Vaucamps souhaite partager et faire découvrir ses recettes.Aux Merveilleux de Fred s’est développé, à partir de 2003 : plusieurs boutiques ont vu le jour en France. En parallèle de ces ouvertures sur l'hexagone, depuis 2009, Frédéric a franchi les frontières dans des villes prestigieuses.<br><br>Dans chaque pays, les produits proposés sont identiques. L’objectif est que chaque client, à Toronto, à Londres ou à Lille retrouve la même qualité, le même gout magique et surtout la même gourmandise. ";




// QUALITY BLOCK
        // Set up frederic block info div
        let blockWhite =        document.createElement('div');
        let separatorBlock =    document.createElement('div');
        let iconSeparator =     document.createElement('img');
        let allQualityBlock =   document.createElement('div');

        // Append blockInfoWhite to homepageModule
        blockInfoWhite.appendChild(blockWhite);
        blockWhite.className = 'ourWork blockInfoWhite';

        // Append general infos on blockInfo to Module
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