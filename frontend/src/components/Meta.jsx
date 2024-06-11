import { Helmet } from 'react-helmet-async';

const Meta = ({
  title = 'MERN eCommerce',
  description = "A Thong Truong's MERN eCommerce study project",
  keywords = 'MERN, React, Redux, MongoDB, Express.js',
}) => (
  <Helmet>
    <title>{title}</title>
    <meta name='description' content={description} />
    <meta name='keywords' content={keywords} />
  </Helmet>
);

export default Meta;
