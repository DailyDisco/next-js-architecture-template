export interface IFooter extends React.ComponentPropsWithoutRef<'footer'> {
  className?: string;
}

const Footer: React.FC<IFooter> = ({ ...footerProps }) => {
  return (
    <footer
      {...footerProps}
      className={`w-full bg-slate-100 p-5 text-slate-500`}
    >
      <p>Canada</p>
    </footer>
  );
};

export default Footer;
