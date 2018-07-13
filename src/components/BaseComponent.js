import PropTypes from 'prop-types';
import classNames from 'classnames';

export const validSizes = (size) => (
    [
      'mini',
      'small',
      'large',
    ].indexOf(size) >= 0 ? size : ''
);
export const validVariations = (variation) => (
    [
      'primary',
      'secondary',
      'tertiary',
      'quaternary',
    ].indexOf(variation) >= 0 ? variation : 'primary'
);

export const publicProps = (props, filters) => {
    const _filters = ['propTypes', 'defaultProps'].concat(filters);
    const publicKeys = Object.keys(props).filter((item) => {
        for (var k of _filters) {
            if (item === k) {
                return false;
            }
        }
        return true;
      });
    const publicProps = {};
    publicKeys.forEach((k) => { if (props[k] !== undefined && props[k] !== null) publicProps[k] = props[k] });
    publicProps['className'] = classNames('metaui', validSizes(props.size), validVariations(props.variation), props.className)
    return publicProps;
}

const BaseComponent = () => {};

BaseComponent.propTypes = {
    id: PropTypes.string,
    className: PropTypes.string,
    size: PropTypes.string,
    variation: PropTypes.string,
};

BaseComponent.defaultProps = {
    id: null,
    className: null,
    size: null,
    variation: null,
};

export default BaseComponent;
