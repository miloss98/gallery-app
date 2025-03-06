import Link from 'next/link';

export const LinkButton = ({ children, href }) => {
  return (
    <Link
      href={href}
      className="flex items-center justify-center gap-2 bg-slate-200 rounded-lg p-3 font-medium text-xl hover:bg-gradient-to-r hover:to-slate-400 hover:from-slate-200"
    >
      {children}
    </Link>
  );
};
