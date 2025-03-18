import React, { useState, useRef } from 'react';
import { Send, MessageSquare } from 'lucide-react';
import emailjs from '@emailjs/browser';

export const Contact: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState({
    submitting: false,
    submitted: false,
    error: null as string | null
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.current) return;

    try {
      setStatus({ submitting: true, submitted: false, error: null });

      await emailjs.sendForm(
        'service_9zpyj85', // Replace with your EmailJS service ID
        'template_aqxvxwp', // Replace with your EmailJS template ID
        form.current,
        '8Y3CHItag2qgiEafy' // Replace with your EmailJS public key
      );

      setStatus({ submitting: false, submitted: true, error: null });
      setFormData({ name: '', email: '', message: '' });

      // Show success message for 3 seconds
      setTimeout(() => {
        setStatus(prev => ({ ...prev, submitted: false }));
      }, 3000);

    } catch (error) {
      setStatus({
        submitting: false,
        submitted: false,
        error: 'Failed to send message. Please try again.'
      });
    }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block p-4 bg-blue-50 rounded-full mb-4 transform transition-transform hover:scale-110 hover:rotate-12">
              <MessageSquare className="w-12 h-12 text-blue-600 transition-colors hover:text-blue-700" />
            </div>
            <h2 className="text-4xl font-bold mb-4 hover:text-blue-600 transition-colors">Get in Touch</h2>
            <p className="text-gray-600 hover:text-gray-800 transition-colors">We'd love to hear from you. Send us a message and we'll respond as soon as possible.</p>
          </div>

          <form ref={form} onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-lg p-8 space-y-6 transform transition-all duration-300 hover:shadow-2xl hover:scale-[1.02]">
            <div className="group">
              <label className="block text-sm font-medium text-gray-700 mb-2 transition-colors group-hover:text-blue-600">
                Name
              </label>
              <input
                type="text"
                name="user_name"
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:border-blue-400 group-hover:shadow-md"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="John Doe"
              />
            </div>
            <div className="group">
              <label className="block text-sm font-medium text-gray-700 mb-2 transition-colors group-hover:text-blue-600">
                Email
              </label>
              <input
                type="email"
                name="user_email"
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:border-blue-400 group-hover:shadow-md"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="john@example.com"
              />
            </div>
            <div className="group">
              <label className="block text-sm font-medium text-gray-700 mb-2 transition-colors group-hover:text-blue-600">
                Message
              </label>
              <textarea
                name="message"
                required
                rows={4}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:border-blue-400 group-hover:shadow-md resize-none"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Your message here..."
              />
            </div>

            {status.error && (
              <div className="text-red-500 text-sm animate-pulse">{status.error}</div>
            )}

            {status.submitted && (
              <div className="text-green-500 text-sm animate-bounce">Message sent successfully!</div>
            )}

            <button
              type="submit"
              disabled={status.submitting}
              className={`w-full bg-blue-600 text-white py-4 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all duration-300 transform ${status.submitting
                  ? 'opacity-70 cursor-not-allowed'
                  : 'hover:bg-blue-700 hover:scale-[1.02] hover:shadow-xl active:scale-95'
                }`}
            >
              {status.submitting ? (
                'Sending...'
              ) : (
                <>
                  Send Message
                  <Send className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};