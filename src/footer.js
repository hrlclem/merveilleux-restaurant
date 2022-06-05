export default function footerDisplay() {    

    let content =   document.querySelector('#content');
    let footer =    document.createElement('div');

    content.appendChild(footer);
    footer.className = 'footerBlock';
    footer.innerHTML = "Clément Hurel © This project have been based on Aux Merveilleux de Fred's website, 2022"


};