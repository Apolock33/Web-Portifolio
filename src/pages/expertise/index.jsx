import Header from "../../components/header";
import { Carousel } from 'primereact/carousel';
import { Button } from 'primereact/button';
import { Card } from 'primereact/card';
import { Dialog } from 'primereact/dialog';
import { GlobalContext } from "../../contexts/global/globalContext";
import { useContext, useState } from "react";
import '../../assets/css/general.css'

const Expertise = () => {
    const { mobile } = useContext(GlobalContext);
    const [selectedExpertise, setSelectedExpertise] = useState(null);
    const [dialogVisible, setDialogVisible] = useState(false);
    const [expertises] = useState([
        {
            id: 1,
            name: 'Telecall - Desenvolvedor Full-Stack',
            date: '05/2022 - 01/2024',
            expertise: 'Javascript/React.JS/C#/.NET',
            description: "Durante minhas formações tive a oportunidade de realizar estágio durante 1 ano e meio na empresa Telecall, onde pude me desenvolver ainda mais nas tecnologias Javascript, React.Js, C#/.Net e muito mais!",
            activities: {
                1: "Logo após esse período, fui efetivado na empresa como Desenvolvedor Full Stack.",
                2: "Desenvolvi e implementei novas features para o portal pessoal da empresa.",
                3: "Realizei consulta e geração de relatórios através de bancos de dados relacionais.",
                4: "Atendi diversos chamados e realizei a manutenção de features novas e antigas através do back-end da empresa.",
                5: "Participei de reuniões e sprints no modelo Scrum para alinhamento de demandas e dificuldades para cumpri-las.",
                6: "Participei da configuração de pipelines e deploy de diversas aplicações.",
                7: "Realizei o desenvolvimento de wireframes e layouts para uma nova versão do portal pessoal da empresa e realizei diversas reuniões para apresentação do front-end desenvolvido em MVP.",
                8: "Realizei treinamento de pessoal. Ensinei programação web full-stack para colegas mais novos na empresa.",
                9: "Participei do desenvolvimento de novas interfaces para o portal da empresa.",
                10: "Integrei APIs para consumir e exibir dados de maneira dinâmica.",
                11: "Colaborei com a equipe de design para melhorar a experiência do usuário.",
                12: "Testei e depurei o código para garantir a qualidade das funcionalidades entregues."
            }
        },
        {
            id: 2,
            name: 'Dadoteca - Desenvolvedor Front-End',
            date: '03/2024 - 06/2024',
            expertise: 'Javascript/React.JS/API Consumption',
            description: "Durante minha experiência na Dadoteca, pude aprimorar minhas habilidades em desenvolvimento front-end, focando em consumo de APIs e interface de usuário. Nessa experência profissional, fui contratado por periodo de projeto, na qual trabalhei no projeto DADOHEALTH, um portal voltado para gestão de clinicas em geral que possuia: agendamento de consultas, cadastro de pacientes, views por tipo de usuário e muito mais!",
            activities: {
                1: "Desenvolvimento de Front-End.",
                2: "Criação de Protótipos e Wireframes.",
                3: "Desenvolvimento de identidade visual.",
                4: "."
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

    const expertisesTemplate = (expertise) => {
        return (
            <Card
                title={<h1 className='font-bold text-2xl text-primary m-0 hover' style={{ fontFamily: 'var(--title-font) !important' }}>{expertise.name}</h1>}
                subTitle={expertise.date}
                footer={
                    <Button
                        label='Saiba Mais'
                        rounded
                        className="bg-primary border-none z-5 font-bold"
                        onClick={() => {
                            setSelectedExpertise(expertise);
                            setDialogVisible(true);
                        }}
                    />
                }
                className="m-2 text-center my-2 py-8 px-3 border-round-xl min-h-20rem"
                style={{ background: 'var(--theme-color) !important' }}
            />
        );
    };

    return (
        <Header>
            <div className='flex flex-column justify-content-center text-center my-6'>
                <h1 className='font-bold text-4xl text-primary m-0 text-center' style={{ fontFamily: 'var(--title-font) !important' }}>Experiências Profissionais</h1>
                <div className="flex justify-content-center">
                    <p style={{ maxWidth: '50rem'}}>Nomeei algumas de minhas experiências profissionais as quais fui capaz de, não só aprender muito como de aplicar ao máximo meus conhecimentos sobre a área de desenvolvimento full-stack</p>
                </div>
            </div>
            <div className='py-0'>
                <Carousel value={expertises} numScroll={1} numVisible={3} responsiveOptions={responsiveOptions} itemTemplate={expertisesTemplate} />
            </div>
            {selectedExpertise && (
                <Dialog
                    visible={dialogVisible}
                    style={{ width: `${mobile ? '90vw' : '50vw'}` }}
                    modal
                    onHide={() => setDialogVisible(false)}
                >
                    <div className="p-4">
                        <div className="mb-2">
                            <p className="text-md font-bold">{selectedExpertise.date}</p>
                            <h2 className="text-3xl font-bold">{selectedExpertise.name}</h2>
                        </div>
                        <div className="mb-3">
                            <h3 className="text-lg font-bold">Descrição</h3>
                            <p className="text-white">{selectedExpertise.description}</p>
                        </div>
                        <div>
                            <h3 className="text-lg font-bold">Atividades</h3>
                            <ul className="text-white">
                                {Object.values(selectedExpertise.activities).map((activity, index) => (
                                    <li key={index} className="mb-2">{activity}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </Dialog>
            )}
        </Header>
    );
}

export default Expertise;
