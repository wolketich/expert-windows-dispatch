import { useState, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useAuthStore, type User } from '../shared/store';
import { Button } from '../../components/ui/Button';
import { Input } from '../../components/ui/Input';
import { Card } from '../../components/ui/Card';

// Mock users - will be replaced with API call later
const mockUsers = [
  { name: 'John Doe', role: 'office' as const, pin: '1234' },
  { name: 'Jane Smith', role: 'director' as const, pin: '5678' },
  { name: 'Admin User', role: 'god' as const, pin: '0000' },
  { name: 'Crew Member', role: 'crew' as const, pin: '9999' },
];

export const LoginPage = () => {
  const { t } = useTranslation('auth');
  const navigate = useNavigate();
  const { setUser } = useAuthStore();
  const [selectedUser, setSelectedUser] = useState('');
  const [pin, setPin] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setError('');

    if (!selectedUser || !pin) {
      setError(t('invalidPin'));
      return;
    }

    const user = mockUsers.find((u) => u.name === selectedUser);
    if (!user || user.pin !== pin) {
      setError(t('invalidPin'));
      return;
    }

    const userData: User = {
      name: user.name,
      role: user.role,
      token: `mock-token-${Date.now()}`,
      pin: user.pin,
    };

    setUser(userData);
    navigate('/', { replace: true });
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-primary via-primary/90 to-secondary">
      <Card className="w-full max-w-md animate-in fade-in slide-in-from-bottom-4 duration-500">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-primary mb-2">
            Expert Windows System
          </h1>
          <p className="text-gray-500">{t('welcomeBack')}</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-900 mb-2">
              {t('selectUser')}
            </label>
            <select
              value={selectedUser}
              onChange={(e) => setSelectedUser(e.target.value)}
              className="w-full h-11 px-4 rounded-xl border-2 border-gray-300 bg-white text-gray-900 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
              required
            >
              <option value="">{t('selectUser')}</option>
              {mockUsers.map((user) => (
                <option key={user.name} value={user.name}>
                  {user.name} ({user.role})
                </option>
              ))}
            </select>
          </div>

          <Input
            type="password"
            label={t('pin')}
            value={pin}
            onChange={(e) => setPin(e.target.value)}
            placeholder="••••"
            maxLength={4}
            error={error}
            required
            autoComplete="off"
          />

          <Button type="submit" variant="primary" size="lg" className="w-full">
            {t('login')}
          </Button>
        </form>
      </Card>
    </div>
  );
};
