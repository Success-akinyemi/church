export const navlinks = [
    {
        name: 'Home',
        link: 'home',
        style: ''
    },
    {
        name: 'About',
        link: 'about-us',
        style: ''
    },
    {
        name: 'Programs & Events',
        link: 'programs-and-events',
        style: ''
    },
    {
        name: 'Resources',
        link: 'resources',
        style: ''
    },
        {
        name: 'Blogs',
        link: 'blogs',
        style: ''
    },
    {
        name: 'Shop',
        link: 'shop',
        style: ''
    },
    {
        name: 'Donate',
        link: '',
        onclick: true,
        style: 'bg-[#FFD700] border-[1px] border-[#FFD700] hover:bg-transparent text-[#FFD700] px-2 py-1 rounded-[8px] hover:text-[#FFD700] border-b-[#FFD700]'
    }
]

export const menuLinks = [
    { 
      name: 'Home', 
      link: '',
      style: '',
    },
    {
      name: 'About Us',
      link: '/about-us',
      style: '',
      /**
       submenu: [
         { name: 'About Us', link: '/about-us' },
         { name: 'FADA', link: '/about-fada' },
       ],
       * 
       */
    },
    {
      name: 'Programs & Events',
      link: '/programs-and-events',
      style: '',
      /**
       submenu: [
         { name: 'Upcoming Events', link: '/programs/upcoming' },
         { name: 'Past Events', link: '/programs/past' },
       ],
       * 
       */
    },
    {
      name: 'Resources',
      link: '/resources',
      /**
       submenu: [
         { name: 'Blog', link: '/resources/blog' },
         { name: 'FAQ', link: '/resources/faq' },
       ],
       * 
       */
    },
    { 
      name: 'Blogs', 
      link: '/blogs' 
    },
    { 
      name: 'Shop', 
      link: '/shop' 
    },
    {
      name: 'Join Us',
      link: '',
      onclick: true,
      /**
       * 
      submenu: [
        { name: 'Become a Member', link: '/join/member' },
        { name: 'Volunteer', link: '/join/volunteer' },
      ],
       */
    },
    {
      name: 'Donation',
      link:'',
      onclick: true,
      clickValue: 'donations',
      style: 'bg-[#FFD700] border-[1px] border-[#FFD700] hover:bg-transparent text-[#FFD700] px-2 py-1 rounded-[8px] hover:text-[#FFD700] border-b-[#FFD700] text-main-color'
      /**
       * 
      submenu: [
        { name: 'Donate Now', link: '/donation' },
        { name: 'Our Sponsors', link: '/donation/sponsors' },
      ],
       */
    },
  ];