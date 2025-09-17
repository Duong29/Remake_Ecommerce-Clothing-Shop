
import { URL_AVATAR } from "../lib/api";
export const ListComment = ({ comments }) => {
  return (
    <>
      <div className="response-area">
        <h2>3 RESPONSES</h2>
        {comments.map((comment) => (
          <ul key={comment.id} className="media-list">
            <li className="media">
              <a className="pull-left" href="#">
                <img className="media-object" style={{width: '121px', height: '86px'}} src={`${URL_AVATAR}/${comment.image_user}`} alt="" />
              </a>
              <div className="media-body">
                <ul className="sinlge-post-meta">
                  <li>
                    <i className="fa fa-user" />
                    {comment.name_user}
                  </li>
                  <li>
                    <i className="fa fa-clock-o" /> 1:33 pm
                  </li>
                  <li>
                    <i className="fa fa-calendar" /> DEC 5, 2013
                  </li>
                </ul>
                <p>
                  {comment.comment}
                </p>
                <a className="btn btn-primary" href="">
                  <i className="fa fa-reply" />
                  Replay
                </a>
              </div>
            </li>
            {/* <li className="media second-media">
            <a className="pull-left" href="#">
              <img className="media-object" src={manThree} alt="" />
            </a>
            <div className="media-body">
              <ul className="sinlge-post-meta">
                <li>
                  <i className="fa fa-user" />
                  Janis Gallagher
                </li>
                <li>
                  <i className="fa fa-clock-o" /> 1:33 pm
                </li>
                <li>
                  <i className="fa fa-calendar" /> DEC 5, 2013
                </li>
              </ul>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
              <a className="btn btn-primary" href="">
                <i className="fa fa-reply" />
                Replay
              </a>
            </div>
          </li> */}
          </ul>
        ))}
      </div>
    </>
  );
};
