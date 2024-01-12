const PassedNumberPage = ({ passedList, convertToString }) => {
  return (
    <div className="container m-0">
      <div className="text-center row justify-content-around">
        <div className="col-12">
          <div className="card rounded-5 cardStyle">
            <div className="card-body">
              <h3 className="card-title">Passed Number : </h3>
              <div className="card-text">
                {passedList.length > 0
                  ? convertToString(passedList)
                  : "Not start yet."}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PassedNumberPage;
