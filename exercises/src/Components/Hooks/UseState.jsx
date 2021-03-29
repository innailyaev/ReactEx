import React, { useState } from 'react';
import "./Style.css";


const ReadMore = ({ children,maxLength}) => {
    const text = children;
    const [isReadMore, setIsReadMore] = useState(true);
    
    const toggleReadMore = () => {
      setIsReadMore(!isReadMore);
    };
    return (
      <p>
        {isReadMore ? text.slice(0, maxLength) : text}
        <span onClick={toggleReadMore} className="showHide">
          {isReadMore ? "...read more" : " show less"}
        </span>
      </p>
    );
  };
    
  const UseState = () => {
    return (
      <div className="container">
          <ReadMore maxLength={150}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos accusantium unde dolores repudiandae ab corporis expedita saepe ipsa perferendis. Temporibus, inventore nisi ratione animi quis saepe ad qui fuga voluptates accusantium odit maiores dolores voluptatem repudiandae consequatur neque eveniet quae sapiente. Corrupti temporibus culpa, tenetur magni obcaecati molestiae odit ullam, maiores sunt voluptate, enim at? Reprehenderit error laboriosam incidunt nihil quisquam itaque exercitationem sequi doloribus magni dignissimos qui, nemo placeat accusamus cumque atque rem fugiat voluptate, temporibus eos. Porro veniam sequi nam sapiente accusantium fugit. Laboriosam est animi culpa dolores vel voluptatem ipsam earum, veniam aut tenetur fuga quas pariatur?
          </ReadMore>
      </div>
    );
  };
    
export default UseState;