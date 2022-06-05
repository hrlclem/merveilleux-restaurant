export default function contactDisplay() {   

    let content =               document.querySelector('#content');
    let contactModule =         document.createElement('div');
    let contactBanner =         document.createElement('div');
    let mapTitle =             document.createElement('div')
    let mapDiv =                document.createElement('div');
    let formTitle =             document.createElement('div');

    // Append contactModule to CONTENT
    content.appendChild(contactModule);
    contactModule.className = 'contactModule';

    // Contact banner
    contactModule.appendChild(contactBanner);
    contactBanner.className = 'contactBanner';
    contactBanner.innerHTML = 'Contact Us';


    contactModule.appendChild(mapTitle);
    mapTitle.className = 'formTitle';
    mapTitle.innerHTML = 'Come see us in Tokyo !';
    
    contactModule.appendChild(mapDiv);
    mapDiv.className = 'mapDiv';
    mapDiv.innerHTML = '<div class="mapouter"><div class="gmap_canvas"><iframe class="gmap" width="100%" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=aux%20merveilleux%20de%20fred%20tokyo&t=&z=17&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><a href="https://fmovies-online.net">fmovies</a><br><style>.mapouter{position:relative;text-align:right;height:500px;width:702px;}</style><a href="https://www.embedgooglemap.net">embed google maps into website</a><style>.gmap_canvas {overflow:hidden;background:none!important;height:500px;width:100%;}</style></div></div>';

    contactModule.appendChild(formTitle);
    formTitle.className = 'formTitle';
    formTitle.innerHTML = 'Feel free to leave us a message';

    // Contact form
    let contactForm =       document.createElement('div');
    let postForm =          document.createElement('form');
    let nameLabel =         document.createElement('label');
    let nameInput =         document.createElement('input');
    let emailLabel =        document.createElement('label');
    let emailInput =        document.createElement('input');
    let phoneLabel =        document.createElement('label');
    let phoneInput =        document.createElement('input');
    let msgLabel =          document.createElement('label');
    let msgInput =          document.createElement('input');
    let submitInput =       document.createElement('input');

    contactModule.appendChild(contactForm);
    contactForm.className = 'contactForm';

    contactForm.appendChild(postForm);

        // Name
        postForm.appendChild(nameLabel);
        nameLabel.className = 'label';
        nameLabel.for = 'name';
        nameLabel.innerHTML = 'Name';
        
        let br = document.createElement('br');
        postForm.appendChild(br);

        postForm.appendChild(nameInput);
        nameInput.className = 'input';
        nameInput.type = 'text';
        nameInput.id = 'name';
        nameInput.name = 'name';
        nameInput.placeholder = 'Please enter your name';

        let br1 = document.createElement('br');
        postForm.appendChild(br1);


        // Email
        postForm.appendChild(emailLabel);
        emailLabel.className = 'label';
        emailLabel.for = 'mail';
        emailLabel.innerHTML = 'E-mail';

        let br2 = document.createElement('br');
        postForm.appendChild(br2);

        postForm.appendChild(emailInput);
        emailInput.className = 'input';
        emailInput.type = 'text';
        emailInput.id = 'mail';
        emailInput.name = 'mail';
        emailInput.placeholder = 'Please enter your e-mail address';

        let br3 = document.createElement('br');
        postForm.appendChild(br3);


        // Phone 
        postForm.appendChild(phoneLabel);
        phoneLabel.className = 'label';
        phoneLabel.for = 'phone';
        phoneLabel.innerHTML = 'Phone number';

        let br4 = document.createElement('br');
        postForm.appendChild(br4);

        postForm.appendChild(phoneInput);
        phoneInput.className = 'input';
        phoneInput.type = 'text';
        phoneInput.id = 'phone';
        phoneInput.name = 'phone';
        phoneInput.placeholder = 'Enter your phone number';

        postForm.appendChild(br);


        // Message 
        postForm.appendChild(msgLabel);
        msgLabel.className = 'label';
        msgLabel.for = 'message';
        msgLabel.innerHTML = 'Your message';

        postForm.appendChild(br);

        postForm.appendChild(msgInput);
        msgInput.className = 'inputMessage';
        msgInput.type = 'text';
        msgInput.id = 'message';
        msgInput.name = 'message';
        msgInput.placeholder = 'Feel free to add your message';

        postForm.appendChild(br);


        // Submit 
        postForm.appendChild(submitInput);
        submitInput.className = 'submitBtn';
        submitInput.type = 'submit';
        submitInput.value = 'Send the message';

        postForm.appendChild(br);





// QUALITY BLOCK
        // Set up frederic block info div
        let blockWhite =        document.createElement('div');
        let separatorBlock =    document.createElement('div');
        let iconSeparator =     document.createElement('img');
        let allQualityBlock =   document.createElement('div');

        // Append blockInfoWhite to homepageModule
        contactModule.appendChild(blockWhite);
        blockWhite.className = 'ourWork blockInfoWhite';

        // Append general infos on blockInfo to Module
        blockWhite.appendChild(separatorBlock);
        separatorBlock.className = 'separatorBlock';

        separatorBlock.appendChild(iconSeparator);
        iconSeparator.className = 'iconSeparator';
        iconSeparator.src  = './src/img/separator.png'


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
                iconQuality1.src  = './src/img/artisan.svg'

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
                iconQuality2.src  = './src/img/available.webp'

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
                iconQuality3.src  = './src/img/gourmand.svg'

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
                iconQuality4.src  = './src/img/local.svg'

                qualityBlock4.appendChild(qualityTitle4);
                qualityTitle4.className = 'qualityTitle';
                qualityTitle4.innerHTML = 'Local';


                qualityBlock4.appendChild(qualityText4);
                qualityText4.className = 'qualityText';
                qualityText4.innerHTML = 'Everything is made on the spot.';




};