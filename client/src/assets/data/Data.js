import React from 'react';

export const skills = [
    {
        id: 1,
        logoImg: "reactJs.svg",
        en: 'I have the ability to handle any Problem with ReactJs.',
        de: 'Ich kann jedes Problem mit ReactJs lösen.'
    },
    {
        id: 2,
        logoImg: "javaScript.png",
        en: 'Well knowledge in Es5, Es6 to create a fully functional website.',
        de: 'Fundiertes Wissen in Es5, Es6, um eine voll funktionsfähige Website zu erstellen.'
    },
    {
        id: 3,
        logoImg: "sass.svg",
        en: 'Well knowledge to Style website with less code.',
        de: 'Fundiertes Wissen zur Style-Website mit weniger Code.'
    },
    {
        id: 4,
        logoImg: "css3.svg",
        en: 'Good sense by styling a layout of the website using the right property.',
        de: 'Sinnvoll, indem Sie ein Layout der Website mit der richtigen Eigenschaft gestalten.'
    },
    {
        id: 5,
        logoImg: "html5.svg",
        en: 'The best structure for building bones of the website by using html5 Tags.',
        de: 'Die beste Struktur zum Erstellen von Bones der Website mithilfe von HTML5-Tags.'
    },
    {
        id: 6,
        logoImg: "bootstrap.svg",
        en: 'Good knowledge in bootstrap.',
        de: 'Gute Kenntnisse in Bootstrap.'
    },
    {
        id: 7,
        logoImg: "jQuery.svg",
        en: 'Good knowledge in Jquery.',
        de: 'Gute Kenntnisse in Jquery.'
    },

]

export const projects = [
    {
        id: 5,
        images: 'market/1.png',
        languages: ['HTML', 'SCSS', 'JavaScript', 'ReactJs'],
        disable: false,
        viewLink: 'http://market.awojokh.com/',
        codeLink: 'https://github.com/AhmadYoussef/Online-Market.git'
    },
    {
        id: 1,
        images: 'albert/1.png',
        languages: ['HTML', 'SCSS', 'JavaScript', 'ReactJs'],
        disable: true,
        viewLink: 'https://albertobst.com/mytest/',
        codeLink: ''
    },
    {
        id: 2,
        images: 'albert/1.png',
        languages: ['HTML', 'CSS', 'JavaScript'],
        disable: true,
        viewLink: 'https://guesscardwojokh.web.app/',
        codeLink: 'https://github.com/AhmadYoussef/guess-card'
    },
    {
        id: 3,
        images: 'anzzor/1.png',
        languages: ['HTML', 'CSS', 'JavaScript'],
        disable: true,
        viewLink: 'https://anzzor.co/',
        codeLink: ''
    },
    {
        id: 4,
        images: 'dnsh/1.png',
        languages: ['HTML', 'CSS', 'JavaScript', 'JQuery', 'PHP'],
        disable: true,
        viewLink: 'https://dnsh-trading.com/',
        codeLink: ''
    },
    {
        id: 5,
        images: 'lutfi/1.png',
        languages: ['HTML', 'CSS', 'JavaScript', 'JQuery', 'PHP'],
        disable: true,
        viewLink: 'http://www.lutfi-lutfi.com',
        codeLink: ''
    }


]


export const langData = {
    en: {
        home: "Home",
        about: "About",
        skills: "Skills",
        project: "Projects",
        contact: "Contact",
        projectBtn: 'View',
        contactText: `I am always open for new opportunities and for new visions. So let's get in touch by                  dropping me a line.`,
        homeText1: () => (<><h2> Hi, <span>my name </span>is Ahmad Youssef.</h2>
            <h2> I am a Front-End Develper.</h2></>),
        homeText2: () => (<>Feel free to download my CV <span>here:</span><br /></>),
        cvLang: ["English", "German"],
        aboutText: () => (<>
            Hello, <br />
            my name Ahmad Youssef. I am currently training as a front-end developer at the DCI Digital Career Institute in Dusseldorf. I studied telecommunications in Syria and came to Germany in 2016. Since I have a great passion for programming, I wanted to evolve in this area. During this course, I did several projects for friends and clients.
                </>),

    },
    de: {
        home: "Startseite",
        about: "Über mich",
        skills: "Skills",
        project: "Projekte",
        contact: "Kontakt",
        projectBtn: "Ansicht",
        contactText: `Ich bin immer offen für neue Möglichkeiten und Visionen. Also lassen Sie uns Kontakt                  aufnehmen indem Sie mir schreiben.`,
        homeText1: () => (<><h2> Hi, <span>mein Name </span>ist Ahmed Youssef.</h2>
            <h2>Ich bin Front-End-Entwickler.</h2></>),
        homeText2: () => (<>Hier finden Sie meinen Lebenslauf:<br /></>),
        cvLang: ["English", "German"],
        aboutText: () => (<>
            Hallo, <br />
            ich bin Ahmad Youssef. Ich mache zur Zeit beim DCI Digital Career Institut  in Düsseldorf eine Ausbildung zum Front-End Entwickler. Ich habe in Syrien Telekommunikation  studiert und bin 2016 nach Deutschland gekommen. Da ich eine große Leidenschaft für das Programmieren habe, wollte  ich mich auf diesem Gebiet weiterentwickeln. Während dieses Kurses habe ich mehrere Projekte für Freunde und Kunden durchgeführt.
                    </>),


    }
}