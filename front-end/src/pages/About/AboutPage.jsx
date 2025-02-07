import Header from "../../components/Header";
import FeatureCard from "../../components/FeatureCard";
import TeamMember from "../../components/TeamMember";

import pcodesImage from "../../assets/team/RPOG.jpeg";
import paulImage from "../../assets/team/paul.jpg";
import swirriImage from "../../assets/team/swirri.jpg";
import ameliaImage from "../../assets/team/amelia.jpg";
import ashuImage from "../../assets/team/ashu.jpg";

const AboutPage = () => {
  const features = [
    {
      title: "Wide Variety",
      description: "Explore a diverse range of restaurants and cuisines.",
    },
    { title: "Easy to Use", description: "Order food with just a few clicks." },
    {
      title: "Fast Delivery",
      description: "Get your food delivered quickly and reliably.",
    },
  ];

  const teamMembers = [
    {
      name: "PCodes",
      role: "Developer",
      image: pcodesImage, // Use imported image
    },
    {
      name: "Asangana Paul",
      role: "Developer",
      image: paulImage, // Use imported image
    },
    {
      name: "Ateh Swirri",
      role: "Developer",
      image: swirriImage, // Use imported image
    },
    {
      name: "Amelia",
      role: "Developer",
      image: ameliaImage, // Use imported image
    },
    {
      name: "Lord Ashu",
      role: "Developer",
      image: ashuImage, // Use imported image
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header
        title="FudRush."
        subtitle="Delivering Happiness, One Meal at a Time."
      />

      <section className="container mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold text-center mb-6">Our Mission</h2>
        <p className="text-lg text-gray-700 text-center max-w-2xl mx-auto">
          At FudRush, we aim to connect food lovers with their favorite
          restaurants in the most convenient way possible.
        </p>
      </section>

      <section className="bg-gray-50 py-8">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-6">What We Offer</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold text-center mb-6">Meet the Team</h2>
        <div className="flex flex-wrap justify-center gap-6">
          {teamMembers.map((member, index) => (
            <TeamMember
              key={index}
              name={member.name}
              role={member.role}
              image={member.image}
            />
          ))}
        </div>
      </section>

      <section className="bg-gray-50 py-8">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-6">Get in Touch</h2>
          <p className="text-lg text-gray-700 text-center">
            Have questions? Reach out to us at{" "}
            <a
              href="mailto:support@fudrush.com"
              className="text-primary hover:underline"
            >
              support@fudrush.com
            </a>
            .
          </p>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
