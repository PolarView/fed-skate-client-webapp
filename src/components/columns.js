"use client";
import { ArrowUpDown, MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";

export const columns = (competitionCategory) => {
  if (competitionCategory === "men-park-result" || competitionCategory === "women-park-result") {
    return [
      {
        accessorKey: "id",
        header: ({ column }) => {
          return (
            <Button
              variant="ghost"
              onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
              ID
              <ArrowUpDown className="ml-2 h-4 w-4" />
            </Button>
          );
        }
      },
      {
        accessorKey: "name",
        header: "Name"
      },
      {
        accessorKey: "surname",
        header: "Surname"
      },
      {
        accessorKey: "score",
        header: ({ column }) => {
          return (
            <Button
              variant="ghost"
              onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
              Score
              <ArrowUpDown className="ml-2 h-4 w-4" />
            </Button>
          );
        }
      },
      {
        accessorKey: "score1",
        header: "Score1"
      },
      {
        accessorKey: "score2",
        header: "Score2"
      },
      {
        accessorKey: "score3",
        header: "Score3"
      },
      {
        accessorKey: "score5",
        header: "Score5"
      }
    ];
  } else if (
    competitionCategory === "men-street-results" ||
    competitionCategory === "women-street-results"
  ) {
    return [
      {
        accessorKey: "id",
        header: ({ column }) => {
          return (
            <Button
              variant="ghost"
              onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
              ID
              <ArrowUpDown className="ml-2 h-4 w-4" />
            </Button>
          );
        }
      },
      {
        accessorKey: "name",
        header: "Name"
      },
      {
        accessorKey: "surname",
        header: "Surname"
      },
      {
        accessorKey: "score",
        header: ({ column }) => {
          return (
            <Button
              variant="ghost"
              onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
              Score
              <ArrowUpDown className="ml-2 h-4 w-4" />
            </Button>
          );
        }
      },
      {
        accessorKey: "score1",
        header: "Score1"
      },
      {
        accessorKey: "score2",
        header: "Score2"
      },
      {
        accessorKey: "bestTrick1",
        header: "Best trick 1"
      },
      {
        accessorKey: "bestTrick2",
        header: "Best trick 2"
      },
      {
        accessorKey: "bestTrick3",
        header: "Best trick 3"
      },
      {
        accessorKey: "bestTrick4",
        header: "Best trick 4"
      },
      {
        accessorKey: "bestTrick5",
        header: "Best trick 5"
      }
    ];
  }
};
