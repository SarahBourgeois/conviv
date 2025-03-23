import React, { useState } from 'react';
import { 
  FaCalendarAlt, FaEnvelope, FaChair, FaClipboardList, 
  FaUtensils, FaUserFriends, FaCheckCircle, FaShoppingBasket,
  FaPlus, FaSearch, FaEllipsisH, FaWineGlassAlt, FaChevronRight,
  FaClock, FaCalendarCheck, FaCalendarDay, FaTasks
} from 'react-icons/fa';

const HomePage = () => {
  const [activeTab, setActiveTab] = useState('features');

  // Exemples d'événements
  const upcomingEvents = [
    { id: 1, name: "Anniversaire de Sophie", date: "12 juin", guests: 28, image: "https://placehold.co/300x200/FF6B6B/FFFFFF?text=Anniversaire" },
    { id: 2, name: "Mariage Thomas & Julie", date: "24 juillet", guests: 120, image: "https://placehold.co/300x200/4ECDC4/FFFFFF?text=Mariage" },
    { id: 3, name: "Baptême de Lucas", date: "3 septembre", guests: 45, image: "https://placehold.co/300x200/FFD166/FFFFFF?text=Baptême" }
  ];

  // Exemples de fonctionnalités
  const features = [
    { 
      id: 1, 
      title: "Invitations élégantes", 
      icon: <FaEnvelope className="text-3xl mb-4 text-primary" />,
      description: "Créez et envoyez des invitations personnalisées par email ou SMS avec suivi des réponses en temps réel."
    },
    { 
      id: 2, 
      title: "Plans de table interactifs", 
      icon: <FaChair className="text-3xl mb-4 text-primary" />,
      description: "Organisez facilement les places de vos invités avec notre éditeur glisser-déposer intelligent."
    },
    { 
      id: 3, 
      title: "Gestion des spécificités", 
      icon: <FaUtensils className="text-3xl mb-4 text-primary" />,
      description: "Suivez les allergies, régimes alimentaires et préférences de chaque invité pour ne rien oublier."
    },
    { 
      id: 4, 
      title: "Répartition des achats", 
      icon: <FaShoppingBasket className="text-3xl mb-4 text-primary" />,
      description: "Créez des listes d'achats et répartissez les tâches entre les organisateurs."
    },
    { 
      id: 5, 
      title: "Planning avancé", 
      icon: <FaCalendarCheck className="text-3xl mb-4 text-primary" />,
      description: "Gérez l'agenda complet de votre événement, du jour J aux préparatifs, avec rappels automatiques."
    }
  ];

  // Exemples d'invités avec leurs spécificités
  const guestsSample = [
    { name: "Emma L.", allergies: ["Lactose", "Noix"], diet: "Végétarien" },
    { name: "Lucas M.", allergies: [], diet: "Standard", drink: "Sans alcool" },
    { name: "Marie R.", allergies: ["Gluten"], diet: "Standard" }
  ];

  // Exemple de planning
  const scheduleSample = [
    { time: "16:00", activity: "Arrivée des invités", responsible: "Hôtes" },
    { time: "16:30", activity: "Discours de bienvenue", responsible: "Jean" },
    { time: "17:00", activity: "Apéritif", responsible: "Service traiteur" },
    { time: "18:30", activity: "Dîner", responsible: "Service traiteur" },
    { time: "20:00", activity: "Gâteau d'anniversaire", responsible: "Sophie" },
    { time: "21:00", activity: "Soirée dansante", responsible: "DJ Paul" }
  ];

  return (
    <div className="min-h-screen bg-base-100">
      {/* Navigation */}
      <div className="navbar bg-base-100 border-b border-base-200 px-4 sm:px-8">
        <div className="flex-1">
          <div className="flex items-center">
            <div className="avatar placeholder mr-3">
              <div className="bg-primary text-primary-content rounded-full w-10">
                <span><FaCalendarAlt /></span>
              </div>
            </div>
            <a className="text-xl font-extrabold">Con<span className="text-primary">viv</span></a>
          </div>
        </div>
        <div className="flex-none gap-3">
          <button className="btn btn-primary btn-sm hidden sm:flex">Se connecter</button>
          <button className="btn btn-outline btn-sm">S'inscrire</button>
        </div>
      </div>

      {/* Hero section avec split design */}
      <div className="hero min-h-[70vh] bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse gap-8 px-4 md:px-8">
          {/* Partie droite: Aperçu de l'application */}
          <div className="mockup-window border bg-base-300 max-w-2xl w-full shadow-2xl">
            <div className="px-4 py-8 bg-base-200">
              <div className="tabs mb-4">
                <a className="tab tab-lifted">Mon événement</a>
                <a className="tab tab-lifted">Invités</a>
                <a className="tab tab-lifted tab-active">Planning</a>
                <a className="tab tab-lifted">Plan de table</a>
                <a className="tab tab-lifted">Achats</a>
              </div>
              <div className="bg-base-100 rounded-box p-4">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-bold">Anniversaire de Sophie - Planning</h3>
                  <button className="btn btn-primary btn-sm">Modifier</button>
                </div>
                
                <div className="flex justify-between items-center mb-2">
                  <div className="flex items-center">
                    <FaCalendarDay className="text-primary mr-2" />
                    <span className="font-bold">Jour J: 12 juin</span>
                  </div>
                  <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-sm btn-ghost m-1">Voir plus <FaEllipsisH /></label>
                    <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                      <li><a>Préparatifs</a></li>
                      <li><a>Après l'événement</a></li>
                    </ul>
                  </div>
                </div>

                <div className="overflow-x-auto">
                  <table className="table table-zebra w-full">
                    <thead>
                      <tr>
                        <th><FaClock /></th>
                        <th>Activité</th>
                        <th>Responsable</th>
                        <th>Statut</th>
                      </tr>
                    </thead>
                    <tbody>
                      {scheduleSample.map((item, index) => (
                        <tr key={index}>
                          <td className="font-medium">{item.time}</td>
                          <td>{item.activity}</td>
                          <td>{item.responsible}</td>
                          <td>
                            {index < 2 ? (
                              <div className="badge badge-success gap-1">
                                <FaCheckCircle size={12} /> Confirmé
                              </div>
                            ) : (
                              <div className="badge badge-outline gap-1">
                                En attente
                              </div>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                
                <div className="flex justify-end mt-4">
                  <button className="btn btn-sm btn-ghost">
                    <FaPlus size={12} className="mr-1" /> Ajouter une activité
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          {/* Partie gauche: Texte et CTA */}
          <div className="max-w-md">
            <h1 className="text-4xl sm:text-5xl font-bold leading-tight">
              Organisez vos événements sans stress
            </h1>
            <p className="py-6 text-lg">
              Conviv simplifie l'organisation de vos événements avec des invitations personnalisées, des plans de table interactifs, un planning détaillé et la gestion des spécificités de vos invités.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="btn btn-primary">Commencer</button>
              <button className="btn btn-outline">En savoir plus</button>
            </div>
            
            <div className="flex flex-wrap gap-2 mt-6">
              <div className="badge badge-outline p-3">Anniversaires</div>
              <div className="badge badge-outline p-3">Mariages</div>
              <div className="badge badge-outline p-3">Réunions familiales</div>
              <div className="badge badge-outline p-3">Séminaires</div>
              <div className="badge badge-outline p-3">Dîners</div>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs section */}
      <div className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="tabs tabs-boxed justify-center mb-12">
            <a 
              className={`tab ${activeTab === 'features' ? 'tab-active' : ''}`}
              onClick={() => setActiveTab('features')}
            >
              Fonctionnalités
            </a>
            <a 
              className={`tab ${activeTab === 'planning' ? 'tab-active' : ''}`}
              onClick={() => setActiveTab('planning')}
            >
              Organisation
            </a>
            <a 
              className={`tab ${activeTab === 'events' ? 'tab-active' : ''}`}
              onClick={() => setActiveTab('events')}
            >
              Événements
            </a>
          </div>

          {activeTab === 'features' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
              {features.map(feature => (
                <div key={feature.id} className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all">
                  <div className="card-body items-center text-center">
                    {feature.icon}
                    <h3 className="card-title">{feature.title}</h3>
                    <p>{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'planning' && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <img src="https://placehold.co/600x400/4ECDC4/FFFFFF?text=Planning+Détaillé" alt="Planning détaillé" className="rounded-xl shadow-2xl" />
              </div>
              <div>
                <h3 className="text-3xl font-bold mb-6">Planification simplifiée</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <FaCheckCircle className="text-primary mt-1" />
                    <div>
                      <h4 className="font-bold">Visualisez votre planning</h4>
                      <p>Organisez l'agenda complet de votre événement avec une vue chronologique claire</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <FaCheckCircle className="text-primary mt-1" />
                    <div>
                      <h4 className="font-bold">Gérez les spécificités</h4>
                      <p>Enregistrez allergies, régimes alimentaires et préférences pour chaque invité</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <FaCheckCircle className="text-primary mt-1" />
                    <div>
                      <h4 className="font-bold">Répartissez les tâches</h4>
                      <p>Créez des listes d'achats et assignez des responsabilités</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <FaCheckCircle className="text-primary mt-1" />
                    <div>
                      <h4 className="font-bold">Suivez les réponses</h4>
                      <p>Recevez des confirmations en temps réel et relancez automatiquement</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          )}

          {activeTab === 'events' && (
            <div>
              <h3 className="text-3xl font-bold text-center mb-8">Types d'événements</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {upcomingEvents.map(event => (
                  <div key={event.id} className="card bg-base-100 shadow-xl overflow-hidden hover:shadow-2xl transition-all">
                    <figure>
                      <img src={event.image} alt={event.name} className="w-full h-48 object-cover" />
                    </figure>
                    <div className="card-body">
                      <h4 className="card-title">{event.name}</h4>
                      <div className="flex justify-between items-center">
                        <div className="badge badge-outline">{event.date}</div>
                        <div className="badge badge-primary">{event.guests} invités</div>
                      </div>
                      <p className="mt-2">Parfait pour ce type d'événement avec Conviv</p>
                      <div className="card-actions justify-end mt-4">
                        <button className="btn btn-primary btn-sm">Exemple</button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Section Planning */}
      <div className="py-16 px-4 bg-base-200">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold mb-6">Planning intelligent</h2>
              <p className="text-lg mb-6">Ne laissez rien au hasard! Organisez minutieusement le déroulement de votre événement, des préparatifs aux derniers détails.</p>
              
              <ul className="space-y-4">
                <li className="flex items-center gap-2">
                  <FaChevronRight className="text-primary" />
                  <span>Timeline complète avec vue chronologique</span>
                </li>
                <li className="flex items-center gap-2">
                  <FaChevronRight className="text-primary" />
                  <span>Rappels automatiques pour les organisateurs</span>
                </li>
                <li className="flex items-center gap-2">
                  <FaChevronRight className="text-primary" />
                  <span>Attribution des responsabilités à l'équipe</span>
                </li>
                <li className="flex items-center gap-2">
                  <FaChevronRight className="text-primary" />
                  <span>Synchronisation avec votre calendrier personnel</span>
                </li>
                <li className="flex items-center gap-2">
                  <FaChevronRight className="text-primary" />
                  <span>Planification des préparatifs en amont</span>
                </li>
              </ul>
              
              <div className="mt-8">
                <button className="btn btn-primary">Explorer le planning</button>
              </div>
            </div>
            
            <div className="lg:w-1/2">
              <div className="card bg-base-100 shadow-xl">
                <div className="card-body">
                  <h3 className="card-title flex items-center gap-2 mb-4">
                    <FaCalendarCheck className="text-primary" /> 
                    Planning d'événement
                  </h3>
                  
                  <div className="flex flex-col">
                    <div className="grid grid-cols-[120px_1fr] gap-4">
                      <div className="font-bold text-right text-primary">3 semaines avant</div>
                      <div className="border-l-2 border-primary pl-4 pb-6">
                        <div className="font-bold">Envoyer les invitations</div>
                        <p className="text-sm opacity-70">Prévoir un délai de réponse de 2 semaines</p>
                        <div className="badge badge-success mt-1">Terminé</div>
                      </div>
                      
                      <div className="font-bold text-right text-primary">2 semaines avant</div>
                      <div className="border-l-2 border-primary pl-4 pb-6">
                        <div className="font-bold">Finaliser la liste des invités</div>
                        <p className="text-sm opacity-70">Relancer les personnes qui n'ont pas répondu</p>
                        <div className="badge badge-outline mt-1">En cours</div>
                      </div>
                      
                      <div className="font-bold text-right text-primary">1 semaine avant</div>
                      <div className="border-l-2 border-primary pl-4 pb-6">
                        <div className="font-bold">Confirmer le traiteur</div>
                        <p className="text-sm opacity-70">Préciser les allergies et régimes alimentaires</p>
                        <div className="badge badge-outline mt-1">À faire</div>
                      </div>
                      
                      <div className="font-bold text-right text-primary">Jour J</div>
                      <div className="border-l-2 border-primary pl-4">
                        <div className="font-bold">Planning détaillé de la journée</div>
                        <p className="text-sm opacity-70">Minutage précis des activités et responsables</p>
                        <div className="badge badge-outline mt-1">À faire</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section Process */}
      <div className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Comment ça marche</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card bg-base-100 hover:shadow-xl transition-shadow">
              <div className="card-body items-center text-center">
                <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center mb-4">
                  <span className="text-xl font-bold text-primary-content">1</span>
                </div>
                <h3 className="card-title">Créez votre événement</h3>
                <p>Définissez la date, le lieu et le type d'événement que vous organisez.</p>
              </div>
            </div>
            
            <div className="card bg-base-100 hover:shadow-xl transition-shadow">
              <div className="card-body items-center text-center">
                <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center mb-4">
                  <span className="text-xl font-bold text-primary-content">2</span>
                </div>
                <h3 className="card-title">Invitez vos convives</h3>
                <p>Envoyez des invitations personnalisées et collectez les réponses automatiquement.</p>
              </div>
            </div>
            
            <div className="card bg-base-100 hover:shadow-xl transition-shadow">
              <div className="card-body items-center text-center">
                <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center mb-4">
                  <span className="text-xl font-bold text-primary-content">3</span>
                </div>
                <h3 className="card-title">Gérez les détails</h3>
                <p>Planning, tables, tâches et suivi des allergies en un seul endroit.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section Plans de Table */}
      <div className="py-16 px-4 bg-base-200">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold mb-6">Plans de table interactifs</h2>
              <p className="text-lg mb-6">Créez facilement des plans de table personnalisés en fonction de vos invités et de l'espace disponible.</p>
              
              <ul className="space-y-4">
                <li className="flex items-center gap-2">
                  <FaChevronRight className="text-primary" />
                  <span>Plusieurs dispositions prédéfinies</span>
                </li>
                <li className="flex items-center gap-2">
                  <FaChevronRight className="text-primary" />
                  <span>Glisser-déposer pour placer les invités</span>
                </li>
                <li className="flex items-center gap-2">
                  <FaChevronRight className="text-primary" />
                  <span>Alertes automatiques pour les incompatibilités</span>
                </li>
                <li className="flex items-center gap-2">
                  <FaChevronRight className="text-primary" />
                  <span>Suggestions intelligentes basées sur les relations</span>
                </li>
              </ul>
              
              <div className="mt-8">
                <button className="btn btn-primary">Essayer maintenant</button>
              </div>
            </div>
            
            <div className="lg:w-1/2">
              <img 
                src="https://placehold.co/600x400/5D5FEF/FFFFFF?text=Plan+de+Table+Interactif" 
                alt="Plan de table interactif" 
                className="rounded-xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Section Témoignages */}
      <div className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12">Ce qu'en disent nos utilisateurs</h2>
          
          <div className="carousel w-full">
            <div className="carousel-item w-full">
              <div className="card bg-base-100 shadow-xl mx-auto max-w-2xl">
                <div className="card-body items-center text-center">
                  <div className="rating rating-lg mb-4">
                    <input type="radio" name="rating-1" className="mask mask-star-2 bg-orange-400" checked readOnly />
                    <input type="radio" name="rating-1" className="mask mask-star-2 bg-orange-400" checked readOnly />
                    <input type="radio" name="rating-1" className="mask mask-star-2 bg-orange-400" checked readOnly />
                    <input type="radio" name="rating-1" className="mask mask-star-2 bg-orange-400" checked readOnly />
                    <input type="radio" name="rating-1" className="mask mask-star-2 bg-orange-400" checked readOnly />
                  </div>
                  <p className="text-2xl italic">"J'ai organisé mon mariage avec Conviv et cela a été un vrai soulagement. Le planning détaillé, la gestion des allergies et le plan de table nous ont fait gagner tellement de temps!"</p>
                  <div className="mt-6">
                    <h3 className="font-bold">Marie L.</h3>
                    <p>Mariage de 150 personnes</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 px-4 bg-primary text-primary-content">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Prêt à organiser votre prochain événement?</h2>
          <p className="text-xl mb-8 opacity-90">Rejoignez des milliers d'organisateurs qui ont simplifié leur vie avec Conviv</p>
          <button className="btn btn-lg glass">Commencer gratuitement</button>
        </div>
      </div>

      {/* Footer */}
      <footer className="footer p-10 bg-neutral text-neutral-content">
        <div>
          <span className="footer-title">Conviv</span> 
          <p>L'organisation d'événements simplifiée<br />depuis 2023</p>
        </div> 
        <div>
          <span className="footer-title">Produit</span> 
          <a className="link link-hover">Invitations</a> 
          <a className="link link-hover">Planning</a>
          <a className="link link-hover">Plans de table</a> 
          <a className="link link-hover">Gestion d'invités</a>
          <a className="link link-hover">Listes d'achats</a>
        </div> 
        <div>
          <span className="footer-title">Événements</span> 
          <a className="link link-hover">Mariages</a> 
          <a className="link link-hover">Anniversaires</a> 
          <a className="link link-hover">Séminaires</a>
          <a className="link link-hover">Réunions</a>
        </div> 
        <div>
          <span className="footer-title">Légal</span> 
          <a className="link link-hover">Conditions</a> 
          <a className="link link-hover">Confidentialité</a>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;