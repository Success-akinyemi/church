import { motion } from 'framer-motion';
import { FaHands, FaCross, FaArrowRight } from 'react-icons/fa';
import { RiHeartLine } from 'react-icons/ri';

const ChurchWebsite = () => {
  const campaigns = [
    {
      title: "National Convention Houston",
      description: "Join us for a transformative experience of worship and fellowship",
      date: "June 15-18, 2024",
      image: "https://youtu.be/UN6JMzTN2oQ",
      tag: "Featured Event"
    },
    {
      title: "Connect & Pray Online",
      description: "Unite in prayer with believers worldwide",
      date: "Daily Sessions",
      image: "https://youtu.be/UN6JMzTN2oQ",
      tag: "Online Prayer"
    },
    {
      title: "Daily Prayer Sessions",
      description: "Strengthen your spiritual journey through daily communion",
      date: "Every Day",
      image: "https://youtu.be/UN6JMzTN2oQ",
      tag: "Spiritual Growth"
    }
  ];

  const pillars = [
    {
      title: "Commitments",
      description: "Dedicated to serving our community through faith and action",
      icon: <FaHands className="w-12 h-12" />,
      overlayText: "Developing a spirit filled Church\nRaising men and women with integrity\nReleasing men with their gifts and callings\nBuilding rewarding relationships"
    },
    {
      title: "Core Values",
      description: "Guided by love, compassion, and spiritual growth",
      icon: <RiHeartLine className="w-12 h-12" />,
      overlayText: "Excellence\nAccountability\nAvailability\nIntegrity\nHonor\nTeam work\nDiscipline"
    },
    {
      title: "Focus",
      description: "Centered on worship, fellowship, and ministry",
      icon: <FaCross className="w-12 h-12" />,
      overlayText: "Being the best at what we do\nOperating the business of God ethically,\nprofessionally and efficiently"
    }
  ];

  const Campaign = ({ campaign, index }) => {
    return (
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: index * 0.2 }}
        className="group relative overflow-hidden rounded-2xl bg-white shadow-xl"
      >
        {/* Creative Image Container */}
        <div className="relative aspect-w-4 aspect-h-5 overflow-hidden">
          {/* Background Pattern */}
          <motion.div
            initial={{ opacity: 0.3 }}
            animate={{ opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="absolute inset-0 bg-gradient-to-br from-[#9B111E]/20 to-transparent z-10"
          />
          
          {/* Main Image */}
          <motion.div
            whileHover={{ scale: 1.15 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative w-full h-full"
          >
            <video
              src={campaign.image}
             muted
              className="w-full  object-cover brightness-90"
            >
            </video> 
          </motion.div>

          {/* Overlay Elements */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 bg-gradient-to-t from-[#9B111E] via-[#9B111E]/80 to-transparent z-20"
          >
            {/* Event Tag */}
            <motion.div
              initial={{ x: -100 }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.4 }}
              className="absolute top-4 left-0 bg-white py-1 px-4 rounded-r-full shadow-lg"
            >
              <span className="text-[#9B111E] text-sm font-semibold">{campaign.tag}</span>
            </motion.div>

            {/* Content Container */}
            <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileHover={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="space-y-3"
              >
                <p className="text-[#FFFDF9]/80 text-sm font-medium">{campaign.date}</p>
                <h3 className="text-[#FFFDF9] text-2xl font-bold">{campaign.title}</h3>
                <p className="text-[#FFFDF9]/90 text-sm leading-relaxed">
                  {campaign.description}
                </p>
                <motion.button
                  whileHover={{ x: 5 }}
                  className="flex items-center space-x-2 text-[#FFFDF9] text-sm font-medium mt-4"
                >
                  <span>Learn More</span>
                  <FaArrowRight className="w-4 h-4" />
                </motion.button>
              </motion.div>
            </div>
          </motion.div>

          {/* Decorative Elements */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileHover={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-white/10 to-transparent rounded-bl-full z-10 pointer-events-none"
          />
        </div>
      </motion.div>
    );
  };

  const Pillar = ({ pillar, index }) => {
    return (
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: index * 0.2 }}
        className="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-500"
      >
        <div className="p-8 relative z-10">
          <motion.div 
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="mb-6"
          >
            <div className="mx-auto w-24 h-24 bg-[#9B111E]/10 rounded-full flex items-center justify-center text-[#9B111E]">
              {pillar.icon}
            </div>
          </motion.div>
          <motion.h3 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-2xl font-bold mb-4 text-[#9B111E] text-center"
          >
            {pillar.title}
          </motion.h3>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-gray-600 text-center"
          >
            {pillar.description}
          </motion.p>
        </div>
        
        <motion.div 
          initial={{ y: "100%" }}
          whileHover={{ y: 0 }}
          transition={{ type: "tween", duration: 0.4, ease: "easeInOut" }}
          className="absolute inset-0 bg-[#9B111E] text-[#FFFDF9] z-20"
        >
          <motion.div 
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="p-8 h-full flex items-center justify-center"
          >
            <p className="text-sm text-center whitespace-pre-line leading-relaxed">
              {pillar.overlayText}
            </p>
          </motion.div>
        </motion.div>

        {/* Background Pattern */}
        <motion.div
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 0.1 }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 bg-gradient-to-br from-[#9B111E] to-transparent z-0"
        />
      </motion.div>
    );
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen bg-[#FFFDF9] bg-gradient-to-b from-#9B111E to-white"
    >
      {/* Campaigns Section */}
      <section className="py-24 pad1 bg-gradient-to-b from-[#d05864] to-white">
        <div className="container mx-auto px-6">
          {/**
           * 
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center space-y-4 mb-16"
          >
            <h2 className="text-4xl font-bold text-[#9B111E]">Our Campaigns</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Join us in our mission to spread love, faith, and community through these transformative events
            </p>
          </motion.div>
           */}

          <motion.div 
            initial="initial"
            animate="animate"
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {campaigns.map((campaign, index) => (
              <Campaign key={index} campaign={campaign} index={index} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Pillars Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="py-24 bg-[#9B111E]/5"
      >
        <div className="container mx-auto px-6 lg:px-[5rem]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center space-y-4 mb-16"
          >
            <h2 className="text-4xl font-bold text-[#9B111E]">Our Three Pillars</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              The foundational principles that guide our ministry and service
            </p>
          </motion.div>

          <motion.div 
            initial="initial"
            animate="animate"
            className="grid grid-cols-1 md:grid-cols-3 gap-12"
          >
            {pillars.map((pillar, index) => (
              <Pillar key={index} pillar={pillar} index={index} />
            ))}
          </motion.div>
        </div>
      </motion.section>
    </motion.div>
  );
};

export default ChurchWebsite;