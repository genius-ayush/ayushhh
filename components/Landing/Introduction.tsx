import { Globe, Mail, Phone, MapPin, Clock, User } from "lucide-react";
import Link from "next/link";

export default function Introduction() {
  return (
    <div className="max-w-6xl w-full rounded-2xl border 
      border-neutral-200 dark:border-neutral-800 
      mt-7 p-6 shadow-sm mb-7
      "
    >

      {/* Row 1 */}
      <div className="flex items-start gap-3 mb-3">
        <div className="mt-1">
          <User className="w-5 h-5 text-neutral-500 dark:text-neutral-400" />
        </div>
        <p className="font-medium text-neutral-800 dark:text-neutral-200">
          Full-Stack Developer <span className="font-semibold">@SquaredLabs</span>
        </p>
      </div>

      {/* Row 2 */}
      <div className="flex gap-52">
        <div className="flex items-center gap-3 mb-3">
          <MapPin className="w-5 h-5 text-neutral-500 dark:text-neutral-400" />
          <span className="text-neutral-700 dark:text-neutral-300">
            Indore, India
          </span>
        </div>

        <div className="flex items-center gap-3 mb-3">
          <Clock className="w-5 h-5 text-neutral-500 dark:text-neutral-400" />
          <span className="text-neutral-700 dark:text-neutral-300">
            03:36 <span className="text-neutral-400 dark:text-neutral-500">// 1h ahead</span>
          </span>
        </div>
      </div>

      {/* Row 3 */}
      <div className="flex gap-[200px]">
        <div className="flex items-center gap-3 mb-3">
          <Phone className="w-5 h-5 text-neutral-500 dark:text-neutral-400" />
          <span className="text-neutral-700 dark:text-neutral-300">
            +91 7999784071
          </span>
        </div>

        <div className="flex items-center gap-3 mb-3">
          <Mail className="w-5 h-5 text-neutral-500 dark:text-neutral-400" />
          <span className="text-neutral-700 dark:text-neutral-300">
            ayushsanjayrawal@gmail.com
          </span>
        </div>
      </div>

      {/* Row 4 */}
      <div className="flex gap-[226px]">
        <div className="flex items-center gap-3">
          <Globe className="w-5 h-5 text-neutral-500 dark:text-neutral-400" />
          <span className="text-neutral-700 dark:text-neutral-300">
            ayushhh.com
          </span>
        </div>

        <div className="flex items-center gap-3">
          <User className="w-5 h-5 text-neutral-500 dark:text-neutral-400 ml-auto" />
          <span className="text-neutral-700 dark:text-neutral-300">he/him</span>
        </div>
      </div>

    </div>
  );
}
