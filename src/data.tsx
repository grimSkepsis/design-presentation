import { Slide } from "./components/presentation/types";

export function getSlides(): Slide[] {
  return [
    { title: "Design Presentation", content: <div>Mike Hofer</div> },
    { title: "Slide 2", content: <div>Mike Hofer</div> },
    { title: "Slide 3", content: <div>Mike Hofer</div> },
  ];
}
