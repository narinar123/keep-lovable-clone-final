"use client";

import { BackgroundCanvas } from "@/components/BackgroundCanvas";
import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export default function Home() {
  return (
    <main className="relative min-h-screen flex flex-col font-sans">
      <BackgroundCanvas />
      
      {/* Header Reconstructed from lovable.dev */}
      <nav className="fixed top-0 w-full px-6 py-4 flex justify-between items-center z-50 backdrop-blur-md border-b border-border/40 bg-background/50">
        <div className="flex items-center gap-x-14">
          <a aria-label="Go to homepage" className="transition-opacity hover:opacity-75 flex items-center" href="/">
            <svg role="img" aria-label="Lovable" viewBox="0 0 755 129" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0 text-foreground h-6 lg:h-[18px]">
              <path fill="currentColor" d="M303.603 30.94c9.149 0 17.163 1.982 24.04 5.945 6.876 3.963 12.18 9.616 15.91 16.959 3.788 7.285 5.682 15.852 5.682 25.7 0 9.85-1.894 18.447-5.682 25.79-3.73 7.343-9.034 12.996-15.91 16.959-6.877 3.963-14.891 5.944-24.04 5.944-9.15 0-17.193-1.981-24.128-5.944-6.877-3.963-12.21-9.616-15.998-16.959-3.73-7.343-5.595-15.94-5.595-25.79 0-9.848 1.865-18.415 5.595-25.7 3.788-7.343 9.121-12.996 15.998-16.96 6.935-3.962 14.978-5.944 24.128-5.944Zm176.168 0c8.683 0 16.026 1.428 22.029 4.284 6.002 2.797 10.519 6.818 13.55 12.063 3.088 5.245 4.633 11.511 4.633 18.796v38.464c0 4.138.292 7.984.874 11.539.641 3.497 1.545 5.712 2.71 6.644v2.972H496.03c-.641-2.506-1.136-5.332-1.486-8.479-.116-1.04-.214-2.1-.298-3.178a32.537 32.537 0 0 1-2.149 2.828c-2.914 3.438-6.674 6.207-11.278 8.305-4.545 2.039-9.732 3.059-15.56 3.059-5.77 0-10.957-1.136-15.561-3.409-4.546-2.273-8.13-5.507-10.753-9.703-2.564-4.254-3.846-9.208-3.846-14.861 0-8.626 2.535-15.211 7.605-19.757 5.07-4.604 12.385-7.605 21.942-9.004l15.999-2.273c3.205-.467 5.74-1.05 7.605-1.749 1.865-.699 3.234-1.632 4.108-2.797.875-1.224 1.312-2.768 1.312-4.633 0-1.923-.524-3.672-1.573-5.245-.991-1.632-2.507-2.915-4.546-3.847-1.982-.99-4.4-1.486-7.256-1.486-4.546 0-8.189 1.195-10.928 3.585-2.739 2.33-4.225 5.536-4.458 9.615h-27.362c.233-6.178 2.098-11.656 5.595-16.435 3.555-4.837 8.479-8.596 14.773-11.277 6.294-2.68 13.58-4.02 21.856-4.02Zm78.465 15.936a31.342 31.342 0 0 1 3.148-4.92c2.797-3.556 6.206-6.267 10.227-8.132 4.022-1.923 8.538-2.884 13.55-2.884 7.518 0 14.046 1.952 19.582 5.857 5.537 3.905 9.792 9.529 12.764 16.872 2.972 7.285 4.458 15.94 4.458 25.964 0 9.965-1.516 18.62-4.546 25.963-3.031 7.285-7.372 12.879-13.025 16.784-5.595 3.905-12.151 5.857-19.669 5.857-5.012 0-9.5-.873-13.463-2.622-3.905-1.748-7.227-4.371-9.966-7.868a31.218 31.218 0 0 1-3.321-5.4v13.355h-26.227V.342h26.488v46.534ZM710.451 30.94c8.567 0 16.173 1.865 22.817 5.595 6.643 3.73 11.802 9.15 15.473 16.26 3.73 7.11 5.595 15.619 5.595 25.526 0 3.555-.03 6.382-.088 8.48h-63.814c.251 4.09 1.038 7.645 2.359 10.665 1.632 3.73 3.963 6.556 6.993 8.479 3.031 1.865 6.615 2.798 10.753 2.798 4.546 0 8.305-1.166 11.277-3.497 2.972-2.389 4.838-5.74 5.595-10.053h26.487c-.815 6.761-3.117 12.618-6.905 17.572-3.73 4.953-8.713 8.771-14.949 11.452-6.236 2.681-13.492 4.02-21.768 4.02-9.324 0-17.425-1.777-24.302-5.332-6.877-3.613-12.239-9.033-16.085-16.259-3.788-7.227-5.682-16.173-5.682-26.838 0-10.14 1.981-18.883 5.944-26.226 3.963-7.401 9.441-13.026 16.435-16.872 6.993-3.846 14.949-5.77 23.865-5.77Zm-502.536 69.546h32.087c23.362 0 20.196 25.163 20.189 25.216h-79.726V.342h27.45v100.144Zm185.126-2.03 19.101-64.981h27.362l-31.908 92.227h-29.46l-33.132-92.227h28.148l19.889 64.981Zm263.245 27.246h-26.488V.342h26.488v125.36ZM493.845 80.731a13.951 13.951 0 0 1-3.06 1.961c-2.04.991-4.808 1.836-8.305 2.536l-6.731 1.311c-4.487.874-7.868 2.214-10.141 4.02-2.214 1.807-3.322 4.343-3.322 7.606s1.195 5.857 3.584 7.78c2.39 1.924 5.45 2.886 9.18 2.886 3.73 0 7.022-.816 9.878-2.448 2.855-1.69 5.041-4.021 6.556-6.993 1.574-2.972 2.361-6.353 2.361-10.141v-8.518Zm82.662-29.597c-3.905 0-7.256 1.194-10.053 3.584-2.739 2.33-4.808 5.653-6.207 9.966-1.399 4.254-2.098 9.237-2.098 14.949 0 5.77.699 10.782 2.098 15.036s3.468 7.547 6.207 9.878c2.797 2.331 6.148 3.497 10.053 3.497 3.963 0 7.285-1.166 9.966-3.497 2.739-2.331 4.778-5.624 6.119-9.878 1.398-4.254 2.098-9.267 2.098-15.036 0-5.77-.7-10.782-2.098-15.036-1.341-4.255-3.38-7.548-6.119-9.88-2.681-2.389-6.003-3.583-9.966-3.583Zm-272.904.088c-3.847 0-7.169 1.078-9.966 3.234-2.739 2.098-4.838 5.274-6.295 9.528-1.457 4.196-2.185 9.383-2.185 15.56 0 6.178.728 11.395 2.185 15.65 1.457 4.254 3.556 7.459 6.295 9.616 2.797 2.097 6.119 3.146 9.966 3.146 3.846 0 7.138-1.049 9.877-3.146 2.74-2.157 4.837-5.334 6.294-9.53 1.457-4.254 2.186-9.5 2.186-15.735 0-9.266-1.602-16.289-4.808-21.068-3.205-4.837-7.722-7.255-13.549-7.255Zm406.237-1.137c-3.905 0-7.343.962-10.316 2.885-2.914 1.865-5.187 4.662-6.819 8.392-.893 2.117-1.532 4.477-1.918 7.081h36.494c-.261-3.3-.917-6.156-1.969-8.567-1.34-3.264-3.321-5.712-5.944-7.344-2.622-1.631-5.799-2.447-9.528-2.447Z" />
              <mask id="logo_mask" width="124" height="126" x="0" y="0" maskUnits="userSpaceOnUse" style={{maskType: 'alpha'}}>
                <path fill="url(#logo_grad)" fillRule="evenodd" d="M37.3.343c20.43 0 36.991 16.605 36.991 37.088v14.095h12.31c20.43 0 36.991 16.605 36.991 37.088s-16.561 37.088-36.99 37.088H.31V37.431C.31 16.948 16.87.343 37.3.343Z" clipRule="evenodd" />
              </mask>
              <g mask="url(#logo_mask)">
                <circle cx="54.389" cy="67.257" r="83.452" fill="#4B73FF" />
                <ellipse cx="63.557" cy="21.462" fill="#FF66F4" rx="106.879" ry="83.452" />
                <ellipse cx="80.992" cy="5.757" fill="#FF0105" rx="83.452" ry="73.289" />
                <circle cx="65.043" cy="21.442" r="50.188" fill="#FE7B02" />
              </g>
              <defs>
                <linearGradient id="logo_grad" x1="41.797" x2="79.356" y1="22.372" y2="125.655" gradientUnits="userSpaceOnUse">
                  <stop offset=".025" stopColor="#FF8E63" />
                  <stop offset=".56" stopColor="#FF7EB0" />
                  <stop offset=".95" stopColor="#4B73FF" />
                </linearGradient>
              </defs>
            </svg>
          </a>

          <div className="hidden md:flex items-center gap-x-6 text-[15px] font-medium text-foreground/80">
            <a href="#" className="hover:text-foreground transition-colors">Solutions</a>
            <a href="#" className="hover:text-foreground transition-colors">Resources</a>
            <a href="#" className="hover:text-foreground transition-colors">Community</a>
            <a href="#" className="hover:text-foreground transition-colors">Enterprise</a>
            <a href="#" className="hover:text-foreground transition-colors">Pricing</a>
            <a href="#" className="hover:text-foreground transition-colors">Security</a>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <ModeToggle />
          <Button variant="ghost" className="font-semibold" data-testid="login-btn">Log in</Button>
          <Button className="bg-foreground text-background hover:bg-foreground/90 font-semibold" data-testid="get-started-btn">Get started</Button>
        </div>
      </nav>

      {/* Hero Section Reconstructed from lovable.dev */}
      <div className="flex-1 flex flex-col items-center justify-center px-6 pt-32 pb-24 z-10 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-[1000px]"
        >
          <h1 className="text-5xl md:text-[80px] font-bold tracking-tight mb-8 leading-[1.1] text-foreground" data-testid="hero-heading">
            Vibe Code Apps & Websites with AI, Fast
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed" data-testid="hero-subheading">
            Build apps, websites, and digital products faster using our no-code and AI-powered platform, no deep coding skills required.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="h-14 px-8 text-lg bg-primary text-primary-foreground font-semibold rounded-xl w-full sm:w-auto">
              Start building for free
            </Button>
            <Button size="lg" variant="outline" className="h-14 px-8 text-lg bg-background/50 backdrop-blur-sm font-semibold rounded-xl border-border w-full sm:w-auto">
              Book a demo
            </Button>
          </div>
        </motion.div>

        {/* Floating UI Elements abstraction */}
        <motion.div 
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-24 w-full max-w-4xl"
        >
          <motion.div variants={item}>
            <Card className="bg-card/60 backdrop-blur-xl border-border/50 hover:border-primary/50 transition-colors shadow-2xl">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mb-4">
                  <span className="text-xl">⚡</span>
                </div>
                <CardTitle className="text-2xl">Lightning Fast</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-lg">
                  Deploy your app to production in a single click. Our infrastructure scales with you effortlessly.
                </CardDescription>
              </CardContent>
            </Card>
          </motion.div>
          <motion.div variants={item}>
            <Card className="bg-card/60 backdrop-blur-xl border-border/50 hover:border-primary/50 transition-colors shadow-2xl">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mb-4">
                  <span className="text-xl">🤖</span>
                </div>
                <CardTitle className="text-2xl">AI Native</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-lg">
                  Every element is generated and tweaked using advanced reasoning models locally.
                </CardDescription>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </main>
  );
}
