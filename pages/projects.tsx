import Layout from '../components/Layout';
import projects from '../data/projects.json';
import ProjectCard from '../components/ProjectCard';

export default function Projects() {
  return (
    <Layout>
      <h2 className="text-2xl font-bold mb-4">My Projects</h2>
      <div className="grid sm:grid-cols-2 gap-4">
        {projects.map((p) => (
          <ProjectCard key={p.title} {...p} />
        ))}
      </div>
    </Layout>
  );
}
