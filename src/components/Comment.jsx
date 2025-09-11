
export const Comment = () => {
  return (
    <>
      <div className="replay-box">
        <div className="row">
          <div className="col-sm-12">
            <h2>Leave a replay</h2>
            <div className="text-area">
              <div className="blank-arrow">
                <label>Your Name</label>
              </div>
              <span>*</span>
              <textarea name="message" rows={11} defaultValue={""} />
              <a className="btn btn-primary" href="">
                Post comment
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
