const KEY_BD = '@testematheus2'


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
                return expReg.test(usuario.nome) || expReg.test(usuario.marca) || expReg.test(usuario.qtde)
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
                        <td>${usuario.marca}</td>
                        <td>${usuario.qtde}</td>
                        <td>
                            <button onclick='vizualizar("cadastro",false,${usuario.id})'>Editar</button>
                            <button class='vermelho' onclick='perguntarSeDeleta(${usuario.id})'>Deletar</button>
                        </td>
                    </tr>`
            })
        tbody.innerHTML = data.join('')
    }
}

function insertUsuario(nome, marca, qtde) {
    const id = listaRegistros.ultimoIdGerado + 1;
    listaRegistros.ultimoIdGerado = id;
    listaRegistros.usuarios.push({
        id,
        nome,
        marca,
        qtde
    })
    gravarBD()
    desenhar()
    vizualizar('lista')
}

function editUsuario(id, nome, qtde) {
    var usuario = listaRegistros.usuarios.find(usuario => usuario.id == id)
    usuario.nome = nome;
    usuario.marca = marca;
    usuario.qtde = qtde;
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
    if (confirm('Deletar o Produto pertencente ao codigo ' + id)) {
        deleteUsuario(id)
    }
}


function limparEdicao() {
    document.getElementById('nome').value = ''
    document.getElementById('marca').value = ''
    document.getElementById('qtde').value = ''
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
                document.getElementById('marca').value = usuario.marca
                document.getElementById('qtde').value = usuario.qtde
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
        marca: document.getElementById('marca').value,
        qtde: document.getElementById('qtde').value,
    }
    if (data.id) {
        editUsuario(data.id, data.nome, data.marca, data.qtde)
    } else {
        insertUsuario(data.nome, data.marca, data.qtde)
    }
}


window.addEventListener('load', () => {
    lerBD()
    document.getElementById('cadastroRegistro').addEventListener('submit', submeter)
    document.getElementById('inputPesquisa').addEventListener('keyup', e => {
        pesquisar(e.target.value)
    })

})