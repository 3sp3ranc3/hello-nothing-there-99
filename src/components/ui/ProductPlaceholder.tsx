import { cn } from "@/lib/utils";

interface ProductPlaceholderProps {
  aspectRatio?: "3/4" | "1/1" | "4/3" | "16/9";
  className?: string;
  label?: string;
}

const ProductPlaceholder = ({ 
  aspectRatio = "3/4", 
  className,
  label 
}: ProductPlaceholderProps) => {
  const aspectClasses = {
    "3/4": "aspect-[3/4]",
    "1/1": "aspect-square",
    "4/3": "aspect-[4/3]",
    "16/9": "aspect-video",
  };

  return (
    <div 
      className={cn(
        "relative bg-muted-foreground/20 tempo-shadow overflow-hidden",
        aspectClasses[aspectRatio],
        className
      )}
    >
      {/* Concrete/Grey texture simulation */}
      <div className="absolute inset-0 bg-gradient-to-br from-muted-foreground/10 via-muted-foreground/20 to-muted-foreground/30" />
      
      {/* Subtle grid pattern */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `linear-gradient(90deg, transparent 49%, hsl(var(--foreground) / 0.05) 50%, transparent 51%),
                           linear-gradient(0deg, transparent 49%, hsl(var(--foreground) / 0.05) 50%, transparent 51%)`,
          backgroundSize: '40px 40px',
        }}
      />
      
      {label && (
        <div className="absolute bottom-4 left-4">
          <span className="tempo-spec text-foreground/40">{label}</span>
        </div>
      )}
    </div>
  );
};

export default ProductPlaceholder;
