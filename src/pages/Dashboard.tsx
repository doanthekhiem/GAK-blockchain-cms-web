import { useSelector } from 'react-redux';
import { RootState } from '../store';

const Dashboard = () => {
  const { user } = useSelector((state: RootState) => state.auth);

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
      <div className="mt-6">
        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-lg font-medium text-gray-900">Welcome back, {user?.name}!</h2>
          <p className="mt-1 text-sm text-gray-500">
            This is your dashboard. You can start managing your content from here.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard; 