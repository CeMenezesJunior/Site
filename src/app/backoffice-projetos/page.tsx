export default function backofficeProjetos(){
    return(
        <div>
            <p className="text-4xl text-center font-bold">Projeto</p>
            <form className="justify-self-center flex flex-col gap-4 w-full p-20">
                <label className="flex flex-row gap-2">
                    Nome: 
                    <input className="bg-white w-full text-black" type="text" name="nome "/>
                </label>
                <label className="flex flex-row gap-2">
                    Link: 
                    <input className="bg-white w-full text-black"type="text" name="nome "/>
                </label>
                <label className="flex flex-row gap-2">
                    Descrição: 
                    <textarea className="bg-white w-full text-black"/>
                </label>
                <label className="flex flex-row gap-2">
                    GitHub:
                    <input className="bg-white w-full text-black"type="text" name="nome "/>
                </label>
                <input className="bg-green-600 font-bold w-40 h-10 rounded-xl justify-end" type="submit" value="Validar"/>
            </form>
        </div>
    )
}