export default function Page(){
    return (
        <div className="">
            <div className="flex flex-row fixed top-0 left-0 h-20 w-full bg-gray-800 mb-10 text-white gap-10 items-center pl-20">
                <a href="#" className="text-2xl font-bold">Carlos Menezes</a>
                <div className="flex gap-4 flex-row-reverse">
                    <a className="hover:border-b-2" href="#sobremim">Sobre Mim</a>
                    <a className="hover:border-b-2" href="#projetos">Projetos</a>
                    <a className="hover:border-b-2">Blog</a>
                </div>
                
            </div>
            <div className="mt-30 mb-20 ml-5 flex flex-row gap-10 sm:gap-5 items-center justify-self-center">
                <div className="flex flex-col">
                    <div className="flex flex-row gap-1.5">
                        <p className="text-4xl font-bold text-left text-white">Olá Mundo</p>
                        <p className="text-4xl font-bold text-amber-500">!</p>
                    </div>
                    <p className="text-4xl font-bold text-left text-white">Sou</p>
                    <p className="text-6xl font-bold text-left">Carlos</p>
                    <p className="text-7xl font-bold text-left text-white">Desenvolvedor</p>
                </div>
                <div className='h-60 w-60'>
                    <img className="rounded-full object-center border-8 border-amber-700" src="https://avatars.githubusercontent.com/u/46033513?v=4"></img>
                </div>
            </div>
            
            <div id="sobremim">
                <p className="text-6xl text-white font-bold border-b-4 w-80 border-amber-400 justify-self-center">Sobre Mim</p>
                <p className="text-xl text-white justify-self-center pt-10 pb-20 pr-20 pl-20">I started my software journey from photography. Through that, I learned to love the process of creating from scratch. Since then, this has led me to software development as it fulfills my love for learning and building things.</p>
            </div>

            <div id="projetos">
                <p className='text-6xl border-b-4 border-amber-400 w-60 justify-self-center font-bold text-center mb-10'>Projetos</p>
                <div className="flex flex-col m-10 gap-10 p-10">
                    <div className="flex flex-row gap-10">
                        <div className="h-50 w-50">
                            <img className="object-center" src="https://avatars.githubusercontent.com/u/46033513?v=4"></img>
                        </div>
                        <div className="flex flex-col gap-3">
                            <p className="text-2xl font-bold">Nome</p>
                            <p className="text-xl">Descricao</p>
                            <div className="flex flex-row gap-10 mt-5">
                                <button className="bg-amber-500 pt-2 pb-2 pl-8 pr-8">Teste</button>
                                <button className="border-b-2">Veja o Projeto</button>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>

            <div id="footer" className="items-center bg-gray-600 absolute text-white flex flex-col">

            </div>
            
            
        </div>
    )
}