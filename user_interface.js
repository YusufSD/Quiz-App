function UI(){
    this.btn_start = document.querySelector('.btn_start'),
    this.btn_next = document.querySelector(".btn_next"),
    this.btn_replay = document.querySelector(".btn_replay"),
    this.btn_quit = document.querySelector(".btn_quit"),
    this.quiz_box = document.querySelector('.quiz_box'),
    this.score_box = document.querySelector('.score_box'),
    this.option_list = document.querySelector('.option_list'),
    this.correctIcon = `<div class="icon"><i class="fas fa-check"></i></div>`,
    this.incorrectIcon = `<div class="icon"><i class="fas fa-times"></i></div>`,
    this.time_text = document.querySelector('.time_text'),
    this.time_second = document.querySelector('.time_second')
    
}

UI.prototype.soruGöster = function(soru){
    let question = `<span>${soru.soruMetni}</span>`;
    let options = ``;

    for(let x in soru.secenekler){
        options += 
        `
            <div class="option">
                <span><b>${x}</b>-) ${soru.secenekler[x]}</span>
            </div>

        `;
    }

    document.querySelector(".question_text").innerHTML = question;
    this.option_list.innerHTML = options;

    const option = this.option_list.querySelectorAll(".option");

    for(let opt of option){
        opt.setAttribute("onclick", "optionSelected(this)");
    }
}

UI.prototype.soruSayisiGöster = function(sorusirasi, toplamsoru){
    const tag = `<span class="badge bg-warning">${sorusirasi} / ${toplamsoru} </span>`; 
    document.querySelector(".quiz_box .question_index").innerHTML = tag;  
}

UI.prototype.skorGoster = function(toplamSoru, dogruCevap){
    let tag = `Toplam ${toplamSoru} Sorudan ${dogruCevap} Doğru Cevap Verdiniz.`;
    document.querySelector(".score_box .score_text").innerHTML = tag ;

}

