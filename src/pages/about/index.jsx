import React, { useContext } from 'react';
import Header from '../../components/header';
import { GlobalContext } from '../../contexts/global/globalContext';
import { Chip } from 'primereact/chip'

const About = () => {
    const {
        mobile
    } = useContext(GlobalContext);
    
    return (
        <Header>
            <div className={`${mobile ? 'flex flex-column justify-content-center text-center align-items-center' : 'flex justify-content-between align-items-start mt-3'}`}>
                <div>
                    <h1 className={`text-5xl text-primary ${mobile && 'text-center'}`} style={{ fontFamily: 'var(--title-font)' }}>Um Pouco Sobre Mim!</h1>
                    <p className={` text-xl ${mobile ? 'text-center min-w-30rem' : 'text-justify max-w-25rem'}`}>Sou um desenvolvedor full-stack com sólida experiência principalmente em projetos web, porém, também entendo um pouco sobre aplicações mobile.</p>
                    <p className={`max-w-25rem text-xl ${mobile && 'text-center'}`}>
                        Meus hobbies são:<br />
                        💻 Desenvolvimento Full-Stack!<br />
                        🎧 Ouvir música!<br />
                        🎮 Jogar online!<br />
                        🍽️ Experimentar coisas novas!<br />
                        ⛹️ Jogar basquete!<br />
                        📖 Ler livros emocionantes!
                    </p>
                </div>
                <div>
                    <div>
                        <h1 className='text-5xl text-primary' style={{ fontFamily: 'var(--title-font)' }}>Hard Skills</h1>
                        <div className='flex flex-column'>
                            <div>
                                <Chip label="Javascript" className={`px-4 py-1 mr-3 border-round-3xl bg-primary ${mobile && 'mt-2'}`} />
                                <Chip label="Typescript" className={`px-4 py-1 mr-3 border-round-3xl bg-primary ${mobile && 'mt-2'}`} />
                                <Chip label="C#" className={`px-4 py-1 mr-3 border-round-3xl bg-primary ${mobile && 'mt-2'}`} />
                                <Chip label="PHP" className={`px-4 py-1 mr-3 border-round-3xl bg-primary ${mobile && 'mt-2'}`} />
                                <Chip label="SQL" className={`px-4 py-1 mr-3 border-round-3xl bg-primary ${mobile && 'mt-2'}`} />{!mobile && <><br /><br /></>}
                                <Chip label="React.JS" className={`px-4 py-1 mr-3 border-round-3xl bg-primary ${mobile && 'mt-2'}`} />
                                <Chip label="Ionic/cli" className={`px-4 py-1 mr-3 border-round-3xl bg-primary ${mobile && 'mt-2'}`} />
                                <Chip label=".NET" className={`px-4 py-1 mr-3 border-round-3xl bg-primary ${mobile && 'mt-2'}`} />
                                <Chip label="Postman" className={`px-4 py-1 mr-3 border-round-3xl bg-primary ${mobile && 'mt-2'}`} />{!mobile && <><br /><br /></>}
                                <Chip label="Node.JS" className={`px-4 py-1 mr-3 border-round-3xl bg-primary ${mobile && 'mt-2'}`} />
                                <Chip label="JWT" className={`px-4 py-1 mr-3 border-round-3xl bg-primary ${mobile && 'mt-2'}`} />
                                <Chip label="MySQL" className={`px-4 py-1 mr-3 border-round-3xl bg-primary ${mobile && 'mt-2'}`} />
                                <Chip label="SQL Server" className={`px-4 py-1 mr-3 border-round-3xl bg-primary ${mobile && 'mt-2'}`} />{!mobile && <><br /><br /></>}
                                <Chip label="AWS" className={`px-4 py-1 mr-3 border-round-3xl bg-primary ${mobile && 'mt-2'}`} />
                                <Chip label="Scrum" className={`px-4 py-1 mr-3 border-round-3xl bg-primary ${mobile && 'mt-2'}`} />
                                <Chip label="Git/GitHub/BitBucket/Azure DevOps" className={`px-4 py-1 mr-3 border-round-3xl bg-primary ${mobile && 'mt-2'}`} />
                            </div>
                        </div>
                    </div>
                    <div>
                        <h1 className='text-5xl text-primary' style={{ fontFamily: 'var(--title-font)' }}>Soft Skills</h1>
                        <div>
                            <Chip label='Resiliência' className={`px-4 py-1 mr-3 border-round-3xl bg-primary ${mobile && 'mt-2'}`} />
                            <Chip label='Boa Comunicação' className={`px-4 py-1 mr-3 border-round-3xl bg-primary ${mobile && 'mt-2'}`} /><br />{!mobile && <br />}
                            <Chip label='Bom Trabalho em Equipe' className={`px-4 py-1 mr-3 border-round-3xl bg-primary ${mobile && 'mt-2'}`} />
                            <Chip label='Autodidatismo' className={`px-4 py-1 mr-3 border-round-3xl bg-primary ${mobile && 'mt-2'}`} />
                        </div>
                    </div>
                </div>
            </div>
        </Header>
    );
}

export default About;