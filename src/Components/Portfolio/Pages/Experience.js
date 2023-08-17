import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';


function Experience() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#3e497a">

      <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2017 - 2023"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Attendant operator of chemical plant
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            The Nilgiris
          </h4>
          <p>Worked for Indian OrdnanceFactory,CFA</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2020 - 2023"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
          B Com
          </h3>
          <p>   Bharathiyar University Distance Education Program</p>
        </VerticalTimelineElement>
        
        

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2023 - present"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
          Mern Stack Web Developent Internship
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Palakkad
          </h4>
          <p>
            At Softroniics Palakkad
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Experience;