import React, { useContext, useState } from 'react';
import jawGames from '../../assets/imgs/jawgames.png';
import jawPrint1 from '../../assets/imgs/jawgamesprint1.png';
import jawPrint2 from '../../assets/imgs/jawgamesprint2.png';
import jawPrint3 from '../../assets/imgs/jawgamesprint3.png';
import jawPrint4 from '../../assets/imgs/jawgamesprint4.png';
import Header from '../../components/header';
import { Carousel } from 'primereact/carousel';
import { Button } from 'primereact/button';
import { Card } from 'primereact/card';
import { Dialog } from 'primereact/dialog';
import { FaEye } from 'react-icons/fa';
import '../../assets/css/general.css';
import applyLandingPage from '../../assets/imgs/applylandingpage.png';
import applyLandingPage1 from '../../assets/imgs/applylandingpageprint1.png';
import applyLandingPage2 from '../../assets/imgs/applylandingpageprint2.png';
import applyLandingPage3 from '../../assets/imgs/applylandingpageprint3.png';
import applyLandingPage4 from '../../assets/imgs/applylandingpageprint4.png';
import movieDbCover from '../../assets/imgs/moviedbcover.png';
import moviedbprint1 from '../../assets/imgs/moviedbprint1.png';
import moviedbprint2 from '../../assets/imgs/moviedbprint2.png';
import moviedbprint3 from '../../assets/imgs/moviedbprint3.png';
import moviedbprint4 from '../../assets/imgs/moviedbprint4.png';
import { GlobalContext } from '../../contexts/global/globalContext';

const Projects = () => {
    const { mobile } = useContext(GlobalContext);
    const [selectedProject, setSelectedProject] = useState(null);
    const [dialogVisible, setDialogVisible] = useState(false);
    const [projects] = useState([
        {
            id: 1,
            img: jawGames,
            name: 'Jaw Games',
            date: 'junho/2023',
            link: 'https://jaw.games',
            info: {
                tecnologies: 'React.JS/.NET',
                textInfo: 'Este é um projeto da qual participei do desenvolvimento durante meu período na companhia Telecall. A jaw games tem a intenção de ser um portal de assinatura, semelhante a uma streaming, para jogos. Um competidor bem forte da Xbox Game Pass!',
                imgGallery: {
                    img1: jawPrint1,
                    img2: jawPrint2,
                    img3: jawPrint3,
                    img4: jawPrint4
                }
            }
        },
        {
            id: 2,
            img: applyLandingPage,
            name: 'Apply Landing Page',
            date: 'julho/2024',
            link: 'https://landingpage-apply-portifolio.vercel.app',
            info: {
                tecnologies: 'React.JS/Figma',
                textInfo: 'A apply trata-se de um projeto fictício de landing page que serviu como estudo para desenvolvimento baseado em protótipos vindos do Figma e também para medir tempo de desenvolvimento de landing pages.',
                imgGallery: {
                    img1: applyLandingPage1,
                    img2: applyLandingPage2,
                    img3: applyLandingPage3,
                    img4: applyLandingPage4
                }
            }
        },
        {
            id: 3,
            img: movieDbCover,
            name: 'Consumo da API Movie Database com React.JS',
            date: 'fevereiro/2024',
            link: 'https://movie-db-nu.vercel.app',
            info: {
                tecnologies: 'React.JS/API Consumption',
                textInfo: 'O Movie DB trata-se de um projeto fictício de consumo de API que serviu como estudo para desenvolvimento na biblioteca React.JS, além de ter sido o teste de entrada para uma de minhas experiências profissionais anteriores.',
                imgGallery: {
                    img1: moviedbprint1,
                    img2: moviedbprint2,
                    img3: moviedbprint3,
                    img4: moviedbprint4
                }
            }
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
                title={<h1 className='font-bold text-2xl text-primary hover' style={{ fontFamily: 'var(--title-font) !important' }}>{project.name}</h1>}
                subTitle={project.date}
                header={<img src={project.img} alt={project.name} />}
                footer={
                    <Button
                        label='Saiba Mais'
                        rounded
                        className="bg-primary border-none z-5 font-bold mb-0"
                        onClick={() => {
                            setSelectedProject(project);
                            setDialogVisible(true);
                        }}
                    />
                }
                className="text-center border-round-x mx-2"
                style={{ background: 'var(--theme-color) !important', minHeight:'26rem' }}
                onClick={() => {
                    setSelectedProject(project);
                    setDialogVisible(true);
                }}
            />
        );
    };

    return (
        <Header>
            <div className='flex flex-column justify-content-center text-center py-5'>
                <h1 className='font-bold text-4xl text-primary m-0 text-center' style={{ fontFamily: 'var(--title-font) !important' }}>Projetos</h1>
                <p>Aqui estão alguns dos projetos que participei e concluí ao longo da minha carreira</p>
            </div>
            <div className='gap-3'>
                <Carousel value={projects} numScroll={1} numVisible={3} responsiveOptions={responsiveOptions} itemTemplate={projectsTemplate} />
            </div>
            {selectedProject && (
                <Dialog
                    header={selectedProject.name}
                    visible={dialogVisible}
                    style={{ width: `${mobile ? '90vw' : '50vw'}` }}
                    modal
                    onHide={() => setDialogVisible(false)}
                >
                    <div className='grid justify-content-center mb-1'>
                        <img src={selectedProject.info.imgGallery.img1} alt={selectedProject.name} style={{ width: '100%' }} className={`${mobile ? 'w-full' : 'w-6 p-1'}`} />
                        <img src={selectedProject.info.imgGallery.img2} alt={selectedProject.name} style={{ width: '100%' }} className={`${mobile ? 'w-full' : 'w-6 p-1'}`} />
                    </div>
                    <div className='grid justify-content-center'>
                        <img src={selectedProject.info.imgGallery.img3} alt={selectedProject.name} style={{ width: '100%' }} className={`${mobile ? 'w-full' : 'w-6 p-1'}`} />
                        <img src={selectedProject.info.imgGallery.img4} alt={selectedProject.name} style={{ width: '100%' }} className={`${mobile ? 'w-full' : 'w-6 p-1'}`} />
                    </div>
                    <p><strong>Tecnologias:</strong> {selectedProject.info.tecnologies}</p>
                    <p><strong>Descrição do projeto:</strong> {selectedProject.info.textInfo}</p>
                    <div className='flex justify-content-end'>
                        <Button
                            label="Visitar Site"
                            icon={<FaEye />}
                            onClick={() => window.location.href = selectedProject.link}
                            className="bg-primary border-none py-3 border-round-lg mt-3 gap-3"
                        />
                    </div>
                </Dialog>
            )}
        </Header>
    );
};

export default Projects;
