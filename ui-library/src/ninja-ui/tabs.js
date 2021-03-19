import './styles/tabs.css';

class Tabs {
    constructor(container) {
        this.container = container;
        this.tabs = container.querySelectorAll('.trigger');
    }
    init() {
        this.tabs.forEach(element => {
            element.addEventListener('click', e=> {
              this.toggleTabs(e);
              this.toggleContent(e);  
            })
        });
    }
    toggleTabs(e) {
        // remove current active classes
        this.tabs.forEach(element => element.classList.remove('active'));
        //add new active class to clicked tab
        e.target.classList.add('active');
    }
    toggleContent(e) {
        // remove current active classes from content
        this.container.querySelectorAll('.content').forEach(item => {
            item.classList.remove('active');
        })
        // add new active class to content
        const selector = e.target.getAttribute('data-target');
        const content = this.container.querySelector(selector);
        content.classList.add('active');
    }
}

export {Tabs as default};