function calculateTotal() {
    let total = 0;

    // Get the selected size
    let size = document.querySelector('input[name="size"]:checked').value;
    if (size === 'small') {
        total += 99;
    } else if (size === 'medium') {
        total += 199;
    } else if (size === 'large') {
        total += 399;
    }

    // Check if deep pan is selected
    let crust = document.querySelector('input[name="crust"]:checked').value;
    if (crust === 'deep') {
        total += 20;
    }

    // Add the cost of selected toppings
    let toppings = document.querySelectorAll('input[name="toppings"]:checked');
    toppings.forEach(function(topping) {
        if (topping.value === 'mushrooms') {
            total += 15;
        } else if (topping.value === 'olives') {
            total += 10;
        } else if (topping.value === 'fingernail') {
            total += 30;
        } else if (topping.value === 'spicy beef') {
            total += 20;
        }
    });

    // Check if home delivery is selected
    let delivery = document.querySelector('input[name="delivery"]:checked').value;
    if (delivery === 'delivery') {
        total += 25;
    }

    // Display the total cost
    document.getElementById('totalCost').textContent ="₹" + total;
}