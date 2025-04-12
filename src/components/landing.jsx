import {Facebook, Instagram, Twitch, Twitter, Youtube} from "lucide-react";
import {Button} from "@/components/ui/button";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-purple-900 text-white w-full">
      <header className="container mx-auto py-6 px-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img
            src="https://pbs.twimg.com/media/Gk-yxatWQAAIA5M?format=png&name=900x900"
            alt="Logo de Mechs"
            className="object-contain w-20 h-20"
          />
          <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
            MechsLOL
          </span>
        </div>
        <nav className="hidden md:flex gap-6">
          <a href="#home" className="hover:text-purple-400 transition">
            Inicio
          </a>
          <a href="#about" className="hover:text-purple-400 transition">
            Acerca de
          </a>
          <a href="#content" className="hover:text-purple-400 transition">
            Contenido
          </a>
          <a href="#social" className="hover:text-purple-400 transition">
            Social
          </a>
        </nav>
        <Button
          variant="outline"
          className="border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white"
        >
          <a
            href="https://www.twitch.tv/lolmechs"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ver en Vivo
          </a>
        </Button>
      </header>

      <section
        id="home"
        className="container mx-auto px-4 py-20 flex flex-col md:flex-row items-center gap-10"
      >
        <div className="md:w-1/2 space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Bienvenido al mundo de{" "}
            <span className="text-purple-400">Mechs</span>
          </h1>
          <p className="text-lg text-gray-300">
            Streamer de League of Legends, creador de contenido y VTuber que te
            trae el mejor entretenimiento de gaming.
          </p>
          <div className="flex gap-4">
            <Button className="bg-purple-600 hover:bg-purple-700">
              <a
                href="https://www.twitch.tv/lolmechs"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sígueme en Twitch
              </a>
            </Button>
            <Button variant="outline" className="border-purple-500 text-black">
              <a
                href="https://www.youtube.com/@MechsLOL"
                target="_blank"
                rel="noopener noreferrer"
              >
                Canal de YouTube
              </a>
            </Button>
          </div>
        </div>
        <div className="md:w-1/2 relative">
          <div className="absolute -inset-4 bg-purple-500/20 rounded-full blur-xl animate-pulse"></div>
          <img
            src="https://pbs.twimg.com/media/GlTZ6jqXAAA0xUv?format=jpg&name=large"
            alt="Mechs VTuber"
            className="rounded-lg relative z-10 mx-auto"
          />
        </div>
      </section>

      <section id="content" className=" mx-auto px-4 py-20  bg-black/30  ">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
          Último <span className="text-purple-400">Contenido</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-black/20 p-6 rounded-lg">
            <div className="flex items-center gap-3 mb-4">
              <Twitch className="w-8 h-8 text-purple-400" />
              <h3 className="text-2xl font-bold">Streams de Twitch</h3>
            </div>
            <div className="aspect-video bg-gray-800 rounded-lg mb-4 overflow-hidden">
              <iframe
                src="https://player.twitch.tv/?channel=lolmechs&parent=mechs-landing-page.vercel.app"
                height="100%"
                width="100%"
                className="aspect-video"
                title="Stream de Twitch de Mechs"
                allowFullScreen
              ></iframe>
            </div>
            <Button className="w-full bg-purple-600 hover:bg-purple-700">
              <a
                href="https://www.twitch.tv/lolmechs"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full"
              >
                Ver en Vivo en Twitch
              </a>
            </Button>
          </div>

          <div className="bg-black/20 p-6 rounded-lg">
            <div className="flex items-center gap-3 mb-4">
              <Youtube className="w-8 h-8 text-purple-400" />
              <h3 className="text-2xl font-bold">Videos de YouTube</h3>
            </div>
            <div className="aspect-video bg-gray-800 rounded-lg mb-4">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/-4EUIqfm__8?si=I7AUc7K7318ZRotY&mute=1&rel=0"
                title="Reproductor de video de YouTube"
                frameborder="0"
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
            </div>
            <Button className="w-full bg-purple-600 hover:bg-purple-700">
              <a
                href="https://www.youtube.com/@MechsLOL"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full"
              >
                Suscríbete en YouTube
              </a>
            </Button>
          </div>
        </div>
      </section>

      <section id="social" className=" py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
            Sigue a <span className="text-purple-400">Mechs</span>
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 max-w-3xl mx-auto">
            <a
              href="https://www.twitch.tv/lolmechs"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-3 p-6 bg-black/20 rounded-lg hover:bg-purple-900/50 transition group"
            >
              <Twitch className="w-10 h-10 text-purple-400 group-hover:text-white transition" />
              <span className="font-medium">Twitch</span>
            </a>

            <a
              href="https://www.youtube.com/@MechsLOL"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-3 p-6 bg-black/20 rounded-lg hover:bg-purple-900/50 transition group"
            >
              <Youtube className="w-10 h-10 text-purple-400 group-hover:text-white transition" />
              <span className="font-medium">YouTube</span>
            </a>

            <a
              href="https://x.com/MechsLOL"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-3 p-6 bg-black/20 rounded-lg hover:bg-purple-900/50 transition group"
            >
              <Twitter className="w-10 h-10 text-purple-400 group-hover:text-white transition" />
              <span className="font-medium">Twitter</span>
            </a>

            <a
              href="https://www.instagram.com/mechslol/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-3 p-6 bg-black/20 rounded-lg hover:bg-purple-900/50 transition group"
            >
              <Instagram className="w-10 h-10 text-purple-400 group-hover:text-white transition" />
              <span className="font-medium">Instagram</span>
            </a>

            <a
              href="https://www.facebook.com/Mechslol"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-3 p-6 bg-black/20 rounded-lg hover:bg-purple-900/50 transition group"
            >
              <Facebook className="w-10 h-10 text-purple-400 group-hover:text-white transition" />
              <span className="font-medium">Facebook</span>
            </a>
          </div>
        </div>
      </section>

      <section id="about" className="bg-black/30 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
            Sobre <span className="text-purple-400">Mechs</span>
          </h2>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg text-gray-300 mb-6">
              Mechs es un apasionado jugador de League of Legends y creador de
              contenido que aporta energía y entretenimiento a cada stream y
              video. Con una personalidad única de VTuber, Mechs crea contenido
              atractivo en múltiples plataformas, incluyendo Twitch, YouTube y
              redes sociales.
            </p>
            <p className="text-lg text-gray-300">
              Ya sea que estés buscando jugabilidad de alto nivel, comentarios
              entretenidos o simplemente una comunidad divertida de la que
              formar parte, los canales de Mechs ofrecen algo para cada
              entusiasta de League of Legends.
            </p>
          </div>
        </div>
      </section>

      <footer className=" py-10">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center gap-6 mb-6">
            <a
              href="https://www.twitch.tv/lolmechs"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Twitch className="w-6 h-6 text-gray-400 hover:text-purple-400 transition" />
            </a>
            <a
              href="https://www.youtube.com/@MechsLOL"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Youtube className="w-6 h-6 text-gray-400 hover:text-purple-400 transition" />
            </a>
            <a
              href="https://x.com/MechsLOL"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Twitter className="w-6 h-6 text-gray-400 hover:text-purple-400 transition" />
            </a>
            <a
              href="https://www.instagram.com/mechslol/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram className="w-6 h-6 text-gray-400 hover:text-purple-400 transition" />
            </a>
            <a
              href="https://www.facebook.com/Mechslol"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Facebook className="w-6 h-6 text-gray-400 hover:text-purple-400 transition" />
            </a>
          </div>
          <p className="text-gray-400">
            © {new Date().getFullYear()} MechsLOL. Todos los derechos
            reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}
