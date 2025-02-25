'use client';
import React from 'react';
import { twMerge } from 'tailwind-merge';

import { TracingBeam } from '@/components/ui/tracing-beams';

export function ExperienceSection() {
    return (
        <>
            <h1 id="experience" className="mx-auto max-w-5xl px-8 pb-8 pt-20 text-2xl font-bold dark:text-white md:pt-32 md:text-7xl">
                Experience
            </h1>
            <TracingBeam className="px-6">
                <div className="relative mx-auto max-w-2xl pb-32 pt-4 text-white antialiased">
                    {experience.map((item, index) => (
                        <div key={`content-${index}`} className="mb-10 mt-4 md:mt-0">
                            <h2 className={twMerge('text-xl text-black dark:text-white')}>{item.title}</h2>
                            <span className="w-fit rounded-full py-1 text-sm italic text-neutral-800 dark:text-neutral-200">{item.badge}</span>
                            <div className="prose prose-sm dark:prose-invert mt-2 text-sm text-black dark:text-white">{item.description}</div>
                        </div>
                    ))}
                </div>
            </TracingBeam>
        </>
    );
}

const experience = [
    {
        title: 'Pateros Technological College',
        description: (
            <ul className="list-disc">
                <li>
                    As a part-time professor, I teach first-year students introductory programming in Java, second-year students in Database Management Systems and Data Structures and Algorithms, and fourth-year students in System Administration and Maintenance, as well as Integration of Systems and Technologies. 
                </li>
                <li>
                    Develop instructional materials, design practical assignments and exams, assess student performance, and adapt teaching methods to align with industry trends, covering fundamental to advanced concepts through lectures, hands-on exercises, and assessments.
                </li>
            </ul>
        ),
        badge: 'Part Time IT Professor / September - December 2024'
    },
    {
        title: 'On-the-job training for Newman Homes',
        description: (
            <ul className="list-disc">
                <li>
                    Developed and managed Newman Homes official website (newmanhomesph.com) to promote property listings, enhance online presence, and streamline client interactions. Designed marketing materials and coordinated with clients and sellers to support their property needs.
                </li>
                <li>
                    Built a user-friendly and visually appealing website, regularly updated property listings, and ensured accurate data management. Created graphics and promotional videos for social media marketing, increasing engagement and brand awareness.
                </li>
            </ul>
        ),
        badge: 'Web Developer & Digital Marketing Designer / March - June 2024'
    },
    {
        title: 'Freelancing Job as a College Student',
        description: (
            <ul className="list-disc">
                <li>Started as a debugging specialist, initially handling 
                minor web development tasks and assignments before expanding into full project development. 
                Built a clients system prototype with a basic UI in just three days, 
                showcasing adaptability and quick problem-solving skills.</li>
                <li>Transitioned into mobile development, assisting a classmate 
                with their thesis project using Flutter and successfully 
                delivering the final version, demonstrating proficiency in cross-platform app development.
                </li>
            </ul>
        ),
        badge: 'Web Developer and Android Application Developer /December 2022 - Febuary 2024'
    }
];
