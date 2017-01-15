
exports.xlarge = 25;
exports.large = 20;
exports.medium = 14;
exports.small = 12;
exports.mainColor = '#4A6CE2';
exports.darkBlue = "#3752B2"



const border = "1px solid rgb(200, 200, 200)";
exports.border = border;

const shadow = 'rgb(220, 220, 220) 0px 0px 2px';
exports.boxShadow = shadow;

exports.box = {
  border : border,
  padding: 15,
  boxShadow: shadow
}

exports.flexVertical = {
  display: 'flex',
  flexDirection:'column',
  justifyContent: 'center',
  alignItems:'center',
}

exports.flexHorizontal = {
  display: 'flex',
  flexDirection:'row',
  justifyContent: 'center',
  alignItems:'center',
}

exports.modal = {
  overlay : {
    zIndex: 100,
    position          : 'fixed',
    top               : 0,
    left              : 0,
    right             : 0,
    bottom            : 0,
    backgroundColor   : 'rgba(255, 255, 255, 0.75)'
  },
  content : {
    position                   : 'absolute',
    top                        : '40px',
    left                       : '40px',
    right                      : '40px',
    bottom                     : '40px',
    border                     : '1px solid #ccc',
    background                 : '#fff',
    overflow                   : 'auto',
    WebkitOverflowScrolling    : 'touch',
    borderRadius               : '4px',
    outline                    : 'none',
    padding                    : '20px'

  }
}
