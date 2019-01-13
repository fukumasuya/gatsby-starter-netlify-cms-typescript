import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent, HTMLContentProps, ContentProps } from '../components/Content'

interface AboutPageTemplateProps {
  title: string;
  content?: string;
  contentComponent?(props: HTMLContentProps | ContentProps): JSX.Element;
}

interface AboutPageProps {
  data: {
    markdownRemark: {
      html: string;
      frontmatter: {
        title: string;
      }
    }
  };
}

export const AboutPageTemplate = ({ title, content, contentComponent }: AboutPageTemplateProps) => {
  const PageContent = contentComponent || Content

  return (
    <section className="section section--gradient">
      <div className="container">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <div className="section">
              <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
                {title}
              </h2>
              <PageContent className="content" content={content} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

const AboutPage = ({ data }: AboutPageProps) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <AboutPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
      />
    </Layout>
  )
}

export default AboutPage

export const aboutPageQuery = graphql`
  query AboutPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`
