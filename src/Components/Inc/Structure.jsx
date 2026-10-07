import {
  BsShieldCheck,
  BsBullseye,
  BsBook,
  BsHeart,
  BsMortarboard,
  BsSend,
} from "react-icons/bs";
import bibOuverte from "../../image/bibOuverte.jpg";

const leftItems = [
  {
    icon: BsShieldCheck,
    title: "Le bon combat",
    text: "Lorem ipsum dolor sit amet consectetur adipiscing elit integer adipiscing erat",
  },
  {
    icon: BsBullseye,
    title: "Nos missions",
    text: "Lorem ipsum dolor sit amet consectetur adipiscing elit integer adipiscing erat",
  },
  {
    icon: BsBook,
    title: "La librairie",
    text: "Lorem ipsum dolor sit amet consectetur adipiscing elit integer adipiscing erat",
  },
];

const rightItems = [
  {
    icon: BsHeart,
    title: "Soutenir l'œuvre",
    text: "Lorem ipsum dolor sit amet consectetur adipiscing elit integer adipiscing erat",
  },
  {
    icon: BsMortarboard,
    title: "Formation",
    text: "Lorem ipsum dolor sit amet consectetur adipiscing elit integer adipiscing erat",
  },
  {
    icon: BsSend,
    title: "Envoyer mon combat",
    text: "Lorem ipsum dolor sit amet consectetur adipiscing elit integer adipiscing erat",
  },
];

function ServiceItem({ icon: Icon, title, text, link = "#" }) {
  return (
    <div className="d-flex align-items-start gap-3 mb-5">
      <Icon size={30} className="cimp flex-shrink-0" />
      <div>
        <h6 className="fw-bold text-uppercase mb-2">{title}</h6>
        <p className="text-secondary mb-3">{text}</p>
        <a href={link} className="btn btn-link btn-sm px-3">
          En savoir plus
        </a>
      </div>
    </div>
  );
}

export default function Services() {
  return (
    <section className="py-5">
      <div className="container">
        {/* Titre */}
        

        <div className="row align-items-center">
          {/* Colonne gauche */}
          <div className="col-lg-4">
            {leftItems.map((item) => (
              <ServiceItem key={item.title} {...item} />
            ))}
          </div>

          {/* Image centrale (cachée sur mobile) */}
          <div className="col-lg-4 d-none d-lg-block text-center">
            <img
              src={bibOuverte}
              alt="Illustration"
              className="rounded-circle border border-4"
              style={{
                width: "300px",
                height: "300px",
                objectFit: "cover",
              }}
            />
          </div>

          {/* Colonne droite */}
          <div className="col-lg-4">
            {rightItems.map((item) => (
              <ServiceItem key={item.title} {...item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}