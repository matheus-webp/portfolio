export function Body() {
    return (
        <div className="flex flex-col justify-center items-center bg-custom-gradient pt-24 px-4 min-h-screen w-full">
             <a 
                href="/assets/cv.pdf" 
                download="Desenvolvedor_Backend_Matheus_Melo.pdf" 
                className="mt-6 bg-amber-600 text-white px-6 py-3 rounded hover:bg-amber-800 transition duration-300 mb-4"
            >
                Baixar CV
            </a>
            <iframe 
                src="/assets/cv.pdf" 
                className="w-full h-[70vh] md:w-3/4 md:h-[75vh] lg:w-2/3 lg:h-[80vh] border-2 border-gray-300"
                style={{ border: 'none' }}
            />        
        </div>
    );
}
