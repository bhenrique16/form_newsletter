
const Form = () => {
    return (
        <form action="">
            <div>
                <label>Nome</label>
                <input type="text" placeholder="Digite seu nome" />
            </div>
            <div>
                <label >Email</label>
                <input type="email" placeholder="Digite seu melhor email" />
            </div>
            <div>
                <a href="#">Leia os termos</a>
                <div>
                    <input type="checkbox" />
                    <label >Concordo com os termos</label>
                </div>
            </div>
            <button>Cadastrar</button>
        </form>
    )
}

export default Form