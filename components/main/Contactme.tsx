"use client"
import React from 'react'
const ContactMe = () => {

    const [formData, setFormData] = React.useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }
    const handlesubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        try {
            const res = await fetch("/api/send", {
                method: "POST",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify(formData)
            })

            const result = await res.json()
            if (!res.ok) {
                console.error("Backend returned an error:", result);
                alert(`Failed to send email: ${result.error || "Unknown error from server"}`);
                return;
            }

            if (result.success !== false) {
                alert("Email sent successfully!");
                setFormData({
                    name: '', email: '', phone: '', message: ''
                })
            } else {
                alert(`Failed to send email: ${result.error || "No specific error message"}`);
            }
        } catch (err: unknown) {
            if (err instanceof Error) {
                console.error("Unexpected error during form submission:", err);
                alert(`Something went wrong: ${err.message}`);
            } else {
                console.error("Non-Error thrown:", err);
                alert("Something went wrong.");
            }
        }

    }
    return (
        <div className='relative flex flex-col items-center justify-center py-5 px-5' id="contact-me">
            <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
                Contact Me
            </h1>
            {/* main form */}

            <div className="relative card npmrounded-xl shadow-lg border border-[#2A0E61] text-white shadow-[#2A0E61]/40 hover:shadow-[0_0_25px_#7042f8] transition-shadow duration-500 w-full md:w-1/2 bg-[#0f0f1a]/50 backdrop-blur-lg p-6">
                <h3 className="text-[22px] z-30 font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 mb-6 text-center">
                    Send me a message — I’ll get back to you!
                </h3>
                <form onSubmit={handlesubmit} className="space-y-5 z-30">
                    <div className="relative">
                        <input
                            type="text"
                            name="name"
                            required
                            id="name"
                            value={formData.name} onChange={handleChange}
                            placeholder="Your Name"
                            className="w-full py-3 px-4 border border-gray-600 rounded-lg bg-gray-800/50 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                        />
                    </div>
                    <div className="relative">
                        <input
                            type="email"
                            name="email"
                            required
                            id="email"
                            value={formData.email} onChange={handleChange}
                            placeholder="Your Email"
                            className="w-full py-3 px-4 border border-gray-600 rounded-lg bg-gray-800/50 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                        />
                    </div>
                    <div className="relative">
                        <input
                            type="tel"
                            name="phone"
                            id="phone"
                            value={formData.phone} onChange={handleChange}
                            placeholder="Your Phone Number"
                            className="w-full py-3 px-4 border border-gray-600 rounded-lg bg-gray-800/50 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                        />
                    </div>
                    <div className="relative">
                        <textarea
                            name="message"
                            required
                            id="message"
                            value={formData.message} onChange={handleChange}
                            placeholder="Message"
                            className="w-full py-3 px-4 border border-gray-600 rounded-lg bg-gray-800/50 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 min-h-[120px]"
                        />
                    </div>
                    {/* <div className="text-center pt-4"> */}
                        <button
                            type="submit"
                            className="relative inline-block w-full md:w-auto px-6 py-3 font-semibold text-white bg-gradient-to-r from-purple-600 to-cyan-500 rounded-lg shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 z-50 cursor-pointer"
                        >
                            Send Message 🚀
                        </button>
                    {/* </div> */}
                </form>
            </div>
        </div>
    )
}

export default ContactMe
