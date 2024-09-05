import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHatCowboy, faComment, faFlask, faVial, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { motion } from "framer-motion";

const Main = () => {
  return (
    <main>
      <section className="mx-auto max-w-full px-3 py-20 gradient-1">
        <motion.div
          initial={{ x: -100 }}
          whileInView={{ x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <div className="flex md:px-10 lg:px-24 xl:px-48 flex-col items-center md:flex-row md:justify-between md:gap-x-24">
            <div className="shrink-0 z-40">
              <img
                className="w-64 sm:w-72 rounded-full shadow-md shadow-gray-950 border-solid border-4 border-slate-950"
                src="https://i.imgur.com/AMaR2JC.png"
                alt="Brandom Bermudez"
              />
            </div>

            <div className="bg-slate-950 shadow-gray-950 pl-6 -mt-24 pt-28 md:pt-8 md:-mt-0 md:pl-24 pr-6 pb-8 -ml-0 md:-ml-44 rounded-lg shadow-md z-0 text-white">
              <h1 className="text-3xl font-bold mb-2">
                <span className="text-green-500 animate__animated animate__bounceInRight">
                  Brandom Bermudez
                </span>
              </h1>
              <p className="text-balance">
                Hola soy un desarrollador web apasionado por dar vida a ideas
                innovadoras a través del código. Me encanta enfrentar nuevos
                desafíos y encontrar soluciones creativas a problemas complejos.
                La programación es mi pasión, y cada proyecto es una oportunidad
                para aprender y crecer. Si buscas un desarrollador web
                comprometido y con una mente abierta,&nbsp;
                <span className="text-green-500">
                  ¡estás en el lugar correcto!
                </span>
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ x: -100 }}
          whileInView={{ x: 0 }}
          transition={{ duration: 2.5 }}
          viewport={{ once: true }}
        >
          <div className="w-fit mt-3 mb-1 mx-auto bg-slate-950 shadow-gray-950 py-8 px-6 rounded-lg text-center shadow-md">
            <p>
              <FontAwesomeIcon icon={faComment} className="text-green-500" />{" "}
              ¡Sigue navegando y conoce más sobre mí!
            </p>
          </div>
        </motion.div>
      </section>

      {/* Skills and experience */}
      <section className="max-w-screen-2xl bg-slate-950 py-12">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 2 }}
          viewport={{ once: true }}
          className="mx-auto max-w-screen-lg items-center grid grid-cols-5 gap-4"
        >
          <div className="col-span-5 px-4 pb-6 text-left">
            <h2 className="text-3xl font-bold text-green-500">
              <FontAwesomeIcon icon={faHatCowboy} /> Skills
            </h2>
            <p className="my-2">Tengo dominio de las siguientes tecnologias:</p>
          </div>
          <div className="relative">
            <img
              className="w-28 shrink-0 mx-auto transition ease-in-out duration-500 hover:scale-110"
              src="https://i.imgur.com/GrFAcJ9.png"
              alt="Python"
            />
          </div>
          <div>
            <img
              className="w-28 shrink-0 mx-auto transition ease-in-out duration-500 hover:scale-110"
              src="https://i.imgur.com/QSGAb4s.png"
              alt="Javascript"
            />
          </div>
          <div>
            <img
              className="w-28 shrink-0 mx-auto transition ease-in-out duration-500 hover:scale-110"
              src="https://i.imgur.com/MGAfSji.png"
              alt="Typescript"
            />
          </div>
          <div>
            <img
              className="w-28 shrink-0 mx-auto transition ease-in-out duration-500 hover:scale-110"
              src="https://i.imgur.com/LuAKzf7.png"
              alt="HTML5"
            />
          </div>
          <div>
            <img
              className="w-28 shrink-0 mx-auto transition ease-in-out duration-500 hover:scale-110"
              src="https://i.imgur.com/EG3HH8z.png"
              alt="CSS3"
            />
          </div>
          <div>
            <img
              className="w-28 shrink-0 mx-auto transition ease-in-out duration-500 hover:scale-110"
              src="https://i.imgur.com/5cP6Axf.png"
              alt="Django"
            />
          </div>
          <div>
            <img
              className="w-28 shrink-0 mx-auto transition ease-in-out duration-500 hover:scale-110"
              src="https://i.imgur.com/EF0iaga.png"
              alt="Django REST Framework"
            />
          </div>
          <div>
            <img
              className="w-28 shrink-0 mx-auto transition ease-in-out duration-500 hover:scale-110"
              src="https://i.imgur.com/RXtG97U.png"
              alt="odoo"
            />
          </div>
          <div>
            <img
              className="w-28 shrink-0 mx-auto transition ease-in-out duration-500 hover:scale-110"
              src="https://i.imgur.com/fx1MhtD.png"
              alt="React"
            />
          </div>
          <div>
            <img
              className="w-28 shrink-0 mx-auto transition ease-in-out duration-500 hover:scale-110"
              src="https://i.imgur.com/REtpHKf.png"
              alt="Angular"
            />
          </div>
          <div>
            <img
              className="w-28 shrink-0 mx-auto transition ease-in-out duration-500 hover:scale-110"
              src="https://i.imgur.com/2qZE6kn.png"
              alt="Postgresql"
            />
          </div>
          <div>
            <img
              className="w-28 shrink-0 mx-auto transition ease-in-out duration-500 hover:scale-110"
              src="https://i.imgur.com/IPTuja5.png"
              alt="Git"
            />
          </div>
          <div>
            <img
              className="w-28 shrink-0 mx-auto transition ease-in-out duration-500 hover:scale-110"
              src="https://i.imgur.com/uC5cJhM.png"
              alt="Docker"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 2 }}
          viewport={{ once: true }}
          className="mx-auto max-w-screen-lg items-center grid grid-cols-2 mt-24 auto-rows-max auto-cols-max"
        >
          <div className="col-span-2 px-4 pb-6 text-left">
            <h2 className="text-3xl font-bold text-green-500">
              <FontAwesomeIcon icon={faFlask} /> Experiencia:
            </h2>
            <p className="my-2">
              A continuacion podras observar una descripcion breve de los
              proyectos que he desarrollado:
            </p>
          </div>

          <div className="col-span-2 m-2 sm:col-span-1 border-solid border-2 border-green-500 rounded-lg px-6 py-6 text-green-500 hover:bg-slate-900 transition ease-in-out duration-200">
            <h2 className="text-xl">
              <FontAwesomeIcon icon={faVial} /> Katemoda
            </h2>
            <p className="text-white">
              Plataforma para agilizar la compra de ropa para niñas en Shein.
            </p>
          </div>
          <div className="col-span-2 m-2 sm:col-span-1 border-solid border-2 border-green-500 rounded-lg px-6 py-6 text-green-500 hover:bg-slate-900 transition ease-in-out duration-200">
            <h2 className="text-xl">
              <FontAwesomeIcon icon={faVial} /> Treasycoins
            </h2>
            <p className="text-white">
              Plataforma de trading de monedas y articulos de videojuegos.
            </p>
          </div>
          <div className="col-span-2 m-2 sm:col-span-1 border-solid border-2 border-green-500 rounded-lg px-6 py-6 text-green-500 hover:bg-slate-900 transition ease-in-out duration-200">
            <h2 className="text-xl">
              <FontAwesomeIcon icon={faVial} /> VentoryOs
            </h2>
            <p className="text-white">
              Sistema de administración de inventario.
            </p>
          </div>
          <div className="col-span-2 m-2 sm:col-span-1 border-solid border-2 border-green-500 rounded-lg px-6 py-6 text-green-500 hover:bg-slate-900 transition ease-in-out duration-200">
            <h2 className="text-xl">
              <FontAwesomeIcon icon={faVial} /> D-BOTT
            </h2>
            <p className="text-white">
              Bot para reclamar Dogecoins en Telegram.
            </p>
          </div>
          <div className="col-span-2 m-2 sm:col-span-1 border-solid border-2 border-green-500 rounded-lg px-6 py-6 text-green-500 hover:bg-slate-900 transition ease-in-out duration-200">
            <h2 className="text-xl">
              <FontAwesomeIcon icon={faVial} /> vueid
            </h2>
            <p className="text-white">Plugin para usar IndexedDB con Vue.</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="w-2/3 mx-auto max-w-screen-lg items-center mt-24 mb-20"
        >
          <h2 className="text-xl italic">
            "Sin crisis no hay desafíos, sin desafíos la vida es una rutina, una
            lenta agonía. Sin crisis no hay méritos"
          </h2>
          <p className="text-right text-green-500">Albert Einstein.</p>
        </motion.div>
      </section>
      <footer className="max-w-screen-2xl py-12 bg-slate-900">
        <div className="mx-auto max-w-screen-lg items-center grid grid-cols-2 gap-4">
          <div className="text-lg text-center col-span-2 md:col-span-1">
            <FontAwesomeIcon icon={faEnvelope} className="text-green-500"/> brandomakcode@outlook.com
          </div>
          <div className="text-lg text-center col-span-2 md:col-span-1">
            <FontAwesomeIcon icon={faWhatsapp} className="text-green-500"/> +58 412-6464878
          </div>
        </div>
      </footer>
    </main>
  );
};

export default Main;
