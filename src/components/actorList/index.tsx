import React from "react";
import { Grid } from "@mui/material";
import ActorCard from "../actorCard";

interface ActorListProps {
  actors: any[];
  action: (actor: any) => React.ReactNode;
}

const ActorList: React.FC<ActorListProps> = ({ actors, action }) => {
  return (
    <Grid container spacing={5}>
      {actors.map((actor) => (
        <Grid item key={actor.id} xs={12} sm={6} md={4} lg={3} xl={2}>
          <ActorCard key={actor.id} actor={actor} action={action} />
        </Grid>
      ))}
    </Grid>
  );
};

export default ActorList;
