"use client";

interface BorderButtonProps {
  children: React.ReactNode;
  className?: string;
  active?: boolean;
  onClick?: () => void;
}

export const BorderButton: React.FC<BorderButtonProps> = ({
  children,
  className = "",
  active = false,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className={`relative ${className} transform transition-transform duration-100 hover:scale-[1.02] active:scale-[0.98]`}
    >
      <div
        className={`absolute ${active ? "bg-black" : "bg-white"} rounded border-2 border-black h-[38px] w-full top-[5px] transition-colors duration-200`}
      />
      <div className="absolute bg-white rounded border-2 border-black h-[38px] w-full transition-transform duration-100 hover:translate-y-[1px] active:translate-y-[3px]">
        <div className="absolute top-0.5 h-0.5 bg-white left-[3px] right-[3px]" />
        <div className="mt-3 text-lg text-center text-white">{children}</div>
      </div>
    </button>
  );
};
