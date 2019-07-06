import React from 'react';
import Swiper from 'react-id-swiper';
import { Pagination, Navigation } from 'swiper/dist/js/swiper.esm';
import './slider.scss';
import classes from './SkillsList.module.scss';
import Skill from './Skill/Skill';
import { langData, skills } from '../assets/data/Data';

const SkillsList = (props) => {
    let content = { ...langData.en };
    if (props.lang === 'de')
        content = { ...langData.de };
    const params = {
        modules: [Pagination, Navigation], //  must
        slidesPerView: 4, //
        spaceBetween: 40, // space between the images
        centeredSlides: true,
        grabCursor: true, // style the cursor
        breakpoints: {
            900: {
                slidesPerView: 3,
                spaceBetween: 90
            },
            610: {
                slidesPerView: 2,
                spaceBetween: 220
            },
            450: {

                slidesPerView: 1,
                spaceBetween: 0
            }
        },
        pagination: {
            // to display the points to change the images
            el: '.swiper-pagination.bullets',
            type: 'bullets',
            clickable: true
        },
        navigation: {
            // to display the buttons next, prev
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        },
    };
    return (
        <div id="skills" className={classes.SkillsContainer} >

            <h2>{content.skills}</h2>

            <div className={classes.skillsSlider}>
                <Swiper {...params} className={classes.swiper} >
                    {
                        skills.map((item, index) => (
                            <div key={item.id}>
                                <Skill {...item} lang={props.lang} />
                            </div>
                        ))
                    }
                </Swiper>
            </div>

        </div >
    );
}

export default SkillsList;