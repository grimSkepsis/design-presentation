import { TitleSlide } from "./components/titleSlide";
import { Slide } from "./components/presentation/types";
import { PointedListSlide } from "./components/pointedListSlide";
import { GoodDesignLibrarySlide } from "./components/codeExamples/goodDesignLibraryApplication";
import { BadDesignLibrarySlide } from "./components/codeExamples/badDesignLibraryApplication";
import { VanillaVisualCard } from "./components/designAnalysis/vanilla";
import { NewExample } from "./components/designAnalysis/newExample";

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
      title: "Why use a prebuilt design system/library?",
      content: (
        <PointedListSlide
          leftList={[
            "Fills in low-level components so we can focus on workflows",
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
            "Tension between making changes to customize and preserving maintainability",
            "Styling system may not be compatible with your app out of the box",
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
            "Can tailor ui to your domain space",
            "Get to make all the decisions in terms of api/visual language/etc",
            "Can be a bit less generalized if only for internal use",
          ]}
        />
      ),
    },
    {
      title: "",
      content: (
        <TitleSlide
          title={"Example ui: Visier People"}
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
      title: "Custom design system cons",
      content: (
        <PointedListSlide
          leftList={[
            "Making even simple components look good in a variety of contexts is difficult",
            "We incur all the cost of documentation, api, and library updates",
            "Without dedicated repos/packages it's hard to gate modification",
            "A lot of overhead to get up and running",
          ]}
        />
      ),
    },

    {
      title: "",
      content: (
        <TitleSlide title={"Design/Development Analysis: Visual Cards"} />
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
            "Had a handful of polished variations",
            "Any new content we wanted to render would require a new suite of pixel values",
          ]}
        />
      ),
    },

    {
      title: "Modern Visual Cards",
      content: <NewExample state={0} />,
    },
    {
      title: "Modern Visual Cards",
      content: <NewExample state={1} />,
    },
    {
      title: "Modern Visual Cards",
      content: <NewExample state={2} />,
    },
    {
      title: "Modern Visual Cards",
      content: <NewExample state={3} />,
    },
    {
      title: "Modern Visual Cards",
      content: <NewExample state={4} />,
    },
    {
      title: "Modern Visual Cards",
      content: <NewExample state={5} />,
    },
    {
      title: "Modern Visual Cards",
      content: <NewExample state={6} />,
    },

    {
      title: "Modern Visual Cards",
      content: <NewExample state={7} />,
    },

    {
      title: "Modern Visual Card Overview",
      content: (
        <PointedListSlide
          leftList={[
            "Uses reflowable layout which can be less consistent but offers more support for variation",
            "Makes charts that require legends intelligible, saving the user from having to navigate to a more detailed screen",
            "As more and more varied card layouts are brainstormed we can be confident that we will be able to support them out of the box",
          ]}
        />
      ),
    },
    {
      title: "",
      content: <TitleSlide title={"FIN"} subTitle={"Questions?"} />,
    },
  ];
}
