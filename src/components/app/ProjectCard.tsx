"use client";
import { useState } from "react";

import Image from "next/image";
import { FaGithub, FaExternalLinkAlt, FaFileAlt } from "react-icons/fa";

export function ProjectCard({ p }) {
  const [imgSrc, setImgSrc] = useState(p.image);

  return (
    <div
      key={p.title}
      className="border border-border rounded-lg overflow-hidden shadow-sm"
    >
      {p.image && (
        <Image
          src={imgSrc}
          alt={p.title}
          width={500}
          height={280}
          className="w-full object-cover h-52"
          onError={() =>
            setImgSrc(
              "https://images.unsplash.com/photo-1671655135696-ccf6f206d2b9?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            )
          }
        />
      )}

      <div className="p-4 flex flex-col gap-2">
        <h3 className="text-xl font-semibold">{p.title}</h3>
        <p className="text-sm text-text-primary">{p.description}</p>

        {p.tech && (
          <div className="flex flex-wrap gap-2 mt-2">
            {p.tech.map((tag) => (
              <span key={tag} className="bg-card text-xs px-2 py-1 rounded">
                {tag}
              </span>
            ))}
          </div>
        )}

        <div className="flex items-center gap-4 mt-4 text-sm">
          {p.link && (
            <a
              href={p.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-link flex items-center gap-1"
            >
              <FaExternalLinkAlt /> Live
            </a>
          )}
          {p.github && (
            <a
              href={p.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-link flex items-center gap-1"
            >
              <FaGithub /> Code
            </a>
          )}
          {p.releaseNotes && (
            <a
              href={p.releaseNotes}
              target="_blank"
              rel="noopener noreferrer"
              className="text-link flex items-center gap-1"
            >
              <FaFileAlt /> Release Notes
            </a>
          )}
        </div>

        {p.video && (
          <div className="mt-4">
            <iframe
              src={p.video}
              className="w-full aspect-video rounded"
              allow="autoplay; encrypted-media"
              allowFullScreen
              title="Project demo"
            />
          </div>
        )}
      </div>
    </div>
  );
}
