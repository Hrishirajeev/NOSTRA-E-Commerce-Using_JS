//For SaleBar Close On Click in collectionsPage---------------------> 
history.scrollRestoration = "manual"; //or can be auto also if needed!!
var C_close = document.getElementById("C_close")
var C_salebar = document.getElementById("C_salebar")
C_close.addEventListener("click",function(){
    C_salebar.style.display="none"
})

//For Collections Page--Product Data & Filter Functionality---------------->

//CODE check for one product! and push!
let product_array = []; //initailizing a new MAIN*product array that holds all products info *36items!

//selecting each-each DOM Id's and storing in product_1 variable
//let product_1 = {
    //id: document.getElementById("mens_party_1"), 
    //image: document.getElementById("mens_party_1_image"),
    //price: document.getElementById("mens_party_1_price").textContent,
    //gender: document.getElementById("mens_party_1_gender").textContent,
    //color: document.getElementById("mens_party_1_color").textContent,
    //occasion: document.getElementById("mens_party_1_occasion").textContent
//};

//product_array.push(product_1); //Push method to push product_1 to main product array!
//console.log(product_1); //Tocheck is it working!
//console.log(product_array); //Tocheck is it working!

//For Collections Page--Product Data & Filter Functionality---------------->

//LOOP to get all id selected at a time and read it the store it in object manner then push to *Main Product array!!
//*letproduct-->temporary object-->changes in each time of loop!

//**LOOPING FIRST MENS CATEGORY ITEMS TO GET AND PUSHING TO ARRAY IN OBJECTS AT LAST.......>
let mens_products = [
    "mens_party_1", "mens_party_2", "mens_party_3", "mens_party_4",
    "mens_beach_1", "mens_beach_2", "mens_beach_3", "mens_beach_4",
    "mens_summer_1", "mens_summer_2", "mens_summer_3", "mens_summer_4",
    "mens_wedding_1", "mens_wedding_2", "mens_wedding_3", "mens_wedding_4"
];

mens_products.forEach(function(id) {

    let card = document.getElementById(id);

    let product = {
        id: card.id,
        image: document.getElementById(id + "_image"),
        price: document.getElementById(id + "_price").textContent,
        gender: document.getElementById(id + "_gender").textContent,
        color: document.getElementById(id + "_color").textContent,
        occasion: document.getElementById(id + "_occasion").textContent
    };

    product_array.push(product);
});

//LOOPING FIRST WOMENS CATEGORY ITEMS TO GET AND PUSHING TO ARRAY IN OBJECTS AT LAST.......>
let womens_products = [
    "womens_party_1", "womens_party_2", "womens_party_3", "womens_party_4",
    "womens_beach_1", "womens_beach_2", "womens_beach_3", "womens_beach_4",
    "womens_summer_1", "womens_summer_2", "womens_summer_3", "womens_summer_4",
    "womens_wedding_1", "womens_wedding_2", "womens_wedding_3", "womens_wedding_4"
];

womens_products.forEach(function(id) {

    let card = document.getElementById(id);

    let product = {
        id: card.id,
        image: document.getElementById(id + "_image"),
        price: document.getElementById(id + "_price").textContent,
        gender: document.getElementById(id + "_gender").textContent,
        color: document.getElementById(id + "_color").textContent,
        occasion: document.getElementById(id + "_occasion").textContent
    };

    product_array.push(product);
});

//LOOPING FIRST UNISEX CATEGORY ITEMS TO GET AND PUSHING TO ARRAY IN OBJECTS AT LAST.......>
let unisex_products = [
    "unisex_1", "unisex_2", "unisex_3", "unisex_4"
];

unisex_products.forEach(function(id) {

    let card = document.getElementById(id);

    let product = {
        id: card.id,
        image: document.getElementById(id + "_image"),
        price: document.getElementById(id + "_price").textContent,
        gender: document.getElementById(id + "_gender").textContent,
        color: document.getElementById(id + "_color").textContent
    };

    product_array.push(product);
});

//Checking All Items of All Each Product(dress) is Pushed via Array and Stored Associatedly!
console.log(product_array);


//-------------Filter Connecting to its items During its CHECK & UNCHECK-------------->
//-------------------------------For Occasion filter--------------------------------->
let occasioncheck=document.getElementsByName("occasioncheck")
let filteroccasion = [];

occasioncheck[0].addEventListener("click", function(event) {

    if (occasioncheck[0].checked) {

        console.log("checked");

        filteroccasion.push(event.target.value);

    } else {

        console.log("unchecked");

        let index = filteroccasion.indexOf(event.target.value);

        filteroccasion.splice(index, 1);
    }

    //To Check and Match to Associated filter products//

    for (let i = 0; i < product_array.length; i++) {

        if (product_array[i].occasion === filteroccasion[0]) {

            document.getElementById(product_array[i].id).style.display = "block";

        } else {

            document.getElementById(product_array[i].id).style.display = "none";

        }

    }

});


occasioncheck[1].addEventListener("click", function(event) {

    if (occasioncheck[1].checked) {

        console.log("checked");

        filteroccasion.push(event.target.value);

    } else {

        console.log("unchecked");

        let index = filteroccasion.indexOf(event.target.value);

        filteroccasion.splice(index, 1);
    }
    //To Check and Match to Associated filter products//

    for (let i = 0; i < product_array.length; i++) {

        if (product_array[i].occasion === filteroccasion[0]) {

            document.getElementById(product_array[i].id).style.display = "block";

        } else {

            document.getElementById(product_array[i].id).style.display = "none";

        }

    }

});
occasioncheck[2].addEventListener("click", function(event) {

    if (occasioncheck[2].checked) {

        console.log("checked");

        filteroccasion.push(event.target.value);

    } else {

        console.log("unchecked");

        let index = filteroccasion.indexOf(event.target.value);

        filteroccasion.splice(index, 1);
    }
    //To Check and Match to Associated filter products//

    for (let i = 0; i < product_array.length; i++) {

        if (product_array[i].occasion === filteroccasion[0]) {

            document.getElementById(product_array[i].id).style.display = "block";

        } else {

            document.getElementById(product_array[i].id).style.display = "none";

        }

    }

});
occasioncheck[3].addEventListener("click", function(event) {

    if (occasioncheck[3].checked) {

        console.log("checked");

        filteroccasion.push(event.target.value);

    } else {

        console.log("unchecked");

        let index = filteroccasion.indexOf(event.target.value);

        filteroccasion.splice(index, 1);
    }
    //To Check and Match to Associated filter products//

    for (let i = 0; i < product_array.length; i++) {

        if (product_array[i].occasion === filteroccasion[0]) {

            document.getElementById(product_array[i].id).style.display = "block";

        } else {

            document.getElementById(product_array[i].id).style.display = "none";

        }

    }

});

//-------------------------------For Gender filter--------------------------------->
let gendercheck=document.getElementsByName("gendercheck")
let filtergender = [];

gendercheck[0].addEventListener("click", function(event) {

    if (gendercheck[0].checked) {

        console.log("checked");

        filtergender.push(event.target.value);

    } else {

        console.log("unchecked");

        let index = filtergender.indexOf(event.target.value);

        filtergender.splice(index, 1);
    }
    //To Check and Match to Associated filter products//

    for (let i = 0; i < product_array.length; i++) {

        if (product_array[i].gender === filtergender[0]) {

            document.getElementById(product_array[i].id).style.display = "block";

        } else {

            document.getElementById(product_array[i].id).style.display = "none";

        }

    }
    
});
gendercheck[1].addEventListener("click", function(event) {

    if (gendercheck[1].checked) {

        console.log("checked");

        filtergender.push(event.target.value);

    } else {

        console.log("unchecked");

        let index = filtergender.indexOf(event.target.value);

        filtergender.splice(index, 1);
    }
    //To Check and Match to Associated filter products//

    for (let i = 0; i < product_array.length; i++) {

        if (product_array[i].gender === filtergender[0]) {

            document.getElementById(product_array[i].id).style.display = "block";

        } else {

            document.getElementById(product_array[i].id).style.display = "none";

        }

    }

});
gendercheck[2].addEventListener("click", function(event) {

    if (gendercheck[2].checked) {

        console.log("checked");

        filtergender.push(event.target.value);

    } else {

        console.log("unchecked");

        let index = filtergender.indexOf(event.target.value);

        filtergender.splice(index, 1);
    }
    //To Check and Match to Associated filter products//

    for (let i = 0; i < product_array.length; i++) {

        if (product_array[i].gender === filtergender[0]) {

            document.getElementById(product_array[i].id).style.display = "block";

        } else {

            document.getElementById(product_array[i].id).style.display = "none";

        }

    }

});

//-------------------------------For Color filter--------------------------------->
let colorcheck=document.getElementsByName("colorcheck")
let filtercolor = [];

colorcheck[0].addEventListener("click", function(event) {

    if (colorcheck[0].checked) {

        console.log("checked");

        filtercolor.push(event.target.value);

    } else {

        console.log("unchecked");

        let index = filtercolor.indexOf(event.target.value);

        filtercolor.splice(index, 1);
    }
    
    //To Check and Match to Associated filter products//
    for (let i = 0; i < product_array.length; i++) {

    if (product_array[i].color === filtercolor[0]) {

        document.getElementById(product_array[i].id).style.display = "block";

    } else {

        document.getElementById(product_array[i].id).style.display = "none";

    }

}

});
colorcheck[1].addEventListener("click", function(event) {

    if (colorcheck[1].checked) {

        console.log("checked");

        filtercolor.push(event.target.value);

    } else {

        console.log("unchecked");

        let index = filtercolor.indexOf(event.target.value);

        filtercolor.splice(index, 1);
    }

    //To Check and Match to Associated filter products//
    for (let i = 0; i < product_array.length; i++) {

    if (product_array[i].color === filtercolor[0]) {

        document.getElementById(product_array[i].id).style.display = "block";

    } else {

        document.getElementById(product_array[i].id).style.display = "none";

    }
}

});
colorcheck[2].addEventListener("click", function(event) {

    if (colorcheck[2].checked) {

        console.log("checked");

        filtercolor.push(event.target.value);

    } else {

        console.log("unchecked");

        let index = filtercolor.indexOf(event.target.value);

        filtercolor.splice(index, 1);
    }

    //To Check and Match to Associated filter products//
    for (let i = 0; i < product_array.length; i++) {

    if (product_array[i].color === filtercolor[0]) {

        document.getElementById(product_array[i].id).style.display = "block";

    } else {

        document.getElementById(product_array[i].id).style.display = "none";

    }
}
});
colorcheck[3].addEventListener("click", function(event) {

    if (colorcheck[3].checked) {

        console.log("checked");

        filtercolor.push(event.target.value);

    } else {

        console.log("unchecked");

        let index = filtercolor.indexOf(event.target.value);

        filtercolor.splice(index, 1);
    }

    //To Check and Match to Associated filter products//
    for (let i = 0; i < product_array.length; i++) {

    if (product_array[i].color === filtercolor[0]) {

        document.getElementById(product_array[i].id).style.display = "block";

    } else {

        document.getElementById(product_array[i].id).style.display = "none";

    }
}

});
colorcheck[4].addEventListener("click", function(event) {

    if (colorcheck[4].checked) {

        console.log("checked");

        filtercolor.push(event.target.value);

    } else {

        console.log("unchecked");

        let index = filtercolor.indexOf(event.target.value);

        filtercolor.splice(index, 1);
    }

    //To Check and Match to Associated filter products//
    for (let i = 0; i < product_array.length; i++) {

    if (product_array[i].color === filtercolor[0]) {

        document.getElementById(product_array[i].id).style.display = "block";

    } else {

        document.getElementById(product_array[i].id).style.display = "none";

    }
}

});
colorcheck[5].addEventListener("click", function(event) {

    if (colorcheck[5].checked) {

        console.log("checked");

        filtercolor.push(event.target.value);

    } else {

        console.log("unchecked");

        let index = filtercolor.indexOf(event.target.value);

        filtercolor.splice(index, 1);
    }

    //To Check and Match to Associated filter products//
    for (let i = 0; i < product_array.length; i++) {

    if (product_array[i].color === filtercolor[0]) {

        document.getElementById(product_array[i].id).style.display = "block";

    } else {

        document.getElementById(product_array[i].id).style.display = "none";

    }   
}
});

//-------------------------------For PriceRange filter--------------------------------->
let pricerangecheck=document.getElementsByName("pricerangecheck")
let filterpricerange = [];

pricerangecheck[0].addEventListener("click", function(event) {

    if (pricerangecheck[0].checked) {

        console.log("checked");

        filterpricerange.push(event.target.value);

    } else {

        console.log("unchecked");

        let index = filterpricerange.indexOf(event.target.value);

        filterpricerange.splice(index, 1);
    }

    //**Checking Products According to Price Range by *NUMBER* converstion**
    for (let i = 0; i < product_array.length; i++) {

    let productprice = Number(product_array[i].price);

    if (productprice >= 2000 && productprice <= 2500) {

        document.getElementById(product_array[i].id).style.display = "block";

    } else {

        document.getElementById(product_array[i].id).style.display = "none";

    }

}

});
pricerangecheck[1].addEventListener("click", function(event) {

    if (pricerangecheck[1].checked) {

        console.log("checked");

        filterpricerange.push(event.target.value);

    } else {

        console.log("unchecked");

        let index = filterpricerange.indexOf(event.target.value);

        filterpricerange.splice(index, 1);
    }

    //----Checking Products According to Price Range by number converstion---->
    for (let i = 0; i < product_array.length; i++) {

    let productprice = Number(product_array[i].price);

    if (productprice >= 1500 && productprice <= 2000) {

        document.getElementById(product_array[i].id).style.display = "block";

    } else {

        document.getElementById(product_array[i].id).style.display = "none";

    }
}
});
pricerangecheck[2].addEventListener("click", function(event) {

    if (pricerangecheck[2].checked) {

        console.log("checked");

        filterpricerange.push(event.target.value);

    } else {

        console.log("unchecked");

        let index = filterpricerange.indexOf(event.target.value);

        filterpricerange.splice(index, 1);
    }

    //----Checking Products According to Price Range by number converstion---->
    for (let i = 0; i < product_array.length; i++) {

    let productprice = Number(product_array[i].price);

    if (productprice >= 1000 && productprice <= 1500) {

        document.getElementById(product_array[i].id).style.display = "block";

    } else {

        document.getElementById(product_array[i].id).style.display = "none";

    }
}

});
pricerangecheck[3].addEventListener("click", function(event) {

    if (pricerangecheck[3].checked) {

        console.log("checked");

        filterpricerange.push(event.target.value);

    } else {

        console.log("unchecked");

        let index = filterpricerange.indexOf(event.target.value);

        filterpricerange.splice(index, 1);
    }

    //----Checking Products According to Price Range by number converstion---->
    for (let i = 0; i < product_array.length; i++) {

    let productprice = Number(product_array[i].price);

    if (productprice >= 500 && productprice <= 1000) {

        document.getElementById(product_array[i].id).style.display = "block";

    } else {

        document.getElementById(product_array[i].id).style.display = "none";

    }
}

});
pricerangecheck[4].addEventListener("click", function(event) {

    if (pricerangecheck[4].checked) {

        console.log("checked");

        filterpricerange.push(event.target.value);

    } else {

        console.log("unchecked");

        let index = filterpricerange.indexOf(event.target.value);

        filterpricerange.splice(index, 1);
    }

    //----Checking Products According to Price Range by number converstion---->
    for (let i = 0; i < product_array.length; i++) {

    let productprice = Number(product_array[i].price);

    if (productprice <500) {

        document.getElementById(product_array[i].id).style.display = "block";

    } else {

        document.getElementById(product_array[i].id).style.display = "none";

    }
}

});

//-------------------------------Clear All Filter------------------------------->

let clearall = document.getElementById("clearall");

clearall.addEventListener("click", function() {

    // Uncheck all checkboxes
    let allcheckboxes = document.querySelectorAll("input[type='checkbox']");

    allcheckboxes.forEach(function(checkbox) {
        checkbox.checked = false;
    });

    // Clear all filter arrays
    filteroccasion = [];
    filtergender = [];
    filtercolor = [];
    filterpricerange = [];

    // Show all products again
    product_array.forEach(function(product) {

        document.getElementById(product.id).style.display = "block";

    });

});

//-------------------------------Search input Filter------------------------------->

searchinput.addEventListener("input", function(event) {

    let searchvalue = event.target.value;

    product_array.forEach(function(product) {

        if (
            product.gender.toLowerCase().includes(searchvalue.toLowerCase()) ||
            product.color.toLowerCase().includes(searchvalue.toLowerCase()) ||
            product.occasion.toLowerCase().includes(searchvalue.toLowerCase())
        ) {

            document.getElementById(product.id).style.display = "block";

        } else {

            document.getElementById(product.id).style.display = "none";

        }

    });

});