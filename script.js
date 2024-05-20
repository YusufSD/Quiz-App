const quiz = new Quiz(sorular);
const ui = new UI();

ui.btn_start.addEventListener('click', function(){  
    ui.btn_next.innerHTML = "Sonraki Soru"; 
    ui.quiz_box.classList.add("active");
    startTimer(20);
    ui.soruGöster(quiz.soruGetir());
    ui.soruSayisiGöster(quiz.soruIndex + 1, quiz.sorular.length);
    ui.btn_next.classList.remove("show");
});

ui.btn_next.addEventListener('click', function(){
    if(quiz.sorular.length != quiz.soruIndex + 1){
        quiz.soruIndex +=1 ;
        clearInterval(sayac);
        startTimer(20);
        ui.soruGöster(quiz.soruGetir());
        ui.soruSayisiGöster(quiz.soruIndex + 1, quiz.sorular.length);
        ui.btn_next.classList.remove("show"); 
    }
    else{
        clearInterval(sayac);
        ui.quiz_box.classList.remove("active");
        ui.score_box.classList.add("active");
        ui.skorGoster(quiz.sorular.length, quiz.dogruCevapSayisi);
    }   
});

ui.btn_quit.addEventListener('click', function(){
    window.location.reload();
});

ui.btn_replay.addEventListener('click', function(){
    quiz.soruIndex = 0;
    quiz.dogruCevapSayisi = 0;
    ui.btn_start.click();
    ui.score_box.classList.remove("active");
});

function optionSelected(option){
    clearInterval(sayac);
    let cevap = option.querySelector("span b").textContent;
    let soru = quiz.soruGetir();

    if(soru.cevapKontrol(cevap)){
        quiz.dogruCevapSayisi += 1;
        option.classList.add("correct");
        option.insertAdjacentHTML("beforeend", ui.correctIcon);
    }
    else{
        option.classList.add("incorrect");
        option.insertAdjacentHTML("beforeend", ui.incorrectIcon);
    }

    for(let i = 0; i < ui.option_list.children.length; i++){
        ui.option_list.children[i].classList.add("disabled");
    }

    if(quiz.sorular.length == quiz.soruIndex + 1){
        
        ui.btn_next.innerHTML = "Testi Bitir";
    }

    ui.btn_next.classList.add("show");
}

let sayac;
function startTimer(time){
    sayac = setInterval(timer, 1000);
    function timer(){
        ui.time_second.innerHTML = time;
        time--;
        if(time < 0){
            clearInterval(sayac);
            ui.time_text.innerHTML = "Süre Bitti";
            
            let cevap = quiz.soruGetir().dogruCevap;

            for(let option of ui.option_list.children){
                if(option.querySelector("span b").textContent == cevap){
                    option.classList.add("correct");
                    option.insertAdjacentHTML("beforeend", ui.correctIcon);
                }
                option.classList.add("disabled");
            }

            ui.btn_next.classList.add("show");
        }
    }
}