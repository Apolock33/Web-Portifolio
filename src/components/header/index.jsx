import React, { useContext, useState } from 'react';
import '../../assets/css/header.css';
import logo from '../../assets/imgs/logo.svg';
import { GlobalContext } from '../../contexts/global/globalContext';
import { Button } from 'primereact/button';
import { FiMenu } from 'react-icons/fi'
import { Sidebar } from 'primereact/sidebar';
import { useNavigate } from 'react-router-dom';


const Header = ({ children }) => {
    const navigate = useNavigate();
    const [openSideMenu, setOpenSideMenu] = useState(false);
    const {
        mobile
    } = useContext(GlobalContext)

    const navlinks = [
        {
            id: 1,
            label: 'Home',
            path: '/'
        },
        {
            id: 2,
            label: 'Sobre Mim',
            path: '/sobre'
        },
        {
            id: 3,
            label: 'Experiência Profissional',
            path: '/experiencia'
        },
        {
            id: 4,
            label: 'Formações',
            path: '/formacao'
        },
        {
            id: 5,
            label: 'Projetos',
            path: '/projetos'
        }
    ]

    return (
        <>
            <header className='p-3 flex justify-content-between align-items-center fixed top-0 left-0 right-0 z-5' style={{ backgroundColor: 'var(--theme-color)' }}>
                <div>
                    <img src={logo} alt="logo" className='w-7rem hover:cursor-pointer' onClick={() => navigate('/')} />
                </div>
                {!mobile ?
                    <>
                        <div>
                            <nav className='flex align-items-center justify-content-center'>
                                {navlinks.map((link) => (
                                    <Button text link key={link.id} label={link.label} className='text-white text-md font-medium hover:text-primary mr-2 bgHoverButtons p-2 no-underline' onClick={() => { navigate(link.path) }} />
                                ))}
                            </nav>
                        </div>
                        <div>
                            <Button rounded text label='Entre Em Contato' onClick={() => window.location.href = 'https://linktr.ee/carlosammgomes75'} className='border-primary text-white px-5 py-3 font-bold hover:bg-primary' />
                        </div>
                    </>
                    :
                    <Button text rounded icon={<FiMenu size={30} className='text-primary' />} onClick={() => setOpenSideMenu(true)} />
                }
                <Sidebar visible={openSideMenu} position="right" onHide={() => setOpenSideMenu(false)} className='bg-primary generalDiv h-full'>
                    <div className='flex flex-column row-gap-5'>
                        {navlinks.map((link) => (
                            <Button text key={link.id} label={link.label} className='text-white text-lg font-medium bgHoverButtons' onClick={() => {
                                setOpenSideMenu(false);
                                navigate(link.path)
                            }} />
                        ))}
                    </div>
                </Sidebar>
            </header>
            <section className={`generalDiv ${!mobile ? 'p-8' : 'py-8 px-2'}`}>
                {children}
            </section>
        </>
    );
}

export default Header;