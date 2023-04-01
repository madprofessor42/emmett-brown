const increase = document.querySelector('#increase');
const decrease = document.querySelector('#decrease');
const element = document.querySelector('.min_max')


increase.addEventListener('click', () => {
    const currentMaxWidth = element.style.maxWidth || '100px';
    const currentMaxHeight = element.style.maxHeight || '100px';

    const valueMaxWidth = Number(currentMaxWidth.replace(/[^0-9]+/, ''));
    const valueMaxHeight = Number(currentMaxHeight.replace(/[^0-9]+/, ''));

    element.style.maxWidth = (valueMaxWidth + 20) + 'px'
    element.style.maxHeight = (valueMaxHeight + 20) + 'px'

})

decrease.addEventListener('click', () => {
    const currentMaxWidth = element.style.maxWidth || '100px';
    const currentMaxHeight = element.style.maxHeight || '100px';

    const valueMaxWidth = Number(currentMaxWidth.replace(/[^0-9]+/, ''));
    const valueMaxHeight = Number(currentMaxHeight.replace(/[^0-9]+/, ''));

    element.style.maxWidth = (valueMaxWidth - 20) + 'px'
    element.style.maxHeight = (valueMaxHeight - 20) + 'px'
})