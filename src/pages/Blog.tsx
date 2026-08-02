import { Link } from "react-router-dom";
import { PageShell } from "../components/PageShell";
import { posts } from "../data/site";
import { Card } from "../components/Card";
import { SectionEyebrow } from "../components/SectionEyebrow";
export function Blog() {
  return (
    <PageShell
      title="Healthcare AI Insights for Medical Practice Leaders"
      description="Healthcare AI insights for medical practice leaders from Jennifer Radu."
      heading="Healthcare AI Insights for Medical Practice Leaders"
    >
      <p className="section-intro">
        Short, practical guidance for leaders who need to make AI and patient
        experience decisions without adding more noise.
      </p>
      <div className="detail-grid">
        {posts.map((post) => (
          <Card key={post.title}>
            <SectionEyebrow>{post.category}</SectionEyebrow>
            <h3>{post.title}</h3>
            <p>{post.excerpt}</p>
            <small>{post.date}</small>
            {post.slug === "experience-instability-trap" && (
              <p>
                <Link to={`/blog/${post.slug}`}>Read the full article →</Link>
              </p>
            )}
            <p>
              <Link to="/newsletter">
                Get the next insight in The Practice Pulse™ →
              </Link>
            </p>
          </Card>
        ))}
      </div>
    </PageShell>
  );
}
