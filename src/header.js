import footerDisplay from "./footer.js";
import homePageDisplay from "./homepage.js";
import historyDisplay from "./history.js";
import productsDisplay from "./products.js";
import contactDisplay from "./contact.js";

export default function headerDisplay() {    
    let content =               document.querySelector('#content');
    let header =                document.createElement('div');
    let merveilleuxLogo =       document.createElement('img');
    let signatureLogo =         document.createElement('img');
    let locationPin =           document.createElement('img');
    let tabs =                  document.createElement('div');
    let homeTab =               document.createElement('div');
    let menuTab =               document.createElement('div');
    let historyTab =            document.createElement('div');
    let contactTab =            document.createElement('div');


    // Append header to CONTENT
    content.appendChild(header);
    header.className = 'header';

        // Logo set up
        merveilleuxLogo.src  = 'img/logoMerveilleux.png'

        header.appendChild(merveilleuxLogo);
        merveilleuxLogo.className = 'merveilleuxLogo';
        merveilleuxLogo.onclick = function() {
                // Remove all DOM children elements
                content.replaceChildren();
    
                headerDisplay();
                homePageDisplay();
                footerDisplay();
        };

        // Signature set up
        signatureLogo.src  = 'img/logoSignature.svg'
        header.appendChild(signatureLogo);
        signatureLogo.className = 'signatureLogo';
        signatureLogo.onclick = function() {
                // Remove all DOM children elements
                content.replaceChildren();
    
                headerDisplay();
                homePageDisplay();
                footerDisplay();
        };

        // Pin location set up
        locationPin.src  = '../src/img/pinIcon.svg'
        header.appendChild(locationPin);
        locationPin.className = 'locationPin';
        locationPin.onclick = function() {
                // Remove all DOM children elements
                content.replaceChildren();
    
                headerDisplay();
                contactDisplay();
                footerDisplay();
        };


        // Append tabs
        header.appendChild(tabs);
        tabs.className = 'tabs';

            // Home tab
            tabs.appendChild(homeTab);
            homeTab.className = 'homeTab';
            homeTab.innerHTML = 'Home';
            homeTab.onclick = function() {
                    // Remove all DOM children elements
                    content.replaceChildren();
                
                    headerDisplay();
                    homePageDisplay();
                    footerDisplay();
            };

            // Menu tab
            tabs.appendChild(menuTab);
            menuTab.className = 'menuTab';
            menuTab.innerHTML = 'Our products';
            menuTab.onclick = function() {
                    // Remove all DOM children elements
                    content.replaceChildren();
                
                    headerDisplay();
                    productsDisplay();
                    footerDisplay();
            };

            // History tab
            tabs.appendChild(historyTab);
            historyTab.className = 'historyTab';
            historyTab.innerHTML = 'Our history';
            historyTab.onclick = function() {
                    // Remove all DOM children elements
                    content.replaceChildren();
            
                    headerDisplay();
                    historyDisplay();
                    footerDisplay();
                };

            // Contact tab
            tabs.appendChild(contactTab);
            contactTab.className = 'contactTab';
            contactTab.innerHTML = 'Contact Us';
            contactTab.onclick = function() {
                    // Remove all DOM children elements
                    content.replaceChildren();

                    headerDisplay();
                    contactDisplay();
                    footerDisplay();
            };

};
