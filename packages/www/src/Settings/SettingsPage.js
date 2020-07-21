import React from 'react';
import Styled from 'styled-components';
import gql from 'graphql-tag';
import PropTypes from 'prop-types';

import GotoSettingsButton from './GotoSettingsButton';

const SettingsPageStyled = Styled.div``;

export default function SettingsPage ({dupe}) {
  return (
    <SettingsPageStyled className="SettingsPage">
      Settings? {dupe}!
      <GotoSettingsButton />
    </SettingsPageStyled>
  );
}

SettingsPage.propTypes = {
  dupe: PropTypes.string
};

SettingsPage.query = function query ({count}) {
  return {
    query: gql`
      query dupe ($str: String!, $count: Int!) {
        dupe(str: $str, count: $count)
      }
    `,
    variables: {
      count: parseInt(count, 10),
      str: 'settings'
    }
  };
};
