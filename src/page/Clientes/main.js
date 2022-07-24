const KEY_BD = 'teste'


var listaRegistros = {
    ultimoIdGerado: 0,
    usuarios: []
}


var FILTRO = ''


function gravarBD() {
    localStorage.setItem(KEY_BD, JSON.stringify(listaRegistros))
}

function lerBD() {
    const data = localStorage.getItem(KEY_BD)
    if (data) {
        listaRegistros = JSON.parse(data)
    }
    desenhar()
}


function pesquisar(value) {
    FILTRO = value;
    desenhar()
}


function desenhar() {
    const tbody = document.getElementById('listaRegistrosBody')
    if (tbody) {
        var data = listaRegistros.usuarios;
        if (FILTRO.trim()) {
            const expReg = eval(`/${FILTRO.trim().replace(/[^\d\w]+/g,'.*')}/i`)
            data = data.filter(usuario => {
                return expReg.test(usuario.nome) || expReg.test(usuario.fone) || expReg.test(usuario.cpf) || expReg.test(usuario.email)
            })
        }
        data = data
            .sort((a, b) => {
                return a.nome < b.nome ? -1 : 1
            })
            .map(usuario => {
                return `<tr>
                        <td>${usuario.id}</td>
                        <td>${usuario.nome}</td>
                        <td>${usuario.fone}</td>
                        <td>${usuario.cpf}</td>
                        <td>${usuario.email}</td>
                        <td>
                            <button onclick='vizualizar("cadastro",false,${usuario.id})'>Editar</button>
                            <button class='vermelho' onclick='perguntarSeDeleta(${usuario.id})'>Deletar</button>
                        </td>
                    </tr>`
            })
        tbody.innerHTML = data.join('')
    }
}

function insertUsuario(nome, fone, cpf, email) {
    const id = listaRegistros.ultimoIdGerado + 1;
    listaRegistros.ultimoIdGerado = id;
    listaRegistros.usuarios.push({
        id,
        nome,
        fone,
        cpf,
        email
    })
    gravarBD()
    desenhar()
    vizualizar('lista')
}

function editUsuario(id, nome, fone) {
    var usuario = listaRegistros.usuarios.find(usuario => usuario.id == id)
    usuario.nome = nome;
    usuario.fone = fone;
    usuario.cpf = cpf;
    usuario.email = email;
    gravarBD()
    desenhar()
    vizualizar('lista')
}

function deleteUsuario(id) {
    listaRegistros.usuarios = listaRegistros.usuarios.filter(usuario => {
        return usuario.id != id
    })
    gravarBD()
    desenhar()
}

function perguntarSeDeleta(id) {
    if (confirm('Quer deletar o registro de id ' + id)) {
        deleteUsuario(id)
    }
}


function limparEdicao() {
    document.getElementById('nome').value = ''
    document.getElementById('fone').value = ''
    document.getElementById('cpf').value = ''
    document.getElementById('email').value = ''
}

function vizualizar(pagina, novo = false, id = null) {
    document.body.setAttribute('page', pagina)
    if (pagina === 'cadastro') {
        if (novo) limparEdicao()
        if (id) {
            const usuario = listaRegistros.usuarios.find(usuario => usuario.id == id)
            if (usuario) {
                document.getElementById('id').value = usuario.id
                document.getElementById('nome').value = usuario.nome
                document.getElementById('fone').value = usuario.fone
                document.getElementById('cpf').value = usuario.cpf
                document.getElementById('email').value = usuario.email
            }
        }
        document.getElementById('nome').focus()
    }
}



function submeter(e) {
    e.preventDefault()
    const data = {
        id: document.getElementById('id').value,
        nome: document.getElementById('nome').value,
        fone: document.getElementById('fone').value,
        cpf: document.getElementById('cpf').value,
        email: document.getElementById('email').value,
    }
    if (data.id) {
        editUsuario(data.id, data.nome, data.fone, data.cpf, data.email)
    } else {
        insertUsuario(data.nome, data.fone, data.cpf, data.email)
    }
}


window.addEventListener('load', () => {
    lerBD()
    document.getElementById('cadastroRegistro').addEventListener('submit', submeter)
    document.getElementById('inputPesquisa').addEventListener('keyup', e => {
        pesquisar(e.target.value)
    })

})