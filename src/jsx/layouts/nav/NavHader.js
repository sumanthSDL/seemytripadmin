import React, { Fragment, useContext, useState } from "react";
/// React router dom
import { Link } from "react-router-dom";
import { ThemeContext } from "../../../context/ThemeContext";
import logo from "../../../images/logo-full.png";

export function  NavMenuToggle(){
	setTimeout(()=>{	
		let mainwrapper = document.querySelector("#main-wrapper");
		if(mainwrapper.classList.contains('menu-toggle')){
			mainwrapper.classList.remove("menu-toggle");
		}else{
			mainwrapper.classList.add("menu-toggle");
		}
	},200);
}

const NavHader = () => {
  const [toggle, setToggle] = useState(false);
  const { navigationHader, openMenuToggle, background } = useContext(
    ThemeContext
  );
  return (
    <div className="nav-header">
      <Link to="/dashboard" className="brand-logo">
        {background.value === "dark" || navigationHader !== "color_1" ? (
			<Fragment>
				<svg className="logo-abbr" xmlns="http://www.w3.org/2000/svg" width="47.426" height="56.91" viewBox="0 0 47.426 56.91">
				  <g id="Group_25" data-name="Group 25" transform="translate(-56 -32)">
					<path id="hotel" d="M49.737,55.935a.948.948,0,0,1-.948.976h-5A3.794,3.794,0,0,1,40,53.116V34.146a3.794,3.794,0,0,1,3.794-3.794h4.98a.949.949,0,0,1,.949.949C49.717,49.164,49.687,54.3,49.737,55.935Zm-3.22-16.1a.949.949,0,1,0-1.9,0v4.031a.949.949,0,0,0,1.9,0Zm40.9-5.691v18.97a3.794,3.794,0,0,1-3.794,3.794h-5a.948.948,0,0,1-.948-.976c.05-1.634.019-6.76.018-24.633a.949.949,0,0,1,.949-.949h4.98A3.794,3.794,0,0,1,87.422,34.146ZM82.8,39.837a.949.949,0,1,0-1.9,0v4.031a.949.949,0,0,0,1.9,0ZM61.338,56.91H66.08a.949.949,0,0,0,.949-.949V47.07a.949.949,0,0,0-.949-.949H61.338a.949.949,0,0,0-.949.949v8.892A.949.949,0,0,0,61.338,56.91ZM75.8,20.63V55.962a.949.949,0,0,1-.949.949h-4.98a.949.949,0,0,1-.949-.949V45.172a.949.949,0,0,0-.949-.949H59.441a.949.949,0,0,0-.949.949V55.962a.949.949,0,0,1-.949.949h-4.98a.949.949,0,0,1-.949-.949V20.63a3.794,3.794,0,0,1,3.794-3.794h16.6A3.794,3.794,0,0,1,75.8,20.63ZM68.452,36.517a.949.949,0,0,0-.949-.949H59.915a.949.949,0,0,0,0,1.9H67.5A.948.948,0,0,0,68.452,36.517Zm1.66-9.129a.949.949,0,0,0-.949-.949H58.255a.949.949,0,1,0,0,1.9H69.163A.948.948,0,0,0,70.111,27.388Z" transform="translate(16.004 32)" fill="#135846"/>
					<path id="hotel-2" data-name="hotel" d="M70.2,5.874l-2.557,2.5.6,3.533a.949.949,0,0,1-.935,1.109c-.321,0-.154.043-3.6-1.776l-3.159,1.667a.95.95,0,0,1-1.378-1l.6-3.533-2.557-2.5a.949.949,0,0,1,.526-1.617l3.531-.515L62.858.529a.949.949,0,0,1,1.7,0l1.58,3.213,3.531.515A.949.949,0,0,1,70.2,5.874ZM53.812,10.728l-.112-.653c.439-.428.93-.772.715-1.435s-.82-.653-1.422-.741L52.7,7.3a.949.949,0,0,0-1.7,0l-.293.594c-.606.088-1.206.078-1.422.741s.279,1.011.715,1.435l-.112.653a.949.949,0,0,0,1.376,1l.587-.309c.6.316.732.417,1.028.417A.949.949,0,0,0,53.812,10.728Zm-8.3,4.743-.112-.653c.439-.428.93-.772.715-1.435s-.82-.653-1.422-.741l-.293-.594a.949.949,0,0,0-1.7,0l-.293.594c-.606.088-1.206.078-1.422.741s.279,1.011.715,1.435l-.112.653a.949.949,0,0,0,1.376,1l.587-.309c.6.316.732.417,1.028.417a.949.949,0,0,0,.935-1.109Zm32.02-4.743-.112-.653c.439-.428.93-.772.715-1.435s-.82-.653-1.422-.741c-.271-.55-.447-1.123-1.144-1.123s-.875.578-1.144,1.123l-.656.1a.949.949,0,0,0-.526,1.618l.475.463c-.1.6-.3,1.171.265,1.581s1.047.047,1.586-.236c.6.316.732.417,1.028.417a.949.949,0,0,0,.935-1.109Zm8.3,4.743-.112-.653c.439-.428.93-.772.715-1.435s-.82-.653-1.422-.741c-.271-.55-.447-1.123-1.144-1.123s-.875.578-1.144,1.123l-.656.1a.949.949,0,0,0-.526,1.618l.475.463c-.1.6-.3,1.171.265,1.581s1.047.047,1.586-.236c.6.316.732.417,1.028.417A.949.949,0,0,0,85.831,15.471Z" transform="translate(16.004 32)" fill="var(--primary)"/>
				  </g>
				</svg>
				<svg className="brand-title" xmlns="http://www.w3.org/2000/svg" width="143" height="46.359" viewBox="0 0 143 46.359">
				  <g id="Group_26" data-name="Group 26" transform="translate(-134 -40.641)">
					<text id="Hotel_Admin_Dashboard" data-name="Hotel Admin Dashboard" transform="translate(134 83)" fill="#5d5449" font-size="12" font-family="Poppins-Light, Poppins" font-weight="300"><tspan x="0" y="0">Hotel Admin Dashboard</tspan></text>
					<path id="Path_1948" data-name="Path 1948" d="M9.836,4.961a8.554,8.554,0,0,0,2.78-.574V8.579a11.32,11.32,0,0,1-2.214.713,12.526,12.526,0,0,1-2.464.213A5.382,5.382,0,0,1,3.761,8.087a6.357,6.357,0,0,1-1.28-4.361V-3.144H.466V-5.483L3.025-7.292l1.486-3.5H8.276v3.339h4.089v4.31H8.276V3.343Q8.276,4.961,9.836,4.961ZM25.589-7.748a8.321,8.321,0,0,1,1.427.118l.324.059-.515,5.428a8.461,8.461,0,0,0-1.956-.177,3.728,3.728,0,0,0-2.736.86,3.372,3.372,0,0,0-.853,2.479V9.212H15.528V-7.454h4.28l.9,2.662h.279a5.759,5.759,0,0,1,2.008-2.14A4.806,4.806,0,0,1,25.589-7.748ZM40.534,9.212l-1.1-2.206h-.118a6.55,6.55,0,0,1-2.368,1.971,7.822,7.822,0,0,1-3.118.53A4.892,4.892,0,0,1,30.12,8.094a5.508,5.508,0,0,1-1.353-3.972A4.518,4.518,0,0,1,30.62.158a10.133,10.133,0,0,1,5.369-1.464l2.78-.088v-.235a1.807,1.807,0,0,0-2.03-2.059,12.139,12.139,0,0,0-4.633,1.236l-1.662-3.8a15.987,15.987,0,0,1,7.355-1.5,7.146,7.146,0,0,1,4.964,1.589A5.682,5.682,0,0,1,44.52-1.717V9.212ZM36.268,5.446a2.594,2.594,0,0,0,1.787-.662A2.2,2.2,0,0,0,38.8,3.063V1.769l-1.324.059q-2.839.1-2.839,2.089Q34.636,5.446,36.268,5.446ZM52.8,9.212,46.447-7.454h6L55.273,2.4q.015.074.059.25t.088.419q.044.243.081.515a3.8,3.8,0,0,1,.037.507h.1a5.9,5.9,0,0,1,.265-1.662l2.957-9.885h5.987L58.494,9.212Zm19.784,0H66.834V-13.676h5.751Z" transform="translate(134 54.316)" fill="#212121"/>
				  </g>
				</svg>
			</Fragment>
        ) : (
			<Fragment>
		
				<img src={logo} style={{width:"200px"}}/>
			</Fragment>
        )}
      </Link>

      <div
        className="nav-control"
        onClick={() => {
          setToggle(!toggle);
          NavMenuToggle();
        }}
      >
        <div className={`hamburger ${toggle ? "is-active" : ""}`}>
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
        </div>
      </div>
    </div>
  );
};

export default NavHader;
