import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ProtectedRoute } from './ProtectedRoute';
import { LoginPage } from '../features/auth/LoginPage';
import { DashboardPage } from '../features/home/DashboardPage';
import { AppLayout } from '../components/layout/AppLayout';

// Placeholder pages
const JobsPage = () => <div className="p-6">Jobs Page</div>;
const CalendarPage = () => <div className="p-6">Calendar Page</div>;
const BoardPage = () => <div className="p-6">Board Page</div>;
const InventoryPage = () => <div className="p-6">Inventory Page</div>;
const ReportsPage = () => <div className="p-6">Reports Page</div>;
const SettingsPage = () => <div className="p-6">Settings Page</div>;
const UsersPage = () => <div className="p-6">Users Page</div>;
const AuditPage = () => <div className="p-6">Audit Page</div>;

export const router = createBrowserRouter([
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    element: (
      <ProtectedRoute>
        <AppLayout />
      </ProtectedRoute>
    ),
    children: [
      {
        path: '/',
        element: <DashboardPage />,
      },
      {
        path: '/jobs',
        element: <JobsPage />,
      },
      {
        path: '/calendar',
        element: <CalendarPage />,
      },
      {
        path: '/board',
        element: <BoardPage />,
      },
      {
        path: '/inventory',
        element: <InventoryPage />,
      },
      {
        path: '/reports',
        element: <ReportsPage />,
      },
      {
        path: '/settings',
        element: <SettingsPage />,
      },
      {
        path: '/users',
        element: <UsersPage />,
      },
      {
        path: '/audit',
        element: <AuditPage />,
      },
    ],
  },
]);
