import { useTranslation } from 'react-i18next';
import { useAuthStore } from '../shared/store';
import { Card } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { Briefcase, Calendar, Package, LineChart } from 'lucide-react';
import { Link } from 'react-router-dom';

const roleLabels: Record<string, string> = {
  office: 'Office Staff',
  director: 'Director',
  god: 'Administrator',
  crew: 'Installation Crew',
};

export const DashboardPage = () => {
  const { t } = useTranslation();
  const { user } = useAuthStore();

  const quickNavCards = [
    {
      title: t('jobs', { ns: 'layout' }),
      icon: Briefcase,
      path: '/jobs',
      color: 'text-primary',
      bgColor: 'bg-primary/10',
    },
    {
      title: t('calendar', { ns: 'layout' }),
      icon: Calendar,
      path: '/calendar',
      color: 'text-accent',
      bgColor: 'bg-accent/10',
    },
    {
      title: t('inventory', { ns: 'layout' }),
      icon: Package,
      path: '/inventory',
      color: 'text-secondary',
      bgColor: 'bg-secondary/10',
    },
    {
      title: t('reports', { ns: 'layout' }),
      icon: LineChart,
      path: '/reports',
      color: 'text-primary',
      bgColor: 'bg-primary/10',
    },
  ];

  const stats = [
    { label: 'Jobs Today', value: '12', color: 'text-primary' },
    { label: 'Active Crews', value: '2', color: 'text-accent' },
    { label: 'Low Stock', value: '5', color: 'text-red-600' },
  ];

  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          {t('welcome')}, {user?.name}!
        </h1>
        <p className="text-gray-500">
          {roleLabels[user?.role ?? ''] ?? user?.role} • {t('dashboard', { ns: 'layout' })}
        </p>
      </div>

      {/* Quick Navigation Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {quickNavCards.map((card) => {
          const Icon = card.icon;
          return (
            <Link key={card.path} to={card.path}>
              <Card className="hover:shadow-md transition-shadow cursor-pointer">
                <div className="flex items-center gap-4">
                  <div className={`${card.bgColor} p-3 rounded-xl`}>
                    <Icon className={`w-6 h-6 ${card.color}`} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{card.title}</h3>
                    <p className="text-sm text-gray-500">Quick access</p>
                  </div>
                </div>
              </Card>
            </Link>
          );
        })}
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {stats.map((stat) => (
          <Card key={stat.label} padding="md">
            <div className="text-center">
              <p className="text-2xl font-bold mb-1">{stat.value}</p>
              <p className={`text-sm font-medium ${stat.color}`}>{stat.label}</p>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};
