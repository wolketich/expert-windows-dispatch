import { NavLink } from 'react-router-dom';
import { useAuthStore, type UserRole } from '../../features/shared/store';
import { useTranslation } from 'react-i18next';
import {
  Home,
  Briefcase,
  Calendar,
  Kanban,
  Package,
  LineChart,
  Settings,
  Users,
  FileSearch,
} from 'lucide-react';
import { clsx } from 'clsx';

interface NavItem {
  path: string;
  icon: React.ComponentType<{ className?: string }>;
  labelKey: string;
  roles: UserRole[];
}

const navItems: NavItem[] = [
  { path: '/', icon: Home, labelKey: 'home', roles: ['office', 'director', 'god', 'crew'] },
  { path: '/jobs', icon: Briefcase, labelKey: 'jobs', roles: ['office', 'director', 'god'] },
  { path: '/calendar', icon: Calendar, labelKey: 'calendar', roles: ['office', 'director', 'god'] },
  { path: '/board', icon: Kanban, labelKey: 'board', roles: ['director', 'god'] },
  { path: '/inventory', icon: Package, labelKey: 'inventory', roles: ['office', 'director', 'god'] },
  { path: '/reports', icon: LineChart, labelKey: 'reports', roles: ['director', 'god'] },
  { path: '/settings', icon: Settings, labelKey: 'settings', roles: ['god'] },
  { path: '/users', icon: Users, labelKey: 'users', roles: ['god'] },
  { path: '/audit', icon: FileSearch, labelKey: 'audit', roles: ['god'] },
];

export const Sidebar = () => {
  const { t } = useTranslation('layout');
  const { user } = useAuthStore();

  const visibleItems = navItems.filter((item) =>
    user?.role ? item.roles.includes(user.role) : false
  );

  return (
    <div className="flex flex-col h-full">
      {/* Logo */}
      <div className="h-16 flex items-center justify-center border-b border-gray-200 px-4">
        <h1 className="text-xl font-bold text-primary">Expert Windows</h1>
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto py-4 px-2">
        <ul className="space-y-1">
          {visibleItems.map((item) => {
            const Icon = item.icon;
            return (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    clsx(
                      'flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all',
                      'hover:bg-gray-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary',
                      isActive
                        ? 'bg-primary/10 text-primary'
                        : 'text-gray-700 hover:text-primary'
                    )
                  }
                >
                  <Icon className="w-5 h-5" />
                  <span>{t(item.labelKey)}</span>
                </NavLink>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};
