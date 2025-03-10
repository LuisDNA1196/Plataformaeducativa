export default function Footer() {
    const footerNavs = [
        { href: '/about', name: 'Sobre Nosotros' },
        { href: '/courses', name: 'Cursos' },
        { href: '/blog', name: 'Blog' },
        { href: '/team', name: 'Nuestro Equipo' },
        { href: '/contact', name: 'Contacto' },
        { href: '/faq', name: 'Preguntas Frecuentes' }
    ];

    return (
        <footer className="text-gray-500 bg-white px-4 py-5 max-w-screen-xl mx-auto md:px-8">
            
            <ul className="flex flex-wrap justify-center mt-8 space-x-4 sm:space-x-8">
                {footerNavs.map((item, idx) => (
                    <li key={idx} className="hover:text-gray-800">
                        <a href={item.href}>{item.name}</a>
                    </li>
                ))}
            </ul>
            <div className="max-w-2xl sm:mx-auto sm:text-center">
                <p className="leading-relaxed mt-2 text-[15px]">
                    Aprende a programar desde cero con nuestros cursos prácticos y especializados en tecnologías modernas. Conviértete en desarrollador web, móvil o de software con nosotros.
                </p>
            </div>
            <div className="mt-8 flex flex-col sm:flex-row justify-between items-center">
                <div className="text-sm">
                    &copy; {new Date().getFullYear()} AprendeProgramación. Todos los derechos reservados.
                </div>
                <div className="flex space-x-4 mt-4 sm:mt-0">
                    <a href="#" className="w-10 h-10 border rounded-full flex items-center justify-center text-blue-400">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M22.46 6.004a8.853 8.853 0 01-2.535.695 4.428 4.428 0 001.944-2.445 8.83 8.83 0 01-2.806 1.073 4.42 4.42 0 00-7.529 4.03 12.548 12.548 0 01-9.105-4.615 4.42 4.42 0 001.366 5.9A4.4 4.4 0 012 10.225v.056a4.42 4.42 0 003.548 4.332 4.403 4.403 0 01-2 .076 4.42 4.42 0 004.126 3.063A8.863 8.863 0 012 18.407a12.496 12.496 0 006.785 1.992c8.14 0 12.6-6.74 12.6-12.6 0-.191-.005-.382-.014-.573a9 9 0 002.09-2.307z"/>
                        </svg>
                    </a>
                    <a href="#" className="w-10 h-10 border rounded-full flex items-center justify-center text-blue-700">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M22 12c0-5.522-4.478-10-10-10S2 6.478 2 12c0 4.99 3.657 9.128 8.438 9.878v-6.987h-2.54v-2.891h2.54V9.577c0-2.506 1.492-3.89 3.774-3.89 1.095 0 2.238.194 2.238.194v2.46h-1.262c-1.244 0-1.63.77-1.63 1.563v1.875h2.773l-.443 2.89h-2.33v6.987C18.343 21.128 22 16.99 22 12z"/>
                        </svg>
                    </a>
                    <a href="#" className="w-10 h-10 border rounded-full flex items-center justify-center text-red-600">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M23.5 6.2a2.94 2.94 0 00-2.1-2.1C19.1 3.5 12 3.5 12 3.5s-7.1 0-9.4.6a2.94 2.94 0 00-2.1 2.1C0 8.5 0 12 0 12s0 3.5.6 5.8a2.94 2.94 0 002.1 2.1c2.3.6 9.4.6 9.4.6s7.1 0 9.4-.6a2.94 2.94 0 002.1-2.1c.6-2.3.6-5.8.6-5.8s0-3.5-.6-5.8zM9.6 15.7V8.3l6.4 3.7-6.4 3.7z"/>
                        </svg>
                    </a>
                    <a href="#" className="w-10 h-10 border rounded-full flex items-center justify-center text-gray-900">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2a10 10 0 00-3.162 19.515c.5.093.682-.217.682-.48v-1.684c-2.782.602-3.37-1.343-3.37-1.343-.454-1.17-1.11-1.482-1.11-1.482-.908-.62.068-.607.068-.607 1 .07 1.53 1.03 1.53 1.03.892 1.53 2.34 1.09 2.91.83.092-.647.35-1.09.636-1.34-2.22-.25-4.56-1.11-4.56-4.94 0-1.09.39-1.98 1.03-2.67-.1-.25-.44-1.27.1-2.64 0 0 .84-.27 2.75 1.02A9.6 9.6 0 0112 6.08c.85.004 1.7.115 2.5.338 1.91-1.29 2.75-1.02 2.75-1.02.54 1.37.2 2.39.1 2.64.64.69 1.03 1.58 1.03 2.67 0 3.84-2.34 4.69-4.57 4.94.36.31.68.92.68 1.86v2.75c0 .266.18.58.69.48A10 10 0 0012 2z"/>
                        </svg>
                    </a>
                </div>
            </div>
        </footer>
    );
}
