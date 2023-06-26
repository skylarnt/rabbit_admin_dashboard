import { Navigate, useRoutes } from 'react-router-dom';
// layouts
import DashboardLayout from './layouts/dashboard';
import SimpleLayout from './layouts/simple';
//
import BlogPage from './pages/BlogPage';
import UserPage from './pages/UserPage';
import LoginPage from './pages/Auth/auth/LoginPage';
import SignupPage from './pages/Auth/auth/SignupPage';
import ForgotPassword from './pages/Auth/ForgotPassword';
import ResetPassword from './pages/Auth/ResetPassword';
import BusinessInfo from './pages/Auth/BusinessInfo';
import AgreementPage from './pages/Auth/AgreementPage';
import VerifyEmail from './pages/Auth/EmailVerification';
import Page404 from './pages/Page404';
import ProductsPage from './pages/ProductsPage';
// import CustomerPage from './pages/Customers/Index';
import DashboardAppPage from './pages/Dashboard/DashboardAppPage';
import AdminDashboardAppPage from './pages/Dashboard/AdminDashboard';
import CustomerPage from './pages/Customers/CustomerPage';
// import CustomerPage2 from './pages/Customers/CustomerPage2';
import DriverPage from './pages/Drivers/DriverPage';
// import DriversRidersPage from './pages/Drivers/Drivers_Riders/DriversRiders';
import VehiclesPage from './pages/Vehicles/VehiclesPage';
// import VehiclesPage2 from './pages/Vehicles/VehiclesPage2';
import RoutesPage from './pages/Routes/RoutesPage';
import CharterPage from './pages/Charter/Charter';
import OperationsPage from './pages/Operations/Operations';
import WalletPage from './pages/Wallet/Wallet';
import AdministrationPage from './pages/Administration/Administration';
import SettingsPage from './pages/Settings/Settings';
import IncrementalInsight from './pages/Incremental_Insight/Insight';
import SubscriptionPage from './pages/Subscription/Subscription';
import PaymentPage from './pages/Payment/Payment';
import ProfilePage from './pages/Profile/Profile';

// ----------------------------------------------------------------------

export default function Router() {
  const routes = useRoutes([
    {
      path: '/dashboard',
      element: <DashboardLayout />,
      children: [
        { element: <Navigate to="/dashboard/app" />, index: true },
        { path: 'app', element: <DashboardAppPage /> },
        { path: 'admin', element: <AdminDashboardAppPage /> },
        { path: 'customers', element: <CustomerPage /> },
        // { path: 'customers', element: <CustomerPage2 /> },
        { path: 'driver', element: <DriverPage /> },
        // { path: 'driver_rider', element: <DriversRidersPage /> },
        { path: 'vehicles', element: <VehiclesPage /> },
        // { path: 'buses_bikes', element: <VehiclesPage2 /> },
        { path: 'route', element: <RoutesPage /> },
        { path: 'charter', element: <CharterPage /> },
        { path: 'operations', element: <OperationsPage /> },
        { path: 'wallet', element: <WalletPage /> },
        { path: 'administrations', element: <AdministrationPage /> },
        { path: 'settings', element: <SettingsPage /> },
        { path: 'incremental_insight', element: <IncrementalInsight /> },
        { path: 'subscription', element: <SubscriptionPage /> },
        { path: 'payment', element: <PaymentPage /> },
        { path: 'profile', element: <ProfilePage /> },
        { path: 'user', element: <UserPage /> },
        { path: 'customers', element: <CustomerPage /> },
        { path: 'products', element: <ProductsPage /> },
        { path: 'blog', element: <BlogPage /> },
      ],
    },
    // {
    //   path: 'dashboard/customers',
    //   element: <CustomerPage />,
    //   // children: [
    //   //   { element: <Navigate to="/dashboard/customers" />},
    //   //   { path: 'customers', element: <CustomerPage /> },
    //   //   { path: 'user', element: <UserPage /> },
    //   //   { path: 'products', element: <ProductsPage /> },
    //   //   { path: 'blog', element: <BlogPage /> },
    //   // ],
    // },
    {
      path: 'login',
      element: <LoginPage />,
    },
    {
      path: 'signup',
      element: <SignupPage />,
    },
    {
      path: 'verify-email',
      element: <VerifyEmail />,
    },
    {
      path: 'forgot-password',
      element: <ForgotPassword />,
    },
    {
      path: 'reset-password',
      element: <ResetPassword />,
    },
    {
      path: 'business-info',
      element: <BusinessInfo />,
    },
    {
      path: 'agreement',
      element: <AgreementPage />,
    },{
      element: <SimpleLayout />,
      children: [
        { element: <Navigate to="/dashboard/app" />, index: true },
        { path: '404', element: <Page404 /> },
        { path: '*', element: <Navigate to="/404" /> },
      ],
    },
    {
      path: '*',
      element: <Navigate to="/404" replace />,
    },
  ]);

  return routes;
}
