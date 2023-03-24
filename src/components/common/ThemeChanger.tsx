import { useTheme } from 'next-themes';
import { MdOutlineModeNight, MdOutlineWbSunny } from 'react-icons/md';

const ThemeChanger = () => {
  const { theme, setTheme } = useTheme();
  console.log(theme, 'theme');
  return (
    <div className="space-x-1">
      <button
        className="rounded-lg shadow-md shadow-orange-700"
        onClick={() => setTheme('light')}
      >
        <MdOutlineWbSunny className="h-7 w-7" />
      </button>
      <button
        className="rounded-lg shadow-md shadow-blue-700"
        onClick={() => setTheme('dark')}
      >
        <MdOutlineModeNight className="h-7 w-7" />
      </button>
    </div>
  );
};

export default ThemeChanger;
