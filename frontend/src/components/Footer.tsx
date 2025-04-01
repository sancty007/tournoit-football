import { ReactNode } from "react";



export const Footer  = ()=>{
    return(
        <footer className="container mx-auto py-8 space-y-6">

            <div className="grid grid-cols-1 lg:grid-cols-3">
                <div className="space-y-4">
                    <p className="hover:text-blue-500 font-bold">Contactez-nous :</p>
                    <p className="hover:text-blue-500">Adresse : 123 Rue des Stades, Ville, Pays</p>
                    <p className="hover:text-blue-500">Téléphone : +242 04 567 89 09</p>
                    <p className="hover:text-blue-500">Email : contact@footballtournoi.com</p>
                </div>
                <div className="space-y-4">
                    <p className="font-bold hover:text-blue-500">Liens Utiles :</p>
                    <ul className="space-y-2">
                        <FooterLink href="/about">À propos</FooterLink>
                        <FooterLink href="/teams">Équipes</FooterLink>
                        <FooterLink href="/players">Joueurs</FooterLink>
                        <FooterLink href="/tournaments">Tournois</FooterLink>
                        <FooterLink href="/contact">Contact</FooterLink>
                    </ul>
                </div>
                <div className="space-y-4">
                    <p className="hover:text-blue-500"><a>Politique de confidentialité</a></p>
                    <p className="hover:text-blue-500"><a >Conditions d'utilisation</a></p>
                </div>
            </div>

            <div className="hover:text-blue-500 text-center">
                <p>&copy; 2024 Football Tournoi. Tous droits réservés.</p>
            </div>
        </footer>

    )
}

type FooterLinkProps = {
    href: string;
    children: ReactNode;
};
const FooterLink:React.FC<FooterLinkProps> = ({ href, children }) => {
    return (
      <li>
        <a href={href} className="hover:text-blue-500">
          {children}
        </a>
      </li>
    );
  };