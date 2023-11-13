// ===============================================
//    JS_Objects_II_(this)_Uebungen - level-1_4
// ===============================================

console.log("%c level-1_4", "color: blue; background-color: gold");

function fahrrad() {
    console.log(this.name);
}

let name = "Canyon";
let obj1 = { name: "Merida", fahrrad: fahrrad };
let obj2 = { name: "Scott", fahrrad: fahrrad };

// Was sehen wir, wenn wir fahrrad(), obj1.fahrrad(), obj2.fahrrad() aufrufen?
fahrrad();
// wir sehen ein <empty string>, da "this" sich in keinem Object befindet, indem ein "name" key existiert. Die Variable "name" ist global deklariert und ist kein "key" in einem Object, weshalb "this" nicht drauf zugreift. Ich habe nur noch nicht verstanden, warum ein "emtpy string" statt einem "undefined" ausgegeben wird. 
obj1.fahrrad();
// der value von name, der sich in obj1 ("Merida") befindet wird ausgegeben. 
obj2.fahrrad();
// der value von name, der sich in obj2 ("Scott") befindet wird ausgegeben. 
