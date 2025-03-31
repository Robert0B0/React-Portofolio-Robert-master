import React from "react";
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import Skills from "../components/Skills";
import Jobs from "../components/Jobs";
import Projects from "../components/Projects";
import { projects } from "../lists/projects";

function Home() {
  return (
    <Layout>
      <Hero />
      <Projects projects={projects} title="past projects" showLink />
      <Jobs />
      <Skills />
    </Layout>
  );
}

export default Home;
