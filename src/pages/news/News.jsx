import "./News.css";
import Navbreadcrum from "../../components/navbreadcrum/Navbreadcrum";
import IconTitle from "../../components/icontitle/IconTitle";
import NewsArticle from "../../components/newsarticle/NewsArticle";
import NewsGrid from "../../components/newsgrid/NewsGrid";
import NewsFeed from "../../components/newsfeed/NewsFeed";

const News = () => {
  return (
    <div>
      <Navbreadcrum text="Actualités" />
      <IconTitle
        iconpath="./newspaper.png"
        alt="newspaper icon"
        title="ACTUALITÉS"
      />
      <div className="content">
        <NewsGrid>
          <NewsArticle
            title="Nouveau Projet de Robotique"
            content="Notre équipe de robotique a lancé un nouveau projet passionnant qui vise à concevoir un robot autonome pour l'exploration sous-marine. Ce projet offre une opportunité unique aux étudiants d'acquérir des compétences en robotique avancée."
            image="./robotique_sous-marin.jpg"
          />

          <NewsArticle
            title="Séminaire sur l'Ingénierie Environnementale"
            content="Participez à notre séminaire sur l'ingénierie environnementale, où des experts du domaine discuteront des défis actuels liés à la préservation de l'environnement. Découvrez comment l'ingénierie peut contribuer à un avenir plus durable."
            image="./green-it.png"
          />

          <NewsArticle
            title="Inauguration du Nouveau Laboratoire de Nanotechnologie"
            content="Nous sommes fiers d'annoncer l'inauguration de notre tout nouveau laboratoire de nanotechnologie. Ce laboratoire de pointe est équipé des dernières technologies pour la recherche en nanosciences et nanotechnologies."
            image="./nanobots.jpg"
          />

          <NewsArticle
            title="Hackathon de l'École d'Ingénierie"
            content="Le hackathon annuel de notre école d'ingénierie est de retour ! C'est l'occasion parfaite pour les étudiants de collaborer, d'innover et de créer des solutions technologiques novatrices. Inscrivez-vous dès maintenant pour participer."
            image="./hackathon.png"
          />

          <NewsArticle
            title="Conférence sur l'Intelligence Artificielle"
            content="Rejoignez-nous pour une conférence de renommée mondiale sur l'intelligence artificielle. Des chercheurs et des praticiens de premier plan partageront leurs connaissances sur les avancées récentes en IA. Ne manquez pas cette opportunité d'en apprendre davantage sur ce domaine en pleine expansion."
            image="./ia.jpg"
          />
        </NewsGrid>
        <NewsFeed>
          <div>
            <h1>Nouveau Cours Avancé de Génie Logiciel</h1>
            <p>
              Nous sommes ravis d'annoncer le lancement de notre tout nouveau
              cours avancé de génie logiciel. Ce cours couvrira des sujets
              avancés tels que la conception de systèmes distribués et
              l'ingénierie de la qualité logicielle. Ne manquez pas cette
              opportunité d'approfondir vos compétences en génie logiciel.
            </p>
          </div>
          <div>
            <h1>Conférence sur les Technologies Émergentes</h1>
            <p>
              Rejoignez-nous pour notre prochaine conférence sur les
              technologies émergentes. Des experts de l'industrie discuteront
              des dernières avancées dans le domaine de l'ingénierie, notamment
              l'intelligence artificielle, l'Internet des objets et la
              robotique. Inscrivez-vous dès maintenant pour participer à cet
              événement passionnant.
            </p>
          </div>
          <div>
            <h1>Projet Innovant de Génie Civil Remporte un Prix</h1>
            <p>
              Nous sommes fiers d'annoncer que notre équipe d'étudiants en génie
              civil a remporté un prix prestigieux pour leur projet innovant de
              construction durable. Le projet a été salué pour son utilisation
              créative de matériaux recyclés et son impact positif sur
              l'environnement.
            </p>
          </div>
          <div>
            <h1>Atelier de Programmation en Python</h1>
            <p>
              Rejoignez-nous pour notre atelier de programmation en Python. Que
              vous soyez débutant ou que vous souhaitiez perfectionner vos
              compétences, cet atelier vous permettra d'apprendre les bases de
              la programmation en Python. Aucune expérience préalable n'est
              requise.
            </p>
          </div>
          <div>
            <h1>Nouveaux Professeurs Joignent l'Équipe d'Ingénierie</h1>
            <p>
              Nous sommes heureux d'accueillir deux nouveaux professeurs dans
              notre département d'ingénierie. Leurs domaines d'expertise
              couvrent la mécanique des fluides et la conception de systèmes
              électriques. Leur expérience enrichira notre programme éducatif et
              offrira de nouvelles opportunités de recherche aux étudiants.
            </p>
          </div>
        </NewsFeed>
      </div>
    </div>
  );
};

export default News;
