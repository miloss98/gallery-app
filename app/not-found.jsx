import { ArrowRight } from 'react-feather';
import { LinkButton } from './components';

export const metadata = {
  title: 'Page Not Found | Gallery app',
  description: 'Sorry, the page you are looking for does not exist.',
  robots: 'noindex',
};

export default function NotFound() {
  return (
    <div className="mt-20 h-[70vh] px-5 md:px-10 lg:px-20 flex flex-col items-center justify-center gap-8">
      <h2 className="font-bold text-4xl">Not Found</h2>
      <p className="text-2xl">Could not find requested resource</p>
      <LinkButton href="/">
        Return home
        <ArrowRight size={20} />
      </LinkButton>
    </div>
  );
}
