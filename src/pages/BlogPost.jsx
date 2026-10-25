// src/pages/BlogPost.jsx
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import Container from '../components/layout/Container';

const BlogPost = () => {
  const { t } = useTranslation();
  const { slug } = useParams();
  return (
    <Container>
      <section className="py-16">
        <h1>{slug}</h1>
        <p className="mt-3 muted">
          {t('blogPost.contentComingSoon', 'Article content coming in a later phase.')}
        </p>
      </section>
    </Container>
  );
};

export default BlogPost;