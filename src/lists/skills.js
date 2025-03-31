import React from "react";

import {
  FaAppStoreIos,
  FaApple,
  FaReact,
  FaChartArea,
  FaChartPie,
  FaRaspberryPi,
  FaLinux,
  FaPython,
  FaNpm,
  FaGitAlt,
  FaGitlab,
} from "react-icons/fa";
import { IoLogoAndroid } from "react-icons/io";
import { FaFilePdf } from "react-icons/fa6";
import {
  IoLogoGooglePlaystore,
  IoSyncCircleSharp,
  IoDocumentAttach,
} from "react-icons/io5";
import { SiExpo, SiRedux } from "react-icons/si";
import { VscAzureDevops } from "react-icons/vsc";
import { MdBluetoothConnected, MdBluetoothAudio, MdWifi } from "react-icons/md";
import { SiGooglemaps, SiTypescript, SiFlask, SiDjango } from "react-icons/si";
import { ImDatabase } from "react-icons/im";
export default [
  {
    id: 1,
    icon: (
      <span className="skill-icons">
        <FaReact className="service-icon" />
        <SiRedux className="service-icon" />
        <SiExpo className="service-icon" />
        <IoLogoAndroid className="service-icon" />
        <FaApple className="service-icon" />
      </span>
    ),
    title: "Mobile App Development",
    text: `Developing complex, fully reactive mobile applications compatible with both Android and iOS, supporting various screen sizes and configurations. Proficient in React Native, Redux state management, and Expo development workflow for cross-platform deployment.`,
  },
  {
    id: 2,
    icon: (
      <span className="skill-icons">
        <IoLogoGooglePlaystore className="service-icon" />
        <FaAppStoreIos className="service-icon" />
      </span>
    ),
    title: "App Release Management",
    text: `Managing the complete application publishing lifecycle, including adherence to platform-specific release guidelines, integration of third-party modules, management of version updates, and administration of developer accounts for both App Store Connect and Google Play Console.`,
  },
  {
    id: 3,
    icon: (
      <span className="skill-icons">
        <MdBluetoothAudio className="service-icon" />
        <MdBluetoothConnected className="service-icon" />
        <MdWifi className="service-icon" />
      </span>
    ),
    title: "Wireless Communications",
    text: `Establishing wireless communications between devices utilizing multiple protocols including Bluetooth Classic, Bluetooth Low Energy (BLE), and Wi-Fi. Implementing reliable data transfer solutions with appropriate security protocols, including a local Wi-Fi network with Python servers and a front-end interface for communication when Bluetooth is not feasible.`,
  },
  {
    id: 4,
    icon: (
      <span className="skill-icons">
        <ImDatabase className="service-icon" />
        <IoSyncCircleSharp className="service-icon" />
      </span>
    ),
    title: "Front-end App Storage",
    text: `Implementing scalable database solutions for mobile applications that enable efficient on-device data storage and data synchronization with back-end systems. Specialized in RealmDB for persistent, offline-first data management.`,
  },
  {
    id: 5,
    icon: (
      <span className="skill-icons">
        <SiGooglemaps className="service-icon" />
      </span>
    ),
    title: "Google Maps Integration",
    text: `Implementing Google Maps solutions for Android and iOS applications featuring geolocation services, reverse geocoding, custom map overlays, and interactive location-based features.`,
  },

  {
    id: 6,
    icon: (
      <span className="skill-icons">
        <FaChartArea className="service-icon" />
        <FaChartPie className="service-icon" />
      </span>
    ),
    title: "Charts and Graphs",
    text: `Designing and developing animated, interactive data visualizations with clean and intuitive interfaces. Proficient in using D3.js for web applications and SkiaJS for high-performance rendering in mobile environments.`,
  },
  {
    id: 6,
    icon: (
      <span className="skill-icons">
        <FaFilePdf className="service-icon" />
      </span>
    ),
    title: "PDF Document Generation",
    text: `Creating solutions for customizable PDF document preview and rendering from complex data sources. Implementing documents that are optimized for downloading, sharing, and printing across multiple devices and platforms.`,
  },
  {
    id: 6,
    icon: (
      <span className="skill-icons">
        <FaReact className="service-icon" />
        <SiRedux className="service-icon" />
        <SiTypescript className="service-icon" />
        <FaNpm className="service-icon" />
      </span>
    ),
    title: "Web Development",
    text: `Building responsive front-end web applications using React with TypeScript, Redux for state management, and integrating specialized modules based on specific use cases.`,
  },
  {
    id: 6,
    icon: (
      <span className="skill-icons">
        <FaGitAlt className="service-icon" />
        <FaGitlab className="service-icon" />
        <VscAzureDevops className="service-icon" />
      </span>
    ),
    title: "DevOps",
    text: `Integrating DevOps practices and version control systems including Azure DevOps, GitLab CI/CD pipelines, and Git version control. Implementing deployment workflows, and continuous integration processes.`,
  },
  {
    id: 7,
    icon: (
      <span className="skill-icons">
        <FaRaspberryPi className="service-icon" />
        <FaLinux className="service-icon" />
        <SiFlask className="service-icon" />
        <SiDjango className="service-icon" />
        <FaPython className="service-icon" />
      </span>
    ),
    title: "IoT Development",
    text: `Creating small to medium-scale IoT solutions using Raspberry Pi development boards running Linux. Implementing custom servers written in Django, Flask, or native Python to support various use cases including Bluetooth servers, GPIO communications, and specialized IoT devices with sensor integration.`,
  },
];
