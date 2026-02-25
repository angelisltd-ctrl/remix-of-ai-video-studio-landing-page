import unicarsLogo from '@/assets/unicars-logo.png';

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-black text-white">
      <div className="w-full px-6 sm:px-8 lg:px-12">
        <div className="flex items-center justify-center h-28">
          {/* Logo */}
          <a href="https://www.unicars.com/en/index.php" target="_blank" rel="noopener noreferrer" className="flex items-center">
            <img src={unicarsLogo} alt="Unicars - Driving Your Stories" className="h-48 w-auto transition-transform duration-300 hover:scale-105" />
          </a>
        </div>
      </div>
    </header>
  );
}
