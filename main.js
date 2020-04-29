const containerItems = document.querySelector('.container-items');
const flexDirection = document.querySelector('#flx-direction');
const flexWrap = document.querySelector('#flx-wrap');
const flexJustify = document.querySelector('#flx-justify');
const flexAlign = document.querySelector('#flx-align');
const itemsQuantity = document.querySelector('#items-qnt');
const itemsContent = document.querySelector('#items-content');
const inputsFlexProperties = document.querySelectorAll('.input-element');

window.addEventListener('load', function() {
    setFlexDirection();
    setFlexWrap();
    setFlexJustify();
    setFlexAlign();
    addItems();
    getContainerCss();
    
    flexDirection.addEventListener('change', setFlexDirection);
    flexWrap.addEventListener('change', setFlexWrap);
    flexJustify.addEventListener('change', setFlexJustify);
    flexAlign.addEventListener('change', setFlexAlign);
    itemsQuantity.addEventListener('keyup', addItems);
    itemsContent.addEventListener('keyup', setItemsContent);
    
    for (const inputProperty of inputsFlexProperties) {
        inputProperty.addEventListener('change', getContainerCss);
    }
});

const getContainerCss = () => {
    document.querySelector('#container-css').textContent = `.container {
    display; flex,
    flex-direction: ${flexDirection.value},
    flex-wrap: ${flexWrap.value},
    justify-content: ${flexJustify.value},
    align-items: ${flexAlign.value}
}`;
}

const setFlexDirection = () =>
    containerItems.style.flexDirection = flexDirection.value;

const setFlexWrap = () => 
    containerItems.style.flexWrap = flexWrap.value;

const setFlexJustify = () =>
    containerItems.style.justifyContent = flexJustify.value;

const setFlexAlign = () =>
    containerItems.style.alignItems = flexAlign.value;

const addItems = () => {
    const qnt = parseInt(itemsQuantity.value);
    const content = itemsContent.value;
    containerItems.innerHTML = '';

    for (let i = 0; i < qnt; i++) {
        const item = document.createElement('div');
        item.classList.add('item');
        item.textContent = content;
        containerItems.append(item);
    }
};

const setItemsContent = () => {
    const content = itemsContent.value;
    const items = document.querySelectorAll('.item');

    for (const item of items) {
        item.textContent = content;
    }
};