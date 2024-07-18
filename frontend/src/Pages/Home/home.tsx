import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useViewportScroll, motion } from 'framer-motion';
import { Button } from "../../components/ui/moving-border";
import { FlipWords } from "../../components/ui/flip-words";
import homeImage from '/images/home.png';
import section2Image from '/images/section2.jpeg';

import { FaTwitter, FaLinkedin,FaCalendarAlt, FaTrophy } from 'react-icons/fa';
import { IoIosFootball } from "react-icons/io";
import { SocialMediaLinks } from "../../socialNetwork/socialNetwork";
import { InfiniteMovingCards } from '../../components/ui/infinite-moving-cards';
import { testimonials } from '../../data/testimonials';
import { Card } from '../../components/ui/card';

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
            Bienvenueee sur notre plateforme de gestion de tournois de football <br /><FlipWords words={words} />
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
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

      <div className="container grid mx-auto w-[calc(100%-4rem)] py-32 items-center gap-8">
        <h1
          className="text-2xl max-w-xl justify-self-center text-center leading-relaxed font-bold"
        >
          Bienvenue sur notre plateforme de gestion de tournois de football. Notre site vous aide à organiser et à gérer vos tournois de football facilement.
        </h1>

        <p
          className="max-w-4xl justify-self-center text-center"
        >
          Bienvenue sur notre plateforme de gestion de tournois de football. Organisez et gérez vos tournois facilement avec notre outil intuitif et puissant.
        </p>
      </div>

      <div className="container mx-auto py-24">
        <h2 className="text-2xl font-bold text-center mb-8">Caractéristiques principales</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="p-4">
            <IoIosFootball  size={48} className="mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Gestion des équipes</h3>
            <p>Créez et gérez facilement les équipes participantes.</p>
          </div>
          <div className="p-4">
            <FaCalendarAlt size={48} className="mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Planification des matchs</h3>
            <p>Planifiez les matchs et suivez les scores en temps réel.</p>
          </div>
          <div className="p-4">
            <FaTrophy size={48} className="mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Classement des équipes</h3>
            <p>Consultez les classements et les statistiques des équipes.</p>
          </div>
        </div>
      </div>

      <div className="container mx-auto grid md:grid-cols-2 lg:grid-cols-2 gap-28 py-24" >
        <img
          src={section2Image}
          alt="Section 2"
          className="h-[500px] grid justify-self-end"
        />
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

      <Card className="container mx-auto py-16 text-center bg-blue-950 text-white">
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
            <h3 className="text-3xl font-bold">500+</h3>
            <p>Tournois organisés</p>
          </div>
          <div className="p-4">
            <h3 className="text-3xl font-bold">1000+</h3>
            <p>Équipes inscrites</p>
          </div>
          <div className="p-4">
            <h3 className="text-3xl font-bold">5000+</h3>
            <p>Matches joués</p>
          </div>
          <div className="p-4">
            <h3 className="text-3xl font-bold">10000+</h3>
            <p>Utilisateurs actifs</p>
          </div>
        </div>
      </Card>
    </>
  );
};
