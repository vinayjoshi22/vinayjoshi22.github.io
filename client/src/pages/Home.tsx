import { useEffect, useState } from "react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  GraduationCap,
  Download,
  ExternalLink,
  MapPin,
  Mail,
  ChevronDown,
  Terminal
} from "lucide-react";
import {
  useProfile,
  useExperience,
  useEducation,
  useSkills,
  usePublications,
  useAwards
} from "@/hooks/use-profile";
import { Nav } from "@/components/Nav";
import { TerminalCard } from "@/components/TerminalCard";
import { SectionHeader } from "@/components/SectionHeader";
import { GlitchText } from "@/components/GlitchText";

export default function Home() {
  const { data: profile } = useProfile();
  const { data: experience } = useExperience();
  const { data: education } = useEducation();
  const { data: skills } = useSkills();
  const { data: publications } = usePublications();
  const { data: awards } = useAwards();

  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-primary selection:text-background">
      <div className="scanlines" />
      <div className="grid-bg fixed inset-0 opacity-20 pointer-events-none" />

      <Nav />

      <main className="relative pt-20 pb-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-32">

        {/* HERO SECTION */}
        <section className="min-h-[85vh] flex flex-col justify-center">
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="flex justify-center lg:hidden pb-4"
            >
              <div className="relative w-40 h-40 rounded-full overflow-hidden border-4 border-primary/20 shadow-[0_0_30px_rgba(0,0,0,0.3)]">
                <img
                  src="/profile.jpg"
                  alt="Vinay Joshi"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="font-mono-space text-primary text-sm sm:text-base tracking-widest"
            >
              &gt; INITIALIZING SYSTEM_PROFILE...
            </motion.div>

            <h1 className="text-5xl sm:text-7xl md:text-8xl font-display font-bold text-white tracking-tight">
              <GlitchText text={profile?.name || "VINAY JOSHI"} />
            </h1>

            <div className="h-20 sm:h-24">
              <div className="text-xl sm:text-2xl md:text-4xl text-muted-foreground font-mono-space">
                <span className="text-secondary mr-2">$</span>
                <TypeAnimation
                  sequence={[
                    "AI Researcher",
                    1000,
                    "Systems Engineer",
                    1000,
                    "Tech Innovator",
                    1000,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                />
              </div>
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="max-w-2xl text-lg text-muted-foreground leading-relaxed font-light"
            >
              {profile?.bio || "Researching at the intersection of artificial intelligence and high-performance systems. Building the future of compute."}
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="flex flex-wrap gap-4 pt-4"
            >
              {profile?.socialLinks && (
                <>
                  <a
                    href={(profile.socialLinks as any).github}
                    target="_blank"
                    className="flex items-center gap-2 px-6 py-3 border border-white/10 hover:border-primary hover:text-primary transition-all duration-300 bg-white/5 hover:bg-white/10"
                  >
                    <Github className="w-5 h-5" />
                    <span className="font-mono-space text-sm">GITHUB</span>
                  </a>
                  <a
                    href={(profile.socialLinks as any).linkedin}
                    target="_blank"
                    className="flex items-center gap-2 px-6 py-3 border border-white/10 hover:border-primary hover:text-primary transition-all duration-300 bg-white/5 hover:bg-white/10"
                  >
                    <Linkedin className="w-5 h-5" />
                    <span className="font-mono-space text-sm">LINKEDIN</span>
                  </a>
                  <a
                    href={(profile.socialLinks as any).scholar}
                    target="_blank"
                    className="flex items-center gap-2 px-6 py-3 border border-white/10 hover:border-primary hover:text-primary transition-all duration-300 bg-white/5 hover:bg-white/10"
                  >
                    <GraduationCap className="w-5 h-5" />
                    <span className="font-mono-space text-sm">SCHOLAR</span>
                  </a>
                </>
              )}
              <a
                href="https://github.com/vinayjoshi22/vinayjoshi22.github.io/blob/main/resume.pdf"
                className="flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-bold hover:bg-primary/90 transition-all duration-300"
              >
                <Download className="w-5 h-5" />
                <span className="font-mono-space text-sm">RESUME_V1.0</span>
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="absolute top-20 right-8 hidden lg:block"
          >
            <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-primary/20 shadow-[0_0_30px_rgba(0,0,0,0.3)]">
              <img
                src="/profile.jpg"
                alt="Vinay Joshi"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, y: [0, 10, 0] }}
            transition={{ delay: 2, duration: 2, repeat: Infinity }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 text-muted-foreground"
          >
            <ChevronDown className="w-8 h-8" />
          </motion.div>
        </section>

        {/* EXPERIENCE SECTION */}
        <section id="experience" className="scroll-mt-24">
          <SectionHeader number="01" title="Work Experience" />

          <div className="space-y-8 relative">
            <div className="absolute left-0 top-0 bottom-0 w-px bg-white/10 md:left-8" />

            {experience?.map((job, idx) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="relative pl-8 md:pl-16 group"
              >
                <div className="absolute left-[-4px] md:left-[29px] top-2 w-2 h-2 rounded-full bg-primary ring-4 ring-background" />

                <div className="mb-2 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                  <h3 className="text-xl text-white font-bold group-hover:text-primary transition-colors">
                    {job.role}
                    <span className="text-primary"> @ {job.company}</span>
                  </h3>
                  <span className="font-mono-space text-sm text-muted-foreground bg-white/5 px-2 py-1">
                    {job.period}
                  </span>
                </div>

                <p className="text-muted-foreground leading-relaxed max-w-3xl border-l-2 border-white/5 pl-4 hover:border-primary/50 transition-colors">
                  {job.description}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* EDUCATION SECTION (Nested in Experience styling or separate) */}
        <section className="space-y-8">
          <h3 className="text-lg font-mono-space text-primary uppercase tracking-wider mb-8">
            // Education_History
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {education?.map((edu, idx) => (
              <TerminalCard key={edu.id} delay={idx} title="ACADEMIC_RECORD">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h4 className="text-white font-bold text-lg">{edu.school}</h4>
                    <p className="text-primary text-sm font-mono-space mt-1">{edu.degree}</p>
                  </div>
                  <span className="text-xs text-muted-foreground font-mono-space border border-white/10 px-2 py-1">
                    {edu.period}
                  </span>
                </div>
              </TerminalCard>
            ))}
          </div>
        </section>

        {/* SKILLS SECTION */}
        <section id="skills" className="scroll-mt-24">
          <SectionHeader number="02" title="Skills" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills?.map((skillGroup, idx) => (
              <TerminalCard key={skillGroup.id} delay={idx} className="h-full">
                <h3 className="text-primary font-mono-space mb-4 border-b border-primary/20 pb-2 inline-block">
                  {skillGroup.category}
                </h3>
                <ul className="space-y-2">
                  {skillGroup.items.map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span className="w-1.5 h-1.5 bg-secondary" />
                      {item}
                    </li>
                  ))}
                </ul>
              </TerminalCard>
            ))}
          </div>
        </section>

        {/* PUBLICATIONS SECTION */}
        <section id="publications" className="scroll-mt-24">
          <SectionHeader number="03" title="Publications" />

          <div className="space-y-4">
            {publications?.map((pub, idx) => (
              <TerminalCard key={pub.id} delay={idx} className="group cursor-default">
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                  <div className="space-y-2">
                    <h3 className="text-lg font-bold text-white group-hover:text-primary transition-colors">
                      {pub.title}
                    </h3>
                    <div className="flex flex-wrap gap-4 text-sm font-mono-space text-muted-foreground">
                      <span className="text-secondary">{pub.venue}</span>
                      <span>{pub.year}</span>
                    </div>
                  </div>
                  {pub.link && (
                    <a
                      href={pub.link}
                      target="_blank"
                      className="self-start p-2 text-primary hover:bg-primary/10 rounded transition-colors"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  )}
                </div>
              </TerminalCard>
            ))}
          </div>
        </section>

        {/* AWARDS SECTION */}
        <section id="awards" className="scroll-mt-24">
          <SectionHeader number="04" title="Honors & Awards" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {awards?.map((award, idx) => (
              <motion.div
                key={award.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="flex items-start gap-4 p-4 border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] transition-colors"
              >
                <div className="mt-1 text-secondary">
                  <Terminal className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-white font-bold">{award.title}</h4>
                  <p className="text-sm text-muted-foreground mt-1">{award.issuer}</p>
                  <span className="text-xs font-mono-space text-primary mt-2 block">
                    {award.date}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* FOOTER */}
        <footer className="border-t border-white/10 pt-12 pb-8 text-center space-y-4">
          <div className="text-sm font-mono-space text-muted-foreground">
            <p>Designed & Built by Vinay Joshi</p>
            <p className="mt-2 text-xs opacity-50">
              © {new Date().getFullYear()}
            </p>
          </div>
        </footer>
      </main>
    </div>
  );
}
