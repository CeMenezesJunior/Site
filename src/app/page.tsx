export default function Page(){
    return (
        <div className="">
            <div className="flex flex-row absolute top-0 left-0 h-20 w-full bg-white mb-10 text-red-500 gap-10 p-5">
                <a className="text-2xl font-bold">Principal</a>
                <a>Sobre Mim</a>
                <a>Blog</a>
            </div>
            <p className="text-6xl font-bold text-center mt-30 mb-10">Carlos Menezes</p>
            <div className='h-40 w-40 hover:h-60 hover:w-60 transition-all mb-20 justify-self-center'>
                <img className="rounded-full object-center" src="https://avatars.githubusercontent.com/u/46033513?v=4"></img>
            </div>

            <p className='text-4xl font-bold text-center mb-10'>Projetos</p>
            <div className="grid grid-cols-3 m-10 gap-10">
                <div className="border-2 border-white">
                    <p className="text-2xl font-bold">Nome</p>
                    <p className="text-xl">Descricao</p>
                    <a className="text-xl">Link</a>
                </div>
                <div className="border-2 border-white">
                    <p className="text-2xl font-bold">Nome</p>
                    <p className="text-xl">Descricao</p>
                    <a className="text-xl">Link</a>
                </div>
            </div>
            
            <div></div>
        </div>
    )
}