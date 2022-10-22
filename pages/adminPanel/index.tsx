import type { NextPage } from 'next';
import AdminPanelMain from './admin-panel-main';
import Layout from '../../src/components/Layout';

const adminPanelDashboard: NextPage = ({}) => {
  return (
    <Layout headTitle="Admin Panel">
      <AdminPanelMain />
    </Layout>
  );
};

export default adminPanelDashboard;
