import React from "react";
import { ListEmpty, List, StyledTabSection, Title } from "./TabSectionStyle";
import Card from "../Card/Card";
import ButtonSubmit from "../../components/ButtonSubmit/ButtonSubmit";
import plus from "./img/plus.svg"


function TabSection(props) {
  return (
    <StyledTabSection>
      <Title>{props.title}
      {props.content === "appointments" ? 
      <ButtonSubmit>
      <img src={plus} alt="arrow"/>
      <span>Create an appointment</span>
      </ButtonSubmit > : null
    }
      </Title>


      {Object.keys(props.dataList).length ? (
        <List>
          {Object.values(props.dataList).map((listItem) => (
            <Card key={listItem.id} listItem={listItem} content={props.content} />
          ))}
        </List>
      ) : (
        <ListEmpty>
            You have no patients yet. <br />
            To create a patient profile, please contact your administrator.
         
        </ListEmpty>
      )}
    </StyledTabSection>
  );
}

export default TabSection;
