import { fanshawe, dataannotation, carfax, sagacity, aptude } from "../assets";
import {
    loancalculator,
    spaceshooter,
    minesweeper,
    quiddler,
    covidsimulator,
    rockpaperscissors,
    typingtest,
    reddit,
    youtubedownloader,
    chess,
    chatroom,
    todo
} from "../assets";

const projects = [
    {
        image: youtubedownloader,
        year: "2024",
        technologies: "Python, PyQt5, yt-dlp",
        explanation: "Unleash the power of media with ‘YoutubeDownloader,’ your go-to YouTube video downloader, ingeniously crafted using Python, the versatile PyQt5 for a slick user interface, and yt-dlp for fast, reliable video fetching capabilities. YoutubeDownloader offers a straightforward, no-fuss solution to download your favorite YouTube videos in various formats and resolutions, right to your device. Navigate through an intuitive interface, paste your video link, select your preferred format, and hit download—it’s that simple! Whether you're building a video collection, catching up on content offline, or saving tutorials and lectures, YoutubeDownloader makes it all possible with just a few clicks. Dive into the world of unlimited video content today with YoutubeDownloader!",
        link: {
            title: "#YoutubeDownloader",
            href: "https://github.com/TheGreatMahan/YouTubeDownloader"
        }
    },
    {
        image: reddit,
        year: "2024",
        technologies: "MySQL, Spring Boot, Java, Angular 18, TypeScript",
        explanation: "Discover the pulse of the internet with ‘EchoSphere,’ a dynamic social platform inspired by Reddit, redesigned and rebuilt for the modern web. Engineered with MySQL for robust database solutions, Spring Boot and Java for powerful backend operations, and crafted with TypeScript and Angular 18 for a responsive, intuitive front-end experience, EchoSphere invites users to explore, share, and discuss a wide array of topics. Whether it’s breaking news, niche hobbies, or viral memes, create and curate content that matters to you. Engage in meaningful discussions, upvote your favorites, and become part of a growing community on your own custom social hub. Dive into EchoSphere and shape the conversations that define the world around you!",
        link: {
            title: "#RedditClone",
            href: "https://github.com/TheGreatMahan/reddit-clone"
        }
    },
    {
        image: todo,
        year: "2024",
        technologies: "MS SQL Server, MVC .NET Core, C#, Razor, Azure",
        explanation: "Organize your day with precision and ease using 'MVC ToDoList,' a sleek and efficient to-do list application crafted using MVC .NET Core, C#, and Razor, and deployed on Azure for superior reliability and access. This intuitive tool is designed to help you effortlessly manage your daily tasks. Whether it’s creating new tasks, editing existing ones, deleting completed activities, or simply viewing your entire list, 'MVC ToDoList' supports all these functionalities seamlessly. Tailor your task list with detailed descriptions, set priorities, and track your progress in real-time. Ideal for professionals, students, and anyone looking to streamline their schedule, 'MVC ToDoList' transforms your productivity with just a few clicks, all while ensuring your data is secure and readily accessible in the cloud. Embrace efficiency and stay organized with 'MVC ToDoList,' your ultimate task management companion!",
        link: {
            title: "#MVCTODOLIST",
            href: "https://github.com/TheGreatMahan/MVCToDoList"
        }
    },
    {
        image: chess,
        year: "2023",
        technologies: "React, TypeScript",
        explanation: "Step into the timeless realm of strategy with 'Chess,' a beautifully crafted digital adaptation of the classic board game. Developed with the precision of TypeScript and the seamless interactivity of React, this app offers both beginners and seasoned players a sophisticated yet intuitive platform to challenge their tactical skills. Engage in matches against AI opponents or duel with friends in multiplayer mode. The sleek, modern interface provides a clear view of the board while enhancing your gameplay experience with features like move suggestions, game history, and timed sessions. Whether you're looking to sharpen your chess skills or enjoy a casual game, 'Chess' delivers a rich and accessible chess experience right at your fingertips. Ready your pieces, plan your strategy, and move towards victory!",
        link: {
            title: "#Chess",
            href: "https://github.com/TheGreatMahan/Chess"
        }
    },
    {
        image: rockpaperscissors,
        year: "2022",
        technologies: "C#, .NET Core, WCF",
        explanation: "Challenge your friends to the ultimate duel with ‘Rock Paper Scissors Arena,’ a classic game reimagined for the digital age! Powered by C#, WCF, and the .NET framework, this game brings the timeless hand game into a sleek, networked environment where players can compete in real-time. Whether you’re looking to settle a friendly dispute, take a quick break, or simply enjoy some nostalgic fun, ‘Rock Paper Scissors Arena’ offers a fast-paced, competitive platform to test your strategy and luck. Connect, play, and climb the leaderboards in this simple yet thrilling game that turns a childhood favorite into a global digital faceoff. Ready to throw rock, paper, or scissors? The arena awaits!",
        link: {
            title: "#RockPaperScissors",
            href: "https://github.com/TheGreatMahan/RockPaperScissors"
        }
    },
    {
        image: quiddler,
        year: "2022",
        technologies: "C#, .NET Framework, .NET Components, Microsoft Word Component",
        explanation: "Dive into the literary arena with ‘Quiddler’ the definitive multiplayer word game for console enthusiasts! Built using the robust C# .NET Framework and enriched with .NET components and Microsoft.Office.Interop.Word for accurate word validation, this game transforms the classic Quiddler card game into a dynamic digital challenge. Up to 8 players can join in, crafting words and competing to outsmart one another in a battle of vocabularies. Each round is a fresh opportunity to strategize and score, making it perfect for parties, family game nights, or any gathering of word game aficionados. Ready your dictionaries and challenge your friends to see who can become the ultimate word wizard!",
        link: {
            title: "#Quiddler",
            href: "https://github.com/TheGreatMahan/ConsoleQuiddler"
        }
    },
    {
        image: minesweeper,
        year: "2022",
        technologies: "HTML, CSS, JavaScript",
        explanation: "Step into the minefield with ‘Minesweeper’ a classic puzzle reborn in the web! Crafted meticulously with HTML, CSS, and JavaScript, this game revitalizes the timeless challenge of navigating through a grid of hidden mines. Click to clear the squares while avoiding the deadly explosives with nothing but your wits and memory to guide you. Whether you're a seasoned minesweeper or a curious newcomer, this game offers endless hours of suspense and strategy. Customize your grid size for varied difficulty, and keep track of your progress with a sleek, user-friendly interface. Can you clear the minefield without a single misstep? Test your skills and sweep your way to victory!",
        link: {
            title: "#Minesweeper",
            href: "https://thegreatmahan.github.io/Portfolio/Resources/Projects/Minesweeper/index.html"
        }
    },
    {
        image: covidsimulator,
        year: "2021",
        technologies: "Java, Swing",
        explanation: "Command the fight against a pandemic in 'Virus Outbreak Simulator,' a detailed and immersive tool crafted by a talented team led by an insightful group leader. Developed using Java and the versatile Swing framework, this simulator provides a dynamic platform for modeling the spread of a virus through various scenarios and interventions. Adjust parameters like social distancing, vaccination rates, and public compliance to see real-time simulations of outbreak dynamics. Ideal for educators, students, and policy makers, this tool offers insights into the complexities of disease control and prevention strategies. Lead your community to safety and explore the impacts of your decisions in 'Virus Outbreak Simulator'—where every choice could determine the course of a pandemic.",
        link: {
            title: "#VirusOutbreakSimulator",
            href: "https://github.com/TheGreatMahan/CovidSimulator"
        }
    },
    {
        image: spaceshooter,
        year: "2020",
        technologies: "C#, Unity",
        explanation: "Blast off into the cosmos in ‘Galactic Guardians’—the ultimate space shooter challenge! Built with the mighty power of C# and Unity, this game invites players to navigate through star-studded galaxies while dodging asteroids and outsmarting alien fleets. With your trusty spacecraft, equipped with laser blasters and energy shields, you'll dive into heart-pounding missions to save the universe from impending doom. Get ready to fire up your engines and light up the skies in this thrilling interstellar adventure!",
        link: {
            title: "#Spaceshooter",
            href: "https://thegreatmahan.github.io/Portfolio/#game"
        }
    },
    {
        image: loancalculator,
        year: "2019",
        technologies: "Java, Swing",
        explanation: "Navigate your financial future with 'EduLoan Calc,' the premier student loan calculator! Developed using the robust Java language and the versatile Swing framework, this tool is designed to help students and graduates effortlessly plan their repayments. Simply input your loan amount, interest rate, and term length to unveil a detailed amortization schedule. Whether you’re calculating monthly payments or exploring early payoff scenarios, 'EduLoan Calc' brings clarity and control to managing your educational investments. Get ready to take charge of your student debt with precision and ease!",
        link: {
            title: "#EduLoanCalc",
            href: "https://github.com/TheGreatMahan/StudentLoadCalculator"
        }
    },
    {
        image: typingtest,
        year: "2019",
        technologies: "HTML, CSS, JavaScript",
        explanation: "Sharpen your typing skills with ‘TypeSpeed Challenge,’ a sleek and straightforward typing test crafted with HTML, CSS, and JavaScript. This interactive tool is designed to help users improve their typing speed and accuracy through engaging, timed exercises. As you type passages from books, famous speeches, or original content, the test dynamically evaluates your performance, providing instant feedback on words per minute and error rate. Suitable for typists of all levels, from beginners to seasoned pros, ‘TypeSpeed Challenge’ offers a fun and effective way to enhance your keyboard prowess. Get ready to race against the clock and watch your typing fluency soar!",
        link: {
            title: "#TypingTest",
            href: "https://github.com/TheGreatMahan/StudentLoadCalculator"
        }
    },
];

const experiences = [
    {
        name: "DataAnnotation",
        year: "2024 - present",
        location: "New York, NY, United States (Remote)",
        explanation: "🤖 Software Development - AI Training",
        image: dataannotation
    },
    {
        name: "Fanshawe College",
        explanation: "👨🏻‍🎓 OCAD Computer Programming and Analysis (CO-OP)",
        year: "2019 - 2023",
        location: "London, ON, Canada",
        image: fanshawe
    },
    {
        name: "CARFAX",
        explanation: "🖨️ Associate Software Engineer Intern - AI/ML team",
        year: "2022-2023",
        location: "London, ON, Canada",
        image: carfax
    },
    {
        name: "Sagacity Software Inc.",
        explanation: "📈 Full-Stack Software Developer Intern - Data Visualization",
        year: "2022",
        location: "London, ON, Canada",
        image: sagacity
    },
    {
        name: "Aptude (Acquired by New Era Technologies)",
        explanation: "🚚 Junior .NET Developer Intern - Carrier Services",
        year: "2021-2022",
        location: "Chicago, IL, United States (Remote)",
        image: aptude
    },

];

export {
    experiences,
    projects
}





