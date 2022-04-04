function Callback(){}

function entrarNome (){
    let nome = document.getElementById('nome').value;
    navigator.notification.alert('Olá '+nome+'! Seja bem vindo!', Callback(), `Bem Vindo!`, `OK`);
}

function verificarIdade (){
    let idade = document.getElementById('idade').value;
    function maiorIdade(buttonIndex){
        if(buttonIndex == 1){
            navigator.notification.alert(`Você deve se alistar ao exército`, Callback(), `>:0`, `OK`);
        }else{
            navigator.notification.alert(`Você já pode tirar sua habilitação!`, Callback(), `:)`, `OK`);
        }
    }
    if(idade >= 18){
        navigator.notification.confirm('Você é homem ou mulher?', maiorIdade,'Olá ;)', ['Homem','Mulher']); 
    }else if(idade < 18 && idade >= 0){
        navigator.notification.beep(idade);
    }else{
        navigator.vibrate(3000);
    }
}

function botaoSair (){
    navigator.vibrate(3000);
    navigator.app.exitApp();
};