"use client";
import { useState } from "react";

import Image from "next/image";
import { FaGithub, FaExternalLinkAlt, FaFileAlt } from "react-icons/fa";
import { Project } from "@/data/projects";
import Link from "next/link";
import TagList from "./tag-list";
import ExpandableText from "./ExpandableText";
import { siteLinks } from "@/data/links";

export function ProjectCard({ project }: { project: Project }) {
  const { description, github, image, link, releaseNotes, tech, title, video } =
    project;

  const [imgSrc, setImgSrc] = useState(image);
  return (
    <div
      key={title}
      className="border border-border rounded-lg overflow-hidden shadow-sm"
    >
      {image && (
        <Image
          src={imgSrc}
          alt={title}
          width={500}
          height={280}
          className="w-full object-cover h-52"
          onError={() => setImgSrc(siteLinks.noDataImage)}
        />
      )}

      <div className="p-4 flex flex-col gap-2">
        <h3 className="text-xl font-semibold">{title}</h3>
        <ExpandableText className="" content={description} limit={200} />

        {tech && <TagList tags={tech} />}

        <div className="flex items-center gap-4 mt-4 text-sm">
          {link && (
            <Link
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-link flex items-center gap-1"
            >
              <FaExternalLinkAlt /> Live
            </Link>
          )}
          {github && (
            <Link
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-link flex items-center gap-1"
            >
              <FaGithub /> Code
            </Link>
          )}
          {releaseNotes && (
            <Link
              href={releaseNotes}
              target="_blank"
              rel="noopener noreferrer"
              className="text-link flex items-center gap-1"
            >
              <FaFileAlt /> Release Notes
            </Link>
          )}
        </div>

        {video && (
          <div className="mt-4">
            <iframe
              src={video}
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
