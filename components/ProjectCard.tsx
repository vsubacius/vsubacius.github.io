import { motion } from 'framer-motion';

export default function ProjectCard({ title, description, image, repo, live }: {title:string; description:string; image:string; repo:string; live?:string}) {
  return (
    <motion.div whileHover={{ scale:1.05 }} className="bg-white dark:bg-gray-800 rounded shadow p-4">
      <img src={image} alt={title} className="rounded mb-2" />
      <h3 className="text-xl font-semibold mb-1">{title}</h3>
      <p className="mb-2">{description}</p>
      <div className="space-x-2">
        <a href={repo} target="_blank" rel="noopener" className="text-blue-600 hover:underline">Repo</a>
        {live && <a href={live} target="_blank" rel="noopener" className="text-blue-600 hover:underline">Live</a>}
      </div>
    </motion.div>
  );
}
