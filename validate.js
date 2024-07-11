const button = document.getElementById('sendButton')
button.preventDefault()

function contact(){

    const nome = document.getElementById('nome').value
    const email = document.getElementById('email').value
    const assunto = document.getElementById('assunto').value
    const mensagem = document.getElementById('message').value
    const link = `https://wa.me/+5511950447865?text=Nome: ${nome}%0AEmail: ${email}%0AAssunto: ${assunto}%0AMensagem: ${mensagem}`

    if(nome != '' && email != '' && assunto != '' && mensagem != ''){
        window.location.assign(link)
    }else{
        //
    }
    alert(link)

}