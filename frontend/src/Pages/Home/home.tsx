import { Button } from "../../components/ui/moving-border";
import { FlipWords } from "../../components/ui/flip-words";
import home from '/images/home.png';
import section2 from '/images/section2.jpeg';
import { InfiniteMovingCards } from "../../components/ui/infinite-moving-cards";
import { testimonials } from "../../data/testimonials";


import { FaTwitter, FaLinkedin } from 'react-icons/fa';
import { SocialMediaLinks } from "../../socialNetwork/socialNetwork";


//import MainMenu from "../../components/Main-menu";



export const Home  =() =>{

    const words = ["puissant", "efficace", "convivial"];

    const socialLinks = [
        {
          icon: FaTwitter,
          href: 'https://twitter.com/zisnad',
        },
        {
          icon: FaLinkedin,
          href: 'https://linkedin.com/in/zisnad',
        },
      ];
    

    return(
        <>
            
            <div className='container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 items-center py-7 '> 
            
                <div className='grid grid-col-1  gap-8 mt-8 lg:mt-0'>
                    <h1 className='font-bold text-2xl lg:text-5xl'>Bienvenue sur notre plateforme de gestion de tournois de football <br /><FlipWords words={words} />
                    </h1>

                    <p className=''>Bienvenue sur notre plateforme de gestion de tournois de football. Organisez et gérez vos tournois facilement avec notre outil intuitif et puissant.</p>

                    <div className='grid grid-flow-col items-center justify-start gap-4'>
                        {/* <Button className='py-8 mx-auto'>créer un tournoi</Button> */}
                        <Button
                            borderRadius="1.75rem"
                            className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800 text-xl">
                            Commencer
                        </Button> 
                        <div className="">
                            <SocialMediaLinks links={socialLinks} />
                        </div>
                    </div>
                </div>

                <div className='flex justify-center'>
                    {/* <img src={`${process.env.PUBLIC_URL}/images/home.png`} alt="" /> */}
                    <img src={home} alt="" />
                </div>
            </div>

            <div className=" container grid mx-auto w-[calc(100%-4rem)] py-32 items-center gap-8">
                <h1 className=" text-2xl max-w-xl justify-self-center text-center leading-relaxed font-bold">Bienvenue sur notre plateforme de gestion de tournois de football. Notre site vous aide à organiser et à gérer vos tournois de football facilement.</h1>

                <p className="max-w-4xl justify-self-center text-center">Bienvenue sur notre plateforme de gestion de tournois de football. Organisez et gérez vos tournois facilement avec notre outil intuitif et puissant.</p>
            </div>

            <div className="container mx-auto grid md:grid-cols-2 lg:grid-cols-2 gap-28 py-24" >

                <img src={section2} alt="" className="h-[500px] grid justify-self-end"/>
           
                <div className="grid justify-start gap-4">
                    <h1 className="text-2xl font-bold">Comment concevoir un tournoi de football</h1>

                    <div className="grid grid-cols-1 gap-4">
                        <h2 className="text-xl">Découvrez les meilleures pratiques pour organiser un tournoi réussi.</h2>
                        <p>Apprenez à planifier, organiser et gérer chaque aspect de votre tournoi de football avec nos conseils d'experts.</p>
                    </div>
                    <div className="grid grid-cols-1 gap-4">
                        <h2 className="text-xl">Utilisez notre plateforme pour simplifier la gestion.</h2>
                        <p>Notre outil vous aide à suivre les équipes, les scores et les horaires, tout en offrant une expérience utilisateur fluide et intuitive.</p>
                    </div>
                    <div className="grid grid-cols-1 gap-4">
                        <h2 className="text-xl">Rejoignez notre communauté de passionnés de football.</h2>
                        <p>Partagez vos expériences, obtenez des conseils et connectez-vous avec d'autres organisateurs de tournois à travers notre plateforme.</p>
                    </div>
                </div>
            </div>

            <div className="container mx-auto py-28">

                <h1 className="text-2xl font-bold">Les Matchs</h1>
                <InfiniteMovingCards
                    items={testimonials}
                    direction="right"
                    speed="slow"
                />
            </div>
        </>
    )
}