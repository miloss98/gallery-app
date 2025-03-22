import Image from 'next/image';
import Link from 'next/link';

import { ArrowLeft } from 'react-feather';

export async function generateMetadata({ params }) {
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

  const response = await fetch(
    `https://pixabay.com/api/?key=${process.env.NEXT_PUBLIC_API_KEY}&q=interior+design&image_type=photo&id=${projectId}`,
  );
  const data = await response.json();
  const projectData = data.hits[0];

  if (!projectData) return;

  return (
    <div className="mt-20 px-5 md:px-10 lg:px-20">
      <div className="my-20">
        <div className="w-full flex flex-col lg:flex-row gap-12 pt-12">
          <div className="w-full lg:w-1/2 flex flex-col gap-8 md:gap-16">
            <Link
              href="/our-work"
              className="flex gap-2 items-center text-xl hover:font-medium"
            >
              <ArrowLeft className="w-6 h-6" />
              Back to projects
            </Link>
            <h1 className="text-4xl">Project: {projectData.user}</h1>
            <div className="flex flex-col gap-4 md:gap-8">
              <p className="text-xl md:text-2xl lg:text-2xl">
                Page views: {projectData.views}
              </p>
              <p className="text-xl md:text-2xl lg:text-2xl">
                Downloads: {projectData.downloads}
              </p>
              <p className="text-xl md:text-2xl lg:text-2xl">
                Likes: {projectData.likes}
              </p>

              <Link
                href={projectData.pageURL}
                className="font-bold hover:underline text-xl"
              >
                {projectData.pageURL}{' '}
              </Link>
            </div>
          </div>
          <div className="flex flex-col gap-4 w-full lg:w-1/2">
            <div className="relative aspect-video w-full">
              <Image
                src={projectData.webformatURL}
                alt={projectData.user}
                fill
                sizes="100% 100%"
                className="rounded-xl"
                priority
              />
            </div>
            <div className="flex items-center gap-4">
              {projectData.userImageURL && (
                <div className="relative w-12 aspect-square">
                  <Image
                    src={projectData.userImageURL}
                    alt={projectData.user}
                    fill
                    sizes="100% 100%"
                    className="rounded-full"
                  />
                </div>
              )}

              <h1 className="text-2xl">{projectData.user}</h1>
            </div>
            <p className="text-xl flex flex-wrap gap-2">
              <span className="font-medium"> Tags: </span>
              {projectData.tags}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
