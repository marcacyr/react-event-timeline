'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var style = {

  container: {
    position: 'relative',
    fontSize: '80%',
    fontWeight: 300,
    padding: '10px 1px',
    width: '95%',
    margin: '0 auto'
  },
  containerBefore: {
    content: '',
    position: 'absolute',
    top: 0,
    left: 18,
    height: '100%',
    width: 2,
    background: '#CCCCCC'
  },
  containerAfter: {
    content: '',
    display: 'table',
    clear: 'both'
  },
  event: {
    position: 'relative',
    margin: '10px 0',
    paddingLeft: 45
  },
  eventAfter: {
    clear: 'both',
    content: '',
    display: 'table'
  },
  eventType: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: 0,
    left: 0,
    borderRadius: '50%',
    width: 30,
    height: 30,
    marginLeft: 3,
    background: '#FFF',
    border: '1px solid #CCCCCC'
  },
  materialIcons: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 32,
    height: 32,
    position: 'relative'
  },
  eventContainer: {
    position: 'relative'
  },
  eventContainerBefore: {
    top: 24,
    left: '100%',
    borderColor: 'transparent',
    borderLeftColor: '#ffffff'
  },
  time: {
    marginBottom: 3
  },
  message: {
    width: '98%',
    backgroundColor: '#ffffff',
    boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)',
    marginTop: '1em',
    marginBottom: '1em',
    lineHeight: 1.6,
    padding: '0.5em 1em'
  },
  messageAfter: {
    clear: 'both',
    content: '',
    display: 'table'
  },
  actionButtons: {
    float: 'right',
    textAlign: 'right',
    marginTop: -20
  },
  card: {
    boxShadow: 'rgba(0, 0, 0, 0.117647) 0px 1px 6px, rgba(0, 0, 0, 0.117647) 0px 1px 4px',
    backgroundColor: 'rgb(255, 255, 255)'
  },
  cardTitle: {
    backgroundColor: '#7BB1EA',
    padding: 10,
    color: '#fff'
  },
  cardBody: {
    backgroundColor: '#ffffff',
    marginBottom: '1em',
    lineHeight: 1.6,
    padding: 10,
    minHeight: 40
  },
  blipStyle: {
    position: 'absolute',
    top: '50%',
    marginTop: '9px'
  }
};

exports.default = style;