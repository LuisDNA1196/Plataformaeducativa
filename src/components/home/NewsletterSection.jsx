const NewsletterSection = () => {
    return (
        <section className="max-w-xl mt-12 mx-auto px-4 md:px-8">
            <div className="space-y-3 text-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-14 w-14 mx-auto text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 19v-8.93a2 2 0 01.89-1.664l7-4.666a2 2 0 012.22 0l7 4.666A2 2 0 0121 10.07V19M3 19a2 2 0 002 2h14a2 2 0 002-2M3 19l6.75-4.5M21 19l-6.75-4.5M3 10l6.75 4.5M21 10l-6.75 4.5m0 0l-1.14.76a2 2 0 01-2.22 0l-1.14-.76" />
                </svg>
                <h3 className="text-3xl text-gray-800 font-bold">
                    Suscríbete a nuestro boletín
                </h3>
                <p className="text-gray-400 leading-relaxed">
                    Recibe actualizaciones sobre nuevos cursos, eventos en vivo y consejos de programación. 
                    ¡No te pierdas ninguna oportunidad para mejorar tus habilidades!
                </p>
            </div>
            <div className="mt-6">
                <form 
                    onSubmit={(e) => e.preventDefault()}
                    className="items-center justify-center sm:flex">
                    <input 
                        type="email"
                        placeholder="Ingresa tu correo"
                        className="text-gray-500 w-full p-3 rounded-md border outline-none focus:border-indigo-600"
                    />
                    <button
                        className="w-full mt-3 px-5 py-3 rounded-md text-white bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 duration-150 outline-none shadow-md focus:shadow-none focus:ring-2 ring-offset-2 ring-indigo-600 sm:mt-0 sm:ml-3 sm:w-auto"
                    >
                        Suscribirse
                    </button>
                </form>
                <p className="mt-3 mx-auto text-center max-w-lg text-[15px] text-gray-400">
                    No enviamos spam, solo contenido de valor para tu aprendizaje. 
                    Lee nuestra <a className="text-indigo-600 underline" href="#"> Política de Privacidad </a>
                </p>
            </div>
        </section>
    );
};

export default NewsletterSection;
