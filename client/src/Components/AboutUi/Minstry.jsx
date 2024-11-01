import React from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaTwitter, FaGithub, FaInstagram, FaFacebook } from 'react-icons/fa';
import Menu from '../Helpers/Menu';
import QuickNav from '../Helpers/QuickNav';
import Footer from '../Helpers/Footer';

const TeamMember = ({ name, image }) => {
    return (
        <motion.div
            className="relative overflow-hidden rounded-lg shadow-lg"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
        >
            <img
                src={image}
                alt={name}
                className="w-full h-64 object-cover"
            />

            <motion.div
                initial={{ opacity: 0, y: 60 }}
                whileHover={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent flex flex-col justify-end p-4"
            >
                <h3 className="text-white font-bold text-lg mb-1">{name}</h3>


                <motion.div

                    className="flex gap-4"
                >
                    <motion.a
                        whileHover={{ scale: 1.2, y: -2 }}
                        className="text-white hover:text-blue-400 cursor-pointer transition-colors"
                    >
                        <FaLinkedin size={22} />
                    </motion.a>
                    <motion.a
                        whileHover={{ scale: 1.2, y: -2 }}
                        className="text-white hover:text-blue-400 cursor-pointer transition-colors"
                    >
                        <FaTwitter size={22} />
                    </motion.a>
                    <motion.a
                        whileHover={{ scale: 1.2, y: -2 }}
                        className="text-white hover:text-pink-400 cursor-pointer transition-colors"
                    >
                        <FaInstagram size={22} />
                    </motion.a>
                    <motion.a
                        whileHover={{ scale: 1.2, y: -2 }}
                        className="text-white hover:text-blue-600 cursor-pointer transition-colors"
                    >
                        <FaFacebook size={22} />
                    </motion.a>
                </motion.div>
            </motion.div>
        </motion.div>
    );
};

const Minstry = () => {
    const teamMembers = [
        {
            name: "Chinwe Nwabude",

            image: "https://media.istockphoto.com/id/1364388460/photo/cheerful-black-teacher-standing-outside-education-building.webp?a=1&b=1&s=612x612&w=0&k=20&c=iPZfeQn-JKIokh4o98C-MmLRJtVgJCXkU_1D894xo3M="
        },
        {
            name: "Dr. Eucharia Nnawulezi",

            image: "/api/placeholder/400/400"
        },
        {
            name: "Tommy Chuke",

            image: "/api/placeholder/400/400"
        },
        {
            name: "OGE NWITOR HEAD OF INTERCESSORY MINISTRY",

            image: "/api/placeholder/400/400"
        },
        {
            name: "TONY ONUAKUPA TO FR. EBUBE MUONSO",

            image: "/api/placeholder/400/400"
        },
        {
            name: "Dr Lady Schola Ogomaka P.R.O and Publicity Secretary",
      role: "Sales Director",
            image: "/api/placeholder/400/400"
        },
        {
            name: "Rev. Sr. Maria Paracleta Anekwe Spiritual Counselor",
     
      image: "/api/placeholder/400/400"
    },
        {
            name: "UCHE ENENWALI ATTORNEY/ BOARD SECRETAR",
     
      image: "/api/placeholder/400/400"
    },
    {
        name: "Dr. Lorreta Oguonu",

        image: "/api/placeholder/400/400"
    },
    {
        name: "Callista Ugorji-Ikwechegh Head of Evangelism",
       
        image: "/api/placeholder/400/400"
      },
    {
        name: "Dr. Peter Oraekwe Head of Media and Security",
       
        image: "/api/placeholder/400/400"
      },

     {
        name: "STEWARD, DEPUTY CHIEF",
       
        image: "/api/placeholder/400/400"
      }
  ];

return (

    <>
        <Menu />
        <QuickNav />

        <div className="container pad1 py-16 bg-gray-50">
            <h2 className="text-4xl font-bold text-center mb-4">Ministry Officials</h2>
            <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
                Meet our talented team of professionals who make the magic happen
            </p>
            <motion.div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                {teamMembers.map((member, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                        <TeamMember {...member} />
                    </motion.div>
                ))}
            </motion.div>
        </div>

        <Footer />

    </>
);
};

export default Minstry;