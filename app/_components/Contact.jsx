import { useState } from 'react';
import emailjs from '@emailjs/browser';

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [status, setStatus] = useState('');

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus('sending');

        const serviceId = 'service_b94aqso';
        const templateId = 'template_zhnvrmb';
        const publicKey = 'sB9UDUnitsaDuTo80';

        // Prepare template parameters
        const templateParams = {
            from_name: formData.name,
            from_email: formData.email,
            subject: formData.subject,
            message: formData.message,
            to_email: 'fatoyeoluwaseun@gmail.com'
        };

        emailjs.send(serviceId, templateId, templateParams, publicKey)
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
                setStatus('success');
                setFormData({ name: '', email: '', subject: '', message: '' });
                setTimeout(() => setStatus(''), 3000);
            })
            .catch((error) => {
                console.error('FAILED...', error);
                setStatus('error');
                setTimeout(() => setStatus(''), 3000);
            });
    };

    return (
        <div id='contact'>
            <h2 className="text-2xl font-bold mb-6">Contact Me</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label htmlFor="name" className="block text-gray-300 mb-2">Your Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full bg-gray-700/50 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors duration-300"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-gray-300 mb-2">Your Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full bg-gray-700/50 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors duration-300"
                            required
                        />
                    </div>
                </div>
                <div>
                    <label htmlFor="subject" className="block text-gray-300 mb-2">Subject</label>
                    <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full bg-gray-700/50 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors duration-300"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="message" className="block text-gray-300 mb-2">Message</label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows="6"
                        className="w-full bg-gray-700/50 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors duration-300 resize-none"
                        required
                    ></textarea>
                </div>

                {status === 'success' && (
                    <div className="bg-green-500/20 border border-green-500 text-green-500 px-4 py-3 rounded-lg">
                        Message sent successfully!
                    </div>
                )}

                {status === 'error' && (
                    <div className="bg-red-500/20 border border-red-500 text-red-500 px-4 py-3 rounded-lg">
                        Failed to send message. Please try again.
                    </div>
                )}

                <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors duration-300 font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    {status === 'sending' ? 'Sending...' : 'Send Message'}
                </button>
            </form>
        </div>
    );
}

export default Contact;