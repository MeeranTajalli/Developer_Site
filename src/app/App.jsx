import styled from 'styled-components';
import Navbar from '@/app/layout/Navbar';
import Footer from '@/app/layout/Footer';
import AppRoutes from '@/app/routes';
import useSmoothScroll from '@/hooks/useSmoothScroll';

const AppShell = styled.div`
  min-height: 100vh;
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.textPrimary};
  display: flex;
  flex-direction: column;
  transition: background 250ms ease, color 250ms ease;
`;

const Main = styled.main`
  width: 100%;
  margin: 0 auto;
  max-width: 72rem;
  flex: 1 0 auto;
  padding: 0 1rem;
  transition: color 250ms ease;

  @media (min-width: 768px) {
    padding: 0 1.5rem;
  }
`;

export default function App() {
  useSmoothScroll();

  return (
    <AppShell>
      <Navbar />
      <Main>
        <AppRoutes />
      </Main>
      <Footer />
    </AppShell>
  );
}
