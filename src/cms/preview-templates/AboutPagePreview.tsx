import * as React from 'react'
import { AboutPageTemplate } from '../../templates/about-page'

interface Props {
  entry: {
    getIn: Function;
  };
  widgetFor: Function;
}

const AboutPagePreview = ({ entry, widgetFor }: Props) => (
  <AboutPageTemplate
    title={entry.getIn(['data', 'title'])}
    content={widgetFor('body')}
  />
)

export default AboutPagePreview
