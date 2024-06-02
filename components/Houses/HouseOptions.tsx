import React from "react";
import {
  FaCheckCircle,
  FaTimesCircle,
  FaKey,
  FaFileAlt,
  FaHammer,
  FaTree,
} from "react-icons/fa";

interface Props {
  options: Record<string, boolean>;
  optionsNames: Record<string, string>;
}

const iconMap: Record<string, JSX.Element> = {
  "پلاک یک": <FaKey className="text-primary text-2xl ml-2" />,
  "سند تک برگ": <FaFileAlt className="text-primary text-2xl ml-2" />,
  "مجوز ساخت": <FaHammer className="text-primary text-2xl ml-2" />,
  باغ: <FaTree className="text-primary text-2xl ml-2" />,
};

const HouseOptions: React.FC<Props> = ({ options, optionsNames }) => {
  return (
    <section className="p-6 rounded-lg  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 rtl">
      {Object.entries(optionsNames).map(([key, name]) => (
        <div
          key={key}
          className="flex items-center p-4 border rounded-lg shadow-md bg-white hover:bg-gray-100 transition duration-300 ease-in-out"
        >
          <div className="flex-shrink-0">
            {iconMap[name] ? (
              iconMap[name]
            ) : (
              <FaCheckCircle className="text-primary text-2xl ml-2" />
            )}
          </div>
          <div className="ml-4 flex-grow flex items-center justify-between">
            <span className="text-lg text-gray-800 ml-2">{name}</span>
            <div className="ml-2">
              {options[key] ? (
                <FaCheckCircle className="text-green-500 text-xl" />
              ) : (
                <FaTimesCircle className="text-red-500 text-xl" />
              )}
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default HouseOptions;
