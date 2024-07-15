import React, { useState } from 'react';
import jawGames from '../../assets/imgs/jawgames.png'
import Header from '../../components/header';
import { Carousel } from 'primereact/carousel';
import { Button } from 'primereact/button'
import { Card } from 'primereact/card';
import { FaEye } from 'react-icons/fa';
import '../../assets/css/general.css'

const Projects = () => {
    const [projects] = useState([
        {
            id: 1,
            img: jawGames,
            name: 'Jaw Games',
            date: 'junho/2023',
            link: 'https://jaw.games'
        },
        {
            id: 2,
            img: jawGames,
            name: 'Jaw Games',
            date: 'junho/2023',
            link: 'https://jaw.games'
        },
        {
            id: 3,
            img: jawGames,
            name: 'Jaw Games',
            date: 'junho/2023',
            link: 'https://jaw.games'
        },
        {
            id: 4,
            img: jawGames,
            name: 'Jaw Games',
            date: 'junho/2023',
            link: 'https://jaw.games'
        },
        {
            id: 5,
            img: jawGames,
            name: 'Jaw Games',
            date: 'junho/2023',
            link: 'https://jaw.games'
        },
        {
            id: 6,
            img: jawGames,
            name: 'Jaw Games',
            date: 'junho/2023',
            link: 'https://jaw.games'
        }
    ]);
    const responsiveOptions = [
        {
            breakpoint: '1400px',
            numVisible: 2,
            numScroll: 1
        },
        {
            breakpoint: '1199px',
            numVisible: 3,
            numScroll: 1
        },
        {
            breakpoint: '767px',
            numVisible: 2,
            numScroll: 1
        },
        {
            breakpoint: '575px',
            numVisible: 1,
            numScroll: 1
        }
    ];

    const projectsTemplate = (project) => {
        return (
            <Card
                title={<h1 className='font-bold text-2xl text-primary m-0' style={{ fontFamily: 'var(--title-font) !important' }}>{project.name}</h1>}
                subTitle={project.date}
                header={<img src={project.img} />}
                footer={
                    <Button tooltip='Ver mais' tooltipOptions={{ position: 'bottom' }} icon={<FaEye size={25} />} rounded className="bg-primary border-none" onClick={() => window.location.href = project.link} />
                }
                className="m-2 text-center py-5 px-3 border-round-xl min-h-20rem" style={{ backgroundColor: 'var(--theme-color)' }}>
            </Card>
        );
    };

    return (
        <Header>
            <div className='flex flex-column justify-content-center text-center my-2'>
                <h1 className='font-bold text-4xl text-primary m-0 text-center' style={{ fontFamily: 'var(--title-font) !important' }}>Projetos</h1>
                <p>Aqui estão alguns dos projetos que participei e concluí ao longo da minha carreira</p>
            </div>
            <div className='py-0'>
                <Carousel value={projects} numScroll={1} numVisible={3} responsiveOptions={responsiveOptions} itemTemplate={projectsTemplate} />
            </div>
        </Header>
    );
}

export default Projects;