import React, { Component } from 'react'
import PropTypes from 'prop-types'
import s from './styles'

class TimelineEvent extends Component {
  mergeNotificationStyle(iconColor) {
    return iconColor ? { ...s.eventType, ...{ color: iconColor, borderColor: iconColor } } : s.eventType
  }

  mergeContentStyle(contentStyle) {
    const messageStyle = this.showAsCard() ? s.cardBody : s.message
    return contentStyle ? { ...messageStyle, ...contentStyle } : messageStyle
  }

  timeStyle() {
    return this.showAsCard() ? s.time : { ...s.time, color: '#303e49' }
  }

  showAsCard() {
    const { container } = this.props
    return container === 'card'
  }

  containerStyle() {
    const { style } = this.props
    const containerStyle = { ...s.eventContainer, ...style }
    return this.showAsCard() ? { ...containerStyle, ...s.card } : containerStyle
  }

  iconStyle(iconStyle) {
    return { ...s.materialIcons, iconStyle }
  }

  render() {
    const { createdAt, title, contentStyle, iconStyle, buttons, icon, iconColor, container, cardHeaderStyle, ...otherProps } = this.props
    return (
      <div style={s.event}>
        <div style={this.mergeNotificationStyle(iconColor)}>
          <span style={this.iconStyle(iconStyle)}>{icon}</span>
        </div>
        <div {...otherProps} style={this.containerStyle()}>
          <div style={s.eventContainerBefore} />
          <div style={container === 'card' ? { ...s.cardTitle, ...cardHeaderStyle } : {}}>
            <div style={this.timeStyle()}>{createdAt}</div>
            <div>{title}</div>
            <div style={s.actionButtons}>{buttons}</div>
          </div>
          {this.props.children &&
            <div style={this.mergeContentStyle(contentStyle)}>
              {this.props.children}
              <div style={s.messageAfter} />
            </div>}
        </div>
        <div style={s.eventAfter} />
      </div>
    )
  }
}

TimelineEvent.propTypes = {
  title: PropTypes.node,
  createdAt: PropTypes.node,
  children: PropTypes.node,
  buttons: PropTypes.node,
  container: PropTypes.string,
  icon: PropTypes.node,
  iconColor: PropTypes.string,
  iconStyle: PropTypes.object,
  contentStyle: PropTypes.object,
  cardHeaderStyle: PropTypes.object,
  style: PropTypes.object
}

TimelineEvent.defaultProps = {
  createdAt: '',
  iconStyle: {},
  contentStyle: {},
  cardHeaderStyle: {},
  style: {},
  title: ''
}

export default TimelineEvent
