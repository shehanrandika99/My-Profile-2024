import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

const EmailFormComponent = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [text, setText] = useState('');
    const form = useRef();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const serviceId = 'service_wgvn66d';
        const templateId = 'hello';
        const noReplyTemplateId = 'bye'; 
        const publicKey = 'RdFBPFPpk3FnM5GFb';

        const templateParams = {
            from_name: name,
            from_email: email,
            to_name: 'Shehan Randika',
            subject: subject,  // Changed key from 'message' to 'subject'
            message: text,
            user_email: email
        };

        console.log('Sending email with params:', templateParams);

        try {
            const response = await emailjs.send(serviceId, templateId, templateParams, publicKey);
            console.log('Email sent successfully:', response.status, response.text);

            setName('');
            setEmail('');
            setSubject('');
            setText('');

            const noReplyParams = {
                user_email: email,
                to_name: name || 'Recipient',
                message: 'Thank you for contacting us. This is a no-reply message.'
            };

            console.log('Sending no-reply email with params:', noReplyParams);

            try {
                const noReplyResponse = await emailjs.send(serviceId, noReplyTemplateId, noReplyParams, publicKey);
                console.log('No-reply email sent successfully:', noReplyResponse.status, noReplyResponse.text);
            } catch (error) {
                console.error('Failed to send no-reply email:', error.status, error.text);
            }
        } catch (error) {
            console.error('Failed to send email:', error.status, error.text);
        }
    };

    return (
        <div>
            <form className="ml-auto space-y-4" onSubmit={handleSubmit} ref={form}>
                <input
                    type="text"
                    placeholder="Name"
                    className="w-full rounded-md py-3 px-4 bg-gray-100 text-gray-800 text-sm outline-black focus:bg-transparent"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <input
                    type="email"
                    placeholder="Email"
                    className="w-full rounded-md py-3 px-4 bg-gray-100 text-gray-800 text-sm outline-black focus:bg-transparent"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Subject"
                    className="w-full rounded-md py-3 px-4 bg-gray-100 text-gray-800 text-sm outline-black focus:bg-transparent"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                />
                <textarea
                    placeholder="Message"
                    rows="6"
                    className="w-full rounded-md px-4 bg-gray-100 text-gray-800 text-sm pt-3 outline-black focus:bg-transparent"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                ></textarea>
                <button
                    type="submit"
                    className="text-white bg-black hover:bg-gray-900 tracking-wide rounded-md text-sm px-4 py-3 w-full mt-6"
                >
                    Send
                </button>
            </form>
        </div>
    );
};

export default EmailFormComponent;
