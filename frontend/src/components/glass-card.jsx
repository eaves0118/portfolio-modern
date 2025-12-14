import clsx from "clsx";

const GlassCard = ({ children, className }) => {
  return (
    <div
      className={clsx(
        "bg-white/10 backdrop-blur-md border border-white/20 shadow-lg",
        className
      )}
    >
      {children}
    </div>
  );
};

export default GlassCard;
