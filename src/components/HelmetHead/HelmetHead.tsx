import { Fragment } from "react";

export interface IHelmetHeadProps {
  title: string,
  description?: string
};

export const HelmetHead = (props: IHelmetHeadProps) => {
  return (
    <Fragment>
      <meta
        content={props.title}
        property="og:title"
      />
      <title>{props.title}</title>
      {props.description && <meta name="description" content={props.description} />}
    </Fragment>
  );
};

export default HelmetHead;
