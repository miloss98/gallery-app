import SingleProjectClientSide from './clientSide';

export default async function SingleProjectPage({ params }) {
  const projectId = (await params).projectId;

  return (
    <div className="mt-20 px-5 md:px-10 lg:px-20">
      <SingleProjectClientSide projectId={projectId} />
    </div>
  );
}
