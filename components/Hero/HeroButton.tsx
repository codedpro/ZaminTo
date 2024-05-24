
import Link from "next/link";

const HeroButton: React.FC<{ buttonText: string; buttonLink: string }> = ({
  buttonText,
  buttonLink,
}) => {
  return (
    <Link
      href={buttonLink}
      className="inline-flex items-center px-4 py-2 bg-orange-500 text-white rounded-full text-base font-medium hover:bg-orange-700 z-20"
    >
      {" "}
      <svg
        className="ml-2 -mr-1 w-4 h-4"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M9 5l7 7-7 7"
        />
      </svg>
      {buttonText}
    </Link>
  );
};
export default HeroButton;
