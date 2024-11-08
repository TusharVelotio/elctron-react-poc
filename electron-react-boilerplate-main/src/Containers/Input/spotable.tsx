import kind from '@enact/core/kind';
import SpotlightRootDecorator from '@enact/spotlight/SpotlightRootDecorator';
import Spottable from '@enact/spotlight/Spottable';

const SpottableComponent = Spottable('div');

const MyApp = kind({
  name: 'MyApp',
  render: () => (
    <SpottableComponent>
      {' '}
      <div className="box">Enact Spotlight</div>{' '}
    </SpottableComponent>
  ),
});
const MySpotlightApp = SpotlightRootDecorator(MyApp);

export default MySpotlightApp;
