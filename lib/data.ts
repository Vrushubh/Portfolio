export const profile = {
  name: "Vrushubh Gandhi",
  role: ".NET Developer",
  email: "vrushubhgandhi717@gmail.com",
  location: "Pune, Maharashtra, India",
  phone: "+91 7972028599",
  summary: "I am a .NET Developer experienced in building scalable web applications and RESTful APIs using C#, ASP.NET Core, ASP.NET MVC, Entity Framework Core, and SQL Server. I focus on writing clean, maintainable code, designing efficient backend architectures, and developing reliable software solutions. I am also exploring Generative AI and LLM integrations to build intelligent applications."
};

export const socialLinks = [
  { label: "GitHub", href: "", handle: "Add your GitHub URL" },
  { label: "LinkedIn", href: "", handle: "Add your LinkedIn URL" }
];

export const skillGroups = [
  { title: "Programming", icon: "code", skills: ["C#", "SQL", "JavaScript"] },
  { title: "Backend & .NET", icon: "server", skills: [".NET", ".NET Core", "ASP.NET Core", "ASP.NET MVC", "ASP.NET Core Web API", "RESTful APIs", "JSON"] },
  { title: "Data Access", icon: "database", skills: ["Entity Framework Core", "ADO.NET", "LINQ", "DbContext", "DbSet", "Code First", "Migrations"] },
  { title: "Database", icon: "table", skills: ["Microsoft SQL Server", "Complex Queries", "Joins", "Stored Procedures", "Views", "Indexes", "Transactions"] },
  { title: "Architecture", icon: "workflow", skills: ["OOP", "SOLID Principles", "Dependency Injection", "Middleware", "Routing", "Exception Handling", "Logging"] },
  { title: "Frontend & AI", icon: "sparkles", skills: ["HTML5", "CSS3", "Bootstrap", "Generative AI", "LLMs", "RAG", "Vector Search", "Prompt Engineering"] },
  { title: "Tools & Practices", icon: "wrench", skills: ["Visual Studio", "VS Code", "Git", "GitHub", "Postman", "SSMS", "Agile / SDLC", "Debugging"] }
];

export const experience = {
  company: "Humanus Global Private Limited",
  role: ".NET Developer",
  location: "Pune, Maharashtra",
  period: "April 2025 — Present",
  points: [
    "Design and maintain scalable web applications using C#, .NET, ASP.NET Core, and ASP.NET MVC.",
    "Architect and implement secure RESTful APIs with ASP.NET Core Web API for frontend–backend communication.",
    "Build maintainable business logic grounded in object-oriented programming and SOLID principles.",
    "Use Entity Framework Core for data access, CRUD operations, and optimized LINQ querying.",
    "Develop and maintain SQL queries, joins, stored procedures, views, and indexes in Microsoft SQL Server.",
    "Configure server-side validation, centralized exception handling, and custom middleware.",
    "Apply Dependency Injection to structure loosely coupled, modular application components.",
    "Test APIs, debug issues, and perform root-cause analysis using Postman and Visual Studio.",
    "Build responsive interfaces with HTML, CSS, JavaScript, and Bootstrap.",
    "Collaborate in Agile workflows using Git and GitHub; explore LLMs, prompt engineering, and AI API integrations."
  ]
};

export const projects = [
  {
    number: "01", title: "Employee Management System", type: "Web application",
    description: "An employee lifecycle management application built around dependable CRUD workflows, server-side validation, and a relational data model.",
    details: ["Employee lifecycle workflows", "EF Core relational schema and constraints", "LINQ filtering, sorting, and querying", "Responsive Bootstrap interface"],
    stack: ["C#", "ASP.NET Core MVC", "EF Core", "SQL Server", "Bootstrap"],
    github: "", demo: "", visual: "employees"
  },
  {
    number: "02", title: "AI-Powered Document & Text Assistant", type: "AI-integrated backend",
    description: "An AI-enabled web service for text summarization, question answering, and content generation, with an exploration of retrieval-augmented document workflows.",
    details: ["LLM API integration", "Structured prompt templates", "RAG, embeddings, and vector search exploration", "Browser chat with JSON API communication"],
    stack: ["C#", "ASP.NET Core Web API", "LLM APIs", "Generative AI", "RAG"],
    github: "", demo: "", visual: "assistant"
  }
];

export const strengths = [
  { title: "Backend engineering", text: "Build reliable application services with C#, .NET, and a clear separation of responsibilities." },
  { title: "REST API development", text: "Design API endpoints that connect frontend experiences with dependable backend logic." },
  { title: "Database management", text: "Work with relational data, EF Core, LINQ, and SQL Server query patterns." },
  { title: "Clean code & SOLID", text: "Favor maintainable, modular code supported by OOP and dependency injection." },
  { title: "Problem solving", text: "Debug methodically, validate assumptions, and focus on practical software outcomes." },
  { title: "AI integration", text: "Explore LLM APIs, prompt engineering, RAG, and intelligent application features." }
];
