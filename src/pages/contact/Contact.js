import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaTwitter, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import { useState } from 'react';
import emailjs from 'emailjs-com';
import { bio } from '@data/constants';
const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => (Object.assign(Object.assign({}, prevData), { [name]: value })));
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here, such as sending data to an API endpoint
        emailjs.send('service_jfhebpf', 'template_26oudub', {
            from_name: formData.name, // Your name
            user_email: formData.email, // Your email
            message: formData.message, // Message
        }, '6vIRJIQ_5euY8DR15') // Replace with your actual user_id (public key)
            .then((response) => {
            console.log('SUCCESS!', response.status, response.text);
        }, (error) => {
            console.log('FAILED...', error.text);
        });
        setFormData({
            email: '',
            message: "",
            name: ''
        });
    };
    return (_jsx("div", { className: "min-h-screen bg-gray-100 flex bg-gradient-to-tl from-gray-900 to-[#040406]  items-center justify-center p-4 pt-28 text-white", children: _jsxs("div", { className: "max-w-5xl w-full bg-gradient-to-tl from-gray-900 to-[#040406] shadow-md rounded-lg p-6 md:flex", children: [_jsxs("div", { className: "md:w-1/2 md:pr-6", children: [_jsx("h2", { className: "text-2xl font-bold mb-4 text-center md:text-left", children: "Contact Us" }), _jsxs("form", { onSubmit: handleSubmit, className: "space-y-4", children: [_jsxs("div", { children: [_jsx("label", { htmlFor: "name", className: "block text-gray-300 text-sm font-bold mb-2", children: "Name" }), _jsx("input", { type: "text", id: "name", name: "name", value: formData.name, onChange: handleChange, required: true, className: "w-full px-3 py-2  border-b-violet-300 border-b-[1px] focus:outline-none focus:ring-0 focus:border-b-violet-300  bg-gradient-to-tl from-gray-900 to-[#040406]" })] }), _jsxs("div", { children: [_jsx("label", { htmlFor: "email", className: "block text-gray-300 text-sm font-bold mb-2", children: "Email" }), _jsx("input", { type: "email", id: "email", name: "email", value: formData.email, onChange: handleChange, required: true, className: "w-full px-3 py-2  border-b-violet-300 focus:outline-none focus:ring-0 focus:border-b-violet-300 border-b-[1px]  bg-gradient-to-tl from-gray-900 to-[#040406]" })] }), _jsxs("div", { children: [_jsx("label", { htmlFor: "message", className: "block text-gray-300 text-sm font-bold mb-2", children: "Message" }), _jsx("textarea", { id: "message", name: "message", value: formData.message, onChange: handleChange, required: true, className: "w-full px-3 py-2 bg-gradient-to-tl from-gray-900 to-[#040406] focus:outline-none focus:ring-0 focus:border-b-violet-300 border-b-violet-300\tborder-b-[1px] resize-none", rows: 5, style: { height: "150px" } })] }), _jsx("button", { type: "submit", className: "w-full bg-gradient-to-tl from-gray-900 to-[#566ebd] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline", children: "Submit" })] })] }), _jsxs("div", { className: "md:w-1/2 mt-8 md:mt-0 md:pl-6 border-t md:border-t-0 md:border-l border-gray-300 xs:pt-7 sm:pt-7 md:pt-0", children: [_jsx("h3", { className: "text-xl font-semibold mb-4 text-center md:text-left", children: "Contact Information" }), _jsxs("ul", { className: "space-y-4", children: [_jsxs("li", { className: "flex items-center gap-4", children: [_jsx(FaMapMarkerAlt, { size: 18, className: "text-blue-800 mr-2" }), _jsx("span", { children: bio.address })] }), _jsxs("li", { className: "flex items-center gap-4", children: [_jsx(FaPhone, { size: 18, className: "text-blue-800 mr-2" }), _jsxs("span", { children: ["+", bio.phone] })] }), _jsxs("li", { className: "flex items-center gap-4", children: [_jsx(FaEnvelope, { size: 18, className: "text-blue-800 mr-2" }), _jsx("span", { children: bio.email })] })] }), _jsxs("div", { className: "flex mt-6 space-x-4 justify-center md:justify-start", children: [_jsx("a", { href: "#", className: "text-[#4267B2]", children: _jsx(FaFacebook, { size: 24 }) }), _jsx("a", { href: "#", className: "text-[#1DA1F2]", children: _jsx(FaTwitter, { size: 24 }) }), _jsx("a", { href: "#", className: "text-[#25D366] ", children: _jsx(FaWhatsapp, { size: 24 }) }), _jsx("a", { href: "#", className: "text-[#0077B5]", children: _jsx(FaLinkedin, { size: 24 }) })] })] })] }) }));
};
export default Contact;
