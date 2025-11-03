import { useState } from 'react';
import { useAuthStore } from '../../features/shared/store';
import { useTranslation } from 'react-i18next';
import { LogOut, User, ChevronDown } from 'lucide-react';
import { Button } from '../ui/Button';
import { clsx } from 'clsx';

export const Header = () => {
  const { t } = useTranslation('layout');
  const { user, logout } = useAuthStore();
  const [showMenu, setShowMenu] = useState(false);

  const roleLabels: Record<string, string> = {
    office: 'Office Staff',
    director: 'Director',
    god: 'Administrator',
    crew: 'Installation Crew',
  };

  const handleLogout = () => {
    logout();
    setShowMenu(false);
  };

  return (
    <div className="h-16 flex items-center justify-between px-4 lg:px-6">
      <h2 className="text-lg font-semibold text-gray-900">{t('dashboard')}</h2>

      {/* User Menu */}
      <div className="relative">
        <button
          onClick={() => setShowMenu(!showMenu)}
          className="flex items-center gap-2 px-3 py-2 rounded-xl hover:bg-gray-100 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          aria-expanded={showMenu}
          aria-haspopup="true"
        >
          <User className="w-5 h-5 text-primary" />
          <span className="hidden sm:block text-sm font-medium text-gray-900">
            {user?.name}
          </span>
          <span className="hidden md:block text-xs text-gray-500">
            ({roleLabels[user?.role ?? ''] ?? user?.role})
          </span>
          <ChevronDown className="w-4 h-4 text-gray-500" />
        </button>

        {showMenu && (
          <>
            <div
              className="fixed inset-0 z-10"
              onClick={() => setShowMenu(false)}
            />
            <div className="absolute right-0 mt-2 w-56 bg-white rounded-xl shadow-lg border border-gray-200 py-2 z-20">
              <div className="px-4 py-3 border-b border-gray-200">
                <p className="text-sm font-medium text-gray-900">{user?.name}</p>
                <p className="text-xs text-gray-500">
                  {roleLabels[user?.role ?? ''] ?? user?.role}
                </p>
              </div>
              <button
                onClick={handleLogout}
                className="w-full flex items-center gap-3 px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              >
                <LogOut className="w-4 h-4" />
                <span>{t('logout', { ns: 'auth' })}</span>
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
