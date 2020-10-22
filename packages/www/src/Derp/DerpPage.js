import React from 'react';
import Styled from 'styled-components';
import gql from 'graphql-tag';
import PropTypes from 'prop-types';

import GotoDerpButton from './GotoDerpButton';

const SettingsPageStyled = Styled.div``;

export default function SettingsPage ({data: {dupe}}) {
  return (
    <SettingsPageStyled className="SettingsPage">
      Derp? {dupe}!
      <GotoDerpButton />
    </SettingsPageStyled>
  );
}

SettingsPage.propTypes = {
  data: PropTypes.object
};

SettingsPage.query = function query ({params: {derp, count}}) {
  return {
    query: gql`
      query dupe ($str: String!, $count: Int!) {
        dupe(str: $str, count: $count)
      }
    `,
    variables: {
      count: parseInt(count, 10),
      str: derp
    }
  };
};
