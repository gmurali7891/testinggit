function order(shopping){
    var discount;
    if(shopping=="flipkart"){
        discount=500;
    }else if(shopping=="amazon"){
        discount=300;
    }else if(shopping=="snapdeal"){
        discount=100;
    }else if(shopping=="more"){
        discount=50;
    }else{
        discount=0;
    }


return function(productName){
    console.log("dear customer");
    console.log("shampoo:"+productName);
    console.log("shopping:"+shopping);
    console.log("discount:"+discount);
    console.log("happy shopping")
}

}

var shopflipkart = order("flipkart");
var shopamazon = order("amazon");
var shopsnapdeal = order("snapdeal");
var shopmore = order("more");
shopflipkart("trshemme");
shopamazon("trimmer");
shopmore("levono p1m");
shopsnapdeal("jeans & shirt");
console.log(shopflipkart);