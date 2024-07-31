import Image from "next/image";

export function Body() {
    return (
        <div className="flex flex-col justify-center items-center bg-custom-gradient space-y-16 pt-24 px-4 min-h-screen w-full">
            <span className="text-2xl md:text-4xl font-mono mb-8">Projetos em que participo ativamente</span>
            <div className="flex flex-col space-y-8">
                <div className="flex flex-col md:flex-row items-start md:space-x-8">
                    <div className="border-4 border-gray-300 p-4 mb-4 flex flex-col items-center">
                        <Image src={'/assets/petdex.png'} alt='petdex logo' width={208} height={208}/>
                        <a href="https://github.com/devhatt/pet-dex-backend" target="_blank" className="bg-amber-600 text-white px-4 py-2 rounded hover:bg-amber-800 transition duration-300 mt-4">Código</a>
                    </div>
                    <p className="text-sm md:text-base max-w-md font-mono">
                        Bem-vindo ao PetDex, o aplicativo que transforma a experiência de ser tutor de pets em algo único e interativo. Com o PetDex, os tutores podem catalogar e compartilhar informações sobre seus pets, semelhante à famosa Pokedex, mas para animais de estimação.
                    </p>
                </div>
                <div className="flex flex-col md:flex-row items-start md:space-x-8">
                    <div className="border-4 border-gray-300 p-4 mb-4 flex flex-col items-center">
                        <Image src={'/assets/octopost.png'} alt='octopost logo' width={208} height={208}/>
                        <a href="https://github.com/devhatt/octopost-backend" target="_blank" className="bg-amber-600 text-white px-4 py-2 rounded hover:bg-amber-800 transition duration-300 mt-4">Código</a>
                    </div>
                    <p className="text-sm md:text-base max-w-md font-mono">
                        O OctoPost é um aplicativo de redes sociais inovador que permite aos usuários fazerem publicações em várias plataformas de mídia social, tudo dentro de uma única e intuitiva interface unificada. Foi projetado para simplificar o processo de compartilhamento de conteúdo em várias redes sociais. A arquitetura modular do aplicativo permite a adição de novas plataformas de mídia social por meio de módulos personalizados.
                    </p>
                </div>
            </div>
        </div>
    );
}
