import { NavLink } from 'react-router-dom';
import { useAuthStore, type UserRole } from '../../features/shared/store';
import { useTranslation } from 'react-i18next';
import { Home, Briefcase, Calendar, Package } from 'lucide-react';
import { clsx } from 'clsx';

interface TabItem {
  path: string;
  icon: React.ComponentType<{ className?: string }>;
  labelKey: string;
  roles: UserRole[];
}

const tabItems: TabItem[] = [
  { path: '/', icon: Home, labelKey: 'home', roles: ['office', 'director', 'god', 'crew'] },
  { path: '/jobs', icon: Briefcase, labelKey: 'jobs', roles: ['office', 'director', 'god'] },
  { path: '/calendar', icon: Calendar, labelKey: 'calendar', roles: ['office', 'director', 'god'] },
  { path: '/inventory', icon: Package, labelKey: 'inventory', roles: ['office', 'director', 'god'] },
];

export const MobileTabs = () => {
  const { t } = useTranslation('layout');
  const { user } = useAuthStore();

  const visibleTabs = tabItems.filter((item) =>
    user?.role ? item.roles.includes(user.role) : false
  );

  return (
    <div className="flex items-center justify-around h-16">
      {visibleTabs.map((item) => {
        const Icon = item.icon;
        return (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              clsx(
                'flex flex-col items-center justify-center gap-1 flex-1 h-full',
                'transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary',
                isActive ? 'text-primary' : 'text-gray-500'
              )
            }
          >
            <Icon className="w-6 h-6" />
            <span className="text-xs font-medium">{t(item.labelKey)}</span>
          </NavLink>
        );
      })}
    </div>
  );
};
