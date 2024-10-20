import {
  ArrowDownIcon,
  ArrowRightIcon,
  ArrowUpIcon,
  CheckCircledIcon,
  CircleIcon,
  CrossCircledIcon,
  QuestionMarkCircledIcon,
  StopwatchIcon,
} from "@radix-ui/react-icons";

export const labels = [
  {
    value: "bug",
    label: "Feil",
  },
  {
    value: "feature",
    label: "Funksjon",
  },
  {
    value: "documentation",
    label: "Dokumentasjon",
  },
];

export const statuses = [
  {
    value: "godt_kjop",
    label: "Godt kjøp",
    icon: CheckCircledIcon,
  },
  {
    value: "darlig_kjop",
    label: "Dårlig kjøp",
    icon: CrossCircledIcon,
  },
];

export const priorities = [
  {
    label: "Lav",
    value: "low",
    icon: ArrowDownIcon,
  },
  {
    label: "Middels",
    value: "medium",
    icon: ArrowRightIcon,
  },
  {
    label: "Høy",
    value: "high",
    icon: ArrowUpIcon,
  },
];
