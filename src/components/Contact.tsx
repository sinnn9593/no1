import React, { useState } from "react";
import { Link } from "react-router-dom";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSent, setIsSent] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // メール送信処理は省略しています
    console.log("Form submitted:", formData);
    setIsSent(true); // 送信完了メッセージを表示
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 to-white py-16 px-8">
      <div className="max-w-xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-semibold text-center mb-6">Contact Us</h2>
        {isSent ? (
          <p className="success-message text-center text-green-600">Your message has been sent successfully!</p>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="input-group mb-4">
              <label htmlFor="name" className="block text-lg font-medium mb-2">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-md"
                required
              />
            </div>

            <div className="input-group mb-4">
              <label htmlFor="email" className="block text-lg font-medium mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-md"
                required
              />
            </div>

            <div className="input-group mb-4">
              <label htmlFor="message" className="block text-lg font-medium mb-2">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-md"
                required
              ></textarea>
            </div>

            {error && <p className="error-message text-red-500 text-center">{error}</p>}
            <button type="submit" className="w-full py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition">
              Send Message
            </button>
          </form>
        )}

        {/* 戻るボタン */}
        <div className="text-center mt-6">
          <Link to="/" className="px-6 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600 transition">
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
