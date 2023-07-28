import React from "react";
import { connect } from "react-redux";
import { mapDispatchToProps, mapStateToProps } from "../viewConnectors/vcMain";
import { data } from "../constants/data";
import "./../style/main.css";
import LinkParser from "./LinkParser";

interface MainViewProps {
  readonly mainState: any;
  readonly onIncrimentClick: () => void;
  readonly onDecrimentClick: () => void;
}

class Main extends React.Component<MainViewProps> {
  componentDidMount() { }
  render() {
    return (
      <React.Fragment>
        <div className="question-answer-page">
          <h1>Question & Answer Page</h1>
          <div className="questions-container">
            {data.map((item, index) => (
              <div key={index} className="question-card">
                <div className="question">{item.question}</div>
                <div className="answer"><LinkParser text={item.answer} /></div>
              </div>
            ))}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);
