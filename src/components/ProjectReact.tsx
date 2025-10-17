import React from 'react';
import {useState} from 'react';
import TacoCat from './TacoCat.tsx';
import CatLink from './CatLink.tsx';

const TAGS = {
    TWOD: { name: "2D", class: "bg-blue-500 text-white" },
    ROGUELIKE: { name: "Roguelike", class: "bg-red-500 text-white" },
    RPG: { name: "RPG", class: "bg-green-500 text-white" },
    UNITY: { name: "Unity", class: "bg-black text-white" },
    CASUAL: { name: "Casual", class: "bg-yellow-500 text-black" },
    MOBILE: { name: "Mobile", class: "bg-purple-500 text-white" },
    PC: { name: "PC", class: "bg-gray-500 text-white" },
};

const PROJECTS = [
    { title: "Project 1", description: "This is a description of project 1", link: "https://example.com", tags: [TAGS.CASUAL, TAGS.MOBILE], image: "/dniFoto.JPG" },
    { title: "Project 2", description: "This is a description of project 2", link: "https://example.com", tags: [TAGS.UNITY, TAGS.TWOD, TAGS.ROGUELIKE], image: "/dniFoto.JPG" },
    { title: "Project 3", description: "This is a description of project 3", link: "https://example.com", tags: [TAGS.RPG, TAGS.PC], image: "/dniFoto.JPG" },
];

const A =[
    {project: TacoCat, title: "TacoCat"},
    {project: CatLink, title: "CatLink"},
]

export default function ProjectReact() {
    const [selectedProjectIndex, setSelectedProjectIndex] = useState<number | null>(0);

    const handleProjectClick = (index: number) => {
        setSelectedProjectIndex(index);
    };
    return (
        <div>
            <div className="flex gap-x-6 mb-6">
            {A.map((project, index) => (
                <h3 key={index}
                    className="flex text-2xl font-semibold text-yellow-200 mb-2 cursor-pointer" 
                    onClick={() => handleProjectClick(index)}
                >
                    {project.title}
                </h3>
            ))}
            </div>
            {A.map((project, index) => (
                <article key={index}>
                    {selectedProjectIndex === index && (
                        <div>
                            <project.project></project.project>
                            <div id="gallery" className="relative w-full" data-carousel="slide">
                                {/* Carousel wrapper */}
                                <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
                                {/* Item 1 */}
                                <div className="hidden duration-700 ease-in-out" data-carousel-item>
                                    <img
                                    src="/dniFoto.JPG"
                                    className="absolute block max-w-full h-auto -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                                    alt=""
                                    />
                                </div>
                                {/* Item 2 */}
                                <div className="hidden duration-700 ease-in-out" data-carousel-item="active">
                                    <img
                                    src="/dniFoto.JPG"
                                    className="absolute block max-w-full h-auto -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                                    alt=""
                                    />
                                </div>
                                {/* Item 3 */}
                                <div className="hidden duration-700 ease-in-out" data-carousel-item="active">
                                    <img
                                    src="/dniFoto.JPG"
                                    className="absolute block max-w-full h-auto -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                                    alt=""
                                    />
                                </div>
                                </div>
                                {/* Slider controls */}
                                <button
                                type="button"
                                className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                                data-carousel-prev
                                >
                                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                                    <svg
                                    className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 6 10"
                                    >
                                    <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M5 1 1 5l4 4"
                                    />
                                    </svg>
                                    <span className="sr-only">Previous</span>
                                </span>
                                </button>
                                <button
                                type="button"
                                className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                                data-carousel-next
                                >
                                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                                    <svg
                                    className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 6 10"
                                    >
                                    <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="m1 9 4-4-4-4"
                                    />
                                    </svg>
                                    <span className="sr-only">Next</span>
                                </span>
                                </button>
                            </div>
                        </div>
                    )}
                </article>
            ))}
        </div>
    );
}