import React from "react";

const Contact = () => {
  return (
    <div>
      <section id="contact" className="py-16 bg-base-200 rounded-2xl my-7">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold">Contact Me</h2>
          <p className="text-gray-600 mt-2">Feel free to reach out anytime</p>
        </div>

        <div className="max-w-xl mx-auto bg-base-100 p-8 rounded-xl shadow space-y-4 text-center">
          <p className="text-lg text-gray-700">
            You can reach me directly through the contact details below:
          </p>

          <div className="space-y-2 text-gray-800">
            <p>
              <strong>Email:</strong>{" "}
              <a
                href="mailto:shakilsorker111@gmail.com"
                className="text-primary underline"
              >
                shakilsorker111@gmail.com
              </a>
            </p>
            <p>
              <strong>Phone:</strong>{" "}
              <a href="tel:+8801648524713" className="text-primary underline">
                +8801648524713
              </a>
            </p>
            <p>
              <strong>WhatsApp:</strong>{" "}
              <a
                href="https://wa.me/8801648524713"
                target="_blank"
                rel="noreferrer"
                className="text-primary underline"
              >
                +8801648524713
              </a>
            </p>
          </div>

          <p className="text-gray-500 text-sm mt-4">
            I usually respond within 24 hours 🚀
          </p>
        </div>
      </section>
    </div>
  );
};

export default Contact;
