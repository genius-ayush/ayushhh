import { Globe, Mail, Phone, MapPin, Clock, User } from "lucide-react";
import { useEffect, useState } from "react";

export default function Introduction() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const formatted = new Intl.DateTimeFormat("en-IN", {
        hour: "2-digit",
        minute: "2-digit",
      }).format(now);
      setTime(formatted);
    };

    updateTime();
    const interval = setInterval(updateTime, 60 * 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="max-w-6xl w-full rounded-none border border-neutral-200 
      dark:border-neutral-800 mt-7 p-6 shadow-sm mb-7"
    >
      {/* Row 1 */}
      <div className="flex items-start gap-3 mb-3">
        <User className="w-5 h-5 text-neutral-500 dark:text-neutral-400 mt-[2px]" />
        <p className="font-medium text-neutral-800 dark:text-neutral-200 text-sm sm:text-base">
          Full-Stack Developer{" "}
          <span className="font-semibold">@SquaredLabs</span>
        </p>
      </div>

      {/* Row 2 */}
      <div className="flex flex-col sm:flex-row sm:justify-between gap-4 sm:gap-0 mb-3">
        <div className="flex items-center gap-3">
          <MapPin className="w-5 h-5 text-neutral-500 dark:text-neutral-400" />
          <span className="text-neutral-700 dark:text-neutral-300 text-sm sm:text-base">
            Indore, India
          </span>
        </div>

        <div className="flex items-center gap-3">
          <Clock className="w-5 h-5 text-neutral-500 dark:text-neutral-400" />
          <span className="text-neutral-700 dark:text-neutral-300 text-sm sm:text-base">
            {time}{" "}
            <span className="text-neutral-400 dark:text-neutral-500">// Local time</span>
          </span>
        </div>
      </div>

      {/* Row 3 */}
      <div className="flex flex-col sm:flex-row sm:justify-between gap-4 sm:gap-0 mb-3">
        <div className="flex items-center gap-3">
          <Phone className="w-5 h-5 text-neutral-500 dark:text-neutral-400" />
          <span className="text-neutral-700 dark:text-neutral-300 text-sm sm:text-base">
            +91 7999784071
          </span>
        </div>

        <div className="flex items-center gap-3">
          <Mail className="w-5 h-5 text-neutral-500 dark:text-neutral-400" />
          <span className="text-neutral-700 dark:text-neutral-300 text-sm sm:text-base">
            ayushsanjayrawal@gmail.com
          </span>
        </div>
      </div>

      {/* Row 4 */}
      <div className="flex flex-col sm:flex-row sm:justify-between gap-4 sm:gap-0">
        <div className="flex items-center gap-3">
          <Globe className="w-5 h-5 text-neutral-500 dark:text-neutral-400" />
          <span className="text-neutral-700 dark:text-neutral-300 text-sm sm:text-base">
            ayushhh.com
          </span>
        </div>

        <div className="flex items-center gap-3">
          <User className="w-5 h-5 text-neutral-500 dark:text-neutral-400" />
          <span className="text-neutral-700 dark:text-neutral-300 text-sm sm:text-base">
            he/him
          </span>
        </div>
      </div>
    </div>
  );
}
