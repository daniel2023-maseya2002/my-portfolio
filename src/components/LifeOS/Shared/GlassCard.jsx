// src/components/LifeOS/Shared/GlassCard.jsx
const GlassCard = ({ 
  children, 
  className = '', 
  hover = true,
  padding = 'p-6',
  noBorder = false
}) => {
  return (
    <div className={`
      relative rounded-2xl 
      bg-white/5 dark:bg-white/5 
      backdrop-blur-xl 
      ${!noBorder ? 'border border-slate-200/50 dark:border-white/10' : ''}
      ${padding}
      ${hover ? 'hover:border-teal-500/30 dark:hover:border-teal-500/30 transition-all duration-300 hover:shadow-2xl hover:shadow-teal-500/5' : ''}
      ${className}
    `}>
      {children}
    </div>
  );
};

export default GlassCard;