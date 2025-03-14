'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { MoonLoader } from 'react-spinners';

export default function SingleProjectClientSide({ projectId }) {
  const [loading, setLoading] = useState(true);
  const [projectData, setProjectData] = useState(null);

  useEffect(() => {
    const fetchProjectData = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `https://pixabay.com/api/?key=${process.env.NEXT_PUBLIC_API_KEY}&q=interior+design&image_type=photo&per_page=12&id=${projectId}`,
        );
        const data = await response.json();
        setProjectData(data.hits[0]);
      } catch (error) {
        console.error('Error fetching project data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProjectData();
  }, [projectId]);

  console.log(projectData);

  return (
    <>
      {loading ? (
        <MoonLoader />
      ) : (
        <div className="flex flex-col gap-4 ">
          <div className="relative w-[600px] h-[400px]">
            <Image
              src={projectData.webformatURL}
              alt={projectData.user}
              fill
              sizes="100% 100%"
            />
          </div>
          <div className="flex items-center gap-4">
            <div className="relative w-12 aspect-square">
              <Image
                src={projectData.userImageURL}
                alt={projectData.user}
                fill
                sizes="100% 100%"
                className="rounded-full"
              />
            </div>
            <h1>{projectData.user}</h1>
          </div>
          <p>{projectData.tags}</p>
        </div>
      )}
    </>
  );
}
