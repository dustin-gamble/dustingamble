// Merit Badge data for Dustin Gamble's counselor pages.
// Requirements text and resource links sourced from the official
// Scouting America Merit Badge Hub (scouting.org/merit-badges/<slug>/)
// and the accompanying free merit badge pamphlets.

const BADGES = [
    {
        slug: "aviation",
        title: "Aviation",
        icon: "✈️",
        order: 1,
        summary:
            "Mechanics of flight, aircraft operations, airport operations, and aviation careers — including hands-on model flight and a discovery flight.",
        scoutingUrl: "https://www.scouting.org/merit-badges/aviation/",
        pamphletUrl: "/merit-badges/pamphlets/Aviation.pdf",
        pamphletUrlOfficial:
            "https://filestore.scouting.org/filestore/Merit_Badge_ReqandRes/Pamphlets/Aviation.pdf",
        drgUrl:
            "https://www.scouting.org/skills/merit-badges/digital-resource-guides/aviation/",
        counselorNote:
            "I'm a strong match here: aerospace engineer, experienced with unmanned aircraft, flight test, and flight simulation. The strongest hook for Scouts is the FPG-9 build and a discovery flight.",
        myPlan: [
            "Open every session with a short 'what did you fly/see this week' check-in.",
            "Bring an FPG-9 template and spare foam plates to session 1 so Scouts can fly by the end of the meeting.",
            "Have a flight simulator (X-Plane or MSFS) on a laptop ready for req 3(a).",
            "Keep a list of local CAP squadrons and Exploring posts to hand to Scouts interested in careers.",
            "Coordinate discovery flights through a local CFI/pilot — get parental permission in writing first.",
            "Cross-badge tie-in: Scouts working the Space Exploration Telemetry Rocket project (T-Beam flight computer, LoRa to a Heltec ground station) can reuse the altitude/GPS data here to discuss four forces, control surfaces, and instrument readings with real flight data instead of textbook charts.",
        ],
        requirements: [
            {
                id: "1",
                title: "Aviation Basics and Mechanics of Flight",
                text: "Do the following:",
                sub: [
                    { id: "a", text: 'Define "aircraft." Describe three kinds of aircraft today, and their typical uses.' },
                    { id: "b", text: "Provide a brief overview of the evolution of flight, and discuss three notable times in history important to aviation." },
                    { id: "c", text: "Explain the difference between a fixed wing and a rotary wing aircraft, and the benefits of each." },
                    { id: "d", text: "Explain the operation of piston, turbine, and jet engines." },
                    { id: "e", text: "Using a model aircraft, describe the four forces that act on an aircraft in flight." },
                    { id: "f", text: "Explain how an airfoil generates lift, specifically noting Bernoulli's principle." },
                    { id: "g", text: "Identify and describe the aerodynamic control surfaces on the aircraft of your choice, and explain how they operate to control its attitude and direction of flight." },
                    { id: "h", text: "Explain the purposes and functions of the various instruments found in a typical single-engine aircraft: attitude indicator, heading indicator, altimeter, airspeed indicator, turn and bank indicator, vertical speed indicator, compass, navigation, communication, and engine performance indicators." },
                ],
            },
            {
                id: "2",
                title: "Principles of Flight",
                text: "Do ONE of the following:",
                sub: [
                    { id: "a", text: "Build a model FPG-9. Get others in your troop or patrol to make their own model, then organize a competition to test the precision of flight and landing of the models." },
                    { id: "b", text: "Build a rubber-band driven balsa wood airplane. Fly the plane for 25 feet in a straight line, with a smooth landing." },
                    { id: "c", text: "Build (or obtain) a fuel-driven or battery-powered electric model aircraft or drone. Obtain The Recreational UAS Safety Test (TRUST) certification, and fly the aircraft with a successful take-off and landing.", resources: [{ label: "FAA TRUST certification", url: "https://www.faa.gov/uas/recreational_flyers/knowledge_test_updates" }] },
                ],
            },
            {
                id: "3",
                title: "Flight Operations",
                text: "Do TWO of the following:",
                sub: [
                    { id: "a", text: "Using a flight simulator software package, set a course and fly the headings you have established with a successful take-off and landing." },
                    { id: "b", text: "Under supervision, perform a preflight inspection of an aircraft." },
                    { id: "c", text: "Observe and/or participate in an aircraft maintenance activity. Describe the maintenance schedule and requirements for an aircraft of your choice." },
                    { id: "d", text: "Obtain and learn how to read an aeronautical chart. Measure a true course on the chart; correct it for magnetic variation, compass deviation, and wind drift to determine a navigational heading for an aircraft." },
                    { id: "e", text: "With your parent or guardian's permission, take a discovery flight in an aircraft. Record the date, place, type of aircraft, and duration of flight. Report on your impressions of the flight." },
                ],
            },
            {
                id: "4",
                title: "Airport Operations",
                text: "Do ONE of the following:",
                sub: [
                    { id: "a", text: 'Visit an airport. After the visit, report on how the facilities are used, how runways are numbered, and how runways are determined to be "active."' },
                    { id: "b", text: "Visit a Federal Aviation Administration facility: Airport Traffic Control Tower (ATCT), Terminal Radar Approach Control (TRACON), Air Route Traffic Control Center (ARTCC), or Flight Standards District Office (FSDO). Report on the operation and your impressions of the facility." },
                    { id: "c", text: "Visit a military aviation facility. Learn how that facility supports defense and/or civilian activities. Report on the operation and your impressions of the facility." },
                    { id: "d", text: "Visit an aviation museum or attend an air show. Report on your impressions of the museum or show, and what you learned from the experience." },
                ],
            },
            {
                id: "5",
                title: "Personal & Professional Aviation Opportunities",
                text: "Do the following:",
                sub: [
                    { id: "a", text: "Explain the following: the student pilot, the recreational pilot, the remote pilot, and the private pilot certificates." },
                    { id: "b", text: "Describe the benefits of the instrument rating." },
                    { id: "c", text: "Explain the following: the commercial pilot certificate, the airline transport pilot certificate, and certified flight instructor (CFI)." },
                    { id: "d", text: "Identify an Aviation Exploring Post and/or Civil Air Patrol facility in your area. Learn about their activities and membership requirements.", resources: [{ label: "Civil Air Patrol", url: "https://www.gocivilairpatrol.com/" }, { label: "Aviation Exploring", url: "https://www.exploring.org/" }] },
                    { id: "e", text: "Identify three career opportunities that would use skills and knowledge in aviation. Pick one and research the training, education, certification requirements, experience, and expenses associated with entering the field. Research the prospects for employment, starting salary, advancement opportunities and career goals associated with this career. Discuss what you learned with your counselor and whether you might be interested in this career." },
                ],
            },
        ],
        resources: [
            { label: "FAA — Federal Aviation Administration", url: "https://www.faa.gov/" },
            { label: "AOPA — Aircraft Owners and Pilots Association", url: "https://www.aopa.org/" },
            { label: "EAA — Experimental Aircraft Association", url: "https://www.eaa.org/" },
            { label: "Academy of Model Aeronautics", url: "https://www.modelaircraft.org/" },
            { label: "NASA", url: "https://www.nasa.gov/" },
            { label: "Digital Resource Guide (Aviation)", url: "https://www.scouting.org/skills/merit-badges/digital-resource-guides/aviation/" },
        ],
    },
    {
        slug: "robotics",
        title: "Robotics",
        icon: "🤖",
        order: 2,
        summary:
            "Design, build, program, and test a robot. Explore safety, the robotics industry, competitions, and careers.",
        scoutingUrl: "https://www.scouting.org/merit-badges/robotics/",
        pamphletUrl: "/merit-badges/pamphlets/Robotics.pdf",
        pamphletUrlOfficial:
            "https://filestore.scouting.org/filestore/Merit_Badge_ReqandRes/Pamphlets/Robotics.pdf",
        counselorNote:
            "Autonomous systems are my daily work. I focus Scouts on the engineering notebook — the notebook is half the badge. Any VEX, LEGO SPIKE, Arduino, or micro:bit platform qualifies as long as it has sensors and programming.",
        myPlan: [
            "Require the engineering notebook from day 1 — dated entries, sketches, and decisions.",
            "Start with VEXcode VR or a micro:bit so Scouts can be coding in under 15 minutes.",
            "Steer requirement 4 toward a task with a clear win/lose condition (line follow, object sort).",
            "Keep a local list of FIRST and VEX teams for the competition requirement.",
        ],
        requirements: [
            {
                id: "1",
                title: "Safety",
                text: "Do the following:",
                sub: [
                    { id: "a", text: "Explain to your counselor the most likely hazards you may encounter while working with robots and what you should do to anticipate, mitigate and prevent, and respond to these hazards. Describe the appropriate safety gear and clothing that should be used when working with robotics.", resources: [{ label: "Hazards and Robot Safety (video)", url: "https://youtu.be/7v3cylLL9hw?list=PLHGEvyG5wuthXQZzTc-mLwFrP5F6_1Lce" }] },
                    { id: "b", text: "Discuss first aid and prevention for the types of injuries that could occur while participating in robotics activities and competitions, including cuts, eye injuries, and burns (chemical or heat).", resources: [{ label: "How to Treat Cuts and Scrapes (video)", url: "https://www.youtube.com/watch?v=0jp5FgLmKtk" }] },
                ],
            },
            {
                id: "2",
                title: "Robotics Industry",
                text: "Discuss the following with your counselor:",
                sub: [
                    { id: "a", text: "The kinds of things robots can do and how robots are best used today.", resources: [{ label: "Types of Robots / Robots Classification (video)", url: "https://youtu.be/fc_Cynqr6jM" }] },
                    { id: "b", text: "The similarities and differences between remote-control vehicles, telerobots, and autonomous robots.", resources: [{ label: "Autonomous vs. Controlled Robots (video)", url: "https://youtu.be/kdYJyGQwtL4" }, { label: "Autonomous vs. Teleoperated Robots (article)", url: "https://milvus.io/ai-quick-reference/what-is-the-difference-between-autonomous-and-teleoperated-robots" }] },
                    { id: "c", text: "Three different methods robots can use to move themselves other than wheels or tracks. Describe when it would be appropriate to use each method.", resources: [{ label: "No Wheel, Gear, or Sprocket Robot Race (video)", url: "https://youtu.be/aVuNcVW-gzE" }] },
                ],
            },
            {
                id: "3",
                title: "General Knowledge",
                text: "Discuss with your counselor three of the five major fields of robotics (human-robot interface, mobility, manipulation, programming, sensors) and their importance to robotics development. Discuss either the three fields as they relate to a single robot system OR talk about each field in general. Find pictures or at least one video to aid your discussion.",
                resources: [{ label: "5 Sub-Disciplines of Robotics (video)", url: "https://youtu.be/exEBkd1Gn0I" }],
            },
            {
                id: "4",
                title: "Design, Build, Program, Test",
                text: "Do the following:",
                resources: [
                    { label: "What Qualifies as a Robot? (video)", url: "https://youtu.be/6dYq9bBSaWc" },
                    { label: "Methods Robots Use to Move (video)", url: "https://youtu.be/T0JeYyU7R-c" },
                    { label: "Robotics: Degrees of Freedom (video)", url: "https://youtu.be/55O-DGeoFic" },
                ],
                sub: [
                    { id: "a", text: "With your counselor's approval, choose a task for the robot or robotic subsystem that you plan to build. Include sensor feedback and programming in the task. Document this information in your robot engineering notebook." },
                    { id: "b", text: "Design your robot. The robot design should use sensors and programming and have at least 2 degrees of freedom. Document the design in your robot engineering notebook using drawings and a written description." },
                    { id: "c", text: "Build a robot or robotic subsystem of your original design to accomplish the task you chose for requirement 4(a)." },
                    { id: "d", text: "Discuss with your counselor the programming options available for your robot. Then do ONE of the following: (1) Program your robot to perform the task you chose in 4(a); include a sample of your source code in your notebook; OR (2) Prepare a flowchart of the desired steps to program your robot for accomplishing the task in 4(a). Include procedures that show activities based on sensor inputs. Place this in your notebook.", resources: [{ label: "VEXcode VR (free web-based robot programming)", url: "https://www.vexrobotics.com/vexcode/vr" }, { label: "Flowchart Tutorial for Beginners (video)", url: "https://youtu.be/c8asK8iCaRk" }, { label: "General Guide to Creating Flowcharts (video)", url: "https://youtu.be/SWRDqTx8d4k" }] },
                    { id: "e", text: "Test your robot and record the results in your robot engineering notebook. Include suggestions on how you could improve your robot, as well as pictures or sketches of your finished robot." },
                ],
            },
            {
                id: "5",
                title: "Demonstrate",
                text: "Do the following:",
                sub: [
                    { id: "a", text: "Demonstrate for your counselor the robot you built in requirement 4." },
                    { id: "b", text: "Share your robot engineering notebook with your counselor. Talk about how well your robot accomplished the task, the improvements you would make in your next design, and what you learned about the design process." },
                ],
            },
            {
                id: "6",
                title: "Competitions",
                text: "Do ONE of the following:",
                resources: [
                    { label: "About FIRST Robotics Competition (video)", url: "https://youtu.be/Jd29kzjclV0" },
                    { label: "About VEX Robotics (video)", url: "https://youtu.be/Mi6E37oU8yc" },
                ],
                sub: [
                    { id: "a", text: "Attend a robotics competition and report to your counselor what you saw and learned about the competition and how teams are organized and managed." },
                    { id: "b", text: "Learn about three youth robotics competitions. Tell your counselor about these, including the type of competition, time commitment, age of the participants, and how many teams are involved." },
                ],
            },
            {
                id: "7",
                title: "Careers or Hobby",
                text: "Do ONE of the following:",
                sub: [
                    { id: "a", text: "Identify three career opportunities that would use skills and knowledge in Robotics. Pick one and research the training, education, certification requirements, experience, and expenses associated with entering the field. Research the prospects for employment, starting salary, advancement opportunities and career goals associated with this career. Discuss what you learned with your counselor and whether you might be interested in this career.", resources: [{ label: "Careers of Robotics Technicians (video)", url: "https://youtu.be/0dwkGhRPQW4" }, { label: "Careers in Robotics (video)", url: "https://youtu.be/5YTYFrrSdV4" }] },
                    { id: "b", text: "Identify how you might use the skills and knowledge in robotics to pursue a personal hobby. Research the additional training required, expenses, and affiliation with organizations that would help you maximize the enjoyment and benefit you might gain from it." },
                ],
            },
        ],
        resources: [
            { label: "FIRST Robotics", url: "https://www.firstinspires.org/" },
            { label: "VEX Robotics", url: "https://www.vexrobotics.com/" },
            { label: "VEXcode VR (free online simulator)", url: "https://www.vexrobotics.com/vexcode/vr" },
            { label: "IEEE Robotics and Automation Society", url: "https://www.ieee-ras.org/" },
            { label: "NASA Robotics", url: "https://www.nasa.gov/robotics/" },
        ],
    },
    {
        slug: "programming",
        title: "Programming",
        icon: "💻",
        order: 3,
        summary:
            "Write, debug, and demonstrate programs in three different languages / environments. Cover history, IP, and careers.",
        scoutingUrl: "https://www.scouting.org/merit-badges/programming/",
        pamphletUrl: "/merit-badges/pamphlets/Programming.pdf",
        pamphletUrlOfficial:
            "https://filestore.scouting.org/filestore/Merit_Badge_ReqandRes/Pamphlets/Programming.pdf",
        counselorNote:
            "I write production code daily in Python, C/C++, and JavaScript. The trick with req 5 is three genuinely different environments — e.g., Scratch (block), Python (text), HTML/JS (web).",
        myPlan: [
            "Set up three ready-to-go environments before the first session: Scratch, Thonny/Python, and a simple HTML/JS page in VS Code.",
            "Give each Scout a small starter program they can modify — don't ask them to write from a blank file.",
            "Require each program to take input, make a decision, and produce output. Reject pure 'hello world' demos.",
            "Discuss free vs. open source vs. commercial using real examples (VS Code, Chrome, a paid app).",
        ],
        requirements: [
            {
                id: "1",
                title: "Safety",
                text: "Do the following:",
                sub: [
                    { id: "a", text: "View the Personal Safety Awareness 'Digital Safety' video (with your parent or guardian's permission).", resources: [{ label: "Scouting America Social Media Guidelines", url: "https://www.scouting.org/" }] },
                    { id: "b", text: "Discuss first aid and prevention for the types of injuries that could occur during programming activities, including repetitive stress injuries and eyestrain.", resources: [{ label: "Treating Repetitive Stress (video)", url: "https://www.youtube.com/shorts/1yp0jOyARCk" }, { label: "Treating Eye Strain (video)", url: "https://www.youtube.com/watch?v=j3ff4aeItl0" }, { label: "5 Tips to Reduce Eye Strain", url: "https://www.uab.edu/news/health-medicine/new-uab-eye-care-clinic-helps-improve-vision-in-the-workplace" }] },
                ],
            },
            {
                id: "2",
                title: "History",
                text: "Discuss with your counselor the history of programming and the evolution of programming languages, including at least three milestones related to the advancement or development of programming over time.",
                resources: [
                    { label: "5-Minute Video of Programming Language History", url: "https://youtu.be/K5yv7dY17EA" },
                    { label: "Computer History Museum — Software Languages Timeline", url: "https://www.computerhistory.org/timeline/software-languages/" },
                    { label: "Timeline of Programming Languages (IEEE)", url: "https://www.computer.org/publications/tech-news/insider-membership-news/timeline-of-programming-languages" },
                ],
            },
            {
                id: "3",
                title: "General Knowledge",
                text: "Do the following:",
                sub: [
                    { id: "a", text: "Create a list of five popular programming languages in use today and describe which industry or industries they are primarily used in and why." },
                    { id: "b", text: "Describe three different programmed devices you rely on every day." },
                ],
            },
            {
                id: "4",
                title: "Intellectual Property",
                text: "Do the following:",
                sub: [
                    { id: "a", text: "Explain the four types of intellectual property used to protect computer programs." },
                    { id: "b", text: "Describe the difference between licensing and owning software." },
                    { id: "c", text: "Describe the differences between freeware, open source, and commercial software, and why it is important to respect the terms of use of each.", resources: [{ label: "Open Source vs. Commercial Software (video)", url: "https://www.youtube.com/watch?v=SdW5pnha9kg" }, { label: "Free vs. Open Source Software (article)", url: "https://www.geeksforgeeks.org/software-engineering/difference-between-free-software-and-open-source-software/" }] },
                ],
            },
            {
                id: "5",
                title: "Project",
                text: "With your counselor's guidance, select three different programming languages and development environments. For each sub-requirement below: write or modify a program using the indicated language and environment, take input and produce output based on computations and decisions made on the input, debug and demonstrate the program to your counselor, and explain how it processes inputs, makes decisions, and provides outputs.",
                sub: [
                    { id: "a", text: "In the first language and environment, write or modify a program, debug and demonstrate, and explain as above." },
                    { id: "b", text: "In the second language and environment, write or modify a program, debug and demonstrate, and explain as above.", resources: [{ label: "Programming Merit Badge Welcome (video)", url: "https://www.youtube.com/watch?v=s07aEbPwThM" }] },
                    { id: "c", text: "In the third language and environment, write or modify a program, debug and demonstrate, and explain as above.", resources: [{ label: "Codédex — Start Your Coding Adventure", url: "https://www.codedex.io/" }] },
                ],
            },
            {
                id: "6",
                title: "Careers or Hobby",
                text: "Do ONE of the following:",
                sub: [
                    { id: "a", text: "Explore careers related to this merit badge. Research one career to learn about the training and education needed, costs, job prospects, salary, job duties, and career advancement." },
                    { id: "b", text: "Explore how you could use knowledge and skills from this merit badge to pursue a hobby or healthy lifestyle. Research any training needed, expenses, and organizations that promote or support it." },
                ],
            },
        ],
        resources: [
            { label: "Scratch", url: "https://scratch.mit.edu/" },
            { label: "Code.org", url: "https://code.org/" },
            { label: "Python", url: "https://www.python.org/" },
            { label: "Codédex", url: "https://www.codedex.io/" },
            { label: "GitHub", url: "https://github.com/" },
        ],
    },
    {
        slug: "artificial-intelligence",
        title: "Artificial Intelligence",
        icon: "🧠",
        order: 4,
        summary:
            "New for 2026. Define AI and automation, explore ethics, deepfakes, and prompt engineering. Complete a project or teach a lesson on AI.",
        scoutingUrl: "https://www.scouting.org/merit-badges/artificial-intelligence/",
        pamphletUrl: null,
        pamphletNote:
            "The AI merit badge has no printed pamphlet. Scouting America directs Scouts to interact with the Scoutly chatbot at scouting.org while working through requirements.",
        counselorNote:
            "Brand-new badge (2025 requirements). I work hands-on with AI-assisted engineering workflows daily. The strongest project path is 7(b): design and teach a short AI lesson to the patrol — it forces Scouts to understand before they can explain.",
        myPlan: [
            "Start with the vocabulary list in req 1. Don't let Scouts skip it — the rest of the badge depends on it.",
            "For req 2(d) and 4(b), I'll bring the 'AI or Not?' and 'What Would You Do?' scenario decks (simple printed cards).",
            "For req 7(a), require a written objective + data plan + ethics note before any building starts.",
            "For req 5 (deepfakes), show one obvious deepfake example + one subtle one; emphasize consent and law.",
            "Keep a running log of career interviews Scouts complete so the next Scout has a head-start list.",
            "Cross-badge tie-in: the Space Exploration Telemetry Rocket project is a great AI-assisted coding capstone. Scouts use an AI tool to help write and debug the T-Beam firmware and Heltec ground-logger in six stages (sensors → message → LoRa transmit → receive → CSV log → post-flight analysis), which demonstrates responsible, supervised AI use on real embedded code.",
        ],
        requirements: [
            {
                id: "1",
                title: "Key Concepts",
                text: "Define the following terms and share the meaning of each with your counselor: artificial intelligence (AI), artificial intelligence agents, automation, basic programming, bots, data, databases, digital workers, general AI, machine learning (ML), narrow AI, superintelligent AI, tasks, triggers, workflows, and variables.",
            },
            {
                id: "2",
                title: "Artificial Intelligence (AI) Basics",
                text: "Do the following and share what you learned with your counselor:",
                sub: [
                    { id: "a", text: "Identify ten examples of how AI is currently used in everyday life." },
                    { id: "b", text: "Identify five examples of how AI is currently used in the workplace." },
                    { id: "c", text: "Identify five examples of how AI can be used at school or in support of your education." },
                    { id: "d", text: "Meet with your counselor and play ten rounds of the 'AI or Not?' game to determine if the presented scenario utilizes AI. Discuss your answers." },
                    { id: "e", text: "Create a timeline with five key milestones in the development of artificial intelligence." },
                ],
            },
            {
                id: "3",
                title: "Automation Basics",
                text: "Do the following and share what you learned with your counselor:",
                sub: [
                    { id: "a", text: "Identify 10 examples of how automation is currently used in everyday life." },
                    { id: "b", text: "Identify five examples of how automation is currently used in the workplace." },
                    { id: "c", text: "Identify five examples of how automation can be used at school or in support of your education." },
                    { id: "d", text: "Explain how automation performs repetitive tasks without human intervention and how it reduces human error and optimizes resources." },
                    { id: "e", text: "Create a timeline with five significant milestones in automation development." },
                ],
            },
            {
                id: "4",
                title: "Ethics in AI",
                text: "Do the following and share what you learned with your counselor:",
                sub: [
                    { id: "a", text: "Research ethical concerns and responsible use in AI, including bias, privacy, and AI decision-making." },
                    { id: "b", text: "Meet with your counselor, play, and discuss five rounds of the 'What Would You Do?' ethical decision-making scenarios." },
                    { id: "c", text: "Develop your own ethical guidelines for the use of AI." },
                    { id: "d", text: "What is the Turing test?" },
                ],
            },
            {
                id: "5",
                title: "Deepfakes",
                text: "Do the following and share what you learned with your counselor:",
                sub: [
                    { id: "a", text: "Explain what a deepfake is and how it can affect an individual." },
                    { id: "b", text: "Describe what actions to take if you or someone you know is impacted by a deepfake." },
                ],
            },
            {
                id: "6",
                title: "Developing AI Skills",
                text: "Do the following and share what you learned with your counselor:",
                sub: [
                    { id: "a", text: "Discuss the learning process for AI and its limitations." },
                    { id: "b", text: "Identify five methods of how to effectively communicate with AI." },
                    { id: "c", text: "Explain the importance of prompt engineering when using AI to create better output." },
                    { id: "d", text: "Demonstrate three examples of writing clear instructions for a school-related task." },
                ],
            },
            {
                id: "7",
                title: "Practical Application",
                text: "Do ONE of the following:",
                sub: [
                    { id: "a", text: "With your counselor's approval, choose an artificial intelligence project based on your personal interest or a community need. Develop a plan outlining the project's objectives, data requirements, and potential ethical considerations. Implement the project utilizing appropriate artificial intelligence tools, languages, or platforms. Share your project with your counselor." },
                    { id: "b", text: "With your counselor's approval, design a short lesson plan on AI and teach it to your patrol or a group of Scouts. Include an AI-generated age-appropriate explanation of AI, examples of AI in everyday life and in the workplace, and an interactive demonstration of how Scouts could use AI to assist with a school assignment, Scouting activity, or rank advancement." },
                ],
            },
            {
                id: "8",
                title: "Career Exploration",
                text: "Do ONE of the following:",
                sub: [
                    { id: "a", text: "Identify three career opportunities that would use skills and knowledge in artificial intelligence or automation. Pick one and research the training, education, certification requirements, experience, and expenses associated with entering the field." },
                    { id: "b", text: "Interview an artificial intelligence or automation professional. Learn about their day-to-day work, the challenges they face, and their vision for the future of AI or automation." },
                ],
            },
        ],
        resources: [
            { label: "Scoutly (Scouting America AI chatbot)", url: "https://scouting.org/" },
            { label: "AI Merit Badge Counselor Information", url: "https://www.scouting.org/skills/merit-badges/counselor-information/" },
            { label: "Introduction to Artificial Intelligence (MIT OCW)", url: "https://ocw.mit.edu/courses/6-034-artificial-intelligence-fall-2010/" },
            { label: "Google — Teachable Machine (no-code ML)", url: "https://teachablemachine.withgoogle.com/" },
        ],
    },
    {
        slug: "engineering",
        title: "Engineering",
        icon: "⚙️",
        order: 5,
        summary:
            "Investigate how things are engineered, meet with an engineer, design and build a project, and study the engineer's code of ethics.",
        scoutingUrl: "https://www.scouting.org/merit-badges/engineering/",
        pamphletUrl: "/merit-badges/pamphlets/Engineering.pdf",
        pamphletUrlOfficial:
            "https://filestore.scouting.org/filestore/Merit_Badge_ReqandRes/Pamphlets/Engineering.pdf",
        counselorNote:
            "For req 4, the engineer visit can be with me. For req 5, I push Scouts toward the systems engineering approach: stakeholders → requirements → concept → design → test.",
        myPlan: [
            "Provide a one-page systems engineering worksheet (needs, requirements, concepts, trade, design, verification) for req 5.",
            "Keep six short blurbs on the six engineering disciplines I've worked alongside (aero, mech, EE, SW, systems, manufacturing).",
            "Steer Scouts away from 6(g) unless they already have a fair project in flight — it tends to drag.",
            "Walk through the NSPE Code of Ethics next to the Scout Oath and Law — make them line them up side by side.",
            "Cross-badge tie-in: the Space Exploration Telemetry Rocket project (T-Beam flight computer + Heltec LoRa ground station, Estes Lil' Spite airframe) is an excellent req 5 systems-engineering example. Scouts can walk the needs → requirements → concept → trade → verification flow using the real payload and motor trade (E16-4 vs. F15-4).",
            "Capstone option: the Patrol Box 2.0 capstone is the cleanest standalone Engineering project — Scouts build a real piece of patrol equipment using the systems-engineering loop and verify it on a campout. Pairs with Inventing.",
        ],
        requirements: [
            {
                id: "1",
                title: "Investigate a Manufactured Item",
                text: "Select a manufactured item in your home (such as a toy or an appliance) and, under adult supervision and with the approval of your counselor, investigate how and why it works as it does. Find out what sort of engineering activities were needed to create it.",
                resources: [{ label: "How to Fix Small Appliances (video)", url: "https://youtu.be/pa9EO7GKt5Q" }],
            },
            {
                id: "2",
                title: "A Major Engineering Achievement",
                text: "Select an engineering achievement that has had a major impact on society. Find out about the engineers who made this engineering feat possible, the special obstacles they had to overcome, and how this achievement has influenced the world today.",
                resources: [
                    { label: "Engineering the Brooklyn Bridge (video)", url: "https://youtu.be/dyckL6HuLRU" },
                    { label: "Engineering America (article)", url: "https://www.popularmechanics.com/technology/infrastructure/g35589790/most-impressive-feats-of-engineering-in-america/" },
                ],
            },
            {
                id: "3",
                title: "Six Types of Engineers",
                text: "Explain the work of six types of engineers. Pick two of the six types and explain how their work is related to engineering.",
                resources: [
                    { label: "Solve Problems: Be an Engineer (video)", url: "https://youtu.be/D9I35Rqo04E" },
                    { label: "What is Engineering? (video)", url: "https://youtu.be/WcD8ii2ftAw" },
                ],
            },
            {
                id: "4",
                title: "Visit with an Engineer",
                text: "Visit with an engineer (who may be your counselor, parent or guardian) and do the following:",
                sub: [
                    { id: "a", text: "Discuss the work this engineer does and the tools the engineer uses." },
                    { id: "b", text: "Discuss with the engineer a current project and the engineer's particular role in it." },
                    { id: "c", text: "Find out how the engineer's work is done and how results are achieved." },
                    { id: "d", text: "Ask to see the reports that the engineer writes concerning the project." },
                    { id: "e", text: "Discuss with your counselor what you learned about engineering from this visit." },
                ],
            },
            {
                id: "5",
                title: "Systems Engineering Design",
                text: "Use the systems engineering approach to design an original piece of patrol equipment, a toy or a useful device for the home, office or garage.",
                resources: [{ label: "The Engineering Process (video)", url: "https://youtu.be/fxJWin195kU" }],
            },
            {
                id: "6",
                title: "Hands-On Engineering",
                text: "Do TWO of the following:",
                sub: [
                    { id: "a", text: "Transforming Motion. Build a simple model that demonstrates motion using levers and inclined planes. Describe an example where this mechanism is used in a real product.", resources: [{ label: "Rube Goldberg Machines (video)", url: "https://youtu.be/9_6TUgWmP6I" }] },
                    { id: "b", text: "Using Electricity. Make a list of 10 electrical appliances in your home. Find out approximately how much electricity each uses in one month. List five ways to conserve electricity.", resources: [{ label: "Ways to Save Electricity at Home (video)", url: "https://youtu.be/37kLS0uW16I" }, { label: "Understanding Home Energy Electric Use (video)", url: "https://youtu.be/zRYESRObKqA" }] },
                    { id: "c", text: "Understanding Electronics. Using a smartphone or tablet, find out how sound, video, text, or images travel from one location to another. Explain how the device was designed for ease of use, function, and durability.", resources: [{ label: "How Does Your Mobile Phone Work? (video)", url: "https://youtu.be/1JZG9x_VOwA" }] },
                    { id: "d", text: "Using Materials. Do experiments to show the differences in strength and heat conductivity in wood, metal, and plastic.", resources: [{ label: "Engineering Material Properties (video)", url: "https://youtu.be/tGfLhPslEjQ" }] },
                    { id: "e", text: "Converting Energy. Do an experiment to show how mechanical, heat, chemical, solar, and/or electrical energy may be converted from one type to another.", resources: [{ label: "STEM: Energy Conversion (video)", url: "https://youtu.be/Z_DXxUbOkSk" }, { label: "Mousetrap Car Ideas (video)", url: "https://youtu.be/b7zWwo9dbiU" }, { label: "Chem-E-Car Competition (video)", url: "https://youtu.be/uQCmr1DlUqk" }] },
                    { id: "f", text: "Moving People. Find out the different ways people in your community get to work. Make a study of traffic flow (volume and relative speed) in both heavy and light traffic periods.", resources: [{ label: "Moving People (video)", url: "https://youtu.be/erYf6NNw8Ec" }, { label: "Engineering Traffic (video)", url: "https://youtu.be/iHzzSao6ypE" }] },
                    { id: "g", text: "Building an Engineering Project. Enter a project in a science or engineering fair or similar competition." },
                ],
            },
            {
                id: "7",
                title: "Professional Engineer (P.E.)",
                text: "Explain what it means to be a registered Professional Engineer (P.E.). Name the types of engineering work for which registration is most important.",
                resources: [{ label: "How to Become an Engineer & Types of Careers (video)", url: "https://youtu.be/PUBAxUkMcr8" }],
            },
            {
                id: "8",
                title: "Engineer's Code of Ethics",
                text: "Study the Engineer's Code of Ethics. Explain how it is like the Scout Oath and Law.",
                resources: [
                    { label: "NSPE Code of Ethics for Engineers", url: "https://www.nspe.org/career-growth/nspe-code-ethics-engineers" },
                    { label: "Ethics and Conduct for Professional Engineers (video)", url: "https://youtu.be/qVV684jvJV4" },
                    { label: "Engineering Ethics (video)", url: "https://youtu.be/5KZx81crb48" },
                ],
            },
            {
                id: "9",
                title: "Careers",
                text: "Explore careers related to this merit badge. Research one career to learn about the training and education needed, costs, job prospects, salary, job duties, and career advancement.",
                resources: [{ label: "How to Become an Engineer (video)", url: "https://youtu.be/77xMVKOEZ5g" }],
            },
        ],
        resources: [
            { label: "DiscoverE — Engineering Outreach", url: "https://discovere.org/" },
            { label: "ASEE — American Society for Engineering Education", url: "https://www.asee.org/" },
            { label: "NSPE — National Society of Professional Engineers", url: "https://www.nspe.org/" },
        ],
    },
    {
        slug: "inventing",
        title: "Inventing",
        icon: "💡",
        order: 6,
        summary:
            "Learn about inventors, intellectual property, and the invention process — then design, build, and test your own prototype.",
        scoutingUrl: "https://www.scouting.org/merit-badges/inventing/",
        pamphletUrl: "/merit-badges/pamphlets/Inventing.pdf",
        pamphletUrlOfficial:
            "https://filestore.scouting.org/filestore/Merit_Badge_ReqandRes/Pamphlets/Inventing.pdf",
        counselorNote:
            "I'm named on U.S. patents and I mentor early-stage prototypes for a living. The notebook (req 6) is the deliverable — teach them to date every entry.",
        myPlan: [
            "Require a dated, bound (or at minimum page-numbered) inventor's notebook from session 1.",
            "Walk through USPTO Patent Public Search live so they can actually look up their camping gear's patent (req 3c).",
            "For req 6, steer toward a 'small, specific, real' problem — Scout's own troop equipment works well.",
            "Require counselor approval on the design before the prototype build (the badge explicitly requires it).",
            "Capstone options: three Inventing capstones are available — the Troop 308 Toolbox Invention (smallest, most focused), the Reusable Rocket Recovery System (pairs with the Telemetry Rocket capstone for a three-badge project), and Adaptive Scouting Gear (human-centered, strongest Scout-Oath tie-in).",
        ],
        requirements: [
            {
                id: "1",
                title: "Define Inventing",
                text: "In your own words, define inventing. Then do the following:",
                sub: [
                    { id: "a", text: "Explain to your counselor the role of inventors and their inventions in the economic development of the United States." },
                    { id: "b", text: "List three inventions and state how they have helped humankind." },
                ],
            },
            {
                id: "2",
                title: "Learn From Inventors",
                text: "Do ONE of the following:",
                sub: [
                    { id: "a", text: "With your parent or guardian's permission and counselor's approval, interview an adult who has invented a useful item or process. Report what you learned to your counselor." },
                    { id: "b", text: "Read about three inventors. Select the one you find most interesting and tell your counselor what you learned." },
                ],
            },
            {
                id: "3",
                title: "Intellectual Property",
                text: "Do the following:",
                sub: [
                    { id: "a", text: "Define the term intellectual property. Explain which government agencies oversee the protection of intellectual property, the types of intellectual property that can be protected, how such property is protected, and why protection is necessary.", resources: [{ label: "USPTO — United States Patent and Trademark Office", url: "https://www.uspto.gov/" }] },
                    { id: "b", text: "Explain the components of a patent and the different types of patents available." },
                    { id: "c", text: "Examine your Scouting gear and find a patent number on a camping item you have used. With your parent or guardian's permission, use the internet to find out more about that patent. Compare the finished item with the claims and drawings in the patent.", resources: [{ label: "USPTO Patent Public Search", url: "https://ppubs.uspto.gov/pubwebapp/external.html" }] },
                    { id: "d", text: "Explain to your counselor the term patent infringement." },
                ],
            },
            {
                id: "4",
                title: "Sharing Inventions",
                text: "Discuss with your counselor the types of inventions that are appropriate to share with others, and explain why. Tell your counselor about one unpatented invention and its impact on society.",
            },
            {
                id: "5",
                title: "Improve a Camping Product",
                text: "Choose a commercially available product that you have used on an overnight camping trip with your troop. Make recommendations for improving the product, and make a sketch that shows your recommendations. Discuss your recommendations with your counselor.",
            },
            {
                id: "6",
                title: "Invention Concept",
                text: "Think of an item you would like to invent that would solve a problem for your family, troop, chartered organization, community, or a special-interest group. Keep a notebook to record your progress.",
                sub: [
                    { id: "a", text: "Talk to potential users of your invention and determine their needs. Write a statement describing the invention and how it would help solve a problem. Include a detailed sketch of the invention." },
                    { id: "b", text: "Create a model of the invention using clay, cardboard, or any other readily available material. List the materials necessary to build a working prototype of the invention." },
                    { id: "c", text: "Share the idea and the model with your counselor and potential users of your invention. Record their feedback in your notebook." },
                ],
            },
            {
                id: "7",
                title: "Working Prototype",
                text: "Build a working prototype of the item you invented for requirement 6. Test and evaluate the invention. Consider cost, usefulness, marketability, appearance, and function. Describe how your original vision compares to the prototype. Have your counselor evaluate and critique your prototype. (Counselor approval of the design is required before building.)",
            },
            {
                id: "8",
                title: "Connect With Inventors in Action",
                text: "Do ONE of the following:",
                sub: [
                    { id: "a", text: "Participate with a club or team (robotics team, science club, or engineering club) that builds a useful item. Share your experience with your counselor." },
                    { id: "b", text: "Visit a museum or exhibit dedicated to an inventor or invention, and create a presentation of your visit to share with a group such as your troop or patrol." },
                ],
            },
            {
                id: "9",
                title: "Careers and Creativity",
                text: "Discuss with your counselor the diverse skills, education, training, and experience it takes to be an inventor. Discuss how you can prepare yourself to be creative and inventive to solve problems at home, in school, and in your community. Discuss three career fields that might utilize the skills of an inventor.",
            },
        ],
        resources: [
            { label: "USPTO — U.S. Patent and Trademark Office", url: "https://www.uspto.gov/" },
            { label: "USPTO Patent Public Search", url: "https://ppubs.uspto.gov/pubwebapp/external.html" },
            { label: "National Inventors Hall of Fame", url: "https://www.invent.org/" },
            { label: "Smithsonian — Lemelson Center for the Study of Invention", url: "https://invention.si.edu/" },
        ],
    },
    {
        slug: "game-design",
        title: "Game Design",
        icon: "🎲",
        order: 7,
        summary:
            "Analyze games across media, learn design terms, and design, prototype, and blind-test your own original game.",
        scoutingUrl: "https://www.scouting.org/merit-badges/game-design/",
        pamphletUrl: "/merit-badges/pamphlets/Game Design.pdf",
        pamphletUrlOfficial:
            "https://filestore.scouting.org/filestore/Merit_Badge_ReqandRes/Pamphlets/Game%20Design.pdf",
        counselorNote:
            "The fastest, most rewarding path is a paper/card game. Digital is fine, but Scouts hit the blind-test requirement much sooner with cardboard. I emphasize: test early, test brutally.",
        myPlan: [
            "Stock a shoebox of game parts: index cards, dice, meeples, a chess/checker board, graph paper.",
            "Require the game design notebook from day 1; dated entries, versions labeled v0.1, v0.2, ....",
            "For blind test (req 7), coach Scouts to SHUT UP and just watch testers struggle with their rules.",
            "Push Scouts to change at least one rule between each test and record the predicted vs. actual outcome.",
            "Cross-badge tie-in: the AI-Built Game capstone (see below) pairs this badge with the Artificial Intelligence badge. Scouts design a game on paper, then use an AI coding assistant to turn it into a playable digital build — hitting the prototype, iterate, and blind-test requirements here while demonstrating responsible, supervised AI use for the AI badge.",
        ],
        capstone: {
            title: "AI-Built Game — From Design Doc to Playable Build",
            slug: "ai-built-game",
            summary:
                "Scouts design an original game on paper, write a clean design document and rulebook, then use an AI coding assistant (with the counselor in the room) to turn it into a playable digital build. The capstone covers the full Game Design badge and doubles as the project requirement for the Artificial Intelligence badge.",
            sections: [
                {
                    heading: "Project concept",
                    body:
                        "The Scout owns the design. The AI is a junior developer the Scout directs — it does not design the game, pick the mechanics, or decide what is 'fun.' Scouts start with pencil, index cards, and dice to prove their core loop works on the table, then move into a digital build (Scratch, a simple HTML/JS page, or a chosen engine) using AI to scaffold code, explain error messages, and refactor. Every prompt and every AI change is logged in the game design notebook, so the Scout can show exactly what they asked for and what they accepted.",
                },
                {
                    heading: "What the Scout ends the project with",
                    list: [
                        "A written vision statement, theme, and player format (paper or digital)",
                        "A paper prototype that has been played at least 3 times with rule changes recorded between sessions",
                        "A clean instruction sheet good enough for a blind test",
                        "A playable digital version of the game (even a minimal one) built with AI assistance",
                        "A game design notebook with dated entries, version labels, and a prompt log",
                        "A short 'What the AI did well / where I had to take over' reflection",
                    ],
                },
                {
                    heading: "Phase 1 — Paper prototype (before any code)",
                    body:
                        "No laptops yet. Scouts pick a medium (card, board, dice, or tabletop-movement), write a one-page vision doc, sketch the components, and play their game. We iterate at least three times on paper, changing one rule between each session and predicting the effect before testing. This is where the game becomes actually fun — trying to skip this phase is the single biggest failure mode.",
                },
                {
                    heading: "Phase 2 — Rulebook and instruction sheet",
                    body:
                        "Scouts write a standalone instruction sheet: setup, turn order, win condition, edge cases. The test is whether someone who has never seen the game can read the sheet and play without help. This is the blind-test deliverable for Game Design req 7 and also forces the Scout to clarify their mental model before handing anything to the AI.",
                },
                {
                    heading: "Phase 3 — AI-assisted digital build",
                    body:
                        "With the counselor in the room, Scouts turn their rulebook into a digital build using an AI coding assistant. We go in small, testable steps — the same discipline used on the Telemetry Rocket project.",
                    list: [
                        "Pick a simple target platform (Scratch, a single HTML/JS page, or an approved engine).",
                        "Prompt the AI to scaffold the game window, board, or card layout; accept only code the Scout can read and roughly explain.",
                        "Implement one mechanic at a time (deal cards, roll dice, move, score). Playtest after each.",
                        "When something breaks, paste the error message to the AI and read the explanation before accepting the fix.",
                        "Log every prompt, every accepted change, and every rejected suggestion in the notebook.",
                        "End Phase 3 with a version the Scout could hand to a friend over a link or a share screen.",
                    ],
                },
                {
                    heading: "Phase 4 — Blind test and iterate",
                    body:
                        "Scouts run a blind test on the digital build (Game Design req 7) AND a paper blind test if they have not already. They watch silently, take notes, and then make at least one rule, balance, or UI change with a written prediction of its effect. Then they retest.",
                },
                {
                    heading: "Phase 5 — Reflection on the AI's role",
                    body:
                        "The final deliverable is a short reflection: what the Scout directed, what the AI did well, where the AI hallucinated or gave wrong code, and what the Scout fixed by hand. This reflection is the heart of the Artificial Intelligence badge — it proves the Scout used AI responsibly, kept authorship, and can describe the limits of the tool.",
                },
                {
                    heading: "Counselor safety and ethics rules",
                    list: [
                        "AI tools are used in a counselor-supervised session or with a parent present.",
                        "No personal information, real names of other Scouts, or photos are pasted into an AI prompt.",
                        "Any art, music, or text the AI produces must be labeled as AI-generated in the game's credits.",
                        "The Scout — not the AI — owns the design decisions and writes the vision statement by hand.",
                    ],
                },
            ],
        },
        requirements: [
            {
                id: "1",
                title: "Analyze Games",
                text: "Do the following:",
                sub: [
                    { id: "a", text: "Analyze four games you have played, each from a different medium. Identify the medium, player format, objectives, rules, resources, and theme (if relevant). Make a chart to compare and contrast the games." },
                    { id: "b", text: "Describe four types of play value and provide an example of a game built around each concept. Discuss with your counselor other reasons people play games." },
                ],
            },
            {
                id: "2",
                title: "Game Design Terms",
                text: "Discuss with your counselor FIVE of the following 17 game design terms. For each term, describe how it relates to a specific game: story, setting, characters, play sequence, level design, interface design, difficulty, balance, depth, pace, replay value, age appropriateness, single-player vs. multiplayer, cooperative vs. competitive, turn-based vs. real-time, strategy vs. reflex vs. chance, or abstract vs. thematic.",
            },
            {
                id: "3",
                title: "Intellectual Property",
                text: "Define the term intellectual property. Describe the types of intellectual property associated with the game design industry. Describe how intellectual property is protected and why protection is necessary. Define and give an example of a licensed property.",
            },
            {
                id: "4",
                title: "Rule Variations",
                text: "Do the following:",
                sub: [
                    { id: "a", text: "Pick a game where the players can change the rules or objectives (e.g., basketball, hearts, chess, kickball). Summarize the standard rules and objectives and play through the game normally." },
                    { id: "b", text: "Propose changes to several rules or objectives. Predict how each change will affect gameplay." },
                    { id: "c", text: "Play the game with one rule or objective change, observing how the players' actions and emotional experiences are affected. Repeat with two other changes." },
                    { id: "d", text: "Explain to your counselor how the changes affected the actions and experience of the players. Discuss the accuracy of your predictions." },
                ],
            },
            {
                id: "5",
                title: "Design a New Game",
                text: "Design a new game. Any game medium or combination of mediums is acceptable. Record your work in a game design notebook.",
                sub: [
                    { id: "a", text: "Write a vision statement. Identify medium, player format, objectives, and theme. If suitable, describe setting, story, and characters." },
                    { id: "b", text: "Describe the reason that someone would want to play your game." },
                    { id: "c", text: "Make a preliminary list of the rules of the game. Define the resources." },
                    { id: "d", text: "Draw the game elements." },
                ],
            },
            {
                id: "6",
                title: "Prototype and Iterate",
                text: "Counselor approval of the concept is required before prototyping.",
                sub: [
                    { id: "a", text: "Prototype your game from requirement 5. If applicable, demonstrate player safety through the rules and equipment. Record your work." },
                    { id: "b", text: "Test your prototype with as many other people as you need to meet the player format. Correct unclear rules, holes in the rules, dead ends, and obvious rule exploits. Change at least one rule, mechanic, or objective from your first version; describe why. Play again and record whether your change had the expected effect." },
                    { id: "c", text: "Repeat 6(b) at least two more times and record the results in your notebook." },
                ],
            },
            {
                id: "7",
                title: "Blind Test",
                text: "Do the following:",
                sub: [
                    { id: "a", text: "Write an instruction sheet that includes all information needed to play — setup, play, and end. List the game objectives." },
                    { id: "b", text: "Share your prototype with a group of players that has not played it or witnessed a previous playtest. Provide them with your instruction sheet(s) and components. Watch them play without providing instruction. Record their feedback." },
                    { id: "c", text: "Share your game design notebook with your counselor. Discuss player reactions and what you learned about the game design process. Based on testing, determine what you like most and suggest one or more changes." },
                ],
            },
            {
                id: "8",
                title: "Professional Perspective",
                text: "Do ONE of the following:",
                sub: [
                    { id: "a", text: "Visit with a professional in the game development industry (with parent or guardian permission and counselor approval). Ask about their job and how it fits into the overall development process." },
                    { id: "b", text: "Meet with a professional in game development education and discuss the skills they emphasize in the classroom." },
                ],
            },
        ],
        resources: [
            { label: "The Game Crafter (print-and-play publishing)", url: "https://www.thegamecrafter.com/" },
            { label: "Global Game Jam", url: "https://globalgamejam.org/" },
            { label: "IGDA — International Game Developers Association", url: "https://igda.org/" },
            { label: "Scratch (great for digital-game prototypes)", url: "https://scratch.mit.edu/" },
        ],
    },
    {
        slug: "space-exploration",
        title: "Space Exploration",
        icon: "🚀",
        order: 8,
        summary:
            "History and purpose of space exploration, rocket principles, model-rocket build and launch, and designing an inhabited base.",
        scoutingUrl: "https://www.scouting.org/merit-badges/space-exploration/",
        pamphletUrl: "/merit-badges/pamphlets/Space Exploration.pdf",
        pamphletUrlOfficial:
            "https://filestore.scouting.org/filestore/Merit_Badge_ReqandRes/Pamphlets/Space%20Exploration.pdf",
        counselorNote:
            "Model rocketry is the highlight. I keep an Estes Alpha-III starter kit, a launch pad, and a handful of A8-3 motors ready. Safety code compliance (National Association of Rocketry) is non-negotiable.",
        myPlan: [
            "Check local fire/park regulations before scheduling a launch day.",
            "For req 3, purchase at least 2 rockets per Scout — they will lose one.",
            "Bring laminated NASA 'Rocket Parts' diagrams for quick identification drills.",
            "Build the inhabited-base requirement (7) around a shared 'campsite on the Moon' prompt so Scouts can compare designs.",
            "Capstone option: run the Telemetry Rocket project (see below) as the build-and-launch requirement to turn the badge into a 'mission control' experience.",
        ],
        capstone: {
            title: "Telemetry Rocket — Mission Control Build",
            slug: "telemetry-rocket",
            summary:
                "Go beyond a simple model rocket build. Scouts design, build, launch, and analyze a rocket carrying a live telemetry payload, so the badge becomes an authentic aerospace engineering experience with a natural AI-assisted coding tie-in.",
            sections: [
                {
                    heading: "Project concept",
                    body:
                        "A telemetry-enabled model rocket using a LILYGO T-Beam Supreme as the flight computer and a Heltec WiFi LoRa 32 V3 as the laptop-connected ground receiver. The T-Beam includes an ESP32-S3, GPS, LoRa radio, and onboard sensors — a strong all-in-one platform for a Scout STEM activity. The Heltec board is the small USB ground radio that receives the live data stream.",
                },
                {
                    heading: "Recommended hardware",
                    body:
                        "Rocket: Estes Lil' Spite (2.0 in diameter, ~292 g dry, projected ~1200 ft unloaded). It is lighter than the larger Estes options, leaving better margin for the telemetry payload. A 29 mm motor retainer is included so motors can be swapped quickly during testing. First-choice motor: Estes E16-4 (lower, more manageable flights than F15-4, while still giving a meaningful motor comparison).",
                },
                {
                    heading: "Bill of materials",
                    list: [
                        "1 × LILYGO T-Beam Supreme (US915) — flight computer / GPS / LoRa radio",
                        "1 × Heltec WiFi LoRa 32 V3 (902–928 MHz) — USB ground receiver",
                        "1 × Estes Lil' Spite rocket kit",
                        "1 × Estes Pro Series II 29 mm motor retainer",
                        "1 × Estes E16-4 engine pack",
                        "Optional: 1 × Estes F15-4 engine pack for comparison flights",
                        "Optional: 1 × Estes Jayhawk if a larger airframe is desired for easier packaging",
                    ],
                    footer:
                        "Estimated cost for the core setup is about $167–$170 before tax and shipping, with additional cost for optional motors or a second rocket.",
                },
                {
                    heading: "Coding / AI learning component",
                    body:
                        "Scouts use AI to help write and debug the firmware and ground software in stages — a clean progression that makes the project a real software project, not a one-off sketch.",
                    list: [
                        "Read GPS and sensor data on the T-Beam",
                        "Package telemetry data into a simple message",
                        "Transmit the message over LoRa",
                        "Receive the data on the Heltec",
                        "Log the telemetry to a laptop as CSV",
                        "Review the data after flight to compare performance between rocket builds or motor choices",
                    ],
                },
                {
                    heading: "Why this fits the badge",
                    body:
                        "This project matches the spirit of Space Exploration — it makes the Scouts think like a real mission team. Instead of just building a rocket, they design the flight experiment, build the payload system, launch and recover the vehicle, analyze the data, and compare how different rocket shapes or motors change results. It gives a natural 'mission control' feel that is more exciting and memorable than a standard rocket build, and it ties the badge into hands-on lessons in space systems, embedded electronics, radio telemetry, coding, data logging, and experimental testing.",
                },
            ],
        },
        requirements: [
            {
                id: "1",
                title: "Purpose of Space Exploration",
                text: "Tell the purpose of space exploration and include the following:",
                sub: [
                    { id: "a", text: "Historical reasons", resources: [{ label: "History of Space Exploration (video)", url: "https://youtu.be/TL__l9gC1Ss" }, { label: "History of Space Exploration: Timeline (video)", url: "https://youtu.be/3JuKR7jf46o" }, { label: "History of the Space Race (Nat Geo)", url: "https://education.nationalgeographic.org/resource/history-space-exploration/" }] },
                    { id: "b", text: "Immediate goals in terms of specific knowledge" },
                    { id: "c", text: "Benefits related to Earth resources, technology, and new products", resources: [{ label: "How Space Benefits Earth (video)", url: "https://youtube.com/shorts/i3D4pCq_lyg" }, { label: "10 Surprising Ways Space Exploration Benefits Life on Earth", url: "https://youtube.com/shorts/_2uSv1C-FDw" }] },
                    { id: "d", text: "International relations and cooperation", resources: [{ label: "International Cooperation in Space (video)", url: "https://youtu.be/TS27Br2-XgY" }] },
                ],
            },
            {
                id: "2",
                title: "Space Pioneer Trading Card",
                text: "Design a collector's card, with a picture on the front and information on the back, about your favorite space pioneer. Share your card and discuss four other space pioneers with your counselor.",
                resources: [
                    { label: "How I Make Custom Trading Cards (video)", url: "https://youtu.be/PkCCLH_f1us" },
                    { label: "How to Make Trading Cards By Hand (video)", url: "https://youtu.be/vYbeo4iS1Pc" },
                ],
            },
            {
                id: "3",
                title: "Model Rocket",
                text: "Build, launch, and recover a model rocket. Make a second launch to accomplish a specific objective. Rocket must be built to meet the safety code of the National Association of Rocketry. Alternative if local laws prohibit launching: make a model of a NASA rocket, explain the functions of the parts, and give the history of the rocket. Identify and explain the following rocket parts:",
                resources: [
                    { label: "NASA Rocket Parts — Beginner's Guide", url: "https://www.grc.nasa.gov/www/k-12/VirtualAero/BottleRocket/airplane/bgmr.html" },
                    { label: "National Association of Rocketry — Educational Videos", url: "https://www.nar.org/" },
                ],
                sub: [
                    { id: "a", text: "Body tube" },
                    { id: "b", text: "Engine mount" },
                    { id: "c", text: "Fins" },
                    { id: "d", text: "Igniter" },
                    { id: "e", text: "Launch lug" },
                    { id: "f", text: "Nose cone" },
                    { id: "g", text: "Payload" },
                    { id: "h", text: "Recovery system" },
                    { id: "i", text: "Rocket engine" },
                ],
            },
            {
                id: "4",
                title: "Principles of Space Flight",
                text: "Discuss and demonstrate each of the following:",
                resources: [{ label: "NASA — Basics of Space Flight", url: "https://science.nasa.gov/learn/basics-of-space-flight/" }],
                sub: [
                    { id: "a", text: "The law of action-reaction", resources: [{ label: "Newton's Laws of Motion", url: "https://www1.grc.nasa.gov/beginners-guide-to-aeronautics/newtons-laws-of-motion/" }] },
                    { id: "b", text: "How rocket engines work", resources: [{ label: "How Rocket Engines Work", url: "https://science.howstuffworks.com/rocket.htm" }, { label: "Rocket Engines Explained (video)", url: "https://youtu.be/gz8L1i0ODeA" }, { label: "How Do We Launch Things Into Space", url: "https://plus.nasa.gov/video/how-do-we-launch-things-into-space/" }] },
                    { id: "c", text: "How satellites stay in orbit", resources: [{ label: "How Do Satellites Get & Stay in Orbit? (video)", url: "https://youtu.be/IC1JQu9xGHQ" }, { label: "How Satellites Orbit (video)", url: "https://youtu.be/5PCY0rTllPg" }] },
                    { id: "d", text: "How satellite pictures of Earth and pictures of other planets are made and transmitted" },
                ],
            },
            {
                id: "5",
                title: "Missions",
                text: "Do TWO of the following:",
                sub: [
                    { id: "a", text: "Discuss with your counselor a robotic space exploration mission and a historic crewed mission. Tell about each mission's major discoveries, its importance, and what was learned about the planets, moons, or regions of space explored.", resources: [{ label: "Voyager (video)", url: "https://youtu.be/uJpJ79AxrzI" }, { label: "Apollo Program (video)", url: "https://youtu.be/jUW_1XlrWmg" }, { label: "NASA SpaceX Crew Dragon Launch (video)", url: "https://youtu.be/1gmvUPTdoP4" }, { label: "Mars Perseverance Rover (video)", url: "https://www.youtube.com/watch?v=0-oQRSViZQE" }] },
                    { id: "b", text: "Using articles from the internet, photos, and text, create a blog, website, or slide show about a current planetary mission — or make a scrapbook using magazines and news clippings." },
                    { id: "c", text: "Design a robotic mission to another planet, moon, comet, or asteroid that will return samples of its surface to Earth. Show how your design will cope with the conditions of that environment." },
                ],
            },
            {
                id: "6",
                title: "Crewed Vehicle or ISS",
                text: "Describe the purpose, operation, and components of ONE of the following:",
                sub: [
                    { id: "a", text: "Space shuttle or any other crewed orbital vehicle, whether government-owned (U.S. or foreign) or commercial", resources: [{ label: "First Space Shuttle (video)", url: "https://youtu.be/9zu6gReRV98" }, { label: "How the Space Shuttle Worked (video)", url: "https://www.youtube.com/watch?v=w4FCkbPykdQ" }, { label: "Soyuz (video)", url: "https://youtu.be/_v7YgDum2Sg" }] },
                    { id: "b", text: "International Space Station", resources: [{ label: "What is the International Space Station?", url: "https://www.nasa.gov/learning-resources/for-kids-and-students/what-is-the-international-space-station-grades-5-8/" }, { label: "Spot the Station", url: "https://www.nasa.gov/spot-the-station/" }] },
                ],
            },
            {
                id: "7",
                title: "Inhabited Base",
                text: "Design an inhabited base located within our solar system (such as Titan, asteroids, or other locations). Make drawings or a model of your base. Consider and plan for the following:",
                resources: [{ label: "How NASA Will Build a City on the Moon (video)", url: "https://youtu.be/ATgwz_hS3Qg" }],
                sub: [
                    { id: "a", text: "Source of energy", resources: [{ label: "You Can't Take It All With You (NASA PDF)", url: "https://www.nasa.gov/wp-content/uploads/2023/05/you-cant-take-it-all-with-you-grades-6-12-students-tagged.pdf" }] },
                    { id: "b", text: "How it will be constructed", resources: [{ label: "How NASA Plans to Build the First Moon Base (video)", url: "https://youtu.be/ajP0AlYxhug" }] },
                    { id: "c", text: "Life-support system", resources: [{ label: "Robots Building a Mars Base (video)", url: "https://youtu.be/2tr6rJrv8hs" }] },
                    { id: "d", text: "Purpose and function", resources: [{ label: "How Robots Will Build on Mars (video)", url: "https://youtu.be/ZbOg_cC1_Eo" }] },
                ],
            },
            {
                id: "8",
                title: "Careers",
                text: "Explore careers related to this merit badge. Research one career to learn about the training and education needed, costs, job prospects, salary, job duties, and career advancement. Discuss your findings with your counselor.",
            },
        ],
        resources: [
            { label: "NASA", url: "https://www.nasa.gov/" },
            { label: "National Association of Rocketry", url: "https://www.nar.org/" },
            { label: "The Planetary Society", url: "https://www.planetary.org/" },
            { label: "Estes Rockets (starter kits)", url: "https://estesrockets.com/" },
        ],
    },
];

export function getMeritBadges() {
    return [...BADGES].sort((a, b) => a.order - b.order);
}

export function getMeritBadgeBySlug(slug) {
    return BADGES.find((b) => b.slug === slug);
}

export function countRequirements(badge) {
    let n = 0;
    for (const r of badge.requirements) {
        if (r.sub && r.sub.length) n += r.sub.length;
        else n += 1;
    }
    return n;
}

// Capstone projects that span multiple badges. Each capstone lists an
// executive summary, the primary badge(s) it is built for, and the specific
// requirement items it covers per badge. Requirement IDs match the `id` /
// sub `id` fields on each badge's requirements array.
const CAPSTONES = [
    {
        slug: "telemetry-rocket",
        title: "Telemetry Rocket — Mission Control Build",
        icon: "🚀",
        order: 1,
        primaryBadgeSlug: "space-exploration",
        executiveSummary:
            "Scouts design, build, launch, and analyze a model rocket carrying a live telemetry payload (LILYGO T-Beam Supreme flight computer, Heltec LoRa ground receiver). The build turns the Space Exploration badge into a full mission-control experience and gives Aviation, Engineering, and AI Scouts real flight data to work with — the AI badge project requirement is satisfied by using an AI coding assistant, under counselor supervision, to write and debug the telemetry firmware in six small, testable stages.",
        badgeCoverage: [
            {
                badgeSlug: "space-exploration",
                note:
                    "Used as the model-rocket build-and-launch requirement and the second-launch objective.",
                items: [
                    { id: "3", note: "Build, launch, recover, and make a second objective-driven launch." },
                    { id: "4", note: "Sketch / identify rocket parts using the real payload bay and flight computer." },
                    { id: "5", note: "Discuss safety code and NAR rules during pre-flight briefings." },
                ],
            },
            {
                badgeSlug: "artificial-intelligence",
                note:
                    "Satisfies the AI badge project option. Scouts use AI to help write and debug firmware in six supervised stages.",
                items: [
                    { id: "6", note: "Hands-on prompt engineering on real embedded code (T-Beam firmware + Heltec ground log)." },
                    { id: "7a", note: "Documented AI-assisted project with written objective, prompt log, and ethics note." },
                ],
            },
            {
                badgeSlug: "aviation",
                note:
                    "Altitude and GPS data from the payload become the discussion material for four-forces, control surfaces, and instrument readings.",
                items: [
                    { id: "1e", note: "Use real altitude / velocity traces to describe the four forces acting during boost, coast, and descent." },
                    { id: "1h", note: "Map telemetry channels (altitude, heading, vertical speed) to the aircraft instruments they mimic." },
                ],
            },
            {
                badgeSlug: "engineering",
                note:
                    "A clean end-to-end engineering cycle: requirements, trade study, build, test, data analysis, iterate.",
                items: [
                    { id: "3", note: "Define the design problem, trade rocket/motor options, and document the chosen solution." },
                    { id: "4", note: "Make measurements before, during, and after flight; compare predicted vs. actual performance." },
                    { id: "5", note: "Systems-engineering the payload: needs → requirements → concept → trade → design → verification." },
                ],
            },
            {
                badgeSlug: "programming",
                note:
                    "Real embedded C/C++ written across two environments (Arduino-style on T-Beam and ground receiver) — a legitimate Programming req 5 project with input, decisions, and output.",
                items: [
                    { id: "3a", note: "The firmware uses C/C++ and Python (ground-side CSV analysis) — two of the five popular languages Scouts list." },
                    { id: "3b", note: "The T-Beam and Heltec are themselves programmed devices — concrete examples for the discussion." },
                    { id: "5a", note: "First environment: T-Beam flight firmware in Arduino/PlatformIO — take sensor input, decide what to packetize, output LoRa telemetry." },
                    { id: "5b", note: "Second environment: Heltec ground receiver firmware — parse incoming packets, decide what to keep, output serial/CSV." },
                ],
            },
        ],
        schedule: {
            totalHours: 14,
            overview:
                "Eight 90-minute sessions across eight weeks, plus one Saturday launch day (3–4 hours). Patrol rhythm — can run weekly in troop meetings or condensed into a two-week 'summer camp' intensive.",
            sessions: [
                { day: "Session 1 (week 1)", hours: 1.5, focus: "Kickoff, mission definition, safety brief, pick rocket + motor, order parts." },
                { day: "Session 2 (week 2)", hours: 1.5, focus: "Rocket assembly: body, fins, recovery. Read through NAR safety code." },
                { day: "Session 3 (week 3)", hours: 1.5, focus: "T-Beam firmware stage 1–2: read GPS + sensors, package the message. AI-assisted coding session." },
                { day: "Session 4 (week 4)", hours: 1.5, focus: "T-Beam firmware stage 3 + Heltec stage 4: LoRa transmit and receive. Bench test outside." },
                { day: "Session 5 (week 5)", hours: 1.5, focus: "CSV logging on laptop, post-flight analysis notebook, prediction sheet (altitude, duration)." },
                { day: "Session 6 (week 6)", hours: 1.5, focus: "Payload integration into the rocket. Mass/CG check. Dry fit. Pre-flight review." },
                { day: "Launch day (weekend)", hours: 4, focus: "Field launches (at least two: one nominal, one objective-driven). Recover, download data." },
                { day: "Session 7 (post-launch)", hours: 1.5, focus: "Data review: predicted vs. actual. Trade-study discussion (E16-4 vs. F15-4 if flown)." },
                { day: "Session 8 (wrap-up)", hours: 1.5, focus: "Write-up, AI prompt-log review, career discussion, badge sign-off." },
            ],
        },
        detailSections: [
            {
                heading: "Executive summary",
                body:
                    "A Scout-built model rocket that carries a live telemetry payload, streams altitude and GPS over LoRa to a laptop-connected ground radio, and logs the flight as a CSV file. After each flight, Scouts compare predicted and measured performance, swap motors or rocket bodies, and iterate — the same engineering cycle used on real aerospace programs, scaled to a troop meeting.",
            },
            {
                heading: "Hardware",
                list: [
                    "LILYGO T-Beam Supreme (US915) — flight computer with ESP32-S3, GPS, LoRa radio, onboard sensors",
                    "Heltec WiFi LoRa 32 V3 (902–928 MHz) — USB ground receiver",
                    "Estes Lil' Spite rocket kit (2.0 in diameter, ~292 g dry) — leaves margin for the payload",
                    "Estes Pro Series II 29 mm motor retainer (motors swap quickly during testing)",
                    "Estes E16-4 engine pack (primary) and optional F15-4 for a motor comparison",
                    "Optional: Estes Jayhawk for a larger airframe if packaging is tight",
                ],
                footer:
                    "Estimated cost for the core setup is about $167–$170 before tax and shipping.",
            },
            {
                heading: "Six-stage AI-assisted build",
                list: [
                    "Read GPS and sensor data on the T-Beam",
                    "Package telemetry data into a simple message",
                    "Transmit the message over LoRa",
                    "Receive the data on the Heltec",
                    "Log the telemetry to a laptop as CSV",
                    "Review the data after flight and compare rocket bodies or motor choices",
                ],
            },
            {
                heading: "Why it fits the badges",
                body:
                    "The project turns Space Exploration into a real mission-team experience, gives Aviation Scouts authentic flight data, supports the Engineering design cycle end-to-end, and gives the Artificial Intelligence badge a serious, supervised coding project instead of a toy chatbot prompt.",
            },
        ],
    },
    {
        slug: "ai-built-game",
        title: "AI-Built Game — From Design Doc to Playable Build",
        icon: "🎮",
        order: 2,
        primaryBadgeSlug: "game-design",
        executiveSummary:
            "Scouts design an original game on paper, prove the core loop works in at least three playtests, write a clean instruction sheet, then use an AI coding assistant (with the counselor in the room) to turn it into a playable digital build. The Scout directs the AI, logs every prompt and accepted change, and writes a short reflection on what the AI did well and where they took over. Covers the full Game Design badge and satisfies the Artificial Intelligence badge's project requirement with responsible, supervised AI use.",
        badgeCoverage: [
            {
                badgeSlug: "game-design",
                note: "Covers every requirement 1–8 end-to-end.",
                items: [
                    { id: "1a", note: "Medium / format / objectives chart comparing four games they already play." },
                    { id: "1b", note: "Discussion of play-value types — done during concept kickoff." },
                    { id: "2", note: "Five design terms discussed against the Scout's own game." },
                    { id: "3", note: "IP discussion naturally triggered by the Scout asking about AI-generated art and music credit." },
                    { id: "4", note: "Rule-variation exercise done on a familiar game before prototyping their own." },
                    { id: "5", note: "Vision statement, rules, resources, and element sketches recorded in the design notebook." },
                    { id: "6", note: "Paper prototype + at least three iterations with a rule change between each." },
                    { id: "7", note: "Blind test run on both the paper and digital versions with counselor-approved instruction sheet." },
                    { id: "8", note: "Optional: interview with a game-development professional or educator to wrap the project." },
                ],
            },
            {
                badgeSlug: "artificial-intelligence",
                note:
                    "Satisfies the AI badge project option. Scouts use AI as a supervised junior developer on a real software build.",
                items: [
                    { id: "1", note: "Every AI-specific vocabulary term (prompt, model, hallucination, training data) appears in the actual build log." },
                    { id: "2", note: "Discussion of what AI is and is not — grounded in concrete cases from the build." },
                    { id: "5", note: "Brief deepfake / misinformation discussion triggered when deciding how to credit AI-generated art or music." },
                    { id: "6", note: "Hands-on prompt engineering — scaffold, implement, debug, refactor. Each prompt is logged." },
                    { id: "7a", note: "Documented AI-assisted software project with written objective, prompt log, and reflection." },
                ],
            },
            {
                badgeSlug: "programming",
                note:
                    "The digital build phase is a real programming project across two or three environments — a clean fit for Programming req 5 when paired with a short Scratch warm-up.",
                items: [
                    { id: "1a", note: "Digital-safety video watched before any AI/online account is used in the build." },
                    { id: "1b", note: "Eyestrain / repetitive-stress discussion tied to the build sessions." },
                    { id: "4c", note: "Freeware vs. open source vs. commercial — triggered by picking an engine or framework (Scratch / HTML+JS / Godot)." },
                    { id: "5a", note: "Environment 1: Scratch paper-prototype companion — deal cards, move tokens, score (input → decision → output)." },
                    { id: "5b", note: "Environment 2: HTML/JS (or chosen engine) digital build — the main deliverable, AI-assisted, with Scout explaining every block." },
                ],
            },
            {
                badgeSlug: "inventing",
                note:
                    "An original game IS an invention. The design notebook, prototype, blind test, and iteration map directly to Inventing's notebook + working-prototype track.",
                items: [
                    { id: "3a", note: "IP discussion naturally lands when the Scout asks whether they can use AI-generated art / music / themes." },
                    { id: "6", note: "The game design notebook IS the inventor's notebook: dated entries, vision statement, sketches, version history." },
                    { id: "7", note: "A working digital prototype, evaluated by the counselor and potential users." },
                ],
            },
        ],
        schedule: {
            totalHours: 11,
            overview:
                "Seven 90-minute sessions across seven weeks, plus one ~30-minute blind-test slot with fresh players. Fits a troop meeting cadence. No fieldwork required — easier logistically than the rocket.",
            sessions: [
                { day: "Session 1 (week 1)", hours: 1.5, focus: "Game analysis + design terms. Scout picks medium and writes a one-page vision doc." },
                { day: "Session 2 (week 2)", hours: 1.5, focus: "Paper prototype v0.1. Play with counselor. Write first rule-change prediction." },
                { day: "Session 3 (week 3)", hours: 1.5, focus: "Paper v0.2 and v0.3. Two more iterations. Finalize core mechanic." },
                { day: "Session 4 (week 4)", hours: 1.5, focus: "Write the instruction sheet. Counselor blind-test rehearsal." },
                { day: "Session 5 (week 5)", hours: 1.5, focus: "Digital build kickoff — pick platform, scaffold with AI, implement mechanic 1. Log prompts." },
                { day: "Session 6 (week 6)", hours: 1.5, focus: "Implement remaining mechanics, debug with AI help, playtest." },
                { day: "Blind test (any day)", hours: 0.5, focus: "Real blind test with fresh players. Silent observation, notes." },
                { day: "Session 7 (wrap-up)", hours: 1.5, focus: "One balance/rule change based on blind-test notes, retest, write AI-role reflection, sign-off." },
            ],
        },
        detailSections: [
            {
                heading: "Executive summary",
                body:
                    "The Scout owns the design; the AI is a junior developer the Scout directs. The project starts with pencil and index cards, moves to a written rulebook that passes a blind test, and finishes with a playable digital build. Every prompt and every AI change is logged in the design notebook so the Scout can show exactly what they asked for, what they accepted, and what they rewrote.",
            },
            {
                heading: "What the Scout ends the project with",
                list: [
                    "A written vision statement, theme, and player format",
                    "A paper prototype played at least three times with rule changes recorded",
                    "A clean instruction sheet good enough for a blind test",
                    "A playable digital version of the game (Scratch, HTML/JS, or an approved engine)",
                    "A game design notebook with dated entries, version labels, and a prompt log",
                    "A short 'What the AI did well / where I had to take over' reflection",
                ],
            },
            {
                heading: "Phase 1 — Paper prototype (before any code)",
                body:
                    "No laptops yet. The Scout picks a medium (card, board, dice, tabletop-movement), writes a one-page vision doc, sketches the components, and plays their game. We iterate at least three times on paper, changing one rule between each session and predicting the effect before testing. This is where the game becomes actually fun — trying to skip this phase is the single biggest failure mode.",
            },
            {
                heading: "Phase 2 — Rulebook and instruction sheet",
                body:
                    "The Scout writes a standalone instruction sheet: setup, turn order, win condition, edge cases. The test is whether someone who has never seen the game can read the sheet and play without help. This is the blind-test deliverable for Game Design req 7 and forces the Scout to clarify their mental model before handing anything to the AI.",
            },
            {
                heading: "Phase 3 — AI-assisted digital build",
                body:
                    "With the counselor in the room, the Scout turns the rulebook into a digital build using an AI coding assistant. Small, testable steps — the same discipline used on the Telemetry Rocket project.",
                list: [
                    "Pick a simple target platform (Scratch, a single HTML/JS page, or an approved engine).",
                    "Prompt the AI to scaffold the game window, board, or card layout; accept only code the Scout can read and roughly explain.",
                    "Implement one mechanic at a time (deal cards, roll dice, move, score). Playtest after each.",
                    "When something breaks, paste the error to the AI and read the explanation before accepting the fix.",
                    "Log every prompt, every accepted change, and every rejected suggestion in the notebook.",
                    "End Phase 3 with a version the Scout could share with a friend.",
                ],
            },
            {
                heading: "Phase 4 — Blind test and iterate",
                body:
                    "Run a blind test on the digital build (and on paper if not already done). Watch silently, take notes, then make at least one rule, balance, or UI change with a written prediction of the effect. Retest.",
            },
            {
                heading: "Phase 5 — Reflection on the AI's role",
                body:
                    "The final deliverable is a short reflection: what the Scout directed, what the AI did well, where the AI hallucinated, and what the Scout fixed by hand. This reflection is the heart of the Artificial Intelligence badge — it proves responsible use, Scout authorship, and awareness of the tool's limits.",
            },
            {
                heading: "Safety and ethics rules",
                list: [
                    "AI tools are used in a counselor-supervised session or with a parent present.",
                    "No personal information, real names of other Scouts, or photos are pasted into a prompt.",
                    "Any art, music, or text the AI produces is labeled as AI-generated in the game's credits.",
                    "The Scout — not the AI — owns the design decisions and writes the vision statement by hand.",
                ],
            },
        ],
    },
    {
        slug: "patrol-box-2",
        title: "Patrol Box 2.0 — Systems Engineering of Troop Gear",
        icon: "🧰",
        order: 3,
        primaryBadgeSlug: "engineering",
        executiveSummary:
            "Scouts run the full systems-engineering loop on a real piece of patrol equipment — typically a chuck box, cook-kit caddy, or gear sled. They interview the patrol about pain points, write needs and requirements, trade two or three concepts, sketch and CAD the chosen design, build a working prototype, and verify it on a troop campout. The deliverable is the gear itself plus a one-page systems-engineering worksheet that doubles as the Engineering req 5 write-up and the Inventing req 5/6/7 prototype-and-notebook track.",
        badgeCoverage: [
            {
                badgeSlug: "engineering",
                note:
                    "End-to-end systems-engineering project on real hardware. Hits req 5 directly and lets the Scout pick two of req 6's hands-on options without contrivance.",
                items: [
                    { id: "1", note: "Investigate the existing patrol box / chuck box / cook kit and document how it was engineered." },
                    { id: "4", note: "Counselor visit doubles as req 4 — Scout walks the engineer through their own design." },
                    { id: "5", note: "Needs → requirements → concept → trade → design → verification on a real piece of patrol equipment." },
                    { id: "6a", note: "If the design uses hinges, latches, drawers, or a deployable shelf, demonstrate the lever / inclined-plane mechanism." },
                    { id: "6d", note: "Compare wood, aluminum, and plastic for the box body — strength, weight, and weatherability." },
                    { id: "8", note: "NSPE Code of Ethics discussion grounded in the design choices made (cost vs. safety vs. weight)." },
                ],
            },
            {
                badgeSlug: "inventing",
                note:
                    "Improving real camping gear is exactly Inventing req 5–7. The systems-engineering notebook IS the inventor's notebook.",
                items: [
                    { id: "5", note: "Improve a commercially available camping product the Scout has actually used on a campout." },
                    { id: "6", note: "Need statement, sketches, clay/cardboard model, materials list — recorded in a dated notebook." },
                    { id: "7", note: "Working prototype, tested on a campout, with cost / usefulness / appearance / function evaluation." },
                ],
            },
            {
                badgeSlug: "programming",
                note:
                    "Optional uplift: a small parametric CAD script (OpenSCAD or Python+CadQuery) lets the Scout regenerate the box for different cooler sizes. Counts as one of Programming req 5's environments.",
                items: [
                    { id: "5a", note: "Optional environment: OpenSCAD or Python parametric CAD — input box dimensions, output cut list / STL." },
                ],
            },
            {
                badgeSlug: "artificial-intelligence",
                note:
                    "Optional: Scout uses an AI assistant to draft the parametric CAD script or the cut-list spreadsheet, with prompts logged.",
                items: [
                    { id: "6", note: "Prompt engineering for CAD / spreadsheet generation. Counselor reviews accepted vs. rejected suggestions." },
                ],
            },
        ],
        schedule: {
            totalHours: 12,
            overview:
                "Six 90-minute sessions across six weeks plus one shop day (3 hours) and a verification campout. Pairs cleanly with a fall or spring patrol campout — schedule the build to land 1–2 weeks before that trip so the verification test is already on the calendar.",
            sessions: [
                { day: "Session 1 (week 1)", hours: 1.5, focus: "Patrol interview, pain-point list, write the needs statement and 5–8 requirements." },
                { day: "Session 2 (week 2)", hours: 1.5, focus: "Two or three concept sketches, simple weighted trade study, pick a winner." },
                { day: "Session 3 (week 3)", hours: 1.5, focus: "CAD or scaled cardboard model. Materials list and cost estimate." },
                { day: "Session 4 (week 4)", hours: 1.5, focus: "Counselor design review (req 4 + Inventing req 7 approval). Update notebook." },
                { day: "Shop day (weekend)", hours: 3, focus: "Build the prototype with adult shop supervision. Photograph each step for the notebook." },
                { day: "Session 5 (week 5)", hours: 1.5, focus: "Bench test in the meeting room — load it, deploy it, time it. Fix the easy stuff." },
                { day: "Verification campout", hours: 0, focus: "Use the box on a real campout. Record what worked and what didn't (no counselor hours — Scout-led)." },
                { day: "Session 6 (wrap-up)", hours: 1.5, focus: "Post-campout review, ethics + Code-of-Ethics discussion, write-up, sign-off." },
            ],
        },
        detailSections: [
            {
                heading: "Overview",
                body:
                    "Scout runs the full systems-engineering loop on a real patrol chuck box. Three concepts are on the table: a traditional plywood box (cheap, heavy), a 1010-S aluminum extrusion box (engineered, expensive), and a Flexpipe pipe-and-joint box (reconfigurable, middleweight). All three share the same rolling base + slide-in legs + fold-open cook lid, so only the frame material changes.",
            },
            {
                heading: "Concept snapshot",
                table: {
                    columns: [
                        { key: "name", label: "Concept" },
                        { key: "frame", label: "Frame material" },
                        { key: "cost", label: "Cost (faithful BOM)" },
                        { key: "weight", label: "Empty frame weight" },
                        { key: "tools", label: "Tools required" },
                    ],
                    rows: [
                        { name: "A — Plywood", frame: "¾\" plywood or 1×6 pine", cost: "$80 – $130", weight: "~35 lb", tools: "Circular saw, drill, clamps, shop day" },
                        { name: "B — 1010-S extrusion", frame: "80/20 aluminum 1\"×1\"", cost: "$585 – $610", weight: "~14 lb", tools: "5 mm + 4 mm hex keys (no cuts)" },
                        { name: "C — Flexpipe", frame: "80/20 28 mm steel pipe + clamps", cost: "$315 – $345", weight: "~22 lb", tools: "Pipe cutter + 5 mm hex key" },
                    ],
                },
            },
            {
                heading: "Box dimensions (all concepts)",
                table: {
                    columns: [
                        { key: "param", label: "Parameter" },
                        { key: "value", label: "Value" },
                    ],
                    rows: [
                        { param: "Outer W × D × H (body)", value: "30\" × 18\" × 20\"" },
                        { param: "Caster height", value: "3.5\"" },
                        { param: "Slide-in leg extension", value: "12\"" },
                        { param: "Work-surface height, legs retracted (rolling)", value: "~23.5\"" },
                        { param: "Work-surface height, legs deployed (cook)", value: "~35.5\"" },
                        { param: "Lid opens to", value: "90° + prop arm (cook surface)" },
                        { param: "Target empty weight", value: "≤ 30 lb" },
                    ],
                },
            },
            {
                heading: "Six-phase build plan",
                table: {
                    columns: [
                        { key: "phase", label: "Phase" },
                        { key: "deliverable", label: "Deliverable" },
                    ],
                    rows: [
                        { phase: "1 — Interviews", deliverable: "Needs statement + 5–8 measurable requirements" },
                        { phase: "2 — Trade study", deliverable: "3 concept sketches + weighted trade matrix" },
                        { phase: "3 — Design review", deliverable: "CAD or scaled mock-up, BOM, counselor signoff" },
                        { phase: "4 — Build (shop day)", deliverable: "Assembled prototype, photographs of every step" },
                        { phase: "5 — Verification campout", deliverable: "Req-by-req pass/fail, new pain points logged" },
                        { phase: "6 — Wrap-up", deliverable: "Notebook final entry + NSPE ethics discussion" },
                    ],
                },
            },
            {
                heading: "Concept A — Plywood BOM",
                table: {
                    variant: "bom",
                    columns: [
                        { key: "qty", label: "Qty" },
                        { key: "part", label: "Part" },
                        { key: "desc", label: "Description" },
                        { key: "vendor", label: "Vendor" },
                        { key: "unit", label: "Unit" },
                        { key: "ext", label: "Ext" },
                        { key: "link", label: "Link" },
                    ],
                    rows: [
                        { qty: "1 sheet", part: "Plywood ¾\" 4×8", desc: "Birch or BC-grade ¾\" plywood", vendor: "Home Depot", unit: "$45.00", ext: "$45.00", link: "https://www.homedepot.com/b/Lumber-Composites-Plywood/N-5yc1vZbqpv" },
                        { qty: "1 set", part: "Hinges + latch", desc: "Butt hinges, hasp latch, handles", vendor: "Home Depot", unit: "$30.00", ext: "$30.00", link: "https://www.homedepot.com/b/Hardware-Cabinet-Hardware/N-5yc1vZc6ky" },
                        { qty: "1 pk", part: "#8 wood screws", desc: "1¼\" and 2\" assortment, wood glue", vendor: "Home Depot", unit: "$15.00", ext: "$15.00", link: "https://www.homedepot.com/b/Hardware-Fasteners-Screws/N-5yc1vZc28r" },
                        { qty: "4", part: "3\" swivel caster", desc: "Locking and rigid, bolt-on plate", vendor: "Harbor Freight", unit: "$6.00", ext: "$24.00", link: "https://www.harborfreight.com/3-in-swivel-caster-62498.html" },
                        { qty: "4", part: "12\" pine leg", desc: "Cut from 2×2 pine, slide-in", vendor: "Home Depot", unit: "$2.50", ext: "$10.00", link: "https://www.homedepot.com/p/2-in-x-2-in-x-8-ft-Premium-Kiln-Dried-Square-Edge-Whitewood-Common-Board-453168/300171500" },
                    ],
                    footer: { qty: "", part: "Concept A total", desc: "", vendor: "", unit: "", ext: "$124.00", link: "" },
                },
            },
            {
                heading: "Concept B — 1010-S extrusion cut list",
                table: {
                    columns: [
                        { key: "qty", label: "Qty" },
                        { key: "len", label: "Length" },
                        { key: "role", label: "Role" },
                    ],
                    rows: [
                        { qty: "4", len: "30\"", role: "Top/bottom long rails (front/back)" },
                        { qty: "4", len: "18\"", role: "Top/bottom short rails (left/right)" },
                        { qty: "4", len: "20\"", role: "Vertical corner posts" },
                        { qty: "2", len: "30\"", role: "Interior shelf rails (long)" },
                        { qty: "2", len: "18\"", role: "Interior shelf rails (short)" },
                        { qty: "4", len: "12\"", role: "Slide-in leg extensions" },
                    ],
                    footer: { qty: "20 cuts", len: "380\" total", role: "$0.42/in × 380 + $3.00 × 20 cuts = $219.60" },
                },
            },
            {
                heading: "Concept B — 1010-S frame BOM",
                table: {
                    variant: "bom",
                    columns: [
                        { key: "qty", label: "Qty" },
                        { key: "part", label: "Part #" },
                        { key: "desc", label: "Description" },
                        { key: "vendor", label: "Vendor" },
                        { key: "unit", label: "Unit" },
                        { key: "ext", label: "Ext" },
                        { key: "link", label: "Link" },
                    ],
                    rows: [
                        { qty: "380 in", part: "1010-S", desc: "10 Series smooth 1\"×1\" T-slot extrusion + cuts", vendor: "80/20 Inc.", unit: "$0.42/in", ext: "$219.60", link: "https://8020.net/1010.html" },
                        { qty: "8", part: "#3395", desc: "10 Series anchor fastener assembly", vendor: "80/20 Inc.", unit: "$4.64", ext: "$37.12", link: "https://8020.net/3395.html" },
                        { qty: "8", part: "#4265-Black", desc: "10 Series 2-hole slotted inside corner bracket", vendor: "80/20 Inc.", unit: "$8.73", ext: "$69.84", link: "https://8020.net/4265-black.html" },
                        { qty: "8", part: "#40-4332", desc: "10 Series 2-hole gusseted inside corner bracket", vendor: "80/20 Inc.", unit: "$7.48", ext: "$59.84", link: "https://8020.net/40-4332.html" },
                        { qty: "32", part: "#3393", desc: "¼-20 × 0.500\" button head screw assembly", vendor: "80/20 Inc.", unit: "$0.73", ext: "$23.36", link: "https://8020.net/3393.html" },
                        { qty: "32", part: "#8901", desc: "10 Series standard slide-in T-nut", vendor: "80/20 Inc.", unit: "$0.59", ext: "$18.88", link: "https://8020.net/8901.html" },
                        { qty: "4", part: "#3183", desc: "10 Series single-tab end fastener clip", vendor: "80/20 Inc.", unit: "$1.35", ext: "$5.40", link: "https://8020.net/3183.html" },
                    ],
                    footer: { qty: "", part: "Frame subtotal", desc: "", vendor: "", unit: "", ext: "$434.04", link: "" },
                },
            },
            {
                heading: "Concept B — door, lid, wheels, slide-in legs BOM",
                table: {
                    variant: "bom",
                    columns: [
                        { key: "qty", label: "Qty" },
                        { key: "part", label: "Part #" },
                        { key: "desc", label: "Description" },
                        { key: "vendor", label: "Vendor" },
                        { key: "unit", label: "Unit" },
                        { key: "ext", label: "Ext" },
                        { key: "link", label: "Link" },
                    ],
                    rows: [
                        { qty: "1", part: "#4486", desc: "10 & 15 Series deadbolt latch (front door)", vendor: "80/20 Inc.", unit: "$10.76", ext: "$10.76", link: "https://8020.net/4486.html" },
                        { qty: "2", part: "#2062", desc: "10 Series plastic door handle", vendor: "80/20 Inc.", unit: "$6.99", ext: "$13.98", link: "https://8020.net/2062.html" },
                        { qty: "2", part: "#2061", desc: "10 Series piano / lid hinge", vendor: "80/20 Inc.", unit: "$9.48", ext: "$18.96", link: "https://8020.net/2061.html" },
                        { qty: "1", part: "Prop arm", desc: "Steel cabinet lid stay, locks at 90°", vendor: "Rockler", unit: "$9.00", ext: "$9.00", link: "https://www.rockler.com/soft-close-lid-support" },
                        { qty: "1 sheet", part: "Coroplast 4 mm", desc: "Black corrugated twinwall, walls + shelves", vendor: "Home Depot", unit: "$29.90", ext: "$29.90", link: "https://www.homedepot.com/b/Building-Materials-Sheeting-Insulation-Plastic-Sheeting/Coroplast/N-5yc1vZc4bmZrjh" },
                        { qty: "1", part: "Durock 14×9×¼", desc: "Fiber-cement stove pad, inside of lid", vendor: "Home Depot", unit: "$8.00", ext: "$8.00", link: "https://www.homedepot.com/p/USG-Durock-Brand-1-4-in-x-3-ft-x-5-ft-Cement-Board-172965/100321402" },
                        { qty: "4", part: "3\" caster", desc: "Swivel, 2 locking, bolt-on plate mount", vendor: "Harbor Freight", unit: "$6.00", ext: "$24.00", link: "https://www.harborfreight.com/3-in-swivel-caster-62498.html" },
                        { qty: "4", part: "Leg socket", desc: "10-series end-cap + sleeve socket", vendor: "80/20 Inc.", unit: "$3.00", ext: "$12.00", link: "https://8020.net/2025.html" },
                        { qty: "4", part: "R-clip", desc: "Detent pin for slide-in legs", vendor: "McMaster-Carr", unit: "$1.50", ext: "$6.00", link: "https://www.mcmaster.com/products/detent-pins/" },
                        { qty: "1 lot", part: "Misc", desc: "Black washers, panel screws, edge trim", vendor: "local", unit: "$20.00", ext: "$20.00", link: "" },
                    ],
                    footer: { qty: "", part: "Door + lid + wheels + legs subtotal", desc: "", vendor: "", unit: "", ext: "$152.60", link: "" },
                },
            },
            {
                heading: "Concept B — grand total",
                body: "Frame $434.04 + door/lid/wheels/legs $152.60 = $586.64 faithful. Substituting generic Coroplast and cutting half the branded brackets drops this to ~$400–450.",
            },
            {
                heading: "Concept C — Flexpipe cut list",
                table: {
                    columns: [
                        { key: "qty", label: "Qty" },
                        { key: "len", label: "Length" },
                        { key: "role", label: "Role" },
                    ],
                    rows: [
                        { qty: "4", len: "20\"", role: "Vertical corner posts" },
                        { qty: "4", len: "30\"", role: "Long rails (top + bottom, front + back)" },
                        { qty: "4", len: "18\"", role: "Short rails (left + right, top + bottom)" },
                        { qty: "2", len: "30\"", role: "Interior shelf rails (long)" },
                        { qty: "2", len: "18\"", role: "Interior shelf rails (short)" },
                        { qty: "4", len: "12\"", role: "Slide-in leg extensions" },
                    ],
                    footer: { qty: "20 cuts", len: "360\" total", role: "Buy 4 × 8 ft pipes ($12.36 ea) = $49.44, ~24\" scrap" },
                },
            },
            {
                heading: "Concept C — Flexpipe frame BOM",
                table: {
                    variant: "bom",
                    columns: [
                        { key: "qty", label: "Qty" },
                        { key: "part", label: "Part #" },
                        { key: "desc", label: "Description" },
                        { key: "vendor", label: "Vendor" },
                        { key: "unit", label: "Unit" },
                        { key: "ext", label: "Ext" },
                        { key: "link", label: "Link" },
                    ],
                    rows: [
                        { qty: "4", part: "EP-96-LGR", desc: "28 mm PE-coated steel pipe, 8 ft, light gray", vendor: "80/20 Inc.", unit: "$12.36", ext: "$49.44", link: "https://8020.net/ep-96-lgr.html" },
                        { qty: "8", part: "HJ-8", desc: "3-way metal corner joint (top & bottom corners)", vendor: "80/20 Inc.", unit: "$5.50", ext: "$44.00", link: "https://8020.net/framing-options/pipe-joint-systems.html" },
                        { qty: "4", part: "HJ-1", desc: "Flat 90° cross joint (shelf intersections)", vendor: "80/20 Inc.", unit: "$4.25", ext: "$17.00", link: "https://8020.net/framing-options/pipe-joint-systems.html" },
                        { qty: "4", part: "HJ-7", desc: "Tee joint (slide-in leg sockets at corner posts)", vendor: "80/20 Inc.", unit: "$4.50", ext: "$18.00", link: "https://8020.net/framing-options/pipe-joint-systems.html" },
                        { qty: "4", part: "HJ-5", desc: "Sliding flat-clamp (panel edge retainer)", vendor: "80/20 Inc.", unit: "$2.74", ext: "$10.96", link: "https://8020.net/framing-options/pipe-joint-systems.html" },
                        { qty: "8", part: "AP-ICAP", desc: "Pipe end cap (exposed pipe ends)", vendor: "80/20 Inc.", unit: "$0.18", ext: "$1.44", link: "https://8020.net/framing-options/pipe-joint-systems.html" },
                        { qty: "1 lot", part: "M8 hardware", desc: "Spare bolts/washers for the joints", vendor: "80/20 Inc.", unit: "$8.00", ext: "$8.00", link: "https://8020.net/framing-options/pipe-joint-systems.html" },
                    ],
                    footer: { qty: "", part: "Frame subtotal", desc: "", vendor: "", unit: "", ext: "$148.84", link: "" },
                },
            },
            {
                heading: "Concept C — door, lid, wheels, slide-in legs BOM",
                table: {
                    variant: "bom",
                    columns: [
                        { key: "qty", label: "Qty" },
                        { key: "part", label: "Part #" },
                        { key: "desc", label: "Description" },
                        { key: "vendor", label: "Vendor" },
                        { key: "unit", label: "Unit" },
                        { key: "ext", label: "Ext" },
                        { key: "link", label: "Link" },
                    ],
                    rows: [
                        { qty: "4", part: "W-4PF", desc: "3\" swivel caster, flange-mount to pipe end", vendor: "80/20 Inc.", unit: "$15.95", ext: "$63.80", link: "https://8020.net/framing-options/pipe-joint-systems.html" },
                        { qty: "4", part: "Leg sleeve", desc: "Pipe-to-pipe reducer clamp for 12\" leg", vendor: "80/20 Inc.", unit: "$3.50", ext: "$14.00", link: "https://8020.net/framing-options/pipe-joint-systems.html" },
                        { qty: "4", part: "R-clip", desc: "Detent pin for slide-in legs", vendor: "McMaster-Carr", unit: "$1.50", ext: "$6.00", link: "https://www.mcmaster.com/products/detent-pins/" },
                        { qty: "2", part: "Hinge clamp", desc: "Piano-style hinge, pipe-mounted cook lid", vendor: "Creform", unit: "$6.00", ext: "$12.00", link: "https://www.creform.com/catalog/metal-joints/" },
                        { qty: "1", part: "Prop arm", desc: "Cabinet lid stay, locks at 90°", vendor: "Rockler", unit: "$9.00", ext: "$9.00", link: "https://www.rockler.com/soft-close-lid-support" },
                        { qty: "1 sheet", part: "Coroplast 4 mm", desc: "Black corrugated twinwall, walls + shelves", vendor: "Home Depot", unit: "$29.90", ext: "$29.90", link: "https://www.homedepot.com/b/Building-Materials-Sheeting-Insulation-Plastic-Sheeting/Coroplast/N-5yc1vZc4bmZrjh" },
                        { qty: "1", part: "Durock 14×9×¼", desc: "Fiber-cement stove pad, inside of lid", vendor: "Home Depot", unit: "$8.00", ext: "$8.00", link: "https://www.homedepot.com/p/USG-Durock-Brand-1-4-in-x-3-ft-x-5-ft-Cement-Board-172965/100321402" },
                        { qty: "1", part: "Latch + handles", desc: "Generic deadbolt latch + 2 plastic handles", vendor: "Home Depot", unit: "$12.00", ext: "$12.00", link: "https://www.homedepot.com/b/Hardware-Cabinet-Hardware/N-5yc1vZc6ky" },
                        { qty: "1 lot", part: "Misc", desc: "Panel screws, edge trim, zip ties", vendor: "local", unit: "$10.00", ext: "$10.00", link: "" },
                    ],
                    footer: { qty: "", part: "Door + lid + wheels + legs subtotal", desc: "", vendor: "", unit: "", ext: "$164.70", link: "" },
                },
            },
            {
                heading: "Concept C — grand total",
                body: "Frame $148.84 + door/lid/wheels/legs $164.70 = $313.54 faithful. About $275 cheaper than Concept B but ~8 lb heavier and less stiff.",
            },
            {
                heading: "Concept B vs. Concept C — trade study",
                table: {
                    columns: [
                        { key: "criterion", label: "Criterion" },
                        { key: "b", label: "Concept B (1010-S)" },
                        { key: "c", label: "Concept C (Flexpipe)" },
                        { key: "winner", label: "Winner" },
                    ],
                    rows: [
                        { criterion: "Cost", b: "$586", c: "$314", winner: "C" },
                        { criterion: "Empty weight", b: "~14 lb", c: "~22 lb", winner: "B" },
                        { criterion: "Lateral rigidity", b: "High (gusseted)", c: "Medium (clamps)", winner: "B" },
                        { criterion: "Assembly time", b: "~4 hrs", c: "~2.5 hrs", winner: "C" },
                        { criterion: "Tools needed", b: "Hex keys only (no cuts)", c: "Pipe cutter + hex key", winner: "B" },
                        { criterion: "Reconfigurable mid-project", b: "Hard (T-nut access)", c: "Easy (loosen clamp)", winner: "C" },
                        { criterion: "Field repair", b: "Order custom extrusion", c: "Cut & clamp on site", winner: "C" },
                        { criterion: "Engineering capstone value", b: "Excellent", c: "Excellent", winner: "tie" },
                    ],
                },
            },
            {
                heading: "Sources",
                table: {
                    columns: [
                        { key: "name", label: "Resource" },
                        { key: "link", label: "Link" },
                    ],
                    rows: [
                        { name: "80/20 1010-S profile and pricing", link: "https://8020.net/1010.html" },
                        { name: "80/20 internal fasteners catalog", link: "https://8020.net/fasteningmethods/internalfasteners.html" },
                        { name: "80/20 latches and door components", link: "https://8020.net/panelsdoorcomponents/latchescatches.html" },
                        { name: "80/20 Flexpipe pipe & joint system", link: "https://8020.net/framing-options/pipe-joint-systems.html" },
                        { name: "Creform metal joint catalog (Flexpipe equivalent)", link: "https://www.creform.com/catalog/metal-joints/" },
                        { name: "Coroplast 4 mm black corrugated twinwall", link: "https://www.homedepot.com/b/Building-Materials-Sheeting-Insulation-Plastic-Sheeting/Coroplast/N-5yc1vZc4bmZrjh" },
                        { name: "Chuck-box reference design (plywood)", link: "https://tombuildsstuff.blogspot.com/" },
                    ],
                },
            },
        ],
    },
    {
        slug: "troop-toolbox-invention",
        title: "Troop 308 Toolbox Invention — Patent-Ready Notebook",
        icon: "💡",
        order: 4,
        primaryBadgeSlug: "inventing",
        executiveSummary:
            "Scouts pick one real, small problem the troop has — lost mess kits, slow dish line, tangled ropes, dropped flashlights — and take an invention from need statement through USPTO prior-art search, sketches, clay/cardboard model, working prototype, and on-campout test. The deliverable is a dated, page-numbered inventor's notebook that another counselor could read without explanation, plus the working prototype itself. Covers every Inventing requirement and overlaps cleanly with Engineering req 5/6.",
        badgeCoverage: [
            {
                badgeSlug: "inventing",
                note: "Covers every Inventing requirement 1–9. The notebook is the deliverable.",
                items: [
                    { id: "3a", note: "Real USPTO Patent Public Search session looking up the closest prior art to the Scout's idea." },
                    { id: "3b", note: "Compare utility / design / plant patents using examples found during the prior-art search." },
                    { id: "3c", note: "Look up a patent number on a piece of camping gear the Scout already owns." },
                    { id: "5", note: "Improve-a-camping-product writeup naturally feeds the project's need statement." },
                    { id: "6", note: "Need statement, user interviews, sketches, clay/cardboard model, materials list — all in the notebook." },
                    { id: "7", note: "Working prototype, tested in the field, evaluated against the original vision." },
                    { id: "8b", note: "Optional museum/exhibit visit to wrap context, or 8a club option if Scout is on a robotics team." },
                ],
            },
            {
                badgeSlug: "engineering",
                note:
                    "The need-statement-to-prototype loop is exactly the systems-engineering process from Engineering req 5.",
                items: [
                    { id: "5", note: "Same systems-engineering worksheet as Patrol Box 2.0; the invention is just smaller in scope." },
                    { id: "6a", note: "If the invention uses a mechanism (hinge, lever, latch, spring) it satisfies the transforming-motion option." },
                ],
            },
        ],
        schedule: {
            totalHours: 9,
            overview:
                "Five 90-minute sessions plus one campout for the field test. The smallest of the project capstones — best for a Scout who wants to focus on Inventing only or who has limited time.",
            sessions: [
                { day: "Session 1 (week 1)", hours: 1.5, focus: "Define inventing, history of inventors, pick the troop problem to solve, write the need statement." },
                { day: "Session 2 (week 2)", hours: 1.5, focus: "USPTO Patent Public Search live walkthrough, find 2–3 closest prior-art patents, IP discussion." },
                { day: "Session 3 (week 3)", hours: 1.5, focus: "Sketches, clay/cardboard model, user feedback from 2–3 Scouts. Counselor design review." },
                { day: "Session 4 (week 4)", hours: 1.5, focus: "Build the working prototype." },
                { day: "Verification campout", hours: 0, focus: "Field test by the patrol on a real outing." },
                { day: "Session 5 (wrap-up)", hours: 1.5, focus: "Critique, careers discussion, notebook hand-off, sign-off." },
            ],
        },
        detailSections: [
            {
                heading: "Executive summary",
                body:
                    "Pick something the troop loses, breaks, or curses about every campout. That's the invention. The Scout follows the full inventor's loop — need, prior art, sketches, model, prototype, test — and ends with a notebook another counselor could pick up cold and understand.",
            },
            {
                heading: "How to pick the problem",
                list: [
                    "Sit through one campout and write down every time something is hunted for, dropped, retied, or fixed.",
                    "Cross out any problem that needs more than $30 of parts to solve.",
                    "Cross out any problem that requires welding or 3D printing the Scout doesn't have access to.",
                    "Pick the smallest, most specific remaining problem. 'Lost mess kits' is fine; 'better camping' is not.",
                ],
            },
            {
                heading: "What the notebook must contain",
                list: [
                    "Dated, numbered pages — bound notebook preferred, page-numbered loose-leaf acceptable.",
                    "Need statement and 3–5 user-interview quotes.",
                    "USPTO prior-art search results: at least 2 patents, with claims compared to the Scout's idea.",
                    "Sketches (multiple iterations, dated).",
                    "Materials list with cost.",
                    "Photos of clay/cardboard model and final prototype.",
                    "Field-test notes from the campout (what worked, what didn't).",
                    "Final critique vs. original vision.",
                ],
            },
            {
                heading: "Counselor approval gates",
                body:
                    "Per Inventing badge rules, counselor approval is required on the design before the prototype is built. We do that explicitly at the end of Session 3 with the notebook open in front of us. No verbal approvals — it gets a signature in the notebook.",
            },
        ],
    },
    {
        slug: "reusable-rocket-recovery",
        title: "Reusable Rocket Recovery System — Inventing Add-On",
        icon: "🪂",
        order: 5,
        primaryBadgeSlug: "inventing",
        executiveSummary:
            "An Inventing capstone designed to bolt onto the Telemetry Rocket project. The Scout invents an improved recovery system for a model rocket — better streamer/chute deployment, a tougher shock-cord mounting, a swappable fin can, or a rapid-reload payload bay — runs a USPTO prior-art search, prototypes, and tests across multiple flights on the same launch day as the Telemetry Rocket. Together with the Telemetry Rocket capstone this becomes a legitimate three-badge hero project: Space Exploration + Engineering + Inventing.",
        badgeCoverage: [
            {
                badgeSlug: "inventing",
                note:
                    "Full Inventing track 1–9 with rocketry as the domain. Pairs naturally with the Telemetry Rocket build.",
                items: [
                    { id: "3a", note: "USPTO search on existing model-rocket recovery patents (Estes, Apogee, etc.)." },
                    { id: "3c", note: "Look up the patent number on the Estes recovery system that ships with the rocket kit." },
                    { id: "5", note: "Improve a commercially available camping/outdoor product — the rocket kit's stock recovery." },
                    { id: "6", note: "Need statement, sketches, model, materials list in the inventor's notebook." },
                    { id: "7", note: "Working prototype, tested on a real launch with Scout-recorded outcomes." },
                ],
            },
            {
                badgeSlug: "space-exploration",
                note:
                    "Strengthens the Telemetry Rocket capstone's second-launch objective. The new recovery system IS the second-launch's experimental variable.",
                items: [
                    { id: "3", note: "Second launch's specific objective: test the new recovery system against the stock one." },
                    { id: "5", note: "Direct safety-code review of the modified recovery system before flight." },
                ],
            },
            {
                badgeSlug: "engineering",
                note:
                    "A clean small-scope engineering trade and verification cycle.",
                items: [
                    { id: "5", note: "Systems-engineering loop on the recovery subsystem only — small enough to finish in 4 sessions." },
                    { id: "6a", note: "Recovery deployment is a transforming-motion mechanism (spring / shock-cord / parachute fold)." },
                ],
            },
        ],
        schedule: {
            totalHours: 8,
            overview:
                "Four 90-minute sessions plus piggybacking on the Telemetry Rocket launch day. Best run in parallel with the Telemetry Rocket capstone's last 4 weeks.",
            sessions: [
                { day: "Session 1 (week 1, paired with Rocket Session 5)", hours: 1.5, focus: "Inspect the stock Estes recovery system. Write need statement and failure modes observed in past flights." },
                { day: "Session 2 (week 2)", hours: 1.5, focus: "USPTO prior-art search on rocket recovery patents. Sketch 2–3 concepts, pick one." },
                { day: "Session 3 (week 3)", hours: 1.5, focus: "Build the prototype recovery system. Counselor design review and pre-flight approval." },
                { day: "Launch day (paired with Rocket launch)", hours: 0, focus: "Fly stock recovery once, fly modified recovery once. Recover both, photograph results." },
                { day: "Session 4 (wrap-up)", hours: 1.5, focus: "Compare results, evaluate vs. original vision, careers + IP discussion, sign-off." },
                { day: "Independent work", hours: 2, focus: "Notebook entries, sketches, materials list — done at home between sessions." },
            ],
        },
        detailSections: [
            {
                heading: "Executive summary",
                body:
                    "The Telemetry Rocket capstone gives the Scout a flying test platform. This capstone uses that platform for an Inventing project: a real engineering improvement, with a real before/after data comparison from the telemetry payload. Three badges, one launch day.",
            },
            {
                heading: "Possible invention targets",
                list: [
                    "Streamer-to-parachute transition mechanism (low-cost reefing).",
                    "Shock-cord mount that survives more than 5 flights without abrasion.",
                    "Quick-swap fin can so the airframe can be reconfigured between flights.",
                    "Rapid-reload payload bay so the T-Beam can be swapped in under 60 seconds at the field.",
                    "Recovery beacon — a buzzer or LED that activates after deployment for finding the rocket in tall grass.",
                ],
            },
            {
                heading: "Why pair it with Telemetry Rocket",
                body:
                    "The Telemetry Rocket payload gives an instrumented before/after for the recovery test — descent rate, drift distance from launch point, time-to-ground are all measurable from GPS. That turns a typical 'I think the new chute worked better' into a real engineering verification with numbers in the notebook.",
            },
        ],
    },
    {
        slug: "adaptive-scouting-gear",
        title: "Adaptive Scouting Gear — Inventing for an Adaptive Scout",
        icon: "♿",
        order: 6,
        primaryBadgeSlug: "inventing",
        executiveSummary:
            "The Scout identifies one specific Scout — in their own patrol, another troop, or an adaptive-needs unit they've met — with a real mobility, grip, vision, or hearing challenge. They invent and build one piece of adapted gear for one specific outdoor activity (cooking, knot tying, fire building, camp cleanup, hiking). The project covers every Inventing requirement, has the strongest Scout-Oath-and-Law tie-in of any capstone, and naturally produces a story the Scout can tell at a board of review.",
        badgeCoverage: [
            {
                badgeSlug: "inventing",
                note: "Full Inventing track 1–9 with a real human user — exactly the spirit of the badge.",
                items: [
                    { id: "1b", note: "List three inventions that have helped humankind — adapted-gear examples land naturally here." },
                    { id: "2a", note: "Interview an adult inventor — ideally an occupational therapist or adaptive-equipment designer." },
                    { id: "4", note: "Strong discussion of which inventions are appropriate to share — adaptive gear belongs to the user." },
                    { id: "5", note: "Improve a camping product the Scout has used, adapted for the user's specific challenge." },
                    { id: "6", note: "Need statement starts with a real user interview, not a guess." },
                    { id: "7", note: "Working prototype, tested with the user, iterated based on their feedback." },
                ],
            },
            {
                badgeSlug: "engineering",
                note:
                    "Human-centered systems engineering. The user IS the requirements document.",
                items: [
                    { id: "5", note: "Needs and requirements driven directly by user interviews and user testing." },
                ],
            },
        ],
        schedule: {
            totalHours: 11,
            overview:
                "Six 90-minute sessions plus two short user-test visits with the Scout being adapted for. The user-test visits are the heart of the project — schedule them with parents present and council guidelines followed.",
            sessions: [
                { day: "Session 1 (week 1)", hours: 1.5, focus: "Background, examples of adaptive gear, identify the user with parent/leader help." },
                { day: "User visit 1 (week 2)", hours: 1, focus: "Interview the user, observe them attempting the activity, capture pain points." },
                { day: "Session 2 (week 2)", hours: 1.5, focus: "Write need statement and requirements driven by what was observed." },
                { day: "Session 3 (week 3)", hours: 1.5, focus: "USPTO and adaptive-equipment market research. Sketch 2–3 concepts." },
                { day: "Session 4 (week 4)", hours: 1.5, focus: "Counselor design review. Build the prototype." },
                { day: "User visit 2 (week 5)", hours: 1, focus: "User tests the prototype. Scout records what worked, what didn't, what to change." },
                { day: "Session 5 (week 5)", hours: 1.5, focus: "Iterate on the prototype based on user feedback." },
                { day: "Session 6 (wrap-up)", hours: 1.5, focus: "Final critique vs. original vision, hand the gear to the user, careers discussion, sign-off." },
            ],
        },
        detailSections: [
            {
                heading: "Executive summary",
                body:
                    "This capstone is intentionally human-centered. The Scout is not inventing for a generic problem — they are inventing for one named person whose challenge they have observed firsthand. That changes how the requirements are written, how the prototype is tested, and how the Scout talks about the project at a board of review.",
            },
            {
                heading: "Counselor responsibilities (read first)",
                list: [
                    "Two-deep leadership for every interaction with the user, including the test visits.",
                    "Parental permission in writing from both Scouts before any visit.",
                    "Coordinate with the user's parents and any council adaptive-Scouting contact before the project starts.",
                    "If the user is adaptive-needs, ensure the project does not violate their dignity — the Scout invents WITH the user, not FOR an abstract version of them.",
                    "If no appropriate user is identified locally within 2 weeks, redirect the Scout to the Patrol Box 2.0 or Toolbox capstone — do not stretch the project to fit a non-existent user.",
                ],
            },
            {
                heading: "Example targets",
                list: [
                    "One-handed knot board / knot-tying jig.",
                    "Adapted mess-kit handle for limited grip strength.",
                    "Tactile / high-contrast camp-stove ignition guide for low-vision users.",
                    "Vibration- or light-based meal whistle for deaf or hard-of-hearing patrol members.",
                    "Lightweight camp-chair modification for a Scout with limited mobility.",
                ],
            },
            {
                heading: "Why this capstone is special",
                body:
                    "Most merit-badge projects produce something the Scout keeps. This one produces something the Scout gives away — to a specific person whose life is concretely better because of it. That makes it the strongest available example of how engineering and inventing serve the Scout Oath's 'help other people at all times' commitment.",
            },
        ],
    },
];

export function getCapstones() {
    return [...CAPSTONES].sort((a, b) => a.order - b.order);
}

export function getCapstoneBySlug(slug) {
    return CAPSTONES.find((c) => c.slug === slug);
}

// Resolve badgeCoverage entries into full requirement text for rendering.
export function resolveCapstoneCoverage(capstone) {
    return capstone.badgeCoverage.map((cov) => {
        const badge = getMeritBadgeBySlug(cov.badgeSlug);
        const items = cov.items.map((item) => {
            // item.id is either a top-level req id ("3") or a req+sub concat ("1a", "7a").
            let reqId = item.id;
            let subId = null;
            const match = item.id.match(/^(\d+)([a-z])$/i);
            if (match) {
                reqId = match[1];
                subId = match[2];
            }
            const req = badge?.requirements.find((r) => r.id === reqId);
            let title = req?.title ?? `Requirement ${reqId}`;
            let text = req?.text ?? "";
            if (subId && req?.sub) {
                const sub = req.sub.find((s) => s.id === subId);
                if (sub) {
                    text = sub.text;
                    title = `${req.title} — ${reqId}(${subId})`;
                }
            }
            return { id: item.id, note: item.note, title, text };
        });
        return {
            badgeSlug: cov.badgeSlug,
            badgeTitle: badge?.title ?? cov.badgeSlug,
            badgeIcon: badge?.icon ?? "",
            note: cov.note,
            items,
        };
    });
}
