"use client";

const GRADIENTS: Record<string, string> = {
  "gradient-red": "linear-gradient(135deg, #2A1014 0%, #3A1319 40%, #F0553A 150%)",
  "gradient-red-2": "linear-gradient(135deg, #1A0C0E 0%, #F0553A 180%)",
  "gradient-blue": "linear-gradient(135deg, #0D1220 0%, #131A33 40%, #5E77FF 150%)",
  "gradient-blue-2": "linear-gradient(135deg, #0A0E18 0%, #5E77FF 180%)",
  "gradient-purple": "linear-gradient(135deg, #150F22 0%, #241A3D 40%, #8C6BFF 150%)",
  "gradient-green": "linear-gradient(135deg, #0C1712 0%, #12241C 40%, #3ACF83 150%)",
};

export function CoverArt({ token, className }: { token: string; className?: string }) {
  const bg = GRADIENTS[token] ?? GRADIENTS["gradient-blue"];
  return (
    <div
      className={className}
      style={{
        backgroundImage: bg,
        backgroundSize: "180% 180%",
        backgroundPosition: "20% 20%",
      }}
    />
  );
}
