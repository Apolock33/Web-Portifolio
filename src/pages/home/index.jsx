import React, { useContext } from 'react';
import { GlobalContext } from '../../contexts/global/globalContext';
import imgHome from '../../assets/imgs/img.png';
import { Button } from 'primereact/button';
import { FaDownload } from 'react-icons/fa'
import Header from '../../components/header';

const Home = () => {
    const {
        mobile
    } = useContext(GlobalContext);

    return (
        <Header>
            <div className={`p-8 pb-0 ${mobile ? null : 'flex justify-content-between align-items-center'}`}>
                {mobile ?
                    <>
                        <div>
                            <h3>Olá, me chamo</h3>
                            <h1 style={{ fontFamily: 'var(--title-font)' }}>Carlos Alberto Gomes</h1>
                        </div>
                        <div>

                        </div>
                    </> :
                    <>
                        <div>
                            <h3 className='font-medium text-2xl'>Olá, me chamo</h3>
                            <h1 className='font-bold text-6xl text-primary m-0' style={{ fontFamily: 'var(--title-font) !important' }}>Carlos Alberto Gomes</h1>
                            <h3 className='font-medium text-2xl'>Desenvolvedor Full-Stack</h3>
                            <Button label='Baixar Currículo' icon={<FaDownload />} iconPos='right' rounded className='px-4 py-3 gap-3 bg-primary border-none'></Button>
                        </div>
                        <div>
                            <img src={imgHome} alt='img Home' className='max-w-20rem mr-4' />
                        </div>
                    </>}
            </div>
        </Header>
    );
}

export default Home;