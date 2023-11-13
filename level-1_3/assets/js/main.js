// ===============================================
//   JS_Objects_II_(this)_Uebungen - level-1_3
// ===============================================

console.log("%c level-1_3", "color: blue; background-color: gold");

let personFunction = {
    fullName: function () {
        return `${this.vorname} ${this.nachname}`;
    }
};
let personObjekt = {
    vorname: "Anton",
    nachname: "Nüssler"
};

let anzeigeImHTMLDokument = `<p>${personFunction.fullName.call(personObjekt)}</p>`;
document.getElementById("person").innerHTML = anzeigeImHTMLDokument;
