import React from 'react';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';

const BlogRow = ({ data }) => (
  <article className="blog-container">
    <header>
      <h2 className="blog">
        <h4><a href={data.link}>{data.title}</a></h4>
      </h2>
      <p className="date">{dayjs(data.date).format('D MMM YYYY')}</p>
    </header>
  </article>
);

BlogRow.propTypes = {
  data: PropTypes.shape({
    link: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
  }).isRequired,
};

export default BlogRow;
