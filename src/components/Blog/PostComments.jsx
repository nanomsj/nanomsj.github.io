import React, { useEffect, useRef, useState } from 'react';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';

const serverURL = process.env.GATSBY_WALINE_SERVER_URL;
const isPreview = process.env.NODE_ENV === 'development';
const clientBase = 'https://unpkg.com/@waline/client@v3/dist';

const PostComments = ({ path }) => {
  const container = useRef(null);
  const [status, setStatus] = useState('loading');

  useEffect(() => {
    if (!serverURL) return undefined;

    let cancelled = false;
    let instance;
    setStatus('loading');

    import(/* webpackIgnore: true */ `${clientBase}/waline.js`)
      .then(({ init }) => {
        if (cancelled) return;
        instance = init({
          el: container.current,
          serverURL,
          path: isPreview ? `/preview${path}` : path,
          lang: 'en',
          login: 'disable',
          meta: ['nick'],
          requiredMeta: [],
          commentSorting: 'latest',
          noRss: true,
          search: false,
          locale: { nick: 'Nickname (optional)', placeholder: 'Leave a comment' },
          emoji: false,
          imageUploader: false,
        });
        setStatus('ready');
      })
      .catch(() => {
        if (!cancelled) setStatus('error');
      });

    return () => {
      cancelled = true;
      if (instance) instance.destroy();
    };
  }, [path]);

  if (!serverURL && !isPreview) return null;

  return (
    <section className="blog-comments" aria-labelledby="comments-title">
      <h2 id="comments-title">Comments</h2>
      {serverURL ? (
        <>
          <Helmet>
            <link rel="stylesheet" href={`${clientBase}/waline.css`} />
          </Helmet>
          {status === 'loading' && <p role="status">Loading comments…</p>}
          {status === 'error' && (
            <p role="status">Comments could not be loaded. Try refreshing the page.</p>
          )}
          <div ref={container} />
        </>
      ) : (
        <>
          <p>Preview only. Comments will open when the service is connected.</p>
          <fieldset className="blog-comments__preview" disabled>
            <label htmlFor="preview-nickname">
              Nickname (optional)
              <input id="preview-nickname" />
            </label>
            <label htmlFor="preview-comment">
              Comment
              <textarea id="preview-comment" rows="4" />
            </label>
            <button className="timeline__link" type="button">
              Post comment
            </button>
          </fieldset>
        </>
      )}
    </section>
  );
};

PostComments.propTypes = { path: PropTypes.string.isRequired };

export default PostComments;
