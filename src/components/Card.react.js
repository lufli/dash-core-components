import React, {Component}from 'react';
import PropTypes from 'prop-types';

export default class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {values: props.values};
  }

  render() {
    const { header, bodyStyle, children, style } = this.props;
    return (
      <div style={style} className="el-card">
        {
          header && <div className="el-card__header">{ header }</div>
        }
        <div className="el-card__body" style={ bodyStyle }>
          { children }
        </div>
      </div>
    )
  }
}

Card.propTypes = {
  header: PropTypes.string,
  bodyStyle: PropTypes.object
};