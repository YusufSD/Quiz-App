function Soru(soruMetni, secenekler, dogruCevap){
    this.soruMetni = soruMetni;
    this.secenekler = secenekler;
    this.dogruCevap = dogruCevap;
}

Soru.prototype.cevapKontrol = function(cevap){
    return cevap === this.dogruCevap
}

let sorular =  [
    new Soru("Soru 1", {a: "Secenek 1", b: "Secenek 2", c: "Secenek 3", d: "Secenek 4"}, "a"),
    new Soru("Soru 2", {a: "Secenek 1", b: "Secenek 2", c: "Secenek 3", d: "Secenek 4"}, "b"),
    new Soru("Soru 3", {a: "Secenek 1", b: "Secenek 2", c: "Secenek 3", d: "Secenek 4"}, "a"),
    new Soru("Soru 4", {a: "Secenek 1", b: "Secenek 2", c: "Secenek 3", d: "Secenek 4"}, "c")
]
