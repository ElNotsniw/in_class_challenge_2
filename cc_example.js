// Task 1

// let products = [
//     {name: "Laptop", price: 1200, category: "Electronics"},
//     {name: "Mouse", price: 30, category: "Electronics"}
// ];

// function getProductsByCategory(products, category) {
//     return products.filter(product => product.category === category)
// }


// console.log(getProductsByCategory(products, "Electronics"));




// Task 2

// function applyDiscount(products, discountRate) {
//     return products.map(product => ({
//         ...product, 
//         price: product.price - (product.price * discountRate)
//     }
        
//     ))
// }


// console.log(applyDiscount(products, .1))




// Task 3

// let sales = [250, 300, 150, 900, 1200];

// function calculateTotalRevenue(sales) {
    
//     return sales.reduce((total, sale)=> total + item, 0)
// }


// console.log(calculateTotalRevenue(sales))





//Task 4

let employee = {
    name: "John Doe",
    salary: 50000,
    position: "Manager"
}


console.log(employee)               // No change


function updateSalary(employee, percentageIncrease) {
    employee.salary = employee.salary + (employee.salary * percentageIncrease)

}


updateSalary(employee, 0.1)

console.log(updateSalary(employee, .1))         // Updated Salary