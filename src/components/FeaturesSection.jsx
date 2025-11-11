import React from "react";

const features = [
  {
    title: "Progress Tracking",
    desc: "Track projects, manage assignments, and monitor your learning progress.",
    tag: "Progress Tracking",
    tagColor: "bg-blue-600",
    link: "Explore more →",
  },
  {
    title: "Real world Tasks",
    desc: "Real-world challenges that mirror industry expectations and build job-ready skills.",
    tag: "Real world Tasks",
    tagColor: "bg-purple-700",
    link: "Tasks →",
  },
  {
    title: "Peer Reviews",
    desc: "Give and receive constructive feedback to improve via collaborative learning.",
    tag: "Peer Reviews",
    tagColor: "bg-amber-600",
    link: "Code Reviews →",
  },
  {
    title: "Community",
    desc: "Get support from the community and TAs on Discord.",
    tag: "Community",
    tagColor: "bg-gray-700",
    link: "We write code →",
  },
  {
    title: "Trainings",
    desc: "Learn from industry experts in live cohorts.",
    tag: "Trainings",
    tagColor: "bg-yellow-700",
    link: "Start learning →",
  },
  {
    title: "Self Learning",
    desc: "We offer courses for you to learn on your own pace.",
    tag: "Self Learning",
    tagColor: "bg-blue-700",
    link: "Udemy →",
  },
  {
    title: "Writing",
    desc: "Technical writing shows your grip on tech-stack.",
    tag: "Writing",
    tagColor: "bg-purple-800",
    link: "Topics →",
  },
  {
    title: "Proof of work",
    desc: "Everything you create builds a public portfolio you can proudly share with employers.",
    tag: "Proof of work",
    tagColor: "bg-pink-700",
    link: "Learn in public →",
  },
  {
    title: "Peerlist Recommendation",
    desc: "Get recommended by peerlist.io for your portfolio and stand out from the crowd.",
    tag: "Peerlist Recommendation",
    tagColor: "bg-green-700",
    link: "Alumni Network →",
  },
];

const FeaturesSection = () => {
  return (
    <section className="w-full bg-[#0b0b0b] text-white py-16 px-6 sm:px-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((f, i) => (
          <div
            key={i}
            className="bg-[#121212] p-6 rounded-lg border border-[#222] hover:border-[#333] transition"
          >
            <span
              className={`inline-block px-3 py-1 text-sm font-semibold rounded-md ${f.tagColor}`}
            >
              {f.tag}
            </span>
            <h2 className="text-lg font-semibold mt-3 mb-2">{f.title}</h2>
            <p className="text-gray-400 text-sm mb-4">{f.desc}</p>
            <a
              href="#"
              className="text-gray-300 text-sm hover:text-white transition"
            >
              {f.link}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;
