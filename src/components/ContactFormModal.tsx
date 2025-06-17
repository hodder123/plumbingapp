import ReCAPTCHA from 'react-google-recaptcha';
import { useState } from 'react';

interface ContactFormModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactFormModal({ isOpen, onClose }: ContactFormModalProps) {
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    phone: '',
    postalCode: '',
    message: ''
  });

  const handleCaptchaChange = (token: string | null) => {
    setCaptchaToken(token);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!captchaToken) {
      alert("Please complete the captcha!");
      return;
    }

    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        ...formValues,
        captchaToken
      })
    });

    if (res.ok) {
      alert("Your request was sent!");
      onClose();
    } else {
      alert("Something went wrong. Please try again.");
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-[1000] p-4 animate-fadeIn">
      <div className="bg-white p-8 w-full max-w-md max-h-[90vh] overflow-y-auto relative shadow-2xl">
        <button 
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 text-2xl text-gray-500 hover:text-gray-700 transition-colors duration-300"
        >
          ×
        </button>

        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Schedule an Appointment</h2>

        <div className="text-center mb-6 p-4 bg-blue-50">
          <p className="text-gray-700">
            Or Call us at: <a href="tel:2508288761" className="font-bold text-blue-600 hover:underline">(250) 828-8761</a>
          </p>
        </div>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <input
            name="name"
            type="text"
            placeholder="Name*"
            required
            value={formValues.name}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 text-sm"
          />
          <input
            name="email"
            type="email"
            placeholder="Email Address*"
            required
            value={formValues.email}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 text-sm"
          />
          <input
            name="phone"
            type="tel"
            placeholder="Phone Number*"
            required
            value={formValues.phone}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 text-sm"
          />
          <input
            name="postalCode"
            type="text"
            placeholder="Postal Code*"
            required
            value={formValues.postalCode}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 text-sm"
          />
          <textarea
            name="message"
            rows={4}
            placeholder="How Can We Help You?"
            required
            value={formValues.message}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 text-sm resize-none"
          />
          <input type="file" accept="image/*" multiple className="w-full p-3 border border-gray-300 text-sm" />
          <p className="text-gray-500 text-sm text-center">You can upload up to 4 images (PNG, JPG, GIF, HEIC).</p>

          <ReCAPTCHA
            sitekey="6LfIPnUqAAAAAKVivLW_FvgJXoJH8-RsfALVrFu8"
            onChange={handleCaptchaChange}
          />

          <button
            type="submit"
            disabled={!captchaToken}
            className="w-full p-3 bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors duration-300"
          >
            Submit Request
          </button>
        </form>
      </div>
    </div>
  );
}
