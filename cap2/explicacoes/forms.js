// eventos e funções:
        /*
        Quando um usuário executa uma ação, o programa responde ao evento do usuário com uma ou mais ações programadas em uma função

        Para criar um evento e definir qual função será acionada quando esse evento ocorrer, deve-se utilizar uma palavra reservada para indicar para qual evento
        a linguagem ficará "na escuta", seguido do nome da função a ser acionada.
            exemplos de palavras reservadas:
            (on)click
            (on)change
            (on)submit
            (on)blur
            (on)load

        FUNÇÕES:
            as funções em javascript são declaradas a partir da palavra-chave function seguida do nome da função e dos parênteses ()
            uma função contém um conjunto de comandos que realizam uma ação

        Método getElementById():
  
        */

        //1: Declarar função
        function mostrarOla() {
            // obter o conteúdo do campo nome pelo id informado no arquivo html
            var nome = document.getElementById("nome").value;
            // exibe no parágrafo que contém o id "resposta" o texto "Olá " e o nome informado
            document.getElementById("resposta").innerHTML = `Olá ${nome}`;
        }
        // cria uma referência ao botão inserido no html através do id
        var mostrar = document.getElementById("mostrar");

        // registra para o botão "mostrar" um ouvinte para o evento click,
        // ao ser clicado o botão, o ouvinte irá chamar a função mostrarOla
        mostrar.addEventListener("click", mostrarOla);
        
