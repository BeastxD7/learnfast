import Link from "next/link";
import localFont from "next/font/local";
import { Poppins } from "next/font/google";
import { BadgeCheck } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const headingFont = localFont({
  src: "../../public/fonts/font.woff2"
});

const textFont = Poppins({
  subsets: ["latin"],
  weight: [
    "100",
    "200",
    "300",
    "400",
    "500",
    "600",
    "700",
    "800",
    "900"
  ],
});

const MarketingPage = () => {
  return (
    <div>
      <h1>Courses</h1>
    </div>
  );
};
export default MarketingPage;
