import Tooltip from './ninja-ui/tooltip';
import Dropdown from './ninja-ui/dropdown';
import Tabs from './ninja-ui/tabs';
import Snackbar from './ninja-ui/snackbar';

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

const tabs = new Tabs(document.querySelector('.tabs'));

tabs.init();

// create snackbar

const snackbar = new Snackbar();
snackbar.init();

const button = document.querySelector('button');
button.addEventListener('click', () => {
    snackbar.show('Hey there !!');
})