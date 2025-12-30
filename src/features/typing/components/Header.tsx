import { IMAGES } from '../../../constants/images';
interface HeaderProps {
  bestTypeSpeed: number;
}
const Header = ({ bestTypeSpeed = 0 }: HeaderProps) => {
  return (
    <header className="flex justify-between items-center p-3 mt-5 mb-10">
      <img src={IMAGES.logoLarge} alt="Logo" className="sm:block hidden" />
      <img
        src={IMAGES.logoSmall}
        alt="Logo"
        className="inline-block sm:hidden"
      />
      <div className="flex gap-1 items-center">
        <img src={IMAGES.trophey} alt="Trophy" />
        <p className="text-gray-ntrl-500 text-sm">
          Personal best:<span className="text-white">{bestTypeSpeed} WPM</span>
        </p>
      </div>
    </header>
  );
};

export default Header;
