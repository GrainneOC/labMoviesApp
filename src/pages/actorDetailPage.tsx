import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { getActorDetails } from "../api/tmdb-api";
import Spinner from "../components/spinner";
import { Card, CardContent, Typography, Avatar, Box, Grid } from "@mui/material";
import { ArrowBack } from "@mui/icons-material";
import { Link } from "react-router-dom";

const ActorDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { data: actor, error, isLoading, isError } = useQuery(
    ["actor", id],
    () => getActorDetails(id!)
  );

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{(error as Error).message}</h1>;
  }

  if (!actor) {
    return <h1>Actor not found</h1>;
  }

  return (
    <Box sx={{ marginTop: "150px", padding: 2 }}>
      <Link to="/actors" style={{ textDecoration: "none", color: "inherit" }}>
        <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
          <ArrowBack sx={{ mr: 1 }} />
          <Typography variant="h6">Back to Actors</Typography>
        </Box>
      </Link>
      
      <Card sx={{ maxWidth: 800, margin: "0 auto" }}>
        <CardContent>
          <Grid container spacing={3}>
            <Grid item xs={12} md={4}>
              <Avatar
                src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`}
                sx={{ width: 200, height: 200, margin: "0 auto", display: "block" }}
              />
            </Grid>
            <Grid item xs={12} md={8}>
              <Typography variant="h4" component="h1" gutterBottom>
                {actor.name}
              </Typography>
              
              {actor.birthday && (
                <Typography variant="body1" color="text.secondary" gutterBottom>
                  <strong>Birthday:</strong> {actor.birthday}
                </Typography>
              )}
              
              {actor.place_of_birth && (
                <Typography variant="body1" color="text.secondary" gutterBottom>
                  <strong>Place of Birth:</strong> {actor.place_of_birth}
                </Typography>
              )}
              
              {actor.biography && (
                <Box sx={{ mt: 2 }}>
                  <Typography variant="h6" gutterBottom>
                    Biography
                  </Typography>
                  <Typography variant="body1" paragraph>
                    {actor.biography}
                  </Typography>
                </Box>
              )}
              
              {actor.known_for_department && (
                <Typography variant="body1" color="text.secondary">
                  <strong>Known For:</strong> {actor.known_for_department}
                </Typography>
              )}
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Box>
  );
};

export default ActorDetailPage;
