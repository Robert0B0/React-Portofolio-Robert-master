import mondoChat from "../assets/projects/Mondo/mondoChat.png";
import mondoChat1 from "../assets/projects/Mondo/mondoChat1.png";
import mondoChat2 from "../assets/projects/Mondo/mondoChat2.png";
import mondoChat3 from "../assets/projects/Mondo/mondoChat3.png";
import mondoChat4 from "../assets/projects/Mondo/mondoChat4.png";
import mondoChat5 from "../assets/projects/Mondo/mondoChat5.png";
import mondoChat6 from "../assets/projects/Mondo/mondoChat6.png";
import mondoChat7 from "../assets/projects/Mondo/mondoChat7.png";
import mondoChat8 from "../assets/projects/Mondo/mondoChat8.png";
import mondoChat9 from "../assets/projects/Mondo/mondoChat9.png";

import LandRank from "../assets/projects/LandRank/LandRank.png";
import LandRank1 from "../assets/projects/LandRank/LandRank1.png";
import LandRank2 from "../assets/projects/LandRank/LandRank2.png";
import LandRank3 from "../assets/projects/LandRank/LandRank3.png";

import iot1 from "../assets/projects/IoT/iot1.png";
import iot2 from "../assets/projects/IoT/iot2.png";
import iot3 from "../assets/projects/IoT/iot3.png";
import iot4 from "../assets/projects/IoT/iot4.png";
import iot5 from "../assets/projects/IoT/iot5.png";

import ChemDash1 from "../assets/projects/ChemDash/ChemDashApp1.png";
import ChemDash2 from "../assets/projects/ChemDash/ChemDashApp2.png";
import ChemDash3 from "../assets/projects/ChemDash/ChemDashApp3.png";
import ChemDash4 from "../assets/projects/ChemDash/ChemDashApp4.png";
import ChemDash5 from "../assets/projects/ChemDash/ChemDashApp5.png";
import ChemDash6 from "../assets/projects/ChemDash/ChemDashApp6.png";
import ChemDash7 from "../assets/projects/ChemDash/arx1.png";
import ChemDash8 from "../assets/projects/ChemDash/arx2.png";

import RichesTracker from "../assets/projects/RichesTraker/RichesTraker.png";

export const projects = [
  {
    id: "1",
    name: "ChemDash Mobile",
    description:
      "Built a Bluetooth-connected mobile app for a handheld substance detection device. As the sole developer, I designed, implemented, and maintained the Android and iOS applications, enabling real-time data synchronization, measurement analysis, and interactive case studies while ensuring compliance with Google Play & App Store requirements.",
    stack: [
      { id: 1, title: "REACT Native TS" },
      { id: 2, title: "Redux" },
      { id: 3, title: "GOOGLE MAPS API" },
      { id: 4, title: "Skia D3" },
      { id: 5, title: "Realm DB" },
      { id: 6, title: "Bluetooth" },
      { id: 6, title: "Bluetooth Low Energy" },
      { id: 6, title: "Android & iOS" },
    ],
    images: [
      ChemDash1,
      ChemDash2,
      ChemDash3,
      ChemDash4,
      ChemDash5,
      ChemDash6,
      ChemDash7,
      ChemDash8,
    ],
    technical: {
      title: "ChemDash Mobile  project achievements",
      description: [
        {
          id: 1,
          p: "Designed and built a mobile application from the ground up to interface with handheld substance detection devices, enabling real time interaction and analysis through wireless communication protocols.",
        },
        {
          id: 2,
          p: "Developed custom UI/UX components tailored to niche tools used for drug identification, integrating physical and chemical detection mechanisms into an intuitive, interactive mobile interface.",
        },
        {
          id: 3,
          p: "Used Raspberry Pi devices as prototyping platforms for testing wireless communication protocols and simulating device behavior before the actual Bluetooth enabled hardware was available on the market.",
        },
        {
          id: 4,
          p: "Stabilized and optimized wireless communication protocols, overcoming numerous connection and synchronization issues with Bluetooth Classic and BLE, ensuring secure and consistent device pairing and data transfer.",
        },
        {
          id: 5,
          p: "Designed and implemented alternative communication fallback solutions using WiFi, allowing wireless operation in scenarios where Bluetooth was restricted.",
        },
        {
          id: 6,
          p: "Enabled Bluetooth Low Energy (BLE) support for iOS devices by collaborating with back end colleagues and a temporary Apple wireless communication consultant, overcoming platform specific limitations and API restrictions.",
        },
        {
          id: 7,
          p: "Integrated full multilingual support with dynamic, real time UI updates, making the application accessible and responsive for international users.",
        },
        {
          id: 8,
          p: "Created advanced data visualization tools, including: Interactive measurement charts, GHS pictograms and custom warning signs, Image galleries with live previews, Google Maps integration for GPS coordinate capture and display",
        },
        {
          id: 9,
          p: "Developed a remote scan feature with real time device status monitoring, including safe manual abort and automatic safety abort in case of wireless connection loss.",
        },
        {
          id: 10,
          p: "Collaborated across departments, including: back end engineers for feature integration, QA testers to detect and resolve issues pre release, designers to implement new themes, banners, and visual guidelines, sales team to incorporate feedback into new features based on client and market needs",
        },
        {
          id: 11,
          p: "Built a fully custom, configurable PDF generator capable of exporting detailed reports for scanned measurements and drug tests. Integrated PDF preview, sharing, download, and print functionality directly in the app.",
        },
        {
          id: 12,
          p: "Managed both Google Play Console and Apple App Store Connect, handling invite based access, closed testing releases, production rollouts, and regular updates. Navigated changing store requirements and ensured successful third party integration configurations (e.g., analytics, crash reporting, in app permissions, module shrinking rules, api keys integrations, license based user access. ).",
        },
      ],
    },
  },
  {
    id: "2",
    name: "Mondo Chat",
    description:
      "Contributed to a large-scale project aimed at streamlining communication between support agents and warehouse management personnel by handling client requests and generating actionable tickets. The platform integrated with all major communication channels and supported multiple spoken languages. My responsibilities included maintaining and optimizing the existing codebase, fixing bugs, and developing new features such as custom client-facing pages, telecom messaging and voice communication/recording functionality, as well as interactive trigger-based action flowcharts.",
    stack: [
      { id: 1, title: "REACT TS" },
      { id: 2, title: "Redux" },
      { id: 3, title: "WebSocket" },
      { id: 5, title: "MATERIAL UI" },
    ],
    images: [
      mondoChat,
      mondoChat1,
      mondoChat2,
      mondoChat3,
      mondoChat4,
      mondoChat5,
      mondoChat6,
      mondoChat7,
      mondoChat8,
      mondoChat9,
    ],
    technical: {
      title: "Mondo Chat  project achievements",
      description: [
        {
          id: 1,
          p: "Collaborated a team on the front-end development of a large scale web application, working alongside both front end and back-end colleagues to ensure feature integration and funcional user experience.",
        },
        {
          id: 2,
          p: "Resolved UI/UX issues and enhanced performance, improving the platform’s stability and responsiveness across multiple user workflows. Played an active role in testing upcoming features and ensuring release readiness.",
        },
        {
          id: 3,
          p: "Improved the WebSocket based ticket management system, which coordinated communications between agents and clients across multiple popular messaging platforms. Overcame the complexity of handling multilingual data and platform-specific messaging formats.",
        },
        {
          id: 4,
          p: "Implemented new client facing features, including: custom product pages for individual clients, telecom voice communication and recording tools, online payments via integrated bank card support.",
        },

        {
          id: 5,
          p: "Integrated web APIs that communicated with Java based back end services and MongoDB.",
        },
        {
          id: 6,
          p: "Collaborated using GitLab for version control, resolving merge conflicts, synchronizing code changes, and maintaining a organized commit history.",
        },
      ],
    },
  },
  {
    id: "3",
    name: "IoT projects",
    description:
      "Developed various projects focused on automation, for specific use-case solutions, and local network-connected devices. Projects ranged from custom remote control systems and RGB LED controllers to open-source NVR CCTV motion detection systems and remote appliance activation. Utilized interconnected Raspberry Pis equipped with various sensors and wireless communication protocols. Set up home-lab servers for network monitoring and NVR systems, featuring custom Linux-based Python scripts for motion detection, recording, and device orchestration. Also configured and hosted personal Git repository servers with custom action trigger hooks to for development and deployment workflows and selfhosted websites made with React and Flask",
    stack: [
      { id: 1, title: "Python" },
      { id: 2, title: "React TS" },
      { id: 3, title: "Raspberry pi GPIO" },
      { id: 4, title: "linux" },
      { id: 5, title: "Flask" },
      { id: 6, title: "SQLite" },
    ],
    images: [iot3, iot4, iot1, iot2, iot5],
    technical: {
      title: "IoT projects  project achievements",
      description: [
        {
          id: 1,
          p: "Developed and deployed multiple Python scripts on Raspberry Pis to gather sensor data, control relay switches, transmit radio commands, and manage RGB lighting systems. All devices operated on a shared local network using WebSocket and Bluetooth communication.",
        },
        {
          id: 2,
          p: "Built tools app with Python Kiwy for mobile devices to allow remote control of network devices and receive and store sensor data.",
        },
        {
          id: 3,
          p: "Built a custom IP camera viewer for CCTV networks, featuring motion detection with triggered frame recording and visual overlays. Tackled the challenge of balancing responsiveness and accuracy in motion detection while maintaining efficient storage of captured footage.",
        },
        {
          id: 4,
          p: "Automated video processing workflows with Python scripts capable of recording, cropping, rendering, and generating time-lapse videos. Addressed performance bottlenecks by implementing multithreading and user-configurable processing settings.",
        },
        {
          id: 5,
          p: "Self-hosted full-stack applications by deploying React front ends and Flask back ends on personal Linux servers. Also set up private Git repositories with custom trigger hooks, for personal projects.",
        },
        {
          id: 6,
          p: "Utilized Raspberry Pis as development boards to experiment with and test various wireless communication technologies, including Bluetooth Classic, BLE, and Wi-Fi Direct.",
        },
      ],
    },
  },
  {
    id: "4",
    name: "LandRank",
    description:
      "Imagine you're a real estate agent specialized on finding land areas for future customers on which they will build whatever they need on. This is a web application tool for mapping and storing different areas on the map with the necessary data to present to a customer. Built with React.js and ASP.NET.",
    stack: [
      { id: 1, title: "REACT" },
      { id: 2, title: "ASP.NET" },
      { id: 3, title: "GOOGLE MAPS API" },
      { id: 4, title: "OPENCAGE API" },
      { id: 5, title: "MATERIAL UI" },
      { id: 6, title: "AZURE" },
      { id: 7, title: "NETLIFY" },
    ],
    url: "https://land-rank.netlify.app",
    github: "https://github.com/Robert0B0/LandRank",
    images: [LandRank, LandRank1, LandRank2, LandRank3],
    technical: {
      title: "LandRank  project achievements",
      description: [
        {
          id: 1,
          p: "Developed a responsive and interactive web application using React, designing all UI elements as reusable components and implementing functionality with modern JavaScript practices.",
        },
        {
          id: 2,
          p: "Built a sleek, consistent user interface with Material-UI, leveraging its stylized and performance-optimized React components to ensure a polished look while minimizing custom styling overhead.",
        },
        {
          id: 3,
          p: "Integrated Google Maps API as the app’s core functionality, enabling dynamic map rendering, polygon drawing, and coordinate extraction from placed markers. This included overcoming geospatial interaction challenges.",
        },
        {
          id: 4,
          p: "Implemented reverse geocoding using the OpenCage API to convert coordinates into human-readable addresses,this provided contextual location information based on user interactions with the map while avoiding Google API related taxes.",
        },
        {
          id: 5,
          p: "Developed the backend using the ASP.NET platform, creating a scalable Web API to handle data operations, authentication, and map-related business logic.",
        },
        {
          id: 6,
          p: "Utilized Entity Framework Core for database integration, enabling object-oriented data management while ensuring cross-platform compatibility. Tackled challenges in relational data modeling and query performance.",
        },
      ],
    },
  },
  {
    id: "5",
    name: "RichesTraker",
    description:
      "Web application designed to store, track, display and predict financial activity based on the user inputted financial behavior. After creating an account or logging form a existing one, users are presented with an always present monetary balance, interactive calendar of financial activity, graph renderings for showing income and outcome evolution. Users can create and keep track of specific interest items like: Monetary records, Savings jars, Financial goals and Investment plans.",
    stack: [
      { id: 1, title: "DJANGO" },
      { id: 2, title: "BOOTSTRAP" },
      { id: 3, title: "POSTGRESQL" },
      { id: 4, title: "DATATABLES" },
      { id: 5, title: "FULLCALENDAR" },
      { id: 6, title: "ZINKCHART" },
      { id: 7, title: "HEROKU" },
    ],

    url: "https://richestracker-personalproject.herokuapp.com/",
    github: "https://github.com/Robert0B0/RichesTracker",
    images: [RichesTracker],
    technical: {
      title: "RichesTraker  project achievements",
      description: [
        {
          id: 1,
          p: "Designed and developed a full-featured web application for tracking, storing, and evaluating daily-to-monthly monetary activities, helping users set financial goals, visualize data, and manage savings.",
        },
        {
          id: 2,
          p: "Architected the system using the Django framework and PostgreSQL, building a scalable structure with modular apps. Overcame the challenge of managing complexity by dividing functionality into focused Django apps—each with its own views, templates, forms, and URL routing—leading to easier debugging and future expansion.",
        },
        {
          id: 3,
          p: "Built core functionality in the records app to manage all monetary entries, which integrates with modules like savings, goals, and investments, allowing centralized and reusable data for graphs and calendars.",
        },
        {
          id: 4,
          p: "Created data visualization features, including: A calendar-based financial overview in the info app, Goal tracking and milestone planning in the goals app, Investment strategies and record handling in the investments app, Savings jars with specific actions in the savings app.",
        },
        {
          id: 5,
          p: "Integrated third-party libraries like Bootstrap, DataTables, FullCalendar, and ZingChart to provide an intuitive, interactive, and visually appealing user experience. This involved overcoming challenges related to integrating JavaScript-based libraries into Django templates.",
        },
        {
          id: 6,
          p: "Handled deployment challenges by publishing the app on Heroku, configuring environment variables, static file management, and PostgreSQL hosting.",
        },
      ],
    },
  },
];
