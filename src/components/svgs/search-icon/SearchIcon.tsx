export const SearchIcon = ({ size = 16, color = "#697177" }) => {
    return (
        <svg fill="none" height={size} viewBox="0 0 24 24" width={size} >
            <path
                d="M11.5 21a9.5 9.5 0 1 0 0-19 9.5 9.5 0 0 0 0 19ZM22 22l-2-2"
                stroke={color}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
            />
        </svg>
    );
};