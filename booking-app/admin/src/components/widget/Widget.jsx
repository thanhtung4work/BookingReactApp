import "./widget.scss";

import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';

const Widget = ({ type }) => {
  let data = {
    title: type.toUpperCase(),
    linkText: "View all " + type,
  };

  return (
    <div className="widget">
      <div className="left">
        <span className="title">{data.title}</span>
        <span className="counter">69420</span>
        <span className="link">{data.linkText}</span>
      </div>
      <div className="right">
        <div className="percentage positive">
          <KeyboardArrowUpIcon />
          20%
        </div>

        <KeyboardDoubleArrowRightIcon className="icon"/>
      </div>
    </div>
  )
};

export default Widget;