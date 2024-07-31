"use client";

import Image from 'next/image';
import TypingEffect from './TypingEffect';

export function Body() {
    return (
        <div className="min-h-screen p-8 md:p-16 lg:p-32 flex flex-col lg:flex-row lg:items-center bg-custom-gradient pt-28">
            <div className="flex-1 text-center lg:text-left">
                <p className="text-2xl md:text-3xl lg:text-4xl font-mono">Olá, seja bem-vindo!</p>
                <p className="text-2xl md:text-3xl lg:text-4xl font-mono">
                    Me chamo <b className='text-amber-600'>Matheus Melo</b>
                </p>
                <span className='text-lg md:text-xl lg:text-2xl font-mono text-amber-600'>
                    <TypingEffect 
                        texts={[
                            'Desenvolvedor backend',
                            'Entusiasta open-source'
                        ]}
                        typeSpeed={50}
                        deleteSpeed={50}
                        delaySpeed={1500}
                    />
                </span>
                <br />
                <br />
                <br />
                <p className='text-lg md:text-xl lg:text-2xl font-mono'>
                    Sou estudante de <span className='text-amber-600'>Análise e Desenvolvimento de Sistemas</span> pelo <span className='text-amber-600'>CESMAC</span>
                </p>
                <br />
                <p className='text-lg md:text-xl lg:text-2xl font-mono'>
                    Tenho experiência significativa no desenvolvimento de aplicações backend utilizando <span className='text-amber-600'>Nodejs</span>, <span className='text-amber-600'>Typescript</span> e <span className='text-amber-600'>Express</span>
                </p>
                <br />
                <p className='text-lg md:text-xl lg:text-2xl font-mono'>
                    Participo de projetos <span className='text-amber-600'>open-source</span> para ajudar a comunidade e, no momento, estou explorando o universo do <span className='text-amber-600'>Golang</span> para diversificar minhas habilidades e aprender algo novo
                </p>
                <br />
            </div>
            <div className="flex-shrink-0 lg:ml-8 mt-8 lg:mt-0">
                <Image 
                    src="/assets/homeImage.png" 
                    alt='Homem no computador' 
                    width={500} 
                    height={300} 
                    className='w-full max-w-md lg:max-w-lg h-auto'
                />
            </div>
        </div>
    );
}
