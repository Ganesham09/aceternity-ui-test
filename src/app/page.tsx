import { BackgroundGradientAnimationDemo } from "@/app/components/BackgroundGradientAnimationDemo";
import { CoverDemo } from "./components/CoverDemo";

export default function Home() {
  return (
    <div className="flex flex-col">
      <div>
        <BackgroundGradientAnimationDemo />
      </div>
      <div>
        <CoverDemo />
      </div>
    </div>
  );
}
