
import { useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  const location = useLocation();
  const routes = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/projects', label: 'Projects' },
    { path: '/contact', label: 'Contact' },
  ];

  const getCurrentPageIndex = () => {
    return routes.findIndex(route => route.path === location.pathname);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/50 backdrop-blur-sm">
      <div className="w-full h-1 bg-neutral-800">
        <div 
          className="h-full bg-white transition-all duration-300 ease-in-out"
          style={{ 
            width: `${(getCurrentPageIndex() + 1) * (100 / routes.length)}%`,
          }}
        />
      </div>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <NavLink to="/" className="text-white text-xl font-semibold">Portfolio</NavLink>
          <div className="flex space-x-8">
            {routes.map((route) => (
              <NavLink
                key={route.path}
                to={route.path}
                className={({ isActive }) => cn(
                  'text-sm text-neutral-400 hover:text-white transition-colors',
                  isActive && 'text-white'
                )}
              >
                {route.label}
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
