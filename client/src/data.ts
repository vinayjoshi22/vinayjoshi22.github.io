export interface Profile {
    id: number;
    name: string;
    title: string;
    bio: string;
    location: string;
    email: string;
    socialLinks: {
        linkedin: string;
        scholar: string;
        github: string;
    };
}

export interface Experience {
    id: number;
    role: string;
    company: string;
    period: string;
    description: string;
    order: number;
}

export interface Education {
    id: number;
    degree: string;
    school: string;
    period: string;
    order: number;
}

export interface Skill {
    id: number;
    category: string;
    items: string[];
}

export interface Publication {
    id: number;
    title: string;
    venue: string;
    year: string;
    link?: string | null;
}

export interface Award {
    id: number;
    title: string;
    issuer: string;
    date: string;
}

export const staticData = {
    profile: {
        id: 1,
        name: "Vinay Joshi",
        title: "Staff Software Engineer",
        bio: "AI Research Scientist (Ph.D.) with deep expertise in large language and vision models, architecture, training, inference, and evaluations. Strong record of publications, patents, and leading collaborative AI projects with global teams.",
        location: "Bengaluru, Karnataka, India",
        email: "vinayjoshi.iitb@gmail.com",
        socialLinks: {
            linkedin: "https://www.linkedin.com/in/vinaymjoshi",
            scholar: "https://scholar.google.com/citations?user=VCQtWzUAAAAJ",
            github: "https://github.com/vinayjoshi22"
        }
    } as Profile,

    experience: [
        { id: 1, company: "Google", role: "Staff Software Engineer", period: "Aug 2026 - Present", description: "Leading research and development initiatives in AI systems and software engineering.", order: 1 },
        { id: 2, company: "Microsoft", role: "Principal Applied Scientist", period: "Oct 2025 - Aug 2026", description: "Developing novel customer-centric solutions for Microsoft's core office products.", order: 2 },
        { id: 3, company: "AMD", role: "Member of technical staff/Tech lead", period: "Dec 2024 - Oct 2025", description: "AI for productivity: Leading a team in developing GenAI solution for developer productivity enhancement.", order: 3 },
        { id: 4, company: "Intel Labs", role: "AI Research Scientist", period: "Dec 2021 - Dec 2024", description: "Lead AI Optimization Research (QCQA framework).", order: 4 },
        { id: 5, company: "SRC Research Scholars Program", role: "Research Scholar", period: "Apr 2020 - Dec 2021", description: "Hybrid In-memory Computing research.", order: 5 },
        { id: 6, company: "IBM Research Labs Zurich", role: "Visiting Research Scientist", period: "Jun 2018 - Dec 2019", description: "AI for Hardware Acceleration.", order: 6 }
    ] as Experience[],

    education: [
        { id: 1, school: "King's College London", degree: "Ph.D. Department of Natural & Mathematical Sciences", period: "Apr 2020 - Jun 2022", order: 1 },
        { id: 2, school: "Indian Institute of Technology Bombay", degree: "M.Tech. Electrical Engineering GPA: 9.2/10", period: "Aug 2013 - Jul 2016", order: 2 },
        { id: 3, school: "University of Pune", degree: "B.E. in E&TC Engineering", period: "Aug 2009 - Jun 2013", order: 3 }
    ] as Education[],

    skills: [
        { id: 1, category: "Frameworks", items: ["Numpy", "PyTorch", "JAX", "Torchtune", "Huggingface", "TensorFlow", "PyMoo"] },
        { id: 2, category: "Programming languages", items: ["Python", "C", "C++"] },
        { id: 3, category: "Development tools", items: ["Git", "Bash", "AWS", "Slurm", "Firebase", "Docker", "Singularity"] },
        { id: 4, category: "AI Optimization", items: ["Triton", "torch.compile", "VLLM", "SGLang", "Torch serve"] }
    ] as Skill[],

    publications: [
        { id: 1, title: "Geak: Introducing triton kernel ai agent & evaluation benchmarks", venue: "arXiv preprint arXiv:2507.23194", year: "2025" },
        { id: 2, title: "Apparatuses, methods, and systems for instructions for matrix transpose", venue: "US Patent App. 18/401,410", year: "2025" },
        { id: 3, title: "TaDA: Training-free recipe for Decoding with Adaptive KV Cache Compression and Mean-centering", venue: "arXiv preprint arXiv:2506.04642", year: "2025" },
        { id: 4, title: "Systems, method, and apparatus for quality and capacity-aware grouped query attention", venue: "US Patent App. 18/900,006", year: "2025" },
        { id: 5, title: "Gated unit for a gated recurrent neural network", venue: "US Patent 12,093,802", year: "2024" },
        { id: 6, title: "QCQA: Quality and capacity-aware grouped query attention", venue: "arXiv preprint arXiv:2406.10247", year: "2024" },
        { id: 7, title: "CiMNet: Towards Joint Optimization for DNN Architecture and Configuration for Compute-In-Memory Hardware", venue: "arXiv preprint arXiv:2402.11780", year: "2024" },
        { id: 8, title: "A 64-core mixed-signal in-memory compute chip based on phase-change memory for deep neural network inference", venue: "Nature Electronics 6 (9), 680-693", year: "2023" },
        { id: 9, title: "Conductance drift corrections in neuromorphic systems based on crossbar array structures", venue: "US Patent 11,663,458", year: "2023" },
        { id: 10, title: "Electronic system for computing items of an outer product matrix", venue: "US Patent 11,436,302", year: "2022" },
        { id: 11, title: "Training of artificial neural networks", venue: "US Patent 11,373,092", year: "2022" },
        { id: 12, title: "Hybrid in-memory computing architecture for the training of deep neural networks", venue: "ISCAS", year: "2021" },
        { id: 13, title: "Accurate deep neural network inference using computational phase-change memory", venue: "Nature Communications", year: "2020" },
        { id: 14, title: "Mixed-precision deep learning based on computational memory", venue: "Frontiers of Neuroscience", year: "2020" },
        { id: 15, title: "ESSOP: Efficient and Scalable Stochastic Outer Product Architecture for Deep Learning", venue: "ISCAS", year: "2020" },
        { id: 16, title: "Phase-Change Memory Models for Deep Learning Training and Inference", venue: "ICECS", year: "2019" },
        { id: 17, title: "Deep learning acceleration based on in-memory computing", venue: "IBM Journal of Research and Development", year: "2019" },
        { id: 18, title: "Computational memory-based inference and training of deep neural networks", venue: "Symposium on VLSI Technology", year: "2019" },
        { id: 19, title: "High accuracy sensor fault detection for energy management applications", venue: "IEEE International Conference on Signal Processing", year: "2017" }
    ] as Publication[],

    awards: [
        { id: 1, title: "Exceptional Research Lead Award", issuer: "Intel Labs", date: "May 2024" },
        { id: 2, title: "IBM Research Leadership Award", issuer: "IBM, USA", date: "Apr 2019" },
        { id: 3, title: "Provost Doctoral Assistantship Award", issuer: "NJIT, NJ, USA", date: "Sep 2017" },
        { id: 4, title: "Winner of the Ideathon contest", issuer: "VLSID & ES conference", date: "Jan 2015" },
        { id: 5, title: "Best Speaker Award", issuer: "Reading group, IIT Bombay", date: "Jul 2016" }
    ] as Award[]
};
