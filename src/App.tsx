

import Form from "./components/Form"

function App() {

  return (
    <>
      <div className="bg-slate-900 min-h-screen w-full flex flex-col items-center justify-center">
        <h1 className="font-bold text-[2rem] text-white">Inscreva-se</h1>
        <p className="text-white">Assine nossa Newsletter e matenha-se informado</p>
        <Form />
      </div>
      <p>Ao se inscrever, você passrá a receber nossos e-mails com as
        melhores dicas,novidades e ofertas.</p>
    </>
  )
}

export default App
