import { headers } from 'next/headers';
import { getAppConfig } from '@/lib/utils';
import Navbar from '../components/Navbar';

interface AppLayoutProps {
  children: React.ReactNode;
}

export default async function AppLayout({ children }: AppLayoutProps) {
  const hdrs = await headers();
  const { companyName, logo, logoDark } = await getAppConfig(hdrs);

  return (
    <>
      <Navbar />
      {children}
    </>
  );
}
