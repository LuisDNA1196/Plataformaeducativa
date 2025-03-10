import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
const Hero = () => {
  const [state, setState] = useState(false);
  const navigate = useNavigate(); // Hook para redireccionar

  const navigation = [
    { title: "Cursos", path: "javascript:void(0)" },
    { title: "Mentores", path: "javascript:void(0)" },
    { title: "Testimonios", path: "javascript:void(0)" },
    { title: "Precios", path: "javascript:void(0)" },
  ];

  useEffect(() => {
    document.onclick = (e) => {
      const target = e.target;
      if (!target.closest(".menu-btn")) setState(false);
    };
  }, []);

  const handleSubscribeClick = () => {
    navigate("/login"); // Redirige a la página de login
  };

  return (
    <div className="relative">
      <div
        className="absolute inset-0 blur-xl h-[580px]"
        style={{
          background:
            "linear-gradient(143.6deg, rgba(192, 132, 252, 0) 20.79%, rgba(232, 121, 249, 0.26) 40.92%, rgba(204, 171, 238, 0) 70.35%)",
        }}
      ></div>
      <div className="relative">
        <header>
          <nav
            className={`pb-5 mt-5 md:text-sm ${
              state
                ? "absolute top-0 inset-x-0 bg-white shadow-lg rounded-xl border mx-2 mt-2 md:shadow-none md:border-none md:mx-0 md:mt-0 md:relative md:bg-transparent"
                : ""
            }`}
          >
            <div className="gap-x-14 items-center max-w-screen-xl mx-auto px-4 md:flex md:px-8">
              <div
                className={`flex-1 items-center mt-8 md:mt-0 md:flex ${
                  state ? "block" : "hidden"
                }`}
              >
                <ul className="flex-1 justify-center items-center space-y-6 md:flex md:space-x-6 md:space-y-0">
                  {navigation.map((item, idx) => (
                    <li key={idx} className="text-gray-700 hover:text-gray-900">
                      <a href={item.path} className="block">
                        {item.title}
                      </a>
                    </li>
                  ))}
                </ul>
                <div className="items-center justify-end mt-6 space-y-6 md:flex md:mt-0">
                  {/* Botón modificado para navegar a Login */}
                  <button
                    onClick={handleSubscribeClick}
                    className="flex items-center justify-center gap-x-1 py-2 px-4 text-white font-medium bg-gray-800 hover:bg-gray-700 active:bg-gray-900 rounded-full md:inline-flex"
                  >
                    Iniciar sesión
                  </button>
                </div>
              </div>
            </div>
          </nav>
        </header>
        <section>
          <div className="max-w-screen-xl mx-auto px-4 py-28 gap-12 text-gray-600 overflow-hidden md:px-8 md:flex">
            <div className="flex-none space-y-5 max-w-lg">
              <h1 className="text-4xl text-gray-800 font-extrabold sm:text-5xl">
                Aprende a programar con los mejores expertos
              </h1>
              <p>
                Conviértete en un desarrollador profesional con nuestros cursos
                de programación. Aprende desde cero hasta niveles avanzados con
                proyectos reales y mentoría personalizada.
              </p>
              <div className="flex items-center gap-x-3 sm:text-sm">
                <button
                  onClick={handleSubscribeClick}
                  className="flex items-center justify-center gap-x-1 py-2 px-4 text-white font-medium bg-gray-800 duration-150 hover:bg-gray-700 active:bg-gray-900 rounded-full md:inline-flex"
                >
                  Comienza ahora
                </button>
                <a
                  href="#"
                  className="flex items-center justify-center gap-x-1 py-2 px-4 text-gray-700 hover:text-gray-900 font-medium duration-150 md:inline-flex"
                >
                  Habla con un asesor
                </a>
              </div>
            </div>
            <div className="flex-1 hidden md:block">
              <img
                src="https://raw.githubusercontent.com/sidiDev/remote-assets/c86a7ae02ac188442548f510b5393c04140515d7/undraw_progressive_app_m-9-ms_oftfv5.svg"
                className="max-w-xl"
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Hero;
