//Express cria e configura o servidor
const express = require('express')
const server = express()


const ideas = [
    {
        img: 'https://image.flaticon.com/icons/svg/2729/2729007.svg',
        title: 'Cursos de Programação',
        category: 'Estudo',
        description: ' Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
        url: 'htpps://github.com/gabrielbugarelli',
    },

    {
        img: 'https://image.flaticon.com/icons/svg/2729/2729005.svg',
        title: 'Exercício',
        category: 'Saúde',
        description: ' Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
        url: 'htpps://github.com/gabrielbugarelli',
    },

    {
        img: 'https://image.flaticon.com/icons/svg/2729/2729027.svg',
        title: 'Meditação',
        category: 'Mentalidade boa',
        description: ' Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
        url: 'htpps://github.com/gabrielbugarelli',
    },

    {
        img: 'https://image.flaticon.com/icons/svg/2729/2729032.svg',
        title: 'Karaokê',
        category: 'Diversão em Família',
        description: ' Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
        url: 'htpps://github.com/gabrielbugarelli',
    }
]



//configurar arquivos estaticos
server.use(express.static("public"))

//configuração do nunjucks
const nunjucks = require("nunjucks")
nunjucks.configure('views', {
    express: server,
    noCache: true,
})


//criando rota
server.get("/", function (req, res) {

    const reversedIdeas = [...ideas].reverse()

    let lastIdeas = []
    for (let idea of ideas) {
        if (lastIdeas.length < 3) {
            lastIdeas.push(idea)
        }
    }

    return res.render("index.html", { ideas: lastIdeas })
    // _dirname + "index.html"

})

server.get("/ideias", function (req, res) {
    const reversedIdeas = [...ideas].reverse()

    return res.render("ideias.html", { ideas: reversedIdeas })
    // _dirname + "ideias.html"
})



//Ligar servidor na porta 3000
server.listen(3000)