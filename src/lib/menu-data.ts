import {
  BookOpen,
  FileText,
  Lightbulb,
  Video,
  BookMarked,
  Trophy,
  History,
  Download,
  GraduationCap,
  Target,
  ClipboardList,
  PenLine,
  Bell,
  Shield,
  MessageCircle,
  Sparkles,
  Bug,
  LucideIcon,
} from "lucide-react";

export interface MenuItem {
  name: string;
  href: string;
  icon: LucideIcon;
  description?: string;
}

export interface MenuCategory {
  name: string;
  icon: LucideIcon;
  description: string;
  items: MenuItem[];
}

export const menuCategories: MenuCategory[] = [
  {
    name: "Study Resources",
    icon: BookOpen,
    description: "Access comprehensive study materials, strategies, and learning resources to master the LSAT.",
    items: [
      {
        name: "LSAT Syllabus",
        href: "/resources/syllabus",
        icon: FileText,
        description: "Complete curriculum overview",
      },
      {
        name: "Question Types",
        href: "/resources/question-types",
        icon: Target,
        description: "Master every question type",
      },
      {
        name: "Strategy Tips",
        href: "/resources/strategies",
        icon: Lightbulb,
        description: "Proven test-taking strategies",
      },
      {
        name: "Video Library",
        href: "/resources/videos",
        icon: Video,
        description: "Visual learning resources",
      },
      {
        name: "Glossary",
        href: "/resources/glossary",
        icon: BookMarked,
        description: "LSAT terminology explained",
      },
    ],
  },
  {
    name: "Progress & Stats",
    icon: Trophy,
    description: "Track your achievements, review your study history, and export your progress data.",
    items: [
      {
        name: "Achievements",
        href: "/achievements",
        icon: Trophy,
        description: "Badges and milestones",
      },
      {
        name: "Study History",
        href: "/history",
        icon: History,
        description: "Your learning journey",
      },
      {
        name: "Export Data",
        href: "/settings/export",
        icon: Download,
        description: "Download your progress",
      },
    ],
  },
  {
    name: "Law School",
    icon: GraduationCap,
    description: "Research law schools, understand admission requirements, and manage your applications.",
    items: [
      {
        name: "School Rankings",
        href: "/law-schools/rankings",
        icon: GraduationCap,
        description: "T14 and beyond",
      },
      {
        name: "Score Requirements",
        href: "/law-schools/requirements",
        icon: Target,
        description: "LSAT/GPA targets",
      },
      {
        name: "Application Tracker",
        href: "/law-schools/tracker",
        icon: ClipboardList,
        description: "Track your applications",
      },
      {
        name: "Personal Statement",
        href: "/law-schools/personal-statement",
        icon: PenLine,
        description: "Writing tips and guides",
      },
    ],
  },
  {
    name: "Settings",
    icon: Shield,
    description: "Customize your notification preferences and manage your account privacy settings.",
    items: [
      {
        name: "Notifications",
        href: "/settings/notifications",
        icon: Bell,
        description: "Reminder preferences",
      },
      {
        name: "Data & Privacy",
        href: "/settings/privacy",
        icon: Shield,
        description: "Manage your data",
      },
    ],
  },
  {
    name: "Support",
    icon: MessageCircle,
    description: "Get help, suggest new features, or report issues with the application.",
    items: [
      {
        name: "Contact Support",
        href: "/support/contact",
        icon: MessageCircle,
        description: "Get help",
      },
      {
        name: "Feature Requests",
        href: "/support/feature-requests",
        icon: Sparkles,
        description: "Suggest improvements",
      },
      {
        name: "Report a Bug",
        href: "/support/bug-report",
        icon: Bug,
        description: "Report issues",
      },
    ],
  },
];
