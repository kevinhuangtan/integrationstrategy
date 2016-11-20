
exports.xlarge = 25;
exports.large = 20;
exports.medium = 14;
exports.small = 12;
exports.mainColor = '#4A6CE2';

exports.black = 'rgb(30,30,30)';
exports.buttonColor = "#BACFA1";
exports.gray = "rgb(180,180,180)";
exports.red = "#a23a3a";
exports.green = "#3A9B3A";
exports.offWhite = "#F9F9F9";
exports.blue = "#69ACD3";
exports.orange = "#E8652F";
exports.primaryColor = "#4A4A4A"
exports.secondaryColor = "#9F9F9F";
exports.lightBlue = "#4d71e2"
exports.purple = '#575D7E';



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
