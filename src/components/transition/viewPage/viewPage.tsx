import { ViewPageProps } from "./model";

const ViewPage: React.FC<ViewPageProps> = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

export default ViewPage;
