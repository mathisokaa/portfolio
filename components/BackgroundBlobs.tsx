interface BackgroundBlobsProps {
  variant?: "default" | "reversed";
}

export default function BackgroundBlobs({ variant = "default" }: BackgroundBlobsProps) {
  const accentPos = variant === "default" ? "-top-[15%] right-0" : "top-[20%] -left-[5%]";
  const bluePos = variant === "default" ? "bottom-[-5%] -left-[5%]" : "bottom-[-10%] right-[-5%]";

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <div
        className={`absolute ${accentPos} h-[40vw] max-h-[420px] w-[40vw] max-w-[420px] rounded-full blur-[80px]`}
        style={{ backgroundColor: "rgba(255,92,0,0.16)" }}
      />
      <div
        className={`absolute ${bluePos} h-[30vw] max-h-[320px] w-[30vw] max-w-[320px] rounded-full blur-[70px]`}
        style={{ backgroundColor: "rgba(34,119,255,0.12)" }}
      />
    </div>
  );
}
