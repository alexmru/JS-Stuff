import Tooltip from './ninja-ui/tooltip';
import Dropdown from './ninja-ui/dropdown';

// creare tooltip

const tooltip = new Tooltip(document.querySelector('.tooltip'));

tooltip.init();

// creare dropdown-uri

const dropdowns = document.querySelectorAll('.dropdown');

console.log(dropdowns);

dropdowns.forEach(element => {
    const instance = new Dropdown(element);
    instance.init();
});