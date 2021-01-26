// plus icon click number increase
const plusIcon = document.getElementById('plus-icon');
plusIcon.addEventListener('click', function() {
    
    const itemNumber = document.getElementById('item-number').value;
    const pargeInt = parseInt(itemNumber);
    const total = pargeInt + 1;
    document.getElementById('item-number').value = total;

    // const priceText = document.getElementById('price1').innerText;
    // const pargeInt = parseInt(priceText);
    // const result = pargeInt * numberTotal;
    // document.getElementById('price1').innerText = result;
})

// minus icon click number decrease
const minusIcon = document.getElementById('minus-icon');
minusIcon.addEventListener('click', function() {
    
    const itemNumber = document.getElementById('item-number').value;
    const pargeInt = parseInt(itemNumber);
    const total = pargeInt - 1;
    document.getElementById('item-number').value = total;
})



