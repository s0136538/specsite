import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { StaticRouter } from 'react-router-dom';

import Toolbar from '../index';

describe('<Toolbar />', () => {
  test('renders', () => {
    const fakeStore = {
      default: () => {},
      subscribe: () => {},
      dispatch: () => {},
      getState: () => ({ home: () => {} }),
    };

    const tree = renderer.create(
      <Provider store={fakeStore}>
        <StaticRouter location={''} context={{}}>
          <Toolbar />
        </StaticRouter>
      </Provider>,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
