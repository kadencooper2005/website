import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Linkedin, Github, Briefcase, Heart, Zap, Shield } from "lucide-react";
import { ModeToggle } from "@/components/modetoggle";

export default function Component() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-green-100 dark:from-gray-900 dark:to-gray-800 transition-colors">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          {/* Toggle Button */}
          <div className="flex justify-end mb-4">
            <ModeToggle />
          </div>

          {/* Header Section with Image */}
          <div className="mb-12">
            <div className="mb-8">
              <div className="w-45 h-45 mx-auto mb-6 rounded-full bg-gradient-to-br from-green-500 to-green-600 p-1 shadow-lg">
                <img
                  src="/proffesional_image.JPG?height=120&width=120"
                  alt="Professional headshot"
                  className="w-full h-full rounded-full object-cover bg-white"
                />
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-green-600 to-green-700 bg-clip-text text-transparent mb-6 dark:from-green-400 dark:to-green-300">
              What's up! 👋
            </h1>
            <p className="text-xl md:text-2xl text-slate-700 dark:text-slate-300 mb-8 leading-relaxed">
              I'm excited you're here! Let's create something amazing together.
              I bring the perfect mix of
              <span className="text-green-600 font-semibold dark:text-green-400">
                {" "}
                serious expertise
              </span>{" "}
              and
              <span className="text-emerald-600 font-semibold dark:text-emerald-400">
                {" "}
                friendly collaboration
              </span>{" "}
              to every project.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-green-600 mx-auto rounded-full"></div>
          </div>

          {/* Main Content Card */}
          <Card className="mb-12 shadow-xl border-0 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-green-500/5 to-green-600/5"></div>
            <CardContent className="relative p-8 md:p-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-white mb-6">
                Ready to make magic happen?
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-300 mb-8 leading-relaxed">
                I believe work should be both impactful and enjoyable. When you
                work with me, you get someone who takes your goals seriously
                while keeping the process fun and collaborative. Let's build
                something incredible!
              </p>
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div className="p-6 rounded-xl bg-gradient-to-br from-green-50 to-green-100 dark:from-gray-700 dark:to-gray-800 border border-green-200 dark:border-gray-600">
                  <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <Shield className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="font-bold text-slate-800 dark:text-white mb-2 text-lg">
                    Rock-Solid Reliable
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300">
                    You can count on me to deliver exactly what I promise, when
                    I promise it
                  </p>
                </div>
                <div className="p-6 rounded-xl bg-gradient-to-br from-green-50 to-green-100 dark:from-gray-700 dark:to-gray-800 border border-greeb-200 dark:border-gray-600">
                  <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <Heart className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="font-bold text-slate-800 dark:text-white mb-2 text-lg">
                    Genuinely Caring
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300">
                    Your success is my success - I'm invested in making your
                    vision come to life
                  </p>
                </div>
                <div className="p-6 rounded-xl bg-gradient-to-br from-emerald-50 to-emerald-100 dark:from-gray-700 dark:to-gray-800 border border-emerald-200 dark:border-gray-600">
                  <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <Zap className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="font-bold text-slate-800 dark:text-white mb-2 text-lg">
                    High-Energy Results
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300">
                    I bring enthusiasm and fresh ideas to solve problems
                    creatively
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Social Media Links */}
          <div className="mb-12">
            <h3 className="text-3xl font-bold text-slate-800 dark:text-white mb-2">
              Let's Connect!
            </h3>
            <p className="text-lg text-slate-600 dark:text-slate-300 mb-8">
              Find me on these platforms - I'd love to hear from you!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-8 py-6 rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105 transform"
              >
                <a
                  href="https://www.linkedin.com/in/kaden-cooper-840192276/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3"
                >
                  <Linkedin className="w-5 h-5" />
                  LinkedIn Profile
                </a>
              </Button>

              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-lime-600 to-lime-700 hover:from-lime-700 hover:to-lime-800 text-white px-8 py-6 rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105 transform"
              >
                <a
                  href="https://profile.indeed.com/resume"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3"
                >
                  <Briefcase className="w-5 h-5" />
                  Indeed Profile
                </a>
              </Button>

              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white px-8 py-6 rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105 transform"
              >
                <a
                  href="https://github.com/kadencooper2005"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3"
                >
                  <Github className="w-5 h-5" />
                  GitHub Portfolio
                </a>
              </Button>
            </div>
          </div>

          {/* Call to Action */}
          <div className="bg-gradient-to-r from-green-600 to-emerald-600 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8 md:p-12 text-white shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 bg-black/10"></div>
            <div className="relative">
              <h3 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to chat?
              </h3>
              <p className="text-lg mb-6 text-green-100 dark:text-gray-300">
                Whether you want to discuss a project, explore opportunities, or
                just say hi - I'm all ears! Let's start a conversation that
                could lead to something awesome.
              </p>
              <a
                href="mailto:kadencooper608@gmail.com"
                className="inline-flex items-center justify-center bg-white text-green-600 hover:bg-gray-50 px-8 py-4 rounded-xl font-bold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 transform text-lg"
              >
                Let's Talk!
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
