import {
    Search,
    Users,
    FileText,
    MessageSquare,
    BarChart3,
    Shield,
    Clock,
    Award,
    Briefcase,
    Building2,
    LayoutDashboard,
    Plus
} from 'lucide-react';

export const jobSeekerFeatures = [
    {
        icon: Search,
        title: "Smart Job Matching",
        description: "AI-powered algorithm matches you with relevant opportunities based on your skills and preferences."
    },
    {
        icon: FileText,
        title: "Resume Builder",
        description: "Create professional resumes with our intuitive builder and templates designed by experts."
    },
    {
        icon: MessageSquare,
        title: "Direct Communication",
        description: "Connect directly with hiring managers and recruiters through our secure messaging platform."
    },
    {
        icon: Award,
        title: "Skill Assessment",
        description: "Showcase your abilities with verified skill tests and earn badges that employers trust."
    },
]

export const employerFeatures = [
    {
        icon: Users,
        title: "Talent Pool Access",
        description: "Access our vast database of pre-screened candidates and find the perfect fit for your team."
    },
    {
        icon: BarChart3,
        title: "Analytics Dashboard",
        description: "Track your hiring performance with detailed analytics and insights on candidate engagement."
    },
    {
        icon: Shield,
        title: "Verified Candidates",
        description: "All candidates undergo background verification to ensure you're hiring trustworthy professionals."
    },
    {
        icon: Clock,
        title: "Quick Hiring",
        description: "Streamlined hiring process reduces time-to-hire by 60% with automated screening tools."
    },
];

// Navigation items configuration
export const NAVIGATION_MENU = [
    { id: "employer-dashboard", name: "Dashboard", icon: LayoutDashboard },
    { id: "post-job", name: "Post Job", icon: Plus },
    { id: "manage-jobs", name: "Manage Jobs", icon: Briefcase },
    { id: "company-profile", name: "Company Profile", icon: Building2 },
];

// Categories and job types
export const CATEGORIES = [
    { value: "Engineering", label: "Engineering" },
    { value: "Design", label: "Design" },
    { value: "Marketing", label: "Marketing" },
    { value: "Sales", label: "Sales" },
    { value: "IT & Software", label: "IT & Software" },
    { value: "Customer-service", label: "Customer Service" },
    { value: "Product", label: "Product" },
    { value: "Operations", label: "Operations" },
    { value: "Finance", label: "Finance" },
    { value: "HR", label: "Human Resources" },
    { value: "Other", label: "Other" },
];

// job types
export const JOB_TYPES = [
    { value: "Remote", label: "Remote" },
    { value: "Full-Time", label: "Full-Time" },
    { value: "Part-Time", label: "Part-Time" },
    { value: "Contract", label: "Contract" },
    { value: "Internship", label: "Internship" },
]

export const SALARY_RANGES = [
    "Less that $1000",
    "$1000 - $15,000",
    "More than $15,000"
]

// Skills
// export const SKILLS = [
//     { value: "ReactJS", label: "ReactJS" },
//     { value: "NextJS", label: "NextJS" },
//     { value: "NestJS", label: "NestJS" },
//     { value: "NodeJS", label: "NodeJS" },
//     { value: "ExpressJS", label: "ExpressJS" },
//     { value: "JavaScript", label: "JavaScript" },
//     { value: "TypeScript", label: "TypeScript" },
//     { value: "HTML", label: "HTML" },
//     { value: "CSS", label: "CSS" },
//     { value: "Sass", label: "Sass" },
//     { value: "SCSS", label: "SCSS" },
//     { value: "TailwindCSS", label: "Tailwind CSS" },
//     { value: "Bootstrap", label: "Bootstrap" },
//     { value: "MaterialUI", label: "Material UI" },
//     { value: "ChakraUI", label: "Chakra UI" },
//     { value: "ShadcnUI", label: "shadcn/ui" },
//     { value: "Redux", label: "Redux" },
//     { value: "ReduxToolkit", label: "Redux Toolkit" },
//     { value: "Zustand", label: "Zustand" },
//     { value: "ReactQuery", label: "React Query" },
//     { value: "TanStackQuery", label: "TanStack Query" },
//     { value: "GraphQL", label: "GraphQL" },
//     { value: "Apollo", label: "Apollo GraphQL" },
//     { value: "RESTAPI", label: "REST API" },
//     { value: "WebSocket", label: "WebSocket" },
//     { value: "SocketIO", label: "Socket.IO" },

//     // ORMs
//     { value: "Mongoose", label: "Mongoose" },
//     { value: "Prisma", label: "Prisma" },
//     { value: "DrizzleORM", label: "Drizzle ORM" },
//     { value: "TypeORM", label: "TypeORM" },
//     { value: "Sequelize", label: "Sequelize" },

//     // Databases
//     { value: "MongoDB", label: "MongoDB" },
//     { value: "PostgreSQL", label: "PostgreSQL" },
//     { value: "MySQL", label: "MySQL" },
//     { value: "SQLite", label: "SQLite" },
//     { value: "Redis", label: "Redis" },
//     { value: "OracleDB", label: "Oracle Database" },
//     { value: "SQLServer", label: "Microsoft SQL Server" },
//     { value: "MariaDB", label: "MariaDB" },
//     { value: "Cassandra", label: "Apache Cassandra" },
//     { value: "DynamoDB", label: "Amazon DynamoDB" },
//     { value: "Neo4j", label: "Neo4j" },
//     { value: "Elasticsearch", label: "Elasticsearch" },
//     { value: "OpenSearch", label: "OpenSearch" },

//     { value: "Git", label: "Git" },
//     { value: "GitHub", label: "GitHub" },
//     { value: "GitLab", label: "GitLab" },
//     { value: "Bitbucket", label: "Bitbucket" },

//     // Additional Skills
//     { value: "Go", label: "Go" },
//     { value: "Rust", label: "Rust" },
//     { value: "Ruby", label: "Ruby" },
//     { value: "RubyOnRails", label: "Ruby on Rails" },
//     { value: "Elixir", label: "Elixir" },
//     { value: "Phoenix", label: "Phoenix" },
//     { value: "Scala", label: "Scala" },
//     { value: "ObjectiveC", label: "Objective-C" },
//     { value: "Dart", label: "Dart" },
//     { value: "Ionic", label: "Ionic" },
//     { value: "Xamarin", label: "Xamarin" },

//     // Backend
//     { value: "Gin", label: "Gin" },
//     { value: "Fiber", label: "Fiber" },
//     { value: "Echo", label: "Echo" },
//     { value: "Actix", label: "Actix Web" },
//     { value: "Rocket", label: "Rocket" },
//     { value: "ASP.NETCore", label: "ASP.NET Core" },
//     { value: "Hibernate", label: "Hibernate" },
//     { value: "Quarkus", label: "Quarkus" },
//     { value: "Micronaut", label: "Micronaut" },

//     // Cloud
//     { value: "Docker", label: "Docker" },
//     { value: "Kubernetes", label: "Kubernetes" },
//     { value: "AWS", label: "AWS" },
//     { value: "Azure", label: "Microsoft Azure" },
//     { value: "GCP", label: "Google Cloud Platform" },
//     { value: "Vercel", label: "Vercel" },
//     { value: "Netlify", label: "Netlify" },
//     { value: "Firebase", label: "Firebase" },
//     { value: "Supabase", label: "Supabase" },

//     { value: "JWT", label: "JWT" },
//     { value: "OAuth", label: "OAuth" },
//     { value: "AuthJS", label: "Auth.js" },
//     { value: "Clerk", label: "Clerk" },

//     { value: "Jest", label: "Jest" },
//     { value: "Vitest", label: "Vitest" },
//     { value: "Cypress", label: "Cypress" },
//     { value: "Playwright", label: "Playwright" },

//     { value: "Linux", label: "Linux" },
//     { value: "Bash", label: "Bash" },
//     { value: "CI/CD", label: "CI/CD" },
//     { value: "GitHubActions", label: "GitHub Actions" },
//     { value: "Jenkins", label: "Jenkins" },

//     { value: "Python", label: "Python" },
//     { value: "Django", label: "Django" },
//     { value: "FastAPI", label: "FastAPI" },
//     { value: "Flask", label: "Flask" },

//     { value: "Java", label: "Java" },
//     { value: "SpringBoot", label: "Spring Boot" },

//     { value: "C", label: "C" },
//     { value: "C++", label: "C++" },
//     { value: "CSharp", label: "C#" },
//     { value: "DotNet", label: ".NET" },

//     { value: "PHP", label: "PHP" },
//     { value: "Laravel", label: "Laravel" },

//     { value: "VueJS", label: "Vue.js" },
//     { value: "NuxtJS", label: "Nuxt.js" },
//     { value: "Angular", label: "Angular" },
//     { value: "Svelte", label: "Svelte" },

//     { value: "ReactNative", label: "React Native" },
//     { value: "Flutter", label: "Flutter" },
//     { value: "Kotlin", label: "Kotlin" },
//     { value: "Swift", label: "Swift" },

//     { value: "Figma", label: "Figma" },
//     { value: "AdobeXD", label: "Adobe XD" },

//     // Messaging & Streaming
//     { value: "Kafka", label: "Apache Kafka" },
//     { value: "RabbitMQ", label: "RabbitMQ" },
//     { value: "NATS", label: "NATS" },
//     { value: "ApachePulsar", label: "Apache Pulsar" },

//     // Cloud & DevOps
//     { value: "Terraform", label: "Terraform" },
//     { value: "Ansible", label: "Ansible" },
//     { value: "Helm", label: "Helm" },
//     { value: "ArgoCD", label: "Argo CD" },
//     { value: "Prometheus", label: "Prometheus" },
//     { value: "Grafana", label: "Grafana" },
//     { value: "Nginx", label: "Nginx" },
//     { value: "Apache", label: "Apache HTTP Server" },

//     // Testing
//     { value: "Mocha", label: "Mocha" },
//     { value: "Chai", label: "Chai" },
//     { value: "Selenium", label: "Selenium" },
//     { value: "Postman", label: "Postman" },
//     { value: "Insomnia", label: "Insomnia" },

//     // AI & Data
//     { value: "MachineLearning", label: "Machine Learning" },
//     { value: "TensorFlow", label: "TensorFlow" },
//     { value: "PyTorch", label: "PyTorch" },
//     { value: "OpenAI", label: "OpenAI API" },
//     { value: "LangChain", label: "LangChain" },
//     { value: "PromptEngineering", label: "Prompt Engineering" },
//     { value: "HuggingFace", label: "Hugging Face" },
//     { value: "LlamaIndex", label: "LlamaIndex" },
//     { value: "Pandas", label: "Pandas" },
//     { value: "NumPy", label: "NumPy" },
//     { value: "ScikitLearn", label: "Scikit-learn" },
//     { value: "ApacheSpark", label: "Apache Spark" },

//     { value: "Agile", label: "Agile" },
//     { value: "Scrum", label: "Scrum" },
//     { value: "ProblemSolving", label: "Problem Solving" },
//     { value: "Communication", label: "Communication" },

//     // Security
//     { value: "OAuth2", label: "OAuth 2.0" },
//     { value: "OpenIDConnect", label: "OpenID Connect" },
//     { value: "Keycloak", label: "Keycloak" },
//     { value: "Vault", label: "HashiCorp Vault" },

//     // CMS & E-commerce
//     { value: "WordPress", label: "WordPress" },
//     { value: "Shopify", label: "Shopify" },
//     { value: "Magento", label: "Magento" },
//     { value: "Strapi", label: "Strapi" },
//     { value: "Contentful", label: "Contentful" },

//     // Collaboration
//     { value: "Jira", label: "Jira" },
//     { value: "Confluence", label: "Confluence" },
//     { value: "Slack", label: "Slack" },
//     { value: "Notion", label: "Notion" },

//     // Methodologies
//     { value: "TDD", label: "Test-Driven Development" },
//     { value: "BDD", label: "Behavior-Driven Development" },
//     { value: "Microservices", label: "Microservices" },
//     { value: "SystemDesign", label: "System Design" },
//     { value: "CleanArchitecture", label: "Clean Architecture" },
//     { value: "DesignPatterns", label: "Design Patterns" },
//     { value: "SOLID", label: "SOLID Principles" },
//     { value: "DDD", label: "Domain-Driven Design" },
//     { value: "EventDrivenArchitecture", label: "Event-Driven Architecture" },
// ];

export const SKILLS = [
    // Frontend
    "ReactJS",
    "NextJS",
    "NestJS",
    "NodeJS",
    "ExpressJS",
    "JavaScript",
    "TypeScript",
    "HTML",
    "CSS",
    "Sass",
    "SCSS",
    "TailwindCSS",
    "Bootstrap",
    "MaterialUI",
    "ChakraUI",
    "ShadcnUI",
    "Redux",
    "ReduxToolkit",
    "Zustand",
    "ReactQuery",
    "TanStackQuery",
    "GraphQL",
    "Apollo",
    "RESTAPI",
    "WebSocket",
    "SocketIO",

    // ORMs
    "Mongoose",
    "Prisma",
    "DrizzleORM",
    "TypeORM",
    "Sequelize",

    // Databases
    "MongoDB",
    "PostgreSQL",
    "MySQL",
    "SQLite",
    "Redis",
    "OracleDB",
    "SQLServer",
    "MariaDB",
    "Cassandra",
    "DynamoDB",
    "Neo4j",
    "Elasticsearch",
    "OpenSearch",

    // Version Control
    "Git",
    "GitHub",
    "GitLab",
    "Bitbucket",

    // Additional Skills
    "Go",
    "Rust",
    "Ruby",
    "RubyOnRails",
    "Elixir",
    "Phoenix",
    "Scala",
    "ObjectiveC",
    "Dart",
    "Ionic",
    "Xamarin",

    // Backend
    "Gin",
    "Fiber",
    "Echo",
    "Actix",
    "Rocket",
    "ASP.NETCore",
    "Hibernate",
    "Quarkus",
    "Micronaut",

    // Cloud
    "Docker",
    "Kubernetes",
    "AWS",
    "Azure",
    "GCP",
    "Vercel",
    "Netlify",
    "Firebase",
    "Supabase",

    // Authentication
    "JWT",
    "OAuth",
    "AuthJS",
    "Clerk",

    // Testing
    "Jest",
    "Vitest",
    "Cypress",
    "Playwright",

    // DevOps
    "Linux",
    "Bash",
    "CI/CD",
    "GitHubActions",
    "Jenkins",

    // Python
    "Python",
    "Django",
    "FastAPI",
    "Flask",

    // Java
    "Java",
    "SpringBoot",

    // C / .NET
    "C",
    "C++",
    "CSharp",
    "DotNet",

    // PHP
    "PHP",
    "Laravel",

    // Frontend Frameworks
    "VueJS",
    "NuxtJS",
    "Angular",
    "Svelte",

    // Mobile
    "ReactNative",
    "Flutter",
    "Kotlin",
    "Swift",

    // Design
    "Figma",
    "AdobeXD",

    // Messaging & Streaming
    "Kafka",
    "RabbitMQ",
    "NATS",
    "ApachePulsar",

    // Cloud & DevOps
    "Terraform",
    "Ansible",
    "Helm",
    "ArgoCD",
    "Prometheus",
    "Grafana",
    "Nginx",
    "Apache",

    // Testing
    "Mocha",
    "Chai",
    "Selenium",
    "Postman",
    "Insomnia",

    // AI & Data
    "MachineLearning",
    "TensorFlow",
    "PyTorch",
    "OpenAI",
    "LangChain",
    "PromptEngineering",
    "HuggingFace",
    "LlamaIndex",
    "Pandas",
    "NumPy",
    "ScikitLearn",
    "ApacheSpark",

    // Soft Skills
    "Agile",
    "Scrum",
    "ProblemSolving",
    "Communication",

    // Security
    "OAuth2",
    "OpenIDConnect",
    "Keycloak",
    "Vault",

    // CMS & E-commerce
    "WordPress",
    "Shopify",
    "Magento",
    "Strapi",
    "Contentful",

    // Collaboration
    "Jira",
    "Confluence",
    "Slack",
    "Notion",

    // Methodologies
    "TDD",
    "BDD",
    "Microservices",
    "SystemDesign",
    "CleanArchitecture",
    "DesignPatterns",
    "SOLID",
    "DDD",
    "EventDrivenArchitecture",
];