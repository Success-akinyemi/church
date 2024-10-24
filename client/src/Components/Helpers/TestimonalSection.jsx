import React, { useState, useEffect } from 'react';

const testimonialData = [
  {
    id: 1,
    name: "Joe N. Rushin",
    role: "Community Member",
    testimony: "Being a member of the Holy Ghost Fraternity has deepened my faith and brought me closer to God in ways I never imagined possible. I'm grateful for the friendships and spiritual nourishment I've found here.",
    image: "/api/placeholder/80/80"
  },
  {
    id: 2,
    name: "Louis A. Monten",
    role: "Fellowship Leader",
    testimony: "I was searching for a deeper connection with God, and I found it at Holy Ghost Fraternity. The teachings, fellowship, and encouragement from fellow members have enriched my spiritual journey.",
    image: "/api/placeholder/80/80"
  },
  {
    id: 3,
    name: "Alice D. Lee",
    role: "Prayer Group Coordinator",
    testimony: "Joining Holy Ghost Fraternity was one of the best decisions I've ever made. The sense of community and spiritual growth I've experienced here is truly life-changing.",
    image: "/api/placeholder/80/80"
  },
  {
    id: 4,
    name: "Michael R. Thompson",
    role: "Bible Study Leader",
    testimony: "The spiritual guidance and fellowship I've received here has transformed my walk with Christ. The community's dedication to prayer and biblical teaching creates an environment where faith flourishes.",
    image: "/api/placeholder/80/80"
  },
  {
    id: 5,
    name: "Sarah K. Williams",
    role: "Youth Ministry Leader",
    testimony: "The impact this community has had on our youth is remarkable. Watching young people grow in their faith and develop strong spiritual foundations has been an incredible blessing.",
    image: "/api/placeholder/80/80"
  },
  {
    id: 6,
    name: "David P. Martinez",
    role: "Worship Team Member",
    testimony: "Being part of the worship team has shown me how music can deepen our connection with God. The spiritual atmosphere during our gatherings is truly transformative.",
    image: "/api/placeholder/80/80"
  },
  {
    id: 7,
    name: "Rebecca J. Anderson",
    role: "Small Group Leader",
    testimony: "Leading a small group has been incredibly rewarding. Witnessing the spiritual growth and authentic relationships that form in our intimate gathering settings is truly inspiring.",
    image: "/api/placeholder/80/80"
  },
  {
    id: 8,
    name: "Thomas H. Clark",
    role: "Men's Ministry Coordinator",
    testimony: "The brotherhood and accountability I've found here have strengthened my faith journey. Our men's ministry provides essential support for spiritual growth and discipleship.",
    image: "/api/placeholder/80/80"
  },
  {
    id: 9,
    name: "Grace E. Wilson",
    role: "Women's Ministry Leader",
    testimony: "Our women's ministry has created a nurturing space for sisters in Christ to grow together. The genuine relationships and spiritual mentorship have been life-changing.",
    image: "/api/placeholder/80/80"
  }
];

const TestimonialCard = ({ name, role, testimony }) => (
  <div className="bg-white rounded-xl shadow-lg p-6 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
    <div className="flex flex-col items-center">
      <div className="mb-4">
        <div className="w-16 h-16 relative">
          <div className="absolute inset-0 bg-red-500 rounded-full opacity-20"></div>
          <svg className="w-full h-full text-red-500 p-4" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm4.59-12.42L10 14.17l-2.59-2.58L6 13l4 4 8-8z"/>
          </svg>
        </div>
      </div>
      <blockquote className="text-gray-700 text-center mb-4 line-clamp-4">
        "{testimony}"
      </blockquote>
      <div className="text-center mt-auto">
        <h4 className="font-semibold text-gray-900 mb-1">{name}</h4>
        <p className="text-red-500 text-sm">{role}</p>
      </div>
    </div>
  </div>
);

const TestimonialsSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const itemsPerSlide = 3;
  const totalSlides = Math.ceil(testimonialData.length / itemsPerSlide);

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(timer);
  }, [currentSlide]);

  const nextSlide = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
      setTimeout(() => setIsAnimating(false), 500);
    }
  };

  const prevSlide = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
      setTimeout(() => setIsAnimating(false), 500);
    }
  };

  return (
    <section className="py-20 bg-gray-100 to-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            TESTIMONIALS
          </h2>
          <div className="w-24 h-1 bg-red-500 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Hear from our community members about their spiritual journey and experiences
          </p>
        </div>

        <div className="relative max-w-7xl mx-auto">
          {/* Navigation Buttons */}
          <button 
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-12 z-10 bg-white p-3 rounded-full shadow-lg hover:bg-gray-50 transition-colors"
          >
            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button 
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-12 z-10 bg-white p-3 rounded-full shadow-lg hover:bg-gray-50 transition-colors"
          >
            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Slider */}
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                <div key={slideIndex} className="w-full flex-shrink-0">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonialData
                      .slice(slideIndex * itemsPerSlide, (slideIndex + 1) * itemsPerSlide)
                      .map((testimonial) => (
                        <TestimonialCard key={testimonial.id} {...testimonial} />
                      ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 gap-2">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide ? 'bg-red-500 w-6' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;