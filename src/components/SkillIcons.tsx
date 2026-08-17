import {
  DiDart,
  DiFirebase,
} from "react-icons/di";
import { FaGitAlt, FaCode } from "react-icons/fa";
import { IoLogoAndroid } from "react-icons/io5";
import { SiRazorpay, SiGooglemaps, SiFlutter } from "react-icons/si";
import type { IconType } from "react-icons";

type IconProps = {
  size?: number;
  className?: string;
};

const skillIconMap: Record<string, IconType> = {
  Dart: DiDart,
  Flutter: SiFlutter,
  Firebase: DiFirebase,
  "VS Code": FaCode,
  "Android Studio": IoLogoAndroid,
  Razorpay: SiRazorpay,
  "Google Maps": SiGooglemaps,
  GitHub: FaGitAlt,
  "GitHub Actions": FaGitAlt,
};

export function SkillIcon({ name, size = 16, className }: IconProps & { name: string }) {
  const IconComponent = skillIconMap[name];
  if (!IconComponent) return null;
  return <IconComponent size={size} className={className} />;
}
