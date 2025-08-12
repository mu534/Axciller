import { type FC, useState, useEffect, useRef } from "react";
import camera from "../images/camera.png";
import porto from "../images/porto.png";
import port1 from "../images/port1.jpg";
import port2 from "../images/port2.jpg";
import port3 from "../images/port3.jpg";
import port4 from "../images/port4.jpg";
import port5 from "../images/port5.jpg";
import port6 from "../images/port6.jpg";
import port7 from "../images/port7.jpg";
import video1 from "../videos/video1.mp4";
import video2 from "../videos/video2.mp4";
import video3 from "../videos/video3.mp4";

const Portfolio: FC = () => {
  const [activeTab, setActiveTab] = useState<"ALL" | "VIDEO" | "DESIGNED">(
    "ALL"
  );
  const [loading, setLoading] = useState(true);
  const videoRefs = useRef<HTMLVideoElement[]>([]); // track video elements

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const tabs = ["ALL", "VIDEO", "DESIGNED"] as const;

  const portfolioItems = [
    { id: 1, src: video3, category: "VIDEO" },
    { id: 2, src: port1, category: "DESIGNED" },
    { id: 3, src: port2, category: "DESIGNED" },
    { id: 4, src: port3, category: "DESIGNED" },
    { id: 5, src: port4, category: "DESIGNED" },
    { id: 6, src: port5, category: "DESIGNED" },
    { id: 7, src: port6, category: "DESIGNED" },
    { id: 8, src: port7, category: "DESIGNED" },
    { id: 9, src: porto, category: "DESIGNED" },
    { id: 10, src: video1, category: "VIDEO" },
    { id: 11, src: video2, category: "VIDEO" },
  ];

  const filteredItems =
    activeTab === "ALL"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeTab);

  const handlePlay = (index: number) => {
    videoRefs.current.forEach((video, i) => {
      if (video && i !== index) {
        video.pause();
      }
    });
  };

  return (
    <section>
      {/* 📷 Header */}
      <div
        className="h-64 bg-cover bg-center flex justify-center items-center"
        style={{ backgroundImage: `url(${camera})` }}
      >
        <div className="bg-white/80 border-2 border-black px-6 py-2">
          <h2 className="text-xl md:text-2xl font-bold text-gray-800 tracking-widest">
            PORTFOLIO
          </h2>
        </div>
      </div>

      {/* 🔗 Tabs */}
      <div className="bg-black flex justify-center gap-6 py-4">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => {
              setLoading(true);
              setActiveTab(tab);
              setTimeout(() => setLoading(false), 1000);
            }}
            className={`px-4 py-2 text-sm tracking-wide ${
              activeTab === tab
                ? "text-white border-b-2 border-white"
                : "text-gray-400 hover:text-white"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* 🖼️ Gallery */}
      <div className="bg-black py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-6xl mx-auto px-4">
          {loading
            ? Array.from({ length: 6 }).map((_, idx) => (
                <div
                  key={idx}
                  className="w-full h-64 bg-gray-700 animate-pulse rounded"
                ></div>
              ))
            : filteredItems.map((item, index) => (
                <div key={item.id}>
                  {item.category === "VIDEO" ? (
                    <video
                      controls
                      ref={(el) => {
                        if (el) videoRefs.current[index] = el;
                      }}
                      onPlay={() => handlePlay(index)}
                      src={item.src}
                      className="w-full h-64 object-cover"
                    />
                  ) : (
                    <img
                      src={item.src}
                      alt={`Portfolio item ${item.id} - ${item.category}`}
                      className="w-full h-64 object-cover"
                    />
                  )}
                </div>
              ))}
        </div>

        <p className="mt-8 text-center text-gray-400 italic">
          And many more to come!
        </p>
      </div>
    </section>
  );
};

export default Portfolio;
