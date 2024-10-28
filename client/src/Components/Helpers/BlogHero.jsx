import React from 'react';

const BlogCard = ({ image, title, description }) => (
  <div className="group bg-white rounded-xl overflow-hidden shadow-lg transition-transform duration-300 hover:-translate-y-2">
    <div className="relative overflow-hidden h-64">
      <img 
        src={image} 
        alt={title}
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
    </div>
    <div className="p-6">
      <h3 className="text-2xl font-bold mb-3 text-gray-800 group-hover:text-main-color transition-colors">
        {title}
      </h3>
      <p className="text-gray-600 line-clamp-3 mb-4">
        {description}
      </p>
      <div className="flex items-center justify-between">
        <button className="text-main-color-dark font-semibold hover:text-main-color transition-colors flex items-center gap-2">
          READ MORE 
          <svg 
            className="w-4 h-4 group-hover:translate-x-1 transition-transform" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  </div>
);

const BlogSection = () => {
  const blogs = [
    {
      image: "/api/placeholder/800/600",
      title: "The Sacred Mystery of the Eucharist: Exploring Its Meaning and Reverence",
      description: "Introduction: The Eucharist, also known as Holy Communion, stands as the pinnacle of Catholic worship, embodying the profound mystery of Christ's presence in the consecrated bread and wine. From ancient rituals..."
    },
    {
      image: "/api/placeholder/800/600",
      title: "The Sacred Tradition of Holy Mass: Exploring Its Significance and Practice",
      description: "Introduction: Holy Mass stands as the cornerstone of Catholic worship, embodying the sacred tradition of commemorating Christ's sacrifice and experiencing the real presence of the Eucharist. From the ancient rituals..."
    },
    {
      image: "/api/placeholder/800/600",
      title: "Exploring the Power of Miracles in Christian Faith: A Comprehensive Guide",
      description: "Introduction: Miracles have always held a profound significance in Christian theology, serving as divine interventions that defy natural laws and showcase the power of God. From biblical accounts of Jesus..."
    }
  ];

  return (
    <section className="py-16 px-4 lg:px-[5rem] bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold text-gray-900 mb-4">BLOGS</h2>
          <div className="w-24 h-1 bg-yellow-500 mx-auto rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <BlogCard 
              key={index}
              image={blog.image}
              title={blog.title}
              description={blog.description}
            />
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-main-color-dark text-white px-8 py-3 rounded-full font-semibold hover:bg-main-color transition-colors">
            View All Blogs
          </button>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;