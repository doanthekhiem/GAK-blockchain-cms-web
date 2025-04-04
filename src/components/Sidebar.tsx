import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  const menuItems = [
    { path: '/dashboard', label: 'Dashboard', icon: '📊' },
    { path: '/users', label: 'Users', icon: '👥' },
    { path: '/settings', label: 'Settings', icon: '⚙️' },
  ];

  return (
    <aside className="w-64 bg-gray-800 text-white">
      <div className="h-16 flex items-center justify-center border-b border-gray-700">
        <h2 className="text-xl font-bold">Menu</h2>
      </div>
      <nav className="mt-6">
        {menuItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center px-6 py-3 text-gray-300 hover:bg-gray-700 hover:text-white ${
                isActive ? 'bg-gray-700 text-white' : ''
              }`
            }
          >
            <span className="mr-3">{item.icon}</span>
            {item.label}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar; 