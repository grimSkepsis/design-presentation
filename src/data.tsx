import { TitleSlide } from "./components/titleSlide";
import { Slide } from "./components/presentation/types";
import { PointedListSlide } from "./components/presentation/pointedListSlide";
import { GoodDesignLibrarySlide } from "./components/presentation/codeExamples/goodDesignLibraryApplication";

export function getSlides(): Slide[] {
  return [
    {
      title: "",
      content: (
        <TitleSlide
          title={"Philosophy on design system application."}
          subTitle={"By Mike Hofer"}
        />
      ),
    },
    {
      title: "Table of contents",
      content: (
        <PointedListSlide
          leftList={[
            "Intro",
            "Table of Contents",
            "Approaches to applying design systems",
            "Indepth breakdown of VisualCard component",
            "Higher level overview of modular workflow design",
          ]}
        />
      ),
    },
    {
      title: "Why use a prebuilt design system/library?",
      content: (
        <PointedListSlide
          leftList={[
            "Allows quick development of workflow",
            "Fills in low-level niche components that have complicated specs but deliver low value/aren't widely used",
            "Built in accessiblity, cross browser support, mobile scaling",
            "Docs + importable design assets",
            "Provide a functional base we can apply our own aesthetic on top of",
          ]}
        />
      ),
    },

    {
      title: "Example applications:",
      content: <GoodDesignLibrarySlide />,
    },
  ];
}
