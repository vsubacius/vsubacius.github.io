import Layout from '../components/Layout';
import { useState } from 'react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <Layout>
      <h2 className="text-2xl font-bold mb-4">Contact Me</h2>
      <form
        name="contact"
        method="POST"
        data-netlify="true"
        netlify-honeypot="bot-field"
        className="space-y-4"
      >
        <input type="hidden" name="form-name" value="contact" />
        <p className="hidden">
          <label>Don’t fill this out: <input name="bot-field" /></label>
        </p>
        <div>
          <label className="block" htmlFor="name">Name</label>
          <input required id="name" name="name" value={form.name} onChange={handleChange} className="w-full p-2 rounded bg-gray-200 dark:bg-gray-700" />
        </div>
        <div>
          <label className="block" htmlFor="email">Email</label>
          <input required type="email" id="email" name="email" value={form.email} onChange={handleChange} className="w-full p-2 rounded bg-gray-200 dark:bg-gray-700" />
        </div>
        <div>
          <label className="block" htmlFor="message">Message</label>
          <textarea required id="message" name="message" value={form.message} onChange={handleChange} className="w-full p-2 rounded bg-gray-200 dark:bg-gray-700" />
        </div>
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Send</button>
      </form>
    </Layout>
  );
}
