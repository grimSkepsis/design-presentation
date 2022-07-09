import { Typography } from "@mui/material";

type Props = {
  title: string;
  subTitle?: string;
};
export function TitleSlide({ title, subTitle }: Props) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
      }}
    >
      <Typography variant="h1" component="h1" gutterBottom>
        {title}
      </Typography>

      {subTitle && (
        <Typography variant="h3" component="h2" gutterBottom>
          {subTitle}
        </Typography>
      )}
    </div>
  );
}
