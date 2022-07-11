    var CHAT_ID = "5066558166";
    var TOKEN = "5597625973:AAFYCYSlqyxC-OSz_UBe1d4nuzjouYj9Nts";
    var text_b = "Текст для <b>нашего</b> бота";
    var url;
    function sleep(ms) {
          return new Promise(resolve => setTimeout(resolve, ms));
        };
    const openPopUp = document.getElementById('open_pop_up');
    const openPopUp_2 = document.getElementById('send_message_min');
    const closePopUp = document.getElementById('pop_up_close');
    const popUp = document.getElementById('pop_up');
    openPopUp.addEventListener('click', function(e){
        e.preventDefault();
        popUp.classList.add('active');
    });
    openPopUp_2.addEventListener('click', function(e){
        e.preventDefault();
        popUp.classList.add('active');
    });
    closePopUp.addEventListener('click', () => {
        popUp.classList.remove('active');
    });
    const form = document.getElementById('form');
    form.addEventListener('submit', getFormValue);
    function getFormValue(event) {
        event.preventDefault();
        const text = form.querySelector('[name="message"]'),
        contact = form.querySelector('[name="contact"]');
        text_f = text.value;
        contact_f = contact.value;
        url = 'https://api.telegram.org/bot'+TOKEN+'/sendMessage?chat_id='+CHAT_ID+'&parse_mode=HTML&text=Новое сообщение на сайте:\n'+text_f+'\nКонтактная информация: '+contact_f;
        const Http = new XMLHttpRequest();
        Http.open("POST", url);
        console.log('send message...');
        Http.send();
        Http.onreadystatechange=(e)=>{
        };
        popUp.classList.remove('active');
        document.getElementById('text').value = '';
        document.getElementById('contact').value = '';
    };
    function scroolBg(){
    const el = document.getElementById('subtitle');
    el.scrollIntoView({behavior: "smooth"});
    };
    function scroolMain(){
    scrollTo({top: 0});
    };
