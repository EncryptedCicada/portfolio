import { title } from "@/components/primitives";
import Resume from "@/components/resume";

export default function ResumePage() {
  return (
    <div className="flex w-full">
      {/* <h1 className={title()}>Resume</h1> */}
      <Resume />
    </div>
  );
}
