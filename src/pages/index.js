import React from 'react';
import PropTypes from 'prop-types';
import Layout from 'components/layout';
import Box from 'components/box';
import Title from 'components/title';
import HomeContainer from 'components/HomeContainer';
import Button from 'components/button';
import { graphql } from 'gatsby';

const Index = ({ data }) => (
  <Layout>
    <HomeContainer>
      <Box section="logo">
        <div
          style={{
            width: '50vw',
            height: '100%,',
            position: 'relative',
          }}
        >
          <svg
            style={{
              position: 'relative',
              top: '0',
              left: '0',
              right: '0',
              width: '100%',
            }}
            viewBox="0 0 607 74"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMinYMin meet"
          >
            <g fill="#FFF" fillRule="evenodd">
              <path
                d="M142.965 73.625c-9.785 0-17.1-5.605-17.1-18.81V22.99h11.495v30.495c0 7.505 3.135 10.925 9.785 10.925 6.175 0 11.59-3.99 11.59-11.875V22.99h11.495v49.685h-11.495v-7.79c-2.47 4.845-7.695 8.74-15.77 8.74zm40.85-.95V22.99h11.495v7.885c2.375-4.845 7.885-8.93 16.055-8.93 9.975 0 17.005 5.795 17.005 19.475v31.255h-11.495v-30.21c0-7.505-3.04-10.925-9.88-10.925-6.46 0-11.685 3.99-11.685 11.875v29.26h-11.495zm74.67.855c-9.88 0-15.01-5.32-15.01-14.725v-27.17h-6.65V22.99h6.65V12.065h11.495V22.99h10.925v8.645H254.97V57.76c0 4.37 2.09 6.365 5.7 6.365 2.28 0 3.99-.285 5.605-.95v9.12c-1.805.665-4.275 1.235-7.79 1.235zm40.375-8.835c8.55 0 13.68-6.365 13.68-16.53V47.5c0-10.26-5.13-16.53-13.68-16.53s-13.775 6.175-13.775 16.435v.76c0 10.165 5.035 16.53 13.775 16.53zm-.095 8.93c-14.63 0-25.46-10.165-25.46-25.27v-.76c0-15.39 10.925-25.65 25.555-25.65 14.535 0 25.46 10.165 25.46 25.365v.76c0 15.485-10.925 25.555-25.555 25.555zm52.535 0c-9.785 0-17.1-5.605-17.1-18.81V22.99h11.495v30.495c0 7.505 3.135 10.925 9.785 10.925 6.175 0 11.59-3.99 11.59-11.875V22.99h11.495v49.685H367.07v-7.79c-2.47 4.845-7.695 8.74-15.77 8.74zm62.605 0c-14.25 0-25.08-9.31-25.08-25.175v-.76c0-15.77 11.21-25.745 25.08-25.745 11.02 0 21.375 4.94 22.705 18.62h-11.115c-.95-6.65-5.32-9.405-11.4-9.405-7.885 0-13.49 6.08-13.49 16.34v.76c0 10.83 5.32 16.53 13.775 16.53 6.08 0 11.305-3.61 11.97-10.64h10.545c-.855 11.4-9.5 19.475-22.99 19.475zm32.87-.95V0h11.495v30.875c2.375-4.845 7.885-8.93 16.055-8.93 9.975 0 17.005 5.795 17.005 19.475v31.255h-11.495v-30.21c0-7.505-3.04-10.925-9.88-10.925-6.46 0-11.685 3.99-11.685 11.875v29.26h-11.495zm79.61.95c-14.63 0-25.175-9.595-25.175-25.27v-.76c0-15.39 10.545-25.65 24.7-25.65 12.35 0 23.465 7.315 23.465 25.08v3.325H512.99c.38 9.405 5.13 14.725 13.68 14.725 6.935 0 10.545-2.755 11.4-7.6h11.115c-1.615 10.45-10.07 16.15-22.8 16.15zm-13.205-30.97h24.795c-.57-8.55-4.94-12.35-12.065-12.35-6.935 0-11.59 4.655-12.73 12.35zm65.075 30.97c-12.445 0-21.85-8.835-21.85-24.985v-.76c0-15.865 9.405-25.935 22.325-25.935 8.075 0 13.11 3.705 15.865 8.645V0h11.495v72.675h-11.495v-8.36c-2.66 4.94-9.025 9.31-16.34 9.31zm2.85-9.12c7.98 0 13.87-5.32 13.87-16.435v-.76c0-10.925-5.035-16.34-13.395-16.34-8.455 0-13.395 5.89-13.395 16.625v.76c0 10.925 5.51 16.15 12.92 16.15z"
                fillRule="nonzero"
              />
              <path d="M50 55.224c0-11.144 1.16-15.185 3.34-19.26 2.178-4.074 5.375-7.271 9.45-9.45 4.073-2.179 8.114-3.339 19.258-3.339H100v17.951c0 11.144-1.16 15.185-3.34 19.26-2.178 4.074-5.375 7.271-9.45 9.45-4.073 2.179-8.114 3.339-19.258 3.339H32.05c-11.144 0-15.185-1.16-19.26-3.34-4.074-2.178-7.271-5.375-9.45-9.45C1.16 56.312 0 52.271 0 41.127V23.175h17.951c11.144 0 15.185 1.16 19.26 3.34 4.074 2.178 7.271 5.375 9.45 9.45C48.84 40.038 50 44.079 50 55.223v.001z" />
            </g>
          </svg>
        </div>
      </Box>
      <Box section="contact">
        <Title as="h1" size="large">
          {data.homeJson.contact.childMarkdownRemark.rawMarkdownBody}
        </Title>
        <Button link="mailto:info@untouched.studio">Book now</Button>
      </Box>

      <Box section="location">
        <a className="link" href="https://goo.gl/maps/B2UyJJbCtica6Fjx6">
          <Title as="h2" size="medium" >
            {data.homeJson.location.childMarkdownRemark.rawMarkdownBody}
          </Title>
        </a>
      </Box>
    </HomeContainer>
  </Layout>
);

Index.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Index;

export const query = graphql`
  query HomepageQuery {
    homeJson {
      title
      contact {
        childMarkdownRemark {
          html
          rawMarkdownBody
        }
      }
      about {
        childMarkdownRemark {
          html
          rawMarkdownBody
        }
      }
      location {
        childMarkdownRemark {
          html
          rawMarkdownBody
        }
      }
    }
  }
`;
