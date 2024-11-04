"use client";

import Hero from "@/components/Hero";
import {FloatingDock} from "@/components/ui/FloatingDock"
import { navItems } from "@/data/index";

import { FaHome, FaCode, FaImages, FaPenAlt, FaProjectDiagram, FaUtensils, FaGithub } from 'react-icons/fa';


export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingDock  items={[
            { title: 'Home', icon: <FaHome />, href: '/' },
            { title: 'Gallery', icon: <FaImages />, href: '/gallery' },
            { title: 'Code', icon: <FaCode />, href: '/code' },
            { title: 'Blog', icon: <FaPenAlt />, href: '/blog' },
            { title: 'Projects', icon: <FaProjectDiagram />, href: '/projects' },
            { title: 'Food', icon: <FaUtensils />, href: '/food' },
            { title: 'GitHub', icon: <FaGithub />, href: 'https://github.com/madalindvp' }
          ]}
          desktopClassName="fixed top-12 left-1/2 transform -translate-x-1/2 z-50"
          mobileClassName="fixed bottom-0 left-0 w-full z-50"
        />
        <Hero />
      </div>

    </main>
  );
}
