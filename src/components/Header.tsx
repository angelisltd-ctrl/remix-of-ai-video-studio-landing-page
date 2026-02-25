import unicarsLogo from '@/assets/unicars-logo.png';

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-black text-white">
      <div className="w-full px-6 sm:px-8 lg:px-12">
        <div className="flex items-center justify-center h-20">
          {/* Logo */}
          <a href="#" className="flex items-center">
            <img src={unicarsLogo} alt="Unicars - Driving Your Stories" className="h-16 w-auto transition-transform duration-300 hover:scale-105" />
          </a>
        </div>
      </div>
    </header>
  );
}
