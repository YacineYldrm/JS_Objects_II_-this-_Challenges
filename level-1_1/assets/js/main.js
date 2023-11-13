// ===============================================
//    JS_Objects_II_(this)_Uebungen - level-1_1
// ===============================================

console.log("%c level-1_1", "color: blue;  background-color: gold");

let person = 
{
  vorname: "Anton",
  nachname: "Fish",
  fullName: function() {
    return `${this.vorname} ${this.nachname}`;
  }
};

console.log(person.fullName());
