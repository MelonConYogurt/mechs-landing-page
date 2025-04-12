import {Facebook, Instagram, Twitch, Twitter, Youtube} from "lucide-react";
import {Button} from "@/components/ui/button";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-purple-900 text-white w-full">
      <header className="container mx-auto py-6 px-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img
            src="https://pbs.twimg.com/media/Gk-yxatWQAAIA5M?format=png&name=900x900"
            alt="Mechs Logo"
            className="object-contain w-20 h-20"
          />
          <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
            MechsLOL
          </span>
        </div>
        <nav className="hidden md:flex gap-6">
          <a href="#home" className="hover:text-purple-400 transition">
            Home
          </a>
          <a href="#about" className="hover:text-purple-400 transition">
            About
          </a>
          <a href="#content" className="hover:text-purple-400 transition">
            Content
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
            Watch Live
          </a>
        </Button>
      </header>

      <section
        id="home"
        className="container mx-auto px-4 py-20 flex flex-col md:flex-row items-center gap-10"
      >
        <div className="md:w-1/2 space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Welcome to the world of{" "}
            <span className="text-purple-400">Mechs</span>
          </h1>
          <p className="text-lg text-gray-300">
            League of Legends streamer, content creator, and VTuber bringing you
            the best gaming entertainment.
          </p>
          <div className="flex gap-4">
            <Button className="bg-purple-600 hover:bg-purple-700">
              <a
                href="https://www.twitch.tv/lolmechs"
                target="_blank"
                rel="noopener noreferrer"
              >
                Follow on Twitch
              </a>
            </Button>
            <Button variant="outline" className="border-purple-500 text-black">
              <a
                href="https://www.youtube.com/@MechsLOL"
                target="_blank"
                rel="noopener noreferrer"
              >
                YouTube Channel
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
          Latest <span className="text-purple-400">Content</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-black/20 p-6 rounded-lg">
            <div className="flex items-center gap-3 mb-4">
              <Twitch className="w-8 h-8 text-purple-400" />
              <h3 className="text-2xl font-bold">Twitch Streams</h3>
            </div>
            <div className="aspect-video bg-gray-800 rounded-lg mb-4 overflow-hidden">
              <iframe
                src="https://player.twitch.tv/?channel=lolmechs&parent=mechs-landing-page.vercel.app"
                height="100%"
                width="100%"
                className="aspect-video"
                title="Mechs Twitch Stream"
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
                Watch Live on Twitch
              </a>
            </Button>
          </div>

          <div className="bg-black/20 p-6 rounded-lg">
            <div className="flex items-center gap-3 mb-4">
              <Youtube className="w-8 h-8 text-purple-400" />
              <h3 className="text-2xl font-bold">YouTube Videos</h3>
            </div>
            <div className="aspect-video bg-gray-800 rounded-lg mb-4">
              <img
                src="https://pbs.twimg.com/media/Gmc_ahbWcAAf-Zt?format=jpg&name=4096x4096"
                alt="YouTube Video Thumbnail"
                className="rounded-lg w-full h-full object-cover"
              />
            </div>
            <Button className="w-full bg-purple-600 hover:bg-purple-700">
              <a
                href="https://www.youtube.com/@MechsLOL"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full"
              >
                Subscribe on YouTube
              </a>
            </Button>
          </div>
        </div>
      </section>

      <section id="social" className=" py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
            Follow <span className="text-purple-400">Mechs</span>
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
            About <span className="text-purple-400">Mechs</span>
          </h2>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg text-gray-300 mb-6">
              Mechs is a passionate League of Legends player and content creator
              who brings energy and entertainment to every stream and video.
              With a unique VTuber persona, Mechs creates engaging content
              across multiple platforms including Twitch, YouTube, and social
              media.
            </p>
            <p className="text-lg text-gray-300">
              Whether you're looking for high-level gameplay, entertaining
              commentary, or just a fun community to be part of, Mechs' channels
              offer something for every League of Legends enthusiast.
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
            © {new Date().getFullYear()} MechsLOL. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
