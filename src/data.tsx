import { TitleSlide } from "./components/titleSlide";
import { Slide } from "./components/presentation/types";
import { PointedListSlide } from "./components/pointedListSlide";
import { GoodDesignLibrarySlide } from "./components/codeExamples/goodDesignLibraryApplication";
import { BadDesignLibrarySlide } from "./components/codeExamples/badDesignLibraryApplication";
import { VanillaVisualCard } from "./components/designAnalysis/vanilla";

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
            "Built-in accessiblity, cross browser support, mobile scaling",
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
    {
      title: "Prebuilt design system limitations",
      content: (
        <PointedListSlide
          leftList={[
            "Very married to the  base look and feel, animations, etc. 💍 ",
            "Can look generic without any changes, but more changes make it harder to maintain between versions",
            "If devs don't use the api correctly maintainability is hurt",
            "Styling system may not be compatible with your app out of the box (eg less vs sass vs styled components)",
          ]}
        />
      ),
    },
    {
      title: "Example of a bad modification",
      content: <BadDesignLibrarySlide />,
    },

    {
      title: "Example of a bad modification",
      content: <BadDesignLibrarySlide state={1} />,
    },
    {
      title: "Custom design system benefits",
      content: (
        <PointedListSlide
          leftList={[
            "As custom as you want",
            "Can tailor ui to your domain space",
            "Get to make all the decisions in terms of api/visual language/etc",
            "Can be a bit less generalized if only for internal use",
          ]}
        />
      ),
    },
    {
      title: "Custom design system cons",
      content: (
        <PointedListSlide
          leftList={[
            "Making even simple components look good in a variety of contexts (resolution, browser, device, etc.) is hard and time consuming",
            "We incur all the cost of documentation, api, and library updates",
            "HAVE to make all the decisions in terms of api/visual language/etc.",
            "Without dedicated repos/packages it's hard to gate modification",
            "A lot of overhead to get up and running and will incur tech debt until it is",
          ]}
        />
      ),
    },
    {
      title: "",
      content: (
        <TitleSlide
          title={"Visier Demo"}
          subTitle={
            <a
              href="https://www.visier.com/tour/visier-people/"
              target="_blank"
              rel="noreferrer"
            >
              Demo Site
            </a>
          }
        />
      ),
    },
    {
      title: "",
      content: (
        <TitleSlide title={"Design/Development Analsysis: Visual Cards"} />
      ),
    },

    {
      title: "The Original Visual Card",
      content: <VanillaVisualCard state={0} />,
    },

    {
      title: "The Original Visual Card",
      content: <VanillaVisualCard state={1} />,
    },

    {
      title: "The Original Visual Card",
      content: <VanillaVisualCard state={2} />,
    },

    {
      title: "The Original Visual Card",
      content: <VanillaVisualCard state={3} />,
    },

    {
      title: "The Original Visual Card",
      content: <VanillaVisualCard state={4} />,
    },
    {
      title: "Original Visual Card Overview",
      content: (
        <PointedListSlide
          leftList={[
            "Used pixel perfect positioning to achieve predictable and attractive layouts",
            "Any new variance in content required the creation of new magic pixel values to layout the content",
            "As new premutations were imagined this would cause the number of premutations to exponentially increase",
          ]}
        />
      ),
    },
  ];
}
