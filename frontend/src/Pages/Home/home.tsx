import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useViewportScroll, motion } from 'framer-motion';
import { Button } from "../../components/ui/moving-border";
import { FlipWords } from "../../components/ui/flip-words";
import homeImage from '/images/home.png';
import section2Image from '/images/section2.jpeg';

import { FaTwitter, FaLinkedin,FaCalendarAlt, FaTrophy} from 'react-icons/fa';
import { IoIosFootball } from "react-icons/io";
import { IoFootballSharp } from "react-icons/io5";

import { SocialMediaLinks } from "../../socialNetwork/socialNetwork";
import { InfiniteMovingCards } from '../../components/ui/infinite-moving-cards';
import { testimonials } from '../../data/testimonials';
import { Card } from '../../components/ui/card';
import { CardBody, CardContainer, CardItem } from '../../components/ui/3d-card';
import NumberTicker from '../../components/magicui/number-ticker';



export const Home = () => {
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

  const { scrollYProgress } = useViewportScroll();
  const navigate = useNavigate();

  useEffect(() => {
    const controls = {
      animate: {
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.5,
        },
      },
      initial: {
        opacity: 0,
        y: 50,
      },
    };

    const scrollYProgressValue = scrollYProgress.get();

    if (scrollYProgressValue > 0.3) {
      controls.animate = {
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.5,
        },
      };
    } else {
      controls.initial = {
        opacity: 0,
        y: 50,
      };
    }

  }, [scrollYProgress]);

  const handleSwitchToSignIn = () => {
    navigate('/signup');
  };

  return (
    <>
      <div className='container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 items-center py-7'>
        <div className='grid grid-col-1 gap-8 mt-8 lg:mt-0'>
          <motion.h1
            className='font-bold text-2xl lg:text-5xl'
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Bienvenue sur notre plateforme de gestion de tournois de football <br /><FlipWords words={words} />
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className='text-xl'
          >
            Bienvenue sur notre plateforme de gestion de tournois de football. Organisez et gérez vos tournois facilement avec notre outil intuitif et puissant.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className='grid grid-flow-col items-center justify-start gap-4'
          >
            <Button
              borderRadius="1.75rem"
              onClick={handleSwitchToSignIn}
              className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800 text-xl">
              Commencer
            </Button>
            <div className="">
              <SocialMediaLinks links={socialLinks} />
            </div>
          </motion.div>
        </div>

        <motion.div
          className='relative flex justify-center p-8'
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <div className="relative z-10">
            <img src={homeImage} alt="Accueil" />
          </div>
        </motion.div>
      </div>

      <div className="container grid mx-auto w-[calc(100%-4rem)] items-center gap-8 lg:py-32 ">
        <h1
          className="text-xl max-w-xl text- justify-self-center leading-relaxed font-bold lg:text-2xl lg:text-center "
        >
          Bienvenue sur notre plateforme de gestion de tournois de football.
        </h1>

        <div className='flex justify-center'>
          <p
            className="text-center"
          >
            Explorez notre outil innovant pour organiser et administrer vos tournois de football de manière simple et efficace. Profitez d'une expérience utilisateur optimisée pour vous accompagner dans la gestion de vos événements sportifs.
          
          </p>
        </div>

      </div>

      <div className="container mx-auto p-8">
        <h2 className="text-2xl font-bold text-center mb-8">Caractéristiques principales</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <Card className="p-4 shadow-md lg:rounded-none">
            <IoIosFootball  size={48} className="mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Gestion des équipes</h3>
            <p>Créez et gérez facilement les équipes participantes.</p>
          </Card>
          <Card className="p-4 shadow-xl lg:rounded-none">
            <FaCalendarAlt size={48} className="mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Planification des matchs</h3>
            <p>Planifiez les matchs et suivez les scores en temps réel.</p>
          </Card>
          <Card className="p-4 shadow-md lg:rounded-none">
            <FaTrophy size={48} className="mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Classement des équipes</h3>
            <p>Consultez les classements et les statistiques des équipes.</p>
          </Card>
        </div>
      </div>

      <div className="container mx-auto grid md:grid-cols-2 lg:grid-cols-2  py-24">
        {/* <img
          src={section2Image}
          alt="Section 2"
          className="h-[500px] grid justify-self-end"
        />
         */}
        <CardContainer className="inter-var">
          <CardBody className="relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1]  dark:border-white/[0.2]  w-auto sm:w-[30rem] h-auto rounded-xl p-6 ">
           
            <CardItem translateZ="100" className="w-full mt-4">
              <img
                src={section2Image}
                alt="Section 2"
                className="h-[500px] grid justify-self-end"
              />
            </CardItem>
            
          </CardBody>
        </CardContainer>

        <div className="grid justify-start gap-4 ">
          <div className="flex items-center ">
            <h1 className="text-2xl font-bold">
              Comment concevoir un tournoi de football
            </h1>
          </div>
          <div className="grid grid-cols-1 gap-4">
            <div className="flex items-center ">
              <IoFootballSharp className="text-3xl mr-2 lg:text-xl" />
              <h2 className="text-xl">Découvrez les meilleures pratiques pour organiser un tournoi réussi.</h2>
            </div>
            <p>Apprenez à planifier, organiser et gérer chaque aspect de votre tournoi de football avec nos conseils d'experts.</p>
          </div>
          <div className="grid grid-cols-1 gap-4">
            <div className="flex items-center">
              <IoFootballSharp className="text-3xl mr-2 lg:text-xl" />
              <h2 className="text-xl">Utilisez notre plateforme pour simplifier la gestion.</h2>
            </div>
            <p>Notre outil vous aide à suivre les équipes, les scores et les horaires, tout en offrant une expérience utilisateur fluide et intuitive.</p>
          </div>
          <div className="grid grid-cols-1 gap-4">
            <div className="flex items-center">
              <IoFootballSharp className="text-3xl mr-2 lg:text-xl" />
              <h2 className="text-xl">Rejoignez notre communauté de passionnés de football.</h2>
            </div>
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

      <Card className="container mx-auto py-16 text-center bg-blue-950 text-white shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Prêt à organiser votre tournoi ?</h2>
        <p className="mb-8">Inscrivez-vous dès maintenant et commencez à utiliser notre plateforme pour gérer vos tournois de football.</p>
        <Button
          borderRadius="1.75rem"
          onClick={handleSwitchToSignIn}
          className="bg-white text-blue-600 border-white text-xl"
        >
          Commencer
        </Button>
      </Card>

      <Card className="container mx-auto py-24 mt-4 ">
        <h2 className="text-2xl font-bold text-center mb-8">Nos réalisations</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
          <div className="p-4">
            {/* <h3 className="text-3xl font-bold">500+</h3>
            */}
            <h3 className='text-3xl items-center font-bold'><NumberTicker value={500} className='text-3xl font-bold'/>+</h3>
            <p>Tournois organisés</p> 
          </div>
          <div className="p-4">
            <h3 className='text-3xl items-center font-bold'><NumberTicker value={1000} className='text-3xl font-bold'/>+</h3>
            <p>Équipes inscrites</p>
          </div>
          <div className="p-4">
            <h3 className='text-3xl items-center font-bold'><NumberTicker value={5000} className='text-3xl font-bold'/>+</h3>
            <p>Matches joués</p>
          </div>
          <div className="p-4">
            <h3 className='text-3xl items-center font-bold'><NumberTicker value={10000} className='text-3xl font-bold'/>+</h3>
            <p>Utilisateurs actifs</p>
          </div>
        </div>
      </Card>
    </>
  );
};
