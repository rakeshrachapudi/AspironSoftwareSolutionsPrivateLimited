import React from "react";
import { ArrowRight, ExternalLink, Calendar, Tag } from "lucide-react";
import { Link } from "react-router-dom";
import Card from "../ui/Card";
import Button from "../ui/Button";

const ProjectCard = ({ project, featured = false }) => {
  return (
    <Card
      padding="none"
      className={`overflow-hidden ${featured ? "border-2 border-accent" : ""}`}
    >
      {/* Project Image */}
      <div className="relative overflow-hidden aspect-video">
        <img
          src={project.thumbnail || project.image}
          alt={project.title}
          className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
        />

        {/* Status Badge */}
        {project.status && (
          <div className="absolute top-4 right-4">
            <span
              className={`px-3 py-1 rounded-full text-xs font-semibold ${
                project.status === "Live"
                  ? "bg-green-500 text-white"
                  : "bg-orange-500 text-white"
              }`}
            >
              {project.status}
            </span>
          </div>
        )}

        {/* Featured Badge */}
        {featured && (
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 bg-accent text-white rounded-full text-xs font-semibold">
              Featured
            </span>
          </div>
        )}
      </div>

      {/* Project Content */}
      <div className="p-6">
        {/* Category */}
        <div className="flex items-center space-x-2 text-sm text-accent mb-2">
          <Tag size={14} />
          <span>{project.category}</span>
        </div>

        {/* Title */}
        <h3 className="text-2xl font-heading font-semibold text-primary mb-2">
          {project.title}
        </h3>

        {/* Tagline */}
        {project.tagline && (
          <p className="text-sm text-gray-500 mb-3">{project.tagline}</p>
        )}

        {/* Description */}
        <p className="text-gray-600 mb-4 leading-relaxed line-clamp-3">
          {project.description}
        </p>

        {/* Technologies */}
        {project.technologies && (
          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.slice(0, 4).map((tech) => (
              <span
                key={tech}
                className="text-xs px-3 py-1 bg-secondary rounded-full text-gray-700"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 4 && (
              <span className="text-xs px-3 py-1 bg-secondary rounded-full text-gray-700">
                +{project.technologies.length - 4}
              </span>
            )}
          </div>
        )}

        {/* Year */}
        {project.year && (
          <div className="flex items-center text-sm text-gray-500 mb-4">
            <Calendar size={14} className="mr-2" />
            <span>{project.year}</span>
          </div>
        )}

        {/* Actions */}
        <div className="flex items-center space-x-4">
          <Link
            to={`/projects/${project.slug}`}
            className="inline-flex items-center text-accent hover:text-success font-semibold group transition-colors duration-300"
          >
            View Details
            <ArrowRight
              size={18}
              className="ml-2 group-hover:translate-x-1 transition-transform duration-300"
            />
          </Link>

          {project.url && (
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-gray-600 hover:text-accent transition-colors duration-300"
            >
              <ExternalLink size={18} />
            </a>
          )}
        </div>
      </div>
    </Card>
  );
};

export default ProjectCard;
