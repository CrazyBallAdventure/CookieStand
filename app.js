`use strict`

function getRandom(max, min){
   return Math.random() * (max - min) + min;
}

let seattleSales = {
    location: "seattle",
    minSales: 23,
    maxSales: 65,
    avg: 6.3,
    hoursOfOperation: ["6am", "7am", "8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm", "8pm"],
    customersPerHour: function() {
        console.log(this.maxSales);
        console.log(this.minSales);
        getRandom(this.maxSales, this.minSales);
        let customers = []
        for(let i = 0; i < 14; i++){
            let numberofCustomers = getRandom(this.maxSales, this.minSales)
            customers.push(numberofCustomers);
        }
        return customers;
    },
    getCookiesSold: function() {
        let customersatEachHour = this.customersPerHour()
        let cookiesSold = []
        for(let i = 0; i < this.hoursOfOperation.length; i++){
            let numberofCookies = Math.ceil(6.3 * customers);
            cookiesSold.push(numberofCookies);
        }
        return getCookiesSold;
    }
    // cookiesPerHour: [],
    // getCookies: function() {
    //     for(let i =0; i < this.hoursOfOperation.length; i++) {
    //         console.log('seattle avg cookies/sale', this.avg);
    //         console.log('seattle avg customers/hour', this.customersPerHour());
    //         this.cookiesPerHour.push(Math.ceil(this.avg * this.customersPerHour()));
    //     }
    //     return this.cookiesPerHour;
    // },

    // calcCustomer: function () {
    //     return Math.floor(Math.random() * seattleSales.minSales + 1);
    // },

    // calcAvrgCustomer: function () {
    //     return Math.floor(Math.random() * seattleSales.avg + 1);
    // },
}

// let hoursDemo = ["6am", "7am", "8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm", "8pm"]
// let cookieDemo = [152, 265, 202, 353, 227, 221, 202, 378, 171, 309, 215, 189, 189, 385]
// let hoursArray = document.querySelectorAll('.output')
// for(let i = 0; i < hoursDemo.length; i++) {
//     hoursDemo[i].innerHTML
//     let variable = document.createElement("li");
//     variable.innerHTML = `${hoursDemo[i]}: ${cookieDemo[i]} cookies`;
//     hoursArray.append(variable);
// }


// let tokyoSales = {
//     location: "tokyo",
//     minSales: 3,
//     maxSales: 24,
//     avg: 1.2,

//     calcCustomer: function () {
//         return Math.floor(Math.random() * tokyoSales.minSales + 1);
//     },

//     calcAvrgCustomer: function () {
//         return Math.floor(Math.random() * tokyoSales.avg + 1);
//     },
// }




// let dubaiSales = {
//     location: "dubai",
//     minSales: 11,
//     maxSales: 38,
//     avg: 3.7,

//     calcCustomer: function () {
//         return Math.floor(Math.random() * dubaiSales.minSales + 1);
//     },

//     calcAvrgCustomer: function () {
//         return Math.floor(Math.random() * dubaiSales.avg + 1);
//     },
// }




// let parisSales = {
//     location: "paris",
//     minSales: 20,
//     maxSales: 38,
//     avg: 2.3,

//     calcCustomer: function () {
//         return Math.floor(Math.random() * parisSales.minSales + 1);
//     },

//     calcAvrgCustomer: function () {
//         return Math.floor(Math.random() * parisSales.avg + 1);
//     },
// }




// let limaSales = {
//     location: "lima",
//     minSales: 2,
//     maxSales: 16,
//     avg: 4.6,

//     calcCustomer: function () {
//         return Math.floor(Math.random() * limaSales.minSales + 1);
//     },

//     calcAvrgCustomer: function () {
//         return Math.floor(Math.random() * limaSales.avg + 1);
//     },
// }