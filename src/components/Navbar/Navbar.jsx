import React, { useState, useEffect } from 'react';

const navItems = [
  { id: 'about', label: 'About' },
  { id: 'education', label: 'Education' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
];

const Navbar = () => {
  const [active, setActive] = useState('about');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      // Contact is short, so its offsetTop can stay below scrollPos even at the
      // very bottom of the page. Highlight the last item once we reach the end.
      if (maxScroll > 0 && window.scrollY >= maxScroll - 60) {
        setActive(navItems[navItems.length - 1].id);
        return;
      }
      const scrollPos = window.scrollY + 120;
      for (let i = navItems.length - 1; i >= 0; i--) {
        const el = document.getElementById(navItems[i].id);
        if (el && el.offsetTop <= scrollPos) {
          setActive(navItems[i].id);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      window.scrollTo({ top: el.offsetTop - 50, behavior: 'smooth' });
    }
  };

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <ul className="navbar__links">
        {navItems.map(({ id, label }) => (
          <li key={id}>
            <a
              href={`#${id}`}
              className={`navbar__link ${active === id ? 'navbar__link--active' : ''}`}
              onClick={(e) => handleClick(e, id)}>
              {label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
