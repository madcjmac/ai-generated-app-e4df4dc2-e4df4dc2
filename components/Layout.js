import BottomNav from './BottomNav';

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-dark-primary to-dark-secondary">
      <main className="pb-20">
        {children}
      </main>
      <BottomNav />
    </div>
  );
}