import React, { useContext } from 'react';
import Header from '../../components/header';
import { GlobalContext } from '../../contexts/global/globalContext';
import { Timeline } from 'primereact/timeline';
import { Card } from 'primereact/card';
import '../../assets/css/general.css';

const Formation = () => {
    const {
        mobile
    } = useContext(GlobalContext);

    const events = [
        {
            title: 'Bootcamp Recode Pro',
            text: 'Conheci a programação através do Bootcamp da Recode Pro. Uma ONG destinada a alocação de pessoas com baixa renda e minorias no mercado de tecnologia.',
            date: 'Setembro/2021 - Abril/2022',
            color: '#00B788'
        },
        {
            title: 'Cursos Livres - Udemy',
            text: 'Conforme fui aprendendo, fui tomando cada vez mais gosto pela área e acabei começando paralelamente ao bootcamp alguns cursos livres para as diversas tecnologias que aprendi.',
            date: 'Dezembro/2022 - Abril/2023',
            color: '#ffffff'
        },
        {
            title: 'ADS - Unisuam',
            text: 'E, então, ao final dos cursos livres, e pela minha evidente, e recém descoberta, paixão pela área, resolvi fazer a troca de curso para analise de sistemas (na época, era estudante de design)!',
            date: 'Abril/2022 - Julho/2024',
            color: '#00B788'
        },
        {
            title: 'Formatura',
            text: 'Agora, como um desenvolvedor formado, pretendo seguir com meus estudos. Estou no processo de escolha de uma pós graduação na área de desenvolvimento full-stack!',
            date: 'Julho/2024',
            color: '#ffffff'
        }
    ];

    const customizedMarker = (item) => {
        return (
            <span className="flex w-2rem h-2rem align-items-center justify-content-center text-white border-circle z-1 shadow-1" style={{ backgroundColor: item.color }}>
                <i className={item.icon}></i>
            </span>
        );
    };

    const customizedContent = (item) => {
        return (
            <Card title={item.title} subTitle={item.date} className='min-h-15rem max-h-30rem min-w-20rem bg-primary cardsConfig'>
                <p className='max-w-30rem'>{item.text}</p>
            </Card>
        );
    };

    return (
        <Header>
            <div className={`${mobile ? 'mt-4 flex flex-column justify-content-center align-items-center' : 'mt-8 p-1 flex flex-column justify-content-center align-items-center'}`}>
                <div className={`mb-5 ${mobile && 'text-center'}`}>
                    <h1 className='font-bold text-4xl text-primary m-0' style={{ fontFamily: 'var(--title-font) !important' }}>Minha Trajetória de Aprendizado</h1>
                </div>
                <div className='flex justify-content-between'>
                    <Timeline value={events} align={`alternate`} className="customized-timeline" marker={customizedMarker} content={customizedContent} />
                </div>
            </div>
        </Header>
    );
}

export default Formation;