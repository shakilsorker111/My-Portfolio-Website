const projects = [
  {
    id: "1",
    name: "Matrimony",
    images: [
      "https://i.ibb.co.com/8n8SrYMm/Screenshot-2025-08-12-113434.png",
      "https://i.ibb.co.com/k2hyxNnF/Screenshot-2025-08-12-113513.png",
      "https://i.ibb.co.com/v6mnsRVH/Screenshot-2025-08-12-113637.png",
    ],
    description:
      "A full-featured matrimony platform built with the MERN stack to help individuals find life partners through secure biodata sharing, premium services, and success story management.",
    tech: [
      "React",
      "React Router",
      "Tailwind CSS",
      "TanStack Query",
      "Stripe Js",
      "Firebase",
      "JWT",
      "Node.js",
      "MongoDB",
    ],
    live: "https://matrimony-a0f98.web.app/",
    frontend: "https://github.com/shakilsorker111/assignment-12-client-for-show",
    backend: "https://github.com/shakilsorker111/assignment-12-server-for-show",
    challenges: [
      "Handling protected routes and JWT token validation",
      "Implementing MongoDB filtering and user-specific actions",
      "Firebase authentication integration with secure logout",
      "Implement Stripe.js for Payment Integration",
    ],
    improvements: [
      "Implement AI Categorize",
      "Improve mobile responsiveness for forms",
      "Implement Animation",
    ],
  },
  {
    id: "2",
    name: "Service",
    images: [
      "https://i.ibb.co/kVY4GQV9/Screenshot-2025-06-28-222400.png",
      "https://i.ibb.co/Q7MXdKjq/Screenshot-2025-06-28-222423.png",
      "https://i.ibb.co/xqcf2WtV/Screenshot-2025-06-28-222455.png",
    ],
    description:
      "A service review platform where users can add services, review others, and manage their own submissions.",
    tech: [
      "React",
      "React Router",
      "Tailwind CSS",
      "DaisyUI",
      "Firebase",
      "Node.js",
      "MongoDB",
    ],
    live: "https://service-review-6ce18.web.app/",
    frontend: "https://github.com/shakilsorker111/assignment-11-for-show",
    backend: "https://github.com/shakilsorker111/assignment-11-server-for-show",
    challenges: [
      "Handling protected routes and JWT token validation",
      "Implementing MongoDB filtering and user-specific actions",
      "Firebase authentication integration with secure logout",
    ],
    improvements: [
      "Add pagination to service listing",
      "Improve mobile responsiveness for review forms",
      "Implement admin approval for services",
    ],
  },
  {
    id: "3",
    name: "EduCamp",
    images: [
      "https://i.ibb.co/0Vn7VnPF/Screenshot-2025-06-29-001946.png",
      "https://i.ibb.co/j90BGLxt/Screenshot-2025-06-29-001959.png",
      "https://i.ibb.co/2YL2gHdn/Screenshot-2025-06-29-002038.png",
    ],
    description:
      "An online learning platform offering courses with Firebase authentication and real-time dashboard updates.",
    tech: ["React", "React Router", "Tailwind CSS", "DaisyUI", "Firebase"],
    live: "https://events-e2eef.web.app/",
    frontend: "https://github.com/shakilsorker111/assignment-9-for-show",
    challenges: [
      "Role-based route restriction (admin, instructor, student)",
      "Handling Firebase errors and user feedback on forms",
      "Building dynamic dashboards with conditional content",
    ],
    improvements: [
      "Add instructor verification system",
      "Allow students to rate courses",
      "Improve loading states for data fetches",
    ],
  },
  {
    id: "4",
    name: "Hobby",
    images: [
      "https://i.ibb.co/mCTTytBY/Screenshot-2025-06-28-214346.png",
      "https://i.ibb.co/PsPqtRPD/Screenshot-2025-06-28-214426.png",
      "https://i.ibb.co/NPKrVHD/Screenshot-2025-06-28-214402.png",
    ],
    description:
      "A hobby group platform for users to discover, join, or manage hobby-based communities with role-based access.",
    tech: [
      "React",
      "React Router",
      "Tailwind CSS",
      "DaisyUI",
      "Firebase",
      "Node.js",
      "MongoDB",
    ],
    live: "https://hobby-103c3.web.app/",
    frontend: "https://github.com/shakilsorker111/assignment-10-polish",
    backend:
      "https://github.com/shakilsorker111/assignment-10-polish-server-side",
    challenges: [
      "Creating an approval system for user-created groups",
      "Managing roles: admin, moderator, and member",
      "Synchronizing MongoDB data with real-time UI",
    ],
    improvements: [
      "Implement dark mode toggle",
      "Add notification system for group invites",
      "Improve group search/filter functionality",
    ],
  },
];

export default projects;
