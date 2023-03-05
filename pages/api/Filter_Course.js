// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  const data=[{
    Cn: "The Data Scientist's Toolbox",
    Cc: "In this course you will get an introduction to the main tools and ideas in the data scientist's toolbox. The course gives an overview of the data, questions, and tools that data analysts and data scientists work with. There are two components to this cou…",
    Cl: "/course/datascitoolbox-1712",
    Cp: "Coursera",
    Cd: "18 hours worth of material, 4 weeks long",
    Cpp: "Free Online Course (Audit)"
},
{
    "Cn": "R Programming",
    "Cc": "In this course you will learn how to program in R and how to use R for effective data analysis. You will learn how to install and configure software necessary for a statistical programming environment and describe generic programming language concepts as…",
    "Cl": "/course/rprog-1713",
    "Cp": "Coursera",
    "Cd": "57 hours worth of material, 4 weeks long",
    "Cpp": "Free Online Course (Audit)"
},
{
    "Cn": "Getting and Cleaning Data",
    "Cc": "Before you can work with data you have to get some. This course will cover the basic ways that data can be obtained. The course will cover obtaining data from the web, from APIs, from databases and from colleagues in various formats. It will also cover t…",
    "Cl": "/course/getdata-1714",
    "Cp": "Coursera",
    "Cd": "20 hours worth of material, 4 weeks long",
    "Cpp": "Free Online Course (Audit)"
},
{
    "Cn": "Psychological First Aid",
    "Cc": "Learn to provide psychological first aid to people in an emergency by employing the RAPID model: Reflective listening, Assessment of needs, Prioritization, Intervention, and Disposition.",
    "Cl": "/course/psychfirstaid-2900",
    "Cp": "Coursera",
    "Cd": "6-7 hours worth of material, 5 weeks long",
    "Cpp": "Free Online Course (Audit)"
},
{
    "Cn": "HTML, CSS, and Javascript for Web Developers",
    "Cc": "In this course, we will learn the basic tools that every web page coder needs to know. We will start from the ground up by learning how to implement modern web pages with HTML and CSS. We will then advance to learning how to code our pages such that its…",
    "Cl": "/course/html-css-javascript-for-web-developers-4270",
    "Cp": "Coursera",
    "Cd": "40 hours worth of material, 5 weeks long",
    "Cpp": "Free Online Course (Audit)"
},
{
    "Cn": "Statistical Inference",
    "Cc": "Statistical inference is the process of drawing conclusions about populations or scientific truths from data. There are many modes of performing inference including statistical modeling, data oriented strategies and explicit use of designs and randomizat…",
    "Cl": "/course/statinference-1717",
    "Cp": "Coursera",
    "Cd": "54 hours worth of material, 4 weeks long",
    "Cpp": "Free Online Course (Audit)"
},
{
    "Cn": "Regression Models",
    "Cc": "Linear models, as their name implies, relates an outcome to a set of predictors of interest using linear assumptions.  Regression models, a subset of linear models, are the most important statistical analysis tool in a data scientist's toolkit. This cour…",
    "Cl": "/course/regmods-1718",
    "Cp": "Coursera",
    "Cd": "54 hours worth of material, 4 weeks long",
    "Cpp": "Free Online Course (Audit)"
},
{
    "Cn": "Algorithms for DNA Sequencing",
    "Cc": "We will learn computational methods -- algorithms and data structures -- for analyzing DNA sequencing data. We will learn a little about DNA, genomics, and how DNA sequencing is used.  We will use Python to implement key algorithms and data structures an…",
    "Cl": "/course/ads1-3433",
    "Cp": "Coursera",
    "Cd": "12 hours worth of material, 4 weeks long",
    "Cpp": "Free Online Course (Audit)"
},
{
    "Cn": "Mathematical Biostatistics Boot Camp 1",
    "Cc": "This class presents the fundamental probability and statistical concepts used in elementary data analysis. It will be taught at an introductory level for students with junior or senior college-level mathematical training including a working knowledge of…",
    "Cl": "/course/biostats-596",
    "Cp": "Coursera",
    "Cd": "13 hours worth of material, 4 weeks long",
    "Cpp": "Free Online Course (Audit)"
},
{
    "Cn": "Python for Genomic Data Science",
    "Cc": "This class provides an introduction to the Python programming language and the iPython notebook. This is the third course in the Genomic Big Data Science Specialization from Johns Hopkins University.",
    "Cl": "/course/genpython-3476",
    "Cp": "Coursera",
    "Cd": "8-9 hours worth of material, 4 weeks long",
    "Cpp": "Free Online Course (Audit)"
},
{
    "Cn": "Ruby on Rails: An Introduction",
    "Cc": "Did you ever want to build a web application?  Perhaps you even started down that path in a language like Java or C#, when you realized that there was so much “climbing the mountain” that you had to do? Maybe you have heard about web services being all t…",
    "Cl": "/course/ruby-on-rails-intro-4258",
    "Cp": "Coursera",
    "Cd": "15 hours worth of material, 3 weeks long",
    "Cpp": "Free Online Course (Audit)"
},
{
    "Cn": "Reproducible Research",
    "Cc": "This course focuses on the concepts and tools behind reporting modern data analyses in a reproducible manner. Reproducible research is the idea that data analyses, and more generally, scientific claims, are published with their data and software code so…",
    "Cl": "/course/repdata-1716",
    "Cp": "Coursera",
    "Cd": "7-8 hours worth of material, 4 weeks long",
    "Cpp": "Free Online Course (Audit)"
},
{
    "Cn": "Practical Machine Learning",
    "Cc": "One of the most common tasks performed by data scientists and data analysts are prediction and machine learning. This course will cover the basic components of building and applying prediction functions with an emphasis on practical applications. The cou…",
    "Cl": "/course/predmachlearn-1719",
    "Cp": "Coursera",
    "Cd": "8-9 hours worth of material, 4 weeks long",
    "Cpp": "Free Online Course (Audit)"
},
{
    "Cn": "Introduction to Genomic Technologies",
    "Cc": "This course introduces you to the basic biology of modern genomics and the experimental tools that we use to measure it. We'll introduce the Central Dogma of Molecular Biology and cover how next-generation sequencing can be used to measure DNA, RNA, and…",
    "Cl": "/course/genintro-3472",
    "Cp": "Coursera",
    "Cd": "6-7 hours worth of material, 4 weeks long",
    "Cpp": "Free Online Course (Audit)"
},
{
    "Cn": "A Crash Course in Data Science",
    "Cc": "By now you have definitely heard about data science and big data. In this one-week class, we will provide a crash course in what these terms mean and how they play a role in successful organizations. This class is for anyone who wants to learn what all t…",
    "Cl": "/course/data-science-crash-course-4392",
    "Cp": "Coursera",
    "Cd": "7-8 hours worth of material, 1 week long",
    "Cpp": "Free Online Course (Audit)"
},
{
    "Cn": "Community Change in Public Health",
    "Cc": "In bringing about behavior change in public health, we often focus on the individual mother, student, or farmer. We should not forget the community structure and norms constrain for encouraging individual health behaviors. This course examines the commun…",
    "Cl": "/course/communitychange-397",
    "Cp": "Coursera",
    "Cd": "11 hours worth of material, 5 weeks long",
    "Cpp": "Free Online Course (Audit)"
},
{
    "Cn": "Introduction to the Biology of Cancer",
    "Cc": "Over 500,000 people in the United States and over 8 million people worldwide are dying every year from cancer. As people live longer, the incidence of cancer is rising worldwide and the disease is expected to strike over 20 million people annually by 203…",
    "Cl": "/course/cancer-7994",
    "Cp": "Coursera",
    "Cd": "8-9 hours worth of material, 6 weeks long",
    "Cpp": "Free Online Course (Audit)"
},
{
    "Cn": "Command Line Tools for Genomic Data Science",
    "Cc": "Introduces to the commands that you need to manage and analyze directories, files, and large sets of genomic data. This is the fourth course in the Genomic Big Data Science Specialization from Johns Hopkins University.",
    "Cl": "/course/gencommand-3474",
    "Cp": "Coursera",
    "Cd": "12 hours worth of material, 4 weeks long",
    "Cpp": "Free Online Course (Audit)"
},
{
    "Cn": "Introduction to Systematic Review and Meta-Analysis",
    "Cc": "We will introduce methods to perform systematic reviews and meta-analysis of clinical trials. We will cover how to formulate an answerable research question, define inclusion and exclusion criteria, search for the evidence, extract data, assess the risk…",
    "Cl": "/course/systematicreview-3480",
    "Cp": "Coursera",
    "Cd": "14 hours worth of material, 6 weeks long",
    "Cpp": "Free Online Course (Audit)"
},
{
    "Cn": "Chemicals and Health",
    "Cc": "This course covers chemicals in our environment and in our bodies and how they impact our health. It addresses policies and practices related to chemicals, particularly related to how they get into our bodies (exposures), what they do when they get there…",
    "Cl": "/course/chemhealth-2053",
    "Cp": "Coursera",
    "Cd": "11 hours worth of material, 6 weeks long",
    "Cpp": "Free Online Course (Audit)"
},
{
    "Cn": "Single Page Web Applications with AngularJS",
    "Cc": "Do you want to write powerful, maintainable, and testable front end applications faster and with less code? Then consider joining this course to gain skills in one of the most popular Single Page Application (SPA) frameworks today, AngularJS. Developed a…",
    "Cl": "/course/single-page-web-apps-with-angularjs-4283",
    "Cp": "Coursera",
    "Cd": "47 hours worth of material, 5 weeks long",
    "Cpp": "Free Online Course (Audit)"
},
{
    "Cn": "Mathematical Biostatistics Boot Camp 2",
    "Cc": "Learn fundamental concepts in data analysis and statistical inference, focusing on one and two independent samples.",
    "Cl": "/course/biostats2-1033",
    "Cp": "Coursera",
    "Cd": "12 hours worth of material, 4 weeks long",
    "Cpp": "Free Online Course (Audit)"
},
{
    "Cn": "Bioconductor for Genomic Data Science",
    "Cc": "Learn to use tools from the Bioconductor project to perform analysis of genomic data. This is the fifth course in the Genomic Big Data Specialization from Johns Hopkins University.",
    "Cl": "/course/genbioconductor-3475",
    "Cp": "Coursera",
    "Cd": "8-9 hours worth of material, 4 weeks long",
    "Cpp": "Free Online Course (Audit)"
},
{
    "Cn": "Developing Data Products",
    "Cc": "A data product is the production output from a statistical analysis. Data products automate complex analysis tasks or use technology to expand the utility of a data informed model, algorithm or inference. This course covers the basics of creating data pr…",
    "Cl": "/course/devdataprod-1720",
    "Cp": "Coursera",
    "Cd": "10 hours worth of material, 4 weeks long",
    "Cpp": "Free Online Course (Audit)"
},
{
    "Cn": "Leading Change in Health Informatics",
    "Cc": "As health informaticists, we need to be very clear in our understanding of the current state (as\n-is), the future state (to-be) and any unintended consequences that can result from our interventions. Prior to introducing large scale change, we need to as…",
    "Cl": "/course/leading-change-health-informatics-12858",
    "Cp": "Coursera",
    "Cd": "15 hours worth of material, 4 weeks long",
    "Cpp": "Free Online Course (Audit)"
},
{
    "Cn": "Understanding Prostate Cancer",
    "Cc": "Welcome to Understanding Prostate Cancer. My name is Ken Pienta, Professor of Urology and Oncology at the Johns Hopkins School of Medicine. I have been studying prostate cancer and treating patients with prostate cancer for over 25 years.\nOver 1,000,000…",
    "Cl": "/course/prostate-cancer-8070",
    "Cp": "Coursera",
    "Cd": "4-5 hours worth of material, 3 weeks long",
    "Cpp": "Free Online Course (Audit)"
},
{
    "Cn": "Reducing Gun Violence in America: Evidence for Change",
    "Cc": "Reducing Gun Violence in America: Evidence for Change is designed to provide learners with the best available science and insights from top scholars across the country as well as the skills to understand which interventions are the most effective to offe…",
    "Cl": "/course/gun-violence-13674",
    "Cp": "Coursera",
    "Cd": "18 hours worth of material, 6 weeks long",
    "Cpp": "Free Online Course (Audit)"
},
{
    "Cn": "Strategies for Senior Housing Communities during COVID-19",
    "Cc": "SARS-CoV-2, the virus that causes COVID-19, poses a high risk for senior housing communities and the people who live and work there. The COVID-19 response has largely focused on nursing homes, leaving independent living communities serving older adults i…",
    "Cl": "/course/strategies-senior-housing-covid19-23267",
    "Cp": "Coursera",
    "Cd": "10 hours worth of material, 1 week long",
    "Cpp": "Free Online Course (Audit)"
},
{
    "Cn": "Health for All Through Primary Health Care",
    "Cc": "This course explores why primary health care is central for achieving Health for All. It provides examples of how primary health care has been instrumental in approaching this goal in selected populations and how the principles of primary health care can…",
    "Cl": "/course/healthforall-837",
    "Cp": "Coursera",
    "Cd": "11 hours worth of material, 5 weeks long",
    "Cpp": "Free Online Course (Audit)"
},
{
    "Cn": "Statistics for Genomic Data Science",
    "Cc": "An introduction to the statistics behind the most popular genomic data science projects. This is the sixth course in the Genomic Big Data Science Specialization from Johns Hopkins University.",
    "Cl": "/course/genstats-3478",
    "Cp": "Coursera",
    "Cd": "9-10 hours worth of material, 4 weeks long",
    "Cpp": "Free Online Course (Audit)"
},
{
    "Cn": "COVID Vaccine Ambassador Training: How to Talk to Parents",
    "Cc": "Vaccination is a key strategy for preventing serious illness and death from COVID-19. COVID-19 vaccines are available for children 5 and older, but many parents have questions about vaccinations. This training course prepares parents of school-age childr…",
    "Cl": "/course/covid-vaccine-ambassador-61414",
    "Cp": "Coursera",
    "Cd": "2-3 hours worth of material, 1 week long",
    "Cpp": "Free Online Course (Audit)"
},
{
    "Cn": "Systems Science and Obesity",
    "Cc": "Systems science has been instrumental in breaking new scientific ground in diverse fields such as meteorology, engineering and decision analysis.   However, it is just beginning to impact public health.   This seminar is designed to introduce students to…",
    "Cl": "/course/systems-science-obesity-6398",
    "Cp": "Coursera",
    "Cd": "11 hours worth of material, 4 weeks long",
    "Cpp": "Free Online Course (Audit)"
},
{
    "Cn": "Outbreaks and Epidemics",
    "Cc": "Professional epidemiologists are often called on to investigate outbreaks and epidemics. This course serves as an introduction to the essentials of investigation, identifying pathogens, figuring out what's going on, reporting, and responding.",
    "Cl": "/course/outbreaks-epidemics-17987",
    "Cp": "Coursera",
    "Cd": "5-6 hours worth of material, 4 weeks long",
    "Cpp": "Free Online Course (Audit)"
},
{
    "Cn": "COVID-19 Contact Tracing",
    "Cc": "The COVID-19 crisis has created an unprecedented need for contact tracing across the country, requiring thousands of people to learn key skills quickly.",
    "Cl": "/course/covid-19-contact-tracing-19669",
    "Cp": "Coursera",
    "Cd": "6-7 hours worth of material, 1 week long",
    "Cpp": "Free Online Course (Audit)"
},
{
    "Cn": "Training and Learning Programs for Volunteer Community Health Workers",
    "Cc": "Volunteer community health workers (CHWs) are a major strategy for increasing access to and coverage of basic health interventions. Our village health worker training course reviews the process of training and continuing education of CHWs as an important…",
    "Cl": "/course/commhealthworkers-1038",
    "Cp": "Coursera",
    "Cd": "16 hours worth of material, 6 weeks long",
    "Cpp": "Free Online Course (Audit)"
},
{
    "Cn": "Surveillance Systems: The Building Blocks",
    "Cc": "Epidemiology is often described as the cornerstone science and public health and public health surveillance is a cornerstone of epidemiology. This course will help you build your technical awareness and skills for working with a variety of surveillance s…",
    "Cl": "/course/epidemiology-surveillance-systems-17988",
    "Cp": "Coursera",
    "Cd": "5-6 hours worth of material, 4 weeks long",
    "Cpp": "Free Online Course (Audit)"
},
{
    "Cn": "Essential Epidemiologic Tools for Public Health Practice",
    "Cc": "In order to make a difference in the health and well-being of a population, we must understand the burden of all problems and conditions that affect the population, as well as how well our efforts to mitigate these problems are actually working.",
    "Cl": "/course/epidemiology-tools-17989",
    "Cp": "Coursera",
    "Cd": "4-5 hours worth of material, 4 weeks long",
    "Cpp": "Free Online Course (Audit)"
},
{
    "Cn": "Surveillance Systems: Analysis, Dissemination, and Special Systems",
    "Cc": "In this course, we'll build on the previous lessons in this specialization to focus on some very specific skills related to public health surveillance. We'll learn how to get the most out of surveillance data analysis, focusing specifically on interpreti…",
    "Cl": "/course/epidemiology-surveillance-systems-analysis-17990",
    "Cp": "Coursera",
    "Cd": "6-7 hours worth of material, 4 weeks long",
    "Cpp": "Free Online Course (Audit)"
},
{
    "Cn": "Foundations of Health Equity Research",
    "Cc": "Introduces students to the core principles of health equity research. Covers topics such as defining health equity, engaging community and policy stakeholders, patient-centeredness, cultural competence, and dissemination of research findings. Content wil…",
    "Cl": "/course/health-equity-research-17892",
    "Cp": "Coursera",
    "Cd": "15 hours worth of material, 5 weeks long",
    "Cpp": "Free Online Course (Audit)"
},
{
    "Cn": "Strategies for Assisted Living Communities during COVID-19",
    "Cc": "SARS-CoV-2, the virus that causes COVID-19, poses a high risk for assisted living communities due to residents' age, health status, and communal living environment.  The COVID-19 response has largely focused on nursing homes, leaving assisted living comm…",
    "Cl": "/course/strategies-assisted-living-covid19-23187",
    "Cp": "Coursera",
    "Cd": "10 hours worth of material, 1 week long",
    "Cpp": "Free Online Course (Audit)"
},
{
    "Cn": "Advanced Linear Models for Data Science 1: Least Squares",
    "Cc": "Welcome to the Advanced Linear Models for Data Science Class 1: Least Squares. This class is an introduction to least squares from a linear algebraic and mathematical perspective. Before beginning the class make sure that you have the following:\n\n- A bas…",
    "Cl": "/course/linear-models-6180",
    "Cp": "Coursera",
    "Cd": "8-9 hours worth of material, 6 weeks long",
    "Cpp": "Free Online Course (Audit)"
},
{
    "Cn": "Fundamentals for Implementing a Hypertension Program",
    "Cc": "This course provides the fundamental knowledge necessary for program managers and implementors in a hypertension control program, especially in resource-limited settings. The course is interactive and includes useful tips relevant to different settings.…",
    "Cl": "/course/hypertension-program-35140",
    "Cp": "Coursera",
    "Cd": "3-4 hours worth of material, 6 weeks long",
    "Cpp": "Free Online Course (Audit)"
},
{
    "Cn": "Algebra: Elementary to Advanced - Functions & Applications",
    "Cc": "After completing this course, students will learn how to successfully apply functions to model different data and real world occurrences. This course reviews the concept of a function and then provide multiple examples of common and uncommon types of fun…",
    "Cl": "/course/algebra-ii-44579",
    "Cp": "Coursera",
    "Cd": "5-6 hours worth of material, 3 weeks long",
    "Cpp": "Free Online Course (Audit)"
},
{
    "Cn": "Building a Data Science Team",
    "Cc": "Data science is a team sport. As a data science executive it is your job to recruit, organize, and manage the team to success. In this one-week course, we will cover how you can find the right people to fill out your data science team, how to organize th…",
    "Cl": "/course/build-data-science-team-4391",
    "Cp": "Coursera",
    "Cd": "5-6 hours worth of material, 1 week long",
    "Cpp": "Free Online Course (Audit)"
},
{
    "Cn": "Rastreo de los contactos de la COVID-19",
    "Cc": "La crisis de la COVID-19 ha creado una necesidad sin precedentes de rastreo de los contactos en todo el país, y exige que miles de personas aprendan habilidades nuevas con rapidez. La certificación laboral para puestos de rastreo de contactos es distinta…",
    "Cl": "/course/rastreo-contactos-covid-19-20781",
    "Cp": "Coursera",
    "Cd": "5-6 hours worth of material, 1 week long",
    "Cpp": "Free Online Course (Audit)"
},
{
    "Cn": "The Critical Role of IT Support Staff in Healthcare",
    "Cc": "This is a very exciting time to be exploring a career in Health IT Support! In this introductory course, you'll learn about various roles in IT support that are common in healthcare. IT support staff play critical roles in many different healthcare venue…",
    "Cl": "/course/healthcare-it-support-staff-22562",
    "Cp": "Coursera",
    "Cd": "2-3 hours worth of material, 2 weeks long",
    "Cpp": "Free Online Course (Audit)"
},
{
    "Cn": "The Social and Technical Context of Health Informatics",
    "Cc": "Improving health and healthcare institutions requires understanding of data and creation of interventions at the many levels at which health IT interact and affect the institution. These levels range from the external “world” in which the institution ope…",
    "Cl": "/course/the-socio-technical-health-informatics-c-12789",
    "Cp": "Coursera",
    "Cd": "9-10 hours worth of material, 4 weeks long",
    "Cpp": "Free Online Course (Audit)"
},
{
    "Cn": "International Travel Preparation, Safety, & Wellness",
    "Cc": "Whether you've traveled before or not, living and working overseas can be challenging. Learn how best to prepare and make the most of your time internationally.\n\nThis course will prepare you to work and live overseas. It explores the epidemiology of comm…",
    "Cl": "/course/international-travel-8782",
    "Cp": "Coursera",
    "Cd": "10 hours worth of material, 4 weeks long",
    "Cpp": "Free Online Course (Audit)"
},
{
    "Cn": "Introduction to Concurrent Programming with GPUs",
    "Cc": "This course will help prepare students for developing code that can process large amounts of data in parallel. It will focus on foundational aspects of concurrent programming, such as CPU/GPU architectures, multithreaded programming in C and Python, and…",
    "Cl": "/course/introduction-to-concurrent-programming-89920",
    "Cp": "Coursera",
    "Cd": "20 hours worth of material, 5 weeks long",
    "Cpp": "Free Online Course (Audit)"
},
{
    "Cn": "Algebra: Elementary to Advanced - Equations & Inequalities",
    "Cc": "This course is intended for students looking to create a solid algebraic foundation of fundamental mathematical concepts from which to take more advanced courses that use concepts from precalculus, calculus, probability, and statistics. This course will…",
    "Cl": "/course/algebra-i-44578",
    "Cp": "Coursera",
    "Cd": "10 hours worth of material, 5 weeks long",
    "Cpp": "Free Online Course (Audit)"
},
{
    "Cn": "Disease Clusters",
    "Cc": "Do a lot of people in your neighborhood all seem to have the same sickness? Are people concerned about high rates of cancer? Your community may want to explore the possibility of a disease cluster, which happens when there is a higher number of cases of…",
    "Cl": "/course/disease-clusters-13166",
    "Cp": "Coursera",
    "Cd": "6-7 hours worth of material, 5 weeks long",
    "Cpp": "Free Online Course (Audit)"
},
{
    "Cn": "Health Information Technology Fundamentals",
    "Cc": "In this course you will receive an overview of the health IT ecosystem and the types of technologies IT support staff interact with the most. You will be introduced to the role of electronic health records (EHRs), clinical decision support, telemedicine,…",
    "Cl": "/course/health-it-fundamentals-22563",
    "Cp": "Coursera",
    "Cd": "6-7 hours worth of material, 4 weeks long",
    "Cpp": "Free Online Course (Audit)"
},
{
    "Cn": "Business Analytics with Excel: Elementary to Advanced",
    "Cc": "A leader in a data driven world requires the knowledge of both data-related (statistical) methods and of appropriate models to use that data. This Business Analytics class focuses on the latter: it introduces students to analytical frameworks used for de…",
    "Cl": "/course/business-analytics-excel-126829",
    "Cp": "Coursera",
    "Cd": "23 hours worth of material, 6 weeks long",
    "Cpp": "Free Online Course (Audit)"
},
{
    "Cn": "Healthcare Data Security, Privacy, and Compliance",
    "Cc": "In the final course of the Healthcare IT Support program, we will focus on the types of healthcare data that you need to be aware, complexities of security and privacy within healthcare, and issues related to compliance and reporting. As a health IT supp…",
    "Cl": "/course/healthcare-data-security-22561",
    "Cp": "Coursera",
    "Cd": "5-6 hours worth of material, 4 weeks long",
    "Cpp": "Free Online Course (Audit)"
},
{
    "Cn": "Introduction to Parallel Programming with CUDA",
    "Cc": "This course will help prepare students for developing code that can process large amounts of data in parallel on Graphics Processing Units (GPUs). It will learn on how to implement software that can solve complex problems with the leading consumer to ent…",
    "Cl": "/course/introduction-to-parallel-programming-with-cuda-89906",
    "Cp": "Coursera",
    "Cd": "22 hours worth of material, 5 weeks long",
    "Cpp": "Free Online Course (Audit)"
},
{
    "Cn": "Introduction to DevSecOps",
    "Cc": "DevSecOps has gained considerable momentum in recent years. It integrates software development (Dev), information security (Sec), and IT operations (Ops) so that businesses increase the value delivered by software. This course provides an overview of Dev…",
    "Cl": "/course/introduction-to-devsecops-108441",
    "Cp": "Coursera",
    "Cd": "21 hours worth of material, 4 weeks long",
    "Cpp": "Free Online Course (Audit)"
},
{
    "Cn": "Rastreamento de contato da COVID-19",
    "Cc": "A crise da COVID-19 criou uma necessidade sem precedentes de rastreamento de contato em todo o país, exigindo que milhares de pessoas aprendessem rapidamente as principais habilidades. As qualificações para os cargos de rastreamento de contato diferem em…",
    "Cl": "/course/rastreamento-contatos-covid-19-20780",
    "Cp": "Coursera",
    "Cd": "5-6 hours worth of material, 1 week long",
    "Cpp": "Free Online Course (Audit)"
},
{
    "Cn": "Evaluating Public Health Programs at Scale",
    "Cc": "This course provides an introduction to evaluating public health programs at scale. This course focuses on evaluating public health programs and policies in low- and middle-income countries, however, core skills of designing and carrying out an evaluatio…",
    "Cl": "/course/evaluating-public-health-programs-at-scale-45867",
    "Cp": "Coursera",
    "Cd": "18 hours worth of material, 6 weeks long",
    "Cpp": "Free Online Course (Audit)"
},
{
    "Cn": "Operations and Patient Safety for Healthcare IT Staff",
    "Cc": "Now that you've been introduced to the world of Health IT and the important role played by electronic health records (EHRs), we'll focus on other technologies that play a role in maintaining ongoing operations in healthcare. Telemedicine, patient portals…",
    "Cl": "/course/healthcare-it-operations-patient-safety-22560",
    "Cp": "Coursera",
    "Cd": "6-7 hours worth of material, 4 weeks long",
    "Cpp": "Free Online Course (Audit)"
},
{
    "Cn": "Black Agricultural Solutions to Food Apartheid: A Teach-Out",
    "Cc": "Black Agricultural Solutions to Food Apartheid is a series where we dive deep into the historical, ancestral, and spiritual connections that Black people have to land and agriculture. Throughout this course, we encourage participants to learn about their…",
    "Cl": "/course/black-agricultural-solutions-64533",
    "Cp": "Coursera",
    "Cd": "5-6 hours worth of material, 1 week long",
    "Cpp": "Free Online Course (Audit)"
},
{
    "Cn": "Measuring and Modeling Impact in Evaluations",
    "Cc": "We want to provide you some information about our course “Measuring and Modeling Impact in evaluations”. The purpose of this course is to give you a better understanding of different measures of impact that could be used in the evaluation of a program in…",
    "Cl": "/course/measuring-and-modeling-impact-45866",
    "Cp": "Coursera",
    "Cd": "11 hours worth of material, 4 weeks long",
    "Cpp": "Free Online Course (Audit)"
},
{
    "Cn": "مجموعة أدوات عالم البيانات",
    "Cc": "ستتلقى في هذه الدورة التدريبية مقدمة عن الأدوات الرئيسية والأفكار الخاصة بمجموعة أدوات عالم البيانات. تقدم الدورة التدريبية نظرة عامة عن البيانات والاستفسارات والأدوات التي يعمل عليها علماء البيانات ومحللو البيانات. هناك عنصران لهذه الدورة التدريبية. الأ…",
    "Cl": "/course/data-scientists-tools-ar-13197",
    "Cp": "Coursera",
    "Cd": "5-6 hours worth of material, 4 weeks long",
    "Cpp": "Free Online Course (Audit)"
},
{
    "Cn": "Let's talk about it: A Health and Immigration Teach Out",
    "Cc": "As the United States grapples with both the short-term and long-term impacts and considers how different groups and individuals are affected, it can easily become overwhelming to keep up with conversations about health and immigration. Most people can ge…",
    "Cl": "/course/lets-talk-about-it-a-health-and-immigration-teach-54610",
    "Cp": "Coursera",
    "Cd": "6-7 hours worth of material, 2 weeks long",
    "Cpp": "Free Online Course (Audit)"
},
{
    "Cn": "Beginning Custom Projects with Raspberry Pi",
    "Cc": "In this course you will use a Raspberry Pi 4 to build a complete network-connected project with sensors and motors and access it from your smartphone. We'll explore all the parts which make this work, so you can use this experience as a foundation for yo…",
    "Cl": "/course/beginning-custom-projects-with-raspberry-pi-110654",
    "Cp": "Coursera",
    "Cd": "14 hours worth of material, 4 weeks long",
    "Cpp": "Free Online Course (Audit)"
},
{
    "Cn": "Evidence-based Toxicology",
    "Cc": "Welcome to the Evidence-based Toxicology (EBT) course. In medicine and healthcare, evidence-based medicine has revolutionized the way that information is evaluated transparently and objectively. Over the past ten years, a movement in North America and Eu…",
    "Cl": "/course/evidence-based-toxicology-12316",
    "Cp": "Coursera",
    "Cd": "20 hours worth of material, 7 weeks long",
    "Cpp": "Free Online Course (Audit)"
},
{
    "Cn": "Excellence in Online Teaching",
    "Cc": "This course is aimed at anyone who is teaching online or will be in the future.  Learners will come away with ways to improve their online courses and teaching practices today.",
    "Cl": "/course/excellence-in-online-teaching-119183",
    "Cp": "Coursera",
    "Cd": "11 hours worth of material, 5 weeks long",
    "Cpp": "Free Online Course (Audit)"
},
{
    "Cn": "Principles of Management",
    "Cc": "Team leads, managers, and entrepreneurs must juggle team citizenship and leadership, ethics, strategy, and projects with their work in their area of expertise. \nWhile an individual contributor's success may depend on their own direct input -- the sweat o…",
    "Cl": "/course/principles-of-management-60072",
    "Cp": "Coursera",
    "Cd": "16 hours worth of material, 4 weeks long",
    "Cpp": "Free Online Course (Audit)"
},
{
    "Cn": "Calculus through Data & Modelling: Integration Applications",
    "Cc": "This course continues your study of calculus by focusing on the applications of integration. The applications in this section have many common features.  First, each is an example of a quantity that is computed by evaluating a definite integral.  Second,…",
    "Cl": "/course/calculus-through-data-and-modelling-integration-a-32769",
    "Cp": "Coursera",
    "Cd": "5-6 hours worth of material, 4 weeks long",
    "Cpp": "Free Online Course (Audit)"
},
{
    "Cn": "ERPO: A Civil Approach to Gun Violence Prevention Teach-Out",
    "Cc": "Evidence shows that 1 life is saved for every 10-20 Extreme Risk Protection Orders (ERPOs) issued. ERPOs are legally issued civil orders that allow people on the front lines to ask a court to prevent a person at imminent risk of harm to themselves or oth…",
    "Cl": "/course/erpo-22041",
    "Cp": "Coursera",
    "Cd": "4-5 hours worth of material, 2 weeks long",
    "Cpp": "Free Online Course (Audit)"
},
{
    "Cn": "Gestion de l'analyse des données",
    "Cc": "Ce cours d'une semaine décrit le processus d'analyse des données ainsi que la manière de gérer ce processus. Nous décrivons la nature répétitive de l'analyse des données et le rôle de la formulation d'une question précise, l'analyse exploratoire des donn…",
    "Cl": "/course/managing-data-analysis-fr-39479",
    "Cp": "Coursera",
    "Cd": "8-9 hours worth of material, 1 week long",
    "Cpp": "Free Online Course (Audit)"
},
{
    "Cn": "A Public Health Approach to Hearing Loss and Aging",
    "Cc": "At the Johns Hopkins Cochlear Center for Hearing and Public Health, we are dedicated to training up the next generation of clinicians and researchers to study the impact that hearing loss in older adults has on public health and to develop and implement…",
    "Cl": "/course/a-public-health-approach-to-hearing-loss-and-agin-74666",
    "Cp": "Coursera",
    "Cd": "2-3 hours worth of material, 1 week long",
    "Cpp": "Free Online Course (Audit)"
},
{
    "Cn": "CUDA at Scale for the Enterprise",
    "Cc": "This course will aid in students in learning in concepts that scale the use of GPUs and the CPUs that manage their use beyond the most common consumer-grade GPU installations. They will learn how to manage asynchronous workflows, sending and receiving ev…",
    "Cl": "/course/cuda-at-scale-for-the-enterprise-89907",
    "Cp": "Coursera",
    "Cd": "29 hours worth of material, 5 weeks long",
    "Cpp": "Free Online Course (Audit)"
},
{
    "Cn": "Algebra: Elementary to Advanced - Polynomials and Roots",
    "Cc": "This course is the final course in a three part algebra sequence, In this course, students extend their knowledge of more advanced functions, and apply and model them using both algebraic and geometric techniques.  This course enables students to make lo…",
    "Cl": "/course/polynomials-roots-44577",
    "Cp": "Coursera",
    "Cd": "9-10 hours worth of material, 5 weeks long",
    "Cpp": "Free Online Course (Audit)"
},
{
    "Cn": "Designing Hardware for Raspberry Pi Projects",
    "Cc": "This is course 4 of this specialization (although it can be taken out of order) and focuses on applying experience and knowledge gained in the first three courses to build physical electronics hardware. Specifically, this course focuses on four areas: ci…",
    "Cl": "/course/designing-hardware-for-raspberry-pi-projects-110653",
    "Cp": "Coursera",
    "Cd": "10 hours worth of material, 4 weeks long",
    "Cpp": "Free Online Course (Audit)"
},
{
    "Cn": "CUDA Advanced Libraries",
    "Cc": "This course will complete the GPU specialization, focusing on the leading libraries distributed as part of the CUDA Toolkit. Students will learn how to use CuFFT, and linear algebra libraries to perform complex mathematical computations. The Thrust libra…",
    "Cl": "/course/cuda-advanced-libraries-89908",
    "Cp": "Coursera",
    "Cd": "25 hours worth of material, 5 weeks long",
    "Cpp": "Free Online Course (Audit)"
},
{
    "Cn": "Point of Care Testing for Sexually Transmitted Infections",
    "Cc": "What are sexually transmitted infections (STIs), and why do we care? What is point of care testing (POCT)? What do clinicians and patients want and need from the POCT for STIs? \n\nPoint of care testing, or medical diagnostic testing done at the time of pa…",
    "Cl": "/course/poct-for-sti-56223",
    "Cp": "Coursera",
    "Cd": "6-7 hours worth of material, 4 weeks long",
    "Cpp": "Free Online Course (Audit)"
},
{
    "Cn": "Cours intensif sur la science des données",
    "Cc": "Vous avez sûrement déjà entendu parler de la science des données et du Big Data. Ce cours intensif d'une semaine vous permettra de comprendre ce que ces termes signifient et comment ils jouent un rôle dans les entreprises prospères. Ce cours intensif s'a…",
    "Cl": "/course/data-science-course-fr-39514",
    "Cp": "Coursera",
    "Cd": "6-7 hours worth of material, 1 week long",
    "Cpp": "Free Online Course (Audit)"
},
{
    "Cn": "Taking Safety and Quality Improvement Work to the Next Level (Patient Safety VII)",
    "Cc": "In this culminating course in the Patient Safety and Quality Improvement Specialization, you will apply the skills you have acquired across the previous six courses to address a realistic patient safety issue confronting Mercy Grace, a 500-bed urban hosp…",
    "Cl": "/course/patient-safety-capstone-9773",
    "Cp": "Coursera",
    "Cd": "8-9 hours worth of material, 5 weeks long",
    "Cpp": "Free Online Course (Audit)"
},
{
    "Cn": "Teaching Reluctant Writers",
    "Cc": "All educators will encounter students who struggle with writing. This course first focuses on the reasons student writers may be reluctant and then provides learners with a variety of strategies and practices to help reluctant writers develop a greater c…",
    "Cl": "/course/teaching-reluctant-writers-45184",
    "Cp": "Coursera",
    "Cd": "15 hours worth of material, 3 weeks long",
    "Cpp": "Free Online Course (Audit)"
},
{
    "Cn": "Teaching Texts and Forms",
    "Cc": "The first job of any writer is to get words down on paper, and teaching writing as process helps students gain the fluency, comfort and confidence they need to succeed at any writing task. But complex, comprehensive writing tasks often bring with them sp…",
    "Cl": "/course/teaching-texts-forms-45186",
    "Cp": "Coursera",
    "Cd": "21 hours worth of material, 4 weeks long",
    "Cpp": "Free Online Course (Audit)"
},
{
    "Cn": "Kids with Cancer Still Need School: The Providers Role",
    "Cc": "This course will help you understand and address the challenges parents and families face regarding schooling after a cancer diagnosis.",
    "Cl": "/course/kids-with-cancer-still-need-school-providers-role-36559",
    "Cp": "Coursera",
    "Cd": "2-3 hours worth of material, 5 weeks long",
    "Cpp": "Free Online Course (Audit)"
},
{
    "Cn": "The Ethical Leader",
    "Cc": "This aims primarily at post-baccalaureate students interested in leadership theory and ethical leadership. \n\nThe first part of this course introduces students to the classical literature in philosophical ethics, including consequentialist, regularian, de…",
    "Cl": "/course/the-ethical-leader-110367",
    "Cp": "Coursera",
    "Cd": "56 hours worth of material, 5 weeks long",
    "Cpp": "Free Online Course (Audit)"
},
{
    "Cn": "Technology and Product Planning",
    "Cc": "Through the voices of start-up and product leaders this course makes transparent what it takes to build a digital health product for healthcare customers large and small. It outlines the planning, resources, process, and team needed to get a healthcare t…",
    "Cl": "/course/technology-and-product-planning-66067",
    "Cp": "Coursera",
    "Cd": "6-7 hours worth of material, 4 weeks long",
    "Cpp": "Free Online Course (Audit)"
},
{
    "Cn": "Responding, Revising and Assessing Student Writings",
    "Cc": "When writers write, readers respond. Responding to student writing gives teachers one of the most meaningful avenues to help students learn and grow. In this module, learners will identify best practices in effectively responding to student writing. You…",
    "Cl": "/course/responding-revising-assessing-student-writings-45185",
    "Cp": "Coursera",
    "Cd": "21 hours worth of material, 4 weeks long",
    "Cpp": "Free Online Course (Audit)"
},
{
    "Cn": "Culminating Project in Health Informatics",
    "Cc": "This capstone course in the Health Informatics Specialization will allow learners to create a comprehensive plan for an informatics intervention of their choosing, and that will demonstrate to current or future employers the new skills obtained through t…",
    "Cl": "/course/culminating-project-course-in-health-inf-12854",
    "Cp": "Coursera",
    "Cd": "14 hours worth of material, 4 weeks long",
    "Cpp": "Free Online Course (Audit)"
},
{
    "Cn": "Household Surveys for Program Evaluation in LMICs",
    "Cc": "This course provides an introduction to household surveys for program evaluation in low-and middle-income countries. The course will equip you with skills to:\n1. Explain what coverage is, why it's important in evaluations, and how it is measured\n2. Descr…",
    "Cl": "/course/household-surveys-for-program-evaluation-56222",
    "Cp": "Coursera",
    "Cd": "167 hours worth of material, 6 weeks long",
    "Cpp": "Free Online Course (Audit)"
},
{
    "Cn": "The Persuasive Leader",
    "Cc": "This aims primarily at post-baccalaureate students interested in leadership theory.\n\nThe course has four modules. Module 1 introduces students to agile leadership as (a) a logical sequel to adaptive and team leadership, and (b) the foundation of contempo…",
    "Cl": "/course/the-persuasive-leader-110366",
    "Cp": "Coursera",
    "Cd": "40 hours worth of material, 4 weeks long",
    "Cpp": "Free Online Course (Audit)"
},
{
    "Cn": "Opioid Epidemic: From Evidence to Impact",
    "Cc": "While prescription opioids serve an invaluable role for the treatment of cancer pain and pain at the end of life, their overuse for acute and chronic non-cancer pain as well as the increasing availability of heroin and illicit fentanyl, have contributed…",
    "Cl": "/course/opioid-epidemic-17143",
    "Cp": "Coursera",
    "Cd": "7-8 hours worth of material, 4 weeks long",
    "Cpp": "Free Online Course (Audit)"
},
{
    "Cn": "Using Sensors With Your Raspberry Pi",
    "Cc": "This course on integrating sensors with your Raspberry Pi is course 3 of a Coursera Specialization and can be taken separately or as part of the specialization. Although some material and explanations from the prior two courses are used, this course larg…",
    "Cl": "/course/using-sensors-with-your-raspberry-pi-110656",
    "Cp": "Coursera",
    "Cd": "8-9 hours worth of material, 4 weeks long",
    "Cpp": "Free Online Course (Audit)"
},
{
    "Cn": "데이터 과학자의 도구 상자",
    "Cc": "이 과정에서는 데이터 과학자의 도구 상자에 있는 메인 도구와 아이디어를 소개합니다. 본 과정은 데이터 분석가와 데이터 과학자가 작업하는 데이터, 질문 및 도구의 개요에 대해 설명합니다. 이 과정에는 두 가지 구성 요소가 있습니다. 첫 번째는 데이터를 실행 가능한 지식으로 바꾸는 아이디어에 대한 개념적 소개입니다. 두 번째는 버전 관리, 마크다운, git, GitHub, R 및 RStudio와 같은 프로그램에서 사용할 도구에 대한 실용적인 소개입니다.",
    "Cl": "/course/data-scientists-tools-ko-60063",
    "Cp": "Coursera",
    "Cd": "18 hours worth of material, 4 weeks long",
    "Cpp": "Free Online Course (Audit)"
},
{
    "Cn": "Communications and High-Speed Signals with Raspberry Pi",
    "Cc": "Course two of this specialization is all about hardware physical layer and communication between elements of your project, how to troubleshoot high-speed signals when they don't work, and how to design your projects so they do work. \n\nWe start with a rev…",
    "Cl": "/course/communications-and-high-speed-signals-with-raspbe-110657",
    "Cp": "Coursera",
    "Cd": "13 hours worth of material, 4 weeks long",
    "Cpp": "Free Online Course (Audit)"
},
{
    "Cn": "Teaching Writing Final Project",
    "Cc": "One of the goals of the Teaching Writing specialization has been to help every learner consider ways to adapt what they are learning and apply it to their specific situation, needs and interests. The theories, strategies and practices presented in these…",
    "Cl": "/course/teaching-writing-final-project-45183",
    "Cp": "Coursera",
    "Cd": "22 hours worth of material, 4 weeks long",
    "Cpp": "Free Online Course (Audit)"
},
{
    "Cn": "R 프로그래밍",
    "Cc": "이 과정에서는 R로 프로그래밍하는 방법과 효과적인 데이터 분석을 위해 R을 사용하는 방법을 배웁니다. 통계 프로그래밍 환경에 필요한 소프트웨어를 설치 및 구성하는 방법과 고급 통계 언어로 구현되는 일반적인 프로그래밍 언어 개념을 설명합니다. 이 과정은 R 프로그래밍, R로 데이터 읽기, R 패키지 액세스, R 함수 작성, 디버깅, R 코드 프로파일링, R 코드 구성 및 주석 달기를 포함하는 통계 컴퓨팅의 실제 문제를 다룹니다. 통계 데이터 분석의 주제…",
    "Cl": "/course/r-programming-ko-60066",
    "Cp": "Coursera",
    "Cd": "59 hours worth of material, 4 weeks long",
    "Cpp": "Free Online Course (Audit)"
},
{
    "Cn": "The Creative Leader",
    "Cc": "This aims primarily at post-baccalaureate students interested in leadership theory.\n\nThe course has four modules. Module 1 covers definitions and foundations of creative leadership. Topics include, What is creative leadership? Why creative leadership? An…",
    "Cl": "/course/the-creative-leader-110368",
    "Cp": "Coursera",
    "Cd": "35 hours worth of material, 4 weeks long",
    "Cpp": "Free Online Course (Audit)"
},
{
    "Cn": "Gestión del análisis de datos",
    "Cc": "This one-week course describes the process of analyzing data and how to manage that process. We describe the iterative nature of data analysis and the role of stating a sharp question, exploratory data analysis, inference, formal statistical modeling, in…",
    "Cl": "/course/managing-data-analysis-es-65446",
    "Cp": "Coursera",
    "Cd": "8-9 hours worth of material, 1 week long",
    "Cpp": "Free Online Course (Audit)"
},
{
    "Cn": "Calculus through Data & Modelling: Series and Integration",
    "Cc": "This course continues your study of calculus by introducing the notions of series, sequences, and integration.  These foundational tools allow us to develop the theory and applications of the second major tool of calculus: the integral.  Rather than meas…",
    "Cl": "/course/calculus-through-data-and-modelling-series-and-in-32774",
    "Cp": "Coursera",
    "Cd": "8-9 hours worth of material, 5 weeks long",
    "Cpp": "Free Online Course (Audit)"
},
{
    "Cn": "Calculus through Data & Modelling: Vector Calculus",
    "Cc": "This course continues your study of calculus by focusing on the applications of integration to vector valued functions, or vector fields. These are functions that assign vectors to points in space, allowing us to develop advanced theories to then apply t…",
    "Cl": "/course/calculus-through-data-and-modelling-vector-calcul-32766",
    "Cp": "Coursera",
    "Cd": "4-5 hours worth of material, 3 weeks long",
    "Cpp": "Free Online Course (Audit)"
},
{
    "Cn": "تحليل البيانات الاستكشافية",
    "Cc": "يغطي هذا المقرر التقنيات الاستكشافية الأساسية لتلخيص البيانات. يتم تطبيق هذه الأساليب عادة قبل أن تبدأ النمذجة الرسمية ويمكن أن تساعد في تطوير نماذج إحصائية أكثر تعقيدًا. تعد التقنيات الاستكشافية مهمة أيضًا لإزالة أو شحذ الفرضيات المحتملة حول العالم التي ي…",
    "Cl": "/course/exploratory-data-analysis-ar-39395",
    "Cp": "Coursera",
    "Cd": "57 hours worth of material, 4 weeks long",
    "Cpp": "Free Online Course (Audit)"
},
{
    "Cn": "Ein Crashkurs in Datenwissenschaft",
    "Cc": "Inzwischen haben Sie sicher schon von Datenwissenschaft und Big Data gehört. In diesem einwöchigen Kurs werden wir in einem Crashkurs vermitteln, was diese Begriffe bedeuten und inwiefern sie in erfolgreichen Organisationen eine Rolle spielen. Dieser Kur…",
    "Cl": "/course/data-science-course-de-39437",
    "Cp": "Coursera",
    "Cd": "6-7 hours worth of material, 1 week long",
    "Cpp": "Free Online Course (Audit)"
},
{
    "Cn": "Introduction to Reproducibility in Cancer Informatics",
    "Cc": "The course is intended for students in the biomedical sciences and researchers who use informatics tools in their research and have not had training in reproducibility tools and methods.\n\nThis course is written for individuals who:  \n\n- Have some familia…",
    "Cl": "/course/intro-reproducibility-cancer-informatics-60069",
    "Cp": "Coursera",
    "Cd": "7-8 hours worth of material, 5 weeks long",
    "Cpp": "Free Online Course (Audit)"
},
{
    "Cn": "Calculus through Data & Modelling: Techniques of Integration",
    "Cc": "In this course, we build on previously defined notions of the integral of a single-variable function over an interval. Now, we will extend our understanding of integrals to work with functions of more than one variable. First, we will learn how to integr…",
    "Cl": "/course/calculus-through-data-and-modelling-techniques-of-32771",
    "Cp": "Coursera",
    "Cd": "4-5 hours worth of material, 4 weeks long",
    "Cpp": "Free Online Course (Audit)"
},
{
    "Cn": "Teaching Writing Process",
    "Cc": "Half a century ago, a revolution took place in the teaching of writing. Educators asked, “What if we were to study how professional writers wrote, as a way to learn how we might teach writing more effectively?” The result was the writing process movement…",
    "Cl": "/course/teaching-writing-process-45187",
    "Cp": "Coursera",
    "Cd": "20 hours worth of material, 4 weeks long",
    "Cpp": "Free Online Course (Audit)"
},
{
    "Cn": "Управление анализом данных",
    "Cc": "Этот недельный курс описывает процесс анализа данных и способы управления этим процессом. Мы рассмотрим итеративный характер анализа данных и роль постановки точного вопроса, исследовательский анализ данных, выводы, формальное статистическое моделировани…",
    "Cl": "/course/managing-data-analysis-ru-39512",
    "Cp": "Coursera",
    "Cd": "8-9 hours worth of material, 1 week long",
    "Cpp": "Free Online Course (Audit)"
},
{
    "Cn": "Foundations of Telehealth",
    "Cc": "Telemedicine has proven itself to be an important part of the future of healthcare. In this course, students will be introduced to the key components and considerations needed to design and implement a successful telemedicine program at both the practice…",
    "Cl": "/course/telehealth-60068",
    "Cp": "Coursera",
    "Cd": "8-9 hours worth of material, 4 weeks long",
    "Cpp": "Free Online Course (Audit)"
},
{
    "Cn": "Advanced Reproducibility in Cancer Informatics",
    "Cc": "This course introduces tools that help enhance reproducibility and replicability in the context of cancer informatics. It uses hands-on exercises to demonstrate in practical terms how to get acquainted with these tools but is by no means meant to be a co…",
    "Cl": "/course/adv-reproducibility-cancer-informatics-60070",
    "Cp": "Coursera",
    "Cd": "9-10 hours worth of material, 5 weeks long",
    "Cpp": "Free Online Course (Audit)"
},
{
    "Cn": "Embajador de la Vacuna COVID: Cómo Hablar con los Padres",
    "Cc": "La vacunación es una estrategia clave para prevenir enfermedades graves y la muerte por COVID-19. Estas vacunas están disponibles para niños de a partir de los 5 años, pero muchos padres tienen preguntas sobre las vacunaciones. Este curso de capacitación…",
    "Cl": "/course/covid-vaccine-ambassador-spanish-89845",
    "Cp": "Coursera",
    "Cd": "2-3 hours worth of material, 1 week long",
    "Cpp": "Free Online Course (Audit)"
},
{
    "Cn": "Der Werkzeugkasten des Data Scientist",
    "Cc": "In this course you will get an introduction to the main tools and ideas in the data scientist's toolbox. The course gives an overview of the data, questions, and tools that data analysts and data scientists work with. There are two components to this cou…",
    "Cl": "/course/data-scientists-tools-de-65146",
    "Cp": "Coursera",
    "Cd": "18 hours worth of material, 4 weeks long",
    "Cpp": "Free Online Course (Audit)"
},
{
    "Cn": "Family Spirit Nurture",
    "Cc": "This course is designed for health educators and home visitors serving families with infants 0-6 months old. Learners will gain knowledge and skills to make a positive impact on healthy infant nutrition and growth as well as maternal and family nutrition…",
    "Cl": "/course/family-spirit-nurture-126832",
    "Cp": "Coursera",
    "Cd": "6-7 hours worth of material, 4 weeks long",
    "Cpp": "Free Online Course (Audit)"
},
{
    "Cn": "Data Science in Real Life",
    "Cc": "Have you ever had the perfect data science experience? The data pull went perfectly. There were no merging errors or missing data. Hypotheses were clearly defined prior to analyses. Randomization was performed for the treatment of interest. The analytic…",
    "Cl": "/course/real-life-data-science-4389",
    "Cp": "Coursera",
    "Cd": "7-8 hours worth of material, 1 week long",
    "Cpp": "Free Online Course (Audit)"
},
{
    "Cn": "Principles of fMRI 1",
    "Cc": "This course covers the design, acquisition, and analysis of Functional Magnetic Resonance Imaging (fMRI) data.\n\nA book related to the class can be found here: https://leanpub.com/principlesoffmri",
    "Cl": "/course/fmri1-4397",
    "Cp": "Coursera",
    "Cd": "8-9 hours worth of material, 4 weeks long",
    "Cpp": "Free Online Course (Audit)"
},
{
    "Cn": "Managing Data Analysis",
    "Cc": "This one-week course describes the process of analyzing data and how to manage that process. We describe the iterative nature of data analysis and the role of stating a sharp question, exploratory data analysis, inference, formal statistical modeling, in…",
    "Cl": "/course/managing-data-analysis-4388",
    "Cp": "Coursera",
    "Cd": "8-9 hours worth of material, 1 week long",
    "Cpp": "Free Online Course (Audit)"
},
{
    "Cn": "Principles of fMRI 2",
    "Cc": "This course covers the analysis of Functional Magnetic Resonance Imaging (fMRI) data. It is a continuation of the course “Principles of fMRI, Part 1”",
    "Cl": "/course/fmri2-4814",
    "Cp": "Coursera",
    "Cd": "8-9 hours worth of material, 4 weeks long",
    "Cpp": "Free Online Course (Audit)"
},
{
    "Cn": "Living with Dementia: Impact on Individuals, Caregivers, Communities and Societies",
    "Cc": "Health professionals and students, family caregivers, friends of and affected individuals, and others interested in learning about dementia and quality care will benefit from completing the course. Led by Drs. Nancy Hodgson and Laura Gitlin, participants…",
    "Cl": "/course/dementiacare-1030",
    "Cp": "Coursera",
    "Cd": "18 hours worth of material, 5 weeks long",
    "Cpp": "Free Online Course (Audit)"
},
{
    "Cn": "Understanding Cancer Metastasis",
    "Cc": "Over 500,000 people in the United States and over 8 million people worldwide are dying from cancer every year. As people live longer, the incidence of cancer is rising worldwide, and the disease is expected to strike over 20 million people annually by 20…",
    "Cl": "/course/cancer-metastasis-7624",
    "Cp": "Coursera",
    "Cd": "5-6 hours worth of material, 3 weeks long",
    "Cpp": "Free Online Course (Audit)"
},
{
    "Cn": "An Introduction to the U.S. Food System: Perspectives from Public Health",
    "Cc": "A food system encompasses the activities, people and resources involved in getting food from field to plate. Along the way, it intersects with aspects of public health, equity and the environment. In this course, we will provide a brief introduction to t…",
    "Cl": "/course/foodsys-396",
    "Cp": "Coursera",
    "Cd": "24 hours worth of material, 6 weeks long",
    "Cpp": "Free Online Course (Audit)"
},
{
    "Cn": "Design and Interpretation of Clinical Trials",
    "Cc": "Clinical trials are experiments designed to evaluate new interventions to prevent or treat disease in humans. The interventions evaluated can be drugs, devices (e.g., hearing aid), surgeries, behavioral interventions (e.g., smoking cessation program), co…",
    "Cl": "/course/clintrials-1037",
    "Cp": "Coursera",
    "Cd": "10 hours worth of material, 6 weeks long",
    "Cpp": "Free Online Course (Audit)"
},
{
    "Cn": "Fighting COVID-19 with Epidemiology: A Johns Hopkins Teach-Out",
    "Cc": "This free Teach-Out is for anyone who has been curious about how we identify and measure outbreaks like the COVID-19 epidemic and wants to understand the epidemiology of these infections.",
    "Cl": "/course/covid19-epidemiology-19250",
    "Cp": "Coursera",
    "Cd": "4-5 hours worth of material, 2 weeks long",
    "Cpp": "Free Online Course (Audit)"
},
{
    "Cn": "Systems Thinking In Public Health",
    "Cc": "This course provides an introduction to systems thinking and systems models in public health. Problems in public health and health policy tend to be complex with many actors, institutions and risk factors involved. If an outcome depends on many interacti…",
    "Cl": "/course/systems-thinking-5723",
    "Cp": "Coursera",
    "Cd": "15 hours worth of material, 4 weeks long",
    "Cpp": "Free Online Course (Audit)"
},
{
    "Cn": "Data Science",
    "Cc": "Ask the right questions, manipulate data sets, and create visualizations to communicate results.\n\nThis Specialization covers the concepts and tools you'll need throughout the entire data science pipeline, from asking the right kinds of questions to makin…",
    "Cl": "/course/jhu-data-science-18692",
    "Cp": "Coursera",
    "Cd": "7 hours a week, 48 weeks long",
    "Cpp": "Paid Course"
},
{
    "Cn": "The Unix Workbench",
    "Cc": "Unix forms a foundation that is often very helpful for accomplishing other goals you might have for you and your computer, whether that goal is running a business, writing a book, curing disease, or creating the next great app. The means to these goals a…",
    "Cl": "/course/unix-8866",
    "Cp": "Coursera",
    "Cd": "19 hours worth of material, 4 weeks long",
    "Cpp": "Free Online Course (Audit)"
},
{
    "Cn": "Data and Health Indicators in Public Health Practice",
    "Cc": "Epidemiology in public health practice uses study design and analyses to identify causes in an outbreak situation, guides interventions to improve population health, and evaluates programs and policies.\n\nIn this course, we'll introduce you to problem sol…",
    "Cl": "/course/data-public-health-8921",
    "Cp": "Coursera",
    "Cd": "6-7 hours worth of material, 4 weeks long",
    "Cpp": "Free Online Course (Audit)"
},
{
    "Cn": "Measuring and Maximizing Impact of COVID-19 Contact Tracing",
    "Cc": "This course aims to provide managers and developers of contact tracing programs guidance on the most important indicators of performance of a contact tracing program, and a tool that can be used to project the likely impact of improvements in specific in…",
    "Cl": "/course/measuring-and-maximizing-impact-of-covid-19-conta-20985",
    "Cp": "Coursera",
    "Cd": "3-4 hours worth of material, 1 week long",
    "Cpp": "Free Online Course (Audit)"
},
{
    "Cn": "Data Science Capstone",
    "Cc": "The capstone project class will allow students to create a usable/public data product that can be used to show your skills to potential employers. Projects will be drawn from real-world problems and will be conducted with industry, government, and academ…",
    "Cl": "/course/data-science-project-2791",
    "Cp": "Coursera",
    "Cd": "5-6 hours worth of material, 7 weeks long",
    "Cpp": "Free Online Course (Audit)"
},
{
    "Cn": "The R Programming Environment",
    "Cc": "This course provides a rigorous introduction to the R programming language, with a  particular focus on using R for software development in a data science setting. Whether you are part of a data science team or working individually within a community of…",
    "Cl": "/course/r-programming-environment-7170",
    "Cp": "Coursera",
    "Cd": "27 hours worth of material, 4 weeks long",
    "Cpp": "Free Online Course (Audit)"
},
{
    "Cn": "COVID-19: Effective Nursing in Times of Crisis",
    "Cc": "Explore how nursing can respond to the challenges posed by low resources and high societal uncertainty in the wake of COVID-19.",
    "Cl": "/course/effective-nursing-in-times-of-crisis-19511",
    "Cp": "FutureLearn",
    "Cd": "2 hours a week, 2 weeks long",
    "Cpp": "Free Certificate"
},
{
    "Cn": "Confronting Gender Based Violence: Global Lessons for Healthcare Workers",
    "Cc": "This course introduces participants from the healthcare sector to gender based violence (GBV), including global epidemiology of GBV; health outcomes; seminal research; and clinical best practices for GBV prevention, support, and management.",
    "Cl": "/course/gender-based-violence-3471",
    "Cp": "Coursera",
    "Cd": "22 hours worth of material, 4 weeks long",
    "Cpp": "Free Online Course (Audit)"
},
{
    "Cn": "Major Depression in the Population: A Public Health Approach",
    "Cc": "Public Mental Health is the application of the principles of medicine and social science to prevent the occurrence of mental and behavioral disorders and to promote mental health of the population. This course illustrates the principles of public health…",
    "Cl": "/course/pmhdepression-1034",
    "Cp": "Coursera",
    "Cd": "11 hours worth of material, 6 weeks long",
    "Cpp": "Free Online Course (Audit)"
},
{
    "Cn": "The Accelerating Universe",
    "Cc": "Nobel laureate Adam Riess walks you through his team's incredible discovery of dark energy and our accelerating universe. Explore one of the biggest mysteries in modern cosmology in this Master Class.",
    "Cl": "/course/world-science-u-the-accelerating-universe-5207",
    "Cp": "World Science U",
    "Cd": "2-3 hours worth of material, 1 week long",
    "Cpp": "Free Online Course"
},
{
    "Cn": "Executive Data Science Capstone",
    "Cc": "The Executive Data Science Capstone, the specialization's culminating project, is an opportunity for people who have completed all four EDS courses to apply what they've learned to a real-world scenario developed in collaboration with Zillow, a data-driv…",
    "Cl": "/course/executive-data-science-capstone-5088",
    "Cp": "Coursera",
    "Cd": "59 hours worth of material, 4 weeks long",
    "Cpp": "Free Online Course (Audit)"
},
{
    "Cn": "R البرمجة باستخدام لغة",
    "Cc": "ستتعلم في هذه الدورة كيفية البرمجة بلغة R وكيفية استخدامها لتحليل البيانات بصورة فعالة. ستتعلم كيفية تثبيت البرامج اللازمة لبيئة البرمجة الإحصائية وتكوينها وكيفية وصف مفاهيم لغة البرمجة العامة إذ يتم تطبيقها بلغة إحصائية عالية المستوى. تتناول الدورة المش…",
    "Cl": "/course/r-programming-ar-37043",
    "Cp": "Coursera",
    "Cd": "21 hours worth of material, 4 weeks long",
    "Cpp": "Free Online Course (Audit)"
},
{
    "Cn": "Building R Packages",
    "Cc": "Writing good code for data science is only part of the job. In order to maximizing the usefulness and reusability of data science software, code must be organized and distributed in a manner that adheres to community-based standards and provides a good u…",
    "Cl": "/course/r-packages-7175",
    "Cp": "Coursera",
    "Cd": "9-10 hours worth of material, 4 weeks long",
    "Cpp": "Free Online Course (Audit)"
},
{
    "Cn": "Diagnosing Health Behaviors for Global Health Programs",
    "Cc": "Health behavior lies at the core of any successful public health intervention. While we will examine the behavior of individual in depth in this course, we also recognize by way of the Ecological Model that individual behavior is encouraged or constraine…",
    "Cl": "/course/health-behaviors-global-9264",
    "Cp": "Coursera",
    "Cd": "16 hours worth of material, 5 weeks long",
    "Cpp": "Free Online Course (Audit)"
},
{
    "Cn": "Public Health in Humanitarian Crises 1",
    "Cc": "This course introduces a set of public health problems experienced by people affected by natural disasters and/or conflict. It discusses the many changes in people's lives when they are uprooted by a disaster, ranging from changes in disease patterns, ac…",
    "Cl": "/course/humanitarian-public-health-8709",
    "Cp": "Coursera",
    "Cd": "5-6 hours worth of material, 4 weeks long",
    "Cpp": "Free Online Course (Audit)"
},
{
    "Cn": "Advanced Linear Models for Data Science 2: Statistical Linear Models",
    "Cc": "Welcome to the Advanced Linear Models for Data Science Class 2: Statistical Linear Models. This class is an introduction to least squares from a linear algebraic and mathematical perspective. Before beginning the class make sure that you have the followi…",
    "Cl": "/course/linear-models-2-7476",
    "Cp": "Coursera",
    "Cd": "16 hours worth of material, 6 weeks long",
    "Cpp": "Free Online Course (Audit)"
},
{
    "Cn": "Public Health in Humanitarian Crises 2",
    "Cc": "This course, Public Health in Humanitarian Crises 2, addresses public health issues of people affected by disasters, both natural  or conflict-related. It discusses the many changes that occur in people's lives when they are uprooted by a disaster, inclu…",
    "Cl": "/course/humanitarian-public-health-2-17156",
    "Cp": "Coursera",
    "Cd": "12 hours worth of material, 5 weeks long",
    "Cpp": "Free Online Course (Audit)"
},
{
    "Cn": "Application of Health Equity Research Methods for Practice and Policy",
    "Cc": "Intended for students who have completed the introduction to health equity research course and/or have previous experience working in this area. This course will cover innovative methods, practical tools, and skills required to conduct rigorous health eq…",
    "Cl": "/course/health-equity-research-methods-20282",
    "Cp": "Coursera",
    "Cd": "15 hours worth of material, 5 weeks long",
    "Cpp": "Free Online Course (Audit)"
},
{
    "Cn": "Setting the Stage for Success: An Eye on Safety Culture and Teamwork (Patient Safety II)",
    "Cc": "Safety culture is a facet of organizational culture that captures attitudes, beliefs, perceptions, and values about safety.  A culture of safety is essential in high reliability organizations and is a critical mechanism for the delivery of safe and high-…",
    "Cl": "/course/patient-safety-culture-9611",
    "Cp": "Coursera",
    "Cd": "8-9 hours worth of material, 4 weeks long",
    "Cpp": "Free Online Course (Audit)"
},
{
    "Cn": "Patient Safety and Quality Improvement: Developing a Systems View (Patient Safety I)",
    "Cc": "In this course, you will be able develop a systems view for patient safety and quality improvement in healthcare.  By then end of this course, you will be able to: 1) Describe a minimum of four key events in the history of patient safety and quality impr…",
    "Cl": "/course/patient-safety-systems-view-9582",
    "Cp": "Coursera",
    "Cd": "5-6 hours worth of material, 4 weeks long",
    "Cpp": "Free Online Course (Audit)"
},
{
    "Cn": "Fundamental Neuroscience for Neuroimaging",
    "Cc": "Neuroimaging methods are used with increasing frequency in clinical practice and basic research. Designed for students and professionals, this course will introduce the basic principles of neuroimaging methods as applied to human subjects research and in…",
    "Cl": "/course/neuroscience-neuroimaging-9719",
    "Cp": "Coursera",
    "Cd": "9-10 hours worth of material, 4 weeks long",
    "Cpp": "Free Online Course (Audit)"
},
{
    "Cn": "The People, Power, and Pride of Public Health",
    "Cc": "The People, Power, and Pride of Public Health provides an engaging overview of the incredible accomplishments and promise of the public health field.  The first module includes interviews with legendary public health figures whose work led to millions of…",
    "Cl": "/course/public-health-8805",
    "Cp": "Coursera",
    "Cd": "4-5 hours worth of material, 3 weeks long",
    "Cpp": "Free Online Course (Audit)"
},
{
    "Cn": "Hypothesis Testing in Public Health",
    "Cc": "Biostatistics is an essential skill for every public health researcher because it provides a set of precise methods for extracting meaningful conclusions from data. In this second course of the Biostatistics in Public Health Specialization, you'll learn…",
    "Cl": "/course/hypothesis-testing-public-health-12760",
    "Cp": "Coursera",
    "Cd": "19 hours worth of material, 4 weeks long",
    "Cpp": "Free Online Course (Audit)"
},
{
    "Cn": "Summary Statistics in Public Health",
    "Cc": "Biostatistics is the application of statistical reasoning to the life sciences, and it is the key to unlocking the data gathered by researchers and the evidence presented in the scientific literature. In this course, we'll focus on the use of statistical…",
    "Cl": "/course/summary-statistics-12762",
    "Cp": "Coursera",
    "Cd": "15 hours worth of material, 4 weeks long",
    "Cpp": "Free Online Course (Audit)"
},
{
    "Cn": "Simple Regression Analysis in Public Health",
    "Cc": "Biostatistics is the application of statistical reasoning to the life sciences, and it's the key to unlocking the data gathered by researchers and the evidence presented in the scientific public health literature. In this course, we'll focus on the use o…",
    "Cl": "/course/simple-regression-analysis-public-health-12763",
    "Cp": "Coursera",
    "Cd": "14 hours worth of material, 4 weeks long",
    "Cpp": "Free Online Course (Audit)"
},
{
    "Cn": "Multiple Regression Analysis in Public Health",
    "Cc": "Biostatistics is the application of statistical reasoning to the life sciences, and it's the key to unlocking the data gathered by researchers and the evidence presented in the scientific public health literature. In this course, you'll extend simple reg…",
    "Cl": "/course/multiple-regression-analysis-public-heal-12765",
    "Cp": "Coursera",
    "Cd": "14 hours worth of material, 4 weeks long",
    "Cpp": "Free Online Course (Audit)"
},
{
    "Cn": "Public Health Perspectives on Sustainable Diets",
    "Cc": "This short course looks at the urgent need to address the sustainability of our food systems, including better understanding the complex relationship between diet and climate change.",
    "Cl": "/course/sustainable-diets-22459",
    "Cp": "Coursera",
    "Cd": "7-8 hours worth of material, 3 weeks long",
    "Cpp": "Free Online Course (Audit)"
},
{
    "Cn": "Foundations of Healthcare Systems Engineering",
    "Cc": "Through dynamic video lectures and practical application questions, you will learn about the Foundations of Healthcare Systems Engineering.  In this course you will learn about the current lack of synchronized, efficient, and integrated healthcare system…",
    "Cl": "/course/foundations-of-healthcare-systems-engineering-21475",
    "Cp": "Coursera",
    "Cd": "5-6 hours worth of material, 4 weeks long",
    "Cpp": "Free Online Course (Audit)"
},
{
    "Cn": "Advanced R Programming",
    "Cc": "This course covers advanced topics in R programming that are necessary for developing powerful, robust, and reusable data science tools. Topics covered include functional programming in R, robust error handling, object oriented programming, profiling and…",
    "Cl": "/course/advanced-r-7174",
    "Cp": "Coursera",
    "Cd": "18 hours worth of material, 4 weeks long",
    "Cpp": "Free Online Course (Audit)"
},
{
    "Cn": "Calculus through Data & Modeling: Differentiation Rules",
    "Cc": "Calculus through Data & Modeling: Differentiation Rules continues the study of differentiable calculus by developing  new rules for finding derivatives without having to use the limit definition directly.  These differentiation rules will enable the calc…",
    "Cl": "/course/calculus-through-data-and-modelling-differentiati-27984",
    "Cp": "Coursera",
    "Cd": "7-8 hours worth of material, 7 weeks long",
    "Cpp": "Free Online Course (Audit)"
},
{
    "Cn": "Artificial Intelligence for Breast Cancer Detection",
    "Cc": "Through interactive lectures and module exercises, this course illustrates the potential of artificial intelligence in breast imaging. Topics include an introduction of breast cancer and breast imaging, introduction to artificial intelligence in image an…",
    "Cl": "/course/artificial-intelligence-for-breast-cancer-detecti-46386",
    "Cp": "Coursera",
    "Cd": "15 hours worth of material, 4 weeks long",
    "Cpp": "Free Online Course (Audit)"
},
{
    "Cn": "Exploratory Data Analysis",
    "Cc": "This course covers the essential exploratory techniques for summarizing data. These techniques are typically applied before formal modeling commences and can help inform the development of more complex statistical models. Exploratory techniques are also…",
    "Cl": "/course/exploratory-data-analysis-97459",
    "Cp": "Coursera",
    "Cd": "55 hours worth of material, 4 weeks long",
    "Cpp": "Free Online Course (Audit)"
},
{
    "Cn": "Infectious Disease Transmission Models for Decision-Makers",
    "Cc": "During the COVID-19 pandemic, both the promise and perils of using infectious disease transmission models to make public health policy decisions became clearer than ever. Optimal use of modeled output requires that public health policy makers be informed…",
    "Cl": "/course/infectious-disease-transmission-models-for-decisi-99015",
    "Cp": "Coursera",
    "Cd": "3-4 hours worth of material, 1 week long",
    "Cpp": "Free Online Course (Audit)"
},
{
    "Cn": "Understanding and Strengthening Health Systems",
    "Cc": "Welcome to our course on Understanding and Strengthening Health Systems for Global Health. During the course we will provide you with an overview of the main elements or building blocks of a health system based on the World Health Organization's guidance…",
    "Cl": "/course/health-systems-10756",
    "Cp": "Coursera",
    "Cd": "14 hours worth of material, 4 weeks long",
    "Cpp": "Free Online Course (Audit)"
},
{
    "Cn": "Introduction to Neurohacking In R",
    "Cc": "Neurohacking describes how to use the R programming language (https://cran.r-project.org/) and its associated package to perform manipulation, processing, and analysis of neuroimaging data. We focus on publicly-available structural magnetic resonance ima…",
    "Cl": "/course/neurohacking-6420",
    "Cp": "Coursera",
    "Cd": "18 hours worth of material, 4 weeks long",
    "Cpp": "Free Online Course (Audit)"
},
{
    "Cn": "Uncertainty and Research",
    "Cc": "This course teaches the fundamentals of scientific research. We approach the research process as a means of systematically reducing uncertainty and demonstrate how conducting a scientific investigation can be posed as an exercise in Bayesian uncertainty…",
    "Cl": "/course/uncertainty-and-research-65658",
    "Cp": "Coursera",
    "Cd": "15 hours worth of material, 5 weeks long",
    "Cpp": "Free Online Course (Audit)"
},
{
    "Cn": "Getting Started with Data Visualization in R",
    "Cc": "Data visualization is a critical skill for anyone that routinely using quantitative data in his or her work - which is to say that data visualization is a tool that almost every worker needs today. One of the critical tools for data visualization today i…",
    "Cl": "/course/jhu-getting-started-data-viz-r-22205",
    "Cp": "Coursera",
    "Cd": "12 hours worth of material, 3 weeks long",
    "Cpp": "Free Online Course (Audit)"
},
{
    "Cn": "The Data Science of Health Informatics",
    "Cc": "By the end of this course, students will recognize the different types of health and healthcare data, will articulate a coherent and complete question, will interpret queries designed for secondary use of EHR data, and will interpret the results of those…",
    "Cl": "/course/the-data-science-of-health-informatics-12856",
    "Cp": "Coursera",
    "Cd": "10 hours worth of material, 4 weeks long",
    "Cpp": "Free Online Course (Audit)"
},
{
    "Cn": "Calculus through Data & Modeling: Limits & Derivatives",
    "Cc": "This first course on concepts of single variable calculus will introduce the notions of limits of a function to define the derivative of a function. In mathematics, the derivative measures the sensitivity to change of the function. For example, the deriv…",
    "Cl": "/course/calculus-through-data-and-modelling-imits-derivat-27983",
    "Cp": "Coursera",
    "Cd": "9-10 hours worth of material, 6 weeks long",
    "Cpp": "Free Online Course (Audit)"
},
{
    "Cn": "Building Data Visualization Tools",
    "Cc": "The data science revolution has produced reams of new data from a wide variety of new sources. These new datasets are being used to answer new questions in way never before conceived. Visualization remains one of the most powerful ways draw conclusions f…",
    "Cl": "/course/r-data-visualization-7176",
    "Cp": "Coursera",
    "Cd": "13 hours worth of material, 4 weeks long",
    "Cpp": "Free Online Course (Audit)"
},
{
    "Cn": "Precalculus: Relations and Functions",
    "Cc": "This course helps to build the foundational material to use mathematics as a tool to model, understand, and interpret the world around us.  This is done through studying functions, their properties, and applications to data analysis.  Concepts of precalc…",
    "Cl": "/course/precalculus-relations-functions-21858",
    "Cp": "Coursera",
    "Cd": "12 hours worth of material, 4 weeks long",
    "Cpp": "Free Online Course (Audit)"
},
{
    "Cn": "Introduction to Digital Health Entrepreneurship",
    "Cc": "This course will provide an overview of digital health entrepreneurship with an initial emphasis on learning the basic digital health terminology, exploring a current example of telemedicine and its growth during the COVID pandemic, and gaining an unders…",
    "Cl": "/course/introduction-digital-health-entrepreneurship-58642",
    "Cp": "Coursera",
    "Cd": "6-7 hours worth of material, 3 weeks long",
    "Cpp": "Free Online Course (Audit)"
},
{
    "Cn": "Planning a Patient Safety or Quality Improvement Project (Patient Safety III)",
    "Cc": "This course provides students with a set of tools and methodologies to plan and initiate a Problem Solving or Quality Improvement project.  The first module presents methods for selecting, scoping and structuring a project before it is even initiated. It…",
    "Cl": "/course/patient-safety-project-planning-9610",
    "Cp": "Coursera",
    "Cd": "5-6 hours worth of material, 4 weeks long",
    "Cpp": "Free Online Course (Audit)"
},
{
    "Cn": "Data - What It Is, What We Can Do With It",
    "Cc": "This course introduces students to data and statistics.  By the end of the course, students should be able to interpret descriptive statistics, causal analyses and visualizations to draw meaningful insights.  \n\nThe course first introduces a framework for…",
    "Cl": "/course/data-what-it-is-what-can-we-do-with-it-22210",
    "Cp": "Coursera",
    "Cd": "11 hours worth of material, 4 weeks long",
    "Cpp": "Free Online Course (Audit)"
},
{
    "Cn": "Modeling Data in the Tidyverse",
    "Cc": "Developing insights about your organization, business, or research project depends on effective modeling and analysis of the data you collect. Building effective models requires understanding the different types of questions you can ask and how to map th…",
    "Cl": "/course/tidyverse-modelling-data-22821",
    "Cp": "Coursera",
    "Cd": "21 hours worth of material, 11 weeks long",
    "Cpp": "Free Online Course (Audit)"
},
{
    "Cn": "Data Visualization in R with ggplot2",
    "Cc": "Data visualization is a critical skill for anyone that routinely using quantitative data in his or her work - which is to say that data visualization is a tool that almost every worker needs today. One of the critical tools for data visualization today i…",
    "Cl": "/course/jhu-data-visualization-r-22202",
    "Cp": "Coursera",
    "Cd": "13 hours worth of material, 3 weeks long",
    "Cpp": "Free Online Course (Audit)"
},
{
    "Cn": "Clinical Trials Analysis, Monitoring, and Presentation",
    "Cc": "In this course, you'll learn more advanced operational skills that you and your team need to run a successful clinical trial. You'll learn about the computation of sample size and how to develop a sample size calculation that's suitable for your trial de…",
    "Cl": "/course/clinical-trials-analysis-presentation-statistical-110352",
    "Cp": "Coursera",
    "Cd": "4-5 hours worth of material, 4 weeks long",
    "Cpp": "Free Online Course (Audit)"
},
{
    "Cn": "The Outcomes and Interventions of Health Informatics",
    "Cc": "For clinical data science to be effective in healthcare—to achieve the outcomes desired—it must translate into decision support of some sort, either at the patient, clinician, or manager level. By the end of this course, students will be able to articula…",
    "Cl": "/course/the-outcomes-and-interventions-of-health-12855",
    "Cp": "Coursera",
    "Cd": "6-7 hours worth of material, 4 weeks long",
    "Cpp": "Free Online Course (Audit)"
},
{
    "Cn": "Designing for Sustainment: Keeping Improvement Work on Track (Patient Safety IV)",
    "Cc": "Keeping patient safety and quality improvement projects on track, on time, and on budget is critical to ensuring their success. In this course, students will be introduced and given the opportunity to apply a series of tools to guide and manage patient s…",
    "Cl": "/course/patient-safety-sustainment-9771",
    "Cp": "Coursera",
    "Cd": "7-8 hours worth of material, 4 weeks long",
    "Cpp": "Free Online Course (Audit)"
},
{
    "Cn": "Toxicology 21: Scientific Applications",
    "Cc": "This course familiarizes students with the novel concepts being used to revamp regulatory toxicology in response to a breakthrough National Research Council Report “Toxicity Testing in the 21st Century: A Vision and a Strategy.” We present the latest dev…",
    "Cl": "/course/toxicology-21-10478",
    "Cp": "Coursera",
    "Cd": "96 hours worth of material, 6 weeks long",
    "Cpp": "Free Online Course (Audit)"
},
{
    "Cn": "Measuring the Success of a Patient Safety or Quality Improvement Project (Patient Safety VI)",
    "Cc": "How will you know if your patient safety and quality project is meeting its objectives? Peter Drucker once said “What gets measured, gets managed.” In this course, students will learn why measurement is critical to quality improvement work. Equally impor…",
    "Cl": "/course/patient-safety-measurement-9774",
    "Cp": "Coursera",
    "Cd": "6-7 hours worth of material, 4 weeks long",
    "Cpp": "Free Online Course (Audit)"
},
{
    "Cn": "Calculus through Data & Modeling: Precalculus Review",
    "Cc": "This course is an applications-oriented, investigative approach to the study of the mathematical topics needed for further coursework in single and multivariable calculus. The unifying theme is the study of functions, including polynomial, rational, expo…",
    "Cl": "/course/calculus-through-data-and-modelling-precalculus-r-27987",
    "Cp": "Coursera",
    "Cd": "7-8 hours worth of material, 4 weeks long",
    "Cpp": "Free Online Course (Audit)"
},
{
    "Cn": "Precalculus: Periodic Functions",
    "Cc": "This course helps to build the foundational material to use mathematics as a tool to model, understand, and interpret the world around us.  This is done through studying functions, their properties, and applications to data analysis.  Concepts of precalc…",
    "Cl": "/course/precalculus-periodic-functions-21859",
    "Cp": "Coursera",
    "Cd": "9-10 hours worth of material, 5 weeks long",
    "Cpp": "Free Online Course (Audit)"
},
{
    "Cn": "Engineering Life: Synbio, Bioethics & Public Policy",
    "Cc": "Synbio is a diverse field with diverse applications, and the different contexts (e.g., gain-of-function research, biofuels) raise different ethical and governance challenges. The objective of this course is to increase learners' awareness and understandi…",
    "Cl": "/course/synbioethics-3248",
    "Cp": "Coursera",
    "Cd": "14 hours worth of material, 5 weeks long",
    "Cpp": "Free Online Course (Audit)"
},
{
    "Cn": "Implementing a Patient Safety or Quality Improvement Project (Patient Safety V)",
    "Cc": "Now that you've carefully planned your patient safety and quality improvement project, the real work can begin. This course will introduce students to the unique challenges encountered when implementing, maintaining, and expanding a patient safety and qu…",
    "Cl": "/course/patient-safety-implementation-9772",
    "Cp": "Coursera",
    "Cd": "9-10 hours worth of material, 4 weeks long",
    "Cpp": "Free Online Course (Audit)"
},
{
    "Cn": "Measurement - Turning Concepts into Data",
    "Cc": "This course provides a framework for how analysts can create and evaluate quantitative measures.  Consider the many tricky concepts that are often of interest to analysts, such as health, educational attainment and trust in government.  This course will…",
    "Cl": "/course/measurement-turning-concepts-data-22203",
    "Cp": "Coursera",
    "Cd": "11 hours worth of material, 4 weeks long",
    "Cpp": "Free Online Course (Audit)"
},
{
    "Cn": "Responsible Reporting on Suicide for Journalists",
    "Cc": "Responsible Reporting on Suicide for Journalists is designed to give working journalists and students who are interested in the field an understanding of how news media can impact suicide trends and how that power can be used to improve public health. An…",
    "Cl": "/course/responsible-reporting-on-suicide-for-journalists-90265",
    "Cp": "Coursera",
    "Cd": "7-8 hours worth of material, 1 week long",
    "Cpp": "Free Online Course (Audit)"
},
{
    "Cn": "Data Literacy Capstone - Evaluating Research",
    "Cc": "This is the final course in the Data Literacy Specialization.  In this capstone course, you'll apply the skills and knowledge you have acquired in the specialization to the critical evaluation of an original quantitative analysis.  The project will first…",
    "Cl": "/course/data-literacy-capstone-evaluating-research-22204",
    "Cp": "Coursera",
    "Cd": "5-6 hours worth of material, 3 weeks long",
    "Cpp": "Free Online Course (Audit)"
},
{
    "Cn": "Black Lives Matter",
    "Cc": "The #BlackLivesMatter movement is the most significant political movement in African American life in the United States in the last fifty years. BLM leaders denounced anti-black racism, white supremacy, and police brutality and reshaped how we think abou…",
    "Cl": "/course/black-lives-matter-40644",
    "Cp": "Coursera",
    "Cd": "16 hours worth of material, 4 weeks long",
    "Cpp": "Free Online Course (Audit)"
},
{
    "Cn": "Advanced Data Visualization with R",
    "Cc": "Data visualization is a critical skill for anyone that routinely using quantitative data in his or her work - which is to say that data visualization is a tool that almost every worker needs today. One of the critical tools for data visualization today i…",
    "Cl": "/course/jhu-advanced-data-visualization-r-22201",
    "Cp": "Coursera",
    "Cd": "11 hours worth of material, 3 weeks long",
    "Cpp": "Free Online Course (Audit)"
},
{
    "Cn": "Sustainable Neighborhoods",
    "Cc": "This course will provide students with an introduction to tools and concepts for a better understanding of the importance of the neighborhood as part of a sustainable city. This will include a careful look at the natural context of successful neighborhoo…",
    "Cl": "/course/sustainable-neighborhoods-110346",
    "Cp": "Coursera",
    "Cd": "4-5 hours worth of material, 3 weeks long",
    "Cpp": "Free Online Course (Audit)"
},
{
    "Cn": "Precalculus: Mathematical Modeling",
    "Cc": "This course helps to build the foundational material to use mathematics as a tool to model, understand, and interpret the world around us.  This is done through studying functions, their properties, and applications to data analysis.  Concepts of precalc…",
    "Cl": "/course/precalculus-mathematical-modelling-21860",
    "Cp": "Coursera",
    "Cd": "9-10 hours worth of material, 4 weeks long",
    "Cpp": "Free Online Course (Audit)"
},
{
    "Cn": "Sustainable Transportation Networks and Streetscapes",
    "Cc": "This course will evaluate best practices in transportation networks, thoroughfares, and streetscape designs for the effective movement of people, goods, and services in a region. Sustainable public and private streetscape design and application will be r…",
    "Cl": "/course/sustainable-transportation-networks-and-streetsca-110354",
    "Cp": "Coursera",
    "Cd": "4-5 hours worth of material, 3 weeks long",
    "Cpp": "Free Online Course (Audit)"
},
{
    "Cn": "Publishing Visualizations in R with Shiny and flexdashboard",
    "Cc": "Data visualization is a critical skill for anyone that routinely using quantitative data in his or her work - which is to say that data visualization is a tool that almost every worker needs today. One of the critical tools for data visualization today i…",
    "Cl": "/course/data-viz-shiny-dashboards-22207",
    "Cp": "Coursera",
    "Cd": "12 hours worth of material, 3 weeks long",
    "Cpp": "Free Online Course (Audit)"
},
{
    "Cn": "Leadership for Cancer Informatics  Research",
    "Cc": "Informatics research often requires multidisciplinary teams. This requires more flexibility to communicate with team members with distinct backgrounds. Furthermore, team members often have different research and career goals. This can present unique chal…",
    "Cl": "/course/leadership-for-cancer-informatics-research-56965",
    "Cp": "Coursera",
    "Cd": "7-8 hours worth of material, 4 weeks long",
    "Cpp": "Free Online Course (Audit)"
},
{
    "Cn": "Computing for Cancer Informatics",
    "Cc": "One of the key cancer informatics challenges is dealing with and managing the explosion of large data from multiple sources that are often too large to work with on typical personal computers. This course is designed to help researchers and investigators…",
    "Cl": "/course/computing-for-cancer-informatics-71218",
    "Cp": "Coursera",
    "Cd": "11 hours worth of material, 4 weeks long",
    "Cpp": "Free Online Course (Audit)"
},
{
    "Cn": "Importing Data in the Tidyverse",
    "Cc": "Getting data into your statistical analysis system can be one of the most challenging parts of any data science project. Data must be imported and harmonized into a coherent format before any insights can be obtained. You will learn how to get data into…",
    "Cl": "/course/tidyverse-importing-data-22820",
    "Cp": "Coursera",
    "Cd": "15 hours worth of material, 4 weeks long",
    "Cpp": "Free Online Course (Audit)"
},
{
    "Cn": "Design and Conduct of Clinical Trials",
    "Cc": "In this course, you'll learn how to design and carry out clinical trials. Each design choice has implications for the quality and validity of your results. This course provides you and your team with essential skills to evaluate options, make good design…",
    "Cl": "/course/design-and-conduct-clinical-trials-110351",
    "Cp": "Coursera",
    "Cd": "4-5 hours worth of material, 4 weeks long",
    "Cpp": "Free Online Course (Audit)"
},
{
    "Cn": "Introduction to the Tidyverse",
    "Cc": "This course introduces a powerful set of data science tools known as the Tidyverse. The Tidyverse has revolutionized the way in which data scientists do almost every aspect of their job. We will cover the simple idea of \"tidy data\" and how this idea serv…",
    "Cl": "/course/tidyverse-22819",
    "Cp": "Coursera",
    "Cd": "7-8 hours worth of material, 4 weeks long",
    "Cpp": "Free Online Course (Audit)"
},
{
    "Cn": "Inclusive Online Teaching Teach-Out",
    "Cc": "In this course, higher education faculty will examine students' barriers to learning, including unconscious bias, physical impairments, and lack of motivation. Participants will explore and discuss how inclusive pedagogy and Universal Design for Learning…",
    "Cl": "/course/inclusive-online-teaching-21160",
    "Cp": "Coursera",
    "Cd": "5-6 hours worth of material, 2 weeks long",
    "Cpp": "Free Online Course (Audit)"
},
{
    "Cn": "Calculus through Data & Modeling: Applying Differentiation",
    "Cc": "As rates of change, derivatives give us information about the shape of a graph. In this course, we will apply the derivative to find linear approximations for single-variable and multi-variable functions. This gives us a straightforward way to estimate f…",
    "Cl": "/course/calculus-through-data-and-modelling-applying-diff-27982",
    "Cp": "Coursera",
    "Cd": "7-8 hours worth of material, 5 weeks long",
    "Cpp": "Free Online Course (Audit)"
},
{
    "Cn": "Transportation, Sustainable Buildings, Green Construction",
    "Cc": "This course will include the evaluation of best practices in parking strategies for sustainable cities. Some of the examples include downtown parking policy, understanding the high cost of free parking, the development of parking sheds, managing neighbor…",
    "Cl": "/course/transportation-sustainable-buildings-green-constr-110355",
    "Cp": "Coursera",
    "Cd": "6-7 hours worth of material, 3 weeks long",
    "Cpp": "Free Online Course (Audit)"
},
{
    "Cn": "Wrangling Data in the Tidyverse",
    "Cc": "Data never arrive in the condition that you need them in order to do effective data analysis. Data need to be re-shaped, re-arranged, and re-formatted, so that they can be visualized or be inputted into a machine learning algorithm. This course addresses…",
    "Cl": "/course/tidyverse-data-wrangling-22823",
    "Cp": "Coursera",
    "Cd": "14 hours worth of material, 4 weeks long",
    "Cpp": "Free Online Course (Audit)"
},
{
    "Cn": "الحصول على البيانات وتنظيفها",
    "Cc": "قبل أن تتمكن من العمل مع البيانات، يجب أن تحصل على بعضها. ستتناول هذه الدورة التدريبية الطرق الأساسية التي يمكن من خلالها الحصول على البيانات. ستتناول الدورة التدريبية كيفية الحصول على بيانات من الويب ومن واجهات برمجة التطبيقات ومن قواعد البيانات ومن الز…",
    "Cl": "/course/data-cleaning-ar-37047",
    "Cp": "Coursera",
    "Cd": "21 hours worth of material, 4 weeks long",
    "Cpp": "Free Online Course (Audit)"
},
{
    "Cn": "Data Visualization Capstone",
    "Cc": "Data visualization is a critical skill for anyone that routinely using quantitative data in his or her work - which is to say that data visualization is a tool that almost every worker needs today. One of the critical tools for data visualization today i…",
    "Cl": "/course/data-visualization-capstone-22206",
    "Cp": "Coursera",
    "Cd": "22 hours worth of material, 3 weeks long",
    "Cpp": "Free Online Course (Audit)"
},
{
    "Cn": "Firearm Purchaser Licensing Teach-Out: The Background Check Policy Not Enough People Are Talking About",
    "Cc": "The best available evidence shows that comprehensive background checks by themselves are insufficient at reducing gun violence, but strong bodies of research demonstrate that states with comprehensive background checks coupled with firearm purchaser lice…",
    "Cl": "/course/firearm-licensing-17978",
    "Cp": "Coursera",
    "Cd": "5-6 hours worth of material, 4 weeks long",
    "Cpp": "Free Online Course (Audit)"
},
{
    "Cn": "Program Design & Evaluation for Health Systems Strengthening",
    "Cc": "This course provides an introduction to designing and evaluating to strengthen the health system. After successful completion of all learning activities, course participants will be able to:\n1. Define health systems strengthening\n2. Describe health syste…",
    "Cl": "/course/program-design-and-evaluation-for-health-systems--58801",
    "Cp": "Coursera",
    "Cd": "4-5 hours worth of material, 3 weeks long",
    "Cpp": "Free Online Course (Audit)"
},
{
    "Cn": "Documentation and Usability for Cancer Informatics",
    "Cc": "Introduction: \nCancer datasets are plentiful, complicated, and hold information that may be critical for the next research advancements. In order to use these data to their full potential, researchers are dependent on the specialized data tools that are…",
    "Cl": "/course/documentation-usability-cancer-informatics-114654",
    "Cp": "Coursera",
    "Cd": "6-7 hours worth of material, 5 weeks long",
    "Cpp": "Free Online Course (Audit)"
},
{
    "Cn": "Clinical Trials Data Management and Quality Assurance",
    "Cc": "In this course, you'll learn to collect and care for the data gathered during your trial and how to prevent mistakes and errors through quality assurance practices. Clinical trials generate an enormous amount of data, so you and your team must plan caref…",
    "Cl": "/course/clinical-trials-data-collection-management-qualit-110350",
    "Cp": "Coursera",
    "Cd": "6-7 hours worth of material, 4 weeks long",
    "Cpp": "Free Online Course (Audit)"
},
{
    "Cn": "Helping Families Avoid Negative Court Involvement Teach-Out",
    "Cc": "This course will teach learners how to understand when issues can become legal issues, encourage learners to recognize legal problems early, identify possible “legal soft spots” in their own situations, and act when issues are identified to avoid them es…",
    "Cl": "/course/preventative-law-avoiding-negative-court-involvem-120188",
    "Cp": "Coursera",
    "Cd": "3-4 hours worth of material, 1 week long",
    "Cpp": "Free Online Course (Audit)"
},
{
    "Cn": "Planning and Managing Global Health Programmes: Promoting Quality, Accountability, and Equity",
    "Cc": "Address the concepts, theoretical frameworks and practical details involved with planning and managing global health programmes.",
    "Cl": "/course/planning-and-managing-global-health-21609",
    "Cp": "FutureLearn",
    "Cd": "3 hours a week, 5 weeks long",
    "Cpp": "Free Online Course (Audit)"
},
{
    "Cn": "Quantifying Relationships with Regression Models",
    "Cc": "This course will introduce you to the linear regression model, which is a powerful tool that researchers can use to measure the relationship between multiple variables.  We'll begin by exploring the components of a bivariate regression model, which estim…",
    "Cl": "/course/quantifying-relationships-regression-models-22208",
    "Cp": "Coursera",
    "Cd": "11 hours worth of material, 4 weeks long",
    "Cpp": "Free Online Course (Audit)"
},
{
    "Cn": "The Monday Campaigns: Lessons in Public Health Promotion",
    "Cc": "Explore new approaches to public health promotion and the science that underpins them, focusing on the The Monday Campaigns.",
    "Cl": "/course/monday-campaigns-12666",
    "Cp": "FutureLearn",
    "Cd": "2 hours a week, 6 weeks long",
    "Cpp": "Free Online Course (Audit)"
},
{
    "Cn": "Sustainable Regional Principles, Planning and Transportation",
    "Cc": "This course will provide students with an introduction to sustainable regional principles, regional planning concepts and evaluate regional transportation system issues. This will be achieved through dynamic video lectures, practical case studies and the…",
    "Cl": "/course/sustainable-regional-principles-planning-and-tran-110345",
    "Cp": "Coursera",
    "Cd": "7-8 hours worth of material, 4 weeks long",
    "Cpp": "Free Online Course (Audit)"
},
{
    "Cn": "Visualizing Data in the Tidyverse",
    "Cc": "Data visualization is a critical part of any data science project. Once data have been imported and wrangled into place, visualizing your data can help you get a handle on what's going on in the data set. Similarly, once you've completed your analysis an…",
    "Cl": "/course/tidyverse-visualize-data-22822",
    "Cp": "Coursera",
    "Cd": "17 hours worth of material, 4 weeks long",
    "Cpp": "Free Online Course (Audit)"
},
{
    "Cn": "What are the Chances? Probability and Uncertainty in Statistics",
    "Cc": "This course focuses on how analysts can measure and describe the confidence they have in their findings.  The course begins with an overview of the key probability rules and concepts that govern the calculation of uncertainty measures.  We'll then apply…",
    "Cl": "/course/chances-probability-uncertainty-statistics-22209",
    "Cp": "Coursera",
    "Cd": "11 hours worth of material, 4 weeks long",
    "Cpp": "Free Online Course (Audit)"
},
{
    "Cn": "Clinical Trials Management and Advanced Operations",
    "Cc": "In this course, you'll learn about the more advanced elements of managing clinical trials. From anticipating and planning for protocol events to conducting systematic reviews to synthesize evidence, you and your study team need the skills to implement be…",
    "Cl": "/course/clinical-trials-management-and-advanced-operation-110349",
    "Cp": "Coursera",
    "Cd": "4-5 hours worth of material, 5 weeks long",
    "Cpp": "Free Online Course (Audit)"
},
{
    "Cn": "Applied Calculus with Python",
    "Cc": "This course is designed for the Python programmer who wants to develop the foundations of Calculus to help solve challenging problems as well as the student of mathematics looking to learn the theory and numerical techniques of applied calculus implement…",
    "Cl": "/course/applied-calculus-with-python-65788",
    "Cp": "Coursera",
    "Cd": "23 hours worth of material, 5 weeks long",
    "Cpp": "Free Online Course (Audit)"
},
{
    "Cn": "Global Sodium Reduction Strategies",
    "Cc": "This course will help guide policy makers, advocates, and program managers as they design, plan, and implement sodium reduction interventions to protect public health. We invite you to see what interventions have been proven at scale, what shows promise,…",
    "Cl": "/course/sodium-66052",
    "Cp": "Coursera",
    "Cd": "7-8 hours worth of material, 3 weeks long",
    "Cpp": "Free Online Course (Audit)"
},
{
    "Cn": "Building Alliances in Global Health: From Global Institutions to Local Communities",
    "Cc": "Understand the challenges of alliance building within the global health sector with this innovative and informative course.",
    "Cl": "/course/building-alliances-in-global-health-22109",
    "Cp": "FutureLearn",
    "Cd": "3 hours a week, 5 weeks long",
    "Cpp": "Free Online Course (Audit)"
},
{
    "Cn": "Investigating Epidemics like COVID-19: An Analyst's Guide",
    "Cc": "Do you want to learn how to detect, identify the cause, and decrease the morbidity and mortality from outbreaks or pandemics like COVID-19? Are you considering a career in public health practice, but aren't sure how health departments collect and use out…",
    "Cl": "/course/investigating-epidemics-analyst-guide-131294",
    "Cp": "Coursera",
    "Cd": "13 hours worth of material, 4 weeks long",
    "Cpp": "Free Online Course (Audit)"
},
{
    "Cn": "80057235 - Communicating about Vaccines with Patients and Parents",
    "Cc": "Johns Hopkins University , Communicating about Vaccines with Patients and Parents, 4/6/2022 6:30:00 AM - 4/5/2024 6:30:00 PM, The title of the module is \"Communicating about Vaccines with Patients and Parents.\" The intended audience for this activity is…",
    "Cl": "/course/80057235-communicating-vaccines-patients-parents-106267",
    "Cp": "Independent",
    "Cd": "3-5 hours a week, 4 weeks long",
    "Cpp": "Free Certificate"
},
{
    "Cn": "80057443 - Perioperative Management - In Its 37th Year EM",
    "Cc": "Johns Hopkins University , Perioperative Management - In Its 37th Year EM, 4/13/2022 12:00:00 AM - 4/13/2023 12:00:00 AM, The curriculum for this course was specifically created to address the needs of clinicians who provide care for patients before, dur…",
    "Cl": "/course/80057443-perioperative-management-37th-em-106266",
    "Cp": "Independent",
    "Cd": "6 hours a week, 9 weeks long",
    "Cpp": "Free Certificate"
},
{
    "Cn": "80057868  - HPV and Cancer: Understanding Viral Infection and Cancer Prevention",
    "Cc": "Johns Hopkins University , HPV and Cancer: Understanding Viral Infection and Cancer Prevention, 4/28/2022 12:00:00 PM - 4/28/2023 12:00:00 AM, Didactic discussion among faculty intended to meet the educational needs of healthcare professionals involved i…",
    "Cl": "/course/80057868-hpv-cancer-understanding-viral-infection-106265",
    "Cp": "Independent",
    "Cd": "4 hours a week, 17 weeks long",
    "Cpp": "Free Certificate"
},
{
    "Cn": "38835 - Addressing the Challenges of Tele-medicine in MS: Best Practices for Patients and Clinicians (Clinical Dialogue)",
    "Cc": "Johns Hopkins University , Addressing the Challenges of Tele-medicine in MS: Best Practices for Patients and Clinicians (Clinical Dialogue), 6/7/2022 5:00:00 PM - 6/7/2023 5:00:00 PM, Discussion among faculty addressing the treatment of MS and tele-medic…",
    "Cl": "/course/38835-addressing-challenges-tele-medicine-ms-prac-106263",
    "Cp": "Independent",
    "Cd": "1 hour a week, 22 weeks long",
    "Cpp": "Free Certificate"
},
{
    "Cn": "39449 - Addressing the Challenges of Tele-medicine in MS: Best Practices for Patients and Clinicians (eCase Challenge)",
    "Cc": "Johns Hopkins University , Addressing the Challenges of Tele-medicine in MS: Best Practices for Patients and Clinicians (eCase Challenge), 6/7/2022 5:00:00 PM - 6/7/2023 5:00:00 PM, Discussion among faculty addressing the treatment of MS and tele-medicin…",
    "Cl": "/course/39449-addressing-challenges-tele-medicine-ms-prac-106264",
    "Cp": "Independent",
    "Cd": "2 hours a week, 17 weeks long",
    "Cpp": "Free Certificate"
},
{
    "Cn": "Pain Medicine Management - Pain Management of Low Back Pain",
    "Cc": "Johns Hopkins University , Pain Medicine Management - Pain Management of Low Back Pain, 8/8/2022 12:00:00 AM - 6/30/2025 11:59:00 PM, This is an online activity consisting of 3 one-hour video lectures designed to educate physicians about pain medicine ma…",
    "Cl": "/course/pain-medicine-management-pain-management-low-pain-106259",
    "Cp": "Independent",
    "Cd": "8 hours a week, 22 weeks long",
    "Cpp": "Free Certificate"
},
{
    "Cn": "80059958 - Pain Medicine Management - Chronic Pain and Depression",
    "Cc": "Johns Hopkins University , Pain Medicine Management - Chronic Pain and Depression, 8/8/2022 12:00:00 AM - 6/30/2025 11:59:00 PM, This is an online activity consisting of 3 one-hour video lectures designed to educate physicians about pain medicine managem…",
    "Cl": "/course/80059958-pain-medicine-management-chronic-pain-de-106260",
    "Cp": "Independent",
    "Cd": "2 hours a week, 26 weeks long",
    "Cpp": "Free Certificate"
},
{
    "Cn": "Data Science: Statistics and Machine Learning",
    "Cc": "Build models, make inferences, and deliver interactive data products.\n\nThis specialization continues and develops on the material from the Data Science: Foundations using R specialization. It covers statistical inference, regression models, machine learn…",
    "Cl": "/course/data-science-statistics-machine-learning-18814",
    "Cp": "Coursera",
    "Cd": "6 hours a week, 26 weeks long",
    "Cpp": "Paid Course"
},
{
    "Cn": "Health Informatics",
    "Cc": "This Specialization is intended for health professionals, administrators, health IT staff, vendors, startups, and patients who need or want to participate in the health IT/informatics process. Throughout the five courses of this Specialization, you will…",
    "Cl": "/course/health-informatics-18588",
    "Cp": "Coursera",
    "Cd": "3 hours a week, 22 weeks long",
    "Cpp": "Paid Course"
},
{
    "Cn": "Mastering Software Development in R",
    "Cc": "R is a programming language and a free software environment for statistical computing and graphics, widely used by data analysts, data scientists and statisticians. This Specialization covers R software development for building data science tools. As the…",
    "Cl": "/course/r-18665",
    "Cp": "Coursera",
    "Cd": "4 hours a week, 26 weeks long",
    "Cpp": "Paid Course"
},
{
    "Cn": "Advanced Statistics for Data Science",
    "Cc": "Fundamental concepts in probability, statistics and linear models are primary building blocks for data science work. Learners aspiring to become biostatisticians and data scientists will benefit from the foundational knowledge being offered in this speci…",
    "Cl": "/course/advanced-statistics-data-science-21688",
    "Cp": "Coursera",
    "Cd": "2 hours a week, 22 weeks long",
    "Cpp": "Paid Course"
},
{
    "Cn": "Patient Safety",
    "Cc": "Preventable patient harms, including medical errors and healthcare-associated complications, are a global public health threat. Moreover, patients frequently do not receive treatments and interventions known to improve their outcomes. These shortcomings…",
    "Cl": "/course/patient-safety-18578",
    "Cp": "Coursera",
    "Cd": "2 hours a week, 35 weeks long",
    "Cpp": "Paid Course"
},
{
    "Cn": "Neuroscience and Neuroimaging",
    "Cc": "This specialization combines the strength of 4 different neuroscience courses into a cohesive learning experience. Taught by Johns Hopkins University, it begins with fundamental neuroscience concepts for neuroimaging. Neuroimaging methods are used with i…",
    "Cl": "/course/computational-neuroscience-21679",
    "Cp": "Coursera",
    "Cd": "3 hours a week, 17 weeks long",
    "Cpp": "Paid Course"
},
{
    "Cn": "Cancer Biology",
    "Cc": "The healthcare system is a rapidly evolving field with new research leading to advancements in medicine. Developed at Johns Hopkins University and led by top-ranked Hopkins faculty and cancer experts, this specialization on Cancer Biology focuses on the…",
    "Cl": "/course/cancer-biology-89516",
    "Cp": "Coursera",
    "Cd": "2 hours a week, 13 weeks long",
    "Cpp": "Paid Course"
},
{
    "Cn": "Foundations of Global Health",
    "Cc": "This specialization is intended for people working or aspiring to work in global health programming. You will learn the foundational building blocks of effective program planning, implementation, and evaluation in a variety of settings, including low- an…",
    "Cl": "/course/global-health-18788",
    "Cp": "Coursera",
    "Cd": "3 hours a week, 35 weeks long",
    "Cpp": "Paid Course"
},
{
    "Cn": "Healthcare IT Support",
    "Cc": "Are you looking to get your foot in the door as a Healthcare IT Support specialist? Do you want to solve technical problems for healthcare professionals and health system employees? Have you always wanted to enter an in-demand field in Health Information…",
    "Cl": "/course/healthcare-it-22616",
    "Cp": "Coursera",
    "Cd": "2 hours a week, 17 weeks long",
    "Cpp": "Paid Course"
},
{
    "Cn": "Data Visualization & Dashboarding with R",
    "Cc": "This Specialization is intended for learners seeking to develop the ability to visualize data using R. Through five courses, you will use R to create static and interactive data visualizations and publish them on the web, which will you prepare you to pr…",
    "Cl": "/course/jhu-data-visualization-dashboarding-with-r-22278",
    "Cp": "Coursera",
    "Cd": "5 hours a week, 17 weeks long",
    "Cpp": "Paid Course"
},
{
    "Cn": "Precalculus through Data and Modelling",
    "Cc": "This specialization helps to build the foundational material to use mathematics as a tool to model, understand, and interpret the world around us. This is done through studying functions, their properties, and applications to data analysis. Concepts of p…",
    "Cl": "/course/precalculus-data-modelling-21944",
    "Cp": "Coursera",
    "Cd": "2 hours a week, 17 weeks long",
    "Cpp": "Paid Course"
},
{
    "Cn": "Differential Calculus through Data and Modeling",
    "Cc": "This specialization provides an introduction to topics in single and multivariable calculus, and focuses on using calculus to address questions in the natural and social sciences. Students will learn to use the tools of calculus to process, analyze, and…",
    "Cl": "/course/differential-calculus-data-modeling-31705",
    "Cp": "Coursera",
    "Cd": "2 hours a week, 26 weeks long",
    "Cpp": "Paid Course"
},
{
    "Cn": "Data Literacy",
    "Cc": "This specialization is intended for professionals seeking to develop a skill set for interpreting statistical results. Through four courses and a capstone project, you will cover descriptive statistics, data visualization, measurement, regression modelin…",
    "Cl": "/course/data-literacy-22277",
    "Cp": "Coursera",
    "Cd": "3 hours a week, 22 weeks long",
    "Cpp": "Paid Course"
},
{
    "Cn": "GPU Programming",
    "Cc": "This specialization is intended for data scientists and software developers to create software that uses commonly available hardware. Students will be introduced to CUDA and libraries that allow for performing numerous computations in parallel and rapidl…",
    "Cl": "/course/gpu-programming-89945",
    "Cp": "Coursera",
    "Cd": "4 hours a week, 22 weeks long",
    "Cpp": "Paid Course"
},
{
    "Cn": "Tidyverse Skills for Data Science in R",
    "Cc": "This Specialization is intended for data scientists with some familiarity with the R programming language who are seeking to do data science using the Tidyverse family of packages. Through 5 courses, you will cover importing, wrangling, visualizing, and…",
    "Cl": "/course/tidyverse-data-science-r-22864",
    "Cp": "Coursera",
    "Cd": "3 hours a week, 30 weeks long",
    "Cpp": "Paid Course"
},
{
    "Cn": "Clinical Trials Operations",
    "Cc": "This specialization is designed for individuals and teams that will be running or interacting with clinical trials. In four courses, learners will develop insights and build the skills they need to design, manage, and monitor clinical trials as well as a…",
    "Cl": "/course/clinical-trials-operations-110369",
    "Cp": "Coursera",
    "Cd": "3 hours a week, 17 weeks long",
    "Cpp": "Paid Course"
},
{
    "Cn": "Integral Calculus through Data and Modeling",
    "Cc": "This specialization builds on topics introduced in single and multivariable differentiable calculus to develop the theory and applications of integral calculus. , The focus on the specialization is to using calculus to address questions in the natural an…",
    "Cl": "/course/integral-calculus-data-modeling-32794",
    "Cp": "Coursera",
    "Cd": "2 hours a week, 17 weeks long",
    "Cpp": "Paid Course"
},
{
    "Cn": "Sustainable Cities",
    "Cc": "This Specialization is intended for individuals and organizations interested in developing skills and strategies to create and support sustainable cities. Through these four courses, you will gain a strong understanding of the tools and concepts needed t…",
    "Cl": "/course/sustainablecities-110373",
    "Cp": "Coursera",
    "Cd": "2 hours a week, 17 weeks long",
    "Cpp": "Paid Course"
},
{
    "Cn": "Teaching Writing",
    "Cc": "This specialization will provide learners with proven methods to improve the writing of students of all ages, in all situations, including K through University classrooms as well as homeschooling, tutoring, in business and the private sector. In four cou…",
    "Cl": "/course/teaching-writing-45202",
    "Cp": "Coursera",
    "Cd": "5 hours a week, 22 weeks long",
    "Cpp": "Paid Course"
},
{
    "Cn": "Powering your Home Projects with Raspberry Pi",
    "Cc": "This Specialization is crafted to take beginners in this field from start to building functional prototypes, home projects, and new creations with custom peripheral hardware and a Raspberry Pi. If you've never touched a Raspberry Pi, it's ok. Course 1 wi…",
    "Cl": "/course/raspberry-pi-110664",
    "Cp": "Coursera",
    "Cd": "3 hours a week, 17 weeks long",
    "Cpp": "Paid Course"
},
{
    "Cn": "Leadership: An Introduction",
    "Cc": "This specialization is intended for learners new to leadership studies who are capable of navigating upper-level general education courses. The specialization includes three courses--The Ethical Leader, The Persuasive Leader, and The Creative Leader--whi…",
    "Cl": "/course/leadership-introduction-110374",
    "Cp": "Coursera",
    "Cd": "10 hours a week, 17 weeks long",
    "Cpp": "Paid Course"
},
{
    "Cn": "Social Entrepreneurship in Educational Technology",
    "Cc": "Join the fast-growing educational technology industry as a social entrepreneur\n\nLaunch your educational technology idea from ideation and creating a business plan to securing funding.",
    "Cl": "/course/entrepreneurship-ed-tech-61349",
    "Cp": "FutureLearn",
    "Cd": "3 hours worth of material, 7 weeks long",
    "Cpp": "Paid Course"
},
{
    "Cn": "Social Entrepreneurship in Educational Technology: Developing a Business Plan",
    "Cc": "Explore funding opportunities for startups and how to pitch your educational technology ideas to potential investors.",
    "Cl": "/course/social-entrepreneurship-in-educational-technology-60095",
    "Cp": "FutureLearn",
    "Cd": "3 hours a week, 2 weeks long",
    "Cpp": "Paid Course"
},
{
    "Cn": "Social Entrepreneurship in Educational Technology: Concept Development and Prototyping",
    "Cc": "Learn how to successfully enter the EdTech industry and develop your ideas alongside entrepreneurial experts.",
    "Cl": "/course/social-entrepreneurship-in-educational-technology-60094",
    "Cp": "FutureLearn",
    "Cd": "3 hours a week, 2 weeks long",
    "Cpp": "Paid Course"
},
{
    "Cn": "Social Entrepreneurship in Educational Technology: Ideation and Market Research",
    "Cc": "Learn the important precursors of launching your EdTech idea, including ideation strategies and market research methods.",
    "Cl": "/course/social-entrepreneurship-in-educational-technology-60093",
    "Cp": "FutureLearn",
    "Cd": "3 hours a week, 3 weeks long",
    "Cpp": "Paid Course"
},
{
    "Cn": "Ruby on Rails Web Development",
    "Cc": "This Specialization covers the fundamentals of web development with Ruby on Rails. You&rsquo;ll learn everything you need to develop your own web application using Ruby on Rails, SQL and NoSQL databases, and HTML/CSS, and Javascript. We will also touch o…",
    "Cl": "/course/ruby-on-rails-18540",
    "Cp": "Coursera",
    "Cd": "7 hours a week, 42 weeks long",
    "Cpp": "Paid Course"
},
{
    "Cn": "Precalculus",
    "Cc": "This course, which covers the fundamentals taught in a first-semester calculus course, will provide you with an understanding of functions and their properties",
    "Cl": "/course/independent-precalculus-11928",
    "Cp": "Independent",
    "Cd": "6 hours a week, 4 weeks long",
    "Cpp": "Free Online Course"
},
{
    "Cn": "College Algebra",
    "Cc": "This course reviews the fundamentals taught in Algebra during one semester in college.",
    "Cl": "/course/independent-college-algebra-11899",
    "Cp": "Independent",
    "Cd": "6 hours a week, 4 weeks long",
    "Cpp": "Free Online Course"
},
{
    "Cn": "Data Analysis",
    "Cc": "Learn about the most effective data analysis methods to solve problems and achieve insight.",
    "Cl": "/course/dataanalysis-386",
    "Cp": "Coursera",
    "Cd": "3-5 hours a week, 8 weeks long",
    "Cpp": "Free Online Course (Audit)"
},
{
    "Cn": "Collecting and Using Data for Disease Control and Global Health Decision-Making",
    "Cc": "Using the polio eradication effort as a case study, you'll address the application of surveillance systems in a wide variety of settings.",
    "Cl": "/course/collecting-and-using-data-for-disease-control-22709",
    "Cp": "FutureLearn",
    "Cd": "3 hours a week, 3 weeks long",
    "Cpp": "Free Online Course (Audit)"
},
{
    "Cn": "Calculus",
    "Cc": "It reviews the fundamentals taught in a one-semester college course in calculus.",
    "Cl": "/course/independent-calculus-11897",
    "Cp": "Independent",
    "Cd": "60 hours worth of material",
    "Cpp": "Free Online Course"
},
{
    "Cn": "College Mathematics",
    "Cc": "It reviews the fundamentals taught in a college course for nonmathematics majors and majors in fields not requiring knowledge of advanced mathematics.",
    "Cl": "/course/independent-college-mathematics-11901",
    "Cp": "Independent",
    "Cd": "6 hours a week, 4 weeks long",
    "Cpp": "Free Online Course"
},
{
    "Cn": "Genomic Data Science with Galaxy",
    "Cc": "Learn to use the tools that are available from the Galaxy Project. This is the second course in the Genomic Big Data Science Specialization.",
    "Cl": "/course/gengalaxy-3473",
    "Cp": "Coursera",
    "Cd": "6 hours worth of material, 4 weeks long",
    "Cpp": "Free Online Course (Audit)"
},
{
    "Cn": "Principles of Obesity Economics",
    "Cc": "The resources available to individuals and society and the prices of goods in the market shape our choices - even about the food we eat and the weight at which we live. This course explores the economic motivation for consumer choice and the economic rol…",
    "Cl": "/course/obesityecon-387",
    "Cp": "Coursera",
    "Cd": "3-5 hours a week",
    "Cpp": "Free Online Course (Audit)"
},
{
    "Cn": "Statistical Reasoning for Public Health 1: Estimation, Inference, & Interpretation",
    "Cc": "A conceptual and interpretive public health approach to some of the most commonly used methods from basic statistics.",
    "Cl": "/course/statreasoning-1036",
    "Cp": "Coursera",
    "Cd": "7-9 hours a week, 8 weeks long",
    "Cpp": "Free Online Course (Audit)"
},
{
    "Cn": "Ruby on Rails Web Services and Integration with MongoDB",
    "Cc": "In this course, we will explore MongoDB, a very popular NoSQL database and Web Services concepts and integrate them both with Ruby on Rails. MongoDB is a used to handle documents with a pre-defined schema which will give the developers an ability to stor…",
    "Cl": "/course/ruby-on-rails-web-services-mongodb-4321",
    "Cp": "Coursera",
    "Cd": "4 weeks long",
    "Cpp": "Free Online Course (Audit)"
},
{
    "Cn": "Bioinformatics: Life Sciences on Your Computer",
    "Cc": "What makes bioinformatics education exciting is that people of a variety of education levels can get started quickly, with just a computer and internet access.",
    "Cl": "/course/bioinform-2012",
    "Cp": "Coursera",
    "Cd": "4-8 hours a week, 5 weeks long",
    "Cpp": "Free Online Course (Audit)"
},
{
    "Cn": "Rails with Active Record and Action Pack",
    "Cc": "You already know how to build a basic web application with the Ruby on Rails framework. Perhaps, you have even taken Course 1, \"Ruby on Rails: An Introduction\" (we highly recommend it) where you relied on external web services to be your “data layer”. Bu…",
    "Cl": "/course/rails-with-active-record-4197",
    "Cp": "Coursera",
    "Cd": "23 hours worth of material, 4 weeks long",
    "Cpp": "Free Online Course (Audit)"
},
{
    "Cn": "Global Tuberculosis (TB) Clinical Management and Research",
    "Cc": "Health Care Workers and Health Professions Students can prepare to plan and deliver TB care in their communities by applying the latest clinical and research data presented in this nine-week course focusing on TB/HIV Co-Infection.",
    "Cl": "/course/tbmanagement-1139",
    "Cp": "Coursera",
    "Cd": "2-4 hours a week",
    "Cpp": "Free Online Course (Audit)"
},
{
    "Cn": "Statistical Reasoning for Public Health 2: Regression Methods",
    "Cc": "A practical and example filled tour of simple and multiple regression techniques (linear, logistic, and Cox PH) for estimation, adjustment and prediction.",
    "Cl": "/course/statreasoning2-2899",
    "Cp": "Coursera",
    "Cd": "3-5 hours a week, 7 weeks long",
    "Cpp": "Free Online Course (Audit)"
},
{
    "Cn": "Disaster Preparedness for the Health Care Professional",
    "Cc": "Are you ready for the next inevitable disaster or public health emergency? Whether you're an EMS responder, physician, nurse, social worker, health care student, or other health care provider, you will acquire foundational knowledge in preparedness, mana…",
    "Cl": "/course/disasterpreparedness-3376",
    "Cp": "Coursera",
    "Cd": "2-4 hours a week, 6 weeks long",
    "Cpp": "Free Online Course (Audit)"
},
{
    "Cn": "University Teaching 101",
    "Cc": "Higher education professionals, new PhD graduates, newly hired university educators and research scientists, and others interested in enhancing their teaching techniques in a university setting will acquire in this six-week course the foundational knowle…",
    "Cl": "/course/univteaching101-1696",
    "Cp": "Coursera",
    "Cd": "2-4 hours a week, 6 weeks long",
    "Cpp": "Free Online Course (Audit)"
},
{
    "Cn": "The Science of Safety in Healthcare",
    "Cc": "Health professionals and students and health consumers interested in learning about patient safety will acquire foundational knowledge of the principles of the science and culture of safety in healthcare in this five-week course.",
    "Cl": "/course/healthcaresafety-822",
    "Cp": "Coursera",
    "Cd": "2-5 hours a week, 5 weeks long",
    "Cpp": "Free Online Course (Audit)"
},
{
    "Cn": "Case-Based Introduction to Biostatistics",
    "Cc": "Learn to frame and address health-related questions using modern biostatistics ideas and methods.",
    "Cl": "/course/casebasedbiostat-888",
    "Cp": "Coursera",
    "Cd": "4-6 hours a week, 5 weeks long",
    "Cpp": "Free Online Course (Audit)"
},
{
    "Cn": "Statistical Analysis of fMRI Data",
    "Cc": "Explore the intersection of statistics and functional magnetic resonance imaging (fMRI), a non-invasive technique for studying brain activity.",
    "Cl": "/course/fmri-1035",
    "Cp": "Coursera",
    "Cd": "3-4 hours a week, 6 weeks long",
    "Cpp": "Free Online Course (Audit)"
},
{
    "Cn": "Protecting Public Health in a Changing Climate:  A Primer for City, Local, and Regional Action",
    "Cc": "This course is an introduction to the multiple ways our changing climate affects global population health, and to promising policy and practice responses. More intense storms, heatwaves, and rising seas mean many, particularly the most vulnerable, now fa…",
    "Cl": "/course/climate-change-12527",
    "Cp": "Coursera",
    "Cd": "13 hours worth of material, 5 weeks long",
    "Cpp": "Free Online Course (Audit)"
},
{
    "Cn": "Datenanalyse verwalten",
    "Cc": "Dieser einwöchige Kurs beschreibt den Prozess der Datenanalyse und wie man diesen Prozess verwaltet. Wir beschreiben den iterativen Charakter der Datenanalyse sowie die Rolle der Formulierung einer präzisen Frage, der explorativen Datenanalyse, der Infer…",
    "Cl": "/course/managing-data-analysis-de-39511",
    "Cp": "Coursera",
    "Cd": "8-9 hours worth of material, 1 week long",
    "Cpp": "Free Online Course (Audit)"
},
{
    "Cn": "Vaccine Trials: Methods and Best Practices",
    "Cc": "This course will explore the process of evaluating investigational vaccines in clinical trials including informed consent, recruitment, enrollment, safety evaluation, and quality data collection.",
    "Cl": "/course/vacctrials-399",
    "Cp": "Coursera",
    "Cd": "3-5 hours a week",
    "Cpp": "Free Online Course (Audit)"
},
{
    "Cn": "Saving Lives Millions at a Time: Global Disease Control Policies & Programs",
    "Cc": "Public Health focuses on the health of entire populations, fighting disease on a massive scale.",
    "Cl": "/course/globaldiseasecontrol-1039",
    "Cp": "Coursera",
    "Cd": "3-5 hours a week",
    "Cpp": "Free Online Course (Audit)"
},
{
    "Cn": "Alcohol, Drugs, and Baby Boomers: Are you ready?",
    "Cc": "As the baby boomer generation ages, the impacts of alcohol and drug use among this generation will become an increasingly important public health issue. This 5-week course will provide primary care givers and health care providers with an overview of thi…",
    "Cl": "/course/babyboomersanddrugs-2194",
    "Cp": "Coursera",
    "Cd": "3-5 hours a week",
    "Cpp": "Free Online Course (Audit)"
},
{
    "Cn": "80045742 - 35th Annual Medical and Surgical Gastroenterology: A Multidisciplinary Approach - EM",
    "Cc": "Johns Hopkins University , 35th Annual Medical and Surgical Gastroenterology: A Multidisciplinary Approach - EM, 4/13/2018 12:00:00 AM - 4/13/2021 12:00:00 AM, Online activity from the Live activity held January 2018 in Vail, ColoradoFor course content,…",
    "Cl": "/course/80045742-35th-annual-medical-surgical-gastroenter-106356",
    "Cp": "Independent",
    "Cd": "2-3 hours a week, 5 weeks long",
    "Cpp": "Free Certificate"
}
]
console.log("hello");
res.status(200).json(data);
}
