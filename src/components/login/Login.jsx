import { GoogleLogin } from "@react-oauth/google";
import { useState } from "react";
import { useNavigate } from "react-router";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); // Para manejar errores
  const navigate = useNavigate(); // Hook para redirigir

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await fetch(`src/datos/db.json`);
  
      if (!response.ok) {
        throw new Error(`Error en la respuesta: ${response.status}`);
      }
  
      const text = await response.text();
      console.log("Respuesta del servidor:", text);
  
      const data = JSON.parse(text);
      const user = data.users.find((u) => u.username === email && u.password === password);
  
      if (user) {
        alert("Inicio de sesión exitoso");
        navigate("/home");
      } else {
        setError("Credenciales incorrectas");
      }
    } catch (err) {
      console.error("Error al leer los datos", err);
      setError("Error al conectar con la base de datos");
    }
  };
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-md shadow-lg w-full max-w-sm">
        <h2 className="text-2xl font-semibold text-center text-gray-800">
          Iniciar sesión
        </h2>
        <p className="mt-2 text-sm text-center text-gray-500">
          Accede a tu cuenta para continuar
        </p>

        {error && <p className="text-red-500 text-sm text-center mt-2">{error}</p>}

        <form className="mt-6" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm text-gray-700">Correo electrónico</label>
            <input
              type="email"
              placeholder="ejemplo@correo.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 px-4 py-2 w-full border rounded-md outline-none focus:border-indigo-600"
              required
            />
          </div>

          <div className="mt-4">
            <label className="block text-sm text-gray-700">Contraseña</label>
            <input
              type="password"
              placeholder="********"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 px-4 py-2 w-full border rounded-md outline-none focus:border-indigo-600"
              required
            />
          </div>

          <div className="flex justify-between items-center mt-4">
            <a href="#" className="text-sm text-indigo-600 hover:underline">
              ¿Olvidaste tu contraseña?
            </a>
          </div>
            
        <GoogleLogin>
          onSucess={(credentialResponse)=>{
            console.log(credentialResponse)
            
            navigate("/home")
            }}
          onError={()=>console.log("Login failed")}
        </GoogleLogin>

          <button
            type="submit"
            className="w-full mt-4 py-2 text-white bg-indigo-600 rounded-md hover:bg-indigo-500 focus:outline-none focus:ring-2 ring-indigo-600"
          >
            Iniciar sesión
          </button>
        </form>

        <p className="mt-4 text-sm text-center text-gray-600">
          ¿No tienes una cuenta?{" "}
          <a href="#" className="text-indigo-600 hover:underline">
            Regístrate
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
