import SingleProjectClientSide from './clientSide';

export async function generateMetadata({ params }, parent) {
  const { projectId } = await params;

  const product = await fetch(
    `https://pixabay.com/api/?key=${process.env.NEXT_PUBLIC_API_KEY}&q=interior+design&image_type=photo&per_page=12&id=${projectId}`,
  ).then((res) => res.json());

  const seo = product.hits[0];

  return {
    title: seo.user,
    description: seo.tags,
  };
}

export default async function SingleProjectPage({ params }) {
  const projectId = (await params).projectId;

  return (
    <div className="mt-20 px-5 md:px-10 lg:px-20">
      <SingleProjectClientSide projectId={projectId} />
    </div>
  );
}
